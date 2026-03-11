KennisSprint – Data Model

version: 1.0
last updated: 2026-03-11


--------------------------------------------------
DOEL VAN DIT DOCUMENT
--------------------------------------------------

Dit document beschrijft het datamodel van KennisSprint.

Belangrijk onderscheid:

1. Course Content Model
   = de leerstof zelf

2. Learner Progress Model
   = de voortgang van een specifieke leerling

Deze twee modellen moeten strikt gescheiden blijven.

De cursusdata beschrijft wat geleerd moet worden.
De voortgangsdata beschrijft hoe ver een leerling is.


--------------------------------------------------
1 COURSE CONTENT MODEL
--------------------------------------------------

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


Verplichte velden:

id
subject
level
grade
title
chapters
datasets
modes


Voorbeeld:

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


Betekenis:

id
unieke cursus-id

subject
vaknaam

level
onderwijsniveau

grade
leerjaar / examenjaar

title
titel zoals zichtbaar in de UI



--------------------------------------------------
2 CHAPTER MODEL
--------------------------------------------------

Hoofdstukken groeperen kaarten binnen een cursus.

Structuur:

{
  id,
  subjectId,
  title
}


Voorbeeld:

{
  id: "his-h1",
  subjectId: "geschiedenis",
  title: "Staatsinrichting van Nederland"
}


Betekenis:

id
unieke hoofdstuk-id

subjectId
vak-id of inhoudelijke koppeling

title
zichtbare titel in de interface



--------------------------------------------------
3 DATASETS
--------------------------------------------------

Elke cursus bevat datasets.

Structuur:

datasets = {
  terms: [],
  years: [],
  persons: []
}


Niet elke cursus hoeft alle datasets te gebruiken.


--------------------------------------------------
4 TERMS DATASET
--------------------------------------------------

Begrippen en definities.

Structuur:

{
  id,
  chapterId,
  type,
  prompt,
  answer
}


Voorbeeld:

{
  id: "his-001",
  chapterId: "his-h1",
  type: "begrip",
  prompt: "Interbellum",
  answer: "De periode tussen de Eerste en Tweede Wereldoorlog"
}


Betekenis:

id
unieke kaart-id

chapterId
koppeling naar hoofdstuk

type
inhoudstype, bijvoorbeeld "begrip"

prompt
vraagzijde van de kaart

answer
antwoordzijde van de kaart



--------------------------------------------------
5 YEARS DATASET
--------------------------------------------------

Jaartallen en gebeurtenissen.

Structuur:

{
  id,
  chapterId,
  year,
  event
}


Voorbeeld:

{
  id: "his-y-001",
  chapterId: "his-h2",
  year: "1914",
  event: "Begin van de Eerste Wereldoorlog"
}


Deze dataset wordt in de quiz omgezet naar:

prompt = year
answer = event

of omgekeerd, afhankelijk van de mode.



--------------------------------------------------
6 PERSONS DATASET
--------------------------------------------------

Personen en beschrijvingen.

Structuur:

{
  id,
  chapterId,
  name,
  description
}


Voorbeeld:

{
  id: "his-p-001",
  chapterId: "his-h3",
  name: "Thorbecke",
  description: "Belangrijke staatsman bij de grondwetsherziening van 1848"
}



--------------------------------------------------
7 MODES MODEL
--------------------------------------------------

Modes bepalen hoe een dataset geoefend wordt.

Structuur:

{
  id,
  label,
  dataset
}


Voorbeeld:

{
  id: "term-to-answer",
  label: "Begrip → beschrijving",
  dataset: "terms"
}


Een mode beschrijft:

- welke dataset gebruikt wordt
- in welke richting de vraag wordt opgebouwd

Voorbeelden:

term-to-answer
answer-to-term
years
event-years
person-to-description
description-to-person



--------------------------------------------------
8 COURSE CATALOG MODEL
--------------------------------------------------

Alle beschikbare cursussen staan in een centrale catalogus.

Structuur:

courseCatalog = [
  course,
  course,
  course
]


Deze catalogus bepaalt:

- welke vakken zichtbaar zijn
- welke niveaus bestaan
- welke leerjaren beschikbaar zijn

Als een cursus niet in de catalogus staat,
bestaat hij niet voor de UI.



--------------------------------------------------
9 LEARNER PROGRESS MODEL
--------------------------------------------------

De progress van een leerling hoort niet in de cursusdata.

