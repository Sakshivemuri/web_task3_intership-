const questions = [
    {
      question: "What color is the sky?",
      answers: [
        { text: "Blue", correct: true },
        { text: "Green", correct: false },
        { text: "Red", correct: false },
      ],
    },
    {
      question: "What’s 2 + 2?",
      answers: [
        { text: "3", correct: false },
        { text: "4", correct: true },
        { text: "22", correct: false },
      ],
    },
    {
      question: "What’s the capital of France?",
      answers: [
        { text: "Berlin", correct: false },
        { text: "Paris", correct: true },
        { text: "Madrid", correct: false },
      ],
    },
  ];
  
  const questionEl = document.getElementById("question");
  const answerButtonsEl = document.getElementById("answerButtons");
  const nextBtn = document.getElementById("nextBtn");
  const scoreText = document.getElementById("scoreText");
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerText = "Next ➡️";
    showQuestion();
  }
  
  function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionEl.innerText = currentQuestion.question;
  
    currentQuestion.answers.forEach((answer) => {
      const btn = document.createElement("button");
      btn.innerText = answer.text;
      btn.classList.add("btn");
      if (answer.correct) btn.dataset.correct = answer.correct;
      btn.addEventListener("click", selectAnswer);
      answerButtonsEl.appendChild(btn);
    });
  }
  
  function resetState() {
    nextBtn.style.display = "none";
    answerButtonsEl.innerHTML = "";
  }
  
  function selectAnswer(e) {
    const selectedBtn = e.target;
    const correct = selectedBtn.dataset.correct === "true";
  
    if (correct) {
      score++;
      selectedBtn.style.backgroundColor = "#7fff7f";
    } else {
      selectedBtn.style.backgroundColor = "#ff7f7f";
    }
  
    Array.from(answerButtonsEl.children).forEach((btn) => {
      btn.disabled = true;
    });
  
    nextBtn.style.display = "inline-block";
  }
  
  nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showScore();
    }
  });
  
  function showScore() {
    resetState();
    questionEl.innerText = `🎉 You scored ${score} out of ${questions.length}!`;
    scoreText.innerText = "Refresh the page to play again.";
    nextBtn.style.display = "none";
  }
  
  startQuiz();
  