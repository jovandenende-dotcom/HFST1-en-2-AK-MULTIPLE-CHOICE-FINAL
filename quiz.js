const questions = [
  // ⬇️ HIER KOMEN DE VRAGEN
];
const questions = [
  {
    question: "Wat is een puinhelling?",
    options: [
      "Sedimentpakket dat ontstaat aan de monding van een rivier",
      "Min of meer uit een massa puin bestaande, kegelvormige afzetting aan de onderzijde van een rotswand",
      "Laagte die ontstaat door wegzakken langs breuken",
      "Afzetting van materiaal door een gletsjer"
    ],
    answer: 1
  },
  {
    question: "Wat is een puinwaaier?",
    options: [
      "Afzetting van puin aan de voet van een rotswand",
      "Sedimentpakket dat zich opbouwt als een rivier vanuit een steil en smal dal in een lagergelegen vlakte terechtkomt",
      "Door ijs afgezet materiaal",
      "Kust waarbij afbraak overheerst"
    ],
    answer: 1
  },
  {
    question: "Wat is sedimentatie?",
    options: [
      "Het uiteenvallen van gesteente",
      "Het vervoer van sediment",
      "Proces waardoor los materiaal na transport door wind, water of ijs wordt afgezet",
      "Het oplossen van kalksteen"
    ],
    answer: 2
  },
  {
    question: "Wat is een sedimentgesteente?",
    options: [
      "Gesteente dat ontstaat door afkoeling van magma",
      "Gesteente dat is ontstaan uit materiaal dat door wind, water of ijs is neergelegd",
      "Gesteente dat onder hoge druk is veranderd",
      "Gesteente dat alleen uit zand bestaat"
    ],
    answer: 1
  },
  {
    question: "Wat is een stollingsgesteente?",
    options: [
      "Gesteente ontstaan uit sediment",
      "Gesteente ontstaan door afkoeling van lava of magma",
      "Gesteente ontstaan door verwering",
      "Gesteente gevormd door plooiing"
    ],
    answer: 1
  },
  {
    question: "Wat is een stroomgebied?",
    options: [
      "De bedding van een rivier",
      "Het hele gebied dat afwatert op een bepaalde rivier",
      "Een gebied met veel neerslag",
      "De monding van een rivier"
    ],
    answer: 1
  },
  {
    question: "Wat is transpiratie?",
    options: [
      "Verdamping van water uit zeeën",
      "Water dat planten opnemen en via hun bladeren weer afgeven aan de lucht",
      "Condensatie van waterdamp",
      "Neerslag uit wolken"
    ],
    answer: 1
  },
  {
    question: "Wat is transport?",
    options: [
      "Het afzetten van sediment",
      "Het uiteenvallen van gesteente",
      "Vervoer van sediment door water, wind of ijs",
      "Het oplossen van gesteente"
    ],
    answer: 2
  },
  {
    question: "Wat is een trogdal?",
    options: [
      "Een V-dal uitgesleten door een rivier",
      "Een U-dal ontstaan door erosie door een gletsjer",
      "Een vallei ontstaan door breuken",
      "Een onderzeese kloof"
    ],
    answer: 1
  },
  {
    question: "Wat is verdamping?",
    options: [
      "Het afkoelen van waterdamp",
      "Het overgaan van water van vloeibaar naar gasvormig",
      "Het neerslaan van waterdamp",
      "Het transport van water"
    ],
    answer: 1
  },
  {
    question: "Wat is verwering?",
    options: [
      "Het vervoer van sediment",
      "Het uiteenvallen van hard gesteente onder invloed van verschillende processen",
      "Het afzetten van sediment",
      "Het ontstaan van gesteente"
    ],
    answer: 1
  },
  {
    question: "Wat is verweringsmateriaal?",
    options: [
      "Sediment in een rivier",
      "Puin dat ontstaat bij verwering",
      "Gesteente in de aardmantel",
      "Magma onder een vulkaan"
    ],
    answer: 1
  },
  {
    question: "Wat is een waterscheiding?",
    options: [
      "De bedding van een rivier",
      "De grens tussen twee stroomgebieden",
      "Een gebied met veel regen",
      "Een riviermonding"
    ],
    answer: 1
  },
  {
    question: "Wat is zandsteen?",
    options: [
      "Stollingsgesteente met grote kristallen",
      "Metamorf gesteente",
      "Sedimentgesteente dat vooral bestaat uit aaneengekitte zandkorrels",
      "Gesteente ontstaan uit lava"
    ],
    answer: 2
  },
  {
    question: "Wat is een aanslibbingskust?",
    options: [
      "Kust waarbij afbraak overheerst",
      "Kust waarbij de afzetting van materiaal overheerst",
      "Steile rotskust",
      "Kust gevormd door breuken"
    ],
    answer: 1
  },
  {
    question: "Wat is een aardverschuiving?",
    options: [
      "Instorten van een vulkaan",
      "Het van een helling glijden of rollen van een grote hoeveelheid gesteente of los materiaal",
      "Beweging van aardplaten",
      "Afzetting door ijs"
    ],
    answer: 1
  },
  {
    question: "Wat is de atmosfeer?",
    options: [
      "Het vaste deel van de aarde",
      "Het geheel aan gasvormige stoffen die de aarde omringen",
      "Alle water op aarde",
      "De aardmantel"
    ],
    answer: 1
  },
  {
    question: "Wat is de benedenloop van een rivier?",
    options: [
      "Het deel bij de bron",
      "Het deel met groot verval",
      "Het deel vanaf de middenloop tot de monding met geringe stroomsnelheid",
      "Het deel waar vooral erosie plaatsvindt"
    ],
    answer: 2
  },
  {
    question: "Wat is de biosfeer?",
    options: [
      "Alle water op aarde",
      "Het leven op aarde",
      "De aardkorst",
      "De atmosfeer"
    ],
    answer: 1
  },
  {
    question: "Wat is de bovenloop van een rivier?",
    options: [
      "Het deel met weinig verval",
      "Het deel vanaf de bron tot de middenloop met groot verval en erosie",
      "Het deel bij de monding",
      "Het deel waar sedimentatie overheerst"
    ],
    answer: 1
  },
  {
    question: "Wat is chemische verwering?",
    options: [
      "Uiteenvallen van gesteente zonder samenstellingsverandering",
      "Uiteenvallen van gesteente waarbij de scheikundige samenstelling verandert",
      "Afzetting van sediment",
      "Transport van gesteente"
    ],
    answer: 1
  },
  {
    question: "Wat is condensatie?",
    options: [
      "Verdamping van water",
      "Vorming van waterdruppels door afkoelen van waterdamp",
      "Neerslag uit wolken",
      "Transport van water"
    ],
    answer: 1
  },
  {
    question: "Wat is een delta?",
    options: [
      "Steile kust",
      "Kust die ontstaat bij de monding van een vertakte rivier door afzetting",
      "Onderzeese kloof",
      "Kust gevormd door afbraak"
    ],
    answer: 1
  },
  {
    question: "Wat is een eindmorene?",
    options: [
      "Door rivier afgezet materiaal",
      "Heuvelrug van materiaal dat een gletsjer voor zich uit heeft geschoven",
      "Sediment in zee",
      "Puinhelling"
    ],
    answer: 1
  }
];

