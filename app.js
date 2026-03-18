
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
const typedRecallArea = document.getElementById("typedRecallArea");
const typedRecallIntro = document.getElementById("typedRecallIntro");
const typedRecallAnswerPreview = document.getElementById("typedRecallAnswerPreview");
const typedRecallForm = document.getElementById("typedRecallForm");
const typedRecallInput = document.getElementById("typedRecallInput");
const typedRecallSubmit = document.getElementById("typedRecallSubmit");
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
    .select("user_id, card_id, level, correct_count, wrong_count, correct_streak, typed_phase, last_seen")
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
  const currentTypedPhase = Number(existing?.typed_phase || 0);

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
    typed_phase: currentTypedPhase,
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
    correct_streak: nextCorrectStreak,
    typed_phase: currentTypedPhase
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

let activeSessionId = null;
let activeSessionStartedAt = null;

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

  return level >= 4;
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

   // Dynamische typed-recall quota op basis van aandeel paarse kaarten
  const typedCandidates = shuffleArray(
    items.filter((item) => isTypedRecallCandidate(item))
  );

  const typedRatio = items.length > 0 ? typedCandidates.length / items.length : 0;
  let typedQuota = Math.round(typedRatio * limit);

  if (typedCandidates.length > 0 && typedQuota < 1) {
    typedQuota = 1;
  }

  typedQuota = Math.min(typedQuota, typedCandidates.length, Math.max(0, limit - 1));

  const selectedIds = new Set(selected.map((item) => getItemCardId(item)));

  for (const candidate of typedCandidates) {
    if (typedQuota <= 0) break;

    const typedItem = {
      ...candidate,
      questionMode: "typed"
    };

    const typedCardId = getItemCardId(typedItem);

    if (selectedIds.has(typedCardId)) {
      continue;
    }

    if (selected.length < limit) {
      selected.push(typedItem);
      selectedIds.add(typedCardId);
      typedQuota--;
      continue;
    }

    const replaceIndex = selected.findIndex(
      (item) => item.questionMode !== "typed" && getLearningBucket(item) === "new"
    );

    if (replaceIndex >= 0) {
      selectedIds.delete(getItemCardId(selected[replaceIndex]));
      selected[replaceIndex] = typedItem;
      selectedIds.add(typedCardId);
      typedQuota--;
      continue;
    }

    const fallbackReplaceIndex = selected.findIndex(
      (item) => item.questionMode !== "typed"
    );

    if (fallbackReplaceIndex >= 0) {
      selectedIds.delete(getItemCardId(selected[fallbackReplaceIndex]));
      selected[fallbackReplaceIndex] = typedItem;
      selectedIds.add(typedCardId);
      typedQuota--;
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



function normalizeTypedText(value) {
  return String(value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function getTypedAnswerKind(modeId) {
  if (modeId === "term-to-answer") return "keywords";
  if (modeId === "answer-to-term") return "term";
  if (modeId === "years") return "keywords";
  if (modeId === "event-years") return "year";
  if (modeId === "person-to-description") return "keywords";
  if (modeId === "description-to-person") return "name";
  return "term";
}

function getCoreKeywords(text) {
  const stopwords = new Set([
    "de", "het", "een", "en", "van", "voor", "met", "dat", "die", "dit", "in",
    "op", "aan", "als", "om", "te", "tot", "na", "bij", "door", "uit", "werd",
    "wordt", "zijn", "is", "was", "waren", "had", "hebben", "heeft", "zich",
    "meer", "minder", "ook", "nog", "dan", "der", "ten"
  ]);

  return normalizeTypedText(text)
    .split(" ")
    .map((word) => word.trim())
    .filter((word) => word.length >= 4 && !stopwords.has(word));
}

function getLevenshteinDistance(a, b) {
  const matrix = Array.from({ length: b.length + 1 }, (_, i) =>
    Array.from({ length: a.length + 1 }, (_, j) => (i === 0 ? j : j === 0 ? i : 0))
  );

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      const cost = a[j - 1] === b[i - 1] ? 0 : 1;

      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + cost
      );
    }
  }

  return matrix[b.length][a.length];
}

function isLooseTermMatch(input, expected) {
  const a = normalizeTypedText(input);
  const b = normalizeTypedText(expected);

  if (!a || !b) return false;
  if (a === b) return true;
  if (a.includes(b) || b.includes(a)) return true;

  const aCompact = a.replace(/\s+/g, "");
  const bCompact = b.replace(/\s+/g, "");

  if (aCompact === bCompact) return true;

  const distance = getLevenshteinDistance(aCompact, bCompact);
  return distance <= 1;
}
function isYearMatch(input, expected) {
  const a = normalizeTypedText(input).replace(/[^\d]/g, "");
  const b = normalizeTypedText(expected).replace(/[^\d]/g, "");
  return a !== "" && a === b;
}

function isKeywordMatch(input, expectedText, keywordList = []) {
  const normalizedInput = normalizeTypedText(input);
  if (!normalizedInput) {
    return false;
  }

  const normalizedKeywords = Array.isArray(keywordList)
    ? keywordList
        .map((keyword) => normalizeTypedText(keyword))
        .filter(Boolean)
    : [];

  if (normalizedKeywords.length > 0) {
    const matchedKeywords = normalizedKeywords.filter((keyword) => {
      return normalizedInput.includes(keyword);
    });

    const requiredMatches = Math.max(
      1,
      Math.min(2, Math.ceil(normalizedKeywords.length * 0.4))
    );

    return matchedKeywords.length >= requiredMatches;
  }

  const inputWords = new Set(getCoreKeywords(input));
  const expectedWords = getCoreKeywords(expectedText);

  if (inputWords.size === 0 || expectedWords.length === 0) {
    return false;
  }

  const matchedCount = expectedWords.filter((word) => inputWords.has(word)).length;
  const requiredMatches = Math.max(1, Math.min(3, Math.ceil(expectedWords.length * 0.4)));

  return matchedCount >= requiredMatches;
}

function checkTypedAnswer(question, userInput, modeId) {
  const answerKind = getTypedAnswerKind(modeId);

  if (answerKind === "year") {
    return isYearMatch(userInput, question.answer);
  }

  if (answerKind === "term" || answerKind === "name") {
    return isLooseTermMatch(userInput, question.answer);
  }

  return isKeywordMatch(
    userInput,
    question.answer,
    question.item?.keywords || []
  );
}
function getTypedPhaseForQuestion(question) {
  return progressDetailMap[question.cardId]?.typed_phase || 0;
}

function getVisualMasteryStep(cardId) {
  const level = progressMap[cardId] || 0;
  const typedPhase = progressDetailMap[cardId]?.typed_phase || 0;

  if (level >= 5) return 6;
  if (level === 4 && typedPhase >= 1) return 5;
  return Math.max(0, Math.min(level, 4));
}

async function saveTypedProgress(cardId, isCorrect) {
  const currentLevel = progressMap[cardId] || 0;
  const currentTypedPhase = progressDetailMap[cardId]?.typed_phase || 0;

  let nextLevel = currentLevel;
  let nextTypedPhase = currentTypedPhase;

  if (isCorrect) {
    if (currentLevel < 4) {
      return { level: currentLevel, typed_phase: currentTypedPhase };
    }

    if (currentTypedPhase === 0) {
      nextTypedPhase = 1;
    } else if (currentTypedPhase === 1) {
      nextTypedPhase = 2;
    } else {
      nextLevel = 5;
      nextTypedPhase = 2;
    }
  } else {
    nextTypedPhase = Math.max(0, currentTypedPhase - 1);
  }

  const { data: userData, error: userError } = await supabase.auth.getUser();
  const user = userData?.user;

  if (userError || !user) {
    console.error("Geen gebruiker voor typed progress save:", userError);
    return { level: currentLevel, typed_phase: currentTypedPhase };
  }

  const { error: writeError } = await supabase
    .from("cards_progress")
    .upsert({
      user_id: user.id,
      card_id: String(cardId),
      level: nextLevel,
      typed_phase: nextTypedPhase,
      last_seen: new Date().toISOString()
    }, { onConflict: "user_id,card_id" });

  if (writeError) {
    console.error("typed progress write fout:", writeError);
    return { level: currentLevel, typed_phase: currentTypedPhase };
  }

  progressMap[String(cardId)] = nextLevel;
  progressDetailMap[String(cardId)] = {
    ...(progressDetailMap[String(cardId)] || {}),
    level: nextLevel,
    typed_phase: nextTypedPhase
  };

  return { level: nextLevel, typed_phase: nextTypedPhase };
}



function buildTypedHint(answerText) {
  const normalized = String(answerText || "").trim();
  if (!normalized) return "";

  const words = normalized.split(/\s+/);

  return words
    .map((word) => {
      const clean = word.replace(/[^A-Za-zÀ-ÿ0-9]/g, "");
      if (clean.length <= 2) return clean;

      return clean.slice(0, 2) + "_".repeat(Math.max(1, clean.length - 2));
    })
    .join(" ");
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

async function ensureStudentSession() {
  try {
    if (activeSessionId) {
      return activeSessionId;
    }

    const { data, error } = await supabase.auth.getUser();
    const user = data?.user;

    if (error || !user) {
      console.error("Geen gebruiker voor student session start:", error);
      return null;
    }

    const startedAt = new Date().toISOString();

    const { data: inserted, error: insertError } = await supabase
      .from("student_sessions")
      .insert({
        user_id: user.id,
        course_id: activeCourse.id,
        started_at: startedAt,
        question_count: scoreTotal,
        correct_count: scoreCorrect,
        typed_count: sessionResults.filter(
          (result) => result.item?.questionMode === "typed"
        ).length
      })
      .select("id")
      .single();

    if (insertError) {
      console.error("student_sessions insert fout:", insertError);
      return null;
    }

    activeSessionId = inserted.id;
    activeSessionStartedAt = startedAt;
    return activeSessionId;
  } catch (err) {
    console.error("ensureStudentSession exception:", err);
    return null;
  }
}

async function syncStudentSessionStats() {
  try {
    const sessionId = await ensureStudentSession();

    if (!sessionId) {
      return;
    }

    const { error } = await supabase
      .from("student_sessions")
      .update({
        question_count: scoreTotal,
        correct_count: scoreCorrect,
        typed_count: sessionResults.filter(
          (result) => result.item?.questionMode === "typed"
        ).length
      })
      .eq("id", sessionId);

    if (error) {
      console.error("student_sessions sync fout:", error);
    }
  } catch (err) {
    console.error("syncStudentSessionStats exception:", err);
  }
}

async function endStudentSession() {
  try {
    if (!activeSessionId) {
      return;
    }

    const sessionIdToClose = activeSessionId;

    const { error } = await supabase
      .from("student_sessions")
      .update({
        ended_at: new Date().toISOString(),
        question_count: scoreTotal,
        correct_count: scoreCorrect,
        typed_count: sessionResults.filter(
          (result) => result.item?.questionMode === "typed"
        ).length
      })
      .eq("id", sessionIdToClose);

    if (error) {
      console.error("student_sessions update fout:", error);
      return;
    }

    activeSessionId = null;
    activeSessionStartedAt = null;
  } catch (err) {
    console.error("endStudentSession exception:", err);
  }
}
async function showEndScreen() {
    await endStudentSession();
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
 if (chapterTileGrid) {
  chapterTileGrid.style.display = "grid";
  chapterTileGrid.classList.remove("chapter-list-mode");
  chapterTileGrid.style.gridTemplateColumns = "repeat(3, minmax(0, 1fr))";
  chapterTileGrid.style.maxHeight = "";
  chapterTileGrid.style.overflowY = "";
  chapterTileGrid.style.gap = "";
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

// layout altijd gelijk houden
chapterTileGrid.classList.remove("compact");
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
    .select("card_id, level, correct_streak, typed_phase")
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
      correct_streak: row.correct_streak || 0,
      typed_phase: row.typed_phase || 0
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
  answer: correctOptionText,
  correctTerm: correctItem.prompt,
  correctAnswer: correctItem.answer,
  options: options,
  questionMode: correctItem.questionMode || "mc"
};

  renderQuestion();
}


// ===== VRAAG TONEN =====

function renderQuestion() {
  termDisplay.textContent = currentQuestion.prompt || "";
  answersContainer.innerHTML = "";
  typedRecallArea.classList.add("hidden");
  typedRecallIntro.classList.add("hidden");
  typedRecallForm.classList.add("hidden");
  typedRecallInput.value = "";

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
  } else if (level === 4) {
    promptBox.classList.add("mastery-purple");
  } else {
    promptBox.classList.add("mastery-orange");
  }

  const masterySegments = document.querySelectorAll("#masterySegments .mastery-segment");
  const filledCount = getVisualMasteryStep(currentQuestion.cardId);

  masterySegments.forEach((segment, index) => {
    segment.classList.toggle("is-filled", index < filledCount);
  });

  if (currentQuestion.questionMode === "typed") {
    typedRecallArea.classList.remove("hidden");

    const typedPhase = getTypedPhaseForQuestion(currentQuestion);

    if (typedPhase === 0) {
      typedRecallIntro.classList.remove("hidden");
      typedRecallAnswerPreview.textContent = currentQuestion.answer || "";

      setTimeout(() => {
        if (!currentQuestion || currentQuestion.questionMode !== "typed") return;

        typedRecallIntro.classList.add("hidden");
        typedRecallForm.classList.remove("hidden");
        typedRecallInput.focus();
      }, 3000);

      return;
    }

    if (typedPhase === 1) {
      typedRecallIntro.classList.remove("hidden");
      typedRecallAnswerPreview.textContent = buildTypedHint(currentQuestion.answer || "");
    } else {
      typedRecallIntro.classList.add("hidden");
    }

    typedRecallForm.classList.remove("hidden");
    typedRecallInput.focus();
    return;
  }
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
    // typed fout = kaart terug naar training
const cardId = currentQuestion.cardId;
const newLevel = Math.max(2, (progressMap[cardId] || 3) - 1);

progressMap[cardId] = newLevel;

saveCardProgress(cardId, newLevel);

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
startButton.addEventListener("click", async () => {
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

  await startStudentSession();

  buildQuestion();
});

// ===== VOLGENDE VRAAG =====

// ===== VERDER-KNOP IN FOUTPOPUP =====

async function handleTypedSubmit() {
  if (!currentQuestion || currentQuestion.questionMode !== "typed" || answered) {
    return;
  }

  answered = true;
  scoreTotal++;

  const userInput = typedRecallInput.value.trim();
  const isCorrect = checkTypedAnswer(currentQuestion, userInput, quizMode);

  if (isCorrect) {
    await saveTypedProgress(currentQuestion.cardId, true);

    sessionResults.push({
      cardId: currentQuestion.cardId,
      item: currentQuestion.item,
      correct: true
    });

    scoreCorrect++;
    typedRecallInput.disabled = true;
    typedRecallSubmit.disabled = true;

    feedback.textContent = "GOED!";
    feedback.className = "feedback show good";
    feedback.style.display = "block";

    updateScoreDisplay();

    setTimeout(() => {
      typedRecallInput.disabled = false;
      typedRecallSubmit.disabled = false;
      buildQuestion();
    }, 900);

    return;
  }

  await saveTypedProgress(currentQuestion.cardId, false);

  sessionResults.push({
    cardId: currentQuestion.cardId,
    item: currentQuestion.item,
    correct: false
  });

  typedRecallInput.disabled = true;
  typedRecallSubmit.disabled = true;

  feedback.innerHTML = `
    <div class="feedback-title">FOUT</div>
    <div class="feedback-term">${currentQuestion.prompt}</div>
    <div class="feedback-answer-box">${currentQuestion.answer}</div>
    <button id="feedbackContinueButton" class="feedback-continue-button">Verder</button>
  `;
  feedback.className = "feedback show bad";
  feedback.style.display = "block";

  const backdrop = document.createElement("div");
  backdrop.className = "modal-backdrop";
  backdrop.id = "feedbackBackdrop";
  document.body.appendChild(backdrop);

  const wrongItem = currentChapterItems.find((item) => item.id === currentQuestion.id);

  if (wrongItem && !wrongItems.some((item) => item.id === wrongItem.id)) {
    wrongItems.push(wrongItem);
  }

  updateScoreDisplay();
}

if (typedRecallSubmit) {
  typedRecallSubmit.addEventListener("click", () => {
    handleTypedSubmit();
  });
}

if (typedRecallInput) {
  typedRecallInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleTypedSubmit();
    }
  });
}

