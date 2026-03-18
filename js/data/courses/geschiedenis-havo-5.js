/*
KennisSprint dataset
© Joas de Wit
2026
*/
export const historyHavo5Course = {
  id: "geschiedenis-havo-5",
  subject: "geschiedenis",
  level: "havo",
  grade: "5",
  title: "Geschiedenis 5 havo",

  chapters: [
    {
      id: "his5h-h1",
      subjectId: "geschiedenis",
      title: "Hoofdstuk 1"
    }
  ],

  datasets: {
    terms: [
      {
        id: "his5h-h1-001",
        subjectId: "geschiedenis",
        chapterId: "his5h-h1",
        type: "begrip",
        prompt: "voorbeeldbegrip",
        answer: "Voorbeeldomschrijving"
      },
      {
        id: "his5h-h1-002",
        subjectId: "geschiedenis",
        chapterId: "his5h-h1",
        type: "begrip",
        prompt: "voorbeeldbegrip 2",
        answer: "Voorbeeldomschrijving 2"
      },
      {
        id: "his5h-h1-003",
        subjectId: "geschiedenis",
        chapterId: "his5h-h1",
        type: "begrip",
        prompt: "voorbeeldbegrip 3",
        answer: "Voorbeeldomschrijving 3"
      },
      {
        id: "his5h-h1-004",
        subjectId: "geschiedenis",
        chapterId: "his5h-h1",
        type: "begrip",
        prompt: "voorbeeldbegrip 4",
        answer: "Voorbeeldomschrijving 4"
      }
    ],

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
