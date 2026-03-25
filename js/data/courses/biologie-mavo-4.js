/*
Biologie 4 mavo
KennisSprint dataset
© 2026
*/

/* =========================
SUBJECT
========================= */
import { biologieMavo3Course } from "./biologie-mavo-3.js";

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
  { id: "bio-h1", subjectId: "biologie", title: "Organen en cellen" },
  { id: "bio-h2", subjectId: "biologie", title: "Voortplanting en seksualiteit" },
  { id: "bio-h3", subjectId: "biologie", title: "Erfelijkheid en evolutie" },
  { id: "bio-h4", subjectId: "biologie", title: "Ordening" },
  { id: "bio-h5", subjectId: "biologie", title: "Stevigheid en beweging" },
  { id: "bio-h6", subjectId: "biologie", title: "Ecologie" },

  { id: "bio-h7", subjectId: "biologie", title: "Duurzaam leven" },
  { id: "bio-h8", subjectId: "biologie", title: "Gedrag" },
  { id: "bio-h9", subjectId: "biologie", title: "Planten" },
  { id: "bio-h10", subjectId: "biologie", title: "Regeling" },
  { id: "bio-h11", subjectId: "biologie", title: "Zintuigen" },
  { id: "bio-h12", subjectId: "biologie", title: "Voeding en vertering" },
  { id: "bio-h13", subjectId: "biologie", title: "Transport" },
  { id: "bio-h14", subjectId: "biologie", title: "Gaswisseling en uitscheiding" }
];


/* =========================
ITEMS (begrippen)
========================= */

