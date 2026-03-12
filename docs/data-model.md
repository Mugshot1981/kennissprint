KennisSprint – Data Model

version: 2.0
last updated: 2026-03-12

DOEL VAN DIT DOCUMENT

Dit document beschrijft het datamodel van KennisSprint.

Het systeem bestaat uit twee strikt gescheiden datalagen:

1. Course Content Model
De leerstof zelf.

2. Learner Progress Model
De voortgang van een specifieke leerling.

Deze scheiding is essentieel voor:

meerdere leerlingen

mastery tracking

vakdashboards

aanbevolen oefensessies

toekomstige leaderboards

De cursusdata beschrijft wat geleerd moet worden.
De voortgangsdata beschrijft hoe ver een leerling is.

1 COURSE CONTENT MODEL

Een cursus beschrijft één vak op één niveau en leerjaar.

Structuur:

course = {
  id,
  subject,
  level,
  grade,
  title,
  chapters,
  datasets,
  modes
}
Betekenis
veld	betekenis
id	unieke cursus-id
subject	vaknaam
level	onderwijsniveau
grade	leerjaar
title	titel zichtbaar in UI
chapters	lijst van hoofdstukken
datasets	datasets met kaarten
modes	oefenvormen
Voorbeeld
{
  id: "geschiedenis-mavo-4",
  subject: "geschiedenis",
  level: "mavo",
  grade: "4",
  title: "Geschiedenis 4 mavo",
  chapters: [...],
  datasets: {...},
  modes: [...]
}
2 CHAPTER MODEL

Hoofdstukken groeperen kaarten binnen een cursus.

Structuur:

{
  id,
  subjectId,
  title
}
Voorbeeld
{
  id: "his-h1",
  subjectId: "geschiedenis",
  title: "Staatsinrichting van Nederland"
}
Betekenis
veld	betekenis
id	unieke hoofdstuk-id
subjectId	inhoudelijke koppeling naar vak
title	titel zichtbaar in de UI
3 DATASETS

Elke cursus bevat datasets met kaarten.

Structuur:

datasets = {
  terms: [],
  years: [],
  persons: []
}

Niet elke cursus hoeft alle datasets te gebruiken.

Datasets beschrijven alle leerinhoud.

4 TERMS DATASET

Begrippen en definities.

Structuur:

{
  id,
  chapterId,
  type,
  prompt,
  answer
}
Voorbeeld
{
  id: "his-001",
  chapterId: "his-h1",
  type: "begrip",
  prompt: "Interbellum",
  answer: "De periode tussen de Eerste en Tweede Wereldoorlog"
}
Betekenis
veld	betekenis
id	unieke kaart-id
chapterId	koppeling naar hoofdstuk
type	inhoudstype
prompt	vraagzijde
answer	antwoordzijde
Belangrijk
terms.id = card_id

De id van een dataset-item wordt gebruikt als card_id in de progressdatabase.

Dus:

terms.id → cards_progress.card_id

Dit vormt de koppeling tussen inhoud en leerlingprogress.

5 YEARS DATASET

Jaartallen en gebeurtenissen.

Structuur:

{
  id,
  chapterId,
  year,
  event
}
Voorbeeld
{
  id: "his-y-001",
  chapterId: "his-h2",
  year: "1914",
  event: "Begin van de Eerste Wereldoorlog"
}

Tijdens het oefenen kan dit worden omgezet naar:

prompt = year
answer = event

of omgekeerd afhankelijk van de oefenmode.

6 PERSONS DATASET

Personen en beschrijvingen.

Structuur:

{
  id,
  chapterId,
  name,
  description
}
Voorbeeld
{
  id: "his-p-001",
  chapterId: "his-h3",
  name: "Thorbecke",
  description: "Belangrijke staatsman bij de grondwetsherziening van 1848"
}
7 MODES MODEL

Modes bepalen hoe een dataset geoefend wordt.

Structuur:

