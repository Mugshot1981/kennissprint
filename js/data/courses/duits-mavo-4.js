
export const duitsMavo4Course = {
  id: "duits-mavo-4",
  subject: "duits",
  level: "mavo",
  grade: "4",
  title: "Duits 4 mavo",

  chapters: [
    { id: "du-h1", subjectId: "duits", title: "Essen und Trinken" },
    { id: "du-h2", subjectId: "duits", title: "Körper" },
    { id: "du-h3", subjectId: "duits", title: "Freizeit" },
    { id: "du-h4", subjectId: "duits", title: "Menschen" },
    { id: "du-h5", subjectId: "duits", title: "Schule" },
    { id: "du-h6", subjectId: "duits", title: "Arbeit" },
    { id: "du-h7", subjectId: "duits", title: "Gefühle" },
    { id: "du-h8", subjectId: "duits", title: "Kunst und Kultur" },
    { id: "du-h9", subjectId: "duits", title: "Tourismus" },
    { id: "du-h10", subjectId: "duits", title: "Umgebung" },
    { id: "du-h11", subjectId: "duits", title: "Kontakte" },
    { id: "du-h12", subjectId: "duits", title: "Innovation" },
    { id: "du-h13", subjectId: "duits", title: "Geld" },
    { id: "du-h14", subjectId: "duits", title: "Umwelt" },
    { id: "du-h15", subjectId: "duits", title: "Nachhaltigkeit" },
    { id: "du-h16", subjectId: "duits", title: "Gemeinschaftskunde" },
    { id: "du-h17", subjectId: "duits", title: "Falsche Freunde" },
    { id: "du-h18", subjectId: "duits", title: "Signalwörter" },
    { id: "du-h19", subjectId: "duits", title: "Prüfungssprache" },
    { id: "du-h20", subjectId: "duits", title: "Redemittel" }
  ],

  datasets: {
    terms: [
      {
        id: "du-001",
        chapterId: "du-h1",
        type: "begrip",
        prompt: "das Brot",
        answer: "het brood"
      },
      {
        id: "du-002",
        chapterId: "du-h1",
        type: "begrip",
        prompt: "das Wasser",
        answer: "het water"
      },
      {
        id: "du-003",
        chapterId: "du-h1",
        type: "begrip",
        prompt: "der Apfel",
        answer: "de appel"
      },
      {
        id: "du-004",
        chapterId: "du-h1",
        type: "begrip",
        prompt: "die Milch",
        answer: "de melk"
      }
    ]
  },

  modes: [
    {
      id: "term-to-answer",
      label: "Duits → Nederlands",
      dataset: "terms",
      questionLabel: "Duits",
      sessionModeLabel: "Duits → Nederlands",
      questionField: "prompt",
      answerField: "answer"
    },
    {
      id: "answer-to-term",
      label: "Nederlands → Duits",
      dataset: "terms",
      questionLabel: "Nederlands",
      sessionModeLabel: "Nederlands → Duits",
      questionField: "answer",
      answerField: "prompt"
    }
  ]
};
