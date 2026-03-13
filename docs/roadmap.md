KennisSprint – Roadmap

version: 1.0
last updated: 2026-03-11


--------------------------------------------------
OVERZICHT
--------------------------------------------------

De ontwikkeling van KennisSprint verloopt in fasen.

Elke fase voegt een nieuw niveau van functionaliteit toe.

Volgorde:

1 Core platform
2 Leerlogica
3 Progress & dashboards
4 Adaptief leren
5 Klassen & competitie
6 Docentplatform



--------------------------------------------------
FASE 1 — CONTENT PLATFORM
--------------------------------------------------

Doel:
een schaalbare cursusarchitectuur bouwen.

Onderdelen:

course model
chapters model
datasets model
modes model
courseCatalog systeem

Datasets:

terms
years


Resultaat:

meerdere vakken kunnen worden toegevoegd
zonder codewijzigingen.



--------------------------------------------------
FASE 2 — QUIZ ENGINE
--------------------------------------------------

Doel:
een generieke trainer bouwen.

Onderdelen:

vraaggenerator
multiple choice engine
shuffle algoritme
hoofdstukselectie
feedback systeem
eindscherm


Resultaat:

leerlingen kunnen begrippen oefenen
per hoofdstuk.



--------------------------------------------------
FASE 3 — GEBRUIKERSYSTEEM
--------------------------------------------------

Doel:
persoonlijke voortgang mogelijk maken.

Onderdelen:

Supabase project
authenticatie
leerlingaccounts
profiles tabel
classcode systeem
cards_progress opslag


Resultaat:

voortgang per leerling wordt opgeslagen.



--------------------------------------------------
FASE 4 — MASTERY ENGINE
--------------------------------------------------

Doel:
de app veranderen van quiz naar mastery trainer.

Onderdelen:

mastery model
kaartprogress
kleurstatus systeem
retrieval training
typed recall


Mastery regel:

kaart is mastered wanneer:

- minstens 3 correcte antwoorden
- minstens 1 typed recall


Resultaat:

leerlingen bouwen echte kennis op
in plaats van alleen quizscores.



--------------------------------------------------
FASE 5 — PROGRESS SYSTEM
--------------------------------------------------

Doel:
leerlingen inzicht geven in hun voortgang.

Onderdelen:

progress per hoofdstuk
progress per vak
mastery dashboard
aanbevolen oefensessie
fouten-trainer


Resultaat:

leerlingen zien waar ze staan
en wat ze moeten oefenen.



--------------------------------------------------
FASE 6 — ADAPTIEVE TRAINING
--------------------------------------------------

Doel:
het systeem laten reageren op leerdata.

Onderdelen:

kaartprioritering
moeilijke kaarten vaker tonen
nieuwe kaarten automatisch toevoegen
eerste vorm van spaced repetition


Resultaat:

efficiënter leren
persoonlijke trainingspaden.



--------------------------------------------------
FASE 7 — SCHOOLPLATFORM
--------------------------------------------------

Doel:
KennisSprint geschikt maken voor gebruik op school.

Onderdelen:

leaderboard per klas
klassenbeheer
docent dashboards
inzichten per hoofdstuk
inzichten per kaart


Resultaat:

docenten zien waar leerlingen moeite mee hebben
en kunnen hun lessen daarop aanpassen.



--------------------------------------------------
FASE 8 — UITBREIDING LEERINHOUD
--------------------------------------------------

Nieuwe datasets:

persons
images
maps
sources


Nieuwe vraagtypes:

persoon herkennen
afbeelding herkennen
kaart herkennen
tijdlijn ordenen



--------------------------------------------------
EINDDOEL
--------------------------------------------------

KennisSprint wordt een volledig mastery-learning platform
voor examenleerlingen.

Het systeem combineert:

retrieval practice
mastery learning
adaptieve training
docentinzichten

Phase 1
✓ auth
✓ profiles
✓ course selection
✓ quiz engine
✓ mastery tracking
✓ dashboard

Phase 2
- spaced repetition scheduling
- teacher dashboard
- analytics
- class groups


Het uiteindelijke doel:

leerlingen helpen kennis duurzaam
uit het geheugen te kunnen reproduceren.
