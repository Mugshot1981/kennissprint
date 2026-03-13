/*
KennisSprint dataset
© Joas de Wit
2026
*/
const subjects = [
  {
    id: "geschiedenis",
    title: "Geschiedenis"
  }
];

const chapters = [
  {
    id: "his-h1",
    subjectId: "geschiedenis",
    title: "Staatsinrichting van Nederland"
  },
  {
    id: "his-h2",
    subjectId: "geschiedenis",
    title: "De Eerste Wereldoorlog"
  },
  {
    id: "his-h3",
    subjectId: "geschiedenis",
    title: "Het Interbellum"
  },
  {
    id: "his-h4",
    subjectId: "geschiedenis",
    title: "De Tweede Wereldoorlog"
  },
  {
    id: "his-h5",
    subjectId: "geschiedenis",
    title: "De wereld na 1945"
  }
];
const items = [
 {
  id: "his-h1-001",
  subjectId: "geschiedenis",
  chapterId: "his-h1",
  type: "begrip",
  prompt: "grondwet",
  answer: "Een document waarin de grondrechten van alle burgers en de regels over het bestuur van het land staan.",
  keywords: ["grondrechten", "regels bestuur", "document"]
},
{
  id: "his-h1-002",
  subjectId: "geschiedenis",
  chapterId: "his-h1",
  type: "begrip",
  prompt: "grondrechten",
  answer: "Basisrechten van elke burger.",
  keywords: ["basisrechten", "rechten burger"]
},
{
  id: "his-h1-003",
  subjectId: "geschiedenis",
  chapterId: "his-h1",
  type: "begrip",
  prompt: "constitutionele monarchie",
  answer: "Een bestuursvorm waarbij de macht van de koning is vastgelegd in een grondwet.",
  keywords: ["koning macht", "grondwet", "bestuursvorm"]
},
{
  id: "his-h1-004",
  subjectId: "geschiedenis",
  chapterId: "his-h1",
  type: "begrip",
  prompt: "regering",
  answer: "De koning en de ministers samen.",
  keywords: ["koning", "ministers"]
},
{
  id: "his-h1-005",
  subjectId: "geschiedenis",
  chapterId: "his-h1",
  type: "begrip",
  prompt: "parlement",
  answer: "Een volksvertegenwoordiging; in Nederland de Eerste en Tweede Kamer samen.",
  keywords: ["volksvertegenwoordiging", "eerste kamer", "tweede kamer"]
},
{
  id: "his-h1-006",
  subjectId: "geschiedenis",
  chapterId: "his-h1",
  type: "begrip",
  prompt: "staatshoofd",
  answer: "Persoon die symbool staat voor de hoogste macht in een staat, zoals een koning of president.",
  keywords: ["hoogste macht", "koning", "president"]
},
{
  id: "his-h1-007",
  subjectId: "geschiedenis",
  chapterId: "his-h1",
  type: "begrip",
  prompt: "onschendbaar",
  answer: "De koning(in) is niet zelf politiek verantwoordelijk voor wat hij of zij zegt of doet.",
  keywords: ["koning niet verantwoordelijk", "politiek verantwoordelijk"]
},
{
  id: "his-h1-008",
  subjectId: "geschiedenis",
  chapterId: "his-h1",
  type: "begrip",
  prompt: "ministeriële verantwoordelijkheid",
  answer: "Ministers zijn verantwoordelijk voor wat de koning zegt of doet en voor hun eigen werk.",
  keywords: ["ministers verantwoordelijk", "koning verantwoordelijkheid"]
},
{
  id: "his-h1-009",
  subjectId: "geschiedenis",
  chapterId: "his-h1",
  type: "begrip",
  prompt: "parlementair stelsel",
  answer: "Een bestuursvorm waarbij het parlement de macht heeft.",
  keywords: ["parlement macht", "bestuursvorm"]
},
{
  id: "his-h1-010",
  subjectId: "geschiedenis",
  chapterId: "his-h1",
  type: "begrip",
  prompt: "districtenstelsel",
  answer: "Een systeem waarbij elk gebied een Kamerlid kiest; wie in een district de meeste stemmen krijgt, komt in de Kamer.",
  keywords: ["district", "meeste stemmen", "kamerlid"]
},
{
  id: "his-h1-011",
  subjectId: "geschiedenis",
  chapterId: "his-h1",
  type: "begrip",
  prompt: "Luxemburgse kwestie",
  answer: "Een ruzie over Luxemburg tussen de koning en het parlement in 1866-1867.",
  keywords: ["luxemburg", "ruzie", "koning parlement"]
},
{
  id: "his-h1-012",
  subjectId: "geschiedenis",
  chapterId: "his-h1",
  type: "begrip",
  prompt: "liberalisme",
  answer: "Politieke stroming die zoveel mogelijk vrijheid wil voor burgers en bedrijven.",
  keywords: ["vrijheid burgers", "vrijheid bedrijven"]
},
{
  id: "his-h1-013",
  subjectId: "geschiedenis",
  chapterId: "his-h1",
  type: "begrip",
  prompt: "socialisme",
  answer: "Politieke stroming die vindt dat geld en bezit eerlijker verdeeld moeten worden en dat de overheid armen moet helpen.",
  keywords: ["eerlijke verdeling", "overheid helpt armen"]
},
{
  id: "his-h1-014",
  subjectId: "geschiedenis",
  chapterId: "his-h1",
  type: "begrip",
  prompt: "confessionalisme",
  answer: "Politieke stroming waarbij politieke ideeën gebaseerd zijn op het geloof.",
  keywords: ["politiek geloof", "religieuze politiek"]
},
{
  id: "his-h1-015",
  subjectId: "geschiedenis",
  chapterId: "his-h1",
  type: "begrip",
  prompt: "censuskiesrecht",
  answer: "Kiesrecht waarbij alleen mensen die een bepaald bedrag aan belasting betalen mogen stemmen.",
  keywords: ["belasting betalen", "beperkt kiesrecht"]
},
{
  id: "his-h1-016",
  subjectId: "geschiedenis",
  chapterId: "his-h1",
  type: "begrip",
  prompt: "algemeen kiesrecht",
  answer: "Het recht voor iedereen vanaf een bepaalde leeftijd om te stemmen.",
  keywords: ["iedereen stemmen", "stemrecht"]
},
{
  id: "his-h1-017",
  subjectId: "geschiedenis",
  chapterId: "his-h1",
  type: "begrip",
  prompt: "industriële revolutie",
  answer: "De grote verandering door de komst van fabrieken en machines.",
  keywords: ["fabrieken", "machines", "grote verandering"]
},
{
  id: "his-h1-018",
  subjectId: "geschiedenis",
  chapterId: "his-h1",
  type: "begrip",
  prompt: "verstedelijking",
  answer: "Het ontstaan en groeien van steden doordat mensen van het platteland naar de stad trekken.",
  keywords: ["groei steden", "platteland naar stad"]
},
{
  id: "his-h1-019",
  subjectId: "geschiedenis",
  chapterId: "his-h1",
  type: "begrip",
  prompt: "sociale kwestie",
  answer: "Het probleem van slechte woon- en werkomstandigheden van arbeiders door de industriële revolutie.",
  keywords: ["slechte omstandigheden", "arbeiders", "industriele revolutie"]
},
{
  id: "his-h1-020",
  subjectId: "geschiedenis",
  chapterId: "his-h1",
  type: "begrip",
  prompt: "sociale wetten",
  answer: "Wetten die mensen beschermen tegen gevolgen van armoede, ziekte, ouderdom en werkloosheid.",
  keywords: ["bescherming", "armoede", "ziekte", "werkloosheid"]
},
{
  id: "his-h1-021",
  subjectId: "geschiedenis",
  chapterId: "his-h1",
  type: "begrip",
  prompt: "schoolstrijd",
  answer: "Politieke ruzie over de vraag wie het bijzonder onderwijs moest betalen.",
  keywords: ["onderwijs betalen", "politieke ruzie"]
},
{
  id: "his-h1-022",
  subjectId: "geschiedenis",
  chapterId: "his-h1",
  type: "begrip",
  prompt: "emancipatie",
  answer: "Het streven naar gelijke rechten.",
  keywords: ["gelijke rechten"]
},
{
  id: "his-h1-023",
  subjectId: "geschiedenis",
  chapterId: "his-h1",
  type: "begrip",
  prompt: "discriminatie",
  answer: "Het ongelijk behandelen van een groep of persoon vanwege bijvoorbeeld geloof, geslacht of afkomst.",
  keywords: ["ongelijk behandelen", "groep", "afkomst"]
},
{
  id: "his-h1-024",
  subjectId: "geschiedenis",
  chapterId: "his-h1",
  type: "begrip",
  prompt: "verzuiling",
  answer: "De verdeling van de samenleving in groepen met eigen politieke en religieuze overtuigingen.",
  keywords: ["samenleving groepen", "religieuze groepen", "politieke groepen"]
},
{
  id: "his-h1-025",
  subjectId: "geschiedenis",
  chapterId: "his-h1",
  type: "begrip",
  prompt: "caoutchouc-artikel",
  answer: "Grondwetsartikel uit 1887 dat kiesrecht gaf aan alle mannen die aan bepaalde eisen voldeden.",
  keywords: ["grondwetsartikel", "kiesrecht mannen", "1887"]
},
{
  id: "his-h1-026",
  subjectId: "geschiedenis",
  chapterId: "his-h1",
  type: "begrip",
  prompt: "feminisme",
  answer: "Een beweging die opkomt voor gelijke rechten voor vrouwen.",
  keywords: ["gelijke rechten vrouwen", "vrouwenbeweging"]
},
{
  id: "his-h1-027",
  subjectId: "geschiedenis",
  chapterId: "his-h1",
  type: "begrip",
  prompt: "eerste feministische golf",
  answer: "Periode van ongeveer 1870 tot 1920 waarin steeds meer vrouwen actie voerden voor gelijke rechten.",
  keywords: ["1870", "1920", "vrouwenrechten"]
},
{
  id: "his-h1-028",
  subjectId: "geschiedenis",
  chapterId: "his-h1",
  type: "begrip",
  prompt: "vrouwenkiesrecht",
  answer: "Het recht van vrouwen om te stemmen en gekozen te worden.",
  keywords: ["stemrecht vrouwen"]
},
{
  id: "his-h1-029",
  subjectId: "geschiedenis",
  chapterId: "his-h1",
  type: "begrip",
  prompt: "Pacificatie van 1917",
  answer: "Naam voor de grondwetswijziging van 1917 waarbij socialisten, confessionelen en een deel van de liberalen een compromis sloten.",
  keywords: ["1917", "compromis", "grondwetswijziging"]
},
{
  id: "his-h1-030",
  subjectId: "geschiedenis",
  chapterId: "his-h1",
  type: "begrip",
  prompt: "financiële gelijkstelling van openbaar en bijzonder onderwijs",
  answer: "Grondwetswijziging in 1917 waardoor de overheid ook het bijzonder onderwijs betaalde.",
  keywords: ["1917", "onderwijs betalen", "bijzonder onderwijs"]
},
{
  id: "his-h1-031",
  subjectId: "geschiedenis",
  chapterId: "his-h1",
  type: "begrip",
  prompt: "evenredige vertegenwoordiging",
  answer: "Een systeem waarbij Kamerzetels worden verdeeld op basis van het percentage stemmen dat een partij krijgt.",
  keywords: ["kamerzetels", "percentage stemmen"]
},
{
  id: "his-h1-032",
  subjectId: "geschiedenis",
  chapterId: "his-h1",
  type: "begrip",
  prompt: "parlementaire democratie",
  answer: "Een bestuursvorm waarbij de macht ligt bij een parlement dat door burgers wordt gekozen.",
  keywords: ["parlement", "burgers kiezen"]
},
{
  id: "his-h1-033",
  subjectId: "geschiedenis",
  chapterId: "his-h1",
  type: "begrip",
  prompt: "referendum",
  answer: "Een stemming waarbij burgers direct over een wet of maatregel mogen stemmen.",
  keywords: ["burgers stemmen", "directe stemming"]
},
{
  id: "his-h1-034",
  subjectId: "geschiedenis",
  chapterId: "his-h1",
  type: "begrip",
  prompt: "coalitie",
  answer: "Een groep partijen in de Tweede Kamer die samen de regering vormen.",
  keywords: ["partijen samen", "regering vormen"]
},

  {
  id: "his-h1-035",
  subjectId: "geschiedenis",
  chapterId: "his-h1",
  type: "begrip",
  prompt: "oppositie",
  answer: "Partijen in de Tweede Kamer die niet in de regering zitten.",
  keywords: ["niet in regering", "tweede kamer", "partijen"]
},
{
  id: "his-h1-036",
  subjectId: "geschiedenis",
  chapterId: "his-h1",
  type: "begrip",
  prompt: "recht van budget",
  answer: "Het recht om de uitgaven en inkomsten van de staat te controleren en goed te keuren.",
  keywords: ["uitgaven controleren", "inkomsten controleren", "staat geld"]
},
{
  id: "his-h1-037",
  subjectId: "geschiedenis",
  chapterId: "his-h1",
  type: "begrip",
  prompt: "recht van interpellatie",
  answer: "Het recht van Kamerleden om ministers te ondervragen.",
  keywords: ["kamerleden vragen", "ministers ondervragen"]
},
{
  id: "his-h1-038",
  subjectId: "geschiedenis",
  chapterId: "his-h1",
  type: "begrip",
  prompt: "recht van enquête",
  answer: "Het recht om een onderzoek naar een bepaalde zaak in te stellen.",
  keywords: ["onderzoek instellen", "parlement onderzoek"]
},
{
  id: "his-h1-039",
  subjectId: "geschiedenis",
  chapterId: "his-h1",
  type: "begrip",
  prompt: "recht van initiatief",
  answer: "Het recht van Kamerleden om zelf wetsvoorstellen in te dienen.",
  keywords: ["kamerleden wetsvoorstel", "zelf voorstel"]
},
{
  id: "his-h1-040",
  subjectId: "geschiedenis",
  chapterId: "his-h1",
  type: "begrip",
  prompt: "recht van amendement",
  answer: "Het recht van Kamerleden om wetsvoorstellen te wijzigen.",
  keywords: ["wetsvoorstel wijzigen", "kamerleden aanpassen"]
},
{
  id: "his-h1-041",
  subjectId: "geschiedenis",
  chapterId: "his-h1",
  type: "begrip",
  prompt: "klassieke grondrechten",
  answer: "Grondrechten die burgers beschermen tegen de macht van de overheid.",
  keywords: ["beschermen overheid", "rechten burgers"]
},
{
  id: "his-h1-042",
  subjectId: "geschiedenis",
  chapterId: "his-h1",
  type: "begrip",
  prompt: "sociale grondrechten",
  answer: "Grondrechten die burgers bescherming door de overheid bieden.",
  keywords: ["overheid bescherming", "sociale rechten"]
},
{
  id: "his-h1-043",
  subjectId: "geschiedenis",
  chapterId: "his-h1",
  type: "begrip",
  prompt: "rechtsstaat",
  answer: "Een staat waarin burgers beschermd zijn tegen onrechtmatig optreden van de overheid.",
  keywords: ["bescherming overheid", "burgers rechten"]
},
{
  id: "his-h1-044",
  subjectId: "geschiedenis",
  chapterId: "his-h1",
  type: "begrip",
  prompt: "uitvoerende macht",
  answer: "De macht die wetten uitvoert.",
  keywords: ["wetten uitvoeren", "regering"]
},
{
  id: "his-h1-045",
  subjectId: "geschiedenis",
  chapterId: "his-h1",
  type: "begrip",
  prompt: "wetgevende macht",
  answer: "De macht die wetten maakt.",
  keywords: ["wetten maken", "parlement"]
},
{
  id: "his-h1-046",
  subjectId: "geschiedenis",
  chapterId: "his-h1",
  type: "begrip",
  prompt: "rechterlijke macht",
  answer: "De macht die wetten handhaaft en mensen straft die de wet overtreden.",
  keywords: ["wetten handhaven", "rechters", "straffen"]
},
{
  id: "his-h2-001",
  subjectId: "geschiedenis",
  chapterId: "his-h2",
  type: "begrip",
  prompt: "nationalisme",
  answer: "Een gevoel van trots voor je eigen land, volk en cultuur.",
  keywords: ["trots", "eigen land", "volk", "cultuur"]
},
{
  id: "his-h2-002",
  subjectId: "geschiedenis",
  chapterId: "his-h2",
  type: "begrip",
  prompt: "modern imperialisme",
  answer: "Het idee bij Europese landen in de 19e eeuw dat zij land moesten veroveren in Azië en Afrika om zo een groot rijk op te bouwen.",
  keywords: ["land veroveren", "azie", "afrika", "groot rijk"]
},
{
  id: "his-h2-003",
  subjectId: "geschiedenis",
  chapterId: "his-h2",
  type: "begrip",
  prompt: "militarisme",
  answer: "Het idee dat oorlog iets moois is en dat een land zo kan laten zien hoe sterk het is.",
  keywords: ["oorlog mooi", "sterk land"]
},
{
  id: "his-h2-004",
  subjectId: "geschiedenis",
  chapterId: "his-h2",
  type: "begrip",
  prompt: "wapenwedloop",
  answer: "Een soort wedstrijd waarbij landen proberen om de meeste en beste wapens te bezitten.",
  keywords: ["wedstrijd", "meeste wapens", "beste wapens"]
},
{
  id: "his-h2-005",
  subjectId: "geschiedenis",
  chapterId: "his-h2",
  type: "begrip",
  prompt: "bondgenootschap",
  answer: "Een afspraak tussen twee of meer landen om elkaar te helpen bij een oorlog.",
  keywords: ["afspraak", "landen helpen", "oorlog"]
},
{
  id: "his-h2-006",
  subjectId: "geschiedenis",
  chapterId: "his-h2",
  type: "begrip",
  prompt: "centralen",
  answer: "Het bondgenootschap tussen Duitsland, Oostenrijk-Hongarije en het Turkse Rijk.",
  keywords: ["duitsland", "oostenrijk hongarije", "turkse rijk"]
},
{
  id: "his-h2-007",
  subjectId: "geschiedenis",
  chapterId: "his-h2",
  type: "begrip",
  prompt: "geallieerden (tijdens de Eerste Wereldoorlog)",
  answer: "Het bondgenootschap tussen Rusland, Frankrijk en Groot-Brittannië.",
  keywords: ["rusland", "frankrijk", "groot brittannie"]
},
{
  id: "his-h2-008",
  subjectId: "geschiedenis",
  chapterId: "his-h2",
  type: "begrip",
  prompt: "tweefrontenoorlog",
  answer: "Een oorlog waarbij een land op twee fronten tegelijkertijd moet vechten.",
  keywords: ["twee fronten", "tegelijk vechten"]
},
{
  id: "his-h2-009",
  subjectId: "geschiedenis",
  chapterId: "his-h2",
  type: "begrip",
  prompt: "Von Schlieffenplan",
  answer: "Een plan van de Duitse generaal Von Schlieffen dat een tweefrontenoorlog voor Duitsland moest voorkomen.",
  keywords: ["plan", "duitsland", "tweefrontenoorlog voorkomen"]
},
{
  id: "his-h2-010",
  subjectId: "geschiedenis",
  chapterId: "his-h2",
  type: "begrip",
  prompt: "loopgraven",
  answer: "Diepe greppels die beschutting geven tegen beschietingen.",
  keywords: ["diepe greppels", "beschutting", "beschietingen"]
},
{
  id: "his-h2-011",
  subjectId: "geschiedenis",
  chapterId: "his-h2",
  type: "begrip",
  prompt: "totale oorlog",
  answer: "Een oorlog waarbij de hele samenleving wordt ingezet om de oorlog te kunnen winnen.",
  keywords: ["hele samenleving", "oorlog winnen"]
},
{
  id: "his-h2-012",
  subjectId: "geschiedenis",
  chapterId: "his-h2",
  type: "begrip",
  prompt: "propaganda",
  answer: "Reclame voor politieke ideeën, met als doel zoveel mogelijk mensen te overtuigen.",
  keywords: ["politieke ideeen", "overtuigen", "reclame"]
},
{
  id: "his-h2-013",
  subjectId: "geschiedenis",
  chapterId: "his-h2",
  type: "begrip",
  prompt: "vijandbeeld",
  answer: "Het negatief afbeelden en beschrijven van de vijand.",
  keywords: ["negatief", "vijand"]
},
{
  id: "his-h2-014",
  subjectId: "geschiedenis",
  chapterId: "his-h2",
  type: "begrip",
  prompt: "censuur",
  answer: "De regering controleert de pers en houdt dus toezicht op alle berichten die via massamedia naar buiten worden gebracht.",
  keywords: ["regering controle", "pers", "berichten"]
},
{
  id: "his-h2-015",
  subjectId: "geschiedenis",
  chapterId: "his-h2",
  type: "begrip",
  prompt: "neutraal",
  answer: "Als een land zich in geval van oorlog niet aansluit bij een van de strijdende partijen.",
  keywords: ["niet aansluiten", "oorlog", "strijdende partijen"]
},
{
  id: "his-h2-016",
  subjectId: "geschiedenis",
  chapterId: "his-h2",
  type: "begrip",
  prompt: "handelsbelemmeringen",
  answer: "Alle problemen die handeldrijven moeilijk maken.",
  keywords: ["problemen", "handel moeilijk"]
},
{
  id: "his-h2-017",
  subjectId: "geschiedenis",
  chapterId: "his-h2",
  type: "begrip",
  prompt: "distributiestelsel",
  answer: "Een stelsel waarin je alleen producten kunt kopen met bonkaarten.",
  keywords: ["stelsel", "bonkaarten", "producten kopen"]
},
{
  id: "his-h2-018",
  subjectId: "geschiedenis",
  chapterId: "his-h2",
  type: "begrip",
  prompt: "Dodendraad",
  answer: "Een hek met prikkeldraad dat onder hoge elektrische spanning stond, door Duitsland gebouwd op de grens tussen Nederland en België.",
  keywords: ["hek", "prikkeldraad", "elektrische spanning", "nederland belgie"]
},
{
  id: "his-h2-019",
  subjectId: "geschiedenis",
  chapterId: "his-h2",
  type: "begrip",
  prompt: "communisme",
  answer: "Een politieke stroming. Communisten streven naar een samenleving waarin iedereen gelijk is.",
  keywords: ["politieke stroming", "iedereen gelijk"]
},
{
  id: "his-h2-020",
  subjectId: "geschiedenis",
  chapterId: "his-h2",
  type: "begrip",
  prompt: "Russische Revolutie",
  answer: "De periode die begon met de opstand in februari 1917 en eindigde toen de communisten in oktober van dat jaar de macht grepen.",
  keywords: ["1917", "opstand", "communisten", "macht grepen"]
},
{
  id: "his-h2-021",
  subjectId: "geschiedenis",
  chapterId: "his-h2",
  type: "begrip",
  prompt: "onbeperkte duikbootoorlog",
  answer: "Een manier van vechten waarbij Duitsland vanaf zijn onderzeeërs vijandelijke én neutrale schepen beschiet.",
  keywords: ["onderzeeboten", "duitsland", "schepen beschieten", "neutrale schepen"]
},
{
  id: "his-h2-022",
  subjectId: "geschiedenis",
  chapterId: "his-h2",
  type: "begrip",
  prompt: "wapenstilstand",
  answer: "Een afspraak tussen de oorlogvoerende partijen om op te houden met vechten.",
  keywords: ["afspraak", "stoppen met vechten"]
},
{
  id: "his-h2-023",
  subjectId: "geschiedenis",
  chapterId: "his-h2",
  type: "begrip",
  prompt: "Verdrag van Versailles",
  answer: "Het vredesverdrag tussen Duitsland en de geallieerden na afloop van de Eerste Wereldoorlog.",
  keywords: ["vredesverdrag", "duitsland", "geallieerden", "eerste wereldoorlog"]
},
{
  id: "his-h2-024",
  subjectId: "geschiedenis",
  chapterId: "his-h2",
  type: "begrip",
  prompt: "Volkenbond",
  answer: "Een internationale organisatie die een nieuwe oorlog moest voorkomen.",
  keywords: ["internationale organisatie", "oorlog voorkomen"]
},
 {
  id: "his-h3-001",
  subjectId: "geschiedenis",
  chapterId: "his-h3",
  type: "begrip",
  prompt: "interbellum",
  answer: "De periode tussen de twee wereldoorlogen (1918-1939).",
  keywords: ["tussen wereldoorlogen", "1918", "1939"]
},
{
  id: "his-h3-002",
  subjectId: "geschiedenis",
  chapterId: "his-h3",
  type: "begrip",
  prompt: "Republiek van Weimar",
  answer: "Naam voor Duitsland tussen 1918 en 1933, toen Duitsland een parlementaire democratie was.",
  keywords: ["duitsland 1918", "duitsland 1933", "parlementaire democratie"]
},
{
  id: "his-h3-003",
  subjectId: "geschiedenis",
  chapterId: "his-h3",
  type: "begrip",
  prompt: "parlementaire democratie",
  answer: "Een bestuursvorm waarin de macht ligt bij een parlement dat gekozen wordt door de burgers.",
  keywords: ["parlement macht", "gekozen burgers"]
},
{
  id: "his-h3-004",
  subjectId: "geschiedenis",
  chapterId: "his-h3",
  type: "begrip",
  prompt: "dolkstootlegende",
  answer: "Het idee dat het Duitse leger de Eerste Wereldoorlog had kunnen winnen als de regering in 1918 geen wapenstilstand had gesloten.",
  keywords: ["leger verraden", "wapenstilstand 1918"]
},
{
  id: "his-h3-005",
  subjectId: "geschiedenis",
  chapterId: "his-h3",
  type: "begrip",
  prompt: "Verdrag van Versailles",
  answer: "Het vredesverdrag tussen Duitsland en de geallieerden na afloop van de Eerste Wereldoorlog.",
  keywords: ["vredesverdrag", "eerste wereldoorlog", "duitsland"]
},
{
  id: "his-h3-006",
  subjectId: "geschiedenis",
  chapterId: "his-h3",
  type: "begrip",
  prompt: "inflatie",
  answer: "Het geld wordt minder waard.",
  keywords: ["geld minder waard", "prijzen stijgen"]
},
{
  id: "his-h3-007",
  subjectId: "geschiedenis",
  chapterId: "his-h3",
  type: "begrip",
  prompt: "Dawesplan",
  answer: "Plan uit 1924 dat inhield dat de Verenigde Staten goedkope leningen aan Duitsland gaven om zijn economie weer op te bouwen.",
  keywords: ["leningen amerika", "duitse economie", "1924"]
},
{
  id: "his-h3-008",
  subjectId: "geschiedenis",
  chapterId: "his-h3",
  type: "begrip",
  prompt: "economische crisis",
  answer: "Een periode waarin het slecht gaat met de economie.",
  keywords: ["economie slecht", "werkloosheid", "armoede"]
},
{
  id: "his-h3-009",
  subjectId: "geschiedenis",
  chapterId: "his-h3",
  type: "begrip",
  prompt: "beurskrach",
  answer: "Een grote, plotselinge daling van de koersen van aandelen.",
  keywords: ["beurs instorting", "aandelen daling"]
},
{
  id: "his-h3-010",
  subjectId: "geschiedenis",
  chapterId: "his-h3",
  type: "begrip",
  prompt: "Nationaalsocialistische Duitse Arbeiderspartij (NSDAP)",
  answer: "De politieke partij van Adolf Hitler.",
  keywords: ["hitler partij", "nazi partij"]
},
{
  id: "his-h3-011",
  subjectId: "geschiedenis",
  chapterId: "his-h3",
  type: "begrip",
  prompt: "nationalisme",
  answer: "Trots zijn op je eigen land, volk en cultuur.",
  keywords: ["trots land", "volk", "cultuur"]
},
{
  id: "his-h3-012",
  subjectId: "geschiedenis",
  chapterId: "his-h3",
  type: "begrip",
  prompt: "Führerprincipe",
  answer: "Er is één leider die alle besluiten neemt en aan wie iedereen gehoorzaamt.",
  keywords: ["een leider", "gehoorzamen"]
},
{
  id: "his-h3-013",
  subjectId: "geschiedenis",
  chapterId: "his-h3",
  type: "begrip",
  prompt: "persoonsverheerlijking",
  answer: "Een mens als een soort god vereren.",
  keywords: ["leider vereren", "persoon cultus"]
},
{
  id: "his-h3-014",
  subjectId: "geschiedenis",
  chapterId: "his-h3",
  type: "begrip",
  prompt: "militarisme",
  answer: "Het idee dat oorlog iets moois is en dat een land zo kan laten zien hoe sterk het is.",
  keywords: ["oorlog goed", "sterk leger"]
},
{
  id: "his-h3-015",
  subjectId: "geschiedenis",
  chapterId: "his-h3",
  type: "begrip",
  prompt: "antisemitisme",
  answer: "Haat tegen Joden.",
  keywords: ["haat joden", "jodenhaat"]
},
{
  id: "his-h3-016",
  subjectId: "geschiedenis",
  chapterId: "his-h3",
  type: "begrip",
  prompt: "dictatuur",
  answer: "Een manier van regeren waarbij één persoon of een kleine groep alle macht heeft.",
  keywords: ["alle macht", "geen democratie"]
},
{
  id: "his-h3-017",
  subjectId: "geschiedenis",
  chapterId: "his-h3",
  type: "begrip",
  prompt: "totalitaire staat",
  answer: "Een land waarin het leven van de inwoners volledig wordt beheerst door de staat.",
  keywords: ["staat controle", "leven inwoners"]
},
{
  id: "his-h3-018",
  subjectId: "geschiedenis",
  chapterId: "his-h3",
  type: "begrip",
  prompt: "gelijkschakeling",
  answer: "Het onder directe controle brengen van alle organisaties en alle media in Duitsland door de nazi’s.",
  keywords: ["organisaties controle", "media controle"]
},
{
  id: "his-h3-019",
  subjectId: "geschiedenis",
  chapterId: "his-h3",
  type: "begrip",
  prompt: "indoctrinatie",
  answer: "Het inprenten van een opvatting door deze continu te herhalen en geen andere meningen toe te staan.",
  keywords: ["idee herhalen", "geen andere mening"]
},
{
  id: "his-h3-020",
  subjectId: "geschiedenis",
  chapterId: "his-h3",
  type: "begrip",
  prompt: "concentratiekamp",
  answer: "Grote kampen waarin bepaalde groepen mensen zonder proces werden opgesloten.",
  keywords: ["kamp gevangenen", "zonder proces"]
},
  {
  id: "his-h3-021",
  subjectId: "geschiedenis",
  chapterId: "his-h3",
  type: "begrip",
  prompt: "Gestapo",
  answer: "De geheime politie in nazi-Duitsland.",
  keywords: ["geheime politie", "nazi duitsland"]
},
{
  id: "his-h3-022",
  subjectId: "geschiedenis",
  chapterId: "his-h3",
  type: "begrip",
  prompt: "SA",
  answer: "De knokploeg van de NSDAP: een groep gewapende mannen in uniform die de partij beschermde en tegenstanders bang maakte.",
  keywords: ["nsdap knokploeg", "partij beschermen"]
},
{
  id: "his-h3-023",
  subjectId: "geschiedenis",
  chapterId: "his-h3",
  type: "begrip",
  prompt: "SS",
  answer: "Een militaire organisatie binnen de NSDAP die vooral tijdens de Tweede Wereldoorlog veel misdaden pleegde.",
  keywords: ["nazi organisatie", "oorlogsmisdaden"]
},
{
  id: "his-h3-024",
  subjectId: "geschiedenis",
  chapterId: "his-h3",
  type: "begrip",
  prompt: "Heim ins Reich",
  answer: "Het idee dat alle Duitssprekenden in één groot Duits rijk zouden moeten wonen.",
  keywords: ["duits sprekenden", "groot rijk"]
},
{
  id: "his-h3-025",
  subjectId: "geschiedenis",
  chapterId: "his-h3",
  type: "begrip",
  prompt: "Anschluss",
  answer: "De aansluiting in 1938 van Oostenrijk bij Duitsland.",
  keywords: ["oostenrijk", "duitsland 1938"]
},
{
  id: "his-h3-026",
  subjectId: "geschiedenis",
  chapterId: "his-h3",
  type: "begrip",
  prompt: "Conferentie van München",
  answer: "Een bijeenkomst in 1938 waarbij Groot-Brittannië en Frankrijk toestonden dat Hitler Sudetenland innam.",
  keywords: ["1938", "sudetenland", "hitler"]
},
{
  id: "his-h3-027",
  subjectId: "geschiedenis",
  chapterId: "his-h3",
  type: "begrip",
  prompt: "appeasementpolitiek",
  answer: "Britse en Franse politiek van niet ingrijpen maar toegeven aan Hitler om de vrede te bewaren.",
  keywords: ["toegeven hitler", "vrede bewaren"]
},
{
  id: "his-h3-028",
  subjectId: "geschiedenis",
  chapterId: "his-h3",
  type: "begrip",
  prompt: "Lebensraum",
  answer: "Leefruimte voor het Duitse volk, die Hitler wilde krijgen door het Duitse grondgebied uit te breiden naar het oosten.",
  keywords: ["leefruimte", "uitbreiding oosten"]
},
{
  id: "his-h3-029",
  subjectId: "geschiedenis",
  chapterId: "his-h3",
  type: "begrip",
  prompt: "fascisme",
  answer: "Een extreemrechtse politieke beweging die ontstond in Italië.",
  keywords: ["extreem nationalisme", "tegen democratie"]
},
{
  id: "his-h3-030",
  subjectId: "geschiedenis",
  chapterId: "his-h3",
  type: "begrip",
  prompt: "aanpassingspolitiek",
  answer: "Politiek waarbij de uitgaven van de overheid werden aangepast aan de teruglopende inkomsten.",
  keywords: ["bezuinigen", "overheid uitgaven"]
},
{
  id: "his-h3-031",
  subjectId: "geschiedenis",
  chapterId: "his-h3",
  type: "begrip",
  prompt: "werkverschaffingsproject",
  answer: "Groot project dat de regering organiseerde waar werklozen verplicht zwaar werk deden.",
  keywords: ["werklozen werk", "overheid project"]
},
{
  id: "his-h3-032",
  subjectId: "geschiedenis",
  chapterId: "his-h3",
  type: "begrip",
  prompt: "Nationaalsocialistische Beweging (NSB)",
  answer: "Een extreemrechtse politieke partij die in 1931 door Anton Mussert in Nederland werd opgericht.",
  keywords: ["mussert", "nederland nazi partij"]
},
{
  id: "his-h3-033",
  subjectId: "geschiedenis",
  chapterId: "his-h3",
  type: "begrip",
  prompt: "communisme",
  answer: "Een politieke stroming waarin iedereen gelijk zou moeten zijn.",
  keywords: ["gelijke samenleving", "geen privébezit"]
},
{
  id: "his-h3-034",
  subjectId: "geschiedenis",
  chapterId: "his-h3",
  type: "begrip",
  prompt: "planeconomie",
  answer: "De economie wordt volledig geleid door de overheid.",
  keywords: ["overheid economie", "staat controle"]
},
{
  id: "his-h3-035",
  subjectId: "geschiedenis",
  chapterId: "his-h3",
  type: "begrip",
  prompt: "vijfjarenplannen",
  answer: "Plannen waarin staat wat en hoeveel er in vijf jaar geproduceerd moet worden.",
  keywords: ["productie plannen", "vijf jaar"]
},
{
  id: "his-h3-036",
  subjectId: "geschiedenis",
  chapterId: "his-h3",
  type: "begrip",
  prompt: "collectivisatie",
  answer: "Boerderijen werden samengevoegd tot grote gezamenlijke boerderijen.",
  keywords: ["boerderijen samen", "staat landbouw"]
},
{
  id: "his-h3-037",
  subjectId: "geschiedenis",
  chapterId: "his-h3",
  type: "begrip",
  prompt: "Grote Terreur",
  answer: "Periode 1936-1938 waarin Stalin massaal tegenstanders liet vervolgen.",
  keywords: ["stalin zuiveringen", "1936", "1938"]
},
{
  id: "his-h3-038",
  subjectId: "geschiedenis",
  chapterId: "his-h3",
  type: "begrip",
  prompt: "showproces",
  answer: "Een rechtszaak waarbij de schuld van tevoren vaststaat.",
  keywords: ["nep rechtszaak", "schuld vast"]
},
{
  id: "his-h3-039",
  subjectId: "geschiedenis",
  chapterId: "his-h3",
  type: "begrip",
  prompt: "stalinisme",
  answer: "Totalitaire manier van regeren onder Stalin met propaganda en terreur.",
  keywords: ["stalin dictatuur", "propaganda", "terreur"]
},
{
  id: "his-h3-040",
  subjectId: "geschiedenis",
  chapterId: "his-h3",
  type: "begrip",
  prompt: "niet-aanvalsverdrag",
  answer: "Verdrag uit 1939 waarin Duitsland en de Sovjet-Unie beloofden elkaar niet aan te vallen.",
  keywords: ["duitsland sovjet", "1939 verdrag"]
},
{
  id: "his-h3-041",
  subjectId: "geschiedenis",
  chapterId: "his-h3",
  type: "begrip",
  prompt: "herbewapening",
  answer: "Het opnieuw opbouwen en uitbreiden van het leger van een land.",
  keywords: ["leger uitbreiden", "bewapening"]
},
{
  id: "his-h3-042",
  subjectId: "geschiedenis",
  chapterId: "his-h3",
  type: "begrip",
  prompt: "herstelbetaling",
  answer: "Betaling door een land voor schade die tijdens een oorlog is veroorzaakt.",
  keywords: ["oorlog schade betalen"]
},
{
  id: "his-h3-043",
  subjectId: "geschiedenis",
  chapterId: "his-h3",
  type: "begrip",
  prompt: "Hitlerjugend",
  answer: "Nationaalsocialistische jeugdorganisatie in nazi-Duitsland.",
  keywords: ["nazi jeugd", "duits jeugdorganisatie"]
},
{
  id: "his-h3-044",
  subjectId: "geschiedenis",
  chapterId: "his-h3",
  type: "begrip",
  prompt: "Kristallnacht",
  answer: "De nacht van 9 op 10 november 1938 waarin Joodse winkels en synagogen werden vernield.",
  keywords: ["1938", "joodse winkels", "synagogen vernield"]
},
{
  id: "his-h3-045",
  subjectId: "geschiedenis",
  chapterId: "his-h3",
  type: "begrip",
  prompt: "rassenwetten",
  answer: "Antisemitische wetten in nazi-Duitsland waarin Joden geen volwaardige burgers waren.",
  keywords: ["anti joodse wetten", "burgerschap joden"]
},
{
  id: "his-h3-046",
  subjectId: "geschiedenis",
  chapterId: "his-h3",
  type: "begrip",
  prompt: "Volkenbond",
  answer: "Internationale organisatie opgericht na de Eerste Wereldoorlog om vrede te bewaren.",
  keywords: ["internationale organisatie", "vrede bewaren"]
},
{
  id: "his-h3-047",
  subjectId: "geschiedenis",
  chapterId: "his-h3",
  type: "begrip",
  prompt: "stempelensysteem",
  answer: "Systeem waarbij werklozen regelmatig een stempelkaart moesten laten afstempelen.",
  keywords: ["werklozen controle", "stempelkaart"]
},
{
  id: "his-h3-048",
  subjectId: "geschiedenis",
  chapterId: "his-h3",
  type: "begrip",
  prompt: "neutraliteitspolitiek",
  answer: "Beleid waarbij een land probeert neutraal te blijven in conflicten.",
  keywords: ["neutraal blijven", "geen partij"]
},
{
  id: "his-h3-049",
  subjectId: "geschiedenis",
  chapterId: "his-h3",
  type: "begrip",
  prompt: "WA",
  answer: "Weerbaarheidsafdeling van de NSB, een soort knokploeg van deze partij.",
  keywords: ["nsb knokploeg"]
},
{
  id: "his-h4-001",
  subjectId: "geschiedenis",
  chapterId: "his-h4",
  type: "begrip",
  prompt: "Asmogendheden",
  answer: "Het bondgenootschap van Duitsland, Italië en Japan tijdens de Tweede Wereldoorlog.",
  keywords: ["duitsland", "italië", "japan", "bondgenootschap"]
},
{
  id: "his-h4-002",
  subjectId: "geschiedenis",
  chapterId: "his-h4",
  type: "begrip",
  prompt: "Blitzkrieg",
  answer: "Duits voor bliksemoorlog. De snelle Duitse opmars tijdens de Tweede Wereldoorlog.",
  keywords: ["bliksemoorlog", "snelle opmars", "duitsland"]
},
{
  id: "his-h4-003",
  subjectId: "geschiedenis",
  chapterId: "his-h4",
  type: "begrip",
  prompt: "Slag om Engeland",
  answer: "Een felle luchtoorlog tussen Duitsland en Groot-Brittannië.",
  keywords: ["luchtoorlog", "duitsland", "groot-brittannië"]
},
{
  id: "his-h4-004",
  subjectId: "geschiedenis",
  chapterId: "his-h4",
  type: "begrip",
  prompt: "Operatie Barbarossa",
  answer: "Het Duitse plan om het westelijke deel van de Sovjet-Unie in te nemen.",
  keywords: ["duits plan", "sovjet-unie", "inname"]
},
{
  id: "his-h4-005",
  subjectId: "geschiedenis",
  chapterId: "his-h4",
  type: "begrip",
  prompt: "Geallieerden",
  answer: "Het bondgenootschap dat vocht tegen de asmogendheden, waaronder Groot-Brittannië, de Sovjet-Unie en de Verenigde Staten.",
  keywords: ["tegen asmogendheden", "groot-brittannië", "sovjet-unie", "verenigde staten"]
},
{
  id: "his-h4-006",
  subjectId: "geschiedenis",
  chapterId: "his-h4",
  type: "begrip",
  prompt: "Slag om Stalingrad",
  answer: "Een veldslag bij de Russische stad Stalingrad in 1942-1943 waarbij Duitsland een zware nederlaag leed.",
  keywords: ["stalingrad", "1942", "1943", "duitse nederlaag"]
},
{
  id: "his-h4-007",
  subjectId: "geschiedenis",
  chapterId: "his-h4",
  type: "begrip",
  prompt: "Pearl Harbor",
  answer: "Een Amerikaanse marinebasis op Hawaï die in 1941 werd aangevallen door Japan.",
  keywords: ["marinebasis", "hawai", "1941", "japan"]
},
{
  id: "his-h4-008",
  subjectId: "geschiedenis",
  chapterId: "his-h4",
  type: "begrip",
  prompt: "D-day",
  answer: "De grote invasie in Normandië (Frankrijk) op 6 juni 1944 door de geallieerden.",
  keywords: ["normandië", "6 juni 1944", "invasie", "geallieerden"]
},
{
  id: "his-h4-009",
  subjectId: "geschiedenis",
  chapterId: "his-h4",
  type: "begrip",
  prompt: "Tweefrontenoorlog",
  answer: "Een oorlog waarbij een land op twee fronten tegelijk moet vechten.",
  keywords: ["twee fronten", "tegelijk vechten"]
},
{
  id: "his-h4-010",
  subjectId: "geschiedenis",
  chapterId: "his-h4",
  type: "begrip",
  prompt: "Duitse bezetting",
  answer: "De periode van 10 mei 1940 tot 5 mei 1945 waarin Duitsland de macht had in Nederland.",
  keywords: ["10 mei 1940", "5 mei 1945", "nederland", "duitsland"]
},
{
  id: "his-h4-011",
  subjectId: "geschiedenis",
  chapterId: "his-h4",
  type: "begrip",
  prompt: "Capitulatie",
  answer: "Het leger legt de wapens neer en geeft zich over.",
  keywords: ["wapens neerleggen", "overgeven"]
},
{
  id: "his-h4-012",
  subjectId: "geschiedenis",
  chapterId: "his-h4",
  type: "begrip",
  prompt: "Regering in ballingschap",
  answer: "Een regering die zegt de macht te hebben in een land maar deze daar niet kan uitoefenen.",
  keywords: ["regering buiten land", "macht niet uitoefenen"]
},
{
  id: "his-h4-013",
  subjectId: "geschiedenis",
  chapterId: "his-h4",
  type: "begrip",
  prompt: "Gelijkschakeling",
  answer: "Het onder directe controle van de nazi’s brengen van alle organisaties en media.",
  keywords: ["directe controle", "organisaties", "media", "nazi’s"]
},
{
  id: "his-h4-014",
  subjectId: "geschiedenis",
  chapterId: "his-h4",
  type: "begrip",
  prompt: "Rechtsstaat",
  answer: "Een staat waarin burgers beschermd zijn tegen onrechtmatig optreden van de overheid en van andere burgers.",
  keywords: ["burgers beschermd", "overheid", "onrechtmatig optreden"]
},
{
  id: "his-h4-015",
  subjectId: "geschiedenis",
  chapterId: "his-h4",
  type: "begrip",
  prompt: "Collaboratie",
  answer: "Samenwerken met de bezetter.",
  keywords: ["samenwerken", "bezetter"]
},
{
  id: "his-h4-016",
  subjectId: "geschiedenis",
  chapterId: "his-h4",
  type: "begrip",
  prompt: "Verzet",
  answer: "De bezetter tegenwerken.",
  keywords: ["bezetter tegenwerken"]
},
{
  id: "his-h4-017",
  subjectId: "geschiedenis",
  chapterId: "his-h4",
  type: "begrip",
  prompt: "Persoonsbewijs",
  answer: "Een identiteitsbewijs.",
  keywords: ["identiteitsbewijs"]
},
{
  id: "his-h4-018",
  subjectId: "geschiedenis",
  chapterId: "his-h4",
  type: "begrip",
  prompt: "Februaristaking",
  answer: "Een grote staking in Amsterdam in 1941 tegen anti-Joodse maatregelen van de bezetter.",
  keywords: ["amsterdam", "1941", "staking", "anti-joodse maatregelen"]
},
{
  id: "his-h4-019",
  subjectId: "geschiedenis",
  chapterId: "his-h4",
  type: "begrip",
  prompt: "Distributiestelsel",
  answer: "Een systeem waarbij je alleen producten kunt kopen met bonkaarten.",
  keywords: ["bonkaarten", "producten kopen", "systeem"]
},
{
  id: "his-h4-020",
  subjectId: "geschiedenis",
  chapterId: "his-h4",
  type: "begrip",
  prompt: "Operatie Market Garden",
  answer: "Een plan van de geallieerden om via Nederland Duitsland binnen te vallen door bruggen over grote rivieren in te nemen.",
  keywords: ["geallieerden", "via nederland", "bruggen", "grote rivieren"]
},
{
  id: "his-h4-021",
  subjectId: "geschiedenis",
  chapterId: "his-h4",
  type: "begrip",
  prompt: "Slag om Arnhem",
  answer: "De poging van de geallieerden in 1944 om de brug over de Rijn bij Arnhem te veroveren op de Duitsers.",
  keywords: ["1944", "arnhem", "brug over de rijn", "geallieerden"]
},
{
  id: "his-h4-022",
  subjectId: "geschiedenis",
  chapterId: "his-h4",
  type: "begrip",
  prompt: "Spoorwegstaking",
  answer: "Een staking van het Nederlandse treinpersoneel in 1944 om het Duitse leger te verzwakken.",
  keywords: ["treinpersoneel", "1944", "duitse leger", "staking"]
},
{
  id: "his-h4-023",
  subjectId: "geschiedenis",
  chapterId: "his-h4",
  type: "begrip",
  prompt: "Hongerwinter",
  answer: "De strenge winter van 1944-1945 waarin er hongersnood was in West- en Noord-Nederland.",
  keywords: ["1944", "1945", "hongersnood", "west-nederland", "noord-nederland"]
},
{
  id: "his-h4-024",
  subjectId: "geschiedenis",
  chapterId: "his-h4",
  type: "begrip",
  prompt: "Antisemitisme",
  answer: "Haat tegen Joden.",
  keywords: ["haat joden", "jodenhaat"]
},
{
  id: "his-h4-025",
  subjectId: "geschiedenis",
  chapterId: "his-h4",
  type: "begrip",
  prompt: "Rassenleer",
  answer: "Het idee van de nazi’s dat er verschillende mensenrassen zijn en dat het ene ras beter is dan het andere.",
  keywords: ["mensenrassen", "ene ras beter", "nazi’s"]
},
{
  id: "his-h4-026",
  subjectId: "geschiedenis",
  chapterId: "his-h4",
  type: "begrip",
  prompt: "Neurenberger rassenwetten",
  answer: "Wetten die vanaf 1935 in nazi-Duitsland golden waardoor Joden niet meer als volwaardige burgers werden gezien.",
  keywords: ["1935", "nazi-duitsland", "joden", "geen volwaardige burgers"]
},
{
  id: "his-h4-027",
  subjectId: "geschiedenis",
  chapterId: "his-h4",
  type: "begrip",
  prompt: "Kristallnacht",
  answer: "Een door de nazi’s georganiseerde actie in november 1938 waarbij Joodse mensen werden aangevallen en Joods bezit werd vernield.",
  keywords: ["november 1938", "joodse mensen", "joods bezit", "vernield"]
},
{
  id: "his-h5-001",
  subjectId: "geschiedenis",
  chapterId: "his-h5",
  type: "begrip",
  prompt: "invloedssfeer",
  answer: "Een gebied dat onder grote invloed staat van een ander land.",
  keywords: ["gebied invloed", "ander land"]
},
{
  id: "his-h5-002",
  subjectId: "geschiedenis",
  chapterId: "his-h5",
  type: "begrip",
  prompt: "communisme",
  answer: "Een politieke stroming. Communisten streven naar een samenleving waarin iedereen gelijk is.",
  keywords: ["gelijke samenleving", "politieke stroming"]
},
{
  id: "his-h5-003",
  subjectId: "geschiedenis",
  chapterId: "his-h5",
  type: "begrip",
  prompt: "Oostblok",
  answer: "De Oost-Europese landen die tijdens de Koude Oorlog in de Russische invloedssfeer lagen.",
  keywords: ["oost-europa", "russische invloedssfeer", "koude oorlog"]
},
{
  id: "his-h5-004",
  subjectId: "geschiedenis",
  chapterId: "his-h5",
  type: "begrip",
  prompt: "satellietstaat",
  answer: "Een land dat volledig afhankelijk is van een ander land.",
  keywords: ["afhankelijk land", "ander land"]
},
{
  id: "his-h5-005",
  subjectId: "geschiedenis",
  chapterId: "his-h5",
  type: "begrip",
  prompt: "kapitalisme",
  answer: "Economie waarin ondernemers winst willen maken, er concurrentie bestaat en er privébezit is.",
  keywords: ["winst", "concurrentie", "privébezit"]
},
{
  id: "his-h5-006",
  subjectId: "geschiedenis",
  chapterId: "his-h5",
  type: "begrip",
  prompt: "Westblok",
  answer: "De West-Europese landen die tijdens de Koude Oorlog in de Amerikaanse invloedssfeer lagen.",
  keywords: ["west-europa", "amerikaanse invloedssfeer", "koude oorlog"]
},
{
  id: "his-h5-007",
  subjectId: "geschiedenis",
  chapterId: "his-h5",
  type: "begrip",
  prompt: "IJzeren Gordijn",
  answer: "De zwaarbewapende grens tussen het Oostblok en het Westblok.",
  keywords: ["grens", "oostblok", "westblok"]
},
{
  id: "his-h5-008",
  subjectId: "geschiedenis",
  chapterId: "his-h5",
  type: "begrip",
  prompt: "Koude Oorlog",
  answer: "De periode van vijandschap tussen het kapitalistische Westen en het communistische Oosten (1945-1989).",
  keywords: ["vijandschap", "westen", "oosten", "1945", "1989"]
},
{
  id: "his-h5-009",
  subjectId: "geschiedenis",
  chapterId: "his-h5",
  type: "begrip",
  prompt: "Blokkade van Berlijn",
  answer: "Het afsluiten van alle toegangswegen tot West-Berlijn door Stalin (1948-1949).",
  keywords: ["west-berlijn", "stalin", "1948", "1949"]
},
{
  id: "his-h5-010",
  subjectId: "geschiedenis",
  chapterId: "his-h5",
  type: "begrip",
  prompt: "NAVO",
  answer: "Een militair bondgenootschap van de Verenigde Staten, Canada en West-Europese landen.",
  keywords: ["militair bondgenootschap", "verenigde staten", "canada", "west-europa"]
},
{
  id: "his-h5-011",
  subjectId: "geschiedenis",
  chapterId: "his-h5",
  type: "begrip",
  prompt: "Warschaupact",
  answer: "Een militair bondgenootschap tussen de Sovjet-Unie en de communistische landen in Oost-Europa.",
  keywords: ["militair bondgenootschap", "sovjet-unie", "oost-europa"]
},
{
  id: "his-h5-012",
  subjectId: "geschiedenis",
  chapterId: "his-h5",
  type: "begrip",
  prompt: "Marshallplan",
  answer: "De economische steun van de Verenigde Staten aan landen in Europa na de Tweede Wereldoorlog.",
  keywords: ["economische steun", "verenigde staten", "europa"]
},
{
  id: "his-h5-013",
  subjectId: "geschiedenis",
  chapterId: "his-h5",
  type: "begrip",
  prompt: "containmentpolitiek",
  answer: "De Amerikaanse politiek die moest voorkomen dat het communisme zich verder verspreidde.",
  keywords: ["amerikaanse politiek", "communisme tegenhouden", "verspreiding stoppen"]
},
{
  id: "his-h5-014",
  subjectId: "geschiedenis",
  chapterId: "his-h5",
  type: "begrip",
  prompt: "Berlijnse Muur",
  answer: "Een muur rondom West-Berlijn, gebouwd door de regering van de DDR.",
  keywords: ["muur", "west-berlijn", "ddr"]
},
{
  id: "his-h5-015",
  subjectId: "geschiedenis",
  chapterId: "his-h5",
  type: "begrip",
  prompt: "Cubacrisis",
  answer: "De grote spanning tussen de Sovjet-Unie en de Verenigde Staten toen de Sovjet-Unie raketten op Cuba wilde plaatsen.",
  keywords: ["spanning", "sovjet-unie", "verenigde staten", "raketten cuba"]
},
{
  id: "his-h5-016",
  subjectId: "geschiedenis",
  chapterId: "his-h5",
  type: "begrip",
  prompt: "perestrojka",
  answer: "Een grote verandering in de communistische economie in de Sovjet-Unie.",
  keywords: ["verandering economie", "sovjet-unie", "communistische economie"]
},
{
  id: "his-h5-017",
  subjectId: "geschiedenis",
  chapterId: "his-h5",
  type: "begrip",
  prompt: "glasnost",
  answer: "Russisch voor 'openheid'. Een grote verandering op politiek gebied in de Sovjet-Unie waardoor er meer vrijheid kwam.",
  keywords: ["openheid", "politieke verandering", "meer vrijheid", "sovjet-unie"]
},
{
  id: "his-h5-018",
  subjectId: "geschiedenis",
  chapterId: "his-h5",
  type: "begrip",
  prompt: "Val van de Berlijnse Muur",
  answer: "Het opengaan van de grens tussen West- en Oost-Berlijn.",
  keywords: ["grens open", "west-berlijn", "oost-berlijn"]
},
{
  id: "his-h5-019",
  subjectId: "geschiedenis",
  chapterId: "his-h5",
  type: "begrip",
  prompt: "Duitse hereniging",
  answer: "De vereniging van Oost-Duitsland en West-Duitsland tot één land.",
  keywords: ["oost-duitsland", "west-duitsland", "één land"]
},
{
  id: "his-h5-020",
  subjectId: "geschiedenis",
  chapterId: "his-h5",
  type: "begrip",
  prompt: "wederopbouw",
  answer: "Het herstel van de schade die de Tweede Wereldoorlog had veroorzaakt.",
  keywords: ["herstel schade", "tweede wereldoorlog"]
},
{
  id: "his-h5-021",
  subjectId: "geschiedenis",
  chapterId: "his-h5",
  type: "begrip",
  prompt: "gastarbeiders",
  answer: "Arbeidskrachten uit het buitenland die tijdelijk naar Nederland kwamen om te werken.",
  keywords: ["arbeidskrachten", "buitenland", "tijdelijk werken", "nederland"]
},
{
  id: "his-h5-022",
  subjectId: "geschiedenis",
  chapterId: "his-h5",
  type: "begrip",
  prompt: "consumptiemaatschappij",
  answer: "Een maatschappij waarin veel mensen luxeproducten kunnen kopen.",
  keywords: ["luxeproducten", "veel kopen", "maatschappij"]
},
{
  id: "his-h5-023",
  subjectId: "geschiedenis",
  chapterId: "his-h5",
  type: "begrip",
  prompt: "verzorgingsstaat",
  answer: "De overheid zorgt ervoor dat burgers een inkomen hebben en zorg krijgen als ze dat nodig hebben.",
  keywords: ["overheid zorgt", "inkomen", "zorg"]
},
{
  id: "his-h5-024",
  subjectId: "geschiedenis",
  chapterId: "his-h5",
  type: "begrip",
  prompt: "amerikanisering",
  answer: "De beïnvloeding van een cultuur door de Amerikaanse cultuur.",
  keywords: ["amerikaanse cultuur", "beïnvloeding cultuur"]
},
{
  id: "his-h5-025",
  subjectId: "geschiedenis",
  chapterId: "his-h5",
  type: "begrip",
  prompt: "jongeren­cultuur",
  answer: "De eigen stijl, houding en opvattingen van een groep jongeren.",
  keywords: ["eigen stijl", "houding", "opvattingen", "jongeren"]
},
  {
  id: "his-h5-027",
  subjectId: "geschiedenis",
  chapterId: "his-h5",
  type: "begrip",
  prompt: "democratisering",
  answer: "Als mensen meer inspraak krijgen.",
  keywords: ["meer inspraak", "mensen invloed"]
},
{
  id: "his-h5-028",
  subjectId: "geschiedenis",
  chapterId: "his-h5",
  type: "begrip",
  prompt: "secularisatie",
  answer: "Steeds minder mensen zijn gelovig en gaan naar de kerk.",
  keywords: ["minder gelovig", "minder kerk"]
},
{
  id: "his-h5-029",
  subjectId: "geschiedenis",
  chapterId: "his-h5",
  type: "begrip",
  prompt: "ontzuiling",
  answer: "De invloed van de zuilen neemt af.",
  keywords: ["invloed zuilen", "neemt af"]
},
{
  id: "his-h5-030",
  subjectId: "geschiedenis",
  chapterId: "his-h5",
  type: "begrip",
  prompt: "tweede feministische golf",
  answer: "Feministen voerden actie in de jaren 1960 en 1970 om meer rechten voor vrouwen te krijgen.",
  keywords: ["feministen", "jaren 1960", "jaren 1970", "rechten vrouwen"]
},
{
  id: "his-h5-031",
  subjectId: "geschiedenis",
  chapterId: "his-h5",
  type: "begrip",
  prompt: "poldermodel",
  answer: "Samenwerking tussen de regering, werkgevers en werknemers om afspraken te maken.",
  keywords: ["samenwerking", "regering", "werkgevers", "werknemers"]
},
{
  id: "his-h5-032",
  subjectId: "geschiedenis",
  chapterId: "his-h5",
  type: "begrip",
  prompt: "populisme",
  answer: "Een politieke beweging die opkomt voor de belangen van het 'volk' en zich afzet tegen de zittende politiek.",
  keywords: ["belangen volk", "tegen politiek", "politieke beweging"]
},
{
  id: "his-h5-033",
  subjectId: "geschiedenis",
  chapterId: "his-h5",
  type: "begrip",
  prompt: "Verenigde Naties (VN)",
  answer: "Een internationale organisatie waarin bijna alle landen samenwerken om vrede en rechtvaardigheid te bevorderen.",
  keywords: ["internationale organisatie", "landen samenwerken", "vrede", "rechtvaardigheid"]
},
{
  id: "his-h5-034",
  subjectId: "geschiedenis",
  chapterId: "his-h5",
  type: "begrip",
  prompt: "Veiligheidsraad",
  answer: "Onderdeel van de VN dat als taak heeft de vrede te bewaken en militair mag ingrijpen.",
  keywords: ["onderdeel vn", "vrede bewaken", "militair ingrijpen"]
},
{
  id: "his-h5-035",
  subjectId: "geschiedenis",
  chapterId: "his-h5",
  type: "begrip",
  prompt: "vetorecht",
  answer: "Het recht om 'nee' te zeggen tegen een besluit waardoor het niet wordt aangenomen.",
  keywords: ["nee zeggen", "besluit tegenhouden"]
},
{
  id: "his-h5-036",
  subjectId: "geschiedenis",
  chapterId: "his-h5",
  type: "begrip",
  prompt: "Europese Gemeenschap voor Kolen en Staal (EGKS)",
  answer: "Samenwerking van zes Europese landen op het gebied van kolen en staal (vanaf 1951).",
  keywords: ["zes landen", "kolen", "staal", "1951"]
},
{
  id: "his-h5-037",
  subjectId: "geschiedenis",
  chapterId: "his-h5",
  type: "begrip",
  prompt: "Europese Economische Gemeenschap (EEG)",
  answer: "Samenwerking van Europese landen op economisch gebied (vanaf 1957).",
  keywords: ["europese landen", "economisch", "1957"]
},
{
  id: "his-h5-038",
  subjectId: "geschiedenis",
  chapterId: "his-h5",
  type: "begrip",
  prompt: "Europese Unie (EU)",
  answer: "Samenwerking van een groot aantal Europese landen op verschillende gebieden vanaf 1993.",
  keywords: ["europese landen", "samenwerking", "1993"]
},
{
  id: "his-h5-039",
  subjectId: "geschiedenis",
  chapterId: "his-h5",
  type: "begrip",
  prompt: "euro",
  answer: "De gemeenschappelijke Europese munt die vanaf 2002 gebruikt wordt in een groot aantal EU-landen.",
  keywords: ["europese munt", "2002", "eu-landen"]
},
{
  id: "his-h5-040",
  subjectId: "geschiedenis",
  chapterId: "his-h5",
  type: "begrip",
  prompt: "Europese Commissie",
  answer: "Het dagelijks bestuur van de Europese Unie.",
  keywords: ["dagelijks bestuur", "europese unie"]
},
{
  id: "his-h5-041",
  subjectId: "geschiedenis",
  chapterId: "his-h5",
  type: "begrip",
  prompt: "Europees Parlement",
  answer: "Volksvertegenwoordiging van de Europese Unie.",
  keywords: ["volksvertegenwoordiging", "europese unie"]
},
{
  id: "his-h5-042",
  subjectId: "geschiedenis",
  chapterId: "his-h5",
  type: "begrip",
  prompt: "Raad van Ministers",
  answer: "Vergadering waaraan uit elke EU-lidstaat één minister deelneemt.",
  keywords: ["vergadering", "eu-lidstaat", "één minister"]
},
{
  id: "his-h5-043",
  subjectId: "geschiedenis",
  chapterId: "his-h5",
  type: "begrip",
  prompt: "globalisering",
  answer: "Landen over de hele wereld raken op politiek, economisch en cultureel gebied steeds sterker met elkaar verbonden.",
  keywords: ["landen verbonden", "politiek", "economisch", "cultureel"]
},
{
  id: "his-h5-044",
  subjectId: "geschiedenis",
  chapterId: "his-h5",
  type: "begrip",
  prompt: "politieke islam",
  answer: "Een politieke beweging die wil dat de samenleving bestuurd wordt volgens een strenge uitleg van de islam.",
  keywords: ["politieke beweging", "strenge uitleg", "islam", "samenleving besturen"]
},
{
  id: "his-h5-045",
  subjectId: "geschiedenis",
  chapterId: "his-h5",
  type: "begrip",
  prompt: "terrorisme",
  answer: "Het gebruik van geweld om mensen angst aan te jagen en politieke doelen te bereiken.",
  keywords: ["geweld", "angst", "politieke doelen"]
},
{
  id: "his-h5-046",
  subjectId: "geschiedenis",
  chapterId: "his-h5",
  type: "begrip",
  prompt: "multiculturele samenleving",
  answer: "Samenleving die bestaat uit groepen mensen met verschillende culturen.",
  keywords: ["verschillende culturen", "groepen mensen"]
},
{
  id: "his-h5-047",
  subjectId: "geschiedenis",
  chapterId: "his-h5",
  type: "begrip",
  prompt: "pluriforme samenleving",
  answer: "Samenleving die bestaat uit groepen mensen met verschillende culturen.",
  keywords: ["verschillende culturen", "groepen mensen"]
},
];

