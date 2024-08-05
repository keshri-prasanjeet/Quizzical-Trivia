const questions = [
    {
        question: "What is the capital of France?",
        answers: ["Paris", "London", "Rome", "Berlin"],
        correct: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: ["Earth", "Mars", "Jupiter", "Venus"],
        correct: "Mars"
    },
    {
        question: "Who wrote 'Hamlet'?",
        answers: ["Charles Dickens", "Mark Twain", "William Shakespeare", "J.K. Rowling"],
        correct: "William Shakespeare"
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correct: "Pacific Ocean"
    },
    {
        question: "What year did the Titanic sink?",
        answers: ["1912", "1905", "1898", "1923"],
        correct: "1912"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const questionContainer = document.getElementById('question-container');
    const questionElement = document.getElementById('question');
    const answersElement = document.getElementById('answers');

    questionElement.textContent = questions[currentQuestionIndex].question;
    answersElement.innerHTML = '';

    questions[currentQuestionIndex].answers.forEach(answer => {
        const button = document.createElement('button');
        button.classList.add('answer-btn');
        button.textContent = answer;
        button.onclick = () => selectAnswer(button);
        answersElement.appendChild(button);
    });

    fadeInElements();
}

function selectAnswer(button) {
    const selectedAnswer = button.textContent;
    const correctAnswer = questions[currentQuestionIndex].correct;

    if (selectedAnswer === correctAnswer) {
        score++;
        button.style.backgroundColor = '#4CAF50';
    } else {
        button.style.backgroundColor = '#F44336';
    }

    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            showResults();
        }
    }, 1000);
}

function nextQuestion() {
    loadQuestion();
}

function fadeInElements() {
    document.querySelectorAll('.fade-in').forEach(element => {
        element.style.opacity = 0;
        setTimeout(() => {
            element.style.opacity = 1;
        }, 100);
    });
}

function showResults() {
    const questionContainer = document.getElementById('question-container');
    questionContainer.innerHTML = `<h2 class="fade-in">You scored ${score} out of ${questions.length}</h2>`;
    document.getElementById('next-btn').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    loadQuestion();
});