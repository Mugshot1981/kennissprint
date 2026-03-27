export const geschiedenisHavo3Shared = {
  chapters: [
    {
      id: "his3h-h1",
      subjectId: "geschiedenis",
      title: "De Eerste Wereldoorlog"
    },
    {
      id: "his3h-h2",
      subjectId: "geschiedenis",
      title: "De Sovjet-Unie en de Verenigde Staten"
    },
    {
      id: "his3h-h3",
      subjectId: "geschiedenis",
      title: "De Tweede Wereldoorlog"
    },
    {
      id: "his3h-h4",
      subjectId: "geschiedenis",
      title: "De Koude Oorlog"
    },
    {
      id: "his3h-h5",
      subjectId: "geschiedenis",
      title: "Dekolonisatie en globalisering"
    },
    {
      id: "his3h-h6",
      subjectId: "geschiedenis",
      title: "Nederland na 1945"
    },
    {
      id: "his3h-h7",
      subjectId: "geschiedenis",
      title: "Staatsinrichting"
    }
  ],

  datasets: {
    terms: [
      // hoofdstuk 1 begrippen
      // hoofdstuk 2 begrippen
      // hoofdstuk 3 begrippen
      // hoofdstuk 4 begrippen
      // hoofdstuk 5 begrippen
      // hoofdstuk 6 begrippen
      // hoofdstuk 7 begrippen
    ],

    years: [
      // hoofdstuk 1 jaartallen
      // hoofdstuk 2 jaartallen
      // hoofdstuk 3 jaartallen
      // hoofdstuk 4 jaartallen
      // hoofdstuk 5 jaartallen
      // hoofdstuk 6 jaartallen
      // hoofdstuk 7 jaartallen
    ],

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
