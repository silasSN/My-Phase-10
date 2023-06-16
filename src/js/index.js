const buttonP1 = document.querySelector('.phase-button-p1');
const buttonP2 = document.querySelector('.phase-button-p2');
const buttonP3 = document.querySelector('.phase-button-p3');
const buttonP4 = document.querySelector('.phase-button-p4');
const buttonP5 = document.querySelector('.phase-button-p5');
const buttonP6 = document.querySelector('.phase-button-p6');

const outputP1 = document.querySelector('.new-phase-p1');
const outputP2 = document.querySelector('.new-phase-p2');
const outputP3 = document.querySelector('.new-phase-p3');
const outputP4 = document.querySelector('.new-phase-p4');
const outputP5 = document.querySelector('.new-phase-p5');
const outputP6 = document.querySelector('.new-phase-p6');

const resetGame = document.querySelector('.reset-game');

const player1 = document.querySelector('.player1');
const player2 = document.querySelector('.player2');
const player3 = document.querySelector('.player3');
const player4 = document.querySelector('.player4');
const player5 = document.querySelector('.player5');
const player6 = document.querySelector('.player6');

const currentPhaseP1 = document.querySelector('.p1-current-phase');
const currentPhaseP2 = document.querySelector('.p2-current-phase');
const currentPhaseP3 = document.querySelector('.p3-current-phase');
const currentPhaseP4 = document.querySelector('.p4-current-phase');
const currentPhaseP5 = document.querySelector('.p5-current-phase');
const currentPhaseP6 = document.querySelector('.p6-current-phase');

const phase = [ // add more phases here if wanted
    '3 sets of 3',
    'A run of 9',
    '9 cards of one color',
    'A run of 5 in one color',
    '2 sets of 5',
    'A run of 10',
    '5 sets of 2',
    '2 sets of 3 and a set of 4',
    'Set of 5 and a run of 4 in one color',
    'Set of 6 and a run of 3 in one color',
    'A run of 8',
    'A run of 11',
    'A run of 7 and a set of 4',
    'A run of 4 and a run of 4 in one color',
    'A run of 4 in different colors'
]

buttonP1.addEventListener("click", newPhaseP1);
buttonP2.addEventListener("click", newPhaseP2);
buttonP3.addEventListener("click", newPhaseP3);
buttonP4.addEventListener("click", newPhaseP4);
buttonP5.addEventListener("click", newPhaseP5);
buttonP6.addEventListener("click", newPhaseP6);
resetGame.addEventListener("click", gameReset);



function newPhaseP1 () {
    const choice = Math.floor(Math.random() * phase.length);
    const newPhase = phase[choice]
    outputP1.innerText = `${newPhase}`
}
function newPhaseP2 () {
    const choice = Math.floor(Math.random() * phase.length);
    const newPhase = phase[choice]
    outputP2.innerText = `${newPhase}`
}
function newPhaseP3 () {
    const choice = Math.floor(Math.random() * phase.length);
    const newPhase = phase[choice]
    outputP3.innerText = `${newPhase}`
}
function newPhaseP4 () {
    const choice = Math.floor(Math.random() * phase.length);
    const newPhase = phase[choice]
    outputP4.innerText = `${newPhase}`
}
function newPhaseP5 () {
    const choice = Math.floor(Math.random() * phase.length);
    const newPhase = phase[choice]
    outputP5.innerText = `${newPhase}`
}
function newPhaseP6 () {
    const choice = Math.floor(Math.random() * phase.length);
    const newPhase = phase[choice]
    outputP6.innerText = `${newPhase}`
}

function gameReset () {
    outputP1.innerText = `New Phase...`
    outputP2.innerText = `New Phase...`
    outputP3.innerText = `New Phase...`
    outputP4.innerText = `New Phase...`
    outputP5.innerText = `New Phase...`
    outputP6.innerText = `New Phase...`
    player1.value = `Player 1`
    player2.value = `Player 2`
    player3.value = `Player 3`
    player4.value = `Player 4`
    player5.value = `Player 5`
    player6.value = `Player 6`
    currentPhaseP1.value = '1'
    currentPhaseP2.value = '1'
    currentPhaseP3.value = '1'
    currentPhaseP4.value = '1'
    currentPhaseP5.value = '1'
    currentPhaseP6.value = '1'
}