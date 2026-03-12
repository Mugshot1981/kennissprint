
import { courseCatalog, getCourseIdFromUrl } from "./data.js";

const courseId = getCourseIdFromUrl();
const activeCourse = courseCatalog.find((course) => course.id === courseId);

if (!activeCourse) {
  document.body.innerHTML = "Cursus niet gevonden.";
  throw new Error("Course not found: " + courseId);
}
const supabase = window.supabaseClient;
 
async function requireAuth() {
  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    window.location.href = "login.html";
    return null;
  }

  return data.user;
}

async function ensureProfile() {
  const user = await requireAuth();

  if (!user) return null;

  const { error } = await supabase
    .from("profiles")
    .upsert(
      {
        id: user.id
      },
      {
        onConflict: "id"
      }
    );

  if (error) {
    console.error("ensureProfile fout:", error);
    alert("Profiel aanmaken mislukt: " + error.message);
    return null;
  }

  return user;
}

async function requireCompleteProfile() {
  const user = await requireAuth();
  if (!user) return null;

  const { data: profile, error } = await supabase
    .from("profiles")
    .select("display_name")
    .eq("id", user.id)
    .maybeSingle();

  if (error) {
    console.error("Profielcontrole mislukt:", error);
    alert("Profielcontrole mislukt: " + error.message);
    return null;
  }

  const displayName = profile?.display_name?.trim();

  if (!displayName) {
    window.location.href = "profile.html";
    return null;
  }

  return {
    user,
    profile
  };
}

const authState = await requireCompleteProfile();
if (!authState) {
  throw new Error("Auth/profile gate blocked app startup.");
}

const currentUser = authState.user;
const currentProfile = authState.profile;

const greetingEl = document.getElementById("userGreeting");

if (greetingEl && currentProfile?.display_name) {
  greetingEl.textContent = "Hallo " + currentProfile.display_name;
  greetingEl.hidden = false;
}

// ===== ELEMENTEN =====

const chapterSelect = document.getElementById("chapterSelect");
const chapterTileGrid = document.getElementById("chapterTileGrid");
const chapterSelectionSummary = document.getElementById("chapterSelectionSummary");
const startButton = document.getElementById("startButton");
const quizArea = document.getElementById("quizArea");
const termDisplay = document.getElementById("termDisplay");
const questionLabel = document.getElementById("questionLabel");
const answersContainer = document.getElementById("answers");
const feedback = document.getElementById("feedback");
const nextButton = document.getElementById("nextButton");
const stopButton = document.getElementById("stopButton");
const quizSessionTitle = document.getElementById("quizSessionTitle");
const quizSessionMode = document.getElementById("quizSessionMode");

const endScreen = document.getElementById("endScreen");
const wrongCountText = document.getElementById("wrongCountText");
const finalScoreText = document.getElementById("finalScoreText");
const finalStars = document.getElementById("finalStars");
const restartButton = document.getElementById("restartButton");
const retryWrongButton = document.getElementById("retryWrongButton");
const backToCourseButton = document.getElementById("backToCourseButton");
const sessionResultsList = document.getElementById("sessionResultsList");
const modeSelect = document.getElementById("modeSelect");

const scoreCorrectEl = document.getElementById("scoreCorrect");
const scoreTotalEl = document.getElementById("scoreTotal");
const starsFill = document.getElementById("starsFill");

const questionNumberEl = document.getElementById("questionNumber");
const questionTotalEl = document.getElementById("questionTotal");
const progressFill = document.getElementById("progressFill");



const pageHeading = document.getElementById("pageHeading");
const pageIntro = document.getElementById("pageIntro");

const subjectSelect = document.getElementById("subjectSelect");
const levelSelect = document.getElementById("levelSelect");
const gradeSelect = document.getElementById("gradeSelect");


async function saveCardProgress(cardId, isCorrect) {
  const { data: userData, error: userError } = await supabase.auth.getUser();
  const user = userData?.user;

  if (userError || !user) {
    console.error("Geen gebruiker voor progress save:", userError);
    return null;
  }

  const { data: existing, error: readError } = await supabase
    .from("cards_progress")
    .select("user_id, card_id, level, correct_count, wrong_count, correct_streak, last_seen")
    .eq("user_id", user.id)
    .eq("card_id", String(cardId))
    .maybeSingle();

  if (readError) {
    console.error("cards_progress read fout:", readError);
    return null;
  }

  const currentCorrect = Number(existing?.correct_count || 0);
  const currentWrong = Number(existing?.wrong_count || 0);
  const currentLevel = Number(existing?.level || 0);
  const currentCorrectStreak = Number(existing?.correct_streak || 0);

  const nextCorrect = currentCorrect + (isCorrect ? 1 : 0);
  const nextWrong = currentWrong + (isCorrect ? 0 : 1);
  const nextCorrectStreak = isCorrect ? currentCorrectStreak + 1 : 0;

  const nextLevel = isCorrect
    ? Math.max(currentLevel, Math.min(nextCorrect, 4))
    : currentLevel;

  const payload = {
    user_id: user.id,
    card_id: String(cardId),
    level: nextLevel,
    correct_count: nextCorrect,
    wrong_count: nextWrong,
    correct_streak: nextCorrectStreak,
    last_seen: new Date().toISOString()
  };

  const { error: writeError } = await supabase
    .from("cards_progress")
    .upsert(payload, { onConflict: "user_id,card_id" });

  if (writeError) {
    console.error("cards_progress write fout:", writeError);
    return null;
  }

  progressMap[String(cardId)] = nextLevel;
  progressDetailMap[String(cardId)] = {
    level: nextLevel,
    correct_streak: nextCorrectStreak
  };

  return nextLevel;
}
// ===== STATUS =====

