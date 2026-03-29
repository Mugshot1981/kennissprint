export const duitsMavo5Course = {
  id: "duits-mavo-5",
  subject: "duits",
  level: "mavo",
  grade: "5",
  title: "Duits 5 mavo",

  chapters: [
    { id: "du5m-h3", subjectId: "duits", title: "Hoofdstuk 3" }
  ],

  datasets: {
    terms: [
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
