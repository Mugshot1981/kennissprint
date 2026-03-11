KennisSprint – Architectuur

version: 1.0
last updated: 2026-03-11


--------------------------------------------------
OVERZICHT
--------------------------------------------------

KennisSprint is een webgebaseerde leerapplicatie.

De applicatie bestaat uit een statische frontend
gehost op GitHub Pages en een cloud database via Supabase.

Architectuurtype:

static frontend + managed backend services


Technologie:

HTML
CSS
JavaScript (ES modules)
Supabase


De applicatie heeft geen eigen backendserver.



--------------------------------------------------
HOOFDCOMPONENTEN
--------------------------------------------------

De applicatie bestaat uit vier kernonderdelen:

1 Frontend pagina’s
2 Quiz engine
3 Course content systeem
4 Supabase data opslag



--------------------------------------------------
PAGINA ARCHITECTUUR
--------------------------------------------------

De applicatie bevat vier hoofdschermen.


login.html

Authenticatie via Supabase.



profile.html

Gebruiker kiest schermnaam.



index.html

Vakdashboard en cursusselectie.



course.html

Trainerinterface voor een specifieke cursus.



--------------------------------------------------
NAVIGATIE FLOW
--------------------------------------------------

login.html
↓
index.html
↓
course.html?course=ID


course.html leest de cursus-id uit de URL.


Voorbeeld:

course.html?course=geschiedenis-mavo-4



--------------------------------------------------
QUIZ ENGINE
--------------------------------------------------

De quiz engine draait volledig in:

app.js


Taken van de quiz engine:

- laden van cursusdata
- hoofdstukselectie
- vraaggeneratie
- antwoordcontrole
- feedback
- sessievoortgang
- opslag van kaartprogress



Belangrijk principe:

app.js is generiek.

Alle cursuslogica komt uit de cursusdata.



--------------------------------------------------
COURSE CONTENT SYSTEEM
--------------------------------------------------

De inhoud van de app staat volledig in course bestanden.

Structuur:

courses/
  geschiedenis-mavo-4.js
  economie-mavo-4.js
  aardrijkskunde-mavo-4.js



Deze bestanden worden geïmporteerd door:

courseCatalog.js



courseCatalog bevat een lijst van alle beschikbare cursussen.



--------------------------------------------------
COURSE MODEL
--------------------------------------------------

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



--------------------------------------------------
DATASETS
--------------------------------------------------

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



--------------------------------------------------
MODES
--------------------------------------------------

Modes bepalen hoe datasets geoefend worden.

structuur

{
  id
  label
  dataset
}


Voorbeelden

term-to-answer
answer-to-term
years
event-years



--------------------------------------------------
SUPABASE ARCHITECTUUR
--------------------------------------------------

Supabase wordt gebruikt voor:

authenticatie
gebruikersprofielen
voortgang per kaart



Tabellen:

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



--------------------------------------------------
AUTH FLOW
--------------------------------------------------

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

redirect naar login.html.



--------------------------------------------------
COURSE DATAFLOW
--------------------------------------------------

Wanneer een gebruiker een cursus opent:

index.html
↓
course.html?course=id
↓
app.js leest courseId
↓
courseCatalog wordt geladen
↓
activeCourse wordt geselecteerd



Daarna:

hoofdstukken laden
dataset laden
quiz starten



--------------------------------------------------
VRAAGGENERATIE
--------------------------------------------------

De quiz engine genereert vragen dynamisch.

Proces:

1 dataset selecteren
2 items filteren op hoofdstuk
3 juiste antwoord bepalen
4 foutopties genereren
5 antwoorden shuffle



Elke vraag bevat:

prompt
correctAnswer
multipleChoiceOptions



--------------------------------------------------
SESSIE MODEL
--------------------------------------------------

Een trainingssessie bevat:

een reeks kaarten uit geselecteerde hoofdstukken.



Tijdens een sessie wordt bijgehouden:

scoreCorrect
scoreTotal
wrongItems
remainingQuestions



Aan het einde verschijnt een eindscherm.



--------------------------------------------------
PROGRESS OPSLAG
--------------------------------------------------

Na elk antwoord wordt kaartprogress opgeslagen.

Functie:

saveCardProgress()



Deze functie:

1 leest bestaande progress
2 verhoogt correct of wrong count
3 update level
4 slaat nieuwe waarde op in Supabase



--------------------------------------------------
ARCHITECTUURPRINCIPES
--------------------------------------------------

Belangrijke ontwerpregels.


Frontend blijft statisch.

Alle dynamische data komt uit:

course bestanden
Supabase



app.js blijft generiek.

Nieuwe cursussen mogen geen codewijzigingen vereisen.



Course bestanden bevatten alleen:

inhoud
structuur
vraagtypes



Gebruikersdata staat alleen in Supabase.



--------------------------------------------------
UITBREIDBAARHEID
--------------------------------------------------

De architectuur maakt uitbreiding eenvoudig.


Nieuwe vakken

nieuw course bestand
toevoegen aan courseCatalog



Nieuwe vraagtypes

nieuw mode object



Nieuwe datasets

dataset toevoegen aan course model



Nieuwe features

uitbreiding in app.js



--------------------------------------------------
TOEKOMSTIGE COMPONENTEN
--------------------------------------------------

De architectuur is voorbereid op:


mastery dashboard
aanbevolen oefensessie
spaced repetition
classrooms
leaderboards
docent dashboards



--------------------------------------------------
SAMENVATTING
--------------------------------------------------

KennisSprint bestaat uit:

statische frontend
generieke quiz engine
modulaire cursusdata
Supabase voor gebruikersdata


Deze scheiding maakt het systeem:

uitbreidbaar
onderhoudbaar
geschikt voor meerdere vakken
geschikt voor meerdere leerlingen