// =========================
// GESCHIEDENIS JAARTALLEN
// =========================

const historyYears = [

  // Hoofdstuk 1
 {
  id: "h1-1848",
  chapterId: "his-h1",
  year: "1848",
  event: "Grondwetsherziening: parlementair stelsel en grondrechten",
  keywords: ["grondwetsherziening", "parlementair stelsel", "grondrechten"]
},
{
  id: "h1-1866",
  chapterId: "his-h1",
  year: "1866-1867",
  event: "Luxemburgse kwestie",
  keywords: ["luxemburgse kwestie", "luxemburg", "koning", "parlement"]
},
{
  id: "h1-1887",
  chapterId: "his-h1",
  year: "1887",
  event: "Caoutchouc-artikel",
  keywords: ["caoutchouc-artikel", "kiesrecht", "mannen", "eisen"]
},
{
  id: "h1-1917",
  chapterId: "his-h1",
  year: "1917",
  event: "Wijziging grondwet (Pacificatie)",
  keywords: ["pacificatie", "grondwetswijziging", "schoolstrijd", "kiesrecht"]
},
{
  id: "h1-1919",
  chapterId: "his-h1",
  year: "1919",
  event: "Algemeen kiesrecht voor vrouwen",
  keywords: ["algemeen kiesrecht", "vrouwenkiesrecht", "vrouwen"]
},
{
  id: "h1-1983",
  chapterId: "his-h1",
  year: "1983",
  event: "Sociale grondrechten in de grondwet",
  keywords: ["sociale grondrechten", "grondwet", "grondrechten"]
},
  
// Hoofdstuk 2 – Eerste Wereldoorlog

{
  id: "h2-1914",
  chapterId: "his-h2",
  year: "1914",
  event: "Uitbreken van de Eerste Wereldoorlog",
  keywords: ["eerste wereldoorlog", "oorlog begint", "1914"]
},
{
  id: "h2-1917",
  chapterId: "his-h2",
  year: "1917",
  event: "Russische Revolutie",
  keywords: ["russische revolutie", "revolutie rusland", "tsaar"]
},
{
  id: "h2-1917-us",
  chapterId: "his-h2",
  year: "1917",
  event: "De VS sluiten zich aan bij de geallieerden",
  keywords: ["vs", "verenigde staten", "geallieerden", "aansluiten"]
},
{
  id: "h2-1918-troelstra",
  chapterId: "his-h2",
  year: "1918",
  event: "Revolutiepoging van Troelstra",
  keywords: ["troelstra", "revolutiepoging", "nederland"]
},
{
  id: "h2-1918-wapenstilstand",
  chapterId: "his-h2",
  year: "1918",
  event: "Wapenstilstand in de Eerste Wereldoorlog",
  keywords: ["wapenstilstand", "einde eerste wereldoorlog"]
},
// Hoofdstuk 3 – Interbellum Duitsland

{
  id: "h3-1919",
  chapterId: "his-h3",
  year: "1919",
  event: "Verdrag van Versailles",
  keywords: ["verdrag van versailles", "duitsland", "herstelbetalingen", "na eerste wereldoorlog"]
},
{
  id: "h3-1923-ruhr",
  chapterId: "his-h3",
  year: "1923",
  event: "Bezetting van het Ruhrgebied",
  keywords: ["ruhrgebied", "bezetting", "frankrijk", "duitsland"]
},
{
  id: "h3-1923-inflatie",
  chapterId: "his-h3",
  year: "1923",
  event: "Hoge inflatie in Duitsland",
  keywords: ["inflatie", "duitsland", "geld wordt minder waard"]
},
{
  id: "h3-1923-putsch",
  chapterId: "his-h3",
  year: "1923",
  event: "Mislukte staatsgreep van Hitler",
  keywords: ["hitler", "staatsgreep", "bierkellerputsch"]
},
{
  id: "h3-1924",
  chapterId: "his-h3",
  year: "1924",
  event: "Dawesplan",
  keywords: ["dawesplan", "leningen", "duitsland economie"]
},
{
  id: "h3-1926",
  chapterId: "his-h3",
  year: "1926",
  event: "Duitsland lid van de Volkenbond",
  keywords: ["duitsland", "volkenbond", "internationale samenwerking"]
},
{
  id: "h3-1929",
  chapterId: "his-h3",
  year: "1929",
  event: "Beurskrach, begin wereldwijde economische crisis",
  keywords: ["beurskrach", "1929", "economische crisis"]
},
{
  id: "h3-1933",
  chapterId: "his-h3",
  year: "1933",
  event: "Machtsovername van Hitler",
  keywords: ["hitler", "machtsovername", "nazi"]
},
{
  id: "h3-1938",
  chapterId: "his-h3",
  year: "1938",
  event: "Anschluss",
  keywords: ["anschluss", "oostenrijk", "duitsland"]
},
{
  id: "h3-1938-munchen",
  chapterId: "his-h3",
  year: "1938",
  event: "Conferentie van München",
  keywords: ["conferentie münchen", "sudetenland", "appeasement"]
},
{
  id: "h3-1939-pact",
  chapterId: "his-h3",
  year: "1939",
  event: "Niet-aanvalsverdrag tussen Duitsland en de Sovjet-Unie",
  keywords: ["niet-aanvalsverdrag", "hitler", "stalin"]
},
// Hoofdstuk 4 – Tweede Wereldoorlog

{
  id: "h4-1939-war",
  chapterId: "his-h4",
  year: "1939",
  event: "Duitsland valt Polen binnen: begin Tweede Wereldoorlog",
  keywords: ["duitsland", "polen", "begin tweede wereldoorlog"]
},
{
  id: "h4-1940-nl",
  chapterId: "his-h4",
  year: "10 mei 1940",
  event: "Duitsland valt Nederland binnen",
  keywords: ["duitsland", "nederland", "bezetting"]
},
{
  id: "h4-1941-februaristaking",
  chapterId: "his-h4",
  year: "1941",
  event: "Februaristaking",
  keywords: ["februaristaking", "amsterdam", "staking tegen jodenvervolging"]
},
{
  id: "h4-1941-pearl",
  chapterId: "his-h4",
  year: "1941",
  event: "Aanval op Pearl Harbor",
  keywords: ["pearl harbor", "japan", "verenigde staten"]
},
{
  id: "h4-1941-barbarossa",
  chapterId: "his-h4",
  year: "1941",
  event: "Operatie Barbarossa: Duitsland valt de Sovjet-Unie binnen",
  keywords: ["operatie barbarossa", "duitsland", "sovjet-unie"]
},
{
  id: "h4-1941-usa-ussr",
  chapterId: "his-h4",
  year: "1941",
  event: "VS en SU sluiten zich aan bij de geallieerden",
  keywords: ["verenigde staten", "sovjet-unie", "geallieerden"]
},
{
  id: "h4-1942-indie",
  chapterId: "his-h4",
  year: "1942",
  event: "Japanse bezetting van Nederlands-Indië",
  keywords: ["japan", "nederlands-indie", "bezetting"]
},
{
  id: "h4-1942-stalingrad",
  chapterId: "his-h4",
  year: "1942-1943",
  event: "Slag om Stalingrad",
  keywords: ["stalingrad", "duitse nederlaag", "sovjet-unie"]
},
{
  id: "h4-1944-dday",
  chapterId: "his-h4",
  year: "6 juni 1944",
  event: "D-Day",
  keywords: ["d-day", "normandie", "geallieerden"]
},
{
  id: "h4-1944-spoorweg",
  chapterId: "his-h4",
  year: "1944",
  event: "Spoorwegstaking",
  keywords: ["spoorwegstaking", "nederland", "verzet"]
},
{
  id: "h4-1944-marketgarden",
  chapterId: "his-h4",
  year: "1944",
  event: "Operatie Market Garden en Slag om Arnhem",
  keywords: ["market garden", "arnhem", "brug"]
},
{
  id: "h4-1945-nlvrij",
  chapterId: "his-h4",
  year: "5 mei 1945",
  event: "Heel Nederland is bevrijd",
  keywords: ["bevrijding nederland", "einde bezetting"]
},
{
  id: "h4-1945-duitsland",
  chapterId: "his-h4",
  year: "mei 1945",
  event: "Duitsland geeft zich over",
  keywords: ["duitsland capituleert", "einde oorlog europa"]
},
{
  id: "h4-1945-atoom",
  chapterId: "his-h4",
  year: "augustus 1945",
  event: "Atoomaanval op Japan, Japan geeft zich over",
  keywords: ["atoombom", "japan", "einde tweede wereldoorlog"]
},
{
  id: "h4-1945-indie",
  chapterId: "his-h4",
  year: "15 augustus 1945",
  event: "Indonesië is bevrijd van Japan",
  keywords: ["indonesie", "japan", "bevrijding"]
},
{
  id: "h4-1945-soekarno",
  chapterId: "his-h4",
  year: "17 augustus 1945",
  event: "Soekarno roept de onafhankelijke Republiek Indonesië uit",
  keywords: ["soekarno", "indonesie onafhankelijk"]
},
{
  id: "h4-1947-politioneel",
  chapterId: "his-h4",
  year: "1947 en 1948",
  event: "Politionele acties",
  keywords: ["politionele acties", "nederland", "indonesie"]
},
{
  id: "h4-1949-indie",
  chapterId: "his-h4",
  year: "1949",
  event: "Soevereiniteitsoverdracht Indonesië",
  keywords: ["soevereiniteitsoverdracht", "indonesie onafhankelijk"]
},
// Hoofdstuk 5 – Koude Oorlog

{
  id: "h5-1945-endww2",
  chapterId: "his-h5",
  year: "1945",
  event: "Einde van de Tweede Wereldoorlog",
  keywords: ["einde tweede wereldoorlog", "1945", "einde oorlog"]
},
{
  id: "h5-1945-coldwar",
  chapterId: "his-h5",
  year: "1945",
  event: "Begin van de Koude Oorlog",
  keywords: ["koude oorlog", "begin koude oorlog", "vs", "sovjet-unie"]
},
{
  id: "h5-1956-hungary",
  chapterId: "his-h5",
  year: "1956",
  event: "Hongaarse Opstand",
  keywords: ["hongaarse opstand", "hongarije", "sovjet-unie"]
},
{
  id: "h5-1961-berlinwall",
  chapterId: "his-h5",
  year: "1961",
  event: "Bouw van de Berlijnse Muur",
  keywords: ["berlijnse muur", "berlijn", "ddr"]
},
{
  id: "h5-1962-cuba",
  chapterId: "his-h5",
  year: "1962",
  event: "Cuba-crisis",
  keywords: ["cubacrisis", "cuba", "raketten", "vs", "sovjet-unie"]
},
{
  id: "h5-1968-prague",
  chapterId: "his-h5",
  year: "1968",
  event: "Praagse Lente",
  keywords: ["praagse lente", "tsjechoslowakije", "sovjet-unie"]
},
{
  id: "h5-1989-wall",
  chapterId: "his-h5",
  year: "1989",
  event: "Val van de Berlijnse Muur",
  keywords: ["val berlijnse muur", "berlijn", "1989"]
},
{
  id: "h5-1989-coldwar",
  chapterId: "his-h5",
  year: "1989",
  event: "Einde van de Koude Oorlog",
  keywords: ["einde koude oorlog", "1989"]
},
{
  id: "h5-1990-ussr",
  chapterId: "his-h5",
  year: "1990-1991",
  event: "Sovjet-Unie valt uit elkaar",
  keywords: ["sovjet-unie", "valt uit elkaar", "einde sovjet-unie"]
},
{
  id: "h5-1991-ussrend",
  chapterId: "his-h5",
  year: "1991",
  event: "Sovjet-Unie wordt opgeheven",
  keywords: ["opheffing sovjet-unie", "1991"]
},
{
  id: "h5-1993-eu",
  chapterId: "his-h5",
  year: "1993",
  event: "Oprichting van de EU",
  keywords: ["europese unie", "eu", "oprichting"]
},
{
  id: "h5-2001-911",
  chapterId: "his-h5",
  year: "11 september 2001",
  event: "Aanslagen in de Verenigde Staten",
  keywords: ["11 september", "aanslagen", "new york", "terrorisme"]
},
{
  id: "h5-2002-euro",
  chapterId: "his-h5",
  year: "2002",
  event: "Invoering van de euro",
  keywords: ["euro", "europese munt", "2002"]
}
];
  // =========================
