KennisSprint – ChatGPT Context

version: 0.3
last updated: 2026-03-11

Dit document beschrijft de architectuur, datastructuur, leerlogica en ontwikkelstatus van het project KennisSprint.

Het doel van dit document is dat nieuwe ChatGPT-sessies direct verder kunnen werken zonder eerdere chatcontext.


--------------------------------------------------
PROJECTDOEL
--------------------------------------------------

KennisSprint is een webgebaseerde mastery-learning app voor examenleerlingen.

De app helpt leerlingen begrippen en kennis actief uit het geheugen te reproduceren via retrieval practice.

De kern van het systeem is niet de quiz zelf, maar het opbouwen van **mastery per kaart per leerling**.

De quizinterface is alleen het oefenmechanisme waarmee mastery wordt opgebouwd.

Belangrijke leerprincipes:

- retrieval practice
- spaced repetition (later)
- mastery learning
- progress tracking per leerling


--------------------------------------------------
TECHNISCHE ARCHITECTUUR
--------------------------------------------------

Frontend

De applicatie draait als statische website op GitHub Pages.

Technologie:

HTML
CSS
JavaScript (ES modules)

Er is geen eigen backend.

Alle gebruikersdata wordt opgeslagen in Supabase.


--------------------------------------------------
SUPABASE ARCHITECTUUR
--------------------------------------------------

Supabase wordt gebruikt voor:

Authenticatie
Gebruikersprofielen
Voortgang per kaart


Tabellen:

profiles
classes
cards_progress


profiles

id (uuid)
display_name (text)

Deze tabel bevat de schermnaam van de leerling.


classes

Wordt later gebruikt om leerlingen aan klassen te koppelen.


cards_progress

Slaat de voortgang per kaart op.

velden:

user_id
card_id
level
correct_count
wrong_count
last_seen


--------------------------------------------------
AUTHENTICATIE
--------------------------------------------------

Login gebeurt via Supabase Auth.

Type login:

email + wachtwoord


Flow

login.html
↓
supabase.auth.signInWithPassword
↓
index.html


Elke beschermde pagina controleert:

supabase.auth.getUser()


Als geen gebruiker bestaat:

redirect naar login.html


--------------------------------------------------
PROFIEL FLOW
--------------------------------------------------

Nieuwe gebruikers moeten een schermnaam kiezen.

Flow:

login.html
↓
index.html
↓
profiles.display_name check
↓
profile.html indien leeg


Pas daarna krijgt de gebruiker toegang tot de app.


--------------------------------------------------
BELANGRIJKE PAGINA'S
--------------------------------------------------

login.html

Login en accountregistratie.


profile.html

Gebruiker kiest schermnaam.


index.html

Vakdashboard.


course.html

Trainer voor een specifieke cursus.



--------------------------------------------------
APP NAVIGATIE
--------------------------------------------------

login.html
↓
index.html
↓
course.html?course=...


course.html leest de courseId uit de URL.


--------------------------------------------------
COURSE ARCHITECTUUR
--------------------------------------------------

Cursussen worden geladen uit:

courseCatalog.js


Elke cursus is een object:

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


Voorbeeld:

id: geschiedenis-mavo-4
subject: geschiedenis
level: mavo
grade: 4


Deze velden zijn verplicht omdat de UI hierop filtert.


--------------------------------------------------
CHAPTER STRUCTUUR
--------------------------------------------------

Hoofdstukken bepalen hoe vragen gegroepeerd worden.


structuur

{
id
subjectId
title
}



--------------------------------------------------
DATASETS
--------------------------------------------------

De inhoud van een cursus staat in datasets.

datasets: {

terms
years
persons

}


terms

Begrippen.


structuur

{
id
chapterId
type
prompt
answer
}


voorbeeld

prompt: Interbellum
answer: De periode tussen de Eerste en Tweede Wereldoorlog



years

Jaartallen.

structuur

{
id
chapterId
year
event
}



persons (toekomst)

structuur

{
id
chapterId
name
description
}



--------------------------------------------------
MODES
--------------------------------------------------

Modes bepalen hoe datasets geoefend worden.

modes:

[
{
id
label
dataset
}
]


Voorbeelden

term-to-answer
answer-to-term
years
event-years
person-to-description
description-to-person



--------------------------------------------------
QUIZ ENGINE
--------------------------------------------------

De quiz werkt als volgt:

1 vraag
4 antwoordopties

Feedback verschijnt in een popup.

Na een goed antwoord:

automatisch volgende vraag.

Na een fout antwoord:

correct antwoord wordt getoond.


--------------------------------------------------
MASTERY MODEL (V1)
--------------------------------------------------

Elke kaart heeft een mastery-status per leerling.


Een kaart wordt **mastered** wanneer:

- minstens 3 correcte antwoorden zijn gegeven
- minstens 1 keer actieve recall (typen)


Kleurstatus per kaart:


grijs
nieuw

groen
in training

blauw
goed beheerst

paars
mastery

oranje
perfect mastery (inclusief typen)



Deze kleuren worden later gebruikt in:

kaartweergave
hoofdstukprogress
vakprogress
dashboard



--------------------------------------------------
HUIDIGE CURSUSSEN
--------------------------------------------------

Momenteel bestaan:

geschiedenis-mavo-4
aardrijkskunde-mavo-4
economie-mavo-4
geschiedenis-havo-3 (test)



--------------------------------------------------
DATA WORKFLOW
--------------------------------------------------

Nieuwe cursus bouwen:

1 boekpagina analyseren
2 hoofdstukken maken
3 cursusbestand maken
4 import in courseCatalog
5 datasets vullen


Datasets worden vaak gegenereerd uit foto’s van schoolboeken.



--------------------------------------------------
ONTWIKKELSTATUS
--------------------------------------------------

Huidige fase:

overgang van quiz-app naar mastery trainer.



Wat al werkt

login systeem
profielen
quizengine
dataset systeem
chapter selectie



Wat nog gebouwd moet worden

cards_progress integratie
mastery engine
dashboard per vak
aanbevolen oefensessie
progress visualisatie
fouten-trainer per leerling
classcode systeem



--------------------------------------------------
ONTWERPPRINCIPES
--------------------------------------------------

Belangrijkste regels:

Data model eerst, UI daarna.

Cursus bepaalt:

datasets
modes


app.js blijft generiek.


Nieuwe features worden eerst ontworpen in de data-structuur.


--------------------------------------------------
BELANGRIJKE REGEL VOOR CHATGPT
--------------------------------------------------

Nooit aannames doen over code.

Vraag eerst het bestand.

Alleen als het bestand niet beschikbaar is mag een aannemingsvoorstel gedaan worden.
