/*
Biologie 3 mavo
KennisSprint dataset
© 2026
*/

/* =========================
SUBJECT
========================= */

export const subjects = [
  {
    id: "biologie",
    title: "Biologie"
  }
];


/* =========================
CHAPTERS
========================= */

const chapters = [
  { id: "bio-h1", title: "Organen en cellen" },
  { id: "bio-h2", title: "Voortplanting en seksualiteit" },
  { id: "bio-h3", title: "Erfelijkheid en evolutie" },
  { id: "bio-h4", title: "Ordening" },
  { id: "bio-h5", title: "Stevigheid en beweging" },
  { id: "bio-h6", title: "Ecologie" }
];


/* =========================
ITEMS (begrippen)
========================= */

const items = [

/* =========================
H1 ORGANEN EN CELLEN
========================= */

// voorbeeld:
// {
//   id: "bio-h1-001",
//   subjectId: "biologie",
//   chapterId: "bio-h1",
//   type: "begrip",
//   prompt: "cel",
//   answer: "De kleinste bouwsteen van een organisme die zelfstandig kan functioneren.",
//   keywords: ["kleinste bouwsteen"]
// },


/* =========================
H2 VOORTPLANTING EN SEKSUALITEIT
========================= */


/* =========================
H3 ERFELIJKHEID EN EVOLUTIE
========================= */


/* =========================
H4 ORDENING
========================= */


/* =========================
H5 STEVIGHEID EN BEWEGING
========================= */


/* =========================
H6 ECOLOGIE
========================= */

];


/* =========================
COURSE
========================= */

export const biologieMavo3Course = {
  id: "biologie-mavo-3",
  subject: "biologie",
  level: "mavo",
  grade: "3",
  title: "Biologie 3 mavo",
  chapters,
  datasets: {
    terms: items,
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
