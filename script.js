// Learning Mode: Display Selected Table
function showTable(number) {
    const table = [];
    for (let i = 1; i <= 12; i++) {
        table.push(`${number} x ${i} = ${number * i}`);
    }
    document.getElementById('table-display').innerHTML = table.join('<br>');
}

// Test Mode: Generate Random Question and Timer
let score = 0;
let timeLeft = 30;
let currentQuestion = {};

function startTest() {
    generateQuestion();
    countdown();
}

function generateQuestion() {
    const num1 = Math.floor(Math.random() * 12) + 1;
    const num2 = Math.floor(Math.random() * 12) + 1;
    currentQuestion = { num1, num2, answer: num1 * num2 };
    document.getElementById('question').innerText = `${num1} x ${num2} = ?`;
}

function submitAnswer() {
    const userAnswer = parseInt(document.getElementById('answer').value);
    if (userAnswer === currentQuestion.answer) {
        score++;
        document.getElementById('feedback').innerText = "Correct!";
    } else {
        document.getElementById('feedback').innerText = "Incorrect!";
    }
    document.getElementById('answer').value = ''; // clear input
    generateQuestion(); // move to next question
}

function countdown() {
    const timer = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timer);
            document.getElementById('score').innerText = `Test Finished! Your score: ${score}`;
        } else {
            document.getElementById('time-left').innerText = timeLeft;
            timeLeft--;
        }
    }, 1000);
}

window.onload = startTest;