let currentChapterIds = [];
let currentChapterItems = [];
let sessionItems = [];
let remainingQuestions = [];
let currentQuestion = null;
let answered = false;


let scoreCorrect = 0;
let scoreTotal = 0;

// Resultaten van huidige sessie
let sessionResults = [];

// Fouten-trainer (alleen huidige sessie, geen opslag)
let wrongItems = [];

// quizmodi:
// "term-to-answer" = begrip -> kies beschrijving
// "answer-to-term" = beschrijving -> kies begrip
let quizMode = "answer-to-term";

// ===== HULPFUNCTIES =====
function isTypeCandidate(itemProgress) {
  return (
    itemProgress.level >= 4 &&
    itemProgress.correctStreak >= 3
  );
}

function getItemCardId(item) {
  if (item.id) return item.id;

  const rawKey =
    item.term ||
    item.question ||
    item.statement ||
    item.event ||
    item.name ||
    "unknown-item";

  return `${item.chapterId}__${rawKey}`
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function getSelectedChapterIds() {
  return Array.from(chapterSelect.selectedOptions).map(
    (option) => option.value
  );
}

function getAvailableItems(modeId) {
  const selectedChapterIds = getSelectedChapterIds();

  const mode = activeCourse.modes.find(
    (m) => m.id === modeId
  );

  if (!mode) return [];

  const datasetName = mode.dataset;
  const dataset = activeCourse.datasets?.[datasetName] || [];

  if (datasetName === "years") {
    return dataset
      .filter((item) => selectedChapterIds.includes(item.chapterId))
      .map((item) => ({
        ...item,
        prompt: item.year,
        answer: item.event
      }));
  }

  if (datasetName === "terms") {
    return dataset.filter((item) => {
      return selectedChapterIds.includes(item.chapterId) && item.type === "begrip";
    });
  }

  return dataset.filter((item) =>
    selectedChapterIds.includes(item.chapterId)
  );
}
function getItemLevel(item) {
  const cardId = getItemCardId(item);
  return progressMap[cardId] || 0;
}

function isTypedRecallCandidate(item) {
  const cardId = getItemCardId(item);
  const level = progressMap[cardId] || 0;
  const streak = progressDetailMap[cardId]?.correct_streak || 0;

  return level >= 4 && streak >= 3;
}

function getLearningBucket(item) {
  const level = getItemLevel(item);

  if (level === 0) return "new";
  if (level <= 2) return "training";
  if (level === 3) return "almost-mastered";
  if (isTypedRecallCandidate(item)) return "typed-recall";
  return "mastered";
}
 
function getChapterMasteryLevel(chapterId) {
  const allDatasets = Object.values(activeCourse.datasets || {}).flat();

  const chapterItems = allDatasets.filter((item) => item.chapterId === chapterId);

  if (chapterItems.length === 0) {
    return 0;
  }

  const levels = chapterItems.map((item) => getItemLevel(item));
  const avgLevel =
    levels.reduce((sum, level) => sum + level, 0) / levels.length;

  if (avgLevel >= 3) return 4;
  if (avgLevel >= 2.25) return 3;
  if (avgLevel >= 1.5) return 2;
  if (avgLevel >= 0.5) return 1;
  return 0;
}

function getChapterMasteryBar(chapterId) {
  const allDatasets = Object.values(activeCourse.datasets || {}).flat();

  const chapterItems = allDatasets.filter((item) => item.chapterId === chapterId);

  if (chapterItems.length === 0) {
    return "#e5e7eb";
  }

  const counts = {
    gray: 0,
    green: 0,
    blue: 0,
    purple: 0,
    orange: 0
  };

  chapterItems.forEach((item) => {
    const level = getItemLevel(item);

    if (level === 0) counts.gray++;
    else if (level <= 2) counts.green++;
    else if (level === 3) counts.blue++;
    else if (level === 4) counts.purple++;
    else counts.orange++;
  });

  const total = chapterItems.length;

  const grayPct = (counts.gray / total) * 100;
  const greenPct = (counts.green / total) * 100;
  const bluePct = (counts.blue / total) * 100;
  const purplePct = (counts.purple / total) * 100;
  const orangePct = (counts.orange / total) * 100;

  const s1 = grayPct;
  const s2 = s1 + greenPct;
  const s3 = s2 + bluePct;
  const s4 = s3 + purplePct;
  const s5 = s4 + orangePct;

  return `linear-gradient(to right,
    #e5e7eb 0% ${s1}%,
    #22c55e ${s1}% ${s2}%,
    #3b82f6 ${s2}% ${s3}%,
    #8b5cf6 ${s3}% ${s4}%,
    #f59e0b ${s4}% ${s5}%)`;
}

function getRecommendedSessionItems(items, limit = 10) {
  // Groepeer items per hoofdstuk
  const chapterMap = new Map();

  items.forEach((item) => {
    const chapterId = item.chapterId || item.chapter || "default";
    if (!chapterMap.has(chapterId)) {
      chapterMap.set(chapterId, []);
    }
    chapterMap.get(chapterId).push(item);
  });

  const chapterIds = Array.from(chapterMap.keys());
  const chapterCount = chapterIds.length;

  // Hoeveel vragen per hoofdstuk
  const perChapter = Math.max(1, Math.floor(limit / chapterCount));

  let selected = [];

  chapterIds.forEach((chapterId) => {
    const chapterItems = chapterMap.get(chapterId);

    const chapterSelection = getRecommendedSessionItemsSingleChapter(
      chapterItems,
      perChapter
    );

    selected = selected.concat(chapterSelection);
  });

  // Als we nog plekken over hebben → aanvullen uit alles
  if (selected.length < limit) {
    const remaining = items.filter(
      (item) => !selected.includes(item)
    );

    const extra = shuffleArray(remaining).slice(0, limit - selected.length);
    selected = selected.concat(extra);
  }

  // Maximaal 1 typed-recall kandidaat in de sessie injecteren
  const typedCandidates = shuffleArray(
    items.filter((item) => isTypedRecallCandidate(item))
  );

  if (typedCandidates.length > 0) {
    const typedItem = typedCandidates[0];
    const typedCardId = getItemCardId(typedItem);

    const alreadyIncluded = selected.some(
      (item) => getItemCardId(item) === typedCardId
    );

    if (!alreadyIncluded) {
      if (selected.length >= limit) {
        const replaceIndex = selected.findIndex(
          (item) => getLearningBucket(item) === "new"
        );

        if (replaceIndex >= 0) {
          selected.splice(replaceIndex, 1, typedItem);
        } else {
          selected[selected.length - 1] = typedItem;
        }
      } else {
        selected.push(typedItem);
      }
    }
  }

  return shuffleArray(selected).slice(0, limit);
}

  function getRecommendedSessionItemsSingleChapter(items, limit) {
  const newItems = [];
  const trainingItems = [];
  const almostMasteredItems = [];

  items.forEach((item) => {
    const bucket = getLearningBucket(item);

    if (bucket === "new") {
      newItems.push(item);
    } else if (bucket === "training") {
      trainingItems.push(item);
    } else if (bucket === "almost-mastered") {
      almostMasteredItems.push(item);
    }
  });

  const shuffledNew = shuffleArray(newItems);
  const shuffledTraining = shuffleArray(trainingItems);
  const shuffledAlmost = shuffleArray(almostMasteredItems);

  const targetTraining = Math.min(Math.round(limit * 0.4), shuffledTraining.length);
  const targetNew = Math.min(Math.round(limit * 0.4), shuffledNew.length);
  const targetAlmost = Math.min(limit - targetTraining - targetNew, shuffledAlmost.length);

  const selected = [
    ...shuffledTraining.slice(0, targetTraining),
    ...shuffledNew.slice(0, targetNew),
    ...shuffledAlmost.slice(0, targetAlmost)
  ];

  const fallbackPool = shuffleArray([
    ...shuffledTraining.slice(targetTraining),
    ...shuffledNew.slice(targetNew),
    ...shuffledAlmost.slice(targetAlmost)
  ]);

  for (const item of fallbackPool) {
    if (selected.length >= limit) break;
    selected.push(item);
  }

  return selected.slice(0, limit);
}



function getTileTitle(title) {

  let cleaned = title;

  // "Hoofdstuk X – " verwijderen
  cleaned = cleaned.replace(/^Hoofdstuk\s+\d+\s+–\s+/i, "");

  // jaartallen verwijderen
  cleaned = cleaned.replace(/\d{4}\s*-\s*\d{4}/g, "");
  cleaned = cleaned.replace(/\d{4}\s*-\s*nu/g, "");

  // "en dekolonisatie" inkorten
  cleaned = cleaned.replace(/\sen\sdekolonisatie/i, "");

  // spaties opschonen
  cleaned = cleaned.replace(/\s+/g, " ").trim();

  return cleaned;
}

function shuffleArray(array) {
  const copy = [...array];

  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy;
}

function getCourseTerms(course) {
  if (course?.datasets?.terms) return course.datasets.terms;
  return course?.items || [];
}

function getCourseYears(course) {
  if (course?.datasets?.years) return course.datasets.years;
  return course?.years || [];
}

function getModeConfig(modeId) {
  const fallbackConfigs = {
    "term-to-answer": {
      questionLabel: "Begrip",
      sessionModeLabel: "Begrip → beschrijving",
      questionField: "prompt",
      answerField: "answer",
      dataset: "terms"
    },
    "answer-to-term": {
      questionLabel: "Beschrijving",
      sessionModeLabel: "Beschrijving → begrip",
      questionField: "answer",
      answerField: "prompt",
      dataset: "terms"
    },
    "years": {
      questionLabel: "Jaartal",
      sessionModeLabel: "Jaartal → gebeurtenis",
      questionField: "prompt",
      answerField: "answer",
      dataset: "years"
    },
    "event-years": {
      questionLabel: "Gebeurtenis",
      sessionModeLabel: "Gebeurtenis → jaartal",
      questionField: "answer",
      answerField: "prompt",
      dataset: "years"
    },
    "person-to-description": {
      questionLabel: "Persoon",
      sessionModeLabel: "Persoon → beschrijving",
      questionField: "name",
      answerField: "description",
      dataset: "persons"
    },
    "description-to-person": {
      questionLabel: "Beschrijving",
      sessionModeLabel: "Beschrijving → persoon",
      questionField: "description",
      answerField: "name",
      dataset: "persons"
    }
  };

  const fallback = fallbackConfigs[modeId] || {
    questionLabel: "Vraag",
    sessionModeLabel: modeId,
    questionField: "prompt",
    answerField: "answer",
    dataset: "terms"
  };

  const courseMode = activeCourse?.modes?.find((mode) => mode.id === modeId);

  if (!courseMode) {
    return fallback;
  }

  return {
    ...fallback,
    ...courseMode,
    questionLabel: courseMode.questionLabel || fallback.questionLabel,
    sessionModeLabel:
      courseMode.sessionModeLabel || courseMode.label || fallback.sessionModeLabel,
    questionField: courseMode.questionField || fallback.questionField,
    answerField: courseMode.answerField || fallback.answerField,
    dataset: courseMode.dataset || fallback.dataset
  };
}

function getQuestionParts(correctItem, quizMode, currentChapterItems) {
  const config = getModeConfig(quizMode);

  const questionField = config.questionField || "prompt";
  const answerField = config.answerField || "answer";

  const questionText = correctItem[questionField];
  const correctOptionText = correctItem[answerField];

  const wrongOptionPool = currentChapterItems
    .filter((item) => item.id !== correctItem.id)
    .map((item) => item[answerField])
    .filter((value) => value !== undefined && value !== correctOptionText);

  return {
    questionText,
    correctOptionText,
    wrongOptionPool
  };
}

function getStarsText() {
  if (scoreTotal === 0) {
    return "☆☆☆☆☆";
  }

  const percent = scoreCorrect / scoreTotal;
  let stars = 0;

  if (percent >= 0.9) stars = 5;
  else if (percent >= 0.75) stars = 4;
  else if (percent >= 0.6) stars = 3;
  else if (percent >= 0.4) stars = 2;
  else if (percent >= 0.2) stars = 1;
  else stars = 0;

  return "★★★★★".slice(0, stars) + "☆☆☆☆☆".slice(0, 5 - stars);
}

function updateScoreDisplay() {

  if (scoreCorrectEl) scoreCorrectEl.textContent = scoreCorrect;
  if (scoreTotalEl) scoreTotalEl.textContent = scoreTotal;

  const totalQuestions = sessionItems.length || currentChapterItems.length || 1;

  // sterren progress
  const starProgress = scoreCorrect / totalQuestions;
  if (starsFill) starsFill.style.width = `${starProgress * 100}%`;

  // vraagnummer
  if (questionNumberEl) questionNumberEl.textContent = scoreTotal;
  if (questionTotalEl) questionTotalEl.textContent = totalQuestions;

  // progressbar
  const percent = scoreTotal / totalQuestions;
  if (progressFill) progressFill.style.width = `${percent * 100}%`;

}

function getMasteryClass(level) {
  if (level >= 5) return "term-mastery-perfect";
  if (level >= 4) return "term-mastery-mastered";
  if (level >= 3) return "term-mastery-good";
  if (level >= 1) return "term-mastery-training";
  return "term-mastery-new";
}

function showEndScreen() {
  answersContainer.innerHTML = "";
  feedback.textContent = "";
  feedback.className = "feedback";
  feedback.style.display = "none";
  nextButton.classList.add("hidden");

  finalScoreText.textContent = `${scoreCorrect} / ${scoreTotal}`;
  finalStars.textContent = getStarsText();

  if (wrongItems.length > 0) {
    wrongCountText.textContent = `Je had ${wrongItems.length} fout${wrongItems.length === 1 ? "" : "en"}.`;
    retryWrongButton.classList.remove("hidden");
  } else {
    wrongCountText.textContent = "Alles goed gemaakt.";
    retryWrongButton.classList.add("hidden");
  }

  if (sessionResultsList) {
    sessionResultsList.innerHTML = sessionResults.map((result) => {
      const termText =
        result.item?.prompt ||
        result.item?.term ||
        result.item?.name ||
        result.cardId ||
        "Onbekend begrip";

      return `
        <div class="session-result-item ${result.correct ? "is-correct" : "is-wrong"}">
          <span class="session-result-delta">
            ${result.correct ? "▲ +1" : "▼ -1"}
          </span>
            <strong class="session-result-term ${getMasteryClass(progressMap[result.cardId] || 0)}">
            ${termText}
          </strong>
        </div>
      `;
    }).join("");
  }

  endScreen.classList.remove("hidden");
}

function getItemsForChapters(chapterIds) {
  const activeMode = activeCourse.modes.find((mode) => mode.id === quizMode);

  if (!activeMode) {
    return [];
  }

  const datasetName = activeMode.dataset;
  const dataset = activeCourse.datasets?.[datasetName] || [];

  if (datasetName === "years") {
    return dataset
      .filter((item) => chapterIds.includes(item.chapterId))
      .map((item) => ({
        id: item.id,
        chapterId: item.chapterId,
        prompt: item.year,
        answer: item.event
      }));
  }

  if (datasetName === "terms") {
    return dataset.filter((item) => {
      return chapterIds.includes(item.chapterId) && item.type === "begrip";
    });
  }

  return dataset.filter((item) => chapterIds.includes(item.chapterId));
}


// ===== HOOFDSTUKKEN LADEN =====

function getQuestionCountForSelection(selectedChapterIds, modeId) {
  const activeMode = activeCourse.modes.find((mode) => mode.id === modeId);

  if (!activeMode) {
    return 0;
  }

  const datasetName = activeMode.dataset;
  const dataset = activeCourse.datasets?.[datasetName] || [];

  if (datasetName === "terms") {
    return dataset.filter((item) => {
      return selectedChapterIds.includes(item.chapterId) && item.type === "begrip";
    }).length;
  }

  return dataset.filter((item) => {
    return selectedChapterIds.includes(item.chapterId);
  }).length;
}

function updateChapterSelectionSummary() {
  if (!chapterSelectionSummary) return;

  const selectedChapterIds = Array.from(chapterSelect.selectedOptions).map(
    (option) => option.value
  );

  const selectedCount = selectedChapterIds.length;
  const currentModeId = modeSelect ? modeSelect.value : quizMode;
  const questionCount = getQuestionCountForSelection(selectedChapterIds, currentModeId);

  if (selectedCount === 0) {
    chapterSelectionSummary.textContent = "Nog geen hoofdstukken geselecteerd.";
    return;
  }

  const chapterLabel = selectedCount === 1 ? "hoofdstuk" : "hoofdstukken";
  const questionLabel = questionCount === 1 ? "vraag" : "vragen";

  chapterSelectionSummary.textContent =
    `${selectedCount} ${chapterLabel} geselecteerd · ${questionCount} ${questionLabel} beschikbaar`;
}

function syncChapterTilesFromSelect() {
  const selectedIds = Array.from(chapterSelect.selectedOptions).map(
    (option) => option.value
  );

  Array.from(chapterTileGrid.children).forEach((tile) => {
    const isSelected = selectedIds.includes(tile.dataset.chapterId);

    tile.classList.toggle("selected", isSelected);
    tile.setAttribute("aria-pressed", isSelected ? "true" : "false");
  });

  updateChapterSelectionSummary();
}

function updateChapterSelectorView() {
  const useListView = activeCourse.chapters.length > 10;

  if (chapterTileGrid) {
    chapterTileGrid.style.display = "grid";
    chapterTileGrid.classList.toggle("chapter-list-mode", useListView);

    chapterTileGrid.style.gridTemplateColumns = useListView
      ? "1fr"
      : "repeat(auto-fit, minmax(160px, 1fr))";

    chapterTileGrid.style.maxHeight = useListView ? "320px" : "";
    chapterTileGrid.style.overflowY = useListView ? "auto" : "";
    chapterTileGrid.style.gap = useListView ? "10px" : "";
  }

  if (chapterSelect) {
    chapterSelect.style.display = "none";
    chapterSelect.multiple = true;
    chapterSelect.size = 0;
  }
}

function loadChapters() {
  chapterSelect.innerHTML = "";
  chapterTileGrid.innerHTML = "";

  if (activeCourse.chapters.length > 8) {
    chapterTileGrid.classList.add("compact");
  } else {
    chapterTileGrid.classList.remove("compact");
  }

  activeCourse.chapters.forEach((chapter) => {
    const option = document.createElement("option");
    option.value = chapter.id;
    option.textContent = chapter.title;
    chapterSelect.appendChild(option);

 const tile = document.createElement("button");
tile.type = "button";

const masteryLevel = getChapterMasteryLevel(chapter.id);
const masteryBar = getChapterMasteryBar(chapter.id);

tile.className = `chapter-tile chapter-mastery-${masteryLevel}`;
tile.dataset.chapterId = chapter.id;
tile.textContent = getTileTitle(chapter.title);
tile.style.setProperty("--chapter-mastery-bar", masteryBar);

    tile.addEventListener("click", () => {
      const optionToToggle = Array.from(chapterSelect.options).find(
        (option) => option.value === chapter.id
      );

      if (!optionToToggle) return;

      optionToToggle.selected = !optionToToggle.selected;
      syncChapterTilesFromSelect();
      chapterSelect.dispatchEvent(new Event("change"));
    });

    chapterTileGrid.appendChild(tile);
  });

  syncChapterTilesFromSelect();
  updateChapterSelectorView();
}
// ===== VRAAG OPBOUWEN =====

let progressMap = {};
let progressDetailMap = {};

async function loadProgressMap() {
  const { data: userData } = await supabase.auth.getUser();
  const user = userData?.user;
  if (!user) return;

  const { data, error } = await supabase
    .from("cards_progress")
    .select("card_id, level, correct_streak")
    .eq("user_id", user.id);

  if (error) {
    console.error("Progress ophalen mislukt:", error);
    return;
  }

  progressMap = {};
  progressDetailMap = {};

  data.forEach((row) => {
    progressMap[row.card_id] = row.level || 0;
    progressDetailMap[row.card_id] = {
      level: row.level || 0,
      correct_streak: row.correct_streak || 0
    };
  });
}

function buildQuestion() {
  console.log("buildQuestion start", {
    remainingQuestions: remainingQuestions.length,
    currentChapterItems: currentChapterItems.length,
    sessionItems: sessionItems.length
  });

  feedback.textContent = "";
  feedback.className = "feedback";
  feedback.style.display = "none";
  answersContainer.innerHTML = "";
  nextButton.classList.add("hidden");
  answered = false;

  if (remainingQuestions.length === 0) {
    showEndScreen();
    return;
  }

  const correctItem = remainingQuestions.pop();
  console.log("correctItem", correctItem);

  if (questionLabel) {
    questionLabel.textContent = getModeConfig(quizMode).questionLabel;
  }

  const {
    questionText,
    correctOptionText,
    wrongOptionPool
  } = getQuestionParts(correctItem, quizMode, currentChapterItems);

  console.log("questionParts", {
    questionText,
    correctOptionText,
    wrongOptionPoolLength: wrongOptionPool.length
  });

  const uniqueWrongOptions = [...new Set(wrongOptionPool)];
  const shuffledWrongOptions = shuffleArray(uniqueWrongOptions).slice(0, 3);

  const options = shuffleArray([
    {
      text: correctOptionText,
      isCorrect: true
    },
    ...shuffledWrongOptions.map((optionText) => ({
      text: optionText,
      isCorrect: false
    }))
  ]);

  currentQuestion = {
    id: correctItem.id,
    cardId: getItemCardId(correctItem),
    item: correctItem,
    prompt: questionText,
    answer: correctItem.answer,
    correctTerm: correctItem.prompt,
    correctAnswer: correctItem.answer,
    options: options
  };

  renderQuestion();
}


// ===== VRAAG TONEN =====

function renderQuestion() {
  termDisplay.textContent = currentQuestion.prompt || "";

  const promptBox = document.querySelector(".prompt-box");

  promptBox.classList.remove(
    "mastery-gray",
    "mastery-green",
    "mastery-blue",
    "mastery-purple"
  );

   const level = progressMap[currentQuestion.cardId] || 0;

  if (level === 0) {
    promptBox.classList.add("mastery-gray");
  } else if (level <= 2) {
    promptBox.classList.add("mastery-green");
  } else if (level === 3) {
    promptBox.classList.add("mastery-blue");
  } else {
    promptBox.classList.add("mastery-purple");
  }

  const masterySegments = document.querySelectorAll("#masterySegments .mastery-segment");
  const filledCount = Math.max(0, Math.min(level, 4));

  masterySegments.forEach((segment, index) => {
    segment.classList.toggle("is-filled", index < filledCount);
  });

  currentQuestion.options.forEach((option) => {
    const button = document.createElement("button");
    button.className = "answer";
    button.textContent = option.text;

    button.addEventListener("click", () => handleAnswer(button, option));

    answersContainer.appendChild(button);
  });
}

// ===== ANTWOORD AFHANDELEN =====

async function handleAnswer(clickedButton, selectedOption) {
  if (answered) {
    return;
  }

  answered = true;
  scoreTotal++;

  const allButtons = document.querySelectorAll(".answer");

  allButtons.forEach((button) => {
    button.disabled = true;
  });

  if (selectedOption.isCorrect) {

    const nextLevel = await saveCardProgress(currentQuestion.cardId, true);

    sessionResults.push({
      cardId: currentQuestion.cardId,
      item: currentQuestion.item,
      correct: true
    });

    clickedButton.classList.add("correct");
    scoreCorrect++;
    feedback.textContent = "GOED!";
    feedback.className = "feedback show good";
    feedback.style.display = "block";

    updateScoreDisplay();

    const promptBox = document.querySelector(".prompt-box");
    const masterySegments = document.querySelectorAll("#masterySegments .mastery-segment");
    const level = Math.max(0, Math.min(nextLevel ?? 0, 4));

    promptBox.classList.remove(
      "mastery-gray",
      "mastery-green",
      "mastery-blue",
      "mastery-purple"
    );

    if (level === 0) {
      promptBox.classList.add("mastery-gray");
    } else if (level <= 2) {
      promptBox.classList.add("mastery-green");
    } else if (level === 3) {
      promptBox.classList.add("mastery-blue");
    } else {
      promptBox.classList.add("mastery-purple");
    }

    masterySegments.forEach((segment, index) => {
      segment.classList.toggle("is-filled", index < level);
    });

    setTimeout(() => {
      buildQuestion();
    }, 900);

  } else {
     await saveCardProgress(currentQuestion.cardId, false);

    sessionResults.push({
      cardId: currentQuestion.cardId,
      item: currentQuestion.item,
      correct: false
    });

    clickedButton.classList.add("wrong");
    allButtons.forEach((button, index) => {
      const option = currentQuestion.options[index];
      if (option.isCorrect) {
        button.classList.add("correct");
      }
    });

feedback.innerHTML = `
  <div class="feedback-title">FOUT</div>
  <div class="feedback-term">${currentQuestion.prompt}</div>
  <div class="feedback-answer-box">${currentQuestion.answer}</div>
  <button id="feedbackContinueButton" class="feedback-continue-button">Verder</button>
`;
    feedback.className = "feedback show bad";
feedback.style.display = "block";

// backdrop toevoegen
const backdrop = document.createElement("div");
backdrop.className = "modal-backdrop";
backdrop.id = "feedbackBackdrop";
document.body.appendChild(backdrop);
    feedback.style.display = "block";

    const wrongItem = currentChapterItems.find((item) => item.id === currentQuestion.id);

    if (wrongItem && !wrongItems.some((item) => item.id === wrongItem.id)) {
      wrongItems.push(wrongItem);
    }

    updateScoreDisplay();
  }
}

function updateStartButtonState() {
  if (!startButton) return;

  const selectedChapterIds = Array.from(chapterSelect.selectedOptions).map(
    (option) => option.value
  );

  const currentModeId = modeSelect ? modeSelect.value : quizMode;
  const questionCount = getQuestionCountForSelection(selectedChapterIds, currentModeId);

  updateChapterSelectionSummary();

  if (selectedChapterIds.length === 0) {
    startButton.disabled = false;
    startButton.textContent = "Start aanbevolen sessie";
    return;
  }

  const activeMode = activeCourse.modes.find((mode) => mode.id === currentModeId);

  if (!activeMode) {
    startButton.disabled = true;
    startButton.textContent = "Geen oefenvorm beschikbaar";
    return;
  }

  if (questionCount < 4) {
    startButton.disabled = true;
    startButton.textContent = "Nog geen vragen beschikbaar";
    return;
  }
  startButton.disabled = false;
  startButton.textContent = "Start aanbevolen sessie";
}
// ===== QUIZ STARTEN =====
startButton.addEventListener("click", () => {
  console.log("START CLICK");
  const selectedChapterIds = Array.from(chapterSelect.selectedOptions).map(
    (option) => option.value
  );

  if (selectedChapterIds.length === 0) {
    alert("Kies eerst één of meer hoofdstukken");
    return;
  }

   currentChapterIds = selectedChapterIds;
  quizMode = modeSelect.value;
  currentChapterItems = getAvailableItems(quizMode);
  console.log("currentChapterItems", currentChapterItems.length, currentChapterItems);

  const selectedChapters = activeCourse.chapters.filter((chapter) =>
    currentChapterIds.includes(chapter.id)
  );

  quizSessionTitle.textContent =
    selectedChapters.length === 1
      ? selectedChapters[0].title
      : `${selectedChapters.length} hoofdstukken geselecteerd`;

  quizSessionMode.textContent = getModeConfig(quizMode).sessionModeLabel;

  if (!currentChapterItems || currentChapterItems.length < 4) {
    alert("De selectie moet minimaal 4 vragen bevatten.");
    return;
  }

  sessionItems = getRecommendedSessionItems(currentChapterItems, 10);
  remainingQuestions = shuffleArray([...sessionItems]);
  console.log("sessionItems", sessionItems.length, sessionItems);
  console.log("remainingQuestions", remainingQuestions.length, remainingQuestions);

   scoreCorrect = 0;
  scoreTotal = 0;
  sessionResults = [];
  wrongItems = [];
  updateScoreDisplay();

  endScreen.classList.add("hidden");
  quizArea.classList.remove("hidden");
  document.body.classList.add("quiz-active");
  buildQuestion();
});

// ===== VOLGENDE VRAAG =====

// ===== VERDER-KNOP IN FOUTPOPUP =====

feedback.addEventListener("click", (event) => {
  if (event.target && event.target.id === "feedbackContinueButton") {
  document.body.classList.remove("blur-background");
  // backdrop verwijderen
const backdrop = document.getElementById("feedbackBackdrop");
if (backdrop) backdrop.remove();

buildQuestion();
}
});


// ===== FOUTEN OPNIEUW OEFENEN =====

if (retryWrongButton) {
  retryWrongButton.addEventListener("click", () => {
    currentChapterItems = [...wrongItems];
    sessionItems = [...wrongItems];
    remainingQuestions = shuffleArray([...wrongItems]);
    scoreCorrect = 0;
    scoreTotal = 0;
    sessionResults = [];
    wrongItems = [];
    updateScoreDisplay();

    endScreen.classList.add("hidden");
    buildQuestion();
  });
}

if (restartButton) {
  
  restartButton.addEventListener("click", () => {
      currentChapterItems = getAvailableItems(quizMode);

      sessionItems = getRecommendedSessionItems(currentChapterItems, 10);
    remainingQuestions = shuffleArray([...sessionItems]);
     scoreCorrect = 0;
    scoreTotal = 0;
    sessionResults = [];
    wrongItems = [];
    updateScoreDisplay();

    endScreen.classList.add("hidden");
    buildQuestion();
  });
}

function closeQuizSession() {
  document.body.classList.remove("quiz-active");

  quizArea.classList.add("hidden");
  endScreen.classList.add("hidden");

  answersContainer.innerHTML = "";
  feedback.textContent = "";
  feedback.className = "feedback";
  feedback.style.display = "none";

  const backdrop = document.getElementById("feedbackBackdrop");
  if (backdrop) backdrop.remove();
}

if (stopButton) {
  stopButton.addEventListener("click", () => {
    closeQuizSession();
  });
}

if (backToCourseButton) {
  backToCourseButton.addEventListener("click", () => {
    closeQuizSession();
  });
}


// ===== INIT =====

function applyActiveCourseToPage() {
  if (pageHeading) {
    pageHeading.textContent = activeCourse.title;
  }

  document.title = `${activeCourse.title} | KennisSprint`;

  if (pageIntro) {
    pageIntro.textContent = `Oefen ${activeCourse.subject} voor ${activeCourse.level} ${activeCourse.grade} per hoofdstuk met multiple choice.`;
  }
}

function getUniqueValues(key, courses = courseCatalog) {
  const values = courses.map((course) => course[key]);
  return [...new Set(values)];
}

function populateSelect(selectElement, values, selectedValue = "") {
  if (!selectElement) return;

  const placeholderText = selectElement.dataset.placeholder || "Kies";
  selectElement.innerHTML = "";

  const placeholderOption = document.createElement("option");
  placeholderOption.value = "";
  placeholderOption.textContent = placeholderText;
  selectElement.appendChild(placeholderOption);

  values.forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;

    if (value === selectedValue) {
      option.selected = true;
    }

    selectElement.appendChild(option);
  });
}

