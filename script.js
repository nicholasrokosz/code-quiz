const questions = [
  {
    question: "Inside of which HTML element do we put the JavaScript?",
    answers: ["<js>", "<scripting>", "<javascript>", "<script>"],
    correctIndex: 3,
  },
  {
    question: "Where is the correct place to insert a link to a .js file?",
    answers: [
      "The body",
      "The head",
      "Either the boday or the head",
      "Neither the boday nor the head",
    ],
    correctIndex: 0,
  },
  {
    question: 'Which of the following would show the user "Hello World"?',
    answers: [
      'alert("Hello World")',
      'msgBox("Hello World")',
      'msg("Hello World")',
      'alerBox("Hello World")',
    ],
    correctIndex: 0,
  },
  {
    question: "Which of the following defines a function in JavaScript?",
    answers: [
      "function=myFunction()",
      "function myFunction()",
      "function:myFunction()",
      "def myFunction()",
    ],
    correctIndex: 1,
  },
  {
    question: "How can you add a comment in a JavaScript?",
    answers: [
      "/* This is a comment */",
      ";;; This is a comment",
      "// This is a comment",
      "# This is a comment",
    ],
    correctIndex: 2,
  },
];

let questionIndex = 0;
const startBtn = document.querySelector("#start-btn");
const startPrompt = document.querySelector("#start-prompt");
const qandaContainer = document.querySelector("#qanda-container");
const questionText = document.querySelector("#question-text");
const answerDiv = document.querySelector("#answers");

// registering event handlers
startBtn.addEventListener("click", handleStartClick);
answerDiv.addEventListener("click", handleAnswerClick);

function handleAnswerClick(e) {
  e.preventDefault();
  if (!e.target.matches("button")) return;
  // check for correct answer
  // store user answer
  const userAnswer = e.target.textContent;
  // retrieve current questions
  const currentQuestion = questions[questionIndex];
  // access correct answer
  const correctAnswer = currentQuestion.answers[currentQuestion.correctIndex]; // <-- ??????????
  // compare the answers for equality
  if (userAnswer === correctAnswer) {
    // if correct, move onto next question

  } else {
    // else t -= 10 and move on

  }
  questionIndex++;
  // do we have more questions??
  if (questionIndex === questions.length) { renderScoreForm(); };
  // else render question
  renderQuestion();
}

function handleStartClick(e) {
  // start timer
  // hide startPrompt
  startPrompt.style.display = "none";
  // display qandaContainer
  qandaContainer.style.display = "block";

  renderQuestion();
}

function renderQuestion() {
  // create var for current question
  const currentQuestion = questions[questionIndex];
  // display question text
  questionText.textContent = currentQuestion.question;

  // clear previous answer buttons
  answerDiv.innerHTML = '';
  // create a button for each answer option
  for (let i = 0; i < currentQuestion.answers.length; i++) {
    // create var to store answer text
    const answer = currentQuestion.answers[i];
    // create btn
    const btn = document.createElement("button");
    btn.setAttribute('class', 'answer-btn');
    // make answer text appear in button
    btn.textContent = answer;
    // append btn element to answers div
    answerDiv.appendChild(btn);
  }
}

function renderScoreForm() {
  // clear previous content
  // add 
}
