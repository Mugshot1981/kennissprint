/*
Biologie 4 mavo
KennisSprint dataset
© 2026
*/

/* =========================
SUBJECT
========================= */
import { biologieMavo3Course } from "./biologie-mavo-3.js";

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
  { id: "bio-h1", subjectId: "biologie", title: "Organen en cellen" },
  { id: "bio-h2", subjectId: "biologie", title: "Voortplanting en seksualiteit" },
  { id: "bio-h3", subjectId: "biologie", title: "Erfelijkheid en evolutie" },
  { id: "bio-h4", subjectId: "biologie", title: "Ordening" },
  { id: "bio-h5", subjectId: "biologie", title: "Stevigheid en beweging" },
  { id: "bio-h6", subjectId: "biologie", title: "Ecologie" },

  { id: "bio-h7", subjectId: "biologie", title: "Duurzaam leven" },
  { id: "bio-h8", subjectId: "biologie", title: "Gedrag" },
  { id: "bio-h9", subjectId: "biologie", title: "Planten" },
  { id: "bio-h10", subjectId: "biologie", title: "Regeling" },
  { id: "bio-h11", subjectId: "biologie", title: "Zintuigen" },
  { id: "bio-h12", subjectId: "biologie", title: "Voeding en vertering" },
  { id: "bio-h13", subjectId: "biologie", title: "Transport" },
  { id: "bio-h14", subjectId: "biologie", title: "Gaswisseling en uitscheiding" }
];


/* =========================
ITEMS (begrippen)
========================= */

const items = [
  ...biologieMavo3Course.datasets.terms,
  ];
/* =========================
H1 ORGANEN EN CELLEN
========================= */

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


/* =========================
H7 DUURZAAM LEVEN
========================= */


/* =========================
H8 GEDRAG
========================= */


/* =========================
H9 PLANTEN
========================= */


/* =========================
H10 REGELING
========================= */


/* =========================
H11 ZINTUIGEN
========================= */


/* =========================
H12 VOEDING EN VERTERING
========================= */


/* =========================
H13 TRANSPORT
========================= */


/* =========================
H14 GASWISSELING EN UITSCHEIDING
========================= */

];


/* =========================
COURSE
========================= */

export const biologieMavo4Course = {
  id: "biologie-mavo-4",
  subject: "biologie",
  level: "mavo",
  grade: "4",
  title: "Biologie 4 mavo",
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