function getCoursesBySubject(subject) {
  return courseCatalog.filter((course) => course.subject === subject);
}

function getCoursesBySubjectAndLevel(subject, level) {
  return courseCatalog.filter(
    (course) => course.subject === subject && course.level === level
  );
}

function findCourse(subject, level, grade) {
  return courseCatalog.find(
    (course) =>
      course.subject === subject &&
      course.level === level &&
      course.grade === grade
  );
}

function initCourseSelectors() {
  populateSelect(subjectSelect, getUniqueValues("subject"), activeCourse.subject);

  const coursesForSubject = getCoursesBySubject(activeCourse.subject);
  populateSelect(levelSelect, getUniqueValues("level", coursesForSubject), activeCourse.level);

  const coursesForSubjectAndLevel = getCoursesBySubjectAndLevel(
    activeCourse.subject,
    activeCourse.level
  );
  populateSelect(
    gradeSelect,
    getUniqueValues("grade", coursesForSubjectAndLevel),
    activeCourse.grade
  );
}

function refreshLevelSelect() {
  const selectedSubject = subjectSelect.value;
  const coursesForSubject = getCoursesBySubject(selectedSubject);
  const availableLevels = getUniqueValues("level", coursesForSubject);

  populateSelect(levelSelect, availableLevels);
  populateSelect(gradeSelect, []);
}

