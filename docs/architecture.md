KennisSprint – Architectuur

version: 2.0
last updated: 2026-03-12

OVERZICHT

KennisSprint is een webgebaseerde mastery-learning applicatie voor examenleerlingen.

De applicatie bestaat uit een statische frontend en een cloud database.

Architectuurtype:

static frontend + managed backend services

Technologie:

HTML
CSS
JavaScript (ES modules)
Supabase

Er wordt geen eigen backendserver gebruikt.

HOOFDCOMPONENTEN

De applicatie bestaat uit vijf kernonderdelen.

1 Frontend pagina’s
2 Quiz engine
3 Course content systeem
4 Progress systeem
5 Supabase data opslag
PAGINA ARCHITECTUUR

De applicatie bevat vier hoofdschermen.

login.html
profile.html
index.html
course.html
login.html

Authenticatie via Supabase.

profile.html

Gebruiker kiest schermnaam.

index.html

Vakdashboard en cursusselectie.

course.html

Trainerinterface voor een specifieke cursus.

NAVIGATIE FLOW
login.html
↓
index.html
↓
course.html?course=ID

Voorbeeld:

course.html?course=geschiedenis-mavo-4

De pagina leest de cursus-id uit de URL.

FRONTEND ARCHITECTUUR

Alle frontend logica draait in:

app.js

app.js bevat de volledige quiz engine.

Taken:

laden cursusdata
laden progressdata
sessie samenstellen
vragen genereren
antwoord evalueren
progress bijwerken
UI feedback tonen

Belangrijk principe:

app.js is generiek

Alle cursuslogica komt uit de course data.

COURSE CONTENT SYSTEEM

De leerinhoud staat volledig in course bestanden.

Structuur:

courses/
    geschiedenis-mavo-4.js
    economie-mavo-4.js
    aardrijkskunde-mavo-4.js

Deze bestanden worden geïmporteerd door:

courseCatalog.js

De catalogus bepaalt welke cursussen beschikbaar zijn.

COURSE MODEL

Elke cursus volgt dezelfde structuur.

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

Dit model bepaalt volledig hoe een cursus werkt.

DATASETS

Datasets bevatten de leerinhoud.

datasets = {
  terms
  years
  persons
}
terms

begrippen en definities

years

jaartallen en gebeurtenissen

persons

personen en beschrijvingen

Elke dataset bevat kaarten met een unieke card_id.

MODES

Modes bepalen hoe een dataset geoefend wordt.

Structuur:

{ id, label, dataset }

Voorbeelden:

term-to-answer
answer-to-term
year-to-event
event-to-year
person-to-description
description-to-person

Modes bepalen:

welke dataset gebruikt wordt
hoe de vraag wordt opgebouwd
QUIZ ENGINE

De quiz engine draait volledig in:

app.js

De engine bestaat uit vier stappen.

dataset selectie
↓
session builder
↓
question builder
↓
answer evaluation

Deze cyclus wordt herhaald totdat een sessie eindigt.

SESSION BUILDER

De session builder bepaalt welke kaarten geoefend worden.

Een standaard sessie bevat:

10 kaarten

Selectieprioriteit:

1 kaarten die recent fout gingen
2 kaarten met lage mastery
3 nieuwe kaarten

Dit zorgt ervoor dat leerlingen vooral oefenen wat nog niet beheerst wordt.

QUESTION BUILDER

De question builder genereert een multiple choice vraag.

Proces:

1 kaart selecteren
2 correcte antwoord bepalen
3 foutopties genereren
4 opties randomiseren

Vraagstructuur:

question = {
  prompt,
  correctAnswer,
  options[]
}
SESSION STATE

Tijdens een sessie worden meerdere variabelen bijgehouden.

scoreCorrect
scoreTotal
wrongItems
sessionItems
remainingQuestions
sessionResults

Deze bepalen:

score
progressbar
feedback
sessie-eindscherm
PROGRESS SYSTEEM

De voortgang van leerlingen wordt opgeslagen per kaart.

Database tabel:

cards_progress

Structuur:

{
 user_id
 card_id
 level
 correct_count
 wrong_count
 last_seen
}
CLIENT PROGRESS CACHE

Wanneer een cursus wordt geladen, wordt progress omgezet naar een client-map.

progressMap

Structuur:

progressMap = {
  cardId : level
}

Deze map wordt gebruikt voor:

mastery-kleuren
kaartselectie
sessiefeedback
progressberekeningen

Dit voorkomt dat elke vraag een database call nodig heeft.

MASTERY MODEL

Elke kaart heeft een mastery level.

0 nieuw
1 in training
2 goed beheerst
3 mastered
4 perfect mastered

De UI gebruikt kleuren:

grijs
groen
blauw
paars
oranje

Deze kleuren worden gebruikt in:

sessie-eindscherm
dashboard
hoofdstukprogress
PROGRESS UPDATE

Na elk antwoord wordt progress bijgewerkt.

Functie:

saveCardProgress()

Proces:

1 huidige progress lezen
2 correct_count of wrong_count verhogen
3 mastery level aanpassen
4 progress opslaan in Supabase
SUPABASE ARCHITECTUUR

Supabase wordt gebruikt voor:

authenticatie
gebruikersprofielen
kaartprogress

Belangrijke tabellen:

profiles
classes
cards_progress
profiles
id
display_name
cards_progress
user_id
card_id
level
correct_count
wrong_count
last_seen
AUTH FLOW

Authenticatie gebeurt via Supabase Auth.

Flow:

login.html
↓
supabase.auth.signInWithPassword
↓
index.html

Beschermde pagina’s controleren:

supabase.auth.getUser()

Als geen gebruiker bestaat:

redirect naar login.html
COURSE DATAFLOW

Wanneer een gebruiker een cursus opent:

index.html
↓
course.html?course=id
↓
app.js leest courseId
↓
courseCatalog laden
↓
activeCourse selecteren
↓
dataset laden
↓
progress laden
↓
sessie starten
ARCHITECTUURPRINCIPES

Belangrijke ontwerpregels.

Frontend blijft statisch

Alle dynamische data komt uit:

course bestanden
Supabase
Quiz engine blijft generiek

Nieuwe cursussen mogen geen codewijzigingen vereisen.

Course bestanden bevatten alleen inhoud
inhoud
structuur
vraagtypes
Gebruikersdata staat alleen in Supabase
progress
accounts
profielen
UITBREIDBAARHEID

De architectuur maakt uitbreiding eenvoudig.

Nieuwe vakken:

nieuw course bestand toevoegen

Nieuwe vraagtypes:

nieuw mode object

Nieuwe datasets:

dataset toevoegen aan course model

Nieuwe features:

uitbreiding in app.js
TOEKOMSTIGE COMPONENTEN

De architectuur is voorbereid op:

mastery dashboard
aanbevolen oefensessies
spaced repetition
classrooms
leaderboards
docent dashboards
SAMENVATTING

KennisSprint bestaat uit vier gescheiden lagen.

Course content
↓
Quiz engine
↓
Progress systeem
↓
Dashboard

Deze architectuur maakt het systeem:

uitbreidbaar
onderhoudbaar
geschikt voor meerdere vakken
geschikt voor meerdere leerlingen

Nieuwe flow toevoegen:

login
→ profile check
→ index dashboard
→ course
→ quiz engine
→ progress update
