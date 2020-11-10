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
      "Either the body or the head",
      "Neither the body nor the head",
    ],
    correctIndex: 0,
  },
  {
    question: 'Which of the following would show the user "Hello World"?',
    answers: [
      'alert("Hello World")',
      'msgBox("Hello World")',
      'msg("Hello World")',
      'alertBox("Hello World")',
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

 ///////////////////
// var declarations
const startBtn = document.querySelector("#start-btn");
const startPrompt = document.querySelector("#start-prompt");
const qandaContainer = document.querySelector("#qanda-container");
const questionText = document.querySelector("#question-text");
const answerDiv = document.querySelector("#answers");
const formContainer = document.querySelector('#form-container');
const submitBtn = document.querySelector('#submit-btn');
const userInits = document.querySelector('#user-inits');
const leaderboardEl = document.querySelector('#leaderboard');
const timeRemaining = document.querySelector('#time');
const rightWrong = document.querySelector('#right-wrong');
const timerEl = document.querySelector('.timer');
const finalScoreEl = document.querySelector('#final-score');
let score = 0;
let questionIndex = 0;
let t = 74;

 //////////////////
// event listeners
startBtn.addEventListener("click", handleStartClick);
answerDiv.addEventListener("click", handleAnswerClick);
submitBtn.addEventListener('click', e => {
  e.preventDefault();
  let user = {
    initials: userInits.value,
    score: score
  }
  let storedUser = JSON.parse(localStorage.getItem('myScores')) || [];
  storedUser.push(user);
  localStorage.setItem('myScores', JSON.stringify(storedUser));

  window.location.replace('leaders.html');
  // const li = document.createElement('li');
  // li.textContent = `${storedUser['initials']} — ${storedUser['score']}`;
  // leaderboardEl.appendChild(li);
});

 ///////////////////////
// function definitions
function handleAnswerClick(e) {
  e.preventDefault();
  if (!e.target.matches("button")) return;
  // check for correct answer
  // store user answer
  const userAnswer = e.target.textContent;
  // retrieve current questions
  const currentQuestion = questions[questionIndex];
  // access correct answer
  const correctAnswer = currentQuestion.answers[currentQuestion.correctIndex];
  // compare the answers for equality
  if (userAnswer === correctAnswer) {
    // if equal, display 'correct' and move on <--<--<--<--<--<--<--<--<--<-- TODO
    // const correctMsg = document.createElement('p');
    // correctMsg.textContent = 'Right!';
    rightWrong.textContent = 'Right!'



  } else {
    // else t -= 10, display 'wrong', and move on <--<--<--<--<--<--<--<--<-- TODO
    rightWrong.textContent = 'Wrong! -10s'
    t -= 10;

  }
  questionIndex++;
  // do we have more questions??
  if (questionIndex === questions.length) { renderScoreForm(); 
  } else {
    // else render question
    renderQuestion();
  }
}

function handleStartClick(e) {
  // start timer <--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<--<-- TODO
  // hide startPrompt
  startPrompt.style.display = "none";
  // display qandaContainer
  qandaContainer.style.display = "block";

  renderQuestion();
  startTimer();
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

// displays form at game's end
function renderScoreForm() {
  score = timeRemaining.textContent;
  timerEl.style.display = 'none';
finalScoreEl.textContent = score;
  // clear previous content
  qandaContainer.style.display = 'none';
  // display game over score form
  formContainer.style.display = 'block';
}

// starts the timer countdown
function startTimer() {
  setInterval(() => {
    if (t >= 0) {
      timeRemaining.textContent = t;
      t--;
    } else {
    //   clearInterval(startTimer);
    //   renderScoreForm();
    }
  }, 1000);
}
