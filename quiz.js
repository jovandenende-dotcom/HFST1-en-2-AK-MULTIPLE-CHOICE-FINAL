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
    question: "Wat is een aardbeving?",
    options: [
      "Vulkanuitbarsting",
      "Trilling van de aarde door het plotseling verschuiven van stukken van de aardkorst of mantel",
      "Beweging van magma",
      "Instorten van een berg"
    ],
    answer: 1
  }
];

// ------------------ QUIZ LOGICA ------------------

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

let current = 0;
let score = 0;

// Shuffle vragen en antwoorden
shuffle(questions);
questions.forEach(q => {
  const correct = q.options[q.answer];
  shuffle(q.options);
  q.answer = q.options.indexOf(correct);
});

function loadQuestion() {
  const q = questions[current];
  document.getElementById("question").innerText = q.question;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.onclick = () => checkAnswer(i);
    optionsDiv.appendChild(btn);
  });
}

function checkAnswer(choice) {
  const q = questions[current];
  const correctText = q.options[q.answer];

  if (choice === q.answer) {
    alert("Goed! ✅");
    score++;
  } else {
    alert("Fout ❌\n\nHet juiste antwoord is:\n" + correctText);
  }

  current++;

  if (current < questions.length) {
    loadQuestion();
  } else {
    document.getElementById("question").innerText =
      `Klaar! Je score: ${score} / ${questions.length}`;
    document.getElementById("options").innerHTML = "";
  }
}

loadQuestion();