// COURSES
// =========================

export const historyMavo4Course = {
  id: "geschiedenis-mavo-4",
  subject: "geschiedenis",
  level: "mavo",
  grade: "4",
  title: "Geschiedenis 4 mavo",

  chapters: chapters,

  datasets: {
    terms: items,
    years: historyYears,
        persons: [
      {
        id: "his-p-001",
        chapterId: "his-h2",
        name: "Frans Ferdinand",
        description: "Kroonprins van Oostenrijk-Hongarije. Hij werd in 1914 vermoord in Sarajevo door Gavrilo Princip."
      },
      {
        id: "his-p-002",
        chapterId: "his-h2",
        name: "Vladimir Lenin",
        description: "Leider van de Russische Revolutie in 1917 en de eerste leider van de communistische Sovjet-Unie."
      },
      {
        id: "his-p-003",
        chapterId: "his-h2",
        name: "Gavrilo Princip",
        description: "Servisch nationalist uit Bosnië die in 1914 een aanslag pleegde op Frans Ferdinand."
      },
      {
        id: "his-p-004",
        chapterId: "his-h2",
        name: "Pieter Jelles Troelstra",
        description: "Socialistisch politicus en een van de oprichters van de SDAP. In 1918 riep hij op tot een revolutie."
      }
    ]
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
  },
  {
    id: "years",
    label: "Jaartal → gebeurtenis",
    dataset: "years"
  },
  {
    id: "event-years",
    label: "Gebeurtenis → jaartal",
    dataset: "years"
  },
  {
    id: "person-to-description",
    label: "Persoon → beschrijving",
    dataset: "persons",
    questionLabel: "Persoon",
    sessionModeLabel: "Persoon → beschrijving",
    questionField: "name",
    answerField: "description"
  },
  {
    id: "description-to-person",
    label: "Beschrijving → persoon",
    dataset: "persons",
    questionLabel: "Beschrijving",
    sessionModeLabel: "Beschrijving → persoon",
    questionField: "description",
    answerField: "name"
  }
]
};


