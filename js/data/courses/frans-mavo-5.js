
export const fransMavo5Course = {
  id: "frans-mavo-5",
  subject: "frans",
  level: "mavo",
  grade: "5",
  title: "Frans 5 mavo",

  chapters: [
    { id: "fr5m-h3", subjectId: "frans", title: "Hoofdstuk 3" }
  ],

  datasets: {
    terms: [
    ]
  },

  modes: [
    {
      id: "term-to-answer",
      label: "Frans → Nederlands",
      dataset: "terms",
      questionLabel: "Frans",
      sessionModeLabel: "Frans → Nederlands",
      questionField: "prompt",
      answerField: "answer"
    },
    {
      id: "answer-to-term",
      label: "Nederlands → Frans",
      dataset: "terms",
      questionLabel: "Nederlands",
      sessionModeLabel: "Nederlands → Frans",
      questionField: "answer",
      answerField: "prompt"
    }
  ]
};
