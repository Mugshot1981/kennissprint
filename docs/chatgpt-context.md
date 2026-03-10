
KennisSprint – ChatGPT Context
version: 0.1
last updated: 2026

Dit document beschrijft de huidige architectuur, datastructuur en ontwikkelstatus van het project KennisSprint zodat nieuwe ChatGPT-sessies direct verder kunnen werken zonder eerdere chatcontext.

1. Projectdoel

KennisSprint is een webgebaseerde leerapp waarin leerlingen begrippen en kennis oefenen via multiple-choice quizzen.

De app is ontworpen voor:

middelbare scholieren

snelle oefensessies

mobiel en laptopgebruik

eenvoudige uitbreiding naar meerdere vakken

De app draait als statische website op GitHub Pages en gebruikt alleen:

HTML

CSS

JavaScript

Er is geen backend en geen login.

2. Hoofdstructuur van de applicatie

De app bestaat uit twee hoofdpagina’s.

index.html

Dit is het cursusselectiescherm.

De gebruiker kiest:

vak

niveau

leerjaar

Bijvoorbeeld:

geschiedenis
mavo
4

Daarna opent de app automatisch:

course.html?course=geschiedenis-mavo-4
course.html

Dit is de trainerpagina voor een specifieke cursus.

De pagina bevat:

titel van de cursus

hoofdstukselectie

keuze van oefenvorm

startknop

quizinterface

feedback popup

eindscherm

Wanneer een quiz start:

verdwijnen selectievelden

blijft alleen de quiz zichtbaar

3. Projectbestanden

De repository bevat momenteel:

index.html
course.html
app.js
data.js
style.css

docs/
chatgpt-context.md
index.html

Cursusselectie.

course.html

Quiztrainer.

app.js

Bevat de quiz engine en alle logica.

data.js

Bevat alle cursussen en datasets.

style.css

Bevat alle styling.

4. Dataflow

De applicatie werkt als volgt:

index.html
↓
gebruiker kiest cursus
↓
course.html?course=<courseId>
↓
app.js leest courseId uit URL
↓
activeCourse wordt geladen uit data.js
↓
quiz wordt gegenereerd
5. Course model (data.js)

Elke cursus volgt dit model:

course = {

  id
  subject
  level
  grade

  title

  chapters

  datasets

  modes
}
6. Chapters

Hoofdstukken bepalen hoe vragen gegroepeerd worden.

{
 id
 subjectId
 title
}

Voorbeeld:

{
 id: "his-h1",
 subjectId: "geschiedenis",
 title: "Staatsinrichting van Nederland"
}
7. Datasets

De inhoud van een cursus staat in datasets.

datasets: {
 terms
 years
 persons
}
terms

Begrippen.

{
 id
 chapterId
 prompt
 answer
}

Voorbeeld:

{
 id: "his-001",
 chapterId: "his-h1",
 prompt: "Interbellum",
 answer: "De periode tussen de Eerste en Tweede Wereldoorlog"
}
years

Jaartallen.

{
 id
 chapterId
 year
 event
}
persons (toekomst)

Voor vragen zoals:

persoon → beschrijving

beschrijving → persoon

Structuur:

{
 id
 chapterId
 name
 description
}
8. Modes

Modes bepalen hoe datasets geoefend worden.

Voorbeeld:

modes: [
 {
  id
  label
  dataset
 }
]

Concrete voorbeelden:

term-to-answer
answer-to-term
years
event-years

Elke mode bepaalt:

welke dataset gebruikt wordt

hoe de vraag wordt opgebouwd

9. Compatibiliteit

De app ondersteunt tijdelijk oude en nieuwe datastructuren.

Oud model:

items
years

Nieuw model:

datasets.terms
datasets.years

app.js gebruikt helperfuncties:

getCourseTerms()
getCourseYears()

Dit voorkomt dat bestaande cursussen breken tijdens migratie.

10. UX-principes

Belangrijke regels voor de interface:

één scherm tegelijk

geen splitscreen layouts

quiz start → selectie verdwijnt

vraag staat los van antwoorden

feedback verschijnt in popup

Structuur van een vraag:

vraag
↓
antwoorden
↓
feedback
11. Huidige status

Momenteel werkt:

cursusselectie

hoofdstukselectie

quiz engine

meerdere oefenvormen

datasets architectuur

De cursus:

geschiedenis-mavo-4

gebruikt al het nieuwe datasetmodel.

De cursus:

geschiedenis-havo-3

is een dummy dataset voor testen.

12. Toekomstige uitbreidingen

Geplande features:

Nieuwe datasets:

persons
images
sources
maps

Nieuwe vraagtypes:

persoon → beschrijving
afbeelding → naam
kaart herkennen
tijdlijn ordenen

Mogelijk later:

leerlingaccounts
fouten-trainer
voortgang
13. Ontwikkelprincipes

Belangrijke regels voor ontwikkeling:

Data model eerst, UI daarna.

Cursus bepaalt datasets en modes.

app.js blijft generiek.

Nieuwe features worden eerst in data.js ontworpen.
