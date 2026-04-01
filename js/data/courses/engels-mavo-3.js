export const engelsMavo3Course = {
  id: "engels-mavo-3",
  subject: "engels",
  level: "mavo",
  grade: "3",
  title: "Engels 3 mavo",

  chapters: [
    { id: "eng3m-h1", subjectId: "engels", title: "Hoofdstuk 1" }
  ],

  datasets: {
    terms: []
  },

  modes: [
    {
      id: "term-to-answer",
      label: "Engels → Nederlands",
      dataset: "terms",
      questionLabel: "Engels",
      sessionModeLabel: "Engels → Nederlands",
      questionField: "prompt",
      answerField: "answer"
    },
    {
      id: "answer-to-term",
      label: "Nederlands → Engels",
      dataset: "terms",
      questionLabel: "Nederlands",
      sessionModeLabel: "Nederlands → Engels",
      questionField: "answer",
      answerField: "prompt"
    }
  ]
};
