/*
Biologie 3 mavo
KennisSprint dataset
© 2026
*/

/* =========================
SUBJECT
========================= */

export const subjects = [
  {
    id: "biologie",
    title: "Biologie"
  }
];


/* =========================
CHAPTERS
========================= */

const chapters = [
  { id: "bio-h1", title: "Organen en cellen" },
  { id: "bio-h2", title: "Voortplanting en seksualiteit" },
  { id: "bio-h3", title: "Erfelijkheid en evolutie" },
  { id: "bio-h4", title: "Ordening" },
  { id: "bio-h5", title: "Stevigheid en beweging" },
  { id: "bio-h6", title: "Ecologie" },
  { id: "bio-h7", title: "Duurzaamheid en genetica" }
];


/* =========================
ITEMS (begrippen)
========================= */

const items = [
{
  id: "bio-h1-001",
  chapterId: "bio-h1",
  type: "begrip",
  prompt: "ademhaling",
  answer: "Opname van zuurstof en afgifte van koolstofdioxide, een van de negen levenskenmerken.",
  keywords: ["opname zuurstof", "afgifte koolstofdioxide", "levenskenmerken"]
},
{
  id: "bio-h1-002",
  chapterId: "bio-h1",
  type: "begrip",
  prompt: "beweging",
  answer: "Verplaatsing van het lichaam of delen daarvan, een van de negen levenskenmerken.",
  keywords: ["verplaatsing lichaam", "delen daarvan", "levenskenmerken"]
},
{
  id: "bio-h1-003",
  chapterId: "bio-h1",
  type: "begrip",
  prompt: "geestelijke groei en ontwikkeling",
  answer: "Veranderen van de manier van denken, leren en voelen.",
  keywords: ["denken", "leren", "voelen"]
},
{
  id: "bio-h1-004",
  chapterId: "bio-h1",
  type: "begrip",
  prompt: "groei",
  answer: "Groter en zwaarder worden, een van de negen levenskenmerken.",
  keywords: ["groter", "zwaarder", "levenskenmerken"]
},
{
  id: "bio-h1-005",
  chapterId: "bio-h1",
  type: "begrip",
  prompt: "levensfase",
  answer: "Periode in het leven van een mens, met eigen kenmerken.",
  keywords: ["periode", "leven", "kenmerken"]
},
{
  id: "bio-h1-006",
  chapterId: "bio-h1",
  type: "begrip",
  prompt: "levenskenmerk",
  answer: "Verschijnsel dat aangeeft dat iets leeft.",
  keywords: ["verschijnsel", "aangeeft", "leeft"]
},
{
  id: "bio-h1-007",
  chapterId: "bio-h1",
  type: "begrip",
  prompt: "lichamelijke groei en ontwikkeling",
  answer: "Veranderen van grootte en vorm van het lichaam.",
  keywords: ["grootte", "vorm", "lichaam"]
},
{
  id: "bio-h1-008",
  chapterId: "bio-h1",
  type: "begrip",
  prompt: "ontwikkeling",
  answer: "Verandering in de bouw van een organisme, een van de negen levenskenmerken.",
  keywords: ["verandering", "bouw", "levenskenmerken"]
},
{
  id: "bio-h1-009",
  chapterId: "bio-h1",
  type: "begrip",
  prompt: "organisme",
  answer: "Levend wezen.",
  keywords: ["levend wezen"]
},
{
  id: "bio-h1-010",
  chapterId: "bio-h1",
  type: "begrip",
  prompt: "prikkelbaarheid",
  answer: "Activering van spieren of klieren na een waarneming, een van de negen levenskenmerken.",
  keywords: ["activering spieren", "klieren", "waarneming"]
},
{
  id: "bio-h1-011",
  chapterId: "bio-h1",
  type: "begrip",
  prompt: "stofwisseling",
  answer: "Omzetting van stoffen in het lichaam van een organisme in andere stoffen, een van de negen levenskenmerken.",
  keywords: ["omzetting stoffen", "lichaam organisme", "levenskenmerken"]
},
{
  id: "bio-h1-012",
  chapterId: "bio-h1",
  type: "begrip",
  prompt: "uitscheiding",
  answer: "Afvoer van afvalstoffen uit het lichaam, een van de negen levenskenmerken.",
  keywords: ["afvoer afvalstoffen", "lichaam", "levenskenmerken"]
},
{
  id: "bio-h1-013",
  chapterId: "bio-h1",
  type: "begrip",
  prompt: "voeding",
  answer: "Opname van voedsel, water en mineralen, een van de negen levenskenmerken.",
  keywords: ["opname voedsel", "water mineralen", "levenskenmerken"]
},
{
  id: "bio-h1-014",
  chapterId: "bio-h1",
  type: "begrip",
  prompt: "waarneming",
  answer: "Het opmerken van veranderingen in je omgeving, een van de negen levenskenmerken.",
  keywords: ["opmerken veranderingen", "omgeving", "levenskenmerken"]
},
{
  id: "bio-h1-015",
  chapterId: "bio-h1",
  type: "begrip",
  prompt: "cel",
  answer: "Kleinste bouwsteen van een organisme.",
  keywords: ["kleinste bouwsteen", "organisme"]
},
{
  id: "bio-h1-016",
  chapterId: "bio-h1",
  type: "begrip",
  prompt: "orgaan",
  answer: "Deel van het lichaam met een of meer functies.",
  keywords: ["deel lichaam", "functies"]
},
{
  id: "bio-h1-017",
  chapterId: "bio-h1",
  type: "begrip",
  prompt: "orgaanstelsel",
  answer: "Samenwerkende groep organen.",
  keywords: ["groep organen", "samenwerkend"]
},
{
  id: "bio-h1-018",
  chapterId: "bio-h1",
  type: "begrip",
  prompt: "organisatieniveau",
  answer: "Niveau van leven waar biologen naar kijken.",
  keywords: ["niveau leven", "biologen kijken"]
},
{
  id: "bio-h1-019",
  chapterId: "bio-h1",
  type: "begrip",
  prompt: "tussencelstof",
  answer: "Vormt samen met cellen een weefsel.",
  keywords: ["vormt weefsel", "samen cellen"]
},
{
  id: "bio-h1-020",
  chapterId: "bio-h1",
  type: "begrip",
  prompt: "weefsel",
  answer: "Groep cellen met dezelfde vorm en functie.",
  keywords: ["groep cellen", "zelfde vorm", "functie"]
},
{
  id: "bio-h1-021",
  chapterId: "bio-h1",
  type: "begrip",
  prompt: "celmembraan",
  answer: "Dun vlies om een cel.",
  keywords: ["dun vlies", "cel"]
},
{
  id: "bio-h1-022",
  chapterId: "bio-h1",
  type: "begrip",
  prompt: "celwand",
  answer: "Stevige laag om een plantencel. De celwand is tussencelstof en behoort niet tot de cel.",
  keywords: ["stevige laag", "plantencel", "tussencelstof"]
},
{
  id: "bio-h1-023",
  chapterId: "bio-h1",
  type: "begrip",
  prompt: "vacuole",
  answer: "Blaasje gevuld met vocht in een plantencel.",
  keywords: ["blaasje vocht", "plantencel"]
},
{
  id: "bio-h1-024",
  chapterId: "bio-h1",
  type: "begrip",
  prompt: "zetmeelkorrel",
  answer: "Hierin slaat de plant zetmeel op.",
  keywords: ["plant", "zetmeel", "opslag"]
},
{
  id: "bio-h1-025",
  chapterId: "bio-h1",
  type: "begrip",
  prompt: "chromosoom",
  answer: "Lange keten van DNA en eiwit in de celkern.",
  keywords: ["lange keten", "dna eiwit", "celkern"]
},
{
  id: "bio-h1-026",
  chapterId: "bio-h1",
  type: "begrip",
  prompt: "chromosomenpaar",
  answer: "In lichaamscellen komen chromosomen in tweetallen voor. De chromosomen van een paar bevatten informatie voor dezelfde erfelijke eigenschappen.",
  keywords: ["tweetallen", "informatie", "eigenschappen"]
},
{
  id: "bio-h1-027",
  chapterId: "bio-h1",
  type: "begrip",
  prompt: "DNA",
  answer: "Stof waarin de informatie voor de erfelijke eigenschappen is opgeslagen.",
  keywords: ["stof", "informatie", "eigenschappen"]
},
{
  id: "bio-h1-028",
  chapterId: "bio-h1",
  type: "begrip",
  prompt: "erfelijke eigenschap",
  answer: "Eigenschap die je krijgt van je ouders.",
  keywords: ["eigenschap", "ouders"]
},
{
  id: "bio-h1-029",
  chapterId: "bio-h1",
  type: "begrip",
  prompt: "lichaamscel",
  answer: "Cel waarin de chromosomen in paren voorkomen.",
  keywords: ["cel", "chromosomen paren"]
},
{
  id: "bio-h1-030",
  chapterId: "bio-h1",
  type: "begrip",
  prompt: "celdeling",
  answer: "Laatste stap van de gewone celdeling: het cytoplasma deelt zich in tweeën zodat twee cellen ontstaan.",
  keywords: ["cytoplasma deelt", "twee cellen"]
},
{
  id: "bio-h1-031",
  chapterId: "bio-h1",
  type: "begrip",
  prompt: "dochtercellen",
  answer: "Twee nieuwe cellen die ontstaan na celdeling.",
  keywords: ["twee cellen", "na celdeling"]
},
{
  id: "bio-h1-032",
  chapterId: "bio-h1",
  type: "begrip",
  prompt: "gewone celdeling",
  answer: "Mitose. Uit een moedercel ontstaan twee dochtercellen met dezelfde chromosomenparen als de moedercel.",
  keywords: ["moedercel", "twee dochtercellen", "zelfde chromosomen"]
},
{
  id: "bio-h1-033",
  chapterId: "bio-h1",
  type: "begrip",
  prompt: "kerndeling",
  answer: "De twee DNA-ketens van elk chromosoom worden van elkaar getrokken, de celkern deelt zich in tweeën.",
  keywords: ["dna ketens", "celkern deelt"]
},
{
  id: "bio-h1-034",
  chapterId: "bio-h1",
  type: "begrip",
  prompt: "kopiëren",
  answer: "Als voorbereiding op de kerndeling vormt elk chromosoom een kopie van zichzelf.",
  keywords: ["chromosoom kopie", "voorbereiding"]
},
{
  id: "bio-h1-035",
  chapterId: "bio-h1",
  type: "begrip",
  prompt: "mitose",
  answer: "Gewone celdeling. Uit een moedercel ontstaan twee dochtercellen met dezelfde chromosomenparen als de moedercel.",
  keywords: ["gewone celdeling", "twee dochtercellen", "zelfde chromosomen"]
},
{
  id: "bio-h1-036",
  chapterId: "bio-h1",
  type: "begrip",
  prompt: "moedercel",
  answer: "Cel die zich deelt.",
  keywords: ["cel", "deelt"]
},
{
  id: "bio-h1-037",
  chapterId: "bio-h1",
  type: "begrip",
  prompt: "plasmagroei",
  answer: "Toename van de hoeveelheid cytoplasma in een dochtercel.",
  keywords: ["toename cytoplasma", "dochtercel"]
},
{
  id: "bio-h1-038",
  chapterId: "bio-h1",
  type: "begrip",
  prompt: "spiraliseren",
  answer: "Chromosomen worden korter en dikker doordat ze zich oprollen als een spiraal.",
  keywords: ["chromosomen korter", "dikker", "oprollen"]
},
{
  id: "bio-h1-039",
  chapterId: "bio-h1",
  type: "begrip",
  prompt: "eicel",
  answer: "Vrouwelijke geslachtscel.",
  keywords: ["vrouwelijke geslachtscel"]
},
{
  id: "bio-h1-040",
  chapterId: "bio-h1",
  type: "begrip",
  prompt: "geslachtscel",
  answer: "Voortplantingscel met één chromosoom van elk chromosomenpaar.",
  keywords: ["voortplantingscel", "één chromosoom"]
},
{
  id: "bio-h1-041",
  chapterId: "bio-h1",
  type: "begrip",
  prompt: "geslachtschromosomen",
  answer: "Chromosomenpaar dat bepaalt of een baby een jongen of een meisje is.",
  keywords: ["chromosomenpaar", "jongen meisje"]
},
{
  id: "bio-h1-042",
  chapterId: "bio-h1",
  type: "begrip",
  prompt: "meiose",
  answer: "Reductiedeling: vorming van geslachtscellen. Elke dochtercel krijgt de helft van elk chromosomenpaar.",
  keywords: ["vorming geslachtscellen", "helft chromosomen"]
},
{
  id: "bio-h1-043",
  chapterId: "bio-h1",
  type: "begrip",
  prompt: "reductiedeling",
  answer: "Meiose: vorming van geslachtscellen. Elke dochtercel krijgt de helft van elk chromosomenpaar.",
  keywords: ["vorming geslachtscellen", "helft chromosomen"]
},
{
  id: "bio-h1-044",
  chapterId: "bio-h1",
  type: "begrip",
  prompt: "X-chromosoom",
  answer: "Vrouwelijk geslachtschromosoom.",
  keywords: ["vrouwelijk chromosoom"]
},
{
  id: "bio-h1-045",
  chapterId: "bio-h1",
  type: "begrip",
  prompt: "XX",
  answer: "Geslachtschromosomenpaar van een meisje.",
  keywords: ["meisje", "chromosomenpaar"]
},
{
  id: "bio-h1-046",
  chapterId: "bio-h1",
  type: "begrip",
  prompt: "XY",
  answer: "Geslachtschromosomenpaar van een jongen.",
  keywords: ["jongen", "chromosomenpaar"]
},
{
  id: "bio-h1-047",
  chapterId: "bio-h1",
  type: "begrip",
  prompt: "Y-chromosoom",
  answer: "Mannelijk geslachtschromosoom.",
  keywords: ["mannelijk chromosoom"]
},
{
  id: "bio-h1-048",
  chapterId: "bio-h1",
  type: "begrip",
  prompt: "zaadcel",
  answer: "Mannelijke geslachtscel.",
  keywords: ["mannelijke geslachtscel"]
},
{
  id: "bio-h2-001",
  chapterId: "bio-h2",
  type: "begrip",
  prompt: "eicellen",
  answer: "Vrouwelijke geslachtscellen.",
  keywords: ["vrouwelijke geslachtscellen"]
},
{
  id: "bio-h2-002",
  chapterId: "bio-h2",
  type: "begrip",
  prompt: "penis",
  answer: "Uitwendig geslachtsorgaan van de man.",
  keywords: ["uitwendig orgaan", "man"]
},
{
  id: "bio-h2-003",
  chapterId: "bio-h2",
  type: "begrip",
  prompt: "primaire geslachtskenmerken",
  answer: "Geslachtskenmerken die je bij de geboorte al hebt.",
  keywords: ["bij geboorte", "geslachtskenmerken"]
},
{
  id: "bio-h2-004",
  chapterId: "bio-h2",
  type: "begrip",
  prompt: "teelballen (zaadballen)",
  answer: "Delen die zaadcellen produceren.",
  keywords: ["delen", "zaadcellen produceren"]
},
{
  id: "bio-h2-005",
  chapterId: "bio-h2",
  type: "begrip",
  prompt: "urinebuis",
  answer: "Buis voor het transport van urine en sperma.",
  keywords: ["buis", "urine sperma"]
},
{
  id: "bio-h2-006",
  chapterId: "bio-h2",
  type: "begrip",
  prompt: "vagina (schede)",
  answer: "Kanaal naar de baarmoeder.",
  keywords: ["kanaal", "baarmoeder"]
},
{
  id: "bio-h2-007",
  chapterId: "bio-h2",
  type: "begrip",
  prompt: "voorhuid",
  answer: "Huidplooi om de eikel.",
  keywords: ["huidplooi", "eikel"]
},
{
  id: "bio-h2-008",
  chapterId: "bio-h2",
  type: "begrip",
  prompt: "voortplanting",
  answer: "Het produceren van nageslacht.",
  keywords: ["produceren", "nageslacht"]
},
{
  id: "bio-h2-009",
  chapterId: "bio-h2",
  type: "begrip",
  prompt: "voortplantingsstelsel",
  answer: "Alle organen die een rol spelen bij de voortplanting.",
  keywords: ["organen", "voortplanting"]
},
{
  id: "bio-h2-010",
  chapterId: "bio-h2",
  type: "begrip",
  prompt: "zaadcellen",
  answer: "Mannelijke geslachtscellen.",
  keywords: ["mannelijke geslachtscellen"]
},
{
  id: "bio-h2-011",
  chapterId: "bio-h2",
  type: "begrip",
  prompt: "zaadleiders",
  answer: "Transport van zaadcellen van bijbal naar prostaat.",
  keywords: ["transport zaadcellen", "bijbal prostaat"]
},
{
  id: "bio-h2-012",
  chapterId: "bio-h2",
  type: "begrip",
  prompt: "zwellichamen",
  answer: "Delen die zich kunnen vullen met bloed.",
  keywords: ["delen", "vullen bloed"]
},
{
  id: "bio-h2-013",
  chapterId: "bio-h2",
  type: "begrip",
  prompt: "geslachtshormonen",
  answer: "Hormonen die door de geslachtsorganen worden aangemaakt.",
  keywords: ["hormonen", "geslachtsorganen"]
},
{
  id: "bio-h2-014",
  chapterId: "bio-h2",
  type: "begrip",
  prompt: "oestrogenen",
  answer: "Geslachtshormonen die in de eierstokken worden geproduceerd en ervoor zorgen dat zich vrouwelijke geslachtskenmerken ontwikkelen.",
  keywords: ["eierstokken", "vrouwelijke kenmerken"]
},
{
  id: "bio-h2-015",
  chapterId: "bio-h2",
  type: "begrip",
  prompt: "secundaire geslachtskenmerken",
  answer: "Geslachtskenmerken die in de puberteit ontstaan.",
  keywords: ["puberteit", "geslachtskenmerken"]
},
{
  id: "bio-h2-016",
  chapterId: "bio-h2",
  type: "begrip",
  prompt: "testosteron",
  answer: "Geslachtshormonen die in de teelballen worden geproduceerd en die mannelijke geslachtskenmerken bevorderen.",
  keywords: ["teelballen", "mannelijke kenmerken"]
},
{
  id: "bio-h2-017",
  chapterId: "bio-h2",
  type: "begrip",
  prompt: "baarmoederslijmvlies",
  answer: "Slijmvlies aan de binnenkant van de baarmoeder.",
  keywords: ["slijmvlies", "baarmoeder"]
},
{
  id: "bio-h2-018",
  chapterId: "bio-h2",
  type: "begrip",
  prompt: "eierstok",
  answer: "Orgaan dat eicellen produceert.",
  keywords: ["orgaan", "eicellen"]
},
{
  id: "bio-h2-019",
  chapterId: "bio-h2",
  type: "begrip",
  prompt: "eileider",
  answer: "Transport van eicellen van de eierstok naar de baarmoeder.",
  keywords: ["transport eicellen", "eierstok baarmoeder"]
},
{
  id: "bio-h2-020",
  chapterId: "bio-h2",
  type: "begrip",
  prompt: "menstruatie",
  answer: "Maandelijks afstoten van baarmoederslijmvlies en bloed.",
  keywords: ["maandelijks", "afstoten", "bloed"]
},
{
  id: "bio-h2-021",
  chapterId: "bio-h2",
  type: "begrip",
  prompt: "menstruatiecyclus",
  answer: "Het terugkerende opbouwen en afstoten van baarmoederslijmvlies.",
  keywords: ["opbouwen", "afstoten", "cyclus"]
},
{
  id: "bio-h2-022",
  chapterId: "bio-h2",
  type: "begrip",
  prompt: "ovulatie (eisprong)",
  answer: "Het vrijkomen van een eicel.",
  keywords: ["vrijkomen", "eicel"]
},
{
  id: "bio-h2-023",
  chapterId: "bio-h2",
  type: "begrip",
  prompt: "prostaat",
  answer: "Orgaan dat vocht toevoegt aan de zaadcellen.",
  keywords: ["orgaan", "vocht", "zaadcellen"]
},
{
  id: "bio-h2-024",
  chapterId: "bio-h2",
  type: "begrip",
  prompt: "zaadblaasjes",
  answer: "Organen die vocht toevoegen aan de zaadcellen.",
  keywords: ["organen", "vocht", "zaadcellen"]
},
{
  id: "bio-h2-025",
  chapterId: "bio-h2",
  type: "begrip",
  prompt: "gender",
  answer: "Of iemand zich man, vrouw of anders voelt.",
  keywords: ["man vrouw", "gevoel"]
},
{
  id: "bio-h2-026",
  chapterId: "bio-h2",
  type: "begrip",
  prompt: "intimiteit",
  answer: "Je verbonden voelen met iemand.",
  keywords: ["verbonden voelen"]
},
{
  id: "bio-h2-027",
  chapterId: "bio-h2",
  type: "begrip",
  prompt: "lust",
  answer: "Seksualiteit geeft mensen plezier; het gevoel dat iemand opwinding ervaart.",
  keywords: ["plezier", "opwinding"]
},
{
  id: "bio-h2-028",
  chapterId: "bio-h2",
  type: "begrip",
  prompt: "orgasme (klaarkomen)",
  answer: "Een lekker gevoel door prikkeling van de geslachtsorganen.",
  keywords: ["lekker gevoel", "prikkeling"]
},
{
  id: "bio-h2-029",
  chapterId: "bio-h2",
  type: "begrip",
  prompt: "seksualiteit",
  answer: "Alle gedachten, gevoelens en handelingen die te maken hebben met lust en opwinding.",
  keywords: ["gedachten gevoelens", "lust opwinding"]
},
{
  id: "bio-h2-030",
  chapterId: "bio-h2",
  type: "begrip",
  prompt: "masturbatie (zelfbevrediging)",
  answer: "Bij jezelf zorgen voor een orgasme.",
  keywords: ["zelf", "orgasme"]
},
{
  id: "bio-h2-031",
  chapterId: "bio-h2",
  type: "begrip",
  prompt: "aids",
  answer: "Ziekte veroorzaakt door hiv; genezing is niet mogelijk.",
  keywords: ["ziekte", "hiv", "geen genezing"]
},
{
  id: "bio-h2-032",
  chapterId: "bio-h2",
  type: "begrip",
  prompt: "anticonceptiepil (de pil)",
  answer: "Dagelijks in te nemen pil zodat geen ovulatie plaatsvindt.",
  keywords: ["dagelijks", "geen ovulatie"]
},
{
  id: "bio-h2-033",
  chapterId: "bio-h2",
  type: "begrip",
  prompt: "chlamydia",
  answer: "Meest voorkomende soa met weinig klachten; zonder behandeling kans op onvruchtbaarheid.",
  keywords: ["soa", "weinig klachten", "onvruchtbaarheid"]
},
{
  id: "bio-h2-034",
  chapterId: "bio-h2",
  type: "begrip",
  prompt: "condoom",
  answer: "Latex hoesje dat om de penis wordt gerold; een vrouwencondoom wordt in de vagina ingebracht.",
  keywords: ["latex hoesje", "penis", "vagina"]
},
{
  id: "bio-h2-035",
  chapterId: "bio-h2",
  type: "begrip",
  prompt: "gonorroe",
  answer: "Soa die zorgt voor vieze afscheiding uit vagina of penis; zonder behandeling kans op onvruchtbaarheid.",
  keywords: ["soa", "afscheiding", "onvruchtbaarheid"]
},
{
  id: "bio-h2-036",
  chapterId: "bio-h2",
  type: "begrip",
  prompt: "soa (seksueel overdraagbare aandoening)",
  answer: "Ziekten die je kunt krijgen door contact met penis, vagina, anus en mond van een besmet persoon.",
  keywords: ["ziekten", "contact", "besmet persoon"]
},
{
  id: "bio-h2-037",
  chapterId: "bio-h2",
  type: "begrip",
  prompt: "spiraaltje",
  answer: "Voorbehoedsmiddel dat in de baarmoeder wordt ingebracht en ovulatie voorkomt of bevruchting moeilijker maakt.",
  keywords: ["baarmoeder", "voorkomt ovulatie"]
},
{
  id: "bio-h2-038",
  chapterId: "bio-h2",
  type: "begrip",
  prompt: "sterilisatie",
  answer: "Blijvende ingreep waarbij de zaadleiders of eileiders worden onderbroken.",
  keywords: ["blijvende ingreep", "onderbroken"]
},
{
  id: "bio-h2-039",
  chapterId: "bio-h2",
  type: "begrip",
  prompt: "syfilis",
  answer: "Soa met zweertjes rond vagina, penis, anus, mond of lippen.",
  keywords: ["soa", "zweertjes"]
},
{
  id: "bio-h2-040",
  chapterId: "bio-h2",
  type: "begrip",
  prompt: "draagster",
  answer: "Iemand met de informatie voor een ziekte op een chromosoom maar zelf niet ziek is.",
  keywords: ["informatie ziekte", "niet ziek"]
},
{
  id: "bio-h2-041",
  chapterId: "bio-h2",
  type: "begrip",
  prompt: "echoscopie",
  answer: "Zichtbaar maken van het embryo op een scherm met behulp van geluidsgolven.",
  keywords: ["embryo", "geluidsgolven"]
},
{
  id: "bio-h2-042",
  chapterId: "bio-h2",
  type: "begrip",
  prompt: "genetisch advies",
  answer: "Advies na onderzoek naar erfelijke afwijkingen.",
  keywords: ["advies", "erfelijke afwijkingen"]
},
{
  id: "bio-h2-043",
  chapterId: "bio-h2",
  type: "begrip",
  prompt: "prenataal onderzoek",
  answer: "Onderzoek naar afwijkingen bij een ongeboren kind.",
  keywords: ["onderzoek", "ongeboren kind"]
},
{
  id: "bio-h2-044",
  chapterId: "bio-h2",
  type: "begrip",
  prompt: "vlokkentest",
  answer: "Onderzoek naar cellen met chromosomen die afkomstig zijn uit de placenta.",
  keywords: ["cellen", "placenta"]
},
{
  id: "bio-h2-045",
  chapterId: "bio-h2",
  type: "begrip",
  prompt: "vruchtwaterpunctie",
  answer: "Onderzoek naar cellen met chromosomen die afkomstig zijn uit het vruchtwater.",
  keywords: ["cellen", "vruchtwater"]
},
{
  id: "bio-h2-046",
  chapterId: "bio-h2",
  type: "begrip",
  prompt: "cloaca",
  answer: "Opening bij vogels die wordt gebruikt voor ontlasting en voortplanting.",
  keywords: ["opening vogels", "ontlasting voortplanting"]
},
{
  id: "bio-h2-047",
  chapterId: "bio-h2",
  type: "begrip",
  prompt: "inwendige bevruchting",
  answer: "Bevruchting gebeurt in het lichaam.",
  keywords: ["bevruchting", "lichaam"]
},
{
  id: "bio-h2-048",
  chapterId: "bio-h2",
  type: "begrip",
  prompt: "uitwendige bevruchting",
  answer: "Bevruchting gebeurt buiten het lichaam.",
  keywords: ["bevruchting", "buiten lichaam"]
},
{
  id: "bio-h3-001",
  chapterId: "bio-h3",
  type: "begrip",
  prompt: "allel",
  answer: "Variant van een gen; elk gen bestaat uit twee allelen.",
  keywords: ["variant gen", "twee allelen"]
},
{
  id: "bio-h3-002",
  chapterId: "bio-h3",
  type: "begrip",
  prompt: "fenotype",
  answer: "Alle eigenschappen van een organisme.",
  keywords: ["eigenschappen organisme"]
},
{
  id: "bio-h3-003",
  chapterId: "bio-h3",
  type: "begrip",
  prompt: "gen",
  answer: "De stukjes DNA die samen de informatie voor een erfelijke eigenschap bevatten.",
  keywords: ["stukjes dna", "erfelijke eigenschap"]
},
{
  id: "bio-h3-004",
  chapterId: "bio-h3",
  type: "begrip",
  prompt: "genotype",
  answer: "De informatie voor alle erfelijke eigenschappen van een organisme; alle genen in een celkern samen.",
  keywords: ["alle genen", "celkern"]
},
{
  id: "bio-h3-005",
  chapterId: "bio-h3",
  type: "begrip",
  prompt: "dominant allel",
  answer: "Allel dat altijd tot uiting komt in het uiterlijk.",
  keywords: ["altijd uiting", "uiterlijk"]
},
{
  id: "bio-h3-006",
  chapterId: "bio-h3",
  type: "begrip",
  prompt: "heterozygoot",
  answer: "Twee verschillende allelen voor een bepaalde eigenschap.",
  keywords: ["twee verschillende", "allelen"]
},
{
  id: "bio-h3-007",
  chapterId: "bio-h3",
  type: "begrip",
  prompt: "homozygoot",
  answer: "Twee gelijke allelen voor een bepaalde eigenschap.",
  keywords: ["twee gelijke", "allelen"]
},
{
  id: "bio-h3-008",
  chapterId: "bio-h3",
  type: "begrip",
  prompt: "intermediair fenotype",
  answer: "Fenotype waarin beide allelen even sterk tot uiting komen.",
  keywords: ["beide allelen", "even sterk"]
},
{
  id: "bio-h3-009",
  chapterId: "bio-h3",
  type: "begrip",
  prompt: "recessief allel",
  answer: "Allel dat alleen tot uiting komt als er geen dominant allel is.",
  keywords: ["alleen uiting", "geen dominant"]
},
{
  id: "bio-h3-010",
  chapterId: "bio-h3",
  type: "begrip",
  prompt: "generatie",
  answer: "De nakomelingen van hetzelfde ouderpaar.",
  keywords: ["nakomelingen", "ouderpaar"]
},
{
  id: "bio-h3-011",
  chapterId: "bio-h3",
  type: "begrip",
  prompt: "kruisen",
  answer: "Twee organismen die met elkaar nakomelingen krijgen.",
  keywords: ["twee organismen", "nakomelingen"]
},
{
  id: "bio-h3-012",
  chapterId: "bio-h3",
  type: "begrip",
  prompt: "kruissingsschema",
  answer: "Tabel met alle mogelijke combinaties van allelen bij een kruising.",
  keywords: ["tabel", "combinaties allelen"]
},
{
  id: "bio-h3-013",
  chapterId: "bio-h3",
  type: "begrip",
  prompt: "stamboom",
  answer: "Schematisch overzicht van een erfelijke eigenschap binnen een familie.",
  keywords: ["overzicht", "erfelijke eigenschap"]
},
{
  id: "bio-h3-014",
  chapterId: "bio-h3",
  type: "begrip",
  prompt: "mutagene invloeden",
  answer: "Invloed uit de omgeving die de kans op een mutatie vergroot.",
  keywords: ["invloed omgeving", "mutatie kans"]
},
{
  id: "bio-h3-015",
  chapterId: "bio-h3",
  type: "begrip",
  prompt: "mutant",
  answer: "Individu met een gemuteerd allel in het fenotype.",
  keywords: ["gemuteerd allel", "fenotype"]
},
{
  id: "bio-h3-016",
  chapterId: "bio-h3",
  type: "begrip",
  prompt: "mutatie",
  answer: "Plotselinge verandering van het DNA.",
  keywords: ["plotselinge verandering", "dna"]
},
{
  id: "bio-h3-017",
  chapterId: "bio-h3",
  type: "begrip",
  prompt: "variatie in genotypen",
  answer: "Verschillen in de erfelijke informatie van organismen binnen een soort.",
  keywords: ["verschillen", "erfelijke informatie"]
},
{
  id: "bio-h3-018",
  chapterId: "bio-h3",
  type: "begrip",
  prompt: "evolutietheorie",
  answer: "Verklaring voor het ontstaan, veranderen en verdwijnen van levensvormen op aarde.",
  keywords: ["ontstaan veranderen", "levensvormen"]
},
{
  id: "bio-h3-019",
  chapterId: "bio-h3",
  type: "begrip",
  prompt: "milieu",
  answer: "Alle omstandigheden die invloed kunnen hebben op een organisme.",
  keywords: ["omstandigheden", "invloed organisme"]
},
{
  id: "bio-h3-020",
  chapterId: "bio-h3",
  type: "begrip",
  prompt: "natuurlijke selectie",
  answer: "Individuen met gunstige erfelijke eigenschappen krijgen meer nakomelingen.",
  keywords: ["gunstige eigenschappen", "meer nakomelingen"]
},
{
  id: "bio-h3-021",
  chapterId: "bio-h3",
  type: "begrip",
  prompt: "ras",
  answer: "Groep organismen binnen een soort die verschilt van de rest van de soort.",
  keywords: ["groep organismen", "verschilt soort"]
},
{
  id: "bio-h3-022",
  chapterId: "bio-h3",
  type: "begrip",
  prompt: "soort",
  answer: "Organismen die samen vruchtbare nakomelingen kunnen krijgen.",
  keywords: ["vruchtbare nakomelingen"]
},
{
  id: "bio-h3-023",
  chapterId: "bio-h3",
  type: "begrip",
  prompt: "evolutionaire stamboom",
  answer: "Schematisch overzicht van de verwantschap tussen soorten.",
  keywords: ["overzicht", "verwantschap soorten"]
},
{
  id: "bio-h3-024",
  chapterId: "bio-h3",
  type: "begrip",
  prompt: "verwantschap",
  answer: "Soorten met een gemeenschappelijke voorouder.",
  keywords: ["gemeenschappelijke voorouder"]
},
{
  id: "bio-h3-025",
  chapterId: "bio-h3",
  type: "begrip",
  prompt: "biotechnologie",
  answer: "Alle technieken waarbij organismen worden gebruikt om producten voor mensen te maken.",
  keywords: ["technieken", "organismen producten"]
},
{
  id: "bio-h3-026",
  chapterId: "bio-h3",
  type: "begrip",
  prompt: "genetische modificatie",
  answer: "Aanpassen van erfelijke eigenschappen van organismen door de mens.",
  keywords: ["aanpassen eigenschappen", "door mens"]
},
{
  id: "bio-h4-001",
  chapterId: "bio-h4",
  type: "begrip",
  prompt: "eencellig",
  answer: "Organisme dat uit één cel bestaat.",
  keywords: ["één cel", "organisme"]
},
{
  id: "bio-h4-002",
  chapterId: "bio-h4",
  type: "begrip",
  prompt: "meercellig",
  answer: "Organisme dat uit meerdere cellen bestaat.",
  keywords: ["meerdere cellen", "organisme"]
},
{
  id: "bio-h4-003",
  chapterId: "bio-h4",
  type: "begrip",
  prompt: "antibioticum",
  answer: "Geneesmiddel dat bacteriën doodt (bijvoorbeeld penicilline).",
  keywords: ["geneesmiddel", "bacteriën doodt"]
},
{
  id: "bio-h4-004",
  chapterId: "bio-h4",
  type: "begrip",
  prompt: "paddenstoel",
  answer: "Vruchtlichaam van een meercellige schimmel.",
  keywords: ["vruchtlichaam", "schimmel"]
},
{
  id: "bio-h4-005",
  chapterId: "bio-h4",
  type: "begrip",
  prompt: "reducenten",
  answer: "Bacteriën en schimmels die resten van dieren en planten afbreken.",
  keywords: ["bacteriën schimmels", "afbreken"]
},
{
  id: "bio-h4-006",
  chapterId: "bio-h4",
  type: "begrip",
  prompt: "schimmeldraden",
  answer: "Lange, dunne draden waaruit meercellige schimmels bestaan.",
  keywords: ["lange draden", "schimmels"]
},
{
  id: "bio-h4-007",
  chapterId: "bio-h4",
  type: "begrip",
  prompt: "spore",
  answer: "Cel waaruit een nieuwe schimmel kan ontstaan.",
  keywords: ["cel", "nieuwe schimmel"]
},
{
  id: "bio-h4-008",
  chapterId: "bio-h4",
  type: "begrip",
  prompt: "voedselbederf",
  answer: "Voedsel wordt ongeschikt om te eten door schimmels en bacteriën.",
  keywords: ["ongeschikt eten", "schimmels bacteriën"]
},
{
  id: "bio-h4-009",
  chapterId: "bio-h4",
  type: "begrip",
  prompt: "ziekteverwekker",
  answer: "Organisme dat een infectie kan veroorzaken bij planten, mensen en dieren.",
  keywords: ["organisme", "infectie veroorzaken"]
},
{
  id: "bio-h4-010",
  chapterId: "bio-h4",
  type: "begrip",
  prompt: "inwendig skelet",
  answer: "Skelet aan de binnenkant van het lichaam.",
  keywords: ["skelet", "binnenkant lichaam"]
},
{
  id: "bio-h4-011",
  chapterId: "bio-h4",
  type: "begrip",
  prompt: "sporenplant",
  answer: "Plant die zich voortplant met sporen.",
  keywords: ["plant", "sporen"]
},
{
  id: "bio-h4-012",
  chapterId: "bio-h4",
  type: "begrip",
  prompt: "symmetrisch",
  answer: "Iets wat je in twee gelijke helften kunt verdelen.",
  keywords: ["twee helften", "gelijke"]
},
{
  id: "bio-h4-013",
  chapterId: "bio-h4",
  type: "begrip",
  prompt: "uitwendig skelet",
  answer: "Skelet aan de buitenkant van het lichaam.",
  keywords: ["skelet", "buitenkant lichaam"]
},
{
  id: "bio-h4-014",
  chapterId: "bio-h4",
  type: "begrip",
  prompt: "zaadplant",
  answer: "Plant die zich voortplant met zaden.",
  keywords: ["plant", "zaden"]
},
{
  id: "bio-h4-015",
  chapterId: "bio-h4",
  type: "begrip",
  prompt: "koudbloedig",
  answer: "De temperatuur van het lichaam is gelijk aan de temperatuur van de omgeving.",
  keywords: ["temperatuur lichaam", "omgeving"]
},
{
  id: "bio-h4-016",
  chapterId: "bio-h4",
  type: "begrip",
  prompt: "ledematen",
  answer: "Delen waaruit de poten van geleedpotigen zijn opgebouwd.",
  keywords: ["delen poten", "geleedpotigen"]
},
{
  id: "bio-h4-017",
  chapterId: "bio-h4",
  type: "begrip",
  prompt: "segmenten",
  answer: "Delen waaruit het lichaam van geleedpotigen is opgebouwd.",
  keywords: ["delen lichaam", "geleedpotigen"]
},
{
  id: "bio-h4-018",
  chapterId: "bio-h4",
  type: "begrip",
  prompt: "warmbloedig",
  answer: "De lichaamstemperatuur is altijd even hoog (constant).",
  keywords: ["lichaamstemperatuur", "constant"]
},
{
  id: "bio-h4-019",
  chapterId: "bio-h4",
  type: "begrip",
  prompt: "wervelkolom",
  answer: "Ruggengraat; deel van het skelet van gewervelden dat is opgebouwd uit wervels.",
  keywords: ["ruggengraat", "wervels"]
},
{
  id: "bio-h4-020",
  chapterId: "bio-h4",
  type: "begrip",
  prompt: "determineertabel",
  answer: "Tabel met vragen die je doorloopt om een organisme te determineren.",
  keywords: ["tabel", "vragen"]
},
{
  id: "bio-h4-021",
  chapterId: "bio-h4",
  type: "begrip",
  prompt: "determineren",
  answer: "De naam of groep van een organisme bepalen op basis van kenmerken.",
  keywords: ["naam bepalen", "kenmerken"]
},
{
  id: "bio-h4-022",
  chapterId: "bio-h4",
  type: "begrip",
  prompt: "bedektzadige",
  answer: "Zaadplant met bloemen waarbij de zaden in vruchten zitten.",
  keywords: ["bloemen", "zaden vruchten"]
},
{
  id: "bio-h4-023",
  chapterId: "bio-h4",
  type: "begrip",
  prompt: "naaktzadige",
  answer: "Zaadplant met naaldvormige bladeren waarbij de zaden tussen schubben in kegels zitten.",
  keywords: ["naaldvormige bladeren", "zaden kegels"]
},

{
  id: "bio-h5-001",
  chapterId: "bio-h5",
  type: "begrip",
  prompt: "bekken (bekkengordel)",
  answer: "Heupbeenderen.",
  keywords: ["heupbeenderen"]
},
{
  id: "bio-h5-002",
  chapterId: "bio-h5",
  type: "begrip",
  prompt: "borstkas",
  answer: "Borstwervels, ribben en borstbeen.",
  keywords: ["borstwervels", "ribben", "borstbeen"]
},
{
  id: "bio-h5-003",
  chapterId: "bio-h5",
  type: "begrip",
  prompt: "bot (been)",
  answer: "Stevig deel, orgaan van het bottenstelsel.",
  keywords: ["stevig deel", "orgaan", "bottenstelsel"]
},
{
  id: "bio-h5-004",
  chapterId: "bio-h5",
  type: "begrip",
  prompt: "geel beenmerg",
  answer: "Komt voor in de mergholte van pijpbeenderen en er is vet in opgeslagen.",
  keywords: ["mergholte", "pijpbeenderen", "vet"]
},
{
  id: "bio-h5-005",
  chapterId: "bio-h5",
  type: "begrip",
  prompt: "ledematen",
  answer: "Armen en benen.",
  keywords: ["armen", "benen"]
},
{
  id: "bio-h5-006",
  chapterId: "bio-h5",
  type: "begrip",
  prompt: "mergholte",
  answer: "Holte in een pijpbeen tussen de koppen.",
  keywords: ["holte", "pijpbeen", "koppen"]
},
{
  id: "bio-h5-007",
  chapterId: "bio-h5",
  type: "begrip",
  prompt: "pijpbeen",
  answer: "Langwerpig bot met een mergholte; bevat rood en geel beenmerg.",
  keywords: ["langwerpig bot", "mergholte", "beenmerg"]
},
{
  id: "bio-h5-008",
  chapterId: "bio-h5",
  type: "begrip",
  prompt: "plat been",
  answer: "Bot dat alleen rood beenmerg bevat en vooral voorkomt in hoofd en romp.",
  keywords: ["rood beenmerg", "hoofd romp"]
},
{
  id: "bio-h5-009",
  chapterId: "bio-h5",
  type: "begrip",
  prompt: "rood beenmerg",
  answer: "Komt voor in platte beenderen en in de koppen van pijpbeenderen en maakt bloedcellen aan.",
  keywords: ["platte beenderen", "bloedcellen"]
},
{
  id: "bio-h5-010",
  chapterId: "bio-h5",
  type: "begrip",
  prompt: "schouders (schoudergordel)",
  answer: "Schouderbladen en sleutelbeenderen.",
  keywords: ["schouderbladen", "sleutelbeenderen"]
},
{
  id: "bio-h5-011",
  chapterId: "bio-h5",
  type: "begrip",
  prompt: "skelet (geraamte)",
  answer: "Harde delen die een organisme stevigheid geven; bottenstelsel.",
  keywords: ["harde delen", "stevigheid", "bottenstelsel"]
},
{
  id: "bio-h5-012",
  chapterId: "bio-h5",
  type: "begrip",
  prompt: "beenweefsel",
  answer: "Is heel stevig en een beetje buigzaam.",
  keywords: ["stevig", "buigzaam"]
},
{
  id: "bio-h5-013",
  chapterId: "bio-h5",
  type: "begrip",
  prompt: "kalkzouten",
  answer: "Geven stevigheid aan beenweefsel en lossen op in zoutzuur.",
  keywords: ["stevigheid", "beenweefsel", "zoutzuur"]
},
{
  id: "bio-h5-014",
  chapterId: "bio-h5",
  type: "begrip",
  prompt: "kraakbeenweefsel",
  answer: "Is stevig en buigzaam; komt bijvoorbeeld voor in de oorschelp.",
  keywords: ["stevig", "buigzaam", "oorschelp"]
},
{
  id: "bio-h5-015",
  chapterId: "bio-h5",
  type: "begrip",
  prompt: "lijmstof",
  answer: "Geeft buigzaamheid aan kraakbeenweefsel en beenweefsel; verbrandt in een vlam.",
  keywords: ["buigzaamheid", "kraakbeen", "beenweefsel"]
},
{
  id: "bio-h5-016",
  chapterId: "bio-h5",
  type: "begrip",
  prompt: "gewricht",
  answer: "Beweeglijke beenverbinding.",
  keywords: ["beweeglijke", "beenverbinding"]
},
{
  id: "bio-h5-017",
  chapterId: "bio-h5",
  type: "begrip",
  prompt: "gewrichtskapsel",
  answer: "Houdt de botten van een gewricht op hun plaats en geeft gewrichtssmeer af.",
  keywords: ["botten plaats", "gewrichtssmeer"]
},
{
  id: "bio-h5-018",
  chapterId: "bio-h5",
  type: "begrip",
  prompt: "gewrichtskogel",
  answer: "Kogelvormig uiteinde van een bot in een gewricht.",
  keywords: ["kogelvormig", "uiteinde bot"]
},
{
  id: "bio-h5-019",
  chapterId: "bio-h5",
  type: "begrip",
  prompt: "gewrichtskom",
  answer: "Komvormig uiteinde van een bot in een gewricht.",
  keywords: ["komvormig", "uiteinde bot"]
},
{
  id: "bio-h5-020",
  chapterId: "bio-h5",
  type: "begrip",
  prompt: "gewrichtssmeer",
  answer: "Soort smeervet tussen de kraakbeenlaagjes; zorgt voor soepele beweging.",
  keywords: ["smeervet", "soepele beweging"]
},
{
  id: "bio-h5-021",
  chapterId: "bio-h5",
  type: "begrip",
  prompt: "kapselbanden",
  answer: "Stevige banden die helpen om de botten van een gewricht op hun plaats te houden.",
  keywords: ["stevige banden", "botten plaats"]
},
{
  id: "bio-h5-022",
  chapterId: "bio-h5",
  type: "begrip",
  prompt: "kogelgewricht",
  answer: "Beenverbinding waarbij beweging in verschillende richtingen mogelijk is.",
  keywords: ["verschillende richtingen", "beweging"]
},
{
  id: "bio-h5-023",
  chapterId: "bio-h5",
  type: "begrip",
  prompt: "verbinding met kraakbeen",
  answer: "Beetje beweeglijke beenverbinding door kraakbeen.",
  keywords: ["beetje beweeglijk", "kraakbeen"]
},
{
  id: "bio-h5-024",
  chapterId: "bio-h5",
  type: "begrip",
  prompt: "naad",
  answer: "Niet beweeglijke beenverbinding door een naad.",
  keywords: ["niet beweeglijk", "beenverbinding"]
},
{
  id: "bio-h5-025",
  chapterId: "bio-h5",
  type: "begrip",
  prompt: "rolgewricht",
  answer: "Beenverbinding waarbij een draaiende beweging mogelijk is; botten draaien in de lengterichting om elkaar.",
  keywords: ["draaiende beweging", "lengterichting"]
},
{
  id: "bio-h5-026",
  chapterId: "bio-h5",
  type: "begrip",
  prompt: "scharniergewricht",
  answer: "Beenverbinding waarbij alleen een beweging heen en terug mogelijk is.",
  keywords: ["heen terug", "beweging"]
},
{
  id: "bio-h5-027",
  chapterId: "bio-h5",
  type: "begrip",
  prompt: "vergroeid",
  answer: "Niet beweeglijke beenverbinding; meerdere botten zijn één geheel geworden.",
  keywords: ["niet beweeglijk", "één geheel"]
},
{
  id: "bio-h5-028",
  chapterId: "bio-h5",
  type: "begrip",
  prompt: "bindweefsel",
  answer: "Steunweefsel; geeft stevigheid aan een weefsel.",
  keywords: ["steunweefsel", "stevigheid"]
},
{
  id: "bio-h5-029",
  chapterId: "bio-h5",
  type: "begrip",
  prompt: "buigspier",
  answer: "Spier die de botten naar elkaar toe trekt als hij samentrekt.",
  keywords: ["botten naar elkaar", "samentrekt"]
},
{
  id: "bio-h5-030",
  chapterId: "bio-h5",
  type: "begrip",
  prompt: "pees",
  answer: "Verbinding tussen spier en bot; kan niet samentrekken.",
  keywords: ["spier bot", "niet samentrekken"]
},
{
  id: "bio-h5-031",
  chapterId: "bio-h5",
  type: "begrip",
  prompt: "spierbundel",
  answer: "Groep spiervezels omgeven door bindweefsel.",
  keywords: ["groep spiervezels", "bindweefsel"]
},
{
  id: "bio-h5-032",
  chapterId: "bio-h5",
  type: "begrip",
  prompt: "spierschede",
  answer: "Stevig bindweefsel om een spier.",
  keywords: ["bindweefsel", "spier"]
},
{
  id: "bio-h5-033",
  chapterId: "bio-h5",
  type: "begrip",
  prompt: "spiervezel",
  answer: "Groep spiercellen die samentrekken onder invloed van seintjes van zenuwcellen.",
  keywords: ["spiercellen", "samentrekken"]
},
{
  id: "bio-h5-034",
  chapterId: "bio-h5",
  type: "begrip",
  prompt: "strekspier",
  answer: "Spier die de botten van elkaar af trekt als hij samentrekt.",
  keywords: ["botten uit elkaar", "samentrekt"]
},
{
  id: "bio-h5-035",
  chapterId: "bio-h5",
  type: "begrip",
  prompt: "conditie",
  answer: "Hoeveel uithoudingsvermogen je hebt en hoe sterk je spieren zijn.",
  keywords: ["uithoudingsvermogen", "sterke spieren"]
},
{
  id: "bio-h5-036",
  chapterId: "bio-h5",
  type: "begrip",
  prompt: "dubbele-S-vorm",
  answer: "Gebogen vorm van de wervelkolom waardoor deze veerkrachtig is en schokken kan opvangen.",
  keywords: ["wervelkolom vorm", "schokken opvangen"]
},
{
  id: "bio-h5-037",
  chapterId: "bio-h5",
  type: "begrip",
  prompt: "overbelasting (van spieren)",
  answer: "Spieren moeten te veel of te lang achter elkaar samentrekken.",
  keywords: ["te veel", "te lang", "samentrekken"]
},
{
  id: "bio-h5-038",
  chapterId: "bio-h5",
  type: "begrip",
  prompt: "tussenwervelschijf",
  answer: "Kraakbeen tussen de wervels dat werkt als schokbreker.",
  keywords: ["kraakbeen", "schokbreker"]
},
{
  id: "bio-h5-039",
  chapterId: "bio-h5",
  type: "begrip",
  prompt: "wervel",
  answer: "Bot van de wervelkolom waar de rugspieren aan vastzitten.",
  keywords: ["wervelkolom", "rugspieren"]
},
{
  id: "bio-h5-040",
  chapterId: "bio-h5",
  type: "begrip",
  prompt: "botbreuk",
  answer: "Scheur in het bot of in stukken gebroken bot.",
  keywords: ["scheur bot", "gebroken"]
},
{
  id: "bio-h5-041",
  chapterId: "bio-h5",
  type: "begrip",
  prompt: "cooling-down",
  answer: "Langzaam afbouwen van de inspanning na een training of wedstrijd.",
  keywords: ["afbouwen inspanning", "na training"]
},
{
  id: "bio-h5-042",
  chapterId: "bio-h5",
  type: "begrip",
  prompt: "kneuzing",
  answer: "Beschadiging van weefsel zonder dat er iets is gescheurd of gebroken.",
  keywords: ["beschadiging weefsel", "niet gescheurd"]
},
{
  id: "bio-h5-043",
  chapterId: "bio-h5",
  type: "begrip",
  prompt: "meniscus",
  answer: "Stukje kraakbeen in het kniegewricht.",
  keywords: ["kraakbeen", "kniegewricht"]
},
{
  id: "bio-h5-044",
  chapterId: "bio-h5",
  type: "begrip",
  prompt: "ontsteking",
  answer: "Reactie van het lichaam op beschadiging van weefsel.",
  keywords: ["reactie lichaam", "beschadiging"]
},
{
  id: "bio-h5-045",
  chapterId: "bio-h5",
  type: "begrip",
  prompt: "ontwrichting",
  answer: "Gewrichtskogel schiet uit de gewrichtskom.",
  keywords: ["gewrichtskogel", "uit gewrichtskom"]
},
{
  id: "bio-h5-046",
  chapterId: "bio-h5",
  type: "begrip",
  prompt: "RSI",
  answer: "Blessure aan spier of pees door te vaak dezelfde beweging maken, een statische houding of steeds kracht uitoefenen op dezelfde plek.",
  keywords: ["zelfde beweging", "statische houding", "kracht"]
},
{
  id: "bio-h5-047",
  chapterId: "bio-h5",
  type: "begrip",
  prompt: "spierpijn",
  answer: "Blessure aan spieren die ontstaat als je je spieren meer dan normaal hebt ingespannen.",
  keywords: ["spieren", "meer ingespannen"]
},
{
  id: "bio-h5-048",
  chapterId: "bio-h5",
  type: "begrip",
  prompt: "verzwikking",
  answer: "Gewrichtskapsel en kapselbanden rekken te ver uit door een verkeerde beweging.",
  keywords: ["rekken te ver", "verkeerde beweging"]
},
{
  id: "bio-h5-049",
  chapterId: "bio-h5",
  type: "begrip",
  prompt: "warming-up",
  answer: "Langzaam opbouwen van de inspanning voor een training of wedstrijd.",
  keywords: ["opbouwen inspanning", "voor training"]
},
  {
  id: "bio-h6-001",
  chapterId: "bio-h6",
  type: "begrip",
  prompt: "alleseters",
  answer: "Dieren die planten en dieren eten; vormen de tweede of hogere schakel van de voedselketen.",
  keywords: ["planten en dieren", "hogere schakel", "voedselketen"]
},
{
  id: "bio-h6-002",
  chapterId: "bio-h6",
  type: "begrip",
  prompt: "consumenten",
  answer: "Alleseters, planteneters en vleeseters; leven van de energierijke stoffen die planten maken.",
  keywords: ["planteneters vleeseters", "energierijke stoffen", "planten maken"]
},
{
  id: "bio-h6-003",
  chapterId: "bio-h6",
  type: "begrip",
  prompt: "energiearme stoffen",
  answer: "Stoffen die weinig energie bevatten, bijvoorbeeld koolstofdioxide, mineralen, water en zuurstof.",
  keywords: ["weinig energie", "koolstofdioxide", "zuurstof"]
},
{
  id: "bio-h6-004",
  chapterId: "bio-h6",
  type: "begrip",
  prompt: "energierijke stoffen",
  answer: "Stoffen die veel energie bevatten, bijvoorbeeld glucose en andere koolhydraten, eiwitten en vetten.",
  keywords: ["veel energie", "glucose", "vetten"]
},
{
  id: "bio-h6-005",
  chapterId: "bio-h6",
  type: "begrip",
  prompt: "biomassa",
  answer: "De hoeveelheid organische stoffen in een organisme.",
  keywords: ["hoeveelheid", "organische stoffen", "organisme"]
},
{
  id: "bio-h6-006",
  chapterId: "bio-h6",
  type: "begrip",
  prompt: "piramide van aantallen",
  answer: "Schema dat laat zien hoeveel individuen in elke schakel van een voedselketen voorkomen.",
  keywords: ["schema", "hoeveel individuen", "voedselketen"]
},
{
  id: "bio-h6-007",
  chapterId: "bio-h6",
  type: "begrip",
  prompt: "piramide van biomassa",
  answer: "Schema dat laat zien wat het gewicht is van alle organische stoffen in elke schakel van een voedselketen.",
  keywords: ["schema", "organische stoffen", "voedselketen"]
},
{
  id: "bio-h6-008",
  chapterId: "bio-h6",
  type: "begrip",
  prompt: "fotosynthese",
  answer: "Proces waarin bladgroenkorrels koolstofdioxide en water omzetten in glucose en zuurstof met behulp van energie uit zonlicht.",
  keywords: ["bladgroenkorrels", "glucose en zuurstof", "zonlicht"]
},
{
  id: "bio-h6-009",
  chapterId: "bio-h6",
  type: "begrip",
  prompt: "kringloop",
  answer: "Zich herhalend proces waarin stoffen steeds opnieuw worden gebruikt.",
  keywords: ["zich herhalend", "stoffen", "opnieuw gebruikt"]
},
{
  id: "bio-h6-010",
  chapterId: "bio-h6",
  type: "begrip",
  prompt: "mineraal (voedingszout)",
  answer: "Energiearme stof in de bodem die planten kunnen opnemen met hun wortels.",
  keywords: ["energiearme stof", "bodem", "wortels"]
},
{
  id: "bio-h6-011",
  chapterId: "bio-h6",
  type: "begrip",
  prompt: "planteneters",
  answer: "Dieren die planten eten; vormen de tweede schakel van de voedselketen.",
  keywords: ["planten eten", "tweede schakel", "voedselketen"]
},
{
  id: "bio-h6-012",
  chapterId: "bio-h6",
  type: "begrip",
  prompt: "producenten",
  answer: "Organismen met bladgroenkorrels; zetten energiearme stoffen om in energierijke stoffen.",
  keywords: ["bladgroenkorrels", "energiearme stoffen", "energierijke stoffen"]
},
{
  id: "bio-h6-013",
  chapterId: "bio-h6",
  type: "begrip",
  prompt: "reducenten",
  answer: "Bacteriën en schimmels; breken energierijke stoffen uit dode organismen af tot energiearme stoffen.",
  keywords: ["bacteriën en schimmels", "dode organismen", "energiearme stoffen"]
},
{
  id: "bio-h6-014",
  chapterId: "bio-h6",
  type: "begrip",
  prompt: "stofwisseling",
  answer: "Alle omzettingen van de ene stof in de andere stof in een organisme.",
  keywords: ["omzettingen", "ene stof", "organisme"]
},
{
  id: "bio-h6-015",
  chapterId: "bio-h6",
  type: "begrip",
  prompt: "vleeseters",
  answer: "Dieren die dieren eten; vormen de derde of hogere schakel van de voedselketen.",
  keywords: ["dieren eten", "hogere schakel", "voedselketen"]
},
{
  id: "bio-h6-016",
  chapterId: "bio-h6",
  type: "begrip",
  prompt: "voedselketen",
  answer: "Reeks soorten waarbij elke soort wordt opgegeten door de volgende soort in de reeks.",
  keywords: ["reeks soorten", "opgegeten", "volgende soort"]
},
{
  id: "bio-h6-017",
  chapterId: "bio-h6",
  type: "begrip",
  prompt: "voedselweb",
  answer: "Alle voedselrelaties in een ecosysteem.",
  keywords: ["voedselrelaties", "ecosysteem"]
},
{
  id: "bio-h6-018",
  chapterId: "bio-h6",
  type: "begrip",
  prompt: "koolstofkringloop",
  answer: "De verschillende stoffen waarin koolstof kan voorkomen en van het ene organisme naar het andere gaat.",
  keywords: ["verschillende stoffen", "koolstof", "organisme"]
},
{
  id: "bio-h6-019",
  chapterId: "bio-h6",
  type: "begrip",
  prompt: "stikstofkringloop",
  answer: "De verschillende stoffen waarin stikstof kan voorkomen en van het ene organisme naar het andere gaat.",
  keywords: ["verschillende stoffen", "stikstof", "organisme"]
},
{
  id: "bio-h6-020",
  chapterId: "bio-h6",
  type: "begrip",
  prompt: "abiotische factoren",
  answer: "Invloeden uit de levenloze natuur, bijvoorbeeld temperatuur en neerslag.",
  keywords: ["levenloze natuur", "temperatuur", "neerslag"]
},
{
  id: "bio-h6-021",
  chapterId: "bio-h6",
  type: "begrip",
  prompt: "biologisch evenwicht",
  answer: "Toestand waarin de grootte van elke populatie in een ecosysteem schommelt om een bepaalde waarde.",
  keywords: ["grootte", "populatie", "ecosysteem"]
},
{
  id: "bio-h6-022",
  chapterId: "bio-h6",
  type: "begrip",
  prompt: "biotische factoren",
  answer: "Invloeden uit de levende natuur, bijvoorbeeld voedsel en roofdieren.",
  keywords: ["levende natuur", "voedsel", "roofdieren"]
},
{
  id: "bio-h6-023",
  chapterId: "bio-h6",
  type: "begrip",
  prompt: "ecosysteem",
  answer: "Gebied met alle abiotische factoren en populaties die er leven.",
  keywords: ["gebied", "abiotische factoren", "populaties"]
},
{
  id: "bio-h6-024",
  chapterId: "bio-h6",
  type: "begrip",
  prompt: "individu",
  answer: "Eén enkel organisme.",
  keywords: ["één", "organisme"]
},
{
  id: "bio-h6-025",
  chapterId: "bio-h6",
  type: "begrip",
  prompt: "levensgemeenschap",
  answer: "Alle populaties in een bepaald leefgebied.",
  keywords: ["populaties", "leefgebied"]
},
{
  id: "bio-h6-026",
  chapterId: "bio-h6",
  type: "begrip",
  prompt: "optimumkromme",
  answer: "Diagram dat voor een abiotische factor de minimale, optimale en maximale waarde van een soort laat zien.",
  keywords: ["diagram", "abiotische factor", "maximale waarde"]
},
{
  id: "bio-h6-027",
  chapterId: "bio-h6",
  type: "begrip",
  prompt: "populatie",
  answer: "Groep individuen van dezelfde soort in een bepaald gebied, die zich onderling voortplanten.",
  keywords: ["groep individuen", "dezelfde soort", "voortplanten"]
},
{
  id: "bio-h6-028",
  chapterId: "bio-h6",
  type: "begrip",
  prompt: "gestroomlijnd",
  answer: "Lichaamsvorm met weinig uitsteeksels om de weerstand van water of lucht zo klein mogelijk te maken.",
  keywords: ["weinig uitsteeksels", "weerstand", "water of lucht"]
},
{
  id: "bio-h6-029",
  chapterId: "bio-h6",
  type: "begrip",
  prompt: "haaksnavel",
  answer: "Korte, kromme snavel om een prooi in stukken te scheuren.",
  keywords: ["kromme snavel", "prooi", "scheuren"]
},
{
  id: "bio-h6-030",
  chapterId: "bio-h6",
  type: "begrip",
  prompt: "hoefgangers",
  answer: "Organismen die op de toppen van hun tenen lopen.",
  keywords: ["toppen", "tenen", "lopen"]
},
{
  id: "bio-h6-031",
  chapterId: "bio-h6",
  type: "begrip",
  prompt: "kegelsnavel",
  answer: "Korte snavel om zaden te kraken.",
  keywords: ["korte snavel", "zaden", "kraken"]
},
{
  id: "bio-h6-032",
  chapterId: "bio-h6",
  type: "begrip",
  prompt: "pincetsnavel",
  answer: "Rechte, spitse snavel om insecten te vangen.",
  keywords: ["spitse snavel", "insecten", "vangen"]
},
{
  id: "bio-h6-033",
  chapterId: "bio-h6",
  type: "begrip",
  prompt: "priemsnavel",
  answer: "Lange, dunne snavel om voedsel te vangen in ondiep water of in een zanderige bodem.",
  keywords: ["dunne snavel", "ondiep water", "zanderige bodem"]
},
{
  id: "bio-h6-034",
  chapterId: "bio-h6",
  type: "begrip",
  prompt: "schutkleur",
  answer: "Kleur die overeenkomt met de omgeving waardoor een dier niet of minder opvalt.",
  keywords: ["omgeving", "minder opvalt", "kleur"]
},
{
  id: "bio-h6-035",
  chapterId: "bio-h6",
  type: "begrip",
  prompt: "teengangers",
  answer: "Organismen die op hun tenen lopen.",
  keywords: ["tenen", "lopen"]
},
{
  id: "bio-h6-036",
  chapterId: "bio-h6",
  type: "begrip",
  prompt: "zeefsnavel",
  answer: "Brede snavel om voedsel uit het water te zeven.",
  keywords: ["brede snavel", "voedsel", "water"]
},
{
  id: "bio-h6-037",
  chapterId: "bio-h6",
  type: "begrip",
  prompt: "zoolgangers",
  answer: "Organismen die op de hele voetzool lopen waardoor het steunoppervlak groot is.",
  keywords: ["hele voetzool", "lopen", "steunoppervlak"]
},
{
  id: "bio-h6-038",
  chapterId: "bio-h6",
  type: "begrip",
  prompt: "huidmondje",
  answer: "Kleine opening in de opperhuid van bladeren waardoor de plant stoffen kan opnemen en afgeven aan de lucht.",
  keywords: ["kleine opening", "opperhuid", "afgeven"]
},
{
  id: "bio-h6-039",
  chapterId: "bio-h6",
  type: "begrip",
  prompt: "klimplant",
  answer: "Plant met hechtwortels of ranken om zich vast te houden aan muren en andere planten.",
  keywords: ["hechtwortels", "ranken", "muren"]
},
{
  id: "bio-h6-040",
  chapterId: "bio-h6",
  type: "begrip",
  prompt: "luchtkanaal",
  answer: "Kanalen in de stengels van waterplanten om zuurstof naar de wortels te brengen.",
  keywords: ["stengels", "waterplanten", "wortels"]
},
{
  id: "bio-h6-041",
  chapterId: "bio-h6",
  type: "begrip",
  prompt: "schaduwplant",
  answer: "Plant die groeit op een plek waar veel schaduw is.",
  keywords: ["plek", "veel schaduw", "groeit"]
},
{
  id: "bio-h6-042",
  chapterId: "bio-h6",
  type: "begrip",
  prompt: "waslaagje",
  answer: "Laagje vettige stof op de bladeren van planten dat verdamping tegengaat.",
  keywords: ["vettige stof", "bladeren", "verdamping"]
},
{
  id: "bio-h6-043",
  chapterId: "bio-h6",
  type: "begrip",
  prompt: "waterplant",
  answer: "Plant die in het water leeft.",
  keywords: ["water", "plant", "leeft"]
},
{
  id: "bio-h6-044",
  chapterId: "bio-h6",
  type: "begrip",
  prompt: "zonplant",
  answer: "Plant die groeit op een plek waar veel zonlicht is.",
  keywords: ["plek", "veel zonlicht", "groeit"]
},
{
  id: "bio-h6-045",
  chapterId: "bio-h6",
  type: "begrip",
  prompt: "climaxecosysteem",
  answer: "Het laatste ecosysteem dat wordt gevormd.",
  keywords: ["laatste ecosysteem", "gevormd"]
},
{
  id: "bio-h6-046",
  chapterId: "bio-h6",
  type: "begrip",
  prompt: "humus",
  answer: "Mengsel van dode organismen en reducenten.",
  keywords: ["mengsel", "dode organismen", "reducenten"]
},
{
  id: "bio-h6-047",
  chapterId: "bio-h6",
  type: "begrip",
  prompt: "successie",
  answer: "Ontwikkeling waarbij het ene ecosysteem overgaat in het andere.",
  keywords: ["ontwikkeling", "ene ecosysteem", "andere"]
},
{
  id: "bio-h6-048",
  chapterId: "bio-h6",
  type: "begrip",
  prompt: "exoot",
  answer: "Uitheemse soort die door de mens in een gebied terecht is gekomen.",
  keywords: ["uitheemse soort", "mens", "gebied"]
},
{
  id: "bio-h6-049",
  chapterId: "bio-h6",
  type: "begrip",
  prompt: "inheemse soort",
  answer: "Soort die oorspronkelijk in een gebied voorkomt.",
  keywords: ["oorspronkelijk", "gebied", "soort"]
},
{
  id: "bio-h6-050",
  chapterId: "bio-h6",
  type: "begrip",
  prompt: "uitheemse soort",
  answer: "Soort die niet van nature in een gebied voorkomt.",
  keywords: ["niet van nature", "gebied", "soort"]
},
{
  id: "bio-h7-001",
  chapterId: "bio-h7",
  type: "begrip",
  prompt: "aantasting",
  answer: "Het natuurlijk ecosysteem verdwijnt en maakt plaats voor onder andere steden en landbouwgrond.",
  keywords: ["natuurlijk ecosysteem", "verdwijnt", "landbouwgrond"]
},
{
  id: "bio-h7-002",
  chapterId: "bio-h7",
  type: "begrip",
  prompt: "biodiversiteit",
  answer: "Variatie in de natuur door alle planten- en diersoorten.",
  keywords: ["variatie", "planten- en diersoorten", "natuur"]
},
{
  id: "bio-h7-003",
  chapterId: "bio-h7",
  type: "begrip",
  prompt: "duurzame ontwikkeling",
  answer: "Manier van leven waardoor de aarde ook in de toekomst leefbaar is.",
  keywords: ["manier van leven", "toekomst", "leefbaar"]
},
{
  id: "bio-h7-004",
  chapterId: "bio-h7",
  type: "begrip",
  prompt: "fijnstof",
  answer: "Kleine stofdeeltjes afkomstig van natuurlijke bronnen of van verkeer.",
  keywords: ["kleine stofdeeltjes", "natuurlijke bronnen", "verkeer"]
},
{
  id: "bio-h7-005",
  chapterId: "bio-h7",
  type: "begrip",
  prompt: "klimaatverandering",
  answer: "Langdurige verandering van het weer (gedurende tientallen jaren).",
  keywords: ["langdurige verandering", "weer", "tientallen jaren"]
},
{
  id: "bio-h7-006",
  chapterId: "bio-h7",
  type: "begrip",
  prompt: "ontbossing",
  answer: "Het verdwijnen van bossen door kappen of platbranden.",
  keywords: ["verdwijnen van bossen", "kappen", "platbranden"]
},
{
  id: "bio-h7-007",
  chapterId: "bio-h7",
  type: "begrip",
  prompt: "overbevolking",
  answer: "Te groot aantal mensen als gevolg van bevolkingsgroei, waardoor problemen ontstaan.",
  keywords: ["te groot aantal", "bevolkingsgroei", "problemen"]
},
{
  id: "bio-h7-008",
  chapterId: "bio-h7",
  type: "begrip",
  prompt: "smog",
  answer: "Door rook en uitlaatgassen vervuilde lucht.",
  keywords: ["rook", "uitlaatgassen", "vervuilde lucht"]
},
{
  id: "bio-h7-009",
  chapterId: "bio-h7",
  type: "begrip",
  prompt: "uitputting",
  answer: "Te veel stoffen onttrekken aan het milieu.",
  keywords: ["te veel", "stoffen onttrekken", "milieu"]
},
{
  id: "bio-h7-010",
  chapterId: "bio-h7",
  type: "begrip",
  prompt: "vervuiling",
  answer: "Stoffen toevoegen aan het milieu.",
  keywords: ["stoffen toevoegen", "milieu"]
},
{
  id: "bio-h7-011",
  chapterId: "bio-h7",
  type: "begrip",
  prompt: "bemesting",
  answer: "Mineralen toevoegen aan een akker.",
  keywords: ["mineralen", "akker", "toevoegen"]
},
{
  id: "bio-h7-012",
  chapterId: "bio-h7",
  type: "begrip",
  prompt: "bestrijdingsmiddelen",
  answer: "Stoffen die worden gebruikt om organismen te bestrijden die voedingsgewassen aantasten.",
  keywords: ["stoffen", "organismen bestrijden", "voedingsgewassen"]
},
{
  id: "bio-h7-013",
  chapterId: "bio-h7",
  type: "begrip",
  prompt: "bodembewerking",
  answer: "Verbeteren van de bodemstructuur door ploegen en eggen.",
  keywords: ["bodemstructuur", "ploegen", "eggen"]
},
{
  id: "bio-h7-014",
  chapterId: "bio-h7",
  type: "begrip",
  prompt: "in-vitro fertilisatie (ivf)",
  answer: "Techniek waarbij de eicel buiten het lichaam door spermacellen wordt bevrucht.",
  keywords: ["eicel", "buiten het lichaam", "spermacellen"]
},
{
  id: "bio-h7-015",
  chapterId: "bio-h7",
  type: "begrip",
  prompt: "kunstmatige inseminatie (ki)",
  answer: "Techniek waarbij sperma van een stier wordt ingebracht in de baarmoeder van een koe.",
  keywords: ["sperma", "baarmoeder", "koe"]
},
{
  id: "bio-h7-016",
  chapterId: "bio-h7",
  type: "begrip",
  prompt: "landbouwhuisdieren",
  answer: "Dieren die in de veeteelt worden gehouden.",
  keywords: ["dieren", "veeteelt", "gehouden"]
},
{
  id: "bio-h7-017",
  chapterId: "bio-h7",
  type: "begrip",
  prompt: "monocultuur",
  answer: "Grote akker met één soort gewas.",
  keywords: ["grote akker", "één soort", "gewas"]
},
{
  id: "bio-h7-018",
  chapterId: "bio-h7",
  type: "begrip",
  prompt: "plaag",
  answer: "Grote hoeveelheid organismen die een voedingsgewas aantasten.",
  keywords: ["grote hoeveelheid", "organismen", "voedingsgewas"]
},
{
  id: "bio-h7-019",
  chapterId: "bio-h7",
  type: "begrip",
  prompt: "veredeling",
  answer: "Individuen met de meest gunstige eigenschappen worden gekruist.",
  keywords: ["meest gunstige", "eigenschappen", "gekruist"]
},
{
  id: "bio-h7-020",
  chapterId: "bio-h7",
  type: "begrip",
  prompt: "voedingsgewassen",
  answer: "Planten die in de akkerbouw en de tuinbouw worden geteeld.",
  keywords: ["planten", "akkerbouw", "tuinbouw"]
},
{
  id: "bio-h7-021",
  chapterId: "bio-h7",
  type: "begrip",
  prompt: "bioaccumulatie",
  answer: "Ophoping van bestrijdingsmiddelen in de voedselketens doordat ze niet of langzaam worden afgebroken.",
  keywords: ["ophoping", "bestrijdingsmiddelen", "voedselketens"]
},
{
  id: "bio-h7-022",
  chapterId: "bio-h7",
  type: "begrip",
  prompt: "biologische landbouw",
  answer: "Vorm van landbouw waarbij er extra aandacht is voor het milieu en dierenwelzijn.",
  keywords: ["landbouw", "milieu", "dierenwelzijn"]
},
{
  id: "bio-h7-023",
  chapterId: "bio-h7",
  type: "begrip",
  prompt: "kringlooplandbouw",
  answer: "Vorm van landbouw waarbij alle grondstoffen en eindproducten in de kringloop optimaal worden benut.",
  keywords: ["grondstoffen", "eindproducten", "kringloop"]
},
{
  id: "bio-h7-024",
  chapterId: "bio-h7",
  type: "begrip",
  prompt: "niet-selectieve bestrijdingsmiddelen",
  answer: "Bestrijdingsmiddelen die veel soorten organismen bestrijden, ook nuttige organismen.",
  keywords: ["veel soorten", "organismen bestrijden", "nuttige organismen"]
},
{
  id: "bio-h7-025",
  chapterId: "bio-h7",
  type: "begrip",
  prompt: "pesticiden",
  answer: "Gewasbeschermingsmiddelen om ziekten en plagen te bestrijden.",
  keywords: ["gewasbeschermingsmiddelen", "ziekten", "plagen"]
},
{
  id: "bio-h7-026",
  chapterId: "bio-h7",
  type: "begrip",
  prompt: "precisielandbouw",
  answer: "Vorm van landbouw waarbij elk deel van een akker precies de juiste hoeveelheden water, mest en bestrijdingsmiddelen krijgt.",
  keywords: ["akker", "juiste hoeveelheden", "bestrijdingsmiddelen"]
},
{
  id: "bio-h7-027",
  chapterId: "bio-h7",
  type: "begrip",
  prompt: "resistentie",
  answer: "Ongevoeligheid van een organisme voor een bestrijdingsmiddel.",
  keywords: ["ongevoeligheid", "organisme", "bestrijdingsmiddel"]
},
{
  id: "bio-h7-028",
  chapterId: "bio-h7",
  type: "begrip",
  prompt: "selectieve bestrijdingsmiddelen",
  answer: "Bestrijdingsmiddelen die alleen de schadelijke organismen bestrijden.",
  keywords: ["alleen", "schadelijke organismen", "bestrijden"]
},
{
  id: "bio-h7-029",
  chapterId: "bio-h7",
  type: "begrip",
  prompt: "verticale landbouw",
  answer: "Het verticaal telen van gewassen in lagen.",
  keywords: ["verticaal", "gewassen", "lagen"]
},
{
  id: "bio-h7-030",
  chapterId: "bio-h7",
  type: "begrip",
  prompt: "vruchtwisseling",
  answer: "Het niet twee jaar achter elkaar verbouwen van hetzelfde soort gewas op een bepaald stuk grond.",
  keywords: ["niet twee jaar", "zelfde soort", "gewas"]
},
{
  id: "bio-h7-031",
  chapterId: "bio-h7",
  type: "begrip",
  prompt: "biobrandstof",
  answer: "Brandstof die is gemaakt uit biomassa.",
  keywords: ["brandstof", "biomassa"]
},
{
  id: "bio-h7-032",
  chapterId: "bio-h7",
  type: "begrip",
  prompt: "biomassa",
  answer: "Energierijke stoffen van organisch materiaal (afval of speciaal daarvoor gekweekte planten).",
  keywords: ["energierijke stoffen", "organisch materiaal", "afval"]
},
{
  id: "bio-h7-033",
  chapterId: "bio-h7",
  type: "begrip",
  prompt: "duurzame energie",
  answer: "Energie uit energiebronnen die niet opraken en die geen vervuiling veroorzaken.",
  keywords: ["energiebronnen", "niet opraken", "geen vervuiling"]
},
{
  id: "bio-h7-034",
  chapterId: "bio-h7",
  type: "begrip",
  prompt: "fossiele brandstof",
  answer: "Brandstof die miljoenen jaren geleden is ontstaan uit resten van dode planten en dieren.",
  keywords: ["miljoenen jaren", "dode planten", "dieren"]
},
{
  id: "bio-h7-035",
  chapterId: "bio-h7",
  type: "begrip",
  prompt: "getijdenenergie",
  answer: "Energie van stromend water bij eb en vloed.",
  keywords: ["stromend water", "eb en vloed"]
},
{
  id: "bio-h7-036",
  chapterId: "bio-h7",
  type: "begrip",
  prompt: "kernenergie",
  answer: "Energie die vrijkomt bij het splitsen van atoomkernen.",
  keywords: ["vrijkomt", "splitsen", "atoomkernen"]
},
{
  id: "bio-h7-037",
  chapterId: "bio-h7",
  type: "begrip",
  prompt: "waterkracht",
  answer: "Energie van stromend water in een rivier.",
  keywords: ["stromend water", "rivier"]
},
{
  id: "bio-h7-038",
  chapterId: "bio-h7",
  type: "begrip",
  prompt: "windenergie",
  answer: "Energie door de wind.",
  keywords: ["energie", "wind"]
},
{
  id: "bio-h7-039",
  chapterId: "bio-h7",
  type: "begrip",
  prompt: "zonne-energie",
  answer: "Energie door zonnestraling.",
  keywords: ["energie", "zonnestraling"]
},
{
  id: "bio-h7-040",
  chapterId: "bio-h7",
  type: "begrip",
  prompt: "broeikasgas",
  answer: "Gas in de atmosfeer dat warmte vasthoudt.",
  keywords: ["gas", "atmosfeer", "warmte"]
},
{
  id: "bio-h7-041",
  chapterId: "bio-h7",
  type: "begrip",
  prompt: "dampkring",
  answer: "Atmosfeer, de luchtlaag om de aarde.",
  keywords: ["atmosfeer", "luchtlaag", "aarde"]
},
{
  id: "bio-h7-042",
  chapterId: "bio-h7",
  type: "begrip",
  prompt: "jaarritme",
  answer: "Regelmaat in de levenscyclus van plant- en diersoorten.",
  keywords: ["regelmaat", "levenscyclus", "plant- en diersoorten"]
},
{
  id: "bio-h7-043",
  chapterId: "bio-h7",
  type: "begrip",
  prompt: "klimaat",
  answer: "Gemiddeld weer in een gebied over een periode van minstens dertig jaar.",
  keywords: ["gemiddeld weer", "gebied", "dertig jaar"]
},
{
  id: "bio-h7-044",
  chapterId: "bio-h7",
  type: "begrip",
  prompt: "versterkt broeikaseffect",
  answer: "Opwarming van de aarde door de toename van broeikasgassen in de atmosfeer.",
  keywords: ["opwarming van de aarde", "broeikasgassen", "atmosfeer"]
},
{
  id: "bio-h7-045",
  chapterId: "bio-h7",
  type: "begrip",
  prompt: "verzilting",
  answer: "Toename van het zoutgehalte in bodem en grondwater.",
  keywords: ["toename", "zoutgehalte", "grondwater"]
},
{
  id: "bio-h7-046",
  chapterId: "bio-h7",
  type: "begrip",
  prompt: "grondwater",
  answer: "Water in de bodem.",
  keywords: ["water", "bodem"]
},
{
  id: "bio-h7-047",
  chapterId: "bio-h7",
  type: "begrip",
  prompt: "oppervlaktewater",
  answer: "Water in rivieren, plassen, meren en zeeën.",
  keywords: ["rivieren", "meren", "zeeën"]
},
{
  id: "bio-h7-048",
  chapterId: "bio-h7",
  type: "begrip",
  prompt: "plasticsoep",
  answer: "Grote hoeveelheden plasticafval in de oceanen.",
  keywords: ["grote hoeveelheden", "plasticafval", "oceanen"]
},
{
  id: "bio-h7-049",
  chapterId: "bio-h7",
  type: "begrip",
  prompt: "vermesting",
  answer: "Sterke toename van de hoeveelheid mineralen in het water.",
  keywords: ["sterke toename", "mineralen", "water"]
},
{
  id: "bio-h7-050",
  chapterId: "bio-h7",
  type: "begrip",
  prompt: "waterbloei",
  answer: "Sterke algengroei in het water door vermesting.",
  keywords: ["algengroei", "water", "vermesting"]
},
{
  id: "bio-h7-051",
  chapterId: "bio-h7",
  type: "begrip",
  prompt: "zelfreinigend vermogen",
  answer: "Natuurlijk vermogen van water om zich te reinigen van energierijke stoffen.",
  keywords: ["natuurlijk vermogen", "water", "energierijke stoffen"]
},
{
  id: "bio-h7-052",
  chapterId: "bio-h7",
  type: "begrip",
  prompt: "bodemsanering",
  answer: "Vervuilde grond schoonmaken.",
  keywords: ["vervuilde grond", "schoonmaken"]
},
{
  id: "bio-h7-053",
  chapterId: "bio-h7",
  type: "begrip",
  prompt: "compost",
  answer: "Door reducenten afgebroken gft-afval; bevat veel voedingsstoffen voor planten.",
  keywords: ["gft-afval", "voedingsstoffen", "planten"]
},
{
  id: "bio-h7-054",
  chapterId: "bio-h7",
  type: "begrip",
  prompt: "gft",
  answer: "Groente-, fruit- en tuinafval.",
  keywords: ["groente", "fruit", "tuinafval"]
},
{
  id: "bio-h7-055",
  chapterId: "bio-h7",
  type: "begrip",
  prompt: "kca",
  answer: "Klein chemisch afval van huishoudens.",
  keywords: ["klein chemisch afval", "huishoudens"]
},
{
  id: "bio-h7-056",
  chapterId: "bio-h7",
  type: "begrip",
  prompt: "recycling",
  answer: "Afval als grondstof gebruiken voor nieuwe producten.",
  keywords: ["afval", "grondstof", "nieuwe producten"]
},
{
  id: "bio-h7-057",
  chapterId: "bio-h7",
  type: "begrip",
  prompt: "restafval",
  answer: "Afval dat geen kca is en niet kan worden gerecycled of gecomposteerd.",
  keywords: ["geen kca", "gerecycled", "gecomposteerd"]
},
{
  id: "bio-h7-058",
  chapterId: "bio-h7",
  type: "begrip",
  prompt: "cisgenese",
  answer: "Genetische modificatie met een gen van een ander ras van dezelfde soort.",
  keywords: ["genetische modificatie", "ander ras", "zelfde soort"]
},
{
  id: "bio-h7-059",
  chapterId: "bio-h7",
  type: "begrip",
  prompt: "transgenese",
  answer: "Genetische modificatie met een gen van een andere soort.",
  keywords: ["genetische modificatie", "andere soort"]
}
  ];



/* =========================
COURSE
========================= */

export const biologieMavo3Course = {
  id: "biologie-mavo-3",
  subject: "biologie",
  level: "mavo",
  grade: "3",
  title: "Biologie 3 mavo",
  chapters,
  datasets: {
    terms: items,
    years: [],
    persons: []
  },
  modes: [
    {
      id: "term-to-answer",
      label: "Begrip → beschrijving",
      dataset: "terms"
    },
    {
      id: "answer-to-term",
      label: "Beschrijving → begrip",
      dataset: "terms"
    }
  ]
};
