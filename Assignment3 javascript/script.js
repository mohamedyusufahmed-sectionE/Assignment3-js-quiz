const loginContainer = document.getElementById("loginContainer");
const quizContainer = document.getElementById("quizContainer");
const loginForm = document.getElementById("loginForm");
const loginFeedback = document.getElementById("loginFeedback");

const username = "AlbutopG";
const password = "12345";

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const enteredUsername = loginForm.username.value;
  const enteredPassword = loginForm.password.value;

  if (enteredUsername === username && enteredPassword === password) {
    loginContainer.style.display = "none";
    quizContainer.style.display = "block";
    displayQuestion();
  } else {
    loginFeedback.textContent = "Invalid username or password.";
  }
});

const quiz = document.getElementById("quiz");
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const feedbackElement = document.getElementById("feedback");
const scoreElement = document.getElementById("score");
const submitButton = document.getElementById("submit-btn");

let currentQuestionIndex = 0;
let score = 0;

const questions = [
  {
    question: "What is the capital of Italy?",
    options: ["Madrid", "Rome", "Paris", "Berlin"],
    answer: "Rome",
  },
  {
    question: "What is the largest ocean?",
    options: [
      "Atlantic Ocean",
      "Arctic Ocean",
      "Indian Ocean",
      "Pacific Ocean",
    ],
    answer: "Pacific Ocean",
  },
  {
    question: "Who painted the Mona Lisa?",
    options: [
      "Vincent van Gogh",
      "Leonardo da Vinci",
      "Pablo Picasso",
      "Michelangelo",
    ],
    answer: "Leonardo da Vinci",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    answer: "Mars",
  },
  {
    question: "What is the powerhouse of the cell?",
    options: ["Nucleus", "Ribosome", "Mitochondria", "Chloroplast"],
    answer: "Mitochondria",
  },
];

function displayQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;
  optionsElement.innerHTML = "";
  currentQuestion.options.forEach((option, index) => {
    const optionElement = document.createElement("div");
    optionElement.className = "option";
    optionElement.textContent = option;
    optionElement.addEventListener("click", () => selectOption(option));
    optionsElement.appendChild(optionElement);
  });
}

function selectOption(option) {
  const userAnswer = option;
  const correctAnswer = questions[currentQuestionIndex].answer;
  if (userAnswer === correctAnswer) {
    feedbackElement.textContent = "Correct!";
    feedbackElement.className = "correct";
    score++;
  } else {
    feedbackElement.textContent = "Incorrect!";
    feedbackElement.className = "incorrect";
  }
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    displayQuestion();
  } else {
    showScore();
  }
}

function showScore() {
  quiz.style.display = "none";
  scoreElement.textContent = `Your score: ${score}/${questions.length}`;
}

submitButton.addEventListener("click", () => {
  submitButton.disabled = true;
  selectOption(optionsElement.querySelector(".selected").textContent);
});

displayQuestion();
