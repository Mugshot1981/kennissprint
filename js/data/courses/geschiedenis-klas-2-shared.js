
export const geschiedenisKlas2Shared = {
  chapters: [
    {
      id: "ges2-h4",
      subjectId: "geschiedenis",
      title: "De Tweede Wereldoorlog"
    },
    {
      id: "ges2-h5",
      subjectId: "geschiedenis",
      title: "De wereld na 1945"
    },
    {
      id: "ges2-h6",
      subjectId: "geschiedenis",
      title: "Nederland na 1945"
    },
    {
      id: "ges2-h7",
      subjectId: "geschiedenis",
      title: "Staatsinrichting"
    }
  ],

  datasets: {
    terms: [],
    years: [],
    persons: []
  },

  modes: [
    {
      id: "term-to-answer",
      label: "Begrip → beschrijving",
      dataset: "terms"
    },
    {
      id: "answer-to-term",
      label: "Beschrijving → begrip",
      dataset: "terms"
    },
    {
      id: "years",
      label: "Jaartal → gebeurtenis",
      dataset: "years"
    },
    {
      id: "event-years",
      label: "Gebeurtenis → jaartal",
      dataset: "years"
    },
    {
      id: "person-to-description",
      label: "Persoon → beschrijving",
      dataset: "persons",
      questionLabel: "Persoon",
      sessionModeLabel: "Persoon → beschrijving",
      questionField: "name",
      answerField: "description"
    },
    {
      id: "description-to-person",
      label: "Beschrijving → persoon",
      dataset: "persons",
      questionLabel: "Beschrijving",
      sessionModeLabel: "Beschrijving → persoon",
      questionField: "description",
      answerField: "name"
    }
  ]
};
