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
  [
  { id: "his5h-h1", subjectId: "geschiedenis", title: "De wereld tot 1500" },
  { id: "his5h-h2", subjectId: "geschiedenis", title: "Veranderend mens- en wereldbeeld" },
  { id: "his5h-h3", subjectId: "geschiedenis", title: "Een nieuwe republiek in Europa" },
  { id: "his5h-h4", subjectId: "geschiedenis", title: "Verlichting en revoluties" },
  { id: "his5h-h5", subjectId: "geschiedenis", title: "Industrialisatie en emancipatie" },
  { id: "his5h-h6", subjectId: "geschiedenis", title: "De strijd om de wereld" },
  { id: "his5h-h7", subjectId: "geschiedenis", title: "Leven in een massasamenleving" },
  { id: "his5h-h8", subjectId: "geschiedenis", title: "De Tweede Wereldoorlog" },
  { id: "his5h-h9", subjectId: "geschiedenis", title: "Een nieuwe wereldorde" },
  { id: "his5h-h10", subjectId: "geschiedenis", title: "Een kleine wereld" }
]
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
