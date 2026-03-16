/*
KennisSprint dataset
© Joas de Wit
2026
*/
const subjects = [
  {
    id: "tekenen",
    title: "Tekenen"
  }
];

const chapters = [
  {
    id: "te-1",
    subjectId: "tekenen",
    title: "Beeldaspecten"
  },
  {
    id: "te-2",
    subjectId: "tekenen",
    title: "Ruimte en perspectief"
  },
  {
    id: "te-3",
    subjectId: "tekenen",
    title: "Vorm en stijl"
  },
  {
    id: "te-4",
    subjectId: "tekenen",
    title: "Materialen en technieken"
  },
  {
    id: "te-5",
    subjectId: "tekenen",
    title: "Beeldanalyse"
  },
  {
    id: "te-6",
    subjectId: "tekenen",
    title: "Media en audiovisueel"
  },
  {
    id: "te-7",
    subjectId: "tekenen",
    title: "Kunst en functie"
  }
];

const items = [
  {
    id: "te-001",
    subjectId: "tekenen",
    chapterId: "te-5",
    type: "begrip",
    prompt: "Aandachtspunt",
    answer: "Het punt waar je aandacht duidelijk naartoe wordt getrokken.",
    keywords: ["aandachtspunt", "punt", "waar"]
  },
  {
    id: "te-002",
    subjectId: "tekenen",
    chapterId: "te-3",
    type: "begrip",
    prompt: "Abstract",
    answer: "In het kunstwerk zijn geen verwijzingen naar de werkelijkheid te vinden. Je kunt niet zien wat het voorstelt.",
    keywords: ["abstract", "kunstwerk", "verwijzingen"]
  },
  {
    id: "te-003",
    subjectId: "tekenen",
    chapterId: "te-7",
    type: "begrip",
    prompt: "Accessoires",
    answer: "Modeartikelen die geen kleding zijn, maar een outfit compleet maken, zoals sieraden en tassen",
    keywords: ["accessoires", "modeartikelen", "kleding"]
  },
  {
    id: "te-004",
    subjectId: "tekenen",
    chapterId: "te-2",
    type: "begrip",
    prompt: "Achteraanzicht",
    answer: "Gezien van de achterkant.",
    keywords: ["achteraanzicht", "achterkant"]
  },
  {
    id: "te-005",
    subjectId: "tekenen",
    chapterId: "te-6",
    type: "begrip",
    prompt: "Affiche",
    answer: "Een poster met daarop een reclameboodschap of bekendmaking.",
    keywords: ["affiche", "poster", "daarop"]
  },
  {
    id: "te-006",
    subjectId: "tekenen",
    chapterId: "te-4",
    type: "begrip",
    prompt: "Afgietsel",
    answer: "Een beeld gemaakt door vloeibaar gips of brons (of een ander materiaal) in een mal te gieten en te laten uitharden.",
    keywords: ["afgietsel", "beeld", "vloeibaar"]
  },
  {
    id: "te-007",
    subjectId: "tekenen",
    chapterId: "te-5",
    type: "begrip",
    prompt: "Afsnijding",
    answer: "Delen van de voorstelling zijn niet zichtbaar omdat ze worden afgesneden door de rand van het beeldvlak.",
    keywords: ["afsnijding", "delen", "voorstelling"]
  },
  {
    id: "te-008",
    subjectId: "tekenen",
    chapterId: "te-5",
    type: "begrip",
    prompt: "Agressief",
    answer: "Als een kunstwerk een gevoel van woede oproept. In de schilderkunst vaak met donkere kleuren en grove streken.",
    keywords: ["agressief", "kunstwerk", "gevoel"]
  },
  {
    id: "te-009",
    subjectId: "tekenen",
    chapterId: "te-4",
    type: "begrip",
    prompt: "Ambachtelijk",
    answer: "Op een traditionele manier gemaakt, bijvoorbeeld met traditionele technieken of 'volledig met de hand.",
    keywords: ["ambachtelijk", "traditionele", "manier"]
  },
  {
    id: "te-010",
    subjectId: "tekenen",
    chapterId: "te-5",
    type: "begrip",
    prompt: "Angstig",
    answer: "Als een kunstwerk een sfeer van bedreiging of angst verbeeldt.",
    keywords: ["angstig", "kunstwerk", "sfeer"]
  },
  {
    id: "te-011",
    subjectId: "tekenen",
    chapterId: "te-6",
    type: "begrip",
    prompt: "Animatie",
    answer: "Film die is gemaakt door bijvoorbeeld tekeningen of foto's van (klei) poppetjes snel achter elkaar te laten zien.",
    keywords: ["animatie", "film", "tekeningen"]
  },
  {
    id: "te-012",
    subjectId: "tekenen",
    chapterId: "te-7",
    type: "begrip",
    prompt: "Archeologie",
    answer: "Het opgraven en onderzoeken van oude voorwerpen, gebouwen of resten van oude culturen.",
    keywords: ["archeologie", "opgraven", "onderzoeken"]
  },
  {
    id: "te-013",
    subjectId: "tekenen",
    chapterId: "te-7",
    type: "begrip",
    prompt: "Archief",
    answer: "Een plek waar belangrijke documenten of voorwerpen worden bewaard.",
    keywords: ["archief", "plek", "waar"]
  },
  {
    id: "te-014",
    subjectId: "tekenen",
    chapterId: "te-7",
    type: "begrip",
    prompt: "Architectuur",
    answer: "Het ontwerpen van gebouwen, steden, parken en tuinen.",
    keywords: ["architectuur", "ontwerpen", "gebouwen"]
  },
  {
    id: "te-015",
    subjectId: "tekenen",
    chapterId: "te-3",
    type: "begrip",
    prompt: "Assemblage",
    answer: "Een ruimtelijk werk dat bestaat uit bestaande voorwerpen die door de kunstenaar aan elkaar zijn bevestigd.",
    keywords: ["assemblage", "ruimtelijk", "werk"]
  },
  {
    id: "te-016",
    subjectId: "tekenen",
    chapterId: "te-4",
    type: "begrip",
    prompt: "Assembleren",
    answer: "Een techniek waarbij meerdere vormen of voorwerpen van verschillende materialen aan elkaar worden bevestigd om een nieuwe vorm te creëren.",
    keywords: ["assembleren", "techniek", "waarbij"]
  },
  {
    id: "te-017",
    subjectId: "tekenen",
    chapterId: "te-1",
    type: "begrip",
    prompt: "Asymmetrische compositie",
    answer: "Compositie waarbij aan één kant van het kunstwerk duidelijk meer is afgebeeld dan aan de andere kant.",
    keywords: ["asymmetrische compositie", "compositie", "waarbij"]
  },
  {
    id: "te-018",
    subjectId: "tekenen",
    chapterId: "te-4",
    type: "begrip",
    prompt: "Atelier",
    answer: "De werkplek van een kunstenaar.",
    keywords: ["atelier", "werkplek", "kunstenaar"]
  },
  {
    id: "te-019",
    subjectId: "tekenen",
    chapterId: "te-2",
    type: "begrip",
    prompt: "Atmosferisch perspectief",
    answer: "Wat verder weg is, wordt vager afgebeeld.",
    keywords: ["atmosferisch perspectief", "verder", "vager"]
  },
  {
    id: "te-020",
    subjectId: "tekenen",
    chapterId: "te-5",
    type: "begrip",
    prompt: "Attribuut",
    answer: "Een voorwerp dat duidelijk maakt welk persoon of figuur is afgebeeld.",
    keywords: ["attribuut", "voorwerp", "duidelijk"]
  },
  {
    id: "te-021",
    subjectId: "tekenen",
    chapterId: "te-7",
    type: "begrip",
    prompt: "Autonome kunst",
    answer: "Kunst die alleen bedoeld is als kunst en geen gebruiksfunctie heeft.",
    keywords: ["autonome kunst", "kunst", "gebruiksfunctie"]
  },
  {
    id: "te-022",
    subjectId: "tekenen",
    chapterId: "te-7",
    type: "begrip",
    prompt: "Avant-garde",
    answer: "De voorhoede van een kunststroming: de kunstenaars die als eersten iets totaal nieuws proberen.",
    keywords: ["avant-garde", "voorhoede", "kunststroming"]
  },
  {
    id: "te-023",
    subjectId: "tekenen",
    chapterId: "te-4",
    type: "begrip",
    prompt: "Bedrukken",
    answer: "Met verf of inkt een afbeelding aan brengen op textiel of papier, door te stempelen, sjabloneren of zeefdrukken.",
    keywords: ["bedrukken", "verf", "inkt"]
  },
  {
    id: "te-024",
    subjectId: "tekenen",
    chapterId: "te-4",
    type: "begrip",
    prompt: "Beeldhouwen",
    answer: "Een vorm creëren door in een hard materiaal (zoals hout of steen) te zagen, hakken, beitelen of gutsen.",
    keywords: ["beeldhouwen", "vorm", "creëren"]
  },
  {
    id: "te-025",
    subjectId: "tekenen",
    chapterId: "te-3",
    type: "begrip",
    prompt: "Beeldhouwwerk",
    answer: "Ruimtelijk werk, gemaakt door het toevoegen van materiaal (zoals boetseren met klei), het wegnemen van materiaal (zoals hakken in marmer) of door het gieten van vloeibaar materiaal in een mal.",
    keywords: ["beeldhouwwerk", "ruimtelijk", "werk"]
  },
  {
    id: "te-026",
    subjectId: "tekenen",
    chapterId: "te-5",
    type: "begrip",
    prompt: "Beeldmateriaal",
    answer: "Afbeeldingen die een kunstenaar verzamelt om ideeën te krijgen voor een kunstwerk.",
    keywords: ["beeldmateriaal", "afbeeldingen", "kunstenaar"]
  },
  {
    id: "te-027",
    subjectId: "tekenen",
    chapterId: "te-7",
    type: "begrip",
    prompt: "Beeldtaal",
    answer: "Communicatie door beeld, passend bij een bepaalde tijd of cultuur.",
    keywords: ["beeldtaal", "communicatie", "beeld"]
  },
  {
    id: "te-028",
    subjectId: "tekenen",
    chapterId: "te-7",
    type: "begrip",
    prompt: "Behoudend",
    answer: "Geneigd alles bij het oude te houden en geen verandering toe te laten.",
    keywords: ["behoudend", "geneigd", "alles"]
  },
  {
    id: "te-029",
    subjectId: "tekenen",
    chapterId: "te-4",
    type: "begrip",
    prompt: "Beton",
    answer: "Bouwmateriaal dat in vloeibare vorm wordt gegoten en verhardt tot een steenachtig materiaal.",
    keywords: ["beton", "bouwmateriaal", "vloeibare"]
  },
  {
    id: "te-030",
    subjectId: "tekenen",
    chapterId: "te-5",
    type: "begrip",
    prompt: "Beweeglijk",
    answer: "Als een kunstwerk kenmerken heeft die doen denken aan beweging. Het tegenovergestelde van statisch.",
    keywords: ["beweeglijk", "kunstwerk", "kenmerken"]
  },
  {
    id: "te-031",
    subjectId: "tekenen",
    chapterId: "te-5",
    type: "begrip",
    prompt: "Bewegend",
    answer: "Een kunstwerk dat zelf beweegt of dat beweging laat zien.",
    keywords: ["bewegend", "kunstwerk", "zelf"]
  },
  {
    id: "te-032",
    subjectId: "tekenen",
    chapterId: "te-5",
    type: "begrip",
    prompt: "Blikrichting",
    answer: "De richting waarin de afgebeelde persoon of figuur kijkt.",
    keywords: ["blikrichting", "richting", "afgebeelde"]
  },
  {
    id: "te-033",
    subjectId: "tekenen",
    chapterId: "te-4",
    type: "begrip",
    prompt: "Boetseren",
    answer: "Een vorm creëren met zacht materiaal (zoals klei of was).",
    keywords: ["boetseren", "vorm", "creëren"]
  },
  {
    id: "te-034",
    subjectId: "tekenen",
    chapterId: "te-4",
    type: "begrip",
    prompt: "Bouwen",
    answer: "Het opstapelen van bouwmaterialen (zoals bakstenen of 'houten onderdelen) om een nieuwe vorm te creëren.",
    keywords: ["bouwen", "opstapelen", "bouwmaterialen"]
  },
  {
    id: "te-035",
    subjectId: "tekenen",
    chapterId: "te-3",
    type: "begrip",
    prompt: "Buste",
    answer: "Een beeld van een hoofd, hals en schouders.",
    keywords: ["buste", "beeld", "hoofd"]
  },
  {
    id: "te-036",
    subjectId: "tekenen",
    chapterId: "te-1",
    type: "begrip",
    prompt: "Centrale compositie",
    answer: "Compositie waarbij de nadruk op het midden van het vlak of beeld ligt.",
    keywords: ["centrale compositie", "compositie", "waarbij"]
  },
  {
    id: "te-037",
    subjectId: "tekenen",
    chapterId: "te-5",
    type: "begrip",
    prompt: "Chaotisch",
    answer: "Als een kunstwerk een ongeordende, onoverzichtelijke of verwarrende indruk maakt.",
    keywords: ["chaotisch", "kunstwerk", "ongeordende"]
  },
  {
    id: "te-038",
    subjectId: "tekenen",
    chapterId: "te-5",
    type: "begrip",
    prompt: "Chique",
    answer: "Als een kunstwerk een deftige en luxe indruk maakt.",
    keywords: ["chique", "kunstwerk", "deftige"]
  },
  {
    id: "te-039",
    subjectId: "tekenen",
    chapterId: "te-1",
    type: "begrip",
    prompt: "Cirkelcompositie",
    answer: "Compositie waarbij voorwerpen, patronen of figuren in een cirkel zijn opgesteld.",
    keywords: ["cirkelcompositie", "compositie", "waarbij"]
  },
  {
    id: "te-040",
    subjectId: "tekenen",
    chapterId: "te-1",
    type: "begrip",
    prompt: "Clair-obscur",
    answer: "Een lichteffect met een groot contrast tussen uitgelichte onderdelen en donkere schaduwplekken.",
    keywords: ["clair-obscur", "lichteffect", "groot"]
  },
  {
    id: "te-041",
    subjectId: "tekenen",
    chapterId: "te-6",
    type: "begrip",
    prompt: "Close-up",
    answer: "Filmopname of foto van heel dichtbij.",
    keywords: ["close-up", "filmopname", "foto"]
  },
  {
    id: "te-042",
    subjectId: "tekenen",
    chapterId: "te-4",
    type: "begrip",
    prompt: "Collage",
    answer: "Een kunstwerk dat is samengesteld uit geknipte of gescheurde afbeeldingen, tekeningen of foto's.",
    keywords: ["collage", "kunstwerk", "samengesteld"]
  },
  {
    id: "te-043",
    subjectId: "tekenen",
    chapterId: "te-6",
    type: "begrip",
    prompt: "Commercial",
    answer: "Een reclamefilmpje.",
    keywords: ["commercial", "reclamefilmpje"]
  },
  {
    id: "te-044",
    subjectId: "tekenen",
    chapterId: "te-1",
    type: "begrip",
    prompt: "Complementair contrast",
    answer: "Kleurcontrast waarbij twee kleuren die tegenover elkaar staan in de kleurencirkel naast elkaar worden geplaatst, zoals blauw en oranje.",
    keywords: ["complementair contrast", "kleurcontrast", "waarbij"]
  },
  {
    id: "te-045",
    subjectId: "tekenen",
    chapterId: "te-1",
    type: "begrip",
    prompt: "Compositieschets",
    answer: "Schets waarin een compositie wordt uitgeprobeerd.",
    keywords: ["compositieschets", "schets", "compositie"]
  },
  {
    id: "te-046",
    subjectId: "tekenen",
    chapterId: "te-6",
    type: "begrip",
    prompt: "Computer",
    answer: "Apparaat waarmee je audiovisuele kunst of mediakunst kunt maken.",
    keywords: ["computer", "apparaat", "audiovisuele"]
  },
  {
    id: "te-047",
    subjectId: "tekenen",
    chapterId: "te-6",
    type: "begrip",
    prompt: "Computeranimatie",
    answer: "Een met de computer gemaakte (teken)film.",
    keywords: ["computeranimatie", "computer", "gemaakte"]
  },
  {
    id: "te-048",
    subjectId: "tekenen",
    chapterId: "te-7",
    type: "begrip",
    prompt: "Conserveren",
    answer: "Het bewaren van objecten met het doel dat ze zo lang mogelijk in goede conditie blijven.",
    keywords: ["conserveren", "bewaren", "objecten"]
  },
  {
    id: "te-049",
    subjectId: "tekenen",
    chapterId: "te-4",
    type: "begrip",
    prompt: "Construeren",
    answer: "Het in elkaar zetten van een ruimtelijk werk, waarbij de onderdelen door middel van bijvoorbeeld lijmen, spijkeren, nieten, schroeven of solderen aan elkaar worden bevestigd.",
    keywords: ["construeren", "elkaar", "zetten"]
  },
  {
    id: "te-050",
    subjectId: "tekenen",
    chapterId: "te-1",
    type: "begrip",
    prompt: "Contour",
    answer: "Omtreklijn.",
    keywords: ["contour", "omtreklijn"]
  },
  {
    id: "te-051",
    subjectId: "tekenen",
    chapterId: "te-2",
    type: "begrip",
    prompt: "Coulissewerking",
    answer: "Aan beide zijkanten van de voorstelling zijn objecten geplaatst; het lijkt alsof je door een opening, zoals een deur of raam, naar binnen kijkt.",
    keywords: ["coulissewerking", "beide", "zijkanten"]
  },
  {
    id: "te-052",
    subjectId: "tekenen",
    chapterId: "te-6",
    type: "begrip",
    prompt: "Decor",
    answer: "De inrichting van de omgeving die wordt gebruikt in een film, op tv of in het theater.",
    keywords: ["decor", "inrichting", "omgeving"]
  },
  {
    id: "te-053",
    subjectId: "tekenen",
    chapterId: "te-7",
    type: "begrip",
    prompt: "Decoratie",
    answer: "Versiering.",
    keywords: ["decoratie", "versiering"]
  },
  {
    id: "te-054",
    subjectId: "tekenen",
    chapterId: "te-7",
    type: "begrip",
    prompt: "Decoratieve functie",
    answer: "Als kunst als doel heeft om mooi te zijn.",
    keywords: ["decoratieve functie", "kunst", "doel"]
  },
  {
    id: "te-055",
    subjectId: "tekenen",
    chapterId: "te-7",
    type: "begrip",
    prompt: "Depot",
    answer: "Een plek waar kunst wordt opgeslagen ter bewaring.",
    keywords: ["depot", "plek", "waar"]
  },
  {
    id: "te-056",
    subjectId: "tekenen",
    chapterId: "te-7",
    type: "begrip",
    prompt: "Design",
    answer: "Luxe en mooi vormgegeven voorwerpen.",
    keywords: ["design", "luxe", "mooi"]
  },
  {
    id: "te-057",
    subjectId: "tekenen",
    chapterId: "te-1",
    type: "begrip",
    prompt: "Diagonale compositie",
    answer: "Compositie waarbij je schuin over het vlak of beeld een denkbeeldige lijn kunt trekken.",
    keywords: ["diagonale compositie", "compositie", "waarbij"]
  },
  {
    id: "te-058",
    subjectId: "tekenen",
    chapterId: "te-2",
    type: "begrip",
    prompt: "Diepte",
    answer: "Lengte in een bepaalde richting.",
    keywords: ["diepte", "lengte", "bepaalde"]
  },
  {
    id: "te-059",
    subjectId: "tekenen",
    chapterId: "te-6",
    type: "begrip",
    prompt: "Digitaal geluid",
    answer: "Geluid dat na opnames gemixt en bewerkt wordt op een computer.",
    keywords: ["digitaal geluid", "geluid", "opnames"]
  },
  {
    id: "te-060",
    subjectId: "tekenen",
    chapterId: "te-6",
    type: "begrip",
    prompt: "Digitaal presenteren",
    answer: "Presenteren op een beeldscherm of projectiescherm, eventueel met geluid via speakers.",
    keywords: ["digitaal presenteren", "presenteren", "beeldscherm"]
  },
  {
    id: "te-061",
    subjectId: "tekenen",
    chapterId: "te-6",
    type: "begrip",
    prompt: "Digitaliseren",
    answer: "Techniek waarbij je (bewegende) beelden, teksten en geluiden omzet naar digitale bestanden, die je kunt opslaan op een computer of een chip.",
    keywords: ["digitaliseren", "techniek", "waarbij"]
  },
  {
    id: "te-062",
    subjectId: "tekenen",
    chapterId: "te-6",
    type: "begrip",
    prompt: "Documentaire",
    answer: "Een informatieve film waarin niet wordt geacteerd.",
    keywords: ["documentaire", "informatieve", "film"]
  },
  {
    id: "te-063",
    subjectId: "tekenen",
    chapterId: "te-6",
    type: "begrip",
    prompt: "Documenteren",
    answer: "Het maken van foto's, video's en aantekeningen tijdens een beeldend onderzoek",
    keywords: ["documenteren", "maken", "fotos"]
  },
  {
    id: "te-064",
    subjectId: "tekenen",
    chapterId: "te-4",
    type: "begrip",
    prompt: "Doek",
    answer: "Ondergrond voor een schilderij van linnen of katoen.",
    keywords: ["doek", "ondergrond", "schilderij"]
  },
  {
    id: "te-065",
    subjectId: "tekenen",
    chapterId: "te-6",
    type: "begrip",
    prompt: "Draaiboek",
    answer: "Een overzicht van de taken, technische aanwijzingen en acties die nodig zijn om een filmopname of theatervoorstelling te kunnen uitvoeren.",
    keywords: ["draaiboek", "overzicht", "taken"]
  },
  {
    id: "te-066",
    subjectId: "tekenen",
    chapterId: "te-6",
    type: "begrip",
    prompt: "Dramaserie",
    answer: "Opeenvolgende afleveringen van een film die samen een verhaal vormen.",
    keywords: ["dramaserie", "opeenvolgende", "afleveringen"]
  },
  {
    id: "te-067",
    subjectId: "tekenen",
    chapterId: "te-5",
    type: "begrip",
    prompt: "Dramatisch",
    answer: "Als een kunstwerk aangrijpend en soms ook overdreven is.",
    keywords: ["dramatisch", "kunstwerk", "aangrijpend"]
  },
  {
    id: "te-068",
    subjectId: "tekenen",
    chapterId: "te-3",
    type: "begrip",
    prompt: "Driedimensionaal",
    answer: "Ruimtelijk, met een hoogte, breedte en diepte.",
    keywords: ["driedimensionaal", "ruimtelijk", "hoogte"]
  },
  {
    id: "te-069",
    subjectId: "tekenen",
    chapterId: "te-1",
    type: "begrip",
    prompt: "Driehoeks compositie",
    answer: "Compositie waarbij je de vorm van een driehoek kunt zien in de manier waarop de voorwerpen of personen verspreid zijn over het vlak of in de ruimte.",
    keywords: ["driehoeks compositie", "compositie", "waarbij"]
  },
  {
    id: "te-070",
    subjectId: "tekenen",
    chapterId: "te-4",
    type: "begrip",
    prompt: "Druk",
    answer: "Een kunstwerk dat met een druktechniek is gemaakt.",
    keywords: ["druk", "kunstwerk", "druktechniek"]
  },
  {
    id: "te-071",
    subjectId: "tekenen",
    chapterId: "te-5",
    type: "begrip",
    prompt: "Dynamisch",
    answer: "Als een kunstwerk kenmerken heeft die aan beweging doen denken.",
    keywords: ["dynamisch", "kunstwerk", "kenmerken"]
  },
  {
    id: "te-072",
    subjectId: "tekenen",
    chapterId: "te-7",
    type: "begrip",
    prompt: "Educatieve functie",
    answer: "Als kunst als doel heeft om leerzaam te zijn.",
    keywords: ["educatieve functie", "kunst", "doel"]
  },
  {
    id: "te-073",
    subjectId: "tekenen",
    chapterId: "te-5",
    type: "begrip",
    prompt: "Eentonig",
    answer: "Als een kunstwerk een saaie indruk maakt.",
    keywords: ["eentonig", "kunstwerk", "saaie"]
  },
  {
    id: "te-074",
    subjectId: "tekenen",
    chapterId: "te-5",
    type: "begrip",
    prompt: "Eenzaam",
    answer: "Als een kunstwerk een sfeer van eenzaamheid of alleen zijn verbeeld.",
    keywords: ["eenzaam", "kunstwerk", "sfeer"]
  },
  {
    id: "te-075",
    subjectId: "tekenen",
    chapterId: "te-7",
    type: "begrip",
    prompt: "Eerbetoon",
    answer: "Een kunstwerk of gebouw dat gemaakt is ter ere van iemand of van een gebeurtenis.",
    keywords: ["eerbetoon", "kunstwerk", "gebouw"]
  },
  {
    id: "te-076",
    subjectId: "tekenen",
    chapterId: "te-1",
    type: "begrip",
    prompt: "Eigen schaduw",
    answer: "De schaduw die op het uitgelichte object zelf valt, op de kant die niet is belicht.",
    keywords: ["eigen schaduw", "schaduw", "uitgelichte"]
  },
  {
    id: "te-077",
    subjectId: "tekenen",
    chapterId: "te-7",
    type: "begrip",
    prompt: "Elite",
    answer: "Een kleine groep mensen met veel macht, geld of status in de maatschappij.",
    keywords: ["elite", "kleine", "groep"]
  },
  {
    id: "te-078",
    subjectId: "tekenen",
    chapterId: "te-2",
    type: "begrip",
    prompt: "En profil",
    answer: "Een portret van de zijkant.",
    keywords: ["en profil", "portret", "zijkant"]
  },
  {
    id: "te-079",
    subjectId: "tekenen",
    chapterId: "te-2",
    type: "begrip",
    prompt: "En face",
    answer: "Een portret recht van voren.",
    keywords: ["en face", "portret", "recht"]
  },
  {
    id: "te-080",
    subjectId: "tekenen",
    chapterId: "te-6",
    type: "begrip",
    prompt: "Ensceneren",
    answer: "In scène zetten.",
    keywords: ["ensceneren", "scène", "zetten"]
  },
  {
    id: "te-081",
    subjectId: "tekenen",
    chapterId: "te-7",
    type: "begrip",
    prompt: "Erfgoed",
    answer: "Alles van vroeger dat door de overheid belangrijk wordt gevonden om te bewaren zoals: gebouwen, gebruiksvoorwerpen, talen of tradities.",
    keywords: ["erfgoed", "alles", "vroeger"]
  },
  {
    id: "te-082",
    subjectId: "tekenen",
    chapterId: "te-7",
    type: "begrip",
    prompt: "Esthetisch",
    answer: "Bedoeld om mooi te zijn.",
    keywords: ["esthetisch", "mooi"]
  },
  {
    id: "te-083",
    subjectId: "tekenen",
    chapterId: "te-4",
    type: "begrip",
    prompt: "Ets",
    answer: "Een afdruk gemaakt met een diepdruktechniek.",
    keywords: ["ets", "afdruk", "diepdruktechniek"]
  },
  {
    id: "te-084",
    subjectId: "tekenen",
    chapterId: "te-1",
    type: "begrip",
    prompt: "Evenwicht",
    answer: "Gelijkmatige verdeling.",
    keywords: ["evenwicht", "gelijkmatige", "verdeling"]
  },
  {
    id: "te-085",
    subjectId: "tekenen",
    chapterId: "te-4",
    type: "begrip",
    prompt: "Experimenteren",
    answer: "Verschillende ideeën uitproberen om tot een eindontwerp te komen.",
    keywords: ["experimenteren", "verschillende", "ideeën"]
  },
  {
    id: "te-086",
    subjectId: "tekenen",
    chapterId: "te-5",
    type: "begrip",
    prompt: "Expressief",
    answer: "Als een kunstwerk veel gevoel uitdrukt.",
    keywords: ["expressief", "kunstwerk", "veel"]
  },
  {
    id: "te-087",
    subjectId: "tekenen",
    chapterId: "te-2",
    type: "begrip",
    prompt: "Exterieur",
    answer: "Buitenkant.",
    keywords: ["exterieur", "buitenkant"]
  },
  {
    id: "te-088",
    subjectId: "tekenen",
    chapterId: "te-5",
    type: "begrip",
    prompt: "Feestelijk",
    answer: "Als een kunstwerk een opgewekte, vrolijke sfeer uitdrukt, vaak met bonte kleuren.",
    keywords: ["feestelijk", "kunstwerk", "opgewekte"]
  },
  {
    id: "te-089",
    subjectId: "tekenen",
    chapterId: "te-3",
    type: "begrip",
    prompt: "Figuratief",
    answer: "Als het kunstwerk een herkenbare voorstelling heeft: je ziet meteen wat het voorstelt. Film Bewegend beeld op een scherm waarmee de makers een verhaal vertellen.",
    keywords: ["figuratief", "kunstwerk", "herkenbare"]
  },
  {
    id: "te-090",
    subjectId: "tekenen",
    chapterId: "te-6",
    type: "begrip",
    prompt: "Filmen",
    answer: "Het vastleggen van beelden die wanneer ze snel achter elkaar worden getoond beweging laten zien.",
    keywords: ["filmen", "vastleggen", "beelden"]
  },
  {
    id: "te-091",
    subjectId: "tekenen",
    chapterId: "te-5",
    type: "begrip",
    prompt: "Formaat",
    answer: "Grootte.",
    keywords: ["formaat", "grootte"]
  },
  {
    id: "te-092",
    subjectId: "tekenen",
    chapterId: "te-6",
    type: "begrip",
    prompt: "Fotograferen",
    answer: "Letterlijk 'schrijven met licht'; het vastleggen van een afbeelding op lichtgevoelig materiaal of in een digitaal bestand.",
    keywords: ["fotograferen", "letterlijk", "schrijven"]
  },
  {
    id: "te-093",
    subjectId: "tekenen",
    chapterId: "te-6",
    type: "begrip",
    prompt: "Fotografie",
    answer: "Kunstvorm waarbij losse foto's, fotoseries of fotomontages worden gepresenteerd.",
    keywords: ["fotografie", "kunstvorm", "waarbij"]
  },
  {
    id: "te-094",
    subjectId: "tekenen",
    chapterId: "te-6",
    type: "begrip",
    prompt: "Fotomontage",
    answer: "Het samenvoegen van foto's tot een nieuw geheel.",
    keywords: ["fotomontage", "samenvoegen", "fotos"]
  },
  {
    id: "te-095",
    subjectId: "tekenen",
    chapterId: "te-6",
    type: "begrip",
    prompt: "Fotoserie",
    answer: "Een aantal foto's met hetzelfde onderwerp of thema.",
    keywords: ["fotoserie", "aantal", "fotos"]
  },
  {
    id: "te-096",
    subjectId: "tekenen",
    chapterId: "te-5",
    type: "begrip",
    prompt: "Futuristisch",
    answer: "Als een kunstwerk een uitstraling heeft die doet denken aan de toekomst.",
    keywords: ["futuristisch", "kunstwerk", "uitstraling"]
  },
  {
    id: "te-097",
    subjectId: "tekenen",
    chapterId: "te-6",
    type: "begrip",
    prompt: "Game",
    answer: "Computerspel.",
    keywords: ["game", "computerspel"]
  },
  {
    id: "te-098",
    subjectId: "tekenen",
    chapterId: "te-4",
    type: "begrip",
    prompt: "Garen",
    answer: "Dunne draad die is gesponnen van vezels.",
    keywords: ["garen", "dunne", "draad"]
  },
  {
    id: "te-099",
    subjectId: "tekenen",
    chapterId: "te-3",
    type: "begrip",
    prompt: "Geabstraheerde vormen",
    answer: "Veel details zijn weggelaten, de voorstelling is minder of nauwelijks nog herkenbaar.",
    keywords: ["geabstraheerde vormen", "veel", "details"]
  },
  {
    id: "te-100",
    subjectId: "tekenen",
    chapterId: "te-5",
    type: "begrip",
    prompt: "Gebaar",
    answer: "Een beweging van de handen, het hoofd of andere lichaamsdelen.",
    keywords: ["gebaar", "beweging", "handen"]
  },
  {
    id: "te-101",
    subjectId: "tekenen",
    chapterId: "te-7",
    type: "begrip",
    prompt: "Gebruiksfunctie",
    answer: "Als kunst als doel heeft om ergens voor gebruikt te worden.",
    keywords: ["gebruiksfunctie", "kunst", "doel"]
  },
  {
    id: "te-102",
    subjectId: "tekenen",
    chapterId: "te-5",
    type: "begrip",
    prompt: "Gedetailleerd",
    answer: "Heel precies weergegeven.",
    keywords: ["gedetailleerd", "heel", "precies"]
  },
  {
    id: "te-103",
    subjectId: "tekenen",
    chapterId: "te-5",
    type: "begrip",
    prompt: "Geëmotioneerd",
    answer: "Aangegrepen door gevoelens.",
    keywords: ["geëmotioneerd", "aangegrepen", "gevoelens"]
  },
  {
    id: "te-104",
    subjectId: "tekenen",
    chapterId: "te-6",
    type: "begrip",
    prompt: "Geënsceneerd",
    answer: "In scène gezet, niet spontaan.",
    keywords: ["geënsceneerd", "scène", "gezet"]
  },
  {
    id: "te-105",
    subjectId: "tekenen",
    chapterId: "te-3",
    type: "begrip",
    prompt: "Genre",
    answer: "Kunstsoort met een bepaald onderwerp, bijvoorbeeld portret, landschap of stilleven.",
    keywords: ["genre", "kunstsoort", "bepaald"]
  },
  {
    id: "te-106",
    subjectId: "tekenen",
    chapterId: "te-1",
    type: "begrip",
    prompt: "Geometrische vormen",
    answer: "Meetkundige (wiskundige) vormen. Deze kunnen vlak of ruimtelijk zijn.",
    keywords: ["geometrische vormen", "meetkundige", "wiskundige"]
  },
  {
    id: "te-107",
    subjectId: "tekenen",
    chapterId: "te-3",
    type: "begrip",
    prompt: "Gesloten vorm",
    answer: "De vorm heeft geen opening; je kunt er niet in of doorheen kijken.",
    keywords: ["gesloten vorm", "vorm", "heeft"]
  },
  {
    id: "te-108",
    subjectId: "tekenen",
    chapterId: "te-3",
    type: "begrip",
    prompt: "Gestileerde vormen",
    answer: "Vereenvoudigd weergegeven vormen.",
    keywords: ["gestileerde vormen", "vereenvoudigd", "weergegeven"]
  },
  {
    id: "te-109",
    subjectId: "tekenen",
    chapterId: "te-3",
    type: "begrip",
    prompt: "Gestroomlijnd",
    answer: "Met vloeiende lijnen vormgeven, zodat er weinig weerstand is bij beweging.",
    keywords: ["gestroomlijnd", "vloeiende", "lijnen"]
  },
  {
    id: "te-110",
    subjectId: "tekenen",
    chapterId: "te-4",
    type: "begrip",
    prompt: "Gieten",
    answer: "Een mal vullen met bijvoorbeeld vloeibaar brons of gips.",
    keywords: ["gieten", "vullen", "vloeibaar"]
  },
  {
    id: "te-111",
    subjectId: "tekenen",
    chapterId: "te-4",
    type: "begrip",
    prompt: "Graffiti",
    answer: "Straatkunst gemaakt met spuitverf op muren. Graffiti is niet altijd legaal.",
    keywords: ["graffiti", "straatkunst", "spuitverf"]
  },
  {
    id: "te-112",
    subjectId: "tekenen",
    chapterId: "te-4",
    type: "begrip",
    prompt: "Grafiek",
    answer: "Kunst die wordt gemaakt met behulp van druktechnieken.",
    keywords: ["grafiek", "kunst", "behulp"]
  },
  {
    id: "te-113",
    subjectId: "tekenen",
    chapterId: "te-4",
    type: "begrip",
    prompt: "Grafische technieken",
    answer: "Verzamelnaam voor verschillende technieken waarmee je bijvoorbeeld papier of textiel kunt bedrukken.",
    keywords: ["grafische technieken", "verzamelnaam", "verschillende"]
  },
  {
    id: "te-114",
    subjectId: "tekenen",
    chapterId: "te-7",
    type: "begrip",
    prompt: "Grafische vormgeving",
    answer: "De vormgeving van beeld en informatie in drukwerk en op beeldschermen.",
    keywords: ["grafische vormgeving", "vormgeving", "beeld"]
  },
  {
    id: "te-115",
    subjectId: "tekenen",
    chapterId: "te-4",
    type: "begrip",
    prompt: "Gravure",
    answer: "Diepdruktechniek waarbij er met een naald in een metalen plaat wordt gekrast, waarna je er afdrukken van maakt. Groot voor - klein achter Wat dichterbij is, wordt groter afgebeeld dan wat ver weg is.",
    keywords: ["gravure", "diepdruktechniek", "waarbij"]
  },
  {
    id: "te-116",
    subjectId: "tekenen",
    chapterId: "te-1",
    type: "begrip",
    prompt: "Harmonie",
    answer: "In evenwicht.",
    keywords: ["harmonie", "evenwicht"]
  },
  {
    id: "te-117",
    subjectId: "tekenen",
    chapterId: "te-5",
    type: "begrip",
    prompt: "Harmonieus",
    answer: "Als een kunstwerk een rustige, evenwichtige sfeer verbeeldt.",
    keywords: ["harmonieus", "kunstwerk", "rustige"]
  },
  {
    id: "te-118",
    subjectId: "tekenen",
    chapterId: "te-1",
    type: "begrip",
    prompt: "Herhaling",
    answer: "Het terugkeren van vormen, patronen of motieven.",
    keywords: ["herhaling", "terugkeren", "vormen"]
  },
  {
    id: "te-119",
    subjectId: "tekenen",
    chapterId: "te-1",
    type: "begrip",
    prompt: "Horizontale compositie",
    answer: "Compositie waarbij de nadruk op de horizon of 'horizontale lijnen ligt en de breedte van de voorstelling of het beeld de aandacht trekt.",
    keywords: ["horizontale compositie", "compositie", "waarbij"]
  },
  {
    id: "te-120",
    subjectId: "tekenen",
    chapterId: "te-5",
    type: "begrip",
    prompt: "Houding",
    answer: "De stand van het lichaam van afgebeelde personen.",
    keywords: ["houding", "stand", "lichaam"]
  },
  {
    id: "te-121",
    subjectId: "tekenen",
    chapterId: "te-4",
    type: "begrip",
    prompt: "Hout",
    answer: "Beeldhouwmateriaal en bouwmateriaal. Soorten hout verschillen in kleur, hardheid en buigzaamheid.",
    keywords: ["hout", "beeldhouwmateriaal", "bouwmateriaal"]
  },
  {
    id: "te-122",
    subjectId: "tekenen",
    chapterId: "te-4",
    type: "begrip",
    prompt: "Houtskool",
    answer: "Verkoold hout dat vaak wordt gebruikt om schetsen te maken.",
    keywords: ["houtskool", "verkoold", "hout"]
  },
  {
    id: "te-123",
    subjectId: "tekenen",
    chapterId: "te-3",
    type: "begrip",
    prompt: "Idealiseren",
    answer: "Iets mooier voorstellen dan het is.",
    keywords: ["idealiseren", "iets", "mooier"]
  },
  {
    id: "te-124",
    subjectId: "tekenen",
    chapterId: "te-7",
    type: "begrip",
    prompt: "Idealistisch",
    answer: "Het hebben van een duidelijk beeld over hoe de wereld zou moeten zijn.",
    keywords: ["idealistisch", "hebben", "duidelijk"]
  },
  {
    id: "te-125",
    subjectId: "tekenen",
    chapterId: "te-6",
    type: "begrip",
    prompt: "Illustratie",
    answer: "Een tekening ter verduidelijking bij een tekst of verhaal.",
    keywords: ["illustratie", "tekening", "verduidelijking"]
  },
  {
    id: "te-126",
    subjectId: "tekenen",
    chapterId: "te-7",
    type: "begrip",
    prompt: "Industriële vormgeving",
    answer: "De vormgeving van gebruiksvoorwerpen die met machines in grote oplagen worden geproduceerd.",
    keywords: ["industriële vormgeving", "vormgeving", "gebruiksvoorwerpen"]
  },
  {
    id: "te-127",
    subjectId: "tekenen",
    chapterId: "te-4",
    type: "begrip",
    prompt: "Inkt",
    answer: "Teken-, schrijf- of drukmateriaal, gebruikt voor pentekeningen of (verdund) om mee te schilderen.",
    keywords: ["inkt", "teken-", "schrijf-"]
  },
  {
    id: "te-128",
    subjectId: "tekenen",
    chapterId: "te-4",
    type: "begrip",
    prompt: "Inlijsten",
    answer: "Een schilderij voorzien van een lijst.",
    keywords: ["inlijsten", "schilderij", "voorzien"]
  },
  {
    id: "te-129",
    subjectId: "tekenen",
    chapterId: "te-3",
    type: "begrip",
    prompt: "Installatie",
    answer: "Een ruimtelijk werk dat bestaat uit onderdelen die door de kunstenaar worden tentoongesteld.",
    keywords: ["installatie", "ruimtelijk", "werk"]
  },
  {
    id: "te-130",
    subjectId: "tekenen",
    chapterId: "te-6",
    type: "begrip",
    prompt: "Instructiefilm",
    answer: "Film waarin wordt uitgelegd hoe je iets moet doen of hoe iets werkt.",
    keywords: ["instructiefilm", "film", "uitgelegd"]
  },
  {
    id: "te-131",
    subjectId: "tekenen",
    chapterId: "te-6",
    type: "begrip",
    prompt: "Instrumentaal geluid",
    answer: "Geluid dat wordt gemaakt met bekende of door een kunstenaar bedachte instrumenten.",
    keywords: ["instrumentaal geluid", "geluid", "bekende"]
  },
  {
    id: "te-132",
    subjectId: "tekenen",
    chapterId: "te-2",
    type: "begrip",
    prompt: "Interieur",
    answer: "De binnenkant van een gebouw.",
    keywords: ["interieur", "binnenkant", "gebouw"]
  },
  {
    id: "te-133",
    subjectId: "tekenen",
    chapterId: "te-5",
    type: "begrip",
    prompt: "Kader",
    answer: "De grens tussen wat in beeld is en wat buiten beeld blijft.",
    keywords: ["kader", "grens", "tussen"]
  },
  {
    id: "te-134",
    subjectId: "tekenen",
    chapterId: "te-3",
    type: "begrip",
    prompt: "Karikatuur",
    answer: "Een overdreven weergave van een persoon, vaak humoristisch bedoeld.",
    keywords: ["karikatuur", "overdreven", "weergave"]
  },
  {
    id: "te-135",
    subjectId: "tekenen",
    chapterId: "te-4",
    type: "begrip",
    prompt: "Karton",
    answer: "Ondergrond voor een tekening, een schilderij of constructiemateriaal voor driedimensionale kunstwerken.",
    keywords: ["karton", "ondergrond", "tekening"]
  },
  {
    id: "te-136",
    subjectId: "tekenen",
    chapterId: "te-4",
    type: "begrip",
    prompt: "Keramiek",
    answer: "Objecten gemaakt van klei of ander materiaal, hard gemaakt door verhitting in een oven.",
    keywords: ["keramiek", "objecten", "klei"]
  },
  {
    id: "te-137",
    subjectId: "tekenen",
    chapterId: "te-2",
    type: "begrip",
    prompt: "Kikvors-perspectief",
    answer: "Laag standpunt waardoor je opkijkt naar dingen. De horizon is hierbij laag.",
    keywords: ["kikvors-perspectief", "laag", "standpunt"]
  },
  {
    id: "te-138",
    subjectId: "tekenen",
    chapterId: "te-3",
    type: "begrip",
    prompt: "Kinetisch object",
    answer: "Een kunstwerk dat uit mechanische, bewegende onderdelen bestaat.",
    keywords: ["kinetisch object", "kunstwerk", "mechanische"]
  },
  {
    id: "te-139",
    subjectId: "tekenen",
    chapterId: "te-3",
    type: "begrip",
    prompt: "Klassiek",
    answer: "Afkomstig uit of geïnspireerd op de Griekse of 'Romeinse oudheid.",
    keywords: ["klassiek", "afkomstig", "geïnspireerd"]
  },
  {
    id: "te-140",
    subjectId: "tekenen",
    chapterId: "te-7",
    type: "begrip",
    prompt: "Kleding",
    answer: "Kleren. Kleding in een kunstwerk kan iets vertellen over de tijdsperiode of de status van de afgebeelde personen.",
    keywords: ["kleding", "kleren", "kunstwerk"]
  },
  {
    id: "te-141",
    subjectId: "tekenen",
    chapterId: "te-4",
    type: "begrip",
    prompt: "Klei",
    answer: "Natuurlijk materiaal dat makkelijk in vormen te kneden is en daarna wordt gebakken om het hard te maken.",
    keywords: ["klei", "natuurlijk", "materiaal"]
  },
  {
    id: "te-142",
    subjectId: "tekenen",
    chapterId: "te-1",
    type: "begrip",
    prompt: "Kleurcontrast",
    answer: "Tegenstelling tussen twee kleuren.",
    keywords: ["kleurcontrast", "tegenstelling", "tussen"]
  },
  {
    id: "te-143",
    subjectId: "tekenen",
    chapterId: "te-1",
    type: "begrip",
    prompt: "Kleurencirkel",
    answer: "Een cirkelvormige figuur die zichtbaar maakt welke nieuwe kleuren ontstaan als je kleuren mengt.",
    keywords: ["kleurencirkel", "cirkelvormige", "figuur"]
  },
  {
    id: "te-144",
    subjectId: "tekenen",
    chapterId: "te-1",
    type: "begrip",
    prompt: "Kleurfamilie",
    answer: "Een verzameling kleuren die bij elkaar horen en één kleur als basiskleur hebben, zoals verschillende tinten blauw.",
    keywords: ["kleurfamilie", "verzameling", "kleuren"]
  },
  {
    id: "te-145",
    subjectId: "tekenen",
    chapterId: "te-5",
    type: "begrip",
    prompt: "Kleurgebruik",
    answer: "De keuze van kleuren. Dit is van invloed op hoe je een kunstwerk ervaart.",
    keywords: ["kleurgebruik", "keuze", "kleuren"]
  },
  {
    id: "te-146",
    subjectId: "tekenen",
    chapterId: "te-1",
    type: "begrip",
    prompt: "Kleurhelderheid",
    answer: "De felheid van een kleur.",
    keywords: ["kleurhelderheid", "felheid", "kleur"]
  },
  {
    id: "te-147",
    subjectId: "tekenen",
    chapterId: "te-1",
    type: "begrip",
    prompt: "Kleurmenging",
    answer: "Het mengen van verschillende kleuren verf of licht zodat er een nieuwe kleur ontstaat.",
    keywords: ["kleurmenging", "mengen", "verschillende"]
  },
  {
    id: "te-148",
    subjectId: "tekenen",
    chapterId: "te-2",
    type: "begrip",
    prompt: "Kleurperspectief",
    answer: "Dieptewerking door het gebruik van bepaalde kleuren; wat dichterbij is, heeft warmere en fellere kleuren (zoals rood en geel) en wat ver weg is, heeft koelere kleuren (zoals blauw en groen).",
    keywords: ["kleurperspectief", "dieptewerking", "gebruik"]
  },
  {
    id: "te-149",
    subjectId: "tekenen",
    chapterId: "te-1",
    type: "begrip",
    prompt: "Kleur-tegen-kleurcontrast",
    answer: "Kleurcontrast waarbij twee verschillende kleuren naast elkaar worden geplaatst, zoals geel en rood.",
    keywords: ["kleur-tegen-kleurcontrast", "kleurcontrast", "waarbij"]
  },
  {
    id: "te-150",
    subjectId: "tekenen",
    chapterId: "te-1",
    type: "begrip",
    prompt: "Kleurverloop",
    answer: "Wanneer een kleur geleidelijk overgaat in een andere kleur of langzaam lichter of donkerder wordt.",
    keywords: ["kleurverloop", "wanneer", "kleur"]
  },
  {
    id: "te-151",
    subjectId: "tekenen",
    chapterId: "te-6",
    type: "begrip",
    prompt: "Kostumering",
    answer: "De kostuums van spelers in een film, opera of theaterstuk.",
    keywords: ["kostumering", "kostuums", "spelers"]
  },
  {
    id: "te-152",
    subjectId: "tekenen",
    chapterId: "te-4",
    type: "begrip",
    prompt: "Krijt",
    answer: "Tekenmateriaal, gemaakt van pigment en bindmiddel.",
    keywords: ["krijt", "tekenmateriaal", "pigment"]
  },
  {
    id: "te-153",
    subjectId: "tekenen",
    chapterId: "te-1",
    type: "begrip",
    prompt: "Kunstlicht",
    answer: "Licht dat ontstaat door lampen.",
    keywords: ["kunstlicht", "licht", "ontstaat"]
  },
  {
    id: "te-154",
    subjectId: "tekenen",
    chapterId: "te-7",
    type: "begrip",
    prompt: "Kunststroming",
    answer: "Een (meestal achteraf bepaalde) groep van kunstwerken, verbonden door een bepaalde stijl of periode.",
    keywords: ["kunststroming", "meestal", "achteraf"]
  },
  {
    id: "te-155",
    subjectId: "tekenen",
    chapterId: "te-3",
    type: "begrip",
    prompt: "Landschap",
    answer: "Een kunstwerk met een landschap als onderwerp. Licht Straling uit een lichtbron, zoals de zon of een lamp.",
    keywords: ["landschap", "kunstwerk", "onderwerp"]
  },
  {
    id: "te-156",
    subjectId: "tekenen",
    chapterId: "te-1",
    type: "begrip",
    prompt: "Licht-donkercontrast",
    answer: "Contrast tussen uitgelichte onderdelen en donkere schaduw plekken.",
    keywords: ["licht-donkercontrast", "contrast", "tussen"]
  },
  {
    id: "te-157",
    subjectId: "tekenen",
    chapterId: "te-1",
    type: "begrip",
    prompt: "Lichteffect",
    answer: "Het gebruik van licht om elementen in een kunstwerk meer te laten opvallen of meer diepte te geven.",
    keywords: ["lichteffect", "gebruik", "licht"]
  },
  {
    id: "te-158",
    subjectId: "tekenen",
    chapterId: "te-5",
    type: "begrip",
    prompt: "Lichtrichting",
    answer: "De kant waar het licht vandaan komt, te zien aan de schaduwen.",
    keywords: ["lichtrichting", "kant", "waar"]
  },
  {
    id: "te-159",
    subjectId: "tekenen",
    chapterId: "te-5",
    type: "begrip",
    prompt: "Lichtval",
    answer: "De manier waarop het licht het onderwerp van een schilderij of foto laat uitkomen.",
    keywords: ["lichtval", "manier", "licht"]
  },
  {
    id: "te-160",
    subjectId: "tekenen",
    chapterId: "te-5",
    type: "begrip",
    prompt: "Lieflijk",
    answer: "Als een kunstwerk een aantrekkelijke indruk maakt, vaak door lichte tinten.",
    keywords: ["lieflijk", "kunstwerk", "aantrekkelijke"]
  },
  {
    id: "te-161",
    subjectId: "tekenen",
    chapterId: "te-1",
    type: "begrip",
    prompt: "Lijndikte",
    answer: "De dikte van een lijn, die kan verlopen van dik naar dun of van dun naar dik.",
    keywords: ["lijndikte", "dikte", "lijn"]
  },
  {
    id: "te-162",
    subjectId: "tekenen",
    chapterId: "te-2",
    type: "begrip",
    prompt: "Lijnperspectief",
    answer: "Meetkundige manier om diepte te verbeelden op een plat vlak, waarbij lijnen richting een verdwijnpunt lopen.",
    keywords: ["lijnperspectief", "meetkundige", "manier"]
  },
  {
    id: "te-163",
    subjectId: "tekenen",
    chapterId: "te-5",
    type: "begrip",
    prompt: "Lijnrichting",
    answer: "De richting waarin lijnen getekend of geschilderd zijn, horizontaal, verticaal of diagonaal.",
    keywords: ["lijnrichting", "richting", "lijnen"]
  },
  {
    id: "te-164",
    subjectId: "tekenen",
    chapterId: "te-5",
    type: "begrip",
    prompt: "Lijnsoort",
    answer: "De stijl van een lijn; recht of gebogen, onderbroken of doorlopend, zigzaggend of kronkelend.",
    keywords: ["lijnsoort", "stijl", "lijn"]
  },
  {
    id: "te-165",
    subjectId: "tekenen",
    chapterId: "te-5",
    type: "begrip",
    prompt: "Lijnwerking",
    answer: "Effect dat ontstaat door het gebruik van lijnen.",
    keywords: ["lijnwerking", "effect", "ontstaat"]
  },
  {
    id: "te-166",
    subjectId: "tekenen",
    chapterId: "te-4",
    type: "begrip",
    prompt: "Lijst",
    answer: "Een raamwerk dat als rand om een schilderij is aangebracht, vaak van hout.",
    keywords: ["lijst", "raamwerk", "rand"]
  },
  {
    id: "te-167",
    subjectId: "tekenen",
    chapterId: "te-3",
    type: "begrip",
    prompt: "Lineair",
    answer: "Lijnvormig; een afbeelding die vooral uit lijnen bestaat of een driedimensionaal werk met veel lange, dunne vormen.",
    keywords: ["lineair", "lijnvormig", "afbeelding"]
  },
  {
    id: "te-168",
    subjectId: "tekenen",
    chapterId: "te-7",
    type: "begrip",
    prompt: "Maatschappelijk",
    answer: "Wat met de samenleving te maken heeft.",
    keywords: ["maatschappelijk", "samenleving", "maken"]
  },
  {
    id: "te-169",
    subjectId: "tekenen",
    chapterId: "te-5",
    type: "begrip",
    prompt: "Maatverhouding",
    answer: "De maten van een werk of de verhouding tussen verschillende afmetingen in een voorwerp, gebouw of figuur.",
    keywords: ["maatverhouding", "maten", "werk"]
  },
  {
    id: "te-170",
    subjectId: "tekenen",
    chapterId: "te-3",
    type: "begrip",
    prompt: "Maquette",
    answer: "Een driedimensionaal schaalmodel.",
    keywords: ["maquette", "driedimensionaal", "schaalmodel"]
  },
  {
    id: "te-171",
    subjectId: "tekenen",
    chapterId: "te-3",
    type: "begrip",
    prompt: "Massief",
    answer: "Niet open en hol, maar gesloten en één geheel.",
    keywords: ["massief", "open", "gesloten"]
  },
  {
    id: "te-172",
    subjectId: "tekenen",
    chapterId: "te-4",
    type: "begrip",
    prompt: "Massiefhout",
    answer: "Hout dat uit één stuk van een boom komt; wordt gebruikt om te beeldhouwen of er worden planken of balken van gezaagd.",
    keywords: ["massiefhout", "hout", "stuk"]
  },
  {
    id: "te-173",
    subjectId: "tekenen",
    chapterId: "te-4",
    type: "begrip",
    prompt: "Materiaalproeven",
    answer: "Testjes met materiaal om te bekijken welk materiaal of welke materiaalbehandeling het best past bij een idee.",
    keywords: ["materiaalproeven", "testjes", "materiaal"]
  },
  {
    id: "te-174",
    subjectId: "tekenen",
    chapterId: "te-5",
    type: "begrip",
    prompt: "Meelicht",
    answer: "Licht dat van voren, vanaf de toeschouwer, op de voorstelling schijnt.",
    keywords: ["meelicht", "licht", "voren"]
  },
  {
    id: "te-175",
    subjectId: "tekenen",
    chapterId: "te-4",
    type: "begrip",
    prompt: "Metaal",
    answer: "Sterk en veerkrachtig materiaal dat door verhitting vloeibaar wordt en gegoten kan worden.",
    keywords: ["metaal", "sterk", "veerkrachtig"]
  },
  {
    id: "te-176",
    subjectId: "tekenen",
    chapterId: "te-5",
    type: "begrip",
    prompt: "Mindmap",
    answer: "Een schematisch overzicht van ideeën over een onderwerp of thema, met pijlen, woorden, tekeningen of beeldmateriaal.",
    keywords: ["mindmap", "schematisch", "overzicht"]
  },
  {
    id: "te-177",
    subjectId: "tekenen",
    chapterId: "te-3",
    type: "begrip",
    prompt: "Miniatuur",
    answer: "Heel klein; in de kunst vaak een heel klein schilderij.",
    keywords: ["miniatuur", "heel", "klein"]
  },
  {
    id: "te-178",
    subjectId: "tekenen",
    chapterId: "te-4",
    type: "begrip",
    prompt: "Mixed media",
    answer: "Bestaand uit verschillende materialen.",
    keywords: ["mixed media", "bestaand", "verschillende"]
  },
  {
    id: "te-179",
    subjectId: "tekenen",
    chapterId: "te-3",
    type: "begrip",
    prompt: "Mobile",
    answer: "Een hangend kunstwerk dat bestaat uit vormen die zijn bevestigd aan dunne metalen staafjes of draden. Onderdelen van een mobile kunnen bewegen door wind of luchtstromen.",
    keywords: ["mobile", "hangend", "kunstwerk"]
  },
  {
    id: "te-180",
    subjectId: "tekenen",
    chapterId: "te-4",
    type: "begrip",
    prompt: "Modelleren",
    answer: "Het in model brengen van zacht materiaal, zoals klei, was of papier-maché, door het te kneden, in te drukken of uit te rekken.",
    keywords: ["modelleren", "model", "brengen"]
  },
  {
    id: "te-181",
    subjectId: "tekenen",
    chapterId: "te-7",
    type: "begrip",
    prompt: "Modevormgeving",
    answer: "De vormgeving van kleding en accessoires.",
    keywords: ["modevormgeving", "vormgeving", "kleding"]
  },
  {
    id: "te-182",
    subjectId: "tekenen",
    chapterId: "te-6",
    type: "begrip",
    prompt: "Monteren",
    answer: "Aan elkaar vastmaken; bij film het in de gewenste volgorde zetten van stukjes film en het toevoegen van teksten, muziek en special effect s.",
    keywords: ["monteren", "elkaar", "vastmaken"]
  },
  {
    id: "te-183",
    subjectId: "tekenen",
    chapterId: "te-7",
    type: "begrip",
    prompt: "Monument",
    answer: "Een gebouw of object dat cultureel erfgoed is of een kunstwerk om een gebeurtenis of persoon te herdenken.",
    keywords: ["monument", "gebouw", "object"]
  },
  {
    id: "te-184",
    subjectId: "tekenen",
    chapterId: "te-5",
    type: "begrip",
    prompt: "Moodboard",
    answer: "Een verzameling of collage van afbeeldingen die een idee of gevoel weergeven.",
    keywords: ["moodboard", "verzameling", "collage"]
  },
  {
    id: "te-185",
    subjectId: "tekenen",
    chapterId: "te-6",
    type: "begrip",
    prompt: "Multimedia-vormgeving",
    answer: "De vormgeving van informatie die bewegend en in (film)beeld en geluid gegeven wordt.",
    keywords: ["multimedia-vormgeving", "vormgeving", "informatie"]
  },
  {
    id: "te-186",
    subjectId: "tekenen",
    chapterId: "te-7",
    type: "begrip",
    prompt: "Mythologisch",
    answer: "Wat met een klassiek verhaal over Griekse of Romeinse goden te maken heeft.",
    keywords: ["mythologisch", "klassiek", "verhaal"]
  },
  {
    id: "te-187",
    subjectId: "tekenen",
    chapterId: "te-3",
    type: "begrip",
    prompt: "Naar de fantasie",
    answer: "Uit het hoofd gemaakt, met de verbeelding van de kunstenaar.",
    keywords: ["naar de fantasie", "hoofd", "verbeelding"]
  },
  {
    id: "te-188",
    subjectId: "tekenen",
    chapterId: "te-3",
    type: "begrip",
    prompt: "Naar de waarneming",
    answer: "Precies nagemaakt, door te kijken naar hoe iets eruitziet.",
    keywords: ["naar de waarneming", "precies", "nagemaakt"]
  },
  {
    id: "te-189",
    subjectId: "tekenen",
    chapterId: "te-3",
    type: "begrip",
    prompt: "Naturalistisch",
    answer: "Als een kunstwerk de werkelijkheid zo natuurgetrouw mogelijk weergeeft.",
    keywords: ["naturalistisch", "kunstwerk", "werkelijkheid"]
  },
  {
    id: "te-190",
    subjectId: "tekenen",
    chapterId: "te-1",
    type: "begrip",
    prompt: "Natuurlijk licht",
    answer: "Licht dat ontstaat door de zon.",
    keywords: ["natuurlijk licht", "licht", "ontstaat"]
  },
  {
    id: "te-191",
    subjectId: "tekenen",
    chapterId: "te-3",
    type: "begrip",
    prompt: "Object trouvé",
    answer: "Frans voor 'gevonden voorwerp'. Dit zijn vaak alledaagse materialen en objecten, verwerkt in een kunstwerk.",
    keywords: ["object trouvé", "frans", "gevonden"]
  },
  {
    id: "te-192",
    subjectId: "tekenen",
    chapterId: "te-7",
    type: "begrip",
    prompt: "Oeuvre",
    answer: "Alle werken van een kunstenaar samen; geeft inzicht in de ontwikkeling die een kunstenaar tijdens zijn loopbaan heeft doorgemaakt.",
    keywords: ["oeuvre", "alle", "werken"]
  },
  {
    id: "te-193",
    subjectId: "tekenen",
    chapterId: "te-5",
    type: "begrip",
    prompt: "Onderwerp",
    answer: "Waar een kunstwerk over gaat; dit kun je afleiden uit de voorstelling en vormgeving.",
    keywords: ["onderwerp", "waar", "kunstwerk"]
  },
  {
    id: "te-194",
    subjectId: "tekenen",
    chapterId: "te-7",
    type: "begrip",
    prompt: "Opdracht",
    answer: "Vraag van een persoon of organisatie om een kunstwerk te maken.",
    keywords: ["opdracht", "vraag", "persoon"]
  },
  {
    id: "te-195",
    subjectId: "tekenen",
    chapterId: "te-3",
    type: "begrip",
    prompt: "Open vorm",
    answer: "De vorm heeft een opening, waardoor je erin of -doorheen kunt kijken.",
    keywords: ["open vorm", "vorm", "heeft"]
  },
  {
    id: "te-196",
    subjectId: "tekenen",
    chapterId: "te-5",
    type: "begrip",
    prompt: "Opstelling",
    answer: "De manier waarop mensen of voorwerpen zijn neergezet.",
    keywords: ["opstelling", "manier", "mensen"]
  },
  {
    id: "te-197",
    subjectId: "tekenen",
    chapterId: "te-1",
    type: "begrip",
    prompt: "Optische kleurmenging",
    answer: "Menging van verschillende kleuren licht tot een nieuwe kleur, bijvoorbeeld wanneer verschillend gekleurde stipjes of streepjes naast elkaar in een schilderij lijken te mengen tot een nieuwe kleur alsje verder weg gaat staan.",
    keywords: ["optische kleurmenging", "menging", "verschillende"]
  },
  {
    id: "te-198",
    subjectId: "tekenen",
    chapterId: "te-5",
    type: "begrip",
    prompt: "Ordelijk",
    answer: "Als een kunstwerk een geordende en overzichtelijke indruk maakt. Tegenovergestelde van chaotisch.",
    keywords: ["ordelijk", "kunstwerk", "geordende"]
  },
  {
    id: "te-199",
    subjectId: "tekenen",
    chapterId: "te-3",
    type: "begrip",
    prompt: "Organische vormen",
    answer: "Natuurlijke vormen, zoals de vormen van mensen, dieren of planten; de vormen zijn vaak vloeiend en niet hoekig.",
    keywords: ["organische vormen", "natuurlijke", "vormen"]
  },
  {
    id: "te-200",
    subjectId: "tekenen",
    chapterId: "te-7",
    type: "begrip",
    prompt: "Origineel",
    answer: "Nog niet eerder door iemand anders bedacht of gemaakt.",
    keywords: ["origineel", "eerder", "iemand"]
  },
  {
    id: "te-201",
    subjectId: "tekenen",
    chapterId: "te-1",
    type: "begrip",
    prompt: "Overallcompositie",
    answer: "Compositie waarbij alle elementen gelijkmatig over het vlak of in de ruimte zijn verspreid.",
    keywords: ["overallcompositie", "compositie", "waarbij"]
  },
  {
    id: "te-202",
    subjectId: "tekenen",
    chapterId: "te-2",
    type: "begrip",
    prompt: "Overlapping",
    answer: "Objecten staan achter andere objecten afgebeeld, zodat er diepte ontstaat.",
    keywords: ["overlapping", "objecten", "staan"]
  },
  {
    id: "te-203",
    subjectId: "tekenen",
    chapterId: "te-4",
    type: "begrip",
    prompt: "Paneel",
    answer: "Houten ondergrond voor een schilderij.",
    keywords: ["paneel", "houten", "ondergrond"]
  },
  {
    id: "te-204",
    subjectId: "tekenen",
    chapterId: "te-4",
    type: "begrip",
    prompt: "Papier",
    answer: "Ondergrond voor een tekening of schilderij, of beeldend materiaal in een collage of in de vorm van papier-maché.",
    keywords: ["papier", "ondergrond", "tekening"]
  },
  {
    id: "te-205",
    subjectId: "tekenen",
    chapterId: "te-3",
    type: "begrip",
    prompt: "Performance",
    answer: "Optreden van een kunstenaar dat zelf een kunstwerk is, soms vastgelegd op film.",
    keywords: ["performance", "optreden", "kunstenaar"]
  },
  {
    id: "te-206",
    subjectId: "tekenen",
    chapterId: "te-6",
    type: "begrip",
    prompt: "Personage",
    answer: "Persoon in een verhaal.",
    keywords: ["personage", "persoon", "verhaal"]
  },
  {
    id: "te-207",
    subjectId: "tekenen",
    chapterId: "te-4",
    type: "begrip",
    prompt: "Plaatmateriaal",
    answer: "Bouwmateriaal dat is samengesteld uit hout en lijm, zoals mdf, triplex o f multiplex.",
    keywords: ["plaatmateriaal", "bouwmateriaal", "samengesteld"]
  },
  {
    id: "te-208",
    subjectId: "tekenen",
    chapterId: "te-5",
    type: "begrip",
    prompt: "Plaatsing",
    answer: "Waar een voorwerp, figuur of vorm wordt neergezet in een kunstwerk.",
    keywords: ["plaatsing", "waar", "voorwerp"]
  },
  {
    id: "te-209",
    subjectId: "tekenen",
    chapterId: "te-2",
    type: "begrip",
    prompt: "Plasticiteit",
    answer: "Hoe je op een plat vlak laat zien dat personen en voorwerpen driedimensionaal zijn door gebruik van licht en schaduw.",
    keywords: ["plasticiteit", "plat", "vlak"]
  },
  {
    id: "te-210",
    subjectId: "tekenen",
    chapterId: "te-3",
    type: "begrip",
    prompt: "Plastiek",
    answer: "Ruimtelijk werk, gemaakt door het toevoegen van materiaal (zoals boetseren met klei).",
    keywords: ["plastiek", "ruimtelijk", "werk"]
  },
  {
    id: "te-211",
    subjectId: "tekenen",
    chapterId: "te-2",
    type: "begrip",
    prompt: "Plat",
    answer: "Zonder of met weinig diepte.",
    keywords: ["plat", "zonder", "weinig"]
  },
  {
    id: "te-212",
    subjectId: "tekenen",
    chapterId: "te-2",
    type: "begrip",
    prompt: "Plattegrond",
    answer: "Schematisch bovenaanzicht van een gebouw of plaats.",
    keywords: ["plattegrond", "schematisch", "bovenaanzicht"]
  },
  {
    id: "te-213",
    subjectId: "tekenen",
    chapterId: "te-7",
    type: "begrip",
    prompt: "Portfolio",
    answer: "Een verzameling van kunstwerken die de kunstenaar heeft uitgekozen om inzicht te geven in zijn werk en ontwikkeling.",
    keywords: ["portfolio", "verzameling", "kunstwerken"]
  },
  {
    id: "te-214",
    subjectId: "tekenen",
    chapterId: "te-3",
    type: "begrip",
    prompt: "Portret",
    answer: "Een voorstelling van een persoon, vaak alleen van het gezicht.",
    keywords: ["portret", "voorstelling", "persoon"]
  },
  {
    id: "te-215",
    subjectId: "tekenen",
    chapterId: "te-4",
    type: "begrip",
    prompt: "Potlood",
    answer: "Teken- en schetsmateriaal. Bestaat in verschillende kleuren en hardheden.",
    keywords: ["potlood", "teken-", "schetsmateriaal"]
  },
  {
    id: "te-216",
    subjectId: "tekenen",
    chapterId: "te-7",
    type: "begrip",
    prompt: "Praktisch",
    answer: "Met een bepaald nut, bedoeld om op een handige manier te kunnen gebruiken. Primaire kleuren Rood, geel en blauw.",
    keywords: ["praktisch", "bepaald", "handige"]
  },
  {
    id: "te-217",
    subjectId: "tekenen",
    chapterId: "te-7",
    type: "begrip",
    prompt: "Progressief",
    answer: "Vooruitstrevend, op zoek naar vernieuwing en verandering. Het tegenovergestelde van conservatief.",
    keywords: ["progressief", "vooruitstrevend", "zoek"]
  },
  {
    id: "te-218",
    subjectId: "tekenen",
    chapterId: "te-7",
    type: "begrip",
    prompt: "Prototype",
    answer: "De eerste versie van een product of kunstwerk, om te testen of het technisch uitvoerbaar is.",
    keywords: ["prototype", "eerste", "versie"]
  },
  {
    id: "te-219",
    subjectId: "tekenen",
    chapterId: "te-3",
    type: "begrip",
    prompt: "Readymade",
    answer: "Een bestaand voorwerp dat niet door de kunstenaar is gemaakt, maar wel wordt gepresenteerd als kunstwerk.",
    keywords: ["readymade", "bestaand", "voorwerp"]
  },
  {
    id: "te-220",
    subjectId: "tekenen",
    chapterId: "te-3",
    type: "begrip",
    prompt: "Realistisch",
    answer: "Als een kunstwerk nèt echt lijkt.",
    keywords: ["realistisch", "kunstwerk", "echt"]
  },
  {
    id: "te-221",
    subjectId: "tekenen",
    chapterId: "te-6",
    type: "begrip",
    prompt: "Regie",
    answer: "Aanwijzingen aan acteurs en cameramensen, zodat het verhaal zo wordt verbeeld als de regisseur het heeft bedacht.",
    keywords: ["regie", "aanwijzingen", "acteurs"]
  },
  {
    id: "te-222",
    subjectId: "tekenen",
    chapterId: "te-6",
    type: "begrip",
    prompt: "Registreren",
    answer: "Vastleggen. Je kunt bijvoorbeeld een beeldend proces vastleggen door de stappen op te schrijven, te filmen of te fotograferen.",
    keywords: ["registreren", "vastleggen", "kunt"]
  },
  {
    id: "te-223",
    subjectId: "tekenen",
    chapterId: "te-3",
    type: "begrip",
    prompt: "Reliëf",
    answer: "Gebeeldhouwde afbeelding die aan de achterkant plat is, bijvoorbeeld op een muur.",
    keywords: ["reliëf", "gebeeldhouwde", "afbeelding"]
  },
  {
    id: "te-224",
    subjectId: "tekenen",
    chapterId: "te-7",
    type: "begrip",
    prompt: "Religieus",
    answer: "Gelovig.",
    keywords: ["religieus", "gelovig"]
  },
  {
    id: "te-225",
    subjectId: "tekenen",
    chapterId: "te-7",
    type: "begrip",
    prompt: "Religieuze functie",
    answer: "Als kunst als doel heeft om een geloof (religie) te verspreiden.",
    keywords: ["religieuze functie", "kunst", "doel"]
  },
  {
    id: "te-226",
    subjectId: "tekenen",
    chapterId: "te-7",
    type: "begrip",
    prompt: "Renovatie",
    answer: "Het opknappen of moderniseren van een gebouw.",
    keywords: ["renovatie", "opknappen", "moderniseren"]
  },
  {
    id: "te-227",
    subjectId: "tekenen",
    chapterId: "te-6",
    type: "begrip",
    prompt: "Reportage",
    answer: "Een film waarin een nieuws verslag te zien is over een gebeurtenis of plek, bijvoorbeeld in een journaal.",
    keywords: ["reportage", "film", "nieuws"]
  },
  {
    id: "te-228",
    subjectId: "tekenen",
    chapterId: "te-7",
    type: "begrip",
    prompt: "Restauratie",
    answer: "Het in de oorspronkelijke staat herstellen van een voorwerp of een gebouw.",
    keywords: ["restauratie", "oorspronkelijke", "staat"]
  },
  {
    id: "te-229",
    subjectId: "tekenen",
    chapterId: "te-1",
    type: "begrip",
    prompt: "Restvorm",
    answer: "Ruimte die openblijft tussen wat de kunstenaar heeft geschilderd of gebeeldhouwd; kan zelf ook iets voorstellen.",
    keywords: ["restvorm", "ruimte", "openblijft"]
  },
  {
    id: "te-230",
    subjectId: "tekenen",
    chapterId: "te-7",
    type: "begrip",
    prompt: "Revolutionair",
    answer: "(1) Als iets op een totaal nieuwe manier wordt gedaan. (2) Persoon die de samenleving totaal wil veranderen.",
    keywords: ["revolutionair", "iets", "totaal"]
  },
  {
    id: "te-231",
    subjectId: "tekenen",
    chapterId: "te-5",
    type: "begrip",
    prompt: "Richting",
    answer: "De kant waar de hoofdlijnen in een compositie naartoe gaan.",
    keywords: ["richting", "kant", "waar"]
  },
  {
    id: "te-232",
    subjectId: "tekenen",
    chapterId: "te-1",
    type: "begrip",
    prompt: "Ritme",
    answer: "Herhalende elementen in een kunstwerk.",
    keywords: ["ritme", "herhalende", "elementen"]
  },
  {
    id: "te-233",
    subjectId: "tekenen",
    chapterId: "te-5",
    type: "begrip",
    prompt: "Romantisch",
    answer: "(1) Als een kunstwerk doet denken aan de liefde. (2) Behorend tot de kunststroming romantiek.",
    keywords: ["romantisch", "kunstwerk", "doet"]
  },
  {
    id: "te-234",
    subjectId: "tekenen",
    chapterId: "te-3",
    type: "begrip",
    prompt: "Ruimtelijk",
    answer: "Driedimensionaal.",
    keywords: ["ruimtelijk", "driedimensionaal"]
  },
  {
    id: "te-235",
    subjectId: "tekenen",
    chapterId: "te-3",
    type: "begrip",
    prompt: "Ruimte omvattende vorm",
    answer: "Een open, doorzichtige of skeletachtige vorm waarbij je de ruimte die erin zit, kunt zien.",
    keywords: ["ruimte omvattende vorm", "open", "doorzichtige"]
  },
  {
    id: "te-236",
    subjectId: "tekenen",
    chapterId: "te-2",
    type: "begrip",
    prompt: "Ruimtesuggestie",
    answer: "Manieren om diepte te verbeelden op een plat vlak.",
    keywords: ["ruimtesuggestie", "manieren", "diepte"]
  },
  {
    id: "te-237",
    subjectId: "tekenen",
    chapterId: "te-2",
    type: "begrip",
    prompt: "Ruimtewerking",
    answer: "Het effect dat ontstaat door het gebruik van ruimtesuggestie.",
    keywords: ["ruimtewerking", "effect", "ontstaat"]
  },
  {
    id: "te-238",
    subjectId: "tekenen",
    chapterId: "te-6",
    type: "begrip",
    prompt: "Scenario",
    answer: "Overzicht van de teksten van de acteurs en van de belangrijkste acties van een film.",
    keywords: ["scenario", "overzicht", "teksten"]
  },
  {
    id: "te-239",
    subjectId: "tekenen",
    chapterId: "te-1",
    type: "begrip",
    prompt: "Schaduwwerking",
    answer: "Het effect dat door gebruik van schaduw accenten worden gelegd of diepte wordt gesuggereerd in een voorstelling.",
    keywords: ["schaduwwerking", "effect", "gebruik"]
  },
  {
    id: "te-240",
    subjectId: "tekenen",
    chapterId: "te-5",
    type: "begrip",
    prompt: "Schematisch",
    answer: "Ruw opgezet, in grote lijnen.",
    keywords: ["schematisch", "opgezet", "grote"]
  },
  {
    id: "te-241",
    subjectId: "tekenen",
    chapterId: "te-6",
    type: "begrip",
    prompt: "Scherm",
    answer: "Doek of monitor waarop beelden kunnen worden getoond.",
    keywords: ["scherm", "doek", "monitor"]
  },
  {
    id: "te-242",
    subjectId: "tekenen",
    chapterId: "te-6",
    type: "begrip",
    prompt: "Scherptediepte",
    answer: "Het gedeelte op een foto of in een film dat scherp in beeld is. Bij een grote scherptediepte zijn de voor- en achtergrond scherp en bij een kleine scherptediepte niet.",
    keywords: ["scherptediepte", "gedeelte", "foto"]
  },
  {
    id: "te-243",
    subjectId: "tekenen",
    chapterId: "te-4",
    type: "begrip",
    prompt: "Schets",
    answer: "Een getekende opzet voor een schilderij, beeld, gebouw of ander kunstwerk, snel gemaakt met losse lijnen.",
    keywords: ["schets", "getekende", "opzet"]
  },
  {
    id: "te-244",
    subjectId: "tekenen",
    chapterId: "te-4",
    type: "begrip",
    prompt: "Schilderen",
    answer: "Het maken van een voorstelling met verf, bijvoorbeeld op papier of op of doek.",
    keywords: ["schilderen", "maken", "voorstelling"]
  },
  {
    id: "te-245",
    subjectId: "tekenen",
    chapterId: "te-4",
    type: "begrip",
    prompt: "Schilderij",
    answer: "Een kunstwerk geschilderd met verf, vaak op schilderdoek, hout, papier of karton.",
    keywords: ["schilderij", "kunstwerk", "geschilderd"]
  },
  {
    id: "te-246",
    subjectId: "tekenen",
    chapterId: "te-3",
    type: "begrip",
    prompt: "Sculptuur",
    answer: "Een ruimtelijk werk dat wordt gemaakt door het wegnemen van materiaal, bijvoorbeeld door het hakken in marmer.",
    keywords: ["sculptuur", "ruimtelijk", "werk"]
  },
  {
    id: "te-247",
    subjectId: "tekenen",
    chapterId: "te-1",
    type: "begrip",
    prompt: "Secundaire kleuren",
    answer: "De kleuren die ontstaan door twee primaire kleuren met elkaar te mengen: oranje, groen en paars.",
    keywords: ["secundaire kleuren", "kleuren", "ontstaan"]
  },
  {
    id: "te-248",
    subjectId: "tekenen",
    chapterId: "te-5",
    type: "begrip",
    prompt: "Sfeerblad",
    answer: "Ander woord: moodboard. Verzameling van afbeeldingen die een gevoel of idee weergeeft.",
    keywords: ["sfeerblad", "woord", "moodboard"]
  },
  {
    id: "te-249",
    subjectId: "tekenen",
    chapterId: "te-1",
    type: "begrip",
    prompt: "Silhouet",
    answer: "Een egaal donkergekleurde, herkenbare vorm, zoals een schaduw, die contrasteert met de achtergrond.",
    keywords: ["silhouet", "egaal", "donkergekleurde"]
  },
  {
    id: "te-250",
    subjectId: "tekenen",
    chapterId: "te-4",
    type: "begrip",
    prompt: "Sjabloneren",
    answer: "Het maken van een voorstelling door het aanbrengen van verf of inkt in een uitgespaarde vorm. Gebruikt als schilder- en druktechniek, ook bij graffiti.",
    keywords: ["sjabloneren", "maken", "voorstelling"]
  },
  {
    id: "te-251",
    subjectId: "tekenen",
    chapterId: "te-1",
    type: "begrip",
    prompt: "Slagschaduw",
    answer: "De schaduw die naast het uitgelichte object valt, op een ondergrond of achtergrond.",
    keywords: ["slagschaduw", "schaduw", "naast"]
  },
  {
    id: "te-252",
    subjectId: "tekenen",
    chapterId: "te-5",
    type: "begrip",
    prompt: "Sober",
    answer: "Als een kunstwerk een eenvoudige en bescheiden indruk maakt.",
    keywords: ["sober", "kunstwerk", "eenvoudige"]
  },
  {
    id: "te-253",
    subjectId: "tekenen",
    chapterId: "te-7",
    type: "begrip",
    prompt: "Sociaal",
    answer: "Wat met de samenleving te maken heeft.",
    keywords: ["sociaal", "samenleving", "maken"]
  },
  {
    id: "te-254",
    subjectId: "tekenen",
    chapterId: "te-7",
    type: "begrip",
    prompt: "Socialistisch",
    answer: "Wat te maken heeft met het streven naar een maatschappijvorm die gebaseerd is op gelijkheid en eerlijke verdeling.",
    keywords: ["socialistisch", "maken", "heeft"]
  },
  {
    id: "te-255",
    subjectId: "tekenen",
    chapterId: "te-6",
    type: "begrip",
    prompt: "Software",
    answer: "Computerprogramma's waarmee je bijvoorbeeld beeld, geluid en tekst creëert of bewerkt.",
    keywords: ["software", "computerprogrammas", "beeld"]
  },
  {
    id: "te-256",
    subjectId: "tekenen",
    chapterId: "te-4",
    type: "begrip",
    prompt: "Sokkel",
    answer: "Een voetstuk waarop een beeld staat of kan worden geplaatst.",
    keywords: ["sokkel", "voetstuk", "beeld"]
  },
  {
    id: "te-257",
    subjectId: "tekenen",
    chapterId: "te-5",
    type: "begrip",
    prompt: "Somber",
    answer: "Als een kunstwerk een gevoel van verdriet en troosteloosheid verbeeldt.",
    keywords: ["somber", "kunstwerk", "gevoel"]
  },
  {
    id: "te-258",
    subjectId: "tekenen",
    chapterId: "te-6",
    type: "begrip",
    prompt: "Speelfilm",
    answer: "Film die is gemaakt met acteurs die rollen spelen en zo een verhaal verbeelden.",
    keywords: ["speelfilm", "film", "acteurs"]
  },
  {
    id: "te-259",
    subjectId: "tekenen",
    chapterId: "te-2",
    type: "begrip",
    prompt: "Standpunt",
    answer: "De hoogte en hoek van waaruit je dingen ziet.",
    keywords: ["standpunt", "hoogte", "hoek"]
  },
  {
    id: "te-260",
    subjectId: "tekenen",
    chapterId: "te-5",
    type: "begrip",
    prompt: "Statisch",
    answer: "Als een kunstwerk kenmerken vertoont van rust of stilstand. Tegenovergestelde van dynamisch en beweeglijk.",
    keywords: ["statisch", "kunstwerk", "kenmerken"]
  },
  {
    id: "te-261",
    subjectId: "tekenen",
    chapterId: "te-7",
    type: "begrip",
    prompt: "Status",
    answer: "Aanzien of een belangrijke plaats in de samenleving.",
    keywords: ["status", "aanzien", "belangrijke"]
  },
  {
    id: "te-262",
    subjectId: "tekenen",
    chapterId: "te-3",
    type: "begrip",
    prompt: "Stijl",
    answer: "De manier waarop een kunstwerk is uitgevoerd, vaak persoonlijk en tijdgebonden.",
    keywords: ["stijl", "manier", "kunstwerk"]
  },
  {
    id: "te-263",
    subjectId: "tekenen",
    chapterId: "te-6",
    type: "begrip",
    prompt: "Still",
    answer: "Een los beeld uit een film.",
    keywords: ["still", "beeld", "film"]
  },
  {
    id: "te-264",
    subjectId: "tekenen",
    chapterId: "te-3",
    type: "begrip",
    prompt: "Stilleven",
    answer: "Een voorstelling met verschillende levenloze voorwerpen, zoals een gedekte tafel met eten en servies.",
    keywords: ["stilleven", "voorstelling", "verschillende"]
  },
  {
    id: "te-265",
    subjectId: "tekenen",
    chapterId: "te-4",
    type: "begrip",
    prompt: "Stof",
    answer: "Materiaal gemaakt door bijvoorbeeld het weven of breien van garens.",
    keywords: ["stof", "materiaal", "weven"]
  },
  {
    id: "te-266",
    subjectId: "tekenen",
    chapterId: "te-5",
    type: "begrip",
    prompt: "Stofuitdrukking",
    answer: "De manier waarop een kunstenaar de textuur van een materiaal verbeeldt.",
    keywords: ["stofuitdrukking", "manier", "kunstenaar"]
  },
  {
    id: "te-267",
    subjectId: "tekenen",
    chapterId: "te-6",
    type: "begrip",
    prompt: "Storyboard",
    answer: "De scènes van een film in de vorm van een strip.",
    keywords: ["storyboard", "scènes", "film"]
  },
  {
    id: "te-268",
    subjectId: "tekenen",
    chapterId: "te-7",
    type: "begrip",
    prompt: "Street art",
    answer: "Kunst die vaak illegaal in de openbare ruimte op muren is aangebracht.",
    keywords: ["street art", "kunst", "illegaal"]
  },
  {
    id: "te-269",
    subjectId: "tekenen",
    chapterId: "te-5",
    type: "begrip",
    prompt: "Strijklicht",
    answer: "Licht waarbij de lichtbron op dezelfde hoogte staat als het voorwerp, zodat texturen en oneffenheden duidelijk zichtbaar worden en langgerekte schaduwen ontstaan.",
    keywords: ["strijklicht", "licht", "waarbij"]
  },
  {
    id: "te-270",
    subjectId: "tekenen",
    chapterId: "te-1",
    type: "begrip",
    prompt: "Structuur",
    answer: "De manier waarop een vorm is opgebouwd. Een vorm kan bijvoorbeeld gestapeld, geweven of gevlochten zijn.",
    keywords: ["structuur", "manier", "vorm"]
  },
  {
    id: "te-271",
    subjectId: "tekenen",
    chapterId: "te-6",
    type: "begrip",
    prompt: "Studio",
    answer: "Engels woord voor atelier; in de muziek-, tv- en filmindustrie is het een plek waar beeld en geluid worden opgenomen.",
    keywords: ["studio", "engels", "woord"]
  },
  {
    id: "te-272",
    subjectId: "tekenen",
    chapterId: "te-5",
    type: "begrip",
    prompt: "Surrealistisch",
    answer: "Als in een kunstwerk realiteit en fantasie met elkaar worden gemengd.",
    keywords: ["surrealistisch", "kunstwerk", "realiteit"]
  },
  {
    id: "te-273",
    subjectId: "tekenen",
    chapterId: "te-7",
    type: "begrip",
    prompt: "Symbolisch",
    answer: "Verwijzend naar een verhaal of idee, bijvoorbeeld een duif, waarmee vrede wordt bedoeld.",
    keywords: ["symbolisch", "verwijzend", "verhaal"]
  },
  {
    id: "te-274",
    subjectId: "tekenen",
    chapterId: "te-7",
    type: "begrip",
    prompt: "Symbool",
    answer: "Een attribuut dat verwijst naar een bepaald idee.",
    keywords: ["symbool", "attribuut", "verwijst"]
  },
  {
    id: "te-275",
    subjectId: "tekenen",
    chapterId: "te-1",
    type: "begrip",
    prompt: "Symmetrische compositie",
    answer: "Compositie waarbij links en rechts of onder en boven ongeveer elkaars spiegelbeeld zijn.",
    keywords: ["symmetrische compositie", "compositie", "waarbij"]
  },
  {
    id: "te-276",
    subjectId: "tekenen",
    chapterId: "te-7",
    type: "begrip",
    prompt: "Tegendraads",
    answer: "Gaat in tegen wat 'normaal' gevonden wordt.",
    keywords: ["tegendraads", "gaat", "normaal"]
  },
  {
    id: "te-277",
    subjectId: "tekenen",
    chapterId: "te-5",
    type: "begrip",
    prompt: "Tegenlicht",
    answer: "Licht dat je tegemoet schijnt.",
    keywords: ["tegenlicht", "licht", "tegemoet"]
  },
  {
    id: "te-278",
    subjectId: "tekenen",
    chapterId: "te-4",
    type: "begrip",
    prompt: "Tekenen",
    answer: "Met lijnen, stippen, strepen of krassen een voorstelling maken, vaak op papier.",
    keywords: ["tekenen", "lijnen", "stippen"]
  },
  {
    id: "te-279",
    subjectId: "tekenen",
    chapterId: "te-4",
    type: "begrip",
    prompt: "Tekening",
    answer: "Een voorstelling getekend met bijvoorbeeld potlood, houtskool, stiften, pastelkrijt of wasco.",
    keywords: ["tekening", "voorstelling", "getekend"]
  },
  {
    id: "te-280",
    subjectId: "tekenen",
    chapterId: "te-7",
    type: "begrip",
    prompt: "Tentoonstelling",
    answer: "Een presentatie van kunstwerken, tijdelijk of voor langere tijd.",
    keywords: ["tentoonstelling", "presentatie", "kunstwerken"]
  },
  {
    id: "te-281",
    subjectId: "tekenen",
    chapterId: "te-3",
    type: "begrip",
    prompt: "Vereenvoudigd",
    answer: "Versimpeld, met weglating van details.",
    keywords: ["vereenvoudigd", "versimpeld", "weglating"]
  },
  {
    id: "te-282",
    subjectId: "tekenen",
    chapterId: "te-4",
    type: "begrip",
    prompt: "Verf",
    answer: "Schildermateriaal in verschillende soorten, die bepaalde effecten geven: met aquarelverf kun je transparant schilderen, met plakkaat verf dekkend en strak en met olieverf heel gedetailleerd.",
    keywords: ["verf", "schildermateriaal", "verschillende"]
  },
  {
    id: "te-283",
    subjectId: "tekenen",
    chapterId: "te-6",
    type: "begrip",
    prompt: "Verhaal",
    answer: "Onderwerp van een voorstelling. Een voorstelling kan bijvoorbeeld een scène uit een Bijbelverhaal, mythe of sprookje vertellen.",
    keywords: ["verhaal", "onderwerp", "voorstelling"]
  },
  {
    id: "te-284",
    subjectId: "tekenen",
    chapterId: "te-5",
    type: "begrip",
    prompt: "Verhalend",
    answer: "Als kunst bedoeld is om een scène uit een verhaal te verbeelden.",
    keywords: ["verhalend", "kunst", "scène"]
  },
  {
    id: "te-285",
    subjectId: "tekenen",
    chapterId: "te-2",
    type: "begrip",
    prompt: "Verkorting",
    answer: "Lange vormen die door het gebruik van lijnperspectief korter worden afgebeeld op een plat vlak.",
    keywords: ["verkorting", "lange", "vormen"]
  },
  {
    id: "te-286",
    subjectId: "tekenen",
    chapterId: "te-5",
    type: "begrip",
    prompt: "Verstild",
    answer: "Als een kunstwerk een sfeer van kalmte en rust verbeeldt.",
    keywords: ["verstild", "kunstwerk", "sfeer"]
  },
  {
    id: "te-287",
    subjectId: "tekenen",
    chapterId: "te-5",
    type: "begrip",
    prompt: "Vertellend",
    answer: "Als een voorstelling een scène uit een (bekend) verhaal laat zien.",
    keywords: ["vertellend", "voorstelling", "scène"]
  },
  {
    id: "te-288",
    subjectId: "tekenen",
    chapterId: "te-1",
    type: "begrip",
    prompt: "Verticale compositie",
    answer: "Compositie waarbij de nadruk ligt op verticale lijnen.",
    keywords: ["verticale compositie", "compositie", "waarbij"]
  },
  {
    id: "te-289",
    subjectId: "tekenen",
    chapterId: "te-2",
    type: "begrip",
    prompt: "Vervaging",
    answer: "Techniek voor ruimtesuggestie waar objecten die verder weg zijn vager en met minder details worden afgebeeld.",
    keywords: ["vervaging", "techniek", "ruimtesuggestie"]
  },
  {
    id: "te-290",
    subjectId: "tekenen",
    chapterId: "te-5",
    type: "begrip",
    prompt: "Vervreemdend",
    answer: "Als een kunstwerk een onwerkelijke indruk maakt doordat je dingen ziet die anders zijn dan in de werkelijkheid of die in het echt niet kunnen.",
    keywords: ["vervreemdend", "kunstwerk", "onwerkelijke"]
  },
  {
    id: "te-291",
    subjectId: "tekenen",
    chapterId: "te-5",
    type: "begrip",
    prompt: "Verwijzend",
    answer: "Als een voorwerp, dier of persoon in de voorstelling een bepaalde betekenis heeft.",
    keywords: ["verwijzend", "voorwerp", "dier"]
  },
  {
    id: "te-292",
    subjectId: "tekenen",
    chapterId: "te-1",
    type: "begrip",
    prompt: "Verzadigde kleuren",
    answer: "Ander woord: zuivere kleuren. Pure, ongemengde kleuren. Hoe minder vermengd, hoe verzadigder de kleur is.",
    keywords: ["verzadigde kleuren", "woord", "zuivere"]
  },
  {
    id: "te-293",
    subjectId: "tekenen",
    chapterId: "te-4",
    type: "begrip",
    prompt: "Vezels",
    answer: "Dunne draadjes van een bepaald materiaal, zoals katoen, polyester of hout.",
    keywords: ["vezels", "dunne", "draadjes"]
  },
  {
    id: "te-294",
    subjectId: "tekenen",
    chapterId: "te-6",
    type: "begrip",
    prompt: "Video(clip)",
    answer: "Een filmpje.",
    keywords: ["video(clip)", "filmpje"]
  },
  {
    id: "te-295",
    subjectId: "tekenen",
    chapterId: "te-1",
    type: "begrip",
    prompt: "Vlak",
    answer: "(1) Wanneer iets plat is of lijkt. (2) Platte kant van een voorwerp.",
    keywords: ["vlak", "wanneer", "iets"]
  },
  {
    id: "te-296",
    subjectId: "tekenen",
    chapterId: "te-1",
    type: "begrip",
    prompt: "Vlakverdeling",
    answer: "De manier waarop vormen over een beeldvlak zijn verdeeld.",
    keywords: ["vlakverdeling", "manier", "vormen"]
  },
  {
    id: "te-297",
    subjectId: "tekenen",
    chapterId: "te-6",
    type: "begrip",
    prompt: "Vocaal geluid",
    answer: "Geluid dat wordt gemaakt door menselijke stemmen.",
    keywords: ["vocaal geluid", "geluid", "menselijke"]
  },
  {
    id: "te-298",
    subjectId: "tekenen",
    chapterId: "te-2",
    type: "begrip",
    prompt: "Vogelvlucht-perspectief",
    answer: "Hoog standpunt waardoor je neerkijkt op dingen. De horizon is hierbij hoog.",
    keywords: ["vogelvlucht-perspectief", "hoog", "standpunt"]
  },
  {
    id: "te-299",
    subjectId: "tekenen",
    chapterId: "te-2",
    type: "begrip",
    prompt: "Volume",
    answer: "De inhoud van een object of gebouw.",
    keywords: ["volume", "inhoud", "object"]
  },
  {
    id: "te-300",
    subjectId: "tekenen",
    chapterId: "te-2",
    type: "begrip",
    prompt: "Vooraanzicht",
    answer: "Vanaf de voorkant gezien.",
    keywords: ["vooraanzicht", "vanaf", "voorkant"]
  },
  {
    id: "te-301",
    subjectId: "tekenen",
    chapterId: "te-4",
    type: "begrip",
    prompt: "Voorstudie",
    answer: "Schets als voorbereiding op het maken van een kunstwerk.",
    keywords: ["voorstudie", "schets", "voorbereiding"]
  },
  {
    id: "te-302",
    subjectId: "tekenen",
    chapterId: "te-1",
    type: "begrip",
    prompt: "Vormcontrast",
    answer: "Contrast dat ontstaat als je tegengestelde vormsoorten in één werk gebruikt, zoals organische en geometrische vormen, vlakke en ruimtelijke vormen of open en gesloten vormen.",
    keywords: ["vormcontrast", "contrast", "ontstaat"]
  },
  {
    id: "te-303",
    subjectId: "tekenen",
    chapterId: "te-4",
    type: "begrip",
    prompt: "Vorm-onderzoek",
    answer: "Schetsen waarin mogelijke vormen worden uitgeprobeerd.",
    keywords: ["vorm-onderzoek", "schetsen", "mogelijke"]
  },
  {
    id: "te-304",
    subjectId: "tekenen",
    chapterId: "te-1",
    type: "begrip",
    prompt: "Vormsoort",
    answer: "Vormcategorie, zoals geometrisch, organisch of gestileerd.",
    keywords: ["vormsoort", "vormcategorie", "geometrisch"]
  },
  {
    id: "te-305",
    subjectId: "tekenen",
    chapterId: "te-5",
    type: "begrip",
    prompt: "Vrolijk",
    answer: "Als een kunstwerk blijheid verbeeldt.",
    keywords: ["vrolijk", "kunstwerk", "blijheid"]
  },
  {
    id: "te-306",
    subjectId: "tekenen",
    chapterId: "te-5",
    type: "begrip",
    prompt: "Waarschuwend",
    answer: "Als een kunstwerk de boodschap verbeeldt dat je iets niet moet doen.",
    keywords: ["waarschuwend", "kunstwerk", "boodschap"]
  },
  {
    id: "te-307",
    subjectId: "tekenen",
    chapterId: "te-4",
    type: "begrip",
    prompt: "Wandtapijt",
    answer: "Een geweven of geknoopt kleed van stof dat wordt opgehangen aan de muur. Vroeger ook als isolatie bedoeld, tegenwoordig vooral als versiering.",
    keywords: ["wandtapijt", "geweven", "geknoopt"]
  },
  {
    id: "te-308",
    subjectId: "tekenen",
    chapterId: "te-1",
    type: "begrip",
    prompt: "Warm-koud contrast",
    answer: "Kleurcontrast waarbij een warme kleur, zoals rood of geel, naast een koude kleur zoals blauw staat.",
    keywords: ["warm-koud contrast", "kleurcontrast", "waarbij"]
  },
  {
    id: "te-309",
    subjectId: "tekenen",
    chapterId: "te-4",
    type: "begrip",
    prompt: "Werkwijze",
    answer: "De manier waarop je iets doet.",
    keywords: ["werkwijze", "manier", "iets"]
  },
  {
    id: "te-310",
    subjectId: "tekenen",
    chapterId: "te-5",
    type: "begrip",
    prompt: "Wervend",
    answer: "Bedoeld om mensen uit te nodigen of om iets te doen.",
    keywords: ["wervend", "mensen", "nodigen"]
  },
  {
    id: "te-311",
    subjectId: "tekenen",
    chapterId: "te-5",
    type: "begrip",
    prompt: "Zakelijk",
    answer: "Als een kunstwerk strak is vormgegeven, met weinig decoratie.",
    keywords: ["zakelijk", "kunstwerk", "strak"]
  },
  {
    id: "te-312",
    subjectId: "tekenen",
    chapterId: "te-4",
    type: "begrip",
    prompt: "Zeefdrukken",
    answer: "Druktechniek waarbij een raam werk wordt bespannen met een fijn gaas waarop een sjabloon wordt gelegd. Inkt wordt gelijkmatig over het gaas verspreid, waardoor het op het papier of textiel terechtkomt. Het afgedekte deel wordt niet afgedrukt.",
    keywords: ["zeefdrukken", "druktechniek", "waarbij"]
  },
  {
    id: "te-313",
    subjectId: "tekenen",
    chapterId: "te-2",
    type: "begrip",
    prompt: "Zijaanzicht",
    answer: "Vanaf de zijkant gezien.",
    keywords: ["zijaanzicht", "vanaf", "zijkant"]
  },
  {
    id: "te-314",
    subjectId: "tekenen",
    chapterId: "te-5",
    type: "begrip",
    prompt: "Zijlicht",
    answer: "Licht dat van opzij komt.",
    keywords: ["zijlicht", "licht", "opzij"]
  },
  {
    id: "te-315",
    subjectId: "tekenen",
    chapterId: "te-1",
    type: "begrip",
    prompt: "Zuivere kleuren",
    answer: "Primaire en secundaire kleuren, die niet zijn gemengd met zwart of wit of andere kleuren.",
    keywords: ["zuivere kleuren", "primaire", "secundaire"]
  },
{
id:"te-x-001",
subjectId:"tekenen",
chapterId:"te-1",
type:"begrip",
prompt:"compositie",
answer:"Ordening van beeldelementen in een kunstwerk.",
keywords:["ordening","beeldelementen","kunstwerk"]
},
{
id:"te-x-002",
subjectId:"tekenen",
chapterId:"te-1",
type:"begrip",
prompt:"symmetrie",
answer:"Gelijke verdeling van elementen aan weerszijden van een middenlijn.",
keywords:["gelijke verdeling","middenlijn","spiegeling"]
},
{
id:"te-x-003",
subjectId:"tekenen",
chapterId:"te-1",
type:"begrip",
prompt:"asymmetrie",
answer:"Ongelijke verdeling van elementen die toch balans kan geven.",
keywords:["ongelijke verdeling","balans"]
},
{
id:"te-x-004",
subjectId:"tekenen",
chapterId:"te-2",
type:"begrip",
prompt:"plans",
answer:"Indeling van ruimte in voorplan, middenplan en achterplan.",
keywords:["voorplan","middenplan","achterplan"]
},
{
id:"te-x-005",
subjectId:"tekenen",
chapterId:"te-1",
type:"begrip",
prompt:"tertiaire kleuren",
answer:"Mengkleuren die ontstaan door een primaire kleur en een secundaire kleur te mengen.",
keywords:["mengkleuren","primaire","secundaire"]
},
{
id:"te-x-006",
subjectId:"tekenen",
chapterId:"te-1",
type:"begrip",
prompt:"kwaliteitscontrast",
answer:"Tegenstelling tussen verzadigde en onverzadigde kleuren.",
keywords:["verzadigd","onverzadigd","kleurcontrast"]
},
{
id:"te-x-007",
subjectId:"tekenen",
chapterId:"te-1",
type:"begrip",
prompt:"kleurenharmonie",
answer:"Kleuren die goed samen passen en een rustig geheel vormen.",
keywords:["kleuren","passen samen","rustig"]
},
{
id:"te-x-008",
subjectId:"tekenen",
chapterId:"te-4",
type:"begrip",
prompt:"textuur",
answer:"De voelbare en zichtbare structuur van een oppervlak.",
keywords:["structuur","oppervlak","voelbaar"]
},
{
id:"te-x-009",
subjectId:"tekenen",
chapterId:"te-4",
type:"begrip",
prompt:"materiaalgebruik",
answer:"Het gebruik van specifieke materialen zoals houtskool, verf of klei in een kunstwerk.",
keywords:["materialen","houtskool","verf","klei"]
},
{
id:"te-x-010",
subjectId:"tekenen",
chapterId:"te-4",
type:"begrip",
prompt:"arceren",
answer:"Met lijnen schaduw of textuur aanbrengen in een tekening.",
keywords:["lijnen","schaduw","textuur"]
},
{
id:"te-x-011",
subjectId:"tekenen",
chapterId:"te-4",
type:"begrip",
prompt:"glaceren",
answer:"Het aanbrengen van transparante verflagen over elkaar.",
keywords:["transparante verflagen","verf"]
},
{
id:"te-x-012",
subjectId:"tekenen",
chapterId:"te-5",
type:"begrip",
prompt:"beeldaspecten",
answer:"Basiselementen van een kunstwerk, zoals kleur, licht, vorm, ruimte en compositie.",
keywords:["kleur","licht","vorm","ruimte","compositie"]
},
{
id:"te-x-013",
subjectId:"tekenen",
chapterId:"te-7",
type:"begrip",
prompt:"renaissance",
answer:"Kunststroming met aandacht voor realisme, anatomie en perspectief.",
keywords:["realisme","anatomie","perspectief"]
},
{
id:"te-x-014",
subjectId:"tekenen",
chapterId:"te-7",
type:"begrip",
prompt:"barok",
answer:"Kunststroming met dramatisch lichtgebruik en dynamische composities.",
keywords:["dramatisch licht","dynamisch","composities"]
},
{
id:"te-x-015",
subjectId:"tekenen",
chapterId:"te-7",
type:"begrip",
prompt:"impressionisme",
answer:"Kunststroming met snelle penseelstreken en veel aandacht voor licht en sfeer.",
keywords:["snelle penseelstreken","licht","sfeer"]
},
{
id:"te-x-016",
subjectId:"tekenen",
chapterId:"te-7",
type:"begrip",
prompt:"expressionisme",
answer:"Kunststroming waarbij felle kleuren en vormen worden gebruikt om emoties uit te drukken.",
keywords:["felle kleuren","emoties"]
},
{
id:"te-x-017",
subjectId:"tekenen",
chapterId:"te-7",
type:"begrip",
prompt:"kubisme",
answer:"Kunststroming waarbij vormen worden teruggebracht tot geometrische vlakken.",
keywords:["geometrische vlakken","vormen"]
},
{
id:"te-x-018",
subjectId:"tekenen",
chapterId:"te-7",
type:"begrip",
prompt:"abstracte kunst",
answer:"Kunst zonder herkenbare voorstelling, met nadruk op kleur, vorm en lijn.",
keywords:["geen voorstelling","kleur","vorm","lijn"]
},
{
id:"te-x-019",
subjectId:"tekenen",
chapterId:"te-7",
type:"begrip",
prompt:"vanitas",
answer:"Stilleven met symbolen van vergankelijkheid, zoals schedels of kaarsen.",
keywords:["stilleven","vergankelijkheid","symbolen"]
},
{
id:"te-x-020",
subjectId:"tekenen",
chapterId:"te-7",
type:"begrip",
prompt:"allegorie",
answer:"Een kunstwerk dat een abstract idee of begrip verbeeldt.",
keywords:["abstract idee","verbeeldt"]
},
{
id:"te-x-021",
subjectId:"tekenen",
chapterId:"te-4",
type:"begrip",
prompt:"waarnemingstekenen",
answer:"Tekenen wat je ziet door goed naar de werkelijkheid te kijken.",
keywords:["tekenen","zien","werkelijkheid"]
},
{
id:"te-x-022",
subjectId:"tekenen",
chapterId:"te-3",
type:"begrip",
prompt:"tweedimensionaal",
answer:"Kunst met alleen hoogte en breedte.",
keywords:["hoogte","breedte","plat"]
}
];

export const tekenenMavo4Course = {
  id: "tekenen-mavo-4",
  subject: "tekenen",
  level: "mavo",
  grade: "4",
  title: "Tekenen 4 mavo",
  chapters,
  datasets: {
    terms: items,
    years: [],
    persons: []
  }
};