const items = [
  ...biologieMavo3Course.datasets.terms,
 
{
  id: "bio-h8-001",
  chapterId: "bio-h8",
  type: "begrip",
  prompt: "ethogram",
  answer: "Objectieve beschrijving van de handelingen van een diersoort.",
  keywords: ["objectieve beschrijving", "handelingen", "diersoort"]
},
{
  id: "bio-h8-002",
  chapterId: "bio-h8",
  type: "begrip",
  prompt: "gedragsketen",
  answer: "Een vaste opeenvolging van handelingen.",
  keywords: ["vaste opeenvolging", "handelingen"]
},
{
  id: "bio-h8-003",
  chapterId: "bio-h8",
  type: "begrip",
  prompt: "handelingen",
  answer: "Verschillende activiteiten waaruit gedrag bestaat.",
  keywords: ["verschillende activiteiten", "gedrag"]
},
{
  id: "bio-h8-004",
  chapterId: "bio-h8",
  type: "begrip",
  prompt: "interpretatie",
  answer: "Een eigen uitleg van wat je waarneemt (een mening).",
  keywords: ["eigen uitleg", "waarnemen", "mening"]
},
{
  id: "bio-h8-005",
  chapterId: "bio-h8",
  type: "begrip",
  prompt: "observatie",
  answer: "Een feitelijke waarneming van gedrag.",
  keywords: ["feitelijke waarneming", "gedrag"]
},
{
  id: "bio-h8-006",
  chapterId: "bio-h8",
  type: "begrip",
  prompt: "protocol",
  answer: "Lijst van opeenvolgende waargenomen handelingen van een dier.",
  keywords: ["opeenvolgende handelingen", "dier"]
},
{
  id: "bio-h8-007",
  chapterId: "bio-h8",
  type: "begrip",
  prompt: "inwendige prikkel",
  answer: "Een prikkel die in het lichaam zelf ontstaat.",
  keywords: ["prikkel", "lichaam", "ontstaat"]
},
{
  id: "bio-h8-008",
  chapterId: "bio-h8",
  type: "begrip",
  prompt: "motivatie",
  answer: "De bereidheid tot het verrichten van bepaald gedrag.",
  keywords: ["bereidheid", "verrichten", "gedrag"]
},
{
  id: "bio-h8-009",
  chapterId: "bio-h8",
  type: "begrip",
  prompt: "prikkel",
  answer: "Een invloed uit de omgeving op een organisme.",
  keywords: ["invloed", "omgeving", "organisme"]
},
{
  id: "bio-h8-010",
  chapterId: "bio-h8",
  type: "begrip",
  prompt: "respons",
  answer: "Een reactie op een inwendige of uitwendige prikkel.",
  keywords: ["reactie", "inwendige prikkel", "uitwendige prikkel"]
},
{
  id: "bio-h8-011",
  chapterId: "bio-h8",
  type: "begrip",
  prompt: "sleutelprikkel",
  answer: "Een prikkel die, bij motivatie, altijd hetzelfde gedrag veroorzaakt.",
  keywords: ["prikkel", "motivatie", "zelfde gedrag"]
},
{
  id: "bio-h8-012",
  chapterId: "bio-h8",
  type: "begrip",
  prompt: "supranormale prikkel",
  answer: "Een prikkel die sterker gedrag opwekt dan een normale sleutelprikkel.",
  keywords: ["prikkel", "sterker gedrag", "sleutelprikkel"]
},
{
  id: "bio-h8-013",
  chapterId: "bio-h8",
  type: "begrip",
  prompt: "uitwendige prikkel",
  answer: "Een prikkel die je met je zintuigen waarneemt.",
  keywords: ["prikkel", "zintuigen", "waarneemt"]
},
{
  id: "bio-h8-014",
  chapterId: "bio-h8",
  type: "begrip",
  prompt: "aangeboren gedrag",
  answer: "Gedrag dat al bij pasgeboren jongen waarneembaar is.",
  keywords: ["gedrag", "pasgeboren jongen", "waarneembaar"]
},
{
  id: "bio-h8-015",
  chapterId: "bio-h8",
  type: "begrip",
  prompt: "aangeleerd gedrag",
  answer: "Gedrag dat zich door leerprocessen ontwikkelt tijdens het leven.",
  keywords: ["gedrag", "leerprocessen", "ontwikkelt"]
},
{
  id: "bio-h8-016",
  chapterId: "bio-h8",
  type: "begrip",
  prompt: "conditionering",
  answer: "Gedrag dat door beloning of straf wordt aangeleerd.",
  keywords: ["gedrag", "beloning", "straf"]
},
{
  id: "bio-h8-017",
  chapterId: "bio-h8",
  type: "begrip",
  prompt: "gewenning",
  answer: "Een reactie op een prikkel wordt bij herhaling van de prikkel afgeleerd.",
  keywords: ["reactie", "herhaling", "afgeleerd"]
},
{
  id: "bio-h8-018",
  chapterId: "bio-h8",
  type: "begrip",
  prompt: "inprenting",
  answer: "Leerproces dat alleen in een bepaalde korte periode kan plaatsvinden.",
  keywords: ["leerproces", "korte periode", "plaatsvinden"]
},
{
  id: "bio-h8-019",
  chapterId: "bio-h8",
  type: "begrip",
  prompt: "trial and error",
  answer: "Proefondervindelijk leren, leren door toevallige ontdekkingen.",
  keywords: ["proefondervindelijk leren", "toevallige ontdekkingen"]
},
{
  id: "bio-h8-020",
  chapterId: "bio-h8",
  type: "begrip",
  prompt: "broedzorg",
  answer: "Het verzorgen van eieren en jongen.",
  keywords: ["verzorgen", "eieren", "jongen"]
},
{
  id: "bio-h8-021",
  chapterId: "bio-h8",
  type: "begrip",
  prompt: "dreiggedrag",
  answer: "Gedrag dat is bedoeld om indringers te verjagen.",
  keywords: ["gedrag", "indringers", "verjagen"]
},
{
  id: "bio-h8-022",
  chapterId: "bio-h8",
  type: "begrip",
  prompt: "imponeergedrag",
  answer: "Gedrag waarbij een dier zich zo groot en indrukwekkend mogelijk maakt.",
  keywords: ["gedrag", "groot", "indrukwekkend"]
},
{
  id: "bio-h8-023",
  chapterId: "bio-h8",
  type: "begrip",
  prompt: "paringsgedrag",
  answer: "Gedrag dat aan de paring voorafgaat en bedoeld is om een partner aan te trekken.",
  keywords: ["gedrag", "paring", "partner"]
},
{
  id: "bio-h8-024",
  chapterId: "bio-h8",
  type: "begrip",
  prompt: "signaal",
  answer: "Handeling die als prikkel werkt voor de volgende handeling van een soortgenoot.",
  keywords: ["handeling", "prikkel", "soortgenoot"]
},
{
  id: "bio-h8-025",
  chapterId: "bio-h8",
  type: "begrip",
  prompt: "sociaal gedrag",
  answer: "Gedrag van soortgenoten ten opzichte van elkaar.",
  keywords: ["gedrag", "soortgenoten", "elkaar"]
},
{
  id: "bio-h8-026",
  chapterId: "bio-h8",
  type: "begrip",
  prompt: "territoriumgedrag",
  answer: "Gedrag om het territorium af te bakenen en te verdedigen tegen indringers.",
  keywords: ["gedrag", "territorium", "indringers"]
},
{
  id: "bio-h8-027",
  chapterId: "bio-h8",
  type: "begrip",
  prompt: "verzorgingsgedrag",
  answer: "Gedrag van dieren rondom het verzorgen van zichzelf of een ander.",
  keywords: ["gedrag", "verzorgen", "zichzelf"]
},
{
  id: "bio-h8-028",
  chapterId: "bio-h8",
  type: "begrip",
  prompt: "voedingsgedrag",
  answer: "Gedrag rondom wat, wanneer en hoe dieren eten.",
  keywords: ["gedrag", "dieren", "eten"]
},
{
  id: "bio-h8-029",
  chapterId: "bio-h8",
  type: "begrip",
  prompt: "rangorde",
  answer: "De plaats van een dier in een groep.",
  keywords: ["plaats", "dier", "groep"]
},
{
  id: "bio-h8-030",
  chapterId: "bio-h8",
  type: "begrip",
  prompt: "taakverdeling",
  answer: "In een groep dieren vertonen niet alle dieren hetzelfde gedrag.",
  keywords: ["groep dieren", "zelfde gedrag"]
},
{
  id: "bio-h8-031",
  chapterId: "bio-h8",
  type: "begrip",
  prompt: "normen",
  answer: "Gedragsregels bij mensen.",
  keywords: ["gedragsregels", "mensen"]
},
{
  id: "bio-h8-032",
  chapterId: "bio-h8",
  type: "begrip",
  prompt: "rolpatroon",
  answer: "Al het gedrag dat bij een bepaalde rol hoort.",
  keywords: ["gedrag", "rol"]
},
{
  id: "bio-h8-033",
  chapterId: "bio-h8",
  type: "begrip",
  prompt: "waarden",
  answer: "Ideeën van mensen over welk gedrag zij belangrijk vinden.",
  keywords: ["ideeën", "mensen", "gedrag"]
},
 {
  id: "bio-h9-001",
  chapterId: "bio-h9",
  type: "begrip",
  prompt: "nerf",
  answer: "Vertakking van vaatbundels in (bloem)bladeren.",
  keywords: ["vertakking", "vaatbundels", "bladeren"]
},
{
  id: "bio-h9-002",
  chapterId: "bio-h9",
  type: "begrip",
  prompt: "opperhuid (van een blad)",
  answer: "Dunne, buitenste laag aaneengesloten cellen met een waslaagje erop.",
  keywords: ["buitenste laag", "aaneengesloten cellen", "waslaagje"]
},
{
  id: "bio-h9-003",
  chapterId: "bio-h9",
  type: "begrip",
  prompt: "sluitcel",
  answer: "Cel waarmee een huidmondje kan openen en sluiten.",
  keywords: ["cel", "huidmondje", "openen en sluiten"]
},
{
  id: "bio-h9-004",
  chapterId: "bio-h9",
  type: "begrip",
  prompt: "bastvaten",
  answer: "Vervoeren water en energierijke stoffen van de bladeren naar alle delen van de plant.",
  keywords: ["water", "energierijke stoffen", "bladeren"]
},
{
  id: "bio-h9-005",
  chapterId: "bio-h9",
  type: "begrip",
  prompt: "cellulose",
  answer: "Stof die stevigheid geeft aan de celwanden van plantaardige cellen.",
  keywords: ["stevigheid", "celwanden", "plantaardige cellen"]
},
{
  id: "bio-h9-006",
  chapterId: "bio-h9",
  type: "begrip",
  prompt: "houtachtige plant",
  answer: "Plant die stevig is door houtstof.",
  keywords: ["plant", "stevig", "houtstof"]
},
{
  id: "bio-h9-007",
  chapterId: "bio-h9",
  type: "begrip",
  prompt: "houtstof",
  answer: "Stof die stevigheid geeft aan de celwanden van houtvaten en vezels.",
  keywords: ["stevigheid", "celwanden", "houtvaten"]
},
{
  id: "bio-h9-008",
  chapterId: "bio-h9",
  type: "begrip",
  prompt: "houtvaten",
  answer: "Vervoeren water en mineralen van de wortels via de stengels naar de bladeren.",
  keywords: ["water", "mineralen", "wortels"]
},
{
  id: "bio-h9-009",
  chapterId: "bio-h9",
  type: "begrip",
  prompt: "kruidachtige plant",
  answer: "Plant die stevig is door vocht in de vacuolen.",
  keywords: ["plant", "vocht", "vacuolen"]
},
{
  id: "bio-h9-010",
  chapterId: "bio-h9",
  type: "begrip",
  prompt: "vaatbundel",
  answer: "Houtvaten en bastvaten; vervoeren water en opgeloste stoffen van de wortels naar de bladeren en omgekeerd.",
  keywords: ["houtvaten", "bastvaten", "opgeloste stoffen"]
},
{
  id: "bio-h9-011",
  chapterId: "bio-h9",
  type: "begrip",
  prompt: "worteldruk",
  answer: "De wortels van een plant 'persen' het water in de houtvaten omhoog.",
  keywords: ["wortels", "water", "houtvaten"]
},
{
  id: "bio-h9-012",
  chapterId: "bio-h9",
  type: "begrip",
  prompt: "wortelhaar",
  answer: "Uitstulping van opperhuidcellen van wortels; neemt water en opgeloste mineralen op.",
  keywords: ["uitstulping", "water", "opgeloste mineralen"]
},
{
  id: "bio-h9-013",
  chapterId: "bio-h9",
  type: "begrip",
  prompt: "assimilatie",
  answer: "Samenstellen, opbouwen.",
  keywords: ["samenstellen", "opbouwen"]
},
{
  id: "bio-h9-014",
  chapterId: "bio-h9",
  type: "begrip",
  prompt: "bouwstof",
  answer: "Stof die wordt gebruikt bij de vorming van cellen en weefsels (voor opbouw en herstel).",
  keywords: ["vorming", "cellen", "weefsels"]
},
{
  id: "bio-h9-015",
  chapterId: "bio-h9",
  type: "begrip",
  prompt: "brandstof",
  answer: "Stof die wordt verbruikt bij de verbranding.",
  keywords: ["verbruikt", "verbranding"]
},
{
  id: "bio-h9-016",
  chapterId: "bio-h9",
  type: "begrip",
  prompt: "eiwit",
  answer: "Kan worden gevormd uit glucose en nitraat; komt voor in het cytoplasma van cellen.",
  keywords: ["glucose", "nitraat", "cytoplasma"]
},
{
  id: "bio-h9-017",
  chapterId: "bio-h9",
  type: "begrip",
  prompt: "koolhydraat",
  answer: "Suikers, bijvoorbeeld glucose, zetmeel en cellulose.",
  keywords: ["suikers", "glucose", "zetmeel"]
},
{
  id: "bio-h9-018",
  chapterId: "bio-h9",
  type: "begrip",
  prompt: "reservestof",
  answer: "Stof die wordt opgeslagen, bijvoorbeeld in ondergrondse plantendelen.",
  keywords: ["opgeslagen", "ondergrondse plantendelen"]
},
{
  id: "bio-h9-019",
  chapterId: "bio-h9",
  type: "begrip",
  prompt: "vet",
  answer: "Kan worden gevormd uit glucose; komt veel voor in zaden.",
  keywords: ["glucose", "zaden"]
},
{
  id: "bio-h9-020",
  chapterId: "bio-h9",
  type: "begrip",
  prompt: "zetmeel",
  answer: "Een koolhydraat dat in planten dient als reservestof.",
  keywords: ["koolhydraat", "planten", "reservestof"]
},
{
  id: "bio-h9-021",
  chapterId: "bio-h9",
  type: "begrip",
  prompt: "bloemkelk",
  answer: "Bestaat uit kelkbladeren.",
  keywords: ["kelkbladeren"]
},
{
  id: "bio-h9-022",
  chapterId: "bio-h9",
  type: "begrip",
  prompt: "bloemkroon",
  answer: "Bestaat uit kroonbladeren.",
  keywords: ["kroonbladeren"]
},
{
  id: "bio-h9-023",
  chapterId: "bio-h9",
  type: "begrip",
  prompt: "bol",
  answer: "Verdikt blad, bijvoorbeeld de rokken van een ui.",
  keywords: ["verdikt blad", "rokken", "ui"]
},
{
  id: "bio-h9-024",
  chapterId: "bio-h9",
  type: "begrip",
  prompt: "enten",
  answer: "Een deel van de ene plant (de ent) op een deel van een andere plant (de onderstam) plaatsen.",
  keywords: ["deel", "ent", "onderstam"]
},
{
  id: "bio-h9-025",
  chapterId: "bio-h9",
  type: "begrip",
  prompt: "helmdraad",
  answer: "Onderdeel van een meeldraad; draagt de helmknop.",
  keywords: ["meeldraad", "helmknop"]
},
{
  id: "bio-h9-026",
  chapterId: "bio-h9",
  type: "begrip",
  prompt: "helmknop",
  answer: "Onderdeel van een meeldraad; hierin ontstaat stuifmeel.",
  keywords: ["meeldraad", "stuifmeel"]
},
{
  id: "bio-h9-027",
  chapterId: "bio-h9",
  type: "begrip",
  prompt: "kelkbladeren",
  answer: "Vaak groengekleurde delen van een bloem; beschermen de bloem als deze nog in de knop zit.",
  keywords: ["groengekleurde delen", "beschermen", "knop"]
},
{
  id: "bio-h9-028",
  chapterId: "bio-h9",
  type: "begrip",
  prompt: "knol",
  answer: "Verdikte stengel of wortel, bijvoorbeeld aardappels.",
  keywords: ["verdikte stengel", "wortel", "aardappels"]
},
{
  id: "bio-h9-029",
  chapterId: "bio-h9",
  type: "begrip",
  prompt: "kroonbladeren",
  answer: "Vaak opvallend gekleurde delen van een bloem; lokken insecten aan.",
  keywords: ["opvallend gekleurde delen", "insecten"]
},
{
  id: "bio-h9-030",
  chapterId: "bio-h9",
  type: "begrip",
  prompt: "meeldraad",
  answer: "Mannelijk voortplantingsorgaan van planten.",
  keywords: ["mannelijk voortplantingsorgaan"]
},
{
  id: "bio-h9-031",
  chapterId: "bio-h9",
  type: "begrip",
  prompt: "stamper",
  answer: "Vrouwelijk voortplantingsorgaan van planten; bestaat uit een stempel, stijl en vruchtbeginsel.",
  keywords: ["vrouwelijk voortplantingsorgaan", "stempel", "vruchtbeginsel"]
},
{
  id: "bio-h9-032",
  chapterId: "bio-h9",
  type: "begrip",
  prompt: "stekken",
  answer: "Een stuk van een stengel of blad afsnijden om uit te laten groeien tot een nieuwe plant.",
  keywords: ["stuk", "stengel", "nieuwe plant"]
},
{
  id: "bio-h9-033",
  chapterId: "bio-h9",
  type: "begrip",
  prompt: "stempel",
  answer: "Bovenste deel van een stamper; hier komt bij de bestuiving stuifmeel terecht.",
  keywords: ["bovenste deel", "bestuiving", "stuifmeel"]
},
{
  id: "bio-h9-034",
  chapterId: "bio-h9",
  type: "begrip",
  prompt: "stijl",
  answer: "Middelste deel van een stamper; hier groeit de stuifmeelbuis doorheen naar de eicel.",
  keywords: ["middelste deel", "stuifmeelbuis", "eicel"]
},
{
  id: "bio-h9-035",
  chapterId: "bio-h9",
  type: "begrip",
  prompt: "stuifmeel",
  answer: "Bestaat uit stuifmeelkorrels.",
  keywords: ["stuifmeelkorrels"]
},
{
  id: "bio-h9-036",
  chapterId: "bio-h9",
  type: "begrip",
  prompt: "stuifmeelkorrel",
  answer: "Mannelijke geslachtscel van planten.",
  keywords: ["mannelijke geslachtscel"]
},
{
  id: "bio-h9-037",
  chapterId: "bio-h9",
  type: "begrip",
  prompt: "uitloper",
  answer: "Horizontaal groeiende stengel boven de grond waaraan op bepaalde plaatsen jonge planten ontstaan.",
  keywords: ["horizontaal groeiende stengel", "jonge planten"]
},
{
  id: "bio-h9-038",
  chapterId: "bio-h9",
  type: "begrip",
  prompt: "vruchtbeginsel",
  answer: "Onderste deel van een stamper; hierin liggen de zaadbeginsels en groeit na de bevruchting uit tot een vrucht.",
  keywords: ["onderste deel", "zaadbeginsels", "vrucht"]
},
{
  id: "bio-h9-039",
  chapterId: "bio-h9",
  type: "begrip",
  prompt: "wortelstok",
  answer: "Horizontaal groeiende stengel onder de grond waaraan op bepaalde plaatsen jonge planten ontstaan.",
  keywords: ["horizontaal groeiende stengel", "onder de grond", "jonge planten"]
},
{
  id: "bio-h9-040",
  chapterId: "bio-h9",
  type: "begrip",
  prompt: "zaadbeginsel",
  answer: "Hierin ontstaat een eicel; groeit na de bevruchting uit tot een zaad.",
  keywords: ["eicel", "bevruchting", "zaad"]
},
{
  id: "bio-h9-041",
  chapterId: "bio-h9",
  type: "begrip",
  prompt: "bestuiving",
  answer: "Overbrengen van stuifmeel van een meeldraad op de stempel van een stamper van dezelfde soort.",
  keywords: ["overbrengen", "stuifmeel", "stempel"]
},
{
  id: "bio-h9-042",
  chapterId: "bio-h9",
  type: "begrip",
  prompt: "insectenbloem",
  answer: "Bloem waarvan het stuifmeel door insecten wordt overgebracht.",
  keywords: ["bloem", "stuifmeel", "insecten"]
},
{
  id: "bio-h9-043",
  chapterId: "bio-h9",
  type: "begrip",
  prompt: "kiem",
  answer: "Hieruit kan een kiemplantje ontstaan.",
  keywords: ["kiemplantje", "ontstaan"]
},
{
  id: "bio-h9-044",
  chapterId: "bio-h9",
  type: "begrip",
  prompt: "vrucht",
  answer: "Deel van een plant waar zaden in zitten.",
  keywords: ["deel van plant", "zaden"]
},
{
  id: "bio-h9-045",
  chapterId: "bio-h9",
  type: "begrip",
  prompt: "windbloem",
  answer: "Bloem waarvan het stuifmeel door de wind wordt overgebracht.",
  keywords: ["bloem", "stuifmeel", "wind"]
},
{
  id: "bio-h9-046",
  chapterId: "bio-h9",
  type: "begrip",
  prompt: "zaad",
  answer: "Ontstaat uit het zaadbeginsel; hierin bevindt zich het kiempje.",
  keywords: ["zaadbeginsel", "kiempje"]
},
{
  id: "bio-h9-047",
  chapterId: "bio-h9",
  type: "begrip",
  prompt: "zaadverspreiding",
  answer: "Verspreiden van (vruchten met) zaden door de wind, dieren en/of mensen of de plant zelf.",
  keywords: ["verspreiden", "zaden", "wind"]
},
{
  id: "bio-h9-048",
  chapterId: "bio-h9",
  type: "begrip",
  prompt: "celstrekking",
  answer: "De cel wordt groter doordat veel water wordt opgenomen in de vacuolen.",
  keywords: ["cel", "water", "vacuolen"]
},
{
  id: "bio-h9-049",
  chapterId: "bio-h9",
  type: "begrip",
  prompt: "groeipunt",
  answer: "Worteluiteinden en toppen van planten.",
  keywords: ["worteluiteinden", "toppen"]
},
{
  id: "bio-h9-050",
  chapterId: "bio-h9",
  type: "begrip",
  prompt: "wortelrozet",
  answer: "Krans van bladeren die vlak boven de grond op hetzelfde punt aan de plant zitten.",
  keywords: ["krans van bladeren", "boven de grond"]
},
{
  id: "bio-h9-051",
  chapterId: "bio-h9",
  type: "begrip",
  prompt: "zaadhuid",
  answer: "Stevig vlies aan de buitenkant van een zaad.",
  keywords: ["stevig vlies", "buitenkant", "zaad"]
},
{
  id: "bio-h9-052",
  chapterId: "bio-h9",
  type: "begrip",
  prompt: "zaadlob",
  answer: "Deel van een zaad; bevat reservevoedsel zoals zetmeel, eiwitten en vetten.",
  keywords: ["deel van zaad", "reservevoedsel", "zetmeel"]
},
{
  id: "bio-h9-053",
  chapterId: "bio-h9",
  type: "begrip",
  prompt: "cambium",
  answer: "Dun ringvormig laagje cellen tussen bast en hout in een stam of tak waarin voortdurend celdelingen plaatsvinden.",
  keywords: ["ringvormig laagje", "cellen", "celdelingen"]
},
{
  id: "bio-h9-054",
  chapterId: "bio-h9",
  type: "begrip",
  prompt: "kernhout",
  answer: "Samengedrukte houtvaten in de oudere jaarringen; geven stevigheid aan de stam.",
  keywords: ["houtvaten", "jaarringen", "stevigheid"]
},
{
  id: "bio-h9-055",
  chapterId: "bio-h9",
  type: "begrip",
  prompt: "spinthout",
  answer: "Houtvaten in de jongste jaarringen; vervoeren water met mineralen.",
  keywords: ["houtvaten", "jaarringen", "water"]
},
{
  id: "bio-h9-056",
  chapterId: "bio-h9",
  type: "begrip",
  prompt: "commensalisme",
  answer: "Symbiotische relatie waarbij een van de soorten voordeel heeft; de andere soort heeft geen voordeel en geen nadeel.",
  keywords: ["symbiotische relatie", "voordeel", "geen nadeel"]
},
{
  id: "bio-h9-057",
  chapterId: "bio-h9",
  type: "begrip",
  prompt: "mutualisme",
  answer: "Symbiotische relatie waarbij beide soorten voordeel hebben.",
  keywords: ["symbiotische relatie", "beide soorten", "voordeel"]
},
{
  id: "bio-h9-058",
  chapterId: "bio-h9",
  type: "begrip",
  prompt: "parasitisme",
  answer: "Symbiotische relatie waarbij een van de soorten voordeel heeft; de andere soort heeft nadeel.",
  keywords: ["symbiotische relatie", "voordeel", "nadeel"]
},
{
  id: "bio-h9-059",
  chapterId: "bio-h9",
  type: "begrip",
  prompt: "symbiose",
  answer: "Langdurige samenlevingsvorm van twee verschillende soorten.",
  keywords: ["langdurige samenlevingsvorm", "twee soorten"]
},
{
  id: "bio-h9-060",
  chapterId: "bio-h9",
  type: "begrip",
  prompt: "indicator",
  answer: "Stof waarmee je een andere stof kunt aantonen.",
  keywords: ["stof", "aantonen"]
},
 {
  id: "bio-h10-001",
  chapterId: "bio-h10",
  type: "begrip",
  prompt: "centrale zenuwstelsel",
  answer: "Bestaat uit de grote hersenen, de kleine hersenen, de hersenstam en het ruggenmerg.",
  keywords: ["grote hersenen", "kleine hersenen", "ruggenmerg"]
},
{
  id: "bio-h10-002",
  chapterId: "bio-h10",
  type: "begrip",
  prompt: "impuls",
  answer: "Elektrisch signaal dat door zenuwen kan worden doorgegeven.",
  keywords: ["elektrisch signaal", "zenuwen"]
},
{
  id: "bio-h10-003",
  chapterId: "bio-h10",
  type: "begrip",
  prompt: "zenuw",
  answer: "Verbindt het centrale zenuwstelsel met alle lichaamsdelen.",
  keywords: ["centrale zenuwstelsel", "lichaamsdelen"]
},
{
  id: "bio-h10-004",
  chapterId: "bio-h10",
  type: "begrip",
  prompt: "bewegingszenuw",
  answer: "Zenuw die alleen uitlopers van bewegingszenuwcellen bevat.",
  keywords: ["zenuw", "uitlopers", "bewegingszenuwcellen"]
},
{
  id: "bio-h10-005",
  chapterId: "bio-h10",
  type: "begrip",
  prompt: "bewegingszenuwcel",
  answer: "Cel die impulsen geleidt van het centrale zenuwstelsel naar een spier of klier.",
  keywords: ["impulsen", "centrale zenuwstelsel", "spier"]
},
{
  id: "bio-h10-006",
  chapterId: "bio-h10",
  type: "begrip",
  prompt: "cellichaam",
  answer: "Deel van een zenuwcel waarin zich de kern bevindt.",
  keywords: ["zenuwcel", "kern"]
},
{
  id: "bio-h10-007",
  chapterId: "bio-h10",
  type: "begrip",
  prompt: "gemengde zenuw",
  answer: "Zenuw die uitlopers van gevoelszenuwcellen en bewegingszenuwcellen bevat.",
  keywords: ["uitlopers", "gevoelszenuwcellen", "bewegingszenuwcellen"]
},
{
  id: "bio-h10-008",
  chapterId: "bio-h10",
  type: "begrip",
  prompt: "gevoelszenuw",
  answer: "Zenuw die alleen uitlopers van gevoelszenuwcellen bevat.",
  keywords: ["zenuw", "uitlopers", "gevoelszenuwcellen"]
},
{
  id: "bio-h10-009",
  chapterId: "bio-h10",
  type: "begrip",
  prompt: "gevoelszenuwcel",
  answer: "Cel die impulsen geleidt van een zintuig naar het centrale zenuwstelsel.",
  keywords: ["impulsen", "zintuig", "centrale zenuwstelsel"]
},
{
  id: "bio-h10-010",
  chapterId: "bio-h10",
  type: "begrip",
  prompt: "schakelcel",
  answer: "Cel die impulsen geleidt binnen het centrale zenuwstelsel.",
  keywords: ["impulsen", "centrale zenuwstelsel"]
},
{
  id: "bio-h10-011",
  chapterId: "bio-h10",
  type: "begrip",
  prompt: "uitloper",
  answer: "Deel van een zenuwcel voor het doorgeven van impulsen, omgeven door een isolerend laagje.",
  keywords: ["zenuwcel", "impulsen", "isolerend laagje"]
},
{
  id: "bio-h10-012",
  chapterId: "bio-h10",
  type: "begrip",
  prompt: "zenuwcel",
  answer: "Cel die bestaat uit een cellichaam en uitlopers.",
  keywords: ["cellichaam", "uitlopers"]
},
{
  id: "bio-h10-013",
  chapterId: "bio-h10",
  type: "begrip",
  prompt: "ruggenmerg",
  answer: "Verbindt veel zenuwen met de hersenen.",
  keywords: ["zenuwen", "hersenen"]
},
{
  id: "bio-h10-014",
  chapterId: "bio-h10",
  type: "begrip",
  prompt: "wervelkanaal",
  answer: "Opening in de wervelkolom waarin het ruggenmerg ligt.",
  keywords: ["opening", "wervelkolom", "ruggenmerg"]
},
{
  id: "bio-h10-015",
  chapterId: "bio-h10",
  type: "begrip",
  prompt: "zenuwknoop",
  answer: "Verdikking met de cellichamen van de gevoelszenuwcellen.",
  keywords: ["verdikking", "cellichamen", "gevoelszenuwcellen"]
},
{
  id: "bio-h10-016",
  chapterId: "bio-h10",
  type: "begrip",
  prompt: "bewegingscentra",
  answer: "Hersencentra waarin impulsen ontstaan die bewuste bewegingen veroorzaken.",
  keywords: ["hersencentra", "impulsen", "bewuste bewegingen"]
},
{
  id: "bio-h10-017",
  chapterId: "bio-h10",
  type: "begrip",
  prompt: "bewustzijnsveranderende middelen (trippers)",
  answer: "Middelen die de waarnemingen verstoren.",
  keywords: ["middelen", "waarnemingen", "verstoren"]
},
{
  id: "bio-h10-018",
  chapterId: "bio-h10",
  type: "begrip",
  prompt: "dopamine",
  answer: "Stofje dat in de hersenen wordt gemaakt en je een goed gevoel geeft.",
  keywords: ["hersenen", "goed gevoel"]
},
{
  id: "bio-h10-019",
  chapterId: "bio-h10",
  type: "begrip",
  prompt: "drugs",
  answer: "Stoffen die de werking van het centrale zenuwstelsel beïnvloeden.",
  keywords: ["stoffen", "centrale zenuwstelsel", "beïnvloeden"]
},
{
  id: "bio-h10-020",
  chapterId: "bio-h10",
  type: "begrip",
  prompt: "geestelijke afhankelijkheid",
  answer: "Verslaving waarbij je het gevoel hebt dat je niet zonder het middel kunt.",
  keywords: ["verslaving", "gevoel", "middel"]
},
{
  id: "bio-h10-021",
  chapterId: "bio-h10",
  type: "begrip",
  prompt: "gevoelscentra",
  answer: "Hersencentra waarin impulsen worden ontvangen die afkomstig zijn van zintuigen.",
  keywords: ["hersencentra", "impulsen", "zintuigen"]
},
{
  id: "bio-h10-022",
  chapterId: "bio-h10",
  type: "begrip",
  prompt: "grote hersenen",
  answer: "Verwerken impulsen van zintuigen (bewuste waarneming) en sturen impulsen voor bewuste bewegingen.",
  keywords: ["impulsen", "zintuigen", "bewuste bewegingen"]
},
{
  id: "bio-h10-023",
  chapterId: "bio-h10",
  type: "begrip",
  prompt: "hersencentra",
  answer: "Delen van de hersenen met een bepaalde functie.",
  keywords: ["delen", "hersenen", "functie"]
},
{
  id: "bio-h10-024",
  chapterId: "bio-h10",
  type: "begrip",
  prompt: "hersenstam",
  answer: "Geleidt impulsen van o.a. het ruggenmerg naar de hersenen en omgekeerd; stuurt belangrijke levensfuncties aan.",
  keywords: ["impulsen", "ruggenmerg", "levensfuncties"]
},
{
  id: "bio-h10-025",
  chapterId: "bio-h10",
  type: "begrip",
  prompt: "kleine hersenen",
  answer: "Orgaan dat zorgt voor de coördinatie van alle bewegingen van je lichaam.",
  keywords: ["coördinatie", "bewegingen", "lichaam"]
},
{
  id: "bio-h10-026",
  chapterId: "bio-h10",
  type: "begrip",
  prompt: "lichamelijke afhankelijkheid",
  answer: "Verslaving waarbij je ontwenningsverschijnselen krijgt wanneer je stopt met het middel gebruiken.",
  keywords: ["verslaving", "ontwenningsverschijnselen", "middel"]
},
{
  id: "bio-h10-027",
  chapterId: "bio-h10",
  type: "begrip",
  prompt: "reactievermogen",
  answer: "De snelheid waarmee je op iets kunt reageren.",
  keywords: ["snelheid", "reageren"]
},
{
  id: "bio-h10-028",
  chapterId: "bio-h10",
  type: "begrip",
  prompt: "stimulerende middelen (uppers)",
  answer: "Middelen die je het gevoel van meer energie en zelfvertrouwen geven.",
  keywords: ["middelen", "energie", "zelfvertrouwen"]
},
{
  id: "bio-h10-029",
  chapterId: "bio-h10",
  type: "begrip",
  prompt: "tolerantie",
  answer: "Dat je steeds meer van een middel nodig hebt om hetzelfde effect te krijgen.",
  keywords: ["middel", "effect", "meer nodig"]
},
{
  id: "bio-h10-030",
  chapterId: "bio-h10",
  type: "begrip",
  prompt: "verdovende middelen (downers)",
  answer: "Middelen die je ontspannen, rustig en blij laten voelen.",
  keywords: ["middelen", "ontspannen", "rustig"]
},
{
  id: "bio-h10-031",
  chapterId: "bio-h10",
  type: "begrip",
  prompt: "verslaving",
  answer: "Wanneer je afhankelijk bent van een middel en niet meer zonder kunt.",
  keywords: ["afhankelijk", "middel", "niet zonder"]
},
{
  id: "bio-h10-032",
  chapterId: "bio-h10",
  type: "begrip",
  prompt: "waarnemingsvermogen",
  answer: "Vermogen om prikkels uit de omgeving (via je zintuigen) in de hersenen waar te nemen.",
  keywords: ["prikkels", "zintuigen", "hersenen"]
},
{
  id: "bio-h10-033",
  chapterId: "bio-h10",
  type: "begrip",
  prompt: "bewuste reactie",
  answer: "Reactie waarbij de impulsen altijd via de hersenen verlopen.",
  keywords: ["reactie", "impulsen", "hersenen"]
},
{
  id: "bio-h10-034",
  chapterId: "bio-h10",
  type: "begrip",
  prompt: "reflex",
  answer: "Een vaste, snelle, onbewuste reactie op een bepaalde prikkel.",
  keywords: ["vaste reactie", "snelle reactie", "prikkel"]
},
{
  id: "bio-h10-035",
  chapterId: "bio-h10",
  type: "begrip",
  prompt: "reflexboog",
  answer: "Weg die impulsen bij een reflex afleggen.",
  keywords: ["weg", "impulsen", "reflex"]
},
{
  id: "bio-h10-036",
  chapterId: "bio-h10",
  type: "begrip",
  prompt: "adrenaline",
  answer: "Hormoon dat de glucosespiegel in het bloed snel verhoogt en de hartslag en ademhaling versnelt.",
  keywords: ["hormoon", "glucosespiegel", "hartslag"]
},
{
  id: "bio-h10-037",
  chapterId: "bio-h10",
  type: "begrip",
  prompt: "alvleesklier",
  answer: "Orgaan dat verteringssappen en de hormonen insuline en glucagon produceert.",
  keywords: ["orgaan", "verteringssappen", "insuline"]
},
{
  id: "bio-h10-038",
  chapterId: "bio-h10",
  type: "begrip",
  prompt: "bijnieren",
  answer: "Hormoonklieren die het hormoon adrenaline produceren.",
  keywords: ["hormoonklieren", "adrenaline"]
},
{
  id: "bio-h10-039",
  chapterId: "bio-h10",
  type: "begrip",
  prompt: "diabetes",
  answer: "Ziekte door problemen bij de productie van en/of reactie op insuline.",
  keywords: ["ziekte", "insuline", "productie"]
},
{
  id: "bio-h10-040",
  chapterId: "bio-h10",
  type: "begrip",
  prompt: "eilandjes van Langerhans",
  answer: "Groepjes cellen in de alvleesklier die de hormonen glucagon en insuline produceren.",
  keywords: ["cellen", "alvleesklier", "insuline"]
},
{
  id: "bio-h10-041",
  chapterId: "bio-h10",
  type: "begrip",
  prompt: "glucagon",
  answer: "Hormoon dat ervoor zorgt dat de reservestof glycogeen wordt omgezet in glucose.",
  keywords: ["hormoon", "glycogeen", "glucose"]
},
{
  id: "bio-h10-042",
  chapterId: "bio-h10",
  type: "begrip",
  prompt: "glycogeen",
  answer: "Reservestof die wordt opgeslagen in de lever en spieren.",
  keywords: ["reservestof", "lever", "spieren"]
},
{
  id: "bio-h10-043",
  chapterId: "bio-h10",
  type: "begrip",
  prompt: "groeihormoon",
  answer: "Hormoon dat de groei van de botten van het skelet regelt.",
  keywords: ["hormoon", "groei", "botten"]
},
{
  id: "bio-h10-044",
  chapterId: "bio-h10",
  type: "begrip",
  prompt: "hormoonklier",
  answer: "Orgaan dat hormonen produceert.",
  keywords: ["orgaan", "hormonen", "produceert"]
},
{
  id: "bio-h10-045",
  chapterId: "bio-h10",
  type: "begrip",
  prompt: "hormoon",
  answer: "Stof die de werking van een bepaald orgaan regelt.",
  keywords: ["stof", "werking", "orgaan"]
},
{
  id: "bio-h10-046",
  chapterId: "bio-h10",
  type: "begrip",
  prompt: "hypofyse",
  answer: "Hormoonklier aan de onderzijde van de hersenen die verschillende hormonen produceert.",
  keywords: ["hormoonklier", "hersenen", "hormonen"]
},
{
  id: "bio-h10-047",
  chapterId: "bio-h10",
  type: "begrip",
  prompt: "insuline",
  answer: "Hormoon dat ervoor zorgt dat glucose wordt omgezet in de reservestof glycogeen.",
  keywords: ["hormoon", "glucose", "glycogeen"]
},
{
  id: "bio-h10-048",
  chapterId: "bio-h10",
  type: "begrip",
  prompt: "schildklier",
  answer: "Hormoonklier die in de hals vóór het strottenhoofd ligt; produceert schildklierhormoon.",
  keywords: ["hormoonklier", "hals", "schildklierhormoon"]
},
{
  id: "bio-h10-049",
  chapterId: "bio-h10",
  type: "begrip",
  prompt: "schildklierhormoon",
  answer: "Hormoon dat de stofwisseling en de groei en ontwikkeling beïnvloedt.",
  keywords: ["hormoon", "stofwisseling", "groei"]
},
{
  id: "bio-h10-050",
  chapterId: "bio-h10",
  type: "begrip",
  prompt: "diabetes type 1",
  answer: "Vorm van diabetes waarbij de cellen die insuline maken kapot zijn.",
  keywords: ["diabetes", "cellen", "insuline"]
},
{
  id: "bio-h10-051",
  chapterId: "bio-h10",
  type: "begrip",
  prompt: "diabetes type 2",
  answer: "Vorm van diabetes waarbij de alvleesklier te weinig insuline maakt en/of cellen minder gevoelig zijn voor insuline.",
  keywords: ["diabetes", "alvleesklier", "insuline"]
},
{
  id: "bio-h10-052",
  chapterId: "bio-h10",
  type: "begrip",
  prompt: "hyper",
  answer: "Een te hoog glucosegehalte in het bloed.",
  keywords: ["glucosegehalte", "bloed", "hoog"]
},
{
  id: "bio-h10-053",
  chapterId: "bio-h10",
  type: "begrip",
  prompt: "hypo",
  answer: "Een te laag glucosegehalte in het bloed.",
  keywords: ["glucosegehalte", "bloed", "laag"]
},
{
  id: "bio-h10-054",
  chapterId: "bio-h10",
  type: "begrip",
  prompt: "dementie",
  answer: "Verzameling van hersenaandoeningen waarbij de hersenen informatie niet meer goed verwerken.",
  keywords: ["hersenaandoeningen", "hersenen", "informatie"]
},
{
  id: "bio-h10-055",
  chapterId: "bio-h10",
  type: "begrip",
  prompt: "ziekte van Alzheimer",
  answer: "Hersenaandoening waarbij eiwitten zich ophopen in de hersenen waardoor zenuwcellen impulsen minder goed kunnen doorgeven en/of afsterven.",
  keywords: ["hersenaandoening", "eiwitten", "zenuwcellen"]
},
{
  id: "bio-h10-056",
  chapterId: "bio-h10",
  type: "begrip",
  prompt: "ziekte van Parkinson",
  answer: "Hersenaandoening waarbij spieren minder goed worden aangestuurd door een tekort aan dopamine.",
  keywords: ["hersenaandoening", "spieren", "dopamine"]
},
 {
  id: "bio-h11-001",
  chapterId: "bio-h11",
  type: "begrip",
  prompt: "adequate prikkel",
  answer: "Prikkel waarvoor een zintuigcel speciaal gevoelig is.",
  keywords: ["prikkel", "zintuigcel", "gevoelig"]
},
{
  id: "bio-h11-002",
  chapterId: "bio-h11",
  type: "begrip",
  prompt: "drempelwaarde",
  answer: "De zwakste prikkel die een impuls veroorzaakt.",
  keywords: ["zwakste prikkel", "impuls"]
},
{
  id: "bio-h11-003",
  chapterId: "bio-h11",
  type: "begrip",
  prompt: "gewenning",
  answer: "Wanneer een zintuigcel langere tijd dezelfde prikkels ontvangt, worden er minder impulsen afgegeven.",
  keywords: ["zintuigcel", "zelfde prikkels", "minder impulsen"]
},
{
  id: "bio-h11-004",
  chapterId: "bio-h11",
  type: "begrip",
  prompt: "motivatie",
  answer: "Met aandacht waarnemen.",
  keywords: ["aandacht", "waarnemen"]
},
{
  id: "bio-h11-005",
  chapterId: "bio-h11",
  type: "begrip",
  prompt: "drukzintuig",
  answer: "Ligt in de huid; zintuigcellen reageren op druk op de huid.",
  keywords: ["huid", "zintuigcellen", "druk"]
},
{
  id: "bio-h11-006",
  chapterId: "bio-h11",
  type: "begrip",
  prompt: "evenwichtszintuig",
  answer: "Evenwichtsorgaan ligt in het oor; reageert op zwaartekracht.",
  keywords: ["evenwichtsorgaan", "oor", "zwaartekracht"]
},
{
  id: "bio-h11-007",
  chapterId: "bio-h11",
  type: "begrip",
  prompt: "gehoorzintuig",
  answer: "Ligt in de oren; zintuigcellen reageren op geluid.",
  keywords: ["oren", "zintuigcellen", "geluid"]
},
{
  id: "bio-h11-008",
  chapterId: "bio-h11",
  type: "begrip",
  prompt: "gezichtszintuig",
  answer: "Ligt in de ogen; zintuigcellen reageren op licht.",
  keywords: ["ogen", "zintuigcellen", "licht"]
},
{
  id: "bio-h11-009",
  chapterId: "bio-h11",
  type: "begrip",
  prompt: "koudezintuig",
  answer: "Zintuigcellen liggen in de huid; reageren op temperaturen lager dan 37 °C.",
  keywords: ["zintuigcellen", "huid", "temperaturen"]
},
{
  id: "bio-h11-010",
  chapterId: "bio-h11",
  type: "begrip",
  prompt: "pijnpunt",
  answer: "Vrij uiteinde van gevoelszenuw.",
  keywords: ["uiteinde", "gevoelszenuw"]
},
{
  id: "bio-h11-011",
  chapterId: "bio-h11",
  type: "begrip",
  prompt: "reukzintuig",
  answer: "Zintuigcellen in de neus; reageren op geur.",
  keywords: ["zintuigcellen", "neus", "geur"]
},
{
  id: "bio-h11-012",
  chapterId: "bio-h11",
  type: "begrip",
  prompt: "smaakzintuig",
  answer: "Smaakknopjes op de tong; reageren op zoet, zout, zuur, bitter en umami.",
  keywords: ["smaakknopjes", "tong", "zoet"]
},
{
  id: "bio-h11-013",
  chapterId: "bio-h11",
  type: "begrip",
  prompt: "tastzintuig",
  answer: "Tastknopjes liggen in de huid; reageren op lichte aanraking van de huid.",
  keywords: ["tastknopjes", "huid", "aanraking"]
},
{
  id: "bio-h11-014",
  chapterId: "bio-h11",
  type: "begrip",
  prompt: "warmtezintuig",
  answer: "Zintuigcellen liggen in de huid; reageren op temperaturen hoger dan 35 °C.",
  keywords: ["zintuigcellen", "huid", "temperaturen"]
},
{
  id: "bio-h11-015",
  chapterId: "bio-h11",
  type: "begrip",
  prompt: "blinde vlek",
  answer: "Hier verlaat de oogzenuw het oog.",
  keywords: ["oogzenuw", "oog"]
},
{
  id: "bio-h11-016",
  chapterId: "bio-h11",
  type: "begrip",
  prompt: "gele vlek",
  answer: "Met dit deel van het netvlies zie je het scherpst.",
  keywords: ["netvlies", "scherpst"]
},
{
  id: "bio-h11-017",
  chapterId: "bio-h11",
  type: "begrip",
  prompt: "glasachtig lichaam",
  answer: "Helpt het netvlies op zijn plaats te houden.",
  keywords: ["netvlies", "plaats"]
},
{
  id: "bio-h11-018",
  chapterId: "bio-h11",
  type: "begrip",
  prompt: "harde oogvlies",
  answer: "Buitenste, beschermende laag van het oog.",
  keywords: ["buitenste laag", "beschermende laag", "oog"]
},
{
  id: "bio-h11-019",
  chapterId: "bio-h11",
  type: "begrip",
  prompt: "hoornvlies",
  answer: "Doorzichtig deel van het harde oogvlies.",
  keywords: ["doorzichtig deel", "harde oogvlies"]
},
{
  id: "bio-h11-020",
  chapterId: "bio-h11",
  type: "begrip",
  prompt: "iris (regenboogvlies)",
  answer: "Gekleurde deel van het oog.",
  keywords: ["gekleurde deel", "oog"]
},
{
  id: "bio-h11-021",
  chapterId: "bio-h11",
  type: "begrip",
  prompt: "lens",
  answer: "Buigt, samen met het hoornvlies, de lichtstralen af.",
  keywords: ["hoornvlies", "lichtstralen", "afbuigen"]
},
{
  id: "bio-h11-022",
  chapterId: "bio-h11",
  type: "begrip",
  prompt: "netvlies",
  answer: "Hierin liggen de zintuigcellen.",
  keywords: ["zintuigcellen"]
},
{
  id: "bio-h11-023",
  chapterId: "bio-h11",
  type: "begrip",
  prompt: "oogspieren",
  answer: "Hiermee beweeg je de ogen.",
  keywords: ["bewegen", "ogen"]
},
{
  id: "bio-h11-024",
  chapterId: "bio-h11",
  type: "begrip",
  prompt: "oogzenuw",
  answer: "Geleidt impulsen van de zintuigcellen in het netvlies naar de hersenen.",
  keywords: ["impulsen", "netvlies", "hersenen"]
},
{
  id: "bio-h11-025",
  chapterId: "bio-h11",
  type: "begrip",
  prompt: "pupil",
  answer: "Opening in de iris.",
  keywords: ["opening", "iris"]
},
{
  id: "bio-h11-026",
  chapterId: "bio-h11",
  type: "begrip",
  prompt: "traanbuis",
  answer: "Voert traanvocht af naar de neusholte.",
  keywords: ["traanvocht", "neusholte"]
},
{
  id: "bio-h11-027",
  chapterId: "bio-h11",
  type: "begrip",
  prompt: "traanklier",
  answer: "Maakt traanvocht.",
  keywords: ["traanvocht"]
},
{
  id: "bio-h11-028",
  chapterId: "bio-h11",
  type: "begrip",
  prompt: "vaatvlies",
  answer: "Bevat veel bloedvaten voor de aanvoer van voedingsstoffen en zuurstof.",
  keywords: ["bloedvaten", "voedingsstoffen", "zuurstof"]
},
{
  id: "bio-h11-029",
  chapterId: "bio-h11",
  type: "begrip",
  prompt: "wenkbrauwen",
  answer: "Beschermen het oog tegen zweetdruppels en ander vocht.",
  keywords: ["beschermen", "zweetdruppels", "vocht"]
},
{
  id: "bio-h11-030",
  chapterId: "bio-h11",
  type: "begrip",
  prompt: "wimpers",
  answer: "Beschermen het oog tegen vuil en fel licht.",
  keywords: ["beschermen", "vuil", "licht"]
},
{
  id: "bio-h11-031",
  chapterId: "bio-h11",
  type: "begrip",
  prompt: "accommoderen",
  answer: "Het aanpassen van de sterkte van de ooglens.",
  keywords: ["aanpassen", "sterkte", "ooglens"]
},
{
  id: "bio-h11-032",
  chapterId: "bio-h11",
  type: "begrip",
  prompt: "kringspieren",
  answer: "Lopen rondom de pupil; deze spieren maken de pupil kleiner.",
  keywords: ["rondom de pupil", "spieren", "kleiner"]
},
{
  id: "bio-h11-033",
  chapterId: "bio-h11",
  type: "begrip",
  prompt: "lengtespieren",
  answer: "Lopen van de pupil naar de buitenrand van de iris; deze spieren maken de pupil groter.",
  keywords: ["pupil", "iris", "groter"]
},
{
  id: "bio-h11-034",
  chapterId: "bio-h11",
  type: "begrip",
  prompt: "pupilreflex",
  answer: "Het automatisch samentrekken van spieren in de iris bij fel licht.",
  keywords: ["samentrekken", "spieren", "fel licht"]
},
{
  id: "bio-h11-035",
  chapterId: "bio-h11",
  type: "begrip",
  prompt: "kegeltjes",
  answer: "Zintuigcellen voor de waarneming van kleur; geven uitsluitend impulsen af als er veel licht is.",
  keywords: ["zintuigcellen", "kleur", "veel licht"]
},
{
  id: "bio-h11-036",
  chapterId: "bio-h11",
  type: "begrip",
  prompt: "staafjes",
  answer: "Zintuigcellen voor de waarneming van zwart-wit; geven ook impulsen af als er weinig licht is.",
  keywords: ["zintuigcellen", "zwart-wit", "weinig licht"]
},
{
  id: "bio-h11-037",
  chapterId: "bio-h11",
  type: "begrip",
  prompt: "aambeeld",
  answer: "Geeft geluidstrillingen door van de hamer naar de stijgbeugel.",
  keywords: ["geluidstrillingen", "hamer", "stijgbeugel"]
},
{
  id: "bio-h11-038",
  chapterId: "bio-h11",
  type: "begrip",
  prompt: "buis van Eustachius",
  answer: "Verbindt de keelholte met de ruimte achter het trommelvlies.",
  keywords: ["keelholte", "trommelvlies"]
},
{
  id: "bio-h11-039",
  chapterId: "bio-h11",
  type: "begrip",
  prompt: "evenwichtsorgaan",
  answer: "Geeft informatie door over de stand van je hoofd.",
  keywords: ["informatie", "stand", "hoofd"]
},
{
  id: "bio-h11-040",
  chapterId: "bio-h11",
  type: "begrip",
  prompt: "gehoorbeentjes",
  answer: "Geven geluidstrillingen door naar het venster.",
  keywords: ["geluidstrillingen", "venster"]
},
{
  id: "bio-h11-041",
  chapterId: "bio-h11",
  type: "begrip",
  prompt: "gehoorgang",
  answer: "Verbinding tussen de oorschelp en het trommelvlies.",
  keywords: ["verbinding", "oorschelp", "trommelvlies"]
},
{
  id: "bio-h11-042",
  chapterId: "bio-h11",
  type: "begrip",
  prompt: "gehoorzenuw",
  answer: "Geleidt impulsen naar de hersenen.",
  keywords: ["impulsen", "hersenen"]
},
{
  id: "bio-h11-043",
  chapterId: "bio-h11",
  type: "begrip",
  prompt: "hamer",
  answer: "Ontvangt de geluidstrillingen van het trommelvlies.",
  keywords: ["geluidstrillingen", "trommelvlies"]
},
{
  id: "bio-h11-044",
  chapterId: "bio-h11",
  type: "begrip",
  prompt: "oorschelp",
  answer: "Uitwendige deel van het oor; vangt geluidstrillingen op.",
  keywords: ["uitwendige deel", "oor", "geluidstrillingen"]
},
{
  id: "bio-h11-045",
  chapterId: "bio-h11",
  type: "begrip",
  prompt: "slakkenhuis",
  answer: "Bevat de zintuigcellen van het gehoorzintuig.",
  keywords: ["zintuigcellen", "gehoorzintuig"]
},
{
  id: "bio-h11-046",
  chapterId: "bio-h11",
  type: "begrip",
  prompt: "stijgbeugel",
  answer: "Geeft geluidstrillingen door aan het venster.",
  keywords: ["geluidstrillingen", "venster"]
},
{
  id: "bio-h11-047",
  chapterId: "bio-h11",
  type: "begrip",
  prompt: "trommelholte (middenoor)",
  answer: "Hierin liggen de gehoorbeentjes.",
  keywords: ["gehoorbeentjes"]
},
{
  id: "bio-h11-048",
  chapterId: "bio-h11",
  type: "begrip",
  prompt: "trommelvlies",
  answer: "Vangt geluidstrillingen op en geeft ze door aan de gehoorbeentjes.",
  keywords: ["geluidstrillingen", "gehoorbeentjes"]
},
{
  id: "bio-h11-049",
  chapterId: "bio-h11",
  type: "begrip",
  prompt: "venster",
  answer: "Vlies in het slakkenhuis.",
  keywords: ["vlies", "slakkenhuis"]
},
{
  id: "bio-h11-050",
  chapterId: "bio-h11",
  type: "begrip",
  prompt: "bijziend",
  answer: "Als je alleen dichtbij scherp kunt zien.",
  keywords: ["dichtbij", "scherp zien"]
},
{
  id: "bio-h11-051",
  chapterId: "bio-h11",
  type: "begrip",
  prompt: "cilinder",
  answer: "Aanpassing in een brillenglas; zorgt ervoor dat lichtstralen in de ene richting sterker afbuigen dan in de andere richting.",
  keywords: ["brillenglas", "lichtstralen", "afbuigen"]
},
{
  id: "bio-h11-052",
  chapterId: "bio-h11",
  type: "begrip",
  prompt: "ouderdomsverziendheid",
  answer: "Accommoderen gaat moeilijker, waardoor de ooglens niet bol genoeg wordt.",
  keywords: ["accommoderen", "ooglens", "moeilijker"]
},
{
  id: "bio-h11-053",
  chapterId: "bio-h11",
  type: "begrip",
  prompt: "verziend",
  answer: "Als je alleen veraf scherp kunt zien.",
  keywords: ["veraf", "scherp zien"]
},
 {
  id: "bio-h12-001",
  chapterId: "bio-h12",
  type: "begrip",
  prompt: "conserveermiddel",
  answer: "Stof die een voedingsmiddel langer houdbaar maakt.",
  keywords: ["stof", "voedingsmiddel", "houdbaar"]
},
{
  id: "bio-h12-002",
  chapterId: "bio-h12",
  type: "begrip",
  prompt: "conserveren",
  answer: "Voedsel langer houdbaar maken.",
  keywords: ["voedsel", "houdbaar maken"]
},
{
  id: "bio-h12-003",
  chapterId: "bio-h12",
  type: "begrip",
  prompt: "enzym",
  answer: "Eiwit dat reacties versnelt zonder zelf te worden verbruikt.",
  keywords: ["eiwit", "reacties versnelt", "niet verbruikt"]
},
{
  id: "bio-h12-004",
  chapterId: "bio-h12",
  type: "begrip",
  prompt: "enzymactiviteit",
  answer: "Snelheid waarmee een enzym een reactie versnelt.",
  keywords: ["snelheid", "enzym", "reactie"]
},
{
  id: "bio-h12-005",
  chapterId: "bio-h12",
  type: "begrip",
  prompt: "optimumkromme",
  answer: "Diagram van de enzymactiviteit met een minimum, een optimum en een maximum.",
  keywords: ["diagram", "enzymactiviteit", "optimum"]
},
{
  id: "bio-h12-006",
  chapterId: "bio-h12",
  type: "begrip",
  prompt: "optimumtemperatuur",
  answer: "Temperatuur waarbij de enzymactiviteit optimaal (het snelst) is.",
  keywords: ["temperatuur", "enzymactiviteit", "snelst"]
},
{
  id: "bio-h12-007",
  chapterId: "bio-h12",
  type: "begrip",
  prompt: "pasteuriseren",
  answer: "Een product gedurende korte tijd verhitten tot 72 °C.",
  keywords: ["product", "verhitten", "72 °C"]
},
{
  id: "bio-h12-008",
  chapterId: "bio-h12",
  type: "begrip",
  prompt: "pH",
  answer: "Zuurgraad; een lage pH betekent een hoge zuurgraad.",
  keywords: ["zuurgraad", "lage pH", "hoge zuurgraad"]
},
{
  id: "bio-h12-009",
  chapterId: "bio-h12",
  type: "begrip",
  prompt: "steriliseren",
  answer: "Een product verhitten tot 130–140 °C.",
  keywords: ["product", "verhitten", "130–140 °C"]
},
{
  id: "bio-h12-010",
  chapterId: "bio-h12",
  type: "begrip",
  prompt: "voedselinfectie",
  answer: "Besmetting door ziekmakende bacteriën of schimmels in het voedsel.",
  keywords: ["besmetting", "bacteriën", "schimmels"]
},
{
  id: "bio-h12-011",
  chapterId: "bio-h12",
  type: "begrip",
  prompt: "voedselvergiftiging",
  answer: "Vergiftiging door giftige stoffen in het voedsel die vrijkomen bij afbraak door bacteriën en schimmels.",
  keywords: ["vergiftiging", "giftige stoffen", "bacteriën"]
},
{
  id: "bio-h12-012",
  chapterId: "bio-h12",
  type: "begrip",
  prompt: "zuurgraad",
  answer: "Geeft aan of een stof zuur (pH < 7), neutraal (pH = 7) of basisch (pH > 7) is.",
  keywords: ["zuur", "neutraal", "basisch"]
},
{
  id: "bio-h12-013",
  chapterId: "bio-h12",
  type: "begrip",
  prompt: "beschermende stof",
  answer: "Stof die helpt om ziekten te voorkomen (mineralen en vitaminen).",
  keywords: ["stof", "ziekten", "mineralen"]
},
{
  id: "bio-h12-014",
  chapterId: "bio-h12",
  type: "begrip",
  prompt: "bouwstof",
  answer: "Stof die wordt gebruikt bij de vorming van cellen en weefsels.",
  keywords: ["vorming", "cellen", "weefsels"]
},
{
  id: "bio-h12-015",
  chapterId: "bio-h12",
  type: "begrip",
  prompt: "brandstof",
  answer: "Stof die wordt verbruikt bij de verbranding.",
  keywords: ["verbruikt", "verbranding"]
},
{
  id: "bio-h12-016",
  chapterId: "bio-h12",
  type: "begrip",
  prompt: "eiwitten",
  answer: "Voedingsstoffen die vooral worden gebruikt als bouwstof, soms als brandstof.",
  keywords: ["voedingsstoffen", "bouwstof", "brandstof"]
},
{
  id: "bio-h12-017",
  chapterId: "bio-h12",
  type: "begrip",
  prompt: "koolhydraten",
  answer: "Voedingsstoffen die worden gebruikt als brandstof, bouwstof en reservestof.",
  keywords: ["voedingsstoffen", "brandstof", "reservestof"]
},
{
  id: "bio-h12-018",
  chapterId: "bio-h12",
  type: "begrip",
  prompt: "mineralen",
  answer: "Voedingsstoffen die worden gebruikt als bouwstof en beschermende stof.",
  keywords: ["voedingsstoffen", "bouwstof", "beschermende stof"]
},
{
  id: "bio-h12-019",
  chapterId: "bio-h12",
  type: "begrip",
  prompt: "onverzadigd vet",
  answer: "Vet dat vooral voorkomt in plantaardige producten en vis.",
  keywords: ["vet", "plantaardige producten", "vis"]
},
{
  id: "bio-h12-020",
  chapterId: "bio-h12",
  type: "begrip",
  prompt: "reservestof",
  answer: "Stof die wordt opgeslagen voor later.",
  keywords: ["stof", "opgeslagen", "later"]
},
{
  id: "bio-h12-021",
  chapterId: "bio-h12",
  type: "begrip",
  prompt: "verzadigd vet",
  answer: "Vet dat vooral voorkomt in dierlijke producten en snacks; verhoogt risico op hart- en vaatziekten.",
  keywords: ["vet", "dierlijke producten", "hart- en vaatziekten"]
},
{
  id: "bio-h12-022",
  chapterId: "bio-h12",
  type: "begrip",
  prompt: "vetten",
  answer: "Voedingsstoffen die vooral worden gebruikt als brandstof en reservestof.",
  keywords: ["voedingsstoffen", "brandstof", "reservestof"]
},
{
  id: "bio-h12-023",
  chapterId: "bio-h12",
  type: "begrip",
  prompt: "vitaminen",
  answer: "Voedingsstoffen die dienen als beschermende stof.",
  keywords: ["voedingsstoffen", "beschermende stof"]
},
{
  id: "bio-h12-024",
  chapterId: "bio-h12",
  type: "begrip",
  prompt: "voedingsmiddel",
  answer: "Product dat je eet en/of drinkt.",
  keywords: ["product", "eet", "drinkt"]
},
{
  id: "bio-h12-025",
  chapterId: "bio-h12",
  type: "begrip",
  prompt: "voedingsstof",
  answer: "Bruikbaar bestanddeel van voedingsmiddelen.",
  keywords: ["bestanddeel", "voedingsmiddelen"]
},
{
  id: "bio-h12-026",
  chapterId: "bio-h12",
  type: "begrip",
  prompt: "voedingsvezel",
  answer: "Plantaardige stof die mensen niet kunnen verteren; bevordert de darmbewegingen.",
  keywords: ["plantaardige stof", "niet verteren", "darmbewegingen"]
},
{
  id: "bio-h12-027",
  chapterId: "bio-h12",
  type: "begrip",
  prompt: "water",
  answer: "Voedingsstof die wordt gebruikt als bouwstof.",
  keywords: ["voedingsstof", "bouwstof"]
},
{
  id: "bio-h12-028",
  chapterId: "bio-h12",
  type: "begrip",
  prompt: "energieverbruik",
  answer: "Hoeveelheid energie die wordt verbruikt voor stofwisseling en lichamelijke activiteit.",
  keywords: ["energie", "stofwisseling", "lichamelijke activiteit"]
},
{
  id: "bio-h12-029",
  chapterId: "bio-h12",
  type: "begrip",
  prompt: "grondstofwisseling",
  answer: "Energie die nodig is voor de stofwisseling van een lichaam in rust.",
  keywords: ["energie", "stofwisseling", "rust"]
},
{
  id: "bio-h12-030",
  chapterId: "bio-h12",
  type: "begrip",
  prompt: "ondergewicht",
  answer: "Wanneer een persoon minder weegt dan gezond is.",
  keywords: ["persoon", "minder weegt", "gezond"]
},
{
  id: "bio-h12-031",
  chapterId: "bio-h12",
  type: "begrip",
  prompt: "ondervoeding",
  answer: "Tekort aan bepaalde voedingsstoffen.",
  keywords: ["tekort", "voedingsstoffen"]
},
{
  id: "bio-h12-032",
  chapterId: "bio-h12",
  type: "begrip",
  prompt: "overgewicht",
  answer: "Wanneer een persoon meer weegt dan gezond is.",
  keywords: ["persoon", "meer weegt", "gezond"]
},
{
  id: "bio-h12-033",
  chapterId: "bio-h12",
  type: "begrip",
  prompt: "overvoeding",
  answer: "Meer eten dan het lichaam nodig heeft aan energie.",
  keywords: ["eten", "lichaam", "energie"]
},
{
  id: "bio-h12-034",
  chapterId: "bio-h12",
  type: "begrip",
  prompt: "Schijf van Vijf",
  answer: "Hulpmiddel om alle voedingsstoffen via voeding binnen te krijgen die per dag nodig zijn.",
  keywords: ["hulpmiddel", "voedingsstoffen", "per dag"]
},
{
  id: "bio-h12-035",
  chapterId: "bio-h12",
  type: "begrip",
  prompt: "vermageren",
  answer: "Wanneer een persoon lichaamsgewicht verliest door een tekort aan energie.",
  keywords: ["lichaamsgewicht", "verliest", "tekort"]
},
{
  id: "bio-h12-036",
  chapterId: "bio-h12",
  type: "begrip",
  prompt: "darmperistaltiek",
  answer: "Afwisselend samentrekken van kring- en lengtespieren.",
  keywords: ["samentrekken", "kringspieren", "lengtespieren"]
},
{
  id: "bio-h12-037",
  chapterId: "bio-h12",
  type: "begrip",
  prompt: "vertering",
  answer: "Het afbreken van voedingsstoffen tot verteringsproducten die door de darmwand kunnen worden opgenomen.",
  keywords: ["afbreken", "voedingsstoffen", "darmwand"]
},
{
  id: "bio-h12-038",
  chapterId: "bio-h12",
  type: "begrip",
  prompt: "verteringsklieren",
  answer: "Maken verteringssappen die vaak enzymen bevatten.",
  keywords: ["verteringssappen", "enzymen"]
},
{
  id: "bio-h12-039",
  chapterId: "bio-h12",
  type: "begrip",
  prompt: "verteringssap",
  answer: "Kan voedingsstoffen verteren.",
  keywords: ["voedingsstoffen", "verteren"]
},
{
  id: "bio-h12-040",
  chapterId: "bio-h12",
  type: "begrip",
  prompt: "alvleesklier",
  answer: "Produceert alvleessap.",
  keywords: ["produceert", "alvleessap"]
},
{
  id: "bio-h12-041",
  chapterId: "bio-h12",
  type: "begrip",
  prompt: "alvleessap",
  answer: "Verteringssap met enzymen die eiwitten, koolhydraten en vetten verteren.",
  keywords: ["verteringssap", "enzymen", "eiwitten"]
},
{
  id: "bio-h12-042",
  chapterId: "bio-h12",
  type: "begrip",
  prompt: "anus",
  answer: "Kringspier die de uitgang van de endeldarm afsluit.",
  keywords: ["kringspier", "endeldarm", "afsluit"]
},
{
  id: "bio-h12-043",
  chapterId: "bio-h12",
  type: "begrip",
  prompt: "darmsap",
  answer: "Verteringssap met enzymen die eiwitten en koolhydraten afmaken.",
  keywords: ["verteringssap", "enzymen", "eiwitten"]
},
{
  id: "bio-h12-044",
  chapterId: "bio-h12",
  type: "begrip",
  prompt: "dikke darm",
  answer: "Hier wordt een groot deel van het water aan de voedselbrij onttrokken.",
  keywords: ["water", "voedselbrij", "onttrokken"]
},
{
  id: "bio-h12-045",
  chapterId: "bio-h12",
  type: "begrip",
  prompt: "dunne darm",
  answer: "Hier worden voedingsstoffen opgenomen in het bloed.",
  keywords: ["voedingsstoffen", "bloed", "opgenomen"]
},
{
  id: "bio-h12-046",
  chapterId: "bio-h12",
  type: "begrip",
  prompt: "emulgeren",
  answer: "Grote vetdruppels verdelen in kleine vetdruppeltjes.",
  keywords: ["vetdruppels", "verdelen", "kleine vetdruppeltjes"]
},
{
  id: "bio-h12-047",
  chapterId: "bio-h12",
  type: "begrip",
  prompt: "endeldarm",
  answer: "Slaat ontlasting op totdat je aandrang krijgt om te poepen.",
  keywords: ["ontlasting", "opslaan", "aandrang"]
},
{
  id: "bio-h12-048",
  chapterId: "bio-h12",
  type: "begrip",
  prompt: "gal",
  answer: "Vloeistof die vetten emulgeert.",
  keywords: ["vloeistof", "vetten", "emulgeert"]
},
{
  id: "bio-h12-049",
  chapterId: "bio-h12",
  type: "begrip",
  prompt: "kiezen",
  answer: "Vermalen het voedsel in de mondholte.",
  keywords: ["voedsel", "mondholte", "vermalen"]
},
{
  id: "bio-h12-050",
  chapterId: "bio-h12",
  type: "begrip",
  prompt: "lever",
  answer: "Produceert gal.",
  keywords: ["produceert", "gal"]
},
{
  id: "bio-h12-051",
  chapterId: "bio-h12",
  type: "begrip",
  prompt: "maag",
  answer: "Hier wordt voedsel gekneed en gemengd met maagsap.",
  keywords: ["voedsel", "maagsap", "gemengd"]
},
{
  id: "bio-h12-052",
  chapterId: "bio-h12",
  type: "begrip",
  prompt: "maagportier",
  answer: "Kringspier die de uitgang van de maag afsluit.",
  keywords: ["kringspier", "maag", "afsluit"]
},
{
  id: "bio-h12-053",
  chapterId: "bio-h12",
  type: "begrip",
  prompt: "maagsap",
  answer: "Verteringssap met onder andere zoutzuur en een enzym dat eiwitten verteert.",
  keywords: ["verteringssap", "zoutzuur", "eiwitten"]
},
{
  id: "bio-h12-054",
  chapterId: "bio-h12",
  type: "begrip",
  prompt: "maagsapklieren",
  answer: "Produceren maagsap.",
  keywords: ["produceren", "maagsap"]
},
{
  id: "bio-h12-055",
  chapterId: "bio-h12",
  type: "begrip",
  prompt: "maagzuur",
  answer: "Zorgt voor een lage pH in de maag en doodt bacteriën.",
  keywords: ["lage pH", "maag", "bacteriën"]
},
{
  id: "bio-h12-056",
  chapterId: "bio-h12",
  type: "begrip",
  prompt: "mondholte",
  answer: "Hier wordt voedsel gekauwd en gemengd met speeksel.",
  keywords: ["voedsel", "gekauwd", "speeksel"]
},
{
  id: "bio-h12-057",
  chapterId: "bio-h12",
  type: "begrip",
  prompt: "slokdarm",
  answer: "Hier wordt voedsel voortgeduwd naar de maag.",
  keywords: ["voedsel", "maag", "voortgeduwd"]
},
{
  id: "bio-h12-058",
  chapterId: "bio-h12",
  type: "begrip",
  prompt: "speeksel",
  answer: "Verteringssap met o.a. een enzym dat zetmeel verteert.",
  keywords: ["verteringssap", "enzym", "zetmeel"]
},
{
  id: "bio-h12-059",
  chapterId: "bio-h12",
  type: "begrip",
  prompt: "speekselklieren",
  answer: "Produceren speeksel.",
  keywords: ["produceren", "speeksel"]
},
{
  id: "bio-h12-060",
  chapterId: "bio-h12",
  type: "begrip",
  prompt: "tanden",
  answer: "Delen het voedsel in kleine stukjes.",
  keywords: ["voedsel", "kleine stukjes"]
},
{
  id: "bio-h12-061",
  chapterId: "bio-h12",
  type: "begrip",
  prompt: "tong",
  answer: "Duwt gekauwd voedsel naar de keelholte.",
  keywords: ["voedsel", "keelholte", "duwt"]
},
{
  id: "bio-h12-062",
  chapterId: "bio-h12",
  type: "begrip",
  prompt: "twaalfvingerige darm",
  answer: "Hier worden gal en alvleessap afgegeven aan de voedselbrij.",
  keywords: ["gal", "alvleessap", "voedselbrij"]
},
{
  id: "bio-h12-063",
  chapterId: "bio-h12",
  type: "begrip",
  prompt: "verteringsenzymen",
  answer: "Breken voedingsstoffen af tot verteringsproducten die in het bloed kunnen worden opgenomen.",
  keywords: ["voedingsstoffen", "afbreken", "bloed"]
},
{
  id: "bio-h12-064",
  chapterId: "bio-h12",
  type: "begrip",
  prompt: "alleseter",
  answer: "Organisme dat zowel plantaardig als dierlijk voedsel eet.",
  keywords: ["organisme", "plantaardig", "dierlijk"]
},
{
  id: "bio-h12-065",
  chapterId: "bio-h12",
  type: "begrip",
  prompt: "cement",
  answer: "Dun laagje dat het tandbeen van de wortel bedekt.",
  keywords: ["laagje", "tandbeen", "wortel"]
},
{
  id: "bio-h12-066",
  chapterId: "bio-h12",
  type: "begrip",
  prompt: "fluoride",
  answer: "Stof die het glazuur sterker maakt.",
  keywords: ["stof", "glazuur", "sterker"]
},
{
  id: "bio-h12-067",
  chapterId: "bio-h12",
  type: "begrip",
  prompt: "glazuur",
  answer: "Harde stof die het tandbeen van de kroon bedekt.",
  keywords: ["harde stof", "tandbeen", "kroon"]
},
{
  id: "bio-h12-068",
  chapterId: "bio-h12",
  type: "begrip",
  prompt: "knipkiezen",
  answer: "Scherpe kiezen; knippen voedsel in stukken.",
  keywords: ["scherpe kiezen", "voedsel", "knippen"]
},
{
  id: "bio-h12-069",
  chapterId: "bio-h12",
  type: "begrip",
  prompt: "knobbelkiezen",
  answer: "Kiezen met een knobbelig oppervlak; malen voedsel fijn.",
  keywords: ["knobbelig oppervlak", "voedsel", "malen"]
},
{
  id: "bio-h12-070",
  chapterId: "bio-h12",
  type: "begrip",
  prompt: "planteneter",
  answer: "Organisme dat plantaardig voedsel eet.",
  keywords: ["organisme", "plantaardig voedsel"]
},
{
  id: "bio-h12-071",
  chapterId: "bio-h12",
  type: "begrip",
  prompt: "plooikiezen",
  answer: "Kiezen met harde richels van glazuur; malen voedsel fijn.",
  keywords: ["richels", "glazuur", "malen"]
},
{
  id: "bio-h12-072",
  chapterId: "bio-h12",
  type: "begrip",
  prompt: "tandbederf",
  answer: "Aantasting van het gebit door tandplak.",
  keywords: ["aantasting", "gebit", "tandplak"]
},
{
  id: "bio-h12-073",
  chapterId: "bio-h12",
  type: "begrip",
  prompt: "tandbeen",
  answer: "Het grootste deel waaruit tanden en kiezen bestaan.",
  keywords: ["grootste deel", "tanden", "kiezen"]
},
{
  id: "bio-h12-074",
  chapterId: "bio-h12",
  type: "begrip",
  prompt: "tanderosie",
  answer: "Aantasting van het gebit door zure voedingsstoffen.",
  keywords: ["aantasting", "gebit", "zure voedingsstoffen"]
},
{
  id: "bio-h12-075",
  chapterId: "bio-h12",
  type: "begrip",
  prompt: "tandplak",
  answer: "Dun laagje aanslag op tanden en kiezen.",
  keywords: ["laagje", "aanslag", "tanden"]
},
{
  id: "bio-h12-076",
  chapterId: "bio-h12",
  type: "begrip",
  prompt: "vleeseter",
  answer: "Organisme dat dierlijk voedsel eet.",
  keywords: ["organisme", "dierlijk voedsel"]
},
{
  id: "bio-h12-077",
  chapterId: "bio-h12",
  type: "begrip",
  prompt: "wortel",
  answer: "Hiermee zit een tand of kies bevestigd in de kaak.",
  keywords: ["tand", "kies", "kaak"]
},
 {
  id: "bio-h13-001",
  chapterId: "bio-h13",
  type: "begrip",
  prompt: "bloedplaatjes",
  answer: "Delen van cellen zonder celkern; belangrijk voor de bloedstolling.",
  keywords: ["delen van cellen", "zonder celkern", "bloedstolling"]
},
{
  id: "bio-h13-002",
  chapterId: "bio-h13",
  type: "begrip",
  prompt: "bloedplasma",
  answer: "Waterig deel van het bloed met plasma-eiwitten en andere opgeloste stoffen.",
  keywords: ["waterig deel", "plasma-eiwitten", "opgeloste stoffen"]
},
{
  id: "bio-h13-003",
  chapterId: "bio-h13",
  type: "begrip",
  prompt: "hemoglobine",
  answer: "Eiwit in rode bloedcellen dat zorgt voor de binding met zuurstof.",
  keywords: ["eiwit", "rode bloedcellen", "zuurstof"]
},
{
  id: "bio-h13-004",
  chapterId: "bio-h13",
  type: "begrip",
  prompt: "leukemie",
  answer: "Beenmergkanker.",
  keywords: ["beenmergkanker"]
},
{
  id: "bio-h13-005",
  chapterId: "bio-h13",
  type: "begrip",
  prompt: "rode bloedcellen",
  answer: "Ronde bloedcellen zonder celkern; vervoeren zuurstof.",
  keywords: ["bloedcellen", "zonder celkern", "zuurstof"]
},
{
  id: "bio-h13-006",
  chapterId: "bio-h13",
  type: "begrip",
  prompt: "witte bloedcellen",
  answer: "Onregelmatig gevormde bloedcellen met celkern; maken ziekteverwekkers onschadelijk.",
  keywords: ["bloedcellen", "celkern", "ziekteverwekkers"]
},
{
  id: "bio-h13-007",
  chapterId: "bio-h13",
  type: "begrip",
  prompt: "ader",
  answer: "Bloedvat dat bloed van de organen naar het hart vervoert.",
  keywords: ["bloedvat", "organen", "hart"]
},
{
  id: "bio-h13-008",
  chapterId: "bio-h13",
  type: "begrip",
  prompt: "aderkleppen",
  answer: "Plooien in de wand van een ader die verhinderen dat het bloed terugstroomt.",
  keywords: ["plooien", "wand", "terugstroomt"]
},
{
  id: "bio-h13-009",
  chapterId: "bio-h13",
  type: "begrip",
  prompt: "bloeddruk",
  answer: "Druk van het bloed tegen de wand van een bloedvat.",
  keywords: ["druk", "wand", "bloedvat"]
},
{
  id: "bio-h13-010",
  chapterId: "bio-h13",
  type: "begrip",
  prompt: "bloedsomloop",
  answer: "Weg die het bloed door het lichaam aflegt.",
  keywords: ["weg", "bloed", "lichaam"]
},
{
  id: "bio-h13-011",
  chapterId: "bio-h13",
  type: "begrip",
  prompt: "bloedvatenstelsel",
  answer: "Vatenstelsel dat uit hart en bloedvaten bestaat.",
  keywords: ["vatenstelsel", "hart", "bloedvaten"]
},
{
  id: "bio-h13-012",
  chapterId: "bio-h13",
  type: "begrip",
  prompt: "dubbele bloedsomloop",
  answer: "Bloedsomloop waarbij tijdens één rondgang door het lichaam het bloed twee keer door het hart stroomt.",
  keywords: ["bloedsomloop", "twee keer", "hart"]
},
{
  id: "bio-h13-013",
  chapterId: "bio-h13",
  type: "begrip",
  prompt: "grote bloedsomloop",
  answer: "Bloedsomloop tussen het hart en de rest van het lichaam.",
  keywords: ["bloedsomloop", "hart", "lichaam"]
},
{
  id: "bio-h13-014",
  chapterId: "bio-h13",
  type: "begrip",
  prompt: "haarvaten",
  answer: "Bloedvaten met een wand van één cellaag dik.",
  keywords: ["bloedvaten", "wand", "cellaag"]
},
{
  id: "bio-h13-015",
  chapterId: "bio-h13",
  type: "begrip",
  prompt: "kleine bloedsomloop",
  answer: "Bloedsomloop tussen het hart en de longen.",
  keywords: ["bloedsomloop", "hart", "longen"]
},
{
  id: "bio-h13-016",
  chapterId: "bio-h13",
  type: "begrip",
  prompt: "leverader",
  answer: "Ader waarin bloed van de lever naar het hart stroomt.",
  keywords: ["ader", "lever", "hart"]
},
{
  id: "bio-h13-017",
  chapterId: "bio-h13",
  type: "begrip",
  prompt: "leverslagader",
  answer: "Slagader waarin bloed van het hart naar de lever stroomt.",
  keywords: ["slagader", "hart", "lever"]
},
{
  id: "bio-h13-018",
  chapterId: "bio-h13",
  type: "begrip",
  prompt: "poortader",
  answer: "Ader waarin bloed van de darmen naar de lever stroomt.",
  keywords: ["ader", "darmen", "lever"]
},
{
  id: "bio-h13-019",
  chapterId: "bio-h13",
  type: "begrip",
  prompt: "slagader",
  answer: "Bloedvat dat bloed van het hart naar de organen vervoert.",
  keywords: ["bloedvat", "hart", "organen"]
},
{
  id: "bio-h13-020",
  chapterId: "bio-h13",
  type: "begrip",
  prompt: "aorta",
  answer: "Slagader waarin bloed van het hart naar alle delen van het lichaam stroomt.",
  keywords: ["slagader", "hart", "lichaam"]
},
{
  id: "bio-h13-021",
  chapterId: "bio-h13",
  type: "begrip",
  prompt: "boezems",
  answer: "Zakvormige hartdelen aan de bovenkant van het hart.",
  keywords: ["hartdelen", "bovenkant", "hart"]
},
{
  id: "bio-h13-022",
  chapterId: "bio-h13",
  type: "begrip",
  prompt: "bovenste holle ader",
  answer: "Ader waarin bloed uit hoofd en armen naar het hart stroomt.",
  keywords: ["ader", "hoofd", "armen"]
},
{
  id: "bio-h13-023",
  chapterId: "bio-h13",
  type: "begrip",
  prompt: "halvemaanvormige kleppen",
  answer: "Kleppen in de aorta en longslagader dicht bij het hart; voorkomen terugstromen van bloed.",
  keywords: ["kleppen", "aorta", "terugstromen"]
},
{
  id: "bio-h13-024",
  chapterId: "bio-h13",
  type: "begrip",
  prompt: "hartkleppen",
  answer: "Kleppen in het hart tussen de boezems en kamers; voorkomen terugstromen van bloed.",
  keywords: ["kleppen", "boezems", "kamers"]
},
{
  id: "bio-h13-025",
  chapterId: "bio-h13",
  type: "begrip",
  prompt: "kamers",
  answer: "Grootste hartdelen aan de onderkant van het hart.",
  keywords: ["hartdelen", "onderkant", "hart"]
},
{
  id: "bio-h13-026",
  chapterId: "bio-h13",
  type: "begrip",
  prompt: "kransaders",
  answer: "Aders die afvalstoffen van het hart naar de rechterboezem vervoeren.",
  keywords: ["aders", "afvalstoffen", "hart"]
},
{
  id: "bio-h13-027",
  chapterId: "bio-h13",
  type: "begrip",
  prompt: "kransslagaders",
  answer: "Aftakkingen van de aorta met voedingsstoffen en zuurstof voor het hart.",
  keywords: ["aftakkingen", "aorta", "zuurstof"]
},
{
  id: "bio-h13-028",
  chapterId: "bio-h13",
  type: "begrip",
  prompt: "linkerboezem",
  answer: "Deel van het hart waarin de longaders uitmonden.",
  keywords: ["hart", "longaders"]
},
{
  id: "bio-h13-029",
  chapterId: "bio-h13",
  type: "begrip",
  prompt: "linkerkamer",
  answer: "Deel van het hart dat bloed in de aorta pompt.",
  keywords: ["hart", "aorta", "pompt"]
},
{
  id: "bio-h13-030",
  chapterId: "bio-h13",
  type: "begrip",
  prompt: "longader",
  answer: "Ader waarin bloed van de longen naar het hart stroomt.",
  keywords: ["ader", "longen", "hart"]
},
{
  id: "bio-h13-031",
  chapterId: "bio-h13",
  type: "begrip",
  prompt: "longslagader",
  answer: "Slagader waarin bloed van het hart naar de longen stroomt.",
  keywords: ["slagader", "hart", "longen"]
},
{
  id: "bio-h13-032",
  chapterId: "bio-h13",
  type: "begrip",
  prompt: "onderste holle ader",
  answer: "Ader waarin bloed uit romp en benen naar het hart stroomt.",
  keywords: ["ader", "romp", "benen"]
},
{
  id: "bio-h13-033",
  chapterId: "bio-h13",
  type: "begrip",
  prompt: "rechterboezem",
  answer: "Deel van het hart waarin beide holle aders uitmonden.",
  keywords: ["hart", "holle aders"]
},
{
  id: "bio-h13-034",
  chapterId: "bio-h13",
  type: "begrip",
  prompt: "rechterkamer",
  answer: "Deel van het hart dat bloed in de longslagader pompt.",
  keywords: ["hart", "longslagader", "pompt"]
},
{
  id: "bio-h13-035",
  chapterId: "bio-h13",
  type: "begrip",
  prompt: "hartinfarct",
  answer: "Een deel van de hartspier krijgt geen zuurstof meer.",
  keywords: ["hartspier", "zuurstof"]
},
{
  id: "bio-h13-036",
  chapterId: "bio-h13",
  type: "begrip",
  prompt: "hartritme",
  answer: "Snelheid waarmee het hart samentrekt.",
  keywords: ["snelheid", "hart", "samentrekt"]
},
{
  id: "bio-h13-037",
  chapterId: "bio-h13",
  type: "begrip",
  prompt: "hartritmestoornis",
  answer: "Verstoring van het normale hartritme.",
  keywords: ["verstoring", "hartritme"]
},
{
  id: "bio-h13-038",
  chapterId: "bio-h13",
  type: "begrip",
  prompt: "slagaderverkalking",
  answer: "Vernauwingen van de slagaders door afzetting van cholesterol.",
  keywords: ["vernauwingen", "slagaders", "cholesterol"]
},
{
  id: "bio-h13-039",
  chapterId: "bio-h13",
  type: "begrip",
  prompt: "lymfevloeistof",
  answer: "Vloeistof in de lymfevaten; bestaat uit water met opgeloste stoffen en witte bloedcellen.",
  keywords: ["vloeistof", "lymfevaten", "witte bloedcellen"]
},
{
  id: "bio-h13-040",
  chapterId: "bio-h13",
  type: "begrip",
  prompt: "lymfeknopen",
  answer: "Zuiveren de lymfe van onder andere ziekteverwekkers.",
  keywords: ["zuiveren", "lymfe", "ziekteverwekkers"]
},
{
  id: "bio-h13-041",
  chapterId: "bio-h13",
  type: "begrip",
  prompt: "lymfevaten",
  answer: "Vaten in het lymfevatenstelsel.",
  keywords: ["vaten", "lymfevatenstelsel"]
},
{
  id: "bio-h13-042",
  chapterId: "bio-h13",
  type: "begrip",
  prompt: "lymfevatenstelsel",
  answer: "Stelsel van lymfevaten en lymfeknopen; zorgt voor afvoer van vocht en afweer.",
  keywords: ["lymfevaten", "lymfeknopen", "afvoer"]
},
{
  id: "bio-h13-043",
  chapterId: "bio-h13",
  type: "begrip",
  prompt: "weefselvloeistof",
  answer: "Vocht dat zich tussen de cellen van organen bevindt.",
  keywords: ["vocht", "cellen", "organen"]
},
{
  id: "bio-h13-044",
  chapterId: "bio-h13",
  type: "begrip",
  prompt: "actieve immunisatie",
  answer: "Immuun worden door antistoffen te maken tegen een ingespoten ziekteverwekker.",
  keywords: ["immuun", "antistoffen", "ziekteverwekker"]
},
{
  id: "bio-h13-045",
  chapterId: "bio-h13",
  type: "begrip",
  prompt: "afweer",
  answer: "Bescherming van het lichaam tegen het binnendringen en vermenigvuldigen van ziekteverwekkers.",
  keywords: ["bescherming", "lichaam", "ziekteverwekkers"]
},
{
  id: "bio-h13-046",
  chapterId: "bio-h13",
  type: "begrip",
  prompt: "allergie",
  answer: "Afweersysteem reageert heel sterk op een stof die niet in je lichaam thuishoort.",
  keywords: ["afweersysteem", "stof", "lichaam"]
},
{
  id: "bio-h13-047",
  chapterId: "bio-h13",
  type: "begrip",
  prompt: "allergische reactie",
  answer: "Reactie als je een stof waar je allergisch voor bent binnenkrijgt of inademt.",
  keywords: ["reactie", "stof", "inademt"]
},
{
  id: "bio-h13-048",
  chapterId: "bio-h13",
  type: "begrip",
  prompt: "antigeen",
  answer: "Eiwit op het oppervlak van een ziekteverwekker dat normaal niet in het lichaam voorkomt.",
  keywords: ["eiwit", "oppervlak", "ziekteverwekker"]
},
{
  id: "bio-h13-049",
  chapterId: "bio-h13",
  type: "begrip",
  prompt: "antistof",
  answer: "Stof die een specifiek lichaamsvreemd eiwit bedekt en onschadelijk maakt.",
  keywords: ["stof", "eiwit", "onschadelijk"]
},
{
  id: "bio-h13-050",
  chapterId: "bio-h13",
  type: "begrip",
  prompt: "hooikoorts",
  answer: "Allergie voor stuifmeel (pollen).",
  keywords: ["allergie", "stuifmeel"]
},
{
  id: "bio-h13-051",
  chapterId: "bio-h13",
  type: "begrip",
  prompt: "immuun",
  answer: "Niet vatbaar voor een ziekteverwekker door antistoffen.",
  keywords: ["ziekteverwekker", "antistoffen"]
},
{
  id: "bio-h13-052",
  chapterId: "bio-h13",
  type: "begrip",
  prompt: "infectie",
  answer: "Ziekteverwekkers dringen het lichaam binnen en vermenigvuldigen zich.",
  keywords: ["ziekteverwekkers", "lichaam", "vermenigvuldigen"]
},
{
  id: "bio-h13-053",
  chapterId: "bio-h13",
  type: "begrip",
  prompt: "koorts",
  answer: "Verhoogde lichaamstemperatuur die de ontwikkeling van ziekteverwekkers tegengaat.",
  keywords: ["lichaamstemperatuur", "ziekteverwekkers"]
},
{
  id: "bio-h13-054",
  chapterId: "bio-h13",
  type: "begrip",
  prompt: "kunstmatige immuniteit",
  answer: "Immuniteit door een vaccinatie.",
  keywords: ["immuniteit", "vaccinatie"]
},
{
  id: "bio-h13-055",
  chapterId: "bio-h13",
  type: "begrip",
  prompt: "lichaamsvreemde stoffen",
  answer: "Stoffen die niet in je lichaam thuishoren.",
  keywords: ["stoffen", "lichaam"]
},
{
  id: "bio-h13-056",
  chapterId: "bio-h13",
  type: "begrip",
  prompt: "natuurlijke immuniteit",
  answer: "Immuniteit voor een ziekteverwekker nadat je deze ziekte hebt gehad.",
  keywords: ["immuniteit", "ziekteverwekker", "ziekte"]
},
{
  id: "bio-h13-057",
  chapterId: "bio-h13",
  type: "begrip",
  prompt: "passieve immunisatie",
  answer: "Tijdelijk immuun worden door ingespoten antistoffen.",
  keywords: ["immuun", "antistoffen", "tijdelijk"]
},
{
  id: "bio-h13-058",
  chapterId: "bio-h13",
  type: "begrip",
  prompt: "serum",
  answer: "Bloedplasma zonder stollingseiwitten; bevat antistoffen.",
  keywords: ["bloedplasma", "antistoffen"]
},
{
  id: "bio-h13-059",
  chapterId: "bio-h13",
  type: "begrip",
  prompt: "tuberculose",
  answer: "Ziekte veroorzaakt door een bacterie.",
  keywords: ["ziekte", "bacterie"]
},
{
  id: "bio-h13-060",
  chapterId: "bio-h13",
  type: "begrip",
  prompt: "vaccinatie",
  answer: "Inenting met een verzwakte ziekteverwekker waardoor je immuun wordt.",
  keywords: ["inenting", "ziekteverwekker", "immuun"]
},
{
  id: "bio-h13-061",
  chapterId: "bio-h13",
  type: "begrip",
  prompt: "afstotingsreactie",
  answer: "Reactie waardoor het lichaam donorweefsel of een orgaan afstoot.",
  keywords: ["reactie", "donorweefsel", "orgaan"]
},
{
  id: "bio-h13-062",
  chapterId: "bio-h13",
  type: "begrip",
  prompt: "anti-A",
  answer: "Antistof tegen bloedfactor A.",
  keywords: ["antistof", "bloedfactor A"]
},
{
  id: "bio-h13-063",
  chapterId: "bio-h13",
  type: "begrip",
  prompt: "anti-B",
  answer: "Antistof tegen bloedfactor B.",
  keywords: ["antistof", "bloedfactor B"]
},
{
  id: "bio-h13-064",
  chapterId: "bio-h13",
  type: "begrip",
  prompt: "antiresus",
  answer: "Antistof tegen de resusfactor.",
  keywords: ["antistof", "resusfactor"]
},
{
  id: "bio-h13-065",
  chapterId: "bio-h13",
  type: "begrip",
  prompt: "auto-immuunziekte",
  answer: "Ziekte waarbij het afweersysteem antistoffen maakt tegen lichaamseigen eiwitten.",
  keywords: ["ziekte", "afweersysteem", "antistoffen"]
},
{
  id: "bio-h13-066",
  chapterId: "bio-h13",
  type: "begrip",
  prompt: "bloedfactor",
  answer: "Stof op het celmembraan van rode bloedcellen die bij een ander als antigeen kan werken.",
  keywords: ["stof", "celmembraan", "antigeen"]
},
{
  id: "bio-h13-067",
  chapterId: "bio-h13",
  type: "begrip",
  prompt: "bloedfactor A",
  answer: "Stof op rode bloedcellen van iemand met bloedgroep A.",
  keywords: ["stof", "rode bloedcellen", "bloedgroep A"]
},
{
  id: "bio-h13-068",
  chapterId: "bio-h13",
  type: "begrip",
  prompt: "bloedfactor B",
  answer: "Stof op rode bloedcellen van iemand met bloedgroep B.",
  keywords: ["stof", "rode bloedcellen", "bloedgroep B"]
},
{
  id: "bio-h13-069",
  chapterId: "bio-h13",
  type: "begrip",
  prompt: "bloedgroep",
  answer: "Type bloed met of zonder bepaalde bloedfactoren.",
  keywords: ["type bloed", "bloedfactoren"]
},
{
  id: "bio-h13-070",
  chapterId: "bio-h13",
  type: "begrip",
  prompt: "bloedtransfusie",
  answer: "Toediening van bloed van een donor aan iemand die veel bloed heeft verloren.",
  keywords: ["toediening", "bloed", "donor"]
},
{
  id: "bio-h13-071",
  chapterId: "bio-h13",
  type: "begrip",
  prompt: "donor",
  answer: "Iemand die een of meer weefsels of organen afstaat.",
  keywords: ["weefsels", "organen", "afstaat"]
},
{
  id: "bio-h13-072",
  chapterId: "bio-h13",
  type: "begrip",
  prompt: "resusfactor",
  answer: "Bloedfactor van iemand met resuspositief bloed.",
  keywords: ["bloedfactor", "resuspositief bloed"]
},
{
  id: "bio-h13-073",
  chapterId: "bio-h13",
  type: "begrip",
  prompt: "transplantatie",
  answer: "Vervanging van een aangetast weefsel of orgaan door een ander weefsel of orgaan.",
  keywords: ["vervanging", "weefsel", "orgaan"]
},
{
  id: "bio-h14-001",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "inwendig milieu",
  answer: "Het bloedplasma en de weefselvloeistof samen.",
  keywords: ["bloedplasma", "weefselvloeistof"]
},
{
  id: "bio-h14-002",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "uitwendig milieu",
  answer: "Omgeving buiten het bloedplasma en de weefselvloeistof.",
  keywords: ["omgeving", "bloedplasma", "weefselvloeistof"]
},
{
  id: "bio-h14-003",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "haar",
  answer: "Groeit vanuit een haarzakje in de kiemlaag van de opperhuid.",
  keywords: ["haarzakje", "kiemlaag", "opperhuid"]
},
{
  id: "bio-h14-004",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "haarspiertje",
  answer: "Spier in de lederhuid dat haar in de huid rechtop kan laten staan.",
  keywords: ["spier", "lederhuid", "rechtop"]
},
{
  id: "bio-h14-005",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "haarzakje",
  answer: "Uitstulping van de kiemlaag in de lederhuid waaruit een haar groeit.",
  keywords: ["uitstulping", "kiemlaag", "lederhuid"]
},
{
  id: "bio-h14-006",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "hoornlaag",
  answer: "Buitenste laag van de opperhuid die bestaat uit dode, verhoornde celresten.",
  keywords: ["buitenste laag", "opperhuid", "celresten"]
},
{
  id: "bio-h14-007",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "kiemlaag",
  answer: "Onderste laag van de opperhuid die bestaat uit levende, zich delende cellen.",
  keywords: ["onderste laag", "opperhuid", "cellen"]
},
{
  id: "bio-h14-008",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "lederhuid",
  answer: "Huidlaag die bloedvaten, haarspiertjes, zweetklieren, zenuwen en zintuigen bevat.",
  keywords: ["huidlaag", "bloedvaten", "zweetklieren"]
},
{
  id: "bio-h14-009",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "onderhuids bindweefsel",
  answer: "Hierin is vet opgeslagen in vetcellen; het vet werkt warmte-isolerend.",
  keywords: ["vet", "vetcellen", "warmte-isolerend"]
},
{
  id: "bio-h14-010",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "opperhuid",
  answer: "Deel van de huid dat bestaat uit de hoornlaag en kiemlaag en geen bloedvaten bevat.",
  keywords: ["hoornlaag", "kiemlaag", "geen bloedvaten"]
},
{
  id: "bio-h14-011",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "pigment",
  answer: "Donkere kleurstof die de delende cellen in de kiemlaag beschermt tegen zonlicht.",
  keywords: ["kleurstof", "kiemlaag", "zonlicht"]
},
{
  id: "bio-h14-012",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "talg",
  answer: "Vettige stof die het haar en de hoornlaag soepel houdt en aantasting van de huid tegengaat.",
  keywords: ["vettige stof", "haar", "hoornlaag"]
},
{
  id: "bio-h14-013",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "talgklier",
  answer: "Klier in de haarzakjes die talg afscheidt.",
  keywords: ["klier", "haarzakjes", "talg"]
},
{
  id: "bio-h14-014",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "zweet",
  answer: "Wordt geproduceerd door zweetklieren en kan door verdamping het lichaam afkoelen.",
  keywords: ["zweetklieren", "verdamping", "afkoelen"]
},
{
  id: "bio-h14-015",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "zweetklier",
  answer: "Klier in de lederhuid die zweet produceert.",
  keywords: ["klier", "lederhuid", "zweet"]
},
{
  id: "bio-h14-016",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "bronchiën",
  answer: "Vertakkingen van de luchtpijp.",
  keywords: ["vertakkingen", "luchtpijp"]
},
{
  id: "bio-h14-017",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "gaswisseling",
  answer: "Opname van zuurstof en afgifte van koolstofdioxide.",
  keywords: ["zuurstof", "koolstofdioxide"]
},
{
  id: "bio-h14-018",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "huig",
  answer: "Sluit de neusholte af tijdens slikken.",
  keywords: ["neusholte", "slikken"]
},
{
  id: "bio-h14-019",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "keelholte",
  answer: "Holte waarin bij inademing lucht uit de neus- of mondholte komt voordat deze naar de luchtpijp gaat.",
  keywords: ["holte", "inademing", "luchtpijp"]
},
{
  id: "bio-h14-020",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "kraakbeenringen",
  answer: "Zorgen ervoor dat de luchtpijp en bronchiën altijd openstaan.",
  keywords: ["luchtpijp", "bronchiën", "openstaan"]
},
{
  id: "bio-h14-021",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "longblaasjes",
  answer: "Deel van de longen waarin de gaswisseling plaatsvindt.",
  keywords: ["longen", "gaswisseling"]
},
{
  id: "bio-h14-022",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "longhaarvaten",
  answer: "Vormen een netwerk van kleine bloedvaatjes om de longblaasjes.",
  keywords: ["netwerk", "bloedvaatjes", "longblaasjes"]
},
{
  id: "bio-h14-023",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "luchtpijp",
  answer: "Hierdoor gaat de lucht van de keelholte naar de longen.",
  keywords: ["lucht", "keelholte", "longen"]
},
{
  id: "bio-h14-024",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "luchtpijptakjes",
  answer: "Kleinste vertakkingen van de bronchiën.",
  keywords: ["vertakkingen", "bronchiën"]
},
{
  id: "bio-h14-025",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "neusharen",
  answer: "Houden in de neusholte grote stofdeeltjes tegen.",
  keywords: ["neusholte", "stofdeeltjes"]
},
{
  id: "bio-h14-026",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "neusholte",
  answer: "Holte waarin lucht komt bij de neusademhaling.",
  keywords: ["holte", "lucht", "neusademhaling"]
},
{
  id: "bio-h14-027",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "neusslijmvlies",
  answer: "Slijmvlies dat de binnenkant van de neusholte bedekt.",
  keywords: ["slijmvlies", "neusholte"]
},
{
  id: "bio-h14-028",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "strotklepje",
  answer: "Sluit de luchtpijp af tijdens slikken.",
  keywords: ["luchtpijp", "slikken"]
},
{
  id: "bio-h14-029",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "trilharen",
  answer: "Haren op cellen in het slijmvlies van de luchtwegen die slijm naar de keelholte verplaatsen.",
  keywords: ["slijmvlies", "luchtwegen", "slijm"]
},
{
  id: "bio-h14-030",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "borstademhaling",
  answer: "Ademhaling dankzij het bewegen van de ribben en het borstbeen.",
  keywords: ["ademhaling", "ribben", "borstbeen"]
},
{
  id: "bio-h14-031",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "buikademhaling",
  answer: "Ademhaling dankzij het samentrekken van het middenrif en de buikspieren.",
  keywords: ["ademhaling", "middenrif", "buikspieren"]
},
{
  id: "bio-h14-032",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "middenrifspieren",
  answer: "Spieren die bij samentrekking omlaag bewegen waardoor je gaat inademen.",
  keywords: ["spieren", "samentrekking", "inademen"]
},
{
  id: "bio-h14-033",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "tussenribspieren",
  answer: "Spieren tussen de ribben waarmee de ribben en het borstbeen kunnen bewegen.",
  keywords: ["spieren", "ribben", "borstbeen"]
},
{
  id: "bio-h14-034",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "ventilatie",
  answer: "Verversing van lucht in de longen door ademhaling.",
  keywords: ["verversing", "lucht", "longen"]
},
{
  id: "bio-h14-035",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "astma",
  answer: "Ontsteking van de bronchiën; bij prikkeling treedt plotselinge benauwdheid op.",
  keywords: ["ontsteking", "bronchiën", "benauwdheid"]
},
{
  id: "bio-h14-036",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "chronische bronchitis",
  answer: "Blijvende ontsteking van de bronchiën waardoor ademhalen moeilijker wordt.",
  keywords: ["ontsteking", "bronchiën", "ademhalen"]
},
{
  id: "bio-h14-037",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "COPD",
  answer: "Verzamelnaam voor chronische bronchitis en longemfyseem.",
  keywords: ["chronische bronchitis", "longemfyseem"]
},
{
  id: "bio-h14-038",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "longemfyseem",
  answer: "Beschadiging van de longblaasjes waardoor minder zuurstof in het bloed wordt opgenomen.",
  keywords: ["longblaasjes", "zuurstof", "bloed"]
},
{
  id: "bio-h14-039",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "kieuw",
  answer: "Ademhalingsorgaan waarmee dieren onder water ademhalen.",
  keywords: ["ademhalingsorgaan", "onder water", "ademhalen"]
},
{
  id: "bio-h14-040",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "stigma",
  answer: "Opening waardoor lucht in een trachee komt.",
  keywords: ["opening", "lucht", "trachee"]
},
{
  id: "bio-h14-041",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "trachee",
  answer: "Luchtbuis in het lichaam van een insect.",
  keywords: ["luchtbuis", "lichaam", "insect"]
},
{
  id: "bio-h14-042",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "glycogeen",
  answer: "Stof waarin glucose in de lever wordt omgezet en opgeslagen.",
  keywords: ["glucose", "lever", "opgeslagen"]
},
{
  id: "bio-h14-043",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "hepatitis",
  answer: "Virusziekte waarbij de lever ontstoken is.",
  keywords: ["virusziekte", "lever", "ontstoken"]
},
{
  id: "bio-h14-044",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "nier",
  answer: "Orgaan dat bloed zuivert en overtollige en schadelijke stoffen uitscheidt.",
  keywords: ["orgaan", "bloed", "uitscheidt"]
},
{
  id: "bio-h14-045",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "nieraders",
  answer: "Hierdoor stroomt gezuiverd bloed weg uit de nieren.",
  keywords: ["bloed", "nieren", "weg"]
},
{
  id: "bio-h14-046",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "nierbekken",
  answer: "Deel van de nier waarin urine wordt verzameld en afgevoerd naar de urineleiders.",
  keywords: ["nier", "urine", "urineleiders"]
},
{
  id: "bio-h14-047",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "niermerg",
  answer: "Deel van de nier waarin uitscheiding plaatsvindt en urine wordt gevormd.",
  keywords: ["nier", "uitscheiding", "urine"]
},
{
  id: "bio-h14-048",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "nierschors",
  answer: "Deel van de nier waarin uitscheiding plaatsvindt en urine wordt gevormd.",
  keywords: ["nier", "uitscheiding", "urine"]
},
{
  id: "bio-h14-049",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "nierslagaders",
  answer: "Hierdoor stroomt zuurstofrijk bloed naar de nieren.",
  keywords: ["bloed", "zuurstofrijk", "nieren"]
},
{
  id: "bio-h14-050",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "ureum",
  answer: "Giftige stof die ontstaat bij de afbraak van overtollige eiwitten in de lever.",
  keywords: ["giftige stof", "eiwitten", "lever"]
},
{
  id: "bio-h14-051",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "urine",
  answer: "Overtollig water, zouten en afvalstoffen die door de nieren worden uitgescheiden.",
  keywords: ["water", "zouten", "afvalstoffen"]
},
{
  id: "bio-h14-052",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "urineblaas",
  answer: "Tijdelijke opslagplaats van urine.",
  keywords: ["opslagplaats", "urine"]
},
{
  id: "bio-h14-053",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "urinebuis",
  answer: "Hierdoor wordt urine vanuit de urineblaas buiten het lichaam gebracht.",
  keywords: ["urine", "urineblaas", "lichaam"]
},
{
  id: "bio-h14-054",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "urineleiders",
  answer: "Vervoeren urine van de nierbekkens naar de urineblaas.",
  keywords: ["urine", "nierbekkens", "urineblaas"]
},
{
  id: "bio-h14-055",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "ademcentrum",
  answer: "Deel van de hersenstam dat de ademfrequentie regelt.",
  keywords: ["hersenstam", "ademfrequentie"]
},
{
  id: "bio-h14-056",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "hyperventilatie",
  answer: "Te snel en te diep ademen.",
  keywords: ["snel", "diep", "ademen"]
},
{
  id: "bio-h14-057",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "donorregister",
  answer: "Hierin wordt bijgehouden of iemand wel of niet zijn organen wil doneren na overlijden.",
  keywords: ["bijgehouden", "organen", "overlijden"]
},
{
  id: "bio-h14-001",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "inwendig milieu",
  answer: "Het bloedplasma en de weefselvloeistof samen.",
  keywords: ["bloedplasma", "weefselvloeistof"]
},
{
  id: "bio-h14-002",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "uitwendig milieu",
  answer: "Omgeving buiten het bloedplasma en de weefselvloeistof.",
  keywords: ["omgeving", "bloedplasma", "weefselvloeistof"]
},
{
  id: "bio-h14-003",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "haar",
  answer: "Groeit vanuit een haarzakje in de kiemlaag van de opperhuid.",
  keywords: ["haarzakje", "kiemlaag", "opperhuid"]
},
{
  id: "bio-h14-004",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "haarspiertje",
  answer: "Spier in de lederhuid dat haar in de huid rechtop kan laten staan.",
  keywords: ["spier", "lederhuid", "rechtop"]
},
{
  id: "bio-h14-005",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "haarzakje",
  answer: "Uitstulping van de kiemlaag in de lederhuid waaruit een haar groeit.",
  keywords: ["uitstulping", "kiemlaag", "lederhuid"]
},
{
  id: "bio-h14-006",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "hoornlaag",
  answer: "Buitenste laag van de opperhuid die bestaat uit dode, verhoornde celresten.",
  keywords: ["buitenste laag", "opperhuid", "celresten"]
},
{
  id: "bio-h14-007",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "kiemlaag",
  answer: "Onderste laag van de opperhuid die bestaat uit levende, zich delende cellen.",
  keywords: ["onderste laag", "opperhuid", "cellen"]
},
{
  id: "bio-h14-008",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "lederhuid",
  answer: "Huidlaag die bloedvaten, haarspiertjes, zweetklieren, zenuwen en zintuigen bevat.",
  keywords: ["huidlaag", "bloedvaten", "zweetklieren"]
},
{
  id: "bio-h14-009",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "onderhuids bindweefsel",
  answer: "Hierin is vet opgeslagen in vetcellen; het vet werkt warmte-isolerend.",
  keywords: ["vet", "vetcellen", "warmte-isolerend"]
},
{
  id: "bio-h14-010",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "opperhuid",
  answer: "Deel van de huid dat bestaat uit de hoornlaag en kiemlaag en geen bloedvaten bevat.",
  keywords: ["hoornlaag", "kiemlaag", "geen bloedvaten"]
},
{
  id: "bio-h14-011",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "pigment",
  answer: "Donkere kleurstof die de delende cellen in de kiemlaag beschermt tegen zonlicht.",
  keywords: ["kleurstof", "kiemlaag", "zonlicht"]
},
{
  id: "bio-h14-012",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "talg",
  answer: "Vettige stof die het haar en de hoornlaag soepel houdt en aantasting van de huid tegengaat.",
  keywords: ["vettige stof", "haar", "hoornlaag"]
},
{
  id: "bio-h14-013",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "talgklier",
  answer: "Klier in de haarzakjes die talg afscheidt.",
  keywords: ["klier", "haarzakjes", "talg"]
},
{
  id: "bio-h14-014",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "zweet",
  answer: "Wordt geproduceerd door zweetklieren en kan door verdamping het lichaam afkoelen.",
  keywords: ["zweetklieren", "verdamping", "afkoelen"]
},
{
  id: "bio-h14-015",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "zweetklier",
  answer: "Klier in de lederhuid die zweet produceert.",
  keywords: ["klier", "lederhuid", "zweet"]
},
{
  id: "bio-h14-016",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "bronchiën",
  answer: "Vertakkingen van de luchtpijp.",
  keywords: ["vertakkingen", "luchtpijp"]
},
{
  id: "bio-h14-017",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "gaswisseling",
  answer: "Opname van zuurstof en afgifte van koolstofdioxide.",
  keywords: ["zuurstof", "koolstofdioxide"]
},
{
  id: "bio-h14-018",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "huig",
  answer: "Sluit de neusholte af tijdens slikken.",
  keywords: ["neusholte", "slikken"]
},
{
  id: "bio-h14-019",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "keelholte",
  answer: "Holte waarin bij inademing lucht uit de neus- of mondholte komt voordat deze naar de luchtpijp gaat.",
  keywords: ["holte", "inademing", "luchtpijp"]
},
{
  id: "bio-h14-020",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "kraakbeenringen",
  answer: "Zorgen ervoor dat de luchtpijp en bronchiën altijd openstaan.",
  keywords: ["luchtpijp", "bronchiën", "openstaan"]
},
{
  id: "bio-h14-021",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "longblaasjes",
  answer: "Deel van de longen waarin de gaswisseling plaatsvindt.",
  keywords: ["longen", "gaswisseling"]
},
{
  id: "bio-h14-022",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "longhaarvaten",
  answer: "Vormen een netwerk van kleine bloedvaatjes om de longblaasjes.",
  keywords: ["netwerk", "bloedvaatjes", "longblaasjes"]
},
{
  id: "bio-h14-023",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "luchtpijp",
  answer: "Hierdoor gaat de lucht van de keelholte naar de longen.",
  keywords: ["lucht", "keelholte", "longen"]
},
{
  id: "bio-h14-024",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "luchtpijptakjes",
  answer: "Kleinste vertakkingen van de bronchiën.",
  keywords: ["vertakkingen", "bronchiën"]
},
{
  id: "bio-h14-025",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "neusharen",
  answer: "Houden in de neusholte grote stofdeeltjes tegen.",
  keywords: ["neusholte", "stofdeeltjes"]
},
{
  id: "bio-h14-026",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "neusholte",
  answer: "Holte waarin lucht komt bij de neusademhaling.",
  keywords: ["holte", "lucht", "neusademhaling"]
},
{
  id: "bio-h14-027",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "neusslijmvlies",
  answer: "Slijmvlies dat de binnenkant van de neusholte bedekt.",
  keywords: ["slijmvlies", "neusholte"]
},
{
  id: "bio-h14-028",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "strotklepje",
  answer: "Sluit de luchtpijp af tijdens slikken.",
  keywords: ["luchtpijp", "slikken"]
},
{
  id: "bio-h14-029",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "trilharen",
  answer: "Haren op cellen in het slijmvlies van de luchtwegen die slijm naar de keelholte verplaatsen.",
  keywords: ["slijmvlies", "luchtwegen", "slijm"]
},
{
  id: "bio-h14-030",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "borstademhaling",
  answer: "Ademhaling dankzij het bewegen van de ribben en het borstbeen.",
  keywords: ["ademhaling", "ribben", "borstbeen"]
},
{
  id: "bio-h14-031",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "buikademhaling",
  answer: "Ademhaling dankzij het samentrekken van het middenrif en de buikspieren.",
  keywords: ["ademhaling", "middenrif", "buikspieren"]
},
{
  id: "bio-h14-032",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "middenrifspieren",
  answer: "Spieren die bij samentrekking omlaag bewegen waardoor je gaat inademen.",
  keywords: ["spieren", "samentrekking", "inademen"]
},
{
  id: "bio-h14-033",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "tussenribspieren",
  answer: "Spieren tussen de ribben waarmee de ribben en het borstbeen kunnen bewegen.",
  keywords: ["spieren", "ribben", "borstbeen"]
},
{
  id: "bio-h14-034",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "ventilatie",
  answer: "Verversing van lucht in de longen door ademhaling.",
  keywords: ["verversing", "lucht", "longen"]
},
{
  id: "bio-h14-035",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "astma",
  answer: "Ontsteking van de bronchiën; bij prikkeling treedt plotselinge benauwdheid op.",
  keywords: ["ontsteking", "bronchiën", "benauwdheid"]
},
{
  id: "bio-h14-036",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "chronische bronchitis",
  answer: "Blijvende ontsteking van de bronchiën waardoor ademhalen moeilijker wordt.",
  keywords: ["ontsteking", "bronchiën", "ademhalen"]
},
{
  id: "bio-h14-037",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "COPD",
  answer: "Verzamelnaam voor chronische bronchitis en longemfyseem.",
  keywords: ["chronische bronchitis", "longemfyseem"]
},
{
  id: "bio-h14-038",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "longemfyseem",
  answer: "Beschadiging van de longblaasjes waardoor minder zuurstof in het bloed wordt opgenomen.",
  keywords: ["longblaasjes", "zuurstof", "bloed"]
},
{
  id: "bio-h14-039",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "kieuw",
  answer: "Ademhalingsorgaan waarmee dieren onder water ademhalen.",
  keywords: ["ademhalingsorgaan", "onder water", "ademhalen"]
},
{
  id: "bio-h14-040",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "stigma",
  answer: "Opening waardoor lucht in een trachee komt.",
  keywords: ["opening", "lucht", "trachee"]
},
{
  id: "bio-h14-041",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "trachee",
  answer: "Luchtbuis in het lichaam van een insect.",
  keywords: ["luchtbuis", "lichaam", "insect"]
},
{
  id: "bio-h14-042",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "glycogeen",
  answer: "Stof waarin glucose in de lever wordt omgezet en opgeslagen.",
  keywords: ["glucose", "lever", "opgeslagen"]
},
{
  id: "bio-h14-043",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "hepatitis",
  answer: "Virusziekte waarbij de lever ontstoken is.",
  keywords: ["virusziekte", "lever", "ontstoken"]
},
{
  id: "bio-h14-044",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "nier",
  answer: "Orgaan dat bloed zuivert en overtollige en schadelijke stoffen uitscheidt.",
  keywords: ["orgaan", "bloed", "uitscheidt"]
},
{
  id: "bio-h14-045",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "nieraders",
  answer: "Hierdoor stroomt gezuiverd bloed weg uit de nieren.",
  keywords: ["bloed", "nieren", "weg"]
},
{
  id: "bio-h14-046",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "nierbekken",
  answer: "Deel van de nier waarin urine wordt verzameld en afgevoerd naar de urineleiders.",
  keywords: ["nier", "urine", "urineleiders"]
},
{
  id: "bio-h14-047",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "niermerg",
  answer: "Deel van de nier waarin uitscheiding plaatsvindt en urine wordt gevormd.",
  keywords: ["nier", "uitscheiding", "urine"]
},
{
  id: "bio-h14-048",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "nierschors",
  answer: "Deel van de nier waarin uitscheiding plaatsvindt en urine wordt gevormd.",
  keywords: ["nier", "uitscheiding", "urine"]
},
{
  id: "bio-h14-049",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "nierslagaders",
  answer: "Hierdoor stroomt zuurstofrijk bloed naar de nieren.",
  keywords: ["bloed", "zuurstofrijk", "nieren"]
},
{
  id: "bio-h14-050",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "ureum",
  answer: "Giftige stof die ontstaat bij de afbraak van overtollige eiwitten in de lever.",
  keywords: ["giftige stof", "eiwitten", "lever"]
},
{
  id: "bio-h14-051",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "urine",
  answer: "Overtollig water, zouten en afvalstoffen die door de nieren worden uitgescheiden.",
  keywords: ["water", "zouten", "afvalstoffen"]
},
{
  id: "bio-h14-052",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "urineblaas",
  answer: "Tijdelijke opslagplaats van urine.",
  keywords: ["opslagplaats", "urine"]
},
{
  id: "bio-h14-053",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "urinebuis",
  answer: "Hierdoor wordt urine vanuit de urineblaas buiten het lichaam gebracht.",
  keywords: ["urine", "urineblaas", "lichaam"]
},
{
  id: "bio-h14-054",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "urineleiders",
  answer: "Vervoeren urine van de nierbekkens naar de urineblaas.",
  keywords: ["urine", "nierbekkens", "urineblaas"]
},
{
  id: "bio-h14-055",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "ademcentrum",
  answer: "Deel van de hersenstam dat de ademfrequentie regelt.",
  keywords: ["hersenstam", "ademfrequentie"]
},
{
  id: "bio-h14-056",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "hyperventilatie",
  answer: "Te snel en te diep ademen.",
  keywords: ["snel", "diep", "ademen"]
},
{
  id: "bio-h14-057",
  chapterId: "bio-h14",
  type: "begrip",
  prompt: "donorregister",
  answer: "Hierin wordt bijgehouden of iemand wel of niet zijn organen wil doneren na overlijden.",
  keywords: ["bijgehouden", "organen", "overlijden"]
},
  ];