{
  id,
  label,
  dataset
}
Voorbeeld
{
  id: "term-to-answer",
  label: "Begrip → beschrijving",
  dataset: "terms"
}
Voorbeelden van modes
term-to-answer
answer-to-term
years-to-event
event-to-years
person-to-description
description-to-person

Modes bepalen:

welke dataset gebruikt wordt

hoe de vraag wordt opgebouwd

8 COURSE CATALOG MODEL

Alle cursussen staan in een centrale catalogus.

Structuur:

courseCatalog = [
  course,
  course,
  course
]

De catalogus bepaalt:

welke vakken bestaan

welke niveaus bestaan

welke leerjaren beschikbaar zijn

Als een cursus niet in de catalogus staat, bestaat hij niet in de UI.

9 LEARNER PROGRESS MODEL

De progress van een leerling staat niet in de cursusdata.

Deze staat in Supabase.

De kernregel:

één leerling + één kaart
→ één progressrecord
10 DATABASETABEL: cards_progress

De huidige tabel:

cards_progress

Structuur:

{
  user_id,
  card_id,
  level,
  correct_count,
  wrong_count,
  last_seen
}
Betekenis
veld	betekenis
user_id	welke leerling
card_id	welke kaart
level	mastery-level
correct_count	aantal correcte antwoorden
wrong_count	aantal foute antwoorden
last_seen	laatste oefenmoment
11 MASTERY LEVEL MODEL

Mastery wordt intern opgeslagen als numeriek level.

0 nieuw
1 in training
2 goed beheerst
3 mastered
4 perfect mastered
UI kleuren
level 0 → grijs
level 1 → groen
level 2 → blauw
level 3 → paars
level 4 → oranje

Deze kleuren worden gebruikt in:

het sessie-eindscherm

toekomstige dashboards

hoofdstukprogressie

12 CLIENT-SIDE PROGRESSMAP

Bij het laden van een cursus wordt de database vertaald naar een client-map.

Structuur:

progressMap = {
  cardId : level
}

Voorbeeld:

{
  "his-001": 2,
  "his-002": 1,
  "his-003": 3
}

Deze map wordt gebruikt voor:

mastery-kleur van begrippen

selectie van oefenkaarten

sessiefeedback

progressberekeningen

13 RELATIE TUSSEN CONTENT EN PROGRESS

Belangrijk principe:

course data = inhoud
progress data = leerlingstatus

Voorbeeld:

course.datasets.terms
→ bevat begrip "Interbellum"
cards_progress
→ bevat hoe vaak leerling X dit goed/fout had

Dus:

terms.id → cards_progress.card_id
14 PROGRESS PER HOOFDSTUK

Hoofdstukprogress wordt berekend uit kaarten.

Formule:

mastered_cards / total_cards
Voorbeeld
Hoofdstuk 3
24 kaarten
15 mastered

progress = 15 / 24

Dit wordt weergegeven als een progressbar.

15 PROGRESS PER VAK

Vakprogress wordt ook berekend uit kaarten.

Formule:

mastered_cards / total_cards
Voorbeeld
Economie
120 kaarten
72 mastered

progress = 60%
16 DASHBOARD DATA

Het vakdashboard combineert:

courseCatalog
cards_progress

Per vak wil het dashboard tonen:

vaknaam
totaal kaarten
mastered kaarten
mastery percentage
aanbevolen actie
17 BELANGRIJKE ONTWERPREGEL

Nieuwe features mogen het content model niet vervuilen.

Dus horen nooit in course files:

mastery
typed recall
review planning
scores
leerlingstatus

Course files bevatten alleen:

inhoud
structuur
oefenvormen
SAMENVATTING

KennisSprint werkt met twee gescheiden datalagen.

Course Content Model

beschrijft de leerstof.

Learner Progress Model

beschrijft de voortgang van een leerling.

Deze scheiding maakt mogelijk:

meerdere leerlingen

mastery tracking

vakdashboards

hoofdstukprogress

aanbevolen oefensessies

toekomstige leaderboards
