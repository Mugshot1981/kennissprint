/*
KennisSprint dataset
© Joas de Wit
2026
*/
export const historyMavo3Course = {
  id: "geschiedenis-mavo-3",
  subject: "geschiedenis",
  level: "mavo",
  grade: "3",
  title: "Geschiedenis 3 mavo",

  chapters: [
    {
      id: "ges3-h1",
      subjectId: "geschiedenis",
      title: "Nederland en Indonesië"
    },
    {
      id: "ges3-h2",
      subjectId: "geschiedenis",
      title: "Nederland als industriële samenleving"
    },
    {
      id: "ges3-h3",
      subjectId: "geschiedenis",
      title: "Sociale zekerheid en de verzorgingsstaat in Nederland"
    },
    {
      id: "ges3-h4",
      subjectId: "geschiedenis",
      title: "Nederland na 1945: cultuur en mentaliteit"
    },
    {
      id: "ges3-h5",
      subjectId: "geschiedenis",
      title: "De Koude Oorlog"
    },
    {
      id: "ges3-h6",
      subjectId: "geschiedenis",
      title: "Het Israëlisch-Palestijnse conflict"
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
