// array of questions

let questions = [{
    question: "The film 'Nightmare Before Christmas' was created using physical objects",
    answer: true
}, {
    question: "Matt Damon played a Botanist in the film 'The Martian'",
    answer: true
}, {
    question: "Shaquille O'Neal starred in the film 'Space Jam'",
    answer: false
}, {
    question: "In the original Star Wars trilogy, David Prowse was the actor who physically portrayed Darth Vader",
    answer: true
}, {
    question: "In the original Star Wars trilogy, Alec Guinness provided the voice for Darth Vader",
    answer: false
}, {
    question: "In the film 'Despicable Me' the character 'Gru's' Nationality is Austrian",
    answer: false
}, {
    question: "Actor Tommy Chong has served prison time",
    answer: true
}, {
    question: "In the film 'Snatch', the character 'Mickey O'neil' was actually a bare knuckle boxer and had never acted before in his life or since",
    answer: false
}, {
    question: "'Pulp Fiction' was filmed before a live studio audience",
    answer: false
}, {
    question: "James Cameron's 2012 film 'Avatar' was based on real events",
    answer: false
}]

// quiz variables

let displayQuestion = document.getElementById('question-el')
let questionBtn = document.getElementById('nextQ-btn')
let startBtn = document.getElementById('startgame-btn')
let checkTrueBtn = document.getElementById('checktrue-btn')
let checkFalseBtn = document.getElementById('checkfalse-btn')
let scoreEl = document.getElementById('scorebox-el')
let currentQuestion = 0
currentScore = 0

// event listeners

startBtn.addEventListener('click', function() {
    startGame()
})
questionBtn.addEventListener('click', function() {
    nextQuestion()
})
checkTrueBtn.addEventListener('click', function() {
    checkTrue()
})
checkFalseBtn.addEventListener('click', function() {
    checkFalse()
})

function startGame() {

}

function nextQuestion() {

}

function checkTrue() {

}

function checkFalse() {

}

function endGame() {

}