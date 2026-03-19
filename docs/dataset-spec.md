# KennisSprint – Dataset Specificatie

version: 1.0
status: **canon**
doel: één uniforme datastructuur afdwingen voor alle courses

---

## 1. OVERZICHT

Elke datasetfile moet exact **één course-object exporteren**.

```js
export const someCourse = { ... }
```

Er mogen geen meerdere exports of losse datastructuren bestaan die de app gebruikt.

---

## 2. COURSE STRUCTUUR (VERPLICHT)

```js
{
  id: string,
  subject: string,
  level: string,
  grade: string,
  title: string,

  chapters: Chapter[],

  datasets: {
    terms: TermItem[],
    years?: YearItem[],
    persons?: PersonItem[]
  },

  modes: Mode[]
}
```

---

## 3. CHAPTERS

```js
type Chapter = {
  id: string,
  subjectId: string,
  title: string
}
```

### REGELS

* `chapters` moet een **platte array** zijn
* GEEN nested arrays (`[[...]]` is fout)
* `id` moet uniek zijn binnen de course

---

## 4. TERMS DATASET

```js
type TermItem = {
  id: string,
  chapterId: string,
  type: "begrip",
  prompt: string,
  answer: string,

  // optioneel
  keywords?: string[],
  subjectId?: string
}
```

### REGELS

* `id` is verplicht en uniek
* `chapterId` moet exact matchen met een `chapters[].id`
* `type` = altijd `"begrip"`
* `prompt` = vraag / term
* `answer` = definitie

---

## 5. YEARS DATASET (OPTIONEEL)

```js
type YearItem = {
  id: string,
  chapterId: string,
  year: string,
  event: string
}
```

---

## 6. PERSONS DATASET (OPTIONEEL)

```js
type PersonItem = {
  id: string,
  chapterId: string,
  name: string,
  description: string
}
```

---

## 7. MODES

```js
type Mode = {
  id: string,
  label: string,
  dataset: "terms" | "years" | "persons",

  // optioneel (UI/engine)
  questionField?: string,
  answerField?: string,
  questionLabel?: string,
  sessionModeLabel?: string
}
```

### REGELS

* `dataset` moet verwijzen naar een bestaande dataset
* modes mogen geen eigen datastructuur introduceren

---

## 8. HARDE VALIDATIEREGELS

Een dataset is **ongeldig** als:

1. `chapters` geen platte array is
2. een `chapterId` niet bestaat in `chapters`
3. een item geen `id` heeft
4. `datasets` ontbreekt of geen object is
5. meerdere datastructuren naast elkaar bestaan (bijv. `items` + `datasets`)
6. `modes[].dataset` niet bestaat
7. dubbele `id`s voorkomen

---

## 9. ID-CONVENTIE (AANBEVOLEN)

```text
<course>-<chapter>-<nummer>

voorbeeld:
his5h-h1-001
```

### REGELS

* consistent binnen een course
* parsing van id wordt NIET gebruikt in runtime
* alleen leesbaarheid / debug

---

## 10. KEYWORDS (OPTIONEEL)

```js
keywords?: string[]
```

### REGELS

* alleen kernwoorden (geen zinnen)
* lowercase
* geen duplicaten
* bedoeld voor fuzzy matching / typed recall

---

## 11. NIET TOEGESTAAN

Deze patronen zijn fout:

❌ `chapters: [[ ... ]]`
❌ losse `items` zonder mapping naar `datasets`
❌ chapterId mismatch (`ak-h1` vs `ak2-h1`)
❌ ontbrekende `id` velden
❌ meerdere exports per file
❌ verschillende datastructuren binnen één course

---

## 12. AANBEVOLEN WERKWIJZE

1. maak chapters eerst
2. voeg items toe met correcte `chapterId`
3. valideer structuur
4. pas daarna content verbeteren

---

## 13. MINIMALE GELDIGE COURSE

```js
export const exampleCourse = {
  id: "test-course",
  subject: "test",
  level: "havo",
  grade: "5",
  title: "Test Course",

  chapters: [
    { id: "t-h1", subjectId: "test", title: "Hoofdstuk 1" }
  ],

  datasets: {
    terms: [
      {
        id: "t-h1-001",
        chapterId: "t-h1",
        type: "begrip",
        prompt: "voorbeeld",
        answer: "dit is een voorbeeld"
      }
    ]
  },

  modes: [
    {
      id: "learn",
      label: "Leren",
      dataset: "terms"
    }
  ]
};
```

---

## 14. DOEL VAN DEZE SPEC

* voorkomen van schema-drift
* voorspelbare data voor de quiz engine
* stabiele koppeling met Supabase (later)
* snelle uitbreiding naar nieuwe vakken

---
