const questions = [
  {
    question: "Testvraag: wat is aardrijkskunde?",
    options: [
      "Een sport",
      "Een schoolvak over de aarde",
      "Een computerprogramma",
      "Een taal"
    ],
    answer: 1
  }
];

let current = 0;

function loadQuestion() {
  const q = questions[current];
  document.getElementById("question").innerText = q.question;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    optionsDiv.appendChild(btn);
  });
}

loadQuestion();