let current = 0;
let score = 0;

function loadQuestion() {
  const q = questions[current];
  document.getElementById("question").innerText = q.question;
  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";
  document.getElementById("progress").innerText =
    `Vraag ${current + 1} van ${questions.length}`;

  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.onclick = () => checkAnswer(i);
    optionsDiv.appendChild(btn);
  });
}

function checkAnswer(choice) {
  if (choice === questions[current].answer) score++;
  current++;
  if (current < questions.length) {
    loadQuestion();
  } else {
    document.getElementById("question").innerText =
      `Klaar! Score: ${score} / ${questions.length}`;
    document.getElementById("options").innerHTML = "";
    document.getElementById("progress").innerText = "";
  }
}

loadQuestion();
{
  question: "Wat is erosie?",
  options: [
    "Het uiteenvallen van gesteente",
    "Het afslijten en uitschuren van de ondergrond door water, ijs of wind",
    "Het afzetten van sediment",
    "Het oplossen van kalksteen"
  ],
  answer: 1
},
{
  question: "Wat is evaporatie?",
  options: [
    "Water dat planten afgeven aan de lucht",
    "Water dat door verdamping van het oppervlaktewater terugkomt in de lucht",
    "Vorming van waterdruppels",
    "Neerslag uit wolken"
  ],
  answer: 1
},
{
  question: "Wat is evapotranspiratie?",
  options: [
    "De som van verdamping en neerslag",
    "De som van evaporatie en transpiratie",
    "Het transport van water",
    "Condensatie van waterdamp"
  ],
  answer: 1
},
{
  question: "Wat is fysische verwering?",
  options: [
    "Uiteenvallen van gesteente waarbij de samenstelling verandert",
    "Uiteenvallen van vast gesteente waarbij de chemische samenstelling niet verandert",
    "Afzetting van sediment",
    "Transport van gesteente"
  ],
  answer: 1
},
{
  question: "Wat is de gesteentekringloop?",
  options: [
    "Het ontstaan van vulkanen",
    "Proces waarbij gesteenten voortdurend worden afgebroken en opnieuw gevormd",
    "Het vervoer van sediment",
    "Het oplossen van kalksteen"
  ],
  answer: 1
},
{
  question: "Wat is een gletsjer?",
  options: [
    "Bevroren zeewater",
    "Een ijsmassa die op land is gevormd en onder invloed van zwaartekracht beweegt",
    "Sneeuw die niet smelt",
    "IJs in de atmosfeer"
  ],
  answer: 1
},
{
  question: "Wat is de hydrologische kringloop?",
  options: [
    "De kringloop van magma",
    "De kringloop van water via verdamping, condensatie, neerslag en transport",
    "De kringloop van gesteenten",
    "De kringloop van lucht"
  ],
  answer: 1
},
{
  question: "Wat is de hydrosfeer?",
  options: [
    "Alle lucht op aarde",
    "Het water op aarde (oppervlaktewater, grondwater en ijs)",
    "De aardmantel",
    "De aardkorst"
  ],
  answer: 1
},
{
  question: "Wat is kalksteen?",
  options: [
    "Stollingsgesteente",
    "Gesteente dat ontstaat uit kalkhoudende resten van zee-organismen",
    "Metamorf gesteente",
    "Gesteente uit lava"
  ],
  answer: 1
},
{
  question: "Wat is een karstlandschap?",
  options: [
    "Landschap gevormd door gletsjers",
    "Landschap in kalksteen door het oplossen van kalk in water",
    "Woestijnlandschap",
    "Vulkanisch landschap"
  ],
  answer: 1
},
{
  question: "Wat is een klifkust?",
  options: [
    "Kust waarbij afzetting overheerst",
    "Steile kust ontstaan door afbraak door de zee",
    "Kust met duinen",
    "Kust gevormd door breuken"
  ],
  answer: 1
},
{
  question: "Wat is leisteen?",
  options: [
    "Stollingsgesteente",
    "Grijs of zwart metamorf gesteente ontstaan uit schalie",
    "Sedimentgesteente",
    "Vulkanisch gesteente"
  ],
  answer: 1
},
{
  question: "Wat is de lithosfeer?",
  options: [
    "De aardmantel",
    "De buitenste schil van de aarde, bestaande uit aardkorst en vaste bovenmantel",
    "De aardkern",
    "De atmosfeer"
  ],
  answer: 1
},
{
  question: "Wat is marmer?",
  options: [
    "Sedimentgesteente",
    "Metamorf gesteente ontstaan uit kalksteen",
    "Stollingsgesteente",
    "Gesteente uit lava"
  ],
  answer: 1
},
{
  question: "Wat is een massabeweging?",
  options: [
    "Beweging van aardplaten",
    "Verplaatsing van verweringsmateriaal door zwaartekracht",
    "Transport door wind",
    "Afzetting van sediment"
  ],
  answer: 1
},
{
  question: "Wat is een meander?",
  options: [
    "Een riviermonding",
    "Een natuurlijke bocht in een rivier",
    "Een stroomgebied",
    "Een delta"
  ],
  answer: 1
},
{
  question: "Wat is mechanische verwering?",
  options: [
    "Verwering waarbij de samenstelling verandert",
    "Verwering waarbij de chemische samenstelling niet verandert",
    "Erosie door water",
    "Sedimentatie"
  ],
  answer: 1
},
{
  question: "Wat is een metamorf gesteente?",
  options: [
    "Gesteente ontstaan door afkoeling van magma",
    "Gesteente dat door druk en/of temperatuur andere eigenschappen heeft gekregen",
    "Gesteente ontstaan door afzetting",
    "Vulkanisch gesteente"
  ],
  answer: 1
},
{
  question: "Wat is de middenloop van een rivier?",
  options: [
    "Het deel bij de bron",
    "Het deel tussen boven- en benedenloop waar erosie en sedimentatie ongeveer in evenwicht zijn",
    "Het deel bij de monding",
    "Het deel met alleen erosie"
  ],
  answer: 1
},
{
  question: "Wat is een morene?",
  options: [
    "Door rivier afgezet materiaal",
    "Afzetting van door landijs of gletsjers aangevoerd materiaal",
    "Puinhelling",
    "Zandafzetting"
  ],
  answer: 1
},
{
  question: "Wat is rek?",
  options: [
    "Het samendrukken van aardplaten",
    "Het uit elkaar trekken van aardplaten",
    "Het langs elkaar schuiven van platen",
    "Het wegzakken van platen"
  ],
  answer: 1
},
{
  question: "Wat is ridge push?",
  options: [
    "Het botsen van aardplaten",
    "Het afglijden van een oceanische plaat vanaf een hoog liggende mid-oceanische rug",
    "Het wegzakken van een plaat",
    "Het schuiven langs een breuk"
  ],
  answer: 1
},
{
  question: "Wat is een riftschouder?",
  options: [
    "Een laagte in de aardkorst",
    "Een hoger gelegen zone aan weerszijden van een riftvallei",
    "Een vulkaankrater",
    "Een trog in zee"
  ],
  answer: 1
},
{
  question: "Wat is een riftvallei?",
  options: [
    "Een dal uitgesleten door een rivier",
    "Een langgerekte vallei ontstaan door wegzakkende blokken bij een divergente plaatgrens",
    "Een dal door gletsjers",
    "Een onderzeese kloof"
  ],
  answer: 1
},
{
  question: "Wat is een schildvulkaan?",
  options: [
    "Vulkaan met steile hellingen",
    "Vulkaan met brede basis en flauwe hellingen door dunne lava",
    "Explosieve vulkaan",
    "Onderzeese vulkaan"
  ],
  answer: 1
}
{
  question: "Wat is slab pull?",
  options: [
    "Het afglijden van een plaat vanaf een rug",
    "Het wegzakken van een zwaar, afgekoeld deel van een oceanische plaat in de asthenosfeer",
    "Het langs elkaar schuiven van platen",
    "Het samendrukken van aardplaten"
  ],
  answer: 1
},
{
  question: "Wat is een slenk?",
  options: [
    "Een hoger gelegen gebied tussen breuken",
    "Een laagte die ontstaat doordat een blok van de aardkorst wegzakt langs breukvlakken",
    "Een vulkaankrater",
    "Een onderzeese kloof"
  ],
  answer: 1
},
{
  question: "Wat is een stratovulkaan?",
  options: [
    "Vulkaan met flauwe hellingen",
    "Vulkaan opgebouwd uit afwisselend lava- en aslagen met steile hellingen",
    "Onderzeese vulkaan",
    "Rustige vulkaan"
  ],
  answer: 1
},
{
  question: "Wat is subductie?",
  options: [
    "Het langs elkaar schuiven van platen",
    "Het wegzakken van een oceanische plaat onder een andere plaat in de asthenosfeer",
    "Het uit elkaar bewegen van platen",
    "Het omhoogkomen van magma"
  ],
  answer: 1
},
{
  question: "Wat is een subductiezone?",
  options: [
    "Een gebied waar platen uit elkaar bewegen",
    "Het gebied waar een oceanische plaat door zwaartekracht onder een andere plaat inzakt",
    "Een gebied met veel vulkanen",
    "Een mid-oceanische rug"
  ],
  answer: 1
},
{
  question: "Wat is een transforme plaatgrens?",
  options: [
    "Grens waar platen naar elkaar toe bewegen",
    "Grens waar platen langs elkaar schuiven",
    "Grens waar platen uit elkaar bewegen",
    "Grens waar subductie plaatsvindt"
  ],
  answer: 1
},
{
  question: "Wat is een trog?",
  options: [
    "Een U-dal",
    "Een langgerekte, diepe kloof langs de rand van duikende oceanische platen",
    "Een riftvallei",
    "Een plooiingsgebergte"
  ],
  answer: 1
},
{
  question: "Wat is een tsunami?",
  options: [
    "Stormvloed door wind",
    "Hoge golf die ontstaat door een aardbeving in de oceanische lithosfeer",
    "Golf door smeltend ijs",
    "Golf door getijden"
  ],
  answer: 1
},
{
  question: "Wat is viscositeit?",
  options: [
    "De temperatuur van magma",
    "De mate van stroperigheid van een stof",
    "De snelheid van lava",
    "De druk in de mantel"
  ],
  answer: 1
},
{
  question: "Wat is vulkanisme?",
  options: [
    "Het ontstaan van aardbevingen",
    "Het naar boven bewegen van heet magma uit de diepe ondergrond",
    "Het afkoelen van magma",
    "Het oplossen van gesteente"
  ],
  answer: 1
},
{
  question: "Wat is een explosieve eruptie?",
  options: [
    "Rustige uitbarsting van dunne lava",
    "Heftige vulkaanuitbarsting van taaie lava, as en vulkaanbommen",
    "Uitbarsting onder zee",
    "Eruptie zonder gasdruk"
  ],
  answer: 1
},
{
  question: "Wat is gebergtevorming?",
  options: [
    "Afbraak van gebergten",
    "Het ontstaan van gebergten onder invloed van platentektoniek",
    "Verwering van gesteente",
    "Erosie door ijs"
  ],
  answer: 1
},
{
  question: "Wat is de geologische tijdschaal?",
  options: [
    "Indeling van klimaten",
    "Indeling van de 4,6 miljard jaar durende geschiedenis van de aarde",
    "Schaal voor aardbevingen",
    "Tijdschaal van het weer"
  ],
  answer: 1
},
{
  question: "Wat is gesteente?",
  options: [
    "Los sediment",
    "Vaste stoffen die de aardkorst en het bovenste deel van de mantel vormen",
    "Magma onder de aarde",
    "Water in vaste vorm"
  ],
  answer: 1
},
{
  question: "Wat is graniet?",
  options: [
    "Sedimentgesteente",
    "Stollingsgesteente dat door langzame afkoeling grote kristallen heeft",
    "Metamorf gesteente",
    "Vulkanisch as"
  ],
  answer: 1
},
{
  question: "Wat is een horst?",
  options: [
    "Laaggelegen gebied",
    "Hoger gelegen gebied tussen twee breuken",
    "Een riftvallei",
    "Een delta"
  ],
  answer: 1
},
{
  question: "Wat is een hotspot?",
  options: [
    "Een plek waar aardplaten botsen",
    "Een hete plek boven een mantelpluim",
    "Een gebied met hoge luchtdruk",
    "Een subductiezone"
  ],
  answer: 1
},
{
  question: "Wat is het hypocentrum?",
  options: [
    "Plaats aan het aardoppervlak",
    "Het punt in de ondergrond waar een aardbeving ontstaat",
    "De rand van een plaat",
    "De aardkern"
  ],
  answer: 1
},
{
  question: "Wat is de kern?",
  options: [
    "Buitenste laag van de aarde",
    "Het binnenste deel van de aarde",
    "De aardmantel",
    "De lithosfeer"
  ],
  answer: 1
},
{
  question: "Wat is lava?",
  options: [
    "Magma in de mantel",
    "Magma dat aan het aardoppervlak komt",
    "Gestold magma",
    "Vulkanisch gesteente"
  ],
  answer: 1
},
{
  question: "Wat is een magmakamer?",
  options: [
    "Plaats waar lava stolt",
    "Herkomstgebied van magma in de aardkorst",
    "Onderzeese kloof",
    "Vulkaankrater"
  ],
  answer: 1
},
{
  question: "Wat is magnitude?",
  options: [
    "De diepte van een aardbeving",
    "De hoeveelheid energie die vrijkomt bij een aardbeving",
    "De schade aan gebouwen",
    "De duur van een beving"
  ],
  answer: 1
},
{
  question: "Wat is de mantel?",
  options: [
    "Buitenste laag van de aarde",
    "Laag tussen de kern en de aardkorst",
    "Binnenste deel van de aarde",
    "De lithosfeer"
  ],
  answer: 1
},
{
  question: "Wat is een mid-oceanische rug?",
  options: [
    "Gebergte op land",
    "Onderzeese gebergteketen waar mantelmateriaal omhoogkomt",
    "Subductiezone",
    "Diepzeetrog"
  ],
  answer: 1
},
{
  question: "Wat is de momentmagnitudeschaal?",
  options: [
    "Schaal voor windsnelheid",
    "Schaal waarmee de magnitude van een aardbeving wordt aangegeven",
    "Schaal voor temperatuur",
    "Tijdschaal van geologie"
  ],
  answer: 1
},
{
  question: "Wat is platentektoniek?",
  options: [
    "Beweging van lucht",
    "De processen waarbij aardplaten ontstaan, bewegen en verdwijnen",
    "Verwering van gesteente",
    "Vulkanisme"
  ],
  answer: 1
},
{
  question: "Wat is een plooiingsgebergte?",
  options: [
    "Gebergte ontstaan door breuken",
    "Gebergte ontstaan door plooiing van delen van de aardkorst",
    "Vulkanisch gebergte",
    "Onderzees gebergte"
  ],
  answer: 1
},
{
  question: "Wat is een aardbeving?",
  options: [
    "Vulkanuitbarsting",
    "Trilling van de aarde door het plotseling verschuiven van stukken van de aardkorst of mantel",
    "Beweging van magma",
    "Instorten van een berg"
  ],
  answer: 1
},
{
  question: "Wat is het epicentrum?",
  options: [
    "Het punt waar de aardbeving ontstaat",
    "De plaats aan het aardoppervlak loodrecht boven het hypocentrum",
    "De rand van een plaat",
    "De kern van de aarde"
  ],
  answer: 1
},
{
  question: "Wat is een eruptie?",
  options: [
    "Het afkoelen van lava",
    "Een vulkaanuitbarsting",
    "Een aardbeving",
    "Het ontstaan van een gebergte"
  ],
  answer: 1
}
// === HULPFUNCTIES ===
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// === QUIZ LOGICA ===
let current = 0;
let score = 0;

// Shuffle vragen
shuffle(questions);

// Shuffle antwoordopties per vraag
questions.forEach(q => {
  const correctAnswer = q.options[q.answer];
  shuffle(q.options);
  q.answer = q.options.indexOf(correctAnswer);
});

function loadQuestion() {
  const q = questions[current];
  document.getElementById("question").innerText = q.question;
  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  document.getElementById("progress").innerText =
    `Vraag ${current + 1} van ${questions.length}`;

  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.onclick = () => checkAnswer(i);
    optionsDiv.appendChild(btn);
  });
}

function checkAnswer(choice) {
  if (choice === questions[current].answer) score++;
  current++;

  if (current < questions.length) {
    loadQuestion();
  } else {
    document.getElementById("question").innerText =
      `Klaar! Je score: ${score} / ${questions.length}`;
    document.getElementById("options").innerHTML = "";
    document.getElementById("progress").innerText = "";
  }
}

loadQuestion();
