export const historyMavo4Course = {
  id: "geschiedenis-mavo-4",
  subject: "geschiedenis",
  level: "mavo",
  grade: "4",
  title: "Geschiedenis 4 mavo",

  chapters: [
    {
      id: "his-h1",
      subjectId: "geschiedenis",
      title: "Hoofdstuk 1 – Staatsinrichting van Nederland 1848 - nu"
    },
    {
      id: "his-h2",
      subjectId: "geschiedenis",
      title: "Hoofdstuk 2 – De Eerste Wereldoorlog 1914 - 1918"
    },
    {
      id: "his-h3",
      subjectId: "geschiedenis",
      title: "Hoofdstuk 3 – Het Interbellum 1918 - 1939"
    },
    {
      id: "his-h4",
      subjectId: "geschiedenis",
      title: "Hoofdstuk 4 – De Tweede Wereldoorlog 1939-1945 en dekolonisatie"
    },
    {
      id: "his-h5",
      subjectId: "geschiedenis",
      title: "Hoofdstuk 5 – De wereld na 1945"
    }
  ],

  datasets: {
    terms: [
      {
        id: "his-h1-001",
        subjectId: "geschiedenis",
        chapterId: "his-h1",
        type: "begrip",
        prompt: "grondwet",
        answer: "Een document waarin de grondrechten van alle burgers en de regels over het bestuur van het land staan."
      },
      {
        id: "his-h1-002",
        subjectId: "geschiedenis",
        chapterId: "his-h1",
        type: "begrip",
        prompt: "grondrechten",
        answer: "Basisrechten van elke burger."
      },
      {
        id: "his-h1-003",
        subjectId: "geschiedenis",
        chapterId: "his-h1",
        type: "begrip",
        prompt: "constitutionele monarchie",
        answer: "Een bestuursvorm waarbij de macht van de koning is vastgelegd in een grondwet."
      }
    ],

    years: [
      {
        id: "h1-1848",
        chapterId: "his-h1",
        year: "1848",
        event: "Grondwetsherziening: parlementair stelsel en grondrechten"
      },
      {
        id: "h2-1914",
        chapterId: "his-h2",
        year: "1914",
        event: "Uitbreken van de Eerste Wereldoorlog"
      }
    ],

    persons: [
      {
        id: "his-p-001",
        chapterId: "his-h2",
        name: "Frans Ferdinand",
        description: "Kroonprins van Oostenrijk-Hongarije. Hij werd in 1914 vermoord in Sarajevo door Gavrilo Princip."
      },
      {
        id: "his-p-002",
        chapterId: "his-h2",
        name: "Vladimir Lenin",
        description: "Leider van de Russische Revolutie in 1917 en de eerste leider van de communistische Sovjet-Unie."
      },
      {
        id: "his-p-003",
        chapterId: "his-h2",
        name: "Gavrilo Princip",
        description: "Servisch nationalist uit Bosnië die in 1914 een aanslag pleegde op Frans Ferdinand."
      },
      {
        id: "his-p-004",
        chapterId: "his-h2",
        name: "Pieter Jelles Troelstra",
        description: "Socialistisch politicus en een van de oprichters van de SDAP. In 1918 riep hij op tot een revolutie."
      }
    ]
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
