KennisSprint – Engine Model

version: 1.0
last updated: 2026-03-12

DOEL VAN DIT DOCUMENT

Dit document beschrijft de engine van KennisSprint.

De engine is verantwoordelijk voor:

het selecteren van kaarten voor een oefensessie

het genereren van vragen

het controleren van antwoorden

het bijwerken van mastery-progress

De engine vormt de logische laag tussen:

course content
↓
quiz engine
↓
learner progress
OVERZICHT VAN DE LEERENGINE

De leerengine doorloopt tijdens een sessie steeds dezelfde cyclus.

dataset
↓
session builder
↓
question builder
↓
answer evaluation
↓
progress update
↓
next question

Deze cyclus wordt herhaald totdat de sessie is afgerond.

1 DATASET SELECTIE

De engine start met het laden van de dataset van de cursus.

Voorbeeld:

course.datasets.terms
course.datasets.years
course.datasets.persons

Welke dataset gebruikt wordt, hangt af van de mode.

Voorbeeld:

mode = term-to-answer
dataset = terms
2 SESSION BUILDER

De session builder bepaalt welke kaarten geoefend worden.

De standaard sessie bevat:

10 kaarten

De kaarten worden geselecteerd uit de gekozen hoofdstukken.

Selectieregels

De engine kiest kaarten met prioriteit op basis van mastery.

Prioriteit:

1 kaarten die recent fout zijn beantwoord
2 kaarten met lage mastery-levels
3 nieuwe kaarten

Kaarten die al volledig mastered zijn kunnen tijdelijk worden overgeslagen.

3 QUESTION BUILDER

De question builder maakt een quizvraag van een kaart.

Voorbeeld kaart:

prompt: Interbellum
answer: periode tussen WO1 en WO2

Voor multiple choice worden distractors gegenereerd.

Structuur van een vraag:

question = {
  prompt,
  correctOption,
  wrongOptions[]
}

De verkeerde opties worden gekozen uit andere kaarten binnen dezelfde dataset.

4 ANTWOORDVERWERKING

Wanneer een leerling een antwoord kiest:

1 antwoord wordt gecontroleerd
2 feedback wordt getoond
3 resultaat wordt opgeslagen in de sessie

Sessieresultaat:

sessionResults.push({
  cardId,
  correct
})
5 SESSION RESULT LIST

Aan het einde van een sessie wordt een overzicht getoond.

Voor elke kaart:

▲ +1 correct
▼ -1 fout

Daarnaast wordt de huidige mastery-kleur van het begrip getoond.

De kleur wordt bepaald via:

progressMap[cardId]
↓
getMasteryClass(level)
6 PROGRESS UPDATE

Na elk antwoord wordt de voortgang van de kaart aangepast.

De database bevat per kaart:

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
Update regels

Correct antwoord:

correct_count++
level++

Fout antwoord:

wrong_count++

Het level heeft een bovengrens.

max level = 4
7 MASTERY LEVELS

De engine gebruikt vijf mastery-levels.

0 nieuw
1 in training
2 goed beheerst
3 mastered
4 perfect mastered

Deze levels bepalen:

kleur van het begrip

selectie van kaarten

dashboardprogress

8 CLIENT PROGRESSMAP

Wanneer een cursus wordt geladen, wordt de progressdatabase vertaald naar een client-map.

Structuur:

progressMap = {
  cardId : level
}

Deze map wordt gebruikt voor:

vraagselectie
kleur van begrippen
sessieresultaten
progressberekeningen
9 EINDE VAN EEN SESSIE

Wanneer alle vragen zijn beantwoord:

session complete

De leerling ziet:

score
sterren
fouten
sessielijst

Daarna kan de leerling:

opnieuw oefenen
fouten opnieuw oefenen
nieuw hoofdstuk kiezen
10 FOUTEN TRAINER

Tijdens een sessie worden fouten opgeslagen.

wrongItems[]

Na een sessie kan de leerling kiezen:

Oefen fouten opnieuw

Dan wordt een nieuwe sessie gestart met alleen deze kaarten.

11 TOEKOMSTIGE UITBREIDINGEN

De engine is ontworpen om later uitgebreid te worden.

Geplande uitbreidingen:

Typed recall

Leerlingen typen zelf het antwoord.

Spaced repetition

Nieuwe databasevelden:

next_review_at
review_interval
Adaptive difficulty

De engine kan moeilijkere vragen selecteren op basis van mastery.

SAMENVATTING

De KennisSprint engine verbindt inhoud, oefensessies en progress.

De leerloop van een kaart is:

kaart
↓
vraag
↓
antwoord
↓
progress update
↓
nieuwe vraag

Door deze cyclus herhaald uit te voeren ontstaat een mastery learning systeem waarin leerlingen stap voor stap kennis opbouwen.