function refreshGradeSelect() {
  const selectedSubject = subjectSelect.value;
  const selectedLevel = levelSelect.value;

  if (!selectedSubject || !selectedLevel) {
    populateSelect(gradeSelect, []);
    return;
  }

  const coursesForSubjectAndLevel = getCoursesBySubjectAndLevel(
    selectedSubject,
    selectedLevel
  );
  const availableGrades = getUniqueValues("grade", coursesForSubjectAndLevel);

  populateSelect(gradeSelect, availableGrades);
}

function bindCourseSelectors() {
  if (subjectSelect) {
    subjectSelect.addEventListener("change", () => {
      refreshLevelSelect();
    });
  }

if (levelSelect) {
  levelSelect.addEventListener("change", () => {
    refreshGradeSelect();
  });
}

if (gradeSelect) {
  gradeSelect.addEventListener("change", () => {
    const subject = subjectSelect.value;
    const level = levelSelect.value;
    const grade = gradeSelect.value;

    if (!subject || !level || !grade) return;

    const course = findCourse(subject, level, grade);

    if (!course) return;

    const newUrl =
      window.location.pathname +
      "?course=" +
      encodeURIComponent(course.id);

    window.location.href = newUrl;
  });
}
}



function populateModeSelect() {
  if (!modeSelect) return;

  modeSelect.innerHTML = "";

  activeCourse.modes.forEach((mode) => {
    const option = document.createElement("option");
    option.value = mode.id;
    option.textContent = mode.label;
    modeSelect.appendChild(option);
  });
}
async function showUserGreeting(user) {
  const greetingEl = document.getElementById("userGreeting");
  if (!greetingEl) return;

  const { data, error } = await supabase
    .from("profiles")
    .select("display_name")
    .eq("id", user.id)
    .single();

  if (error) {
    console.error("Naam ophalen mislukt:", error);
    return;
  }

  if (data?.display_name && data.display_name.trim() !== "") {
    greetingEl.textContent = "Welkom, " + data.display_name.trim();
    greetingEl.hidden = false;
  }
}

async function bootApp() {
  const user = await ensureProfile();
  if (!user) return;

  await loadProgressMap();
  await showUserGreeting(user);

  applyActiveCourseToPage();
  populateModeSelect();
  initCourseSelectors();
  bindCourseSelectors();
  loadChapters();
  updateScoreDisplay();
  updateChapterSelectionSummary();
  updateStartButtonState();

  chapterSelect.addEventListener("change", updateStartButtonState);
  modeSelect.addEventListener("change", updateStartButtonState);
}

bootApp();
