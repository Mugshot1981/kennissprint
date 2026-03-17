
/*
KennisSprint dataset
© Joas de Wit
2026
*/
export const aardrijkskundeMavo4Course = {
  id: "aardrijkskunde-mavo-4",
  subject: "aardrijkskunde",
  level: "mavo",
  grade: "4",
  title: "Aardrijkskunde 4 mavo",

  chapters: [
    {
      id: "ak-h1",
      subjectId: "aardrijkskunde",
      title: "Nederland"
    },
    {
      id: "ak-h2",
      subjectId: "aardrijkskunde",
      title: "De Verenigde Staten en Nigeria"
    },
    {
      id: "ak-h3",
      subjectId: "aardrijkskunde",
      title: "Nederland en Frankrijk"
    },
    {
      id: "ak-h4",
      subjectId: "aardrijkskunde",
      title: "Brazilië"
    },
    {
      id: "ak-h5",
      subjectId: "aardrijkskunde",
      title: "Nederland en België"
    },
    {
      id: "ak-h6",
      subjectId: "aardrijkskunde",
      title: "Rusland"
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
    }
  ]
};
