/*
Geschiedenis 3 mavo
KennisSprint dataset
© 2026
*/

export const historyMavo3Course = {
  id: "geschiedenis-mavo-3",
  subject: "geschiedenis",
  level: "mavo",
  grade: "3",
  title: "Geschiedenis 3 mavo",

  chapters: [
    {
      id: "his3-h1",
      subjectId: "geschiedenis",
      title: "Hoofdstuk 1"
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