/* =========================
H1 ORGANEN EN CELLEN
========================= */

// {
//   id: "bio-h1-001",
//   subjectId: "biologie",
//   chapterId: "bio-h1",
//   type: "begrip",
//   prompt: "cel",
//   answer: "De kleinste bouwsteen van een organisme die zelfstandig kan functioneren.",
//   keywords: ["kleinste bouwsteen"]
// },


/* =========================
H2 VOORTPLANTING EN SEKSUALITEIT
========================= */


/* =========================
H3 ERFELIJKHEID EN EVOLUTIE
========================= */


/* =========================
H4 ORDENING
========================= */


/* =========================
H5 STEVIGHEID EN BEWEGING
========================= */


/* =========================
H6 ECOLOGIE
========================= */


/* =========================
H7 DUURZAAM LEVEN
========================= */


/* =========================
H8 GEDRAG
========================= */


/* =========================
H9 PLANTEN
========================= */


/* =========================
H10 REGELING
========================= */


/* =========================
H11 ZINTUIGEN
========================= */


/* =========================
H12 VOEDING EN VERTERING
========================= */


/* =========================
H13 TRANSPORT
========================= */


/* =========================
H14 GASWISSELING EN UITSCHEIDING
========================= */



/* =========================
COURSE
========================= */

export const biologieMavo4Course = {
  id: "biologie-mavo-4",
  subject: "biologie",
  level: "mavo",
  grade: "4",
  title: "Biologie 4 mavo",
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
