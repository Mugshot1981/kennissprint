KennisSprint – System Overview

version: 1.0
last updated: 2026-03-12

DOEL VAN DIT DOCUMENT

Dit document geeft een kort totaaloverzicht van KennisSprint.

Het beschrijft:

wat het systeem is

uit welke lagen het bestaat

hoe data door het systeem stroomt

wat de kernlogica is

Dit document is bedoeld als snelle ingang voor:

nieuwe ontwikkelsessies

nieuwe ChatGPT-chats

toekomstige developers

WAT IS KENNISSPRINT

KennisSprint is een webgebaseerde mastery trainer voor examenleerlingen.

De app helpt leerlingen om begrippen stap voor stap te beheersen door middel van:

retrieval practice

mastery progression

progress feedback

De leerling oefent niet oneindig door alle leerstof, maar werkt in korte sessies van 10 kaarten die gekozen worden op basis van voortgang.

KERNIDEE

KennisSprint is geen gewone quiz-app.

De kern is:

leerinhoud
→ slimme selectie
→ oefensessie
→ feedback
→ progress update
→ volgende slimme selectie

Dus niet:

alles door elkaar oefenen

maar:

oefenen op wat nog niet beheerst wordt
SYSTEEMLAGEN

KennisSprint bestaat uit vier hoofdlagen.

1. Course Content Layer
2. Quiz Engine Layer
3. Progress Layer
4. UI Layer
1. COURSE CONTENT LAYER

Deze laag bevat de leerinhoud.

Bestaat uit:

courses

chapters

datasets

modes

Voorbeelden:

geschiedenis-mavo-4

economie-mavo-4

aardrijkskunde-mavo-4

De contentlaag beschrijft alleen:

wat geleerd moet worden

hoe het gegroepeerd is

welke oefenvormen bestaan

Hier staat geen leerlingdata in.

2. QUIZ ENGINE LAYER

Deze laag draait in app.js.

De engine doet:

cursus laden

hoofdstukken selecteren

mode kiezen

kaarten selecteren

vragen bouwen

antwoorden controleren

sessie afronden

De engine is generiek.

Dat betekent:

nieuwe vakken moeten kunnen werken zonder nieuwe app-logica

de engine leest alles uit de cursusdata

3. PROGRESS LAYER

Deze laag bewaart de voortgang van de leerling.

Opslag gebeurt in Supabase, vooral in:

cards_progress

Per kaart wordt bijgehouden:

user_id

card_id

level

correct_count

wrong_count

last_seen

In de frontend wordt dit geladen in:

progressMap

Structuur:

progressMap[cardId] = level

Deze laag bepaalt:

mastery-kleuren

aanbevolen sessies

sessiefeedback

toekomstige dashboards

4. UI LAYER

De UI bestaat uit vier hoofdschermen:

login.html

profile.html

index.html

course.html

Belangrijkste scherm voor de leerloop:

course.html

Daar ziet de leerling:

hoofdstuktegels

oefenvorm

aanbevolen sessie starten

quizinterface

sessieresultaat

VISUEEL ARCHITECTUURDIAGRAM
Course files
(chapters / datasets / modes)
        ↓
courseCatalog
        ↓
activeCourse
        ↓
Quiz engine (app.js)
        ↓
Session builder
        ↓
Question builder
        ↓
Answer evaluation
        ↓
saveCardProgress()
        ↓
Supabase cards_progress
        ↓
loadProgressMap()
        ↓
progressMap
        ↓
UI feedback / mastery colors / next session
DATAFLOW VAN EEN OEFENSESSIE

Wanneer een leerling een sessie start:

Stap 1 — cursus laden

course.html?course=... bepaalt welke cursus actief is.

Stap 2 — hoofdstukken en mode kiezen

De leerling kiest:

één of meer hoofdstukken

een oefenvorm

Stap 3 — beschikbare kaarten bepalen

De engine haalt kaarten uit de juiste dataset op basis van:

actieve cursus

gekozen hoofdstukken

gekozen mode

Stap 4 — aanbevolen sessie samenstellen

De engine kiest standaard:

10 kaarten

Prioriteit ligt bij:

lage mastery

recente fouten

nieuwe kaarten

Stap 5 — vragen genereren

Per kaart wordt een vraag opgebouwd met:

prompt

correct antwoord

foutopties

Stap 6 — antwoord verwerken

Na elk antwoord:

goed/fout registreren

progress opslaan

feedback tonen

volgende vraag laden

Stap 7 — sessie afronden

Na 10 vragen:

score tonen

fouten tonen

sessieresultatenlijst tonen

begripkleuren tonen op basis van mastery

MASTERY MODEL

Elke kaart heeft een mastery level.

0 = nieuw
1 = in training
2 = goed beheerst
3 = mastered
4 = perfect mastered

UI-kleuren:

grijs   = nieuw
groen   = in training
blauw   = goed beheerst
paars   = mastered
oranje  = perfect mastered

Deze kleuren worden gebruikt in:

hoofdstuktegels

sessie-eindscherm

toekomstige dashboards

BELANGRIJKSTE ACTIEVE FEATURES

Op dit moment ondersteunt het systeem:

course-based architectuur

Supabase login

profielcontrole

hoofdstukselectie met tegelgrid

aanbevolen sessie van 10 kaarten

opslag van kaartprogress

mastery-kleur op hoofdstukken

mastery-kleur in sessie-eindscherm

fouten opnieuw oefenen

BELANGRIJKSTE OPENSTAANDE UITBREIDINGEN

De architectuur is nu klaar voor:

retrieval-first flow

typed recall

spaced repetition

vakdashboard met progress

hoofdstukprogressbars

aanbevolen sessie vanaf home

docentinzichten

classcode / klasstructuur

BELANGRIJKSTE ONTWERPREGELS
1. Content en progress blijven gescheiden

Course files bevatten alleen:

inhoud

structuur

modes

Supabase bevat alleen:

leerlingstatus

progress

accounts

2. app.js blijft generiek

Nieuwe cursussen mogen niet vragen om nieuwe logica in de engine.

3. card_id is de sleutel van het systeem

Alles hangt aan de kaart-id:

progress

mastery

sessieselectie

feedback

4. Kleine sessies zijn de standaard

Niet alles in één keer oefenen, maar:

10 kaarten per sessie

Dat houdt het systeem licht en effectief.

SAMENVATTING IN ÉÉN BLOK
KennisSprint is een statische webapp met Supabase,
waarin course data en learner progress strikt gescheiden zijn.

Course files leveren de inhoud.
app.js bouwt daar sessies en vragen van.
Supabase bewaart progress per kaart.
progressMap vertaalt databaseprogress naar UI en selectie.

De app werkt als mastery trainer:
niet alles oefenen,
maar steeds de juiste volgende 10 kaarten.

Frontend
  HTML + CSS + Vanilla JS

Supabase
  auth
  profiles
  cards_progress

Dataset
  static data.js

Belangrijk detail:

course content = static
user progress = Supabase