feedback.addEventListener("click", (event) => {
  if (event.target && event.target.id === "feedbackContinueButton") {
    document.body.classList.remove("blur-background");

    const backdrop = document.getElementById("feedbackBackdrop");
    if (backdrop) backdrop.remove();

    typedRecallInput.disabled = false;
    typedRecallSubmit.disabled = false;

    buildQuestion();
  }
});


// ===== FOUTEN OPNIEUW OEFENEN =====

if (retryWrongButton) {
  retryWrongButton.addEventListener("click", async () => {
    currentChapterItems = [...wrongItems];
    sessionItems = [...wrongItems];
    remainingQuestions = shuffleArray([...wrongItems]);
    scoreCorrect = 0;
    scoreTotal = 0;
    sessionResults = [];
    wrongItems = [];
    updateScoreDisplay();

    endScreen.classList.add("hidden");

    await startStudentSession();

    buildQuestion();
  });
}

if (restartButton) {
  restartButton.addEventListener("click", async () => {
    currentChapterItems = getAvailableItems(quizMode);
    sessionItems = getRecommendedSessionItems(currentChapterItems, 10);
    remainingQuestions = shuffleArray([...sessionItems]);
    scoreCorrect = 0;
    scoreTotal = 0;
    sessionResults = [];
    wrongItems = [];
    updateScoreDisplay();

    endScreen.classList.add("hidden");

    await startStudentSession();

    buildQuestion();
  });
}

async function closeQuizSession() {
    await endStudentSession();
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
  stopButton.addEventListener("click", async () => {
    await closeQuizSession();
  });
}

if (backToCourseButton) {
  backToCourseButton.addEventListener("click", async () => {
    await closeQuizSession();
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
