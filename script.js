const questions = {
  science: [
    { q: "What is the chemical symbol for water?", options: ["H2O", "O2", "CO2", "NaCl"], answer: "H2O" },
    { q: "How many planets are in our Solar System?", options: ["7", "8", "9", "10"], answer: "8" },
    { q: "What gas do plants absorb?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"], answer: "Carbon Dioxide" },
    { q: "What is the speed of light?", options: ["300,000 km/s", "150,000 km/s", "1,000 km/s", "10,000 km/s"], answer: "300,000 km/s" },
    { q: "Which vitamin is produced in sunlight?", options: ["A", "B", "C", "D"], answer: "D" }
  ],
  history: [
    { q: "Who was the first President of the USA?", options: ["George Washington", "Abraham Lincoln", "John Adams", "Thomas Jefferson"], answer: "George Washington" },
    { q: "In which year did World War II end?", options: ["1945", "1939", "1918", "1950"], answer: "1945" },
    { q: "Which country built the Great Wall?", options: ["India", "China", "Egypt", "Greece"], answer: "China" },
    { q: "Who discovered America?", options: ["Christopher Columbus", "Marco Polo", "James Cook", "Vasco da Gama"], answer: "Christopher Columbus" },
    { q: "Which empire was ruled by Julius Caesar?", options: ["Greek", "Roman", "Ottoman", "Mongol"], answer: "Roman" }
  ],
  tech: [
    { q: "What does HTML stand for?", options: ["HyperText Markup Language", "HighText Machine Language", "HyperTool Multi Language", "None"], answer: "HyperText Markup Language" },
    { q: "Who founded Microsoft?", options: ["Steve Jobs", "Elon Musk", "Bill Gates", "Jeff Bezos"], answer: "Bill Gates" },
    { q: "What is the brain of a computer?", options: ["RAM", "Hard Drive", "CPU", "GPU"], answer: "CPU" },
    { q: "Which language is used for web apps?", options: ["PHP", "Python", "JavaScript", "All"], answer: "All" },
    { q: "What does CSS stand for?", options: ["Cascading Style Sheets", "Color Style System", "Computer Style Sheet", "Creative Style Sheet"], answer: "Cascading Style Sheets" }
  ]
};

let currentDomain = "";
let currentQuestion = 0;
let score = 0;

function startQuiz(domain) {
  currentDomain = domain;
  currentQuestion = 0;
  score = 0;

  document.getElementById("domain-selector").classList.add("hidden");
  document.getElementById("quiz-box").classList.remove("hidden");
  document.getElementById("domain-title").innerText = `${domain.toUpperCase()} Quiz`;

  loadQuestion();
}

function loadQuestion() {
  const qData = questions[currentDomain][currentQuestion];
  document.getElementById("question-text").innerText = qData.q;

  const optionsContainer = document.getElementById("options");
  optionsContainer.innerHTML = "";

  qData.options.forEach(option => {
    const btn = document.createElement("button");
    btn.innerText = option;
    btn.onclick = () => selectOption(option);
    optionsContainer.appendChild(btn);
  });
}

function selectOption(selected) {
  const qData = questions[currentDomain][currentQuestion];
  if (selected === qData.answer) score++;

  document.querySelectorAll("#options button").forEach(btn => {
    btn.disabled = true;
    if (btn.innerText === qData.answer) {
      btn.style.backgroundColor = "#c8f7c5"; // correct
    } else if (btn.innerText === selected) {
      btn.style.backgroundColor = "#f7c5c5"; // wrong
    }
  });

  document.getElementById("next-btn").style.display = "inline-block";
}

function nextQuestion() {
  currentQuestion++;
  document.getElementById("next-btn").style.display = "none";

  if (currentQuestion < questions[currentDomain].length) {
    loadQuestion();
  } else {
    endQuiz();
  }
}

function endQuiz() {
  document.getElementById("quiz-box").classList.add("hidden");
  document.getElementById("result-box").classList.remove("hidden");
  document.getElementById("score-text").innerText = `You scored ${score} out of ${questions[currentDomain].length}`;
}

function restartQuiz() {
  document.getElementById("result-box").classList.add("hidden");
  document.getElementById("domain-selector").classList.remove("hidden");
}