Die staat apart in Supabase.

De kern is:

één leerling
+
één kaart
=
één voortgangsrecord


Structuur conceptueel:

card_progress = {
  user_id,
  card_id,
  correct_count,
  wrong_count,
  typed_correct_count,
  last_seen,
  mastery_state
}


Niet alle velden hoeven direct al gebouwd te zijn,
maar dit is de richting van het model.



--------------------------------------------------
10 HUIDIGE DATABASETABEL: CARDS_PROGRESS
--------------------------------------------------

De huidige tabel bevat:

user_id
card_id
level
correct_count
wrong_count
last_seen


Betekenis:

user_id
welke leerling

card_id
welke kaart

level
huidige voortgangsstatus

correct_count
hoe vaak correct

wrong_count
hoe vaak fout

last_seen
laatste oefenmoment



--------------------------------------------------
11 MASTERY-STATUS
--------------------------------------------------

Didactisch is level alleen niet genoeg.

De gewenste mastery-logica is:

een kaart is mastered wanneer:

- minstens 3 correcte antwoorden zijn gegeven
- én minstens 1 typed recall correct is uitgevoerd


Daarom beweegt het model richting een expliciete mastery-status.


Voorkeursstatussen:

grijs
nieuw

groen
in training

blauw
goed beheerst

paars
volledig beheerst

oranje
perfect beheerst


Betekenis:

grijs
nog niet geoefend

groen
eerste successen

blauw
meerdere correcte antwoorden

paars
mastery bereikt

oranje
mastery + typen correct bevestigd



--------------------------------------------------
12 AANBEVOLEN UITBREIDING VAN PROGRESSMODEL
--------------------------------------------------

Voor de mastery-trainer zijn op termijn deze velden logisch:

typed_correct_count
hoe vaak typed recall correct was

mastery_state
expliciete status voor UI en leerlogica

next_review_at
voor spaced repetition

streak_correct
optioneel voor leeranalyse


Mogelijke toekomstige structuur:

{
  user_id,
  card_id,
  correct_count,
  wrong_count,
  typed_correct_count,
  mastery_state,
  last_seen,
  next_review_at
}



--------------------------------------------------
13 RELATIE TUSSEN CONTENT EN PROGRESS
--------------------------------------------------

Belangrijk principe:

de cursusdata is statisch
de progressdata is persoonlijk


Voorbeeld:

course.datasets.terms bevat:
"Interbellum"

cards_progress bevat voor leerling X:
hoe vaak "Interbellum" goed of fout ging


Dus:

course model
= waarheid van de inhoud

progress model
= waarheid van de leerlingstatus



--------------------------------------------------
14 PROGRESS PER HOOFDSTUK
--------------------------------------------------

Hoofdstukprogress wordt niet los opgeslagen,
maar berekend uit kaarten.

Formule:

mastered_cards / total_cards


Voorbeeld:

Hoofdstuk 2
24 kaarten totaal
15 mastered

progress = 15 / 24



--------------------------------------------------
15 PROGRESS PER VAK
--------------------------------------------------

Vakprogress wordt ook berekend uit kaarten.

Formule:

mastered_cards / total_cards binnen dat vak


Voorbeeld:

Economie
120 kaarten totaal
72 mastered

progress = 60%



--------------------------------------------------
16 DASHBOARD DATA
--------------------------------------------------

Het vakdashboard gebruikt afgeleide data uit:

- courseCatalog
- cards_progress


Per vak wil het dashboard uiteindelijk tonen:

vaknaam
totaal kaarten
mastered kaarten
mastery percentage
aanbevolen volgende actie



--------------------------------------------------
17 BELANGRIJKE ONTWERPREGEL
--------------------------------------------------

Nieuwe features mogen het content model niet vervuilen.

Dus:

mastery
typed recall
review planning
scores
leerlingstatus

horen nooit in de course files.


Course files bevatten alleen:

inhoud
structuur
oefenvormen



--------------------------------------------------
SAMENVATTING
--------------------------------------------------

KennisSprint werkt met twee gescheiden datalagen.

1. Course Content Model
   beschrijft de leerstof

2. Learner Progress Model
   beschrijft de voortgang van een leerling

Deze scheiding is essentieel voor:

- meerdere leerlingen
- mastery tracking
- vakdashboard
- hoofdstukprogress
- aanbevolen oefensessies
- latere leaderboard functionaliteit
