const scoreBoard_div= document.querySelectorAll('scoreBoard');
let humanScore = 0;
let compScore = 0;
const humanScore_span = document.getElementById('humanScore');
const compScore_span = document.getElementById('compScore');
const results_p = document.querySelector('.results > p');
const playAgain = document.getElementById('playAgain');
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');

//Computer's choice
function getComputerChoice(){
    const options = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() *3);
    return options[randomNumber];
}

//winner
function winner(humanChoice, computerChoice) {
    humanScore++;
    humanScore_span.innerHTML=humanScore;
    compScore_span.innerHTML = compScore;
    document.getElementById(humanChoice).classList.add('winGlow');
    document.getElementById(computerChoice).classList.add('looseGlow');

    setTimeout(function() {document.getElementById(humanChoice).classList.remove('winGlow')}, 2000);
    setTimeout(function() {document.getElementById(computerChoice).classList.remove('winGlow')}, 2000);

}
//loser
function loser(humanChoice, computerChoice) {
    compScore++;
    humanScore_span.innerHTML=humanScore;
    compScore_span.innerHTML = compScore;
    document.getElementById(humanChoice).classList.add('loseGlow');
    document.getElementById(computerChoice).classList.add('loseGlow');
    setTimeout(function() {document.getElementById(humanChoice).classList.remove('loseGlow')}, 2000);
    setTimeout(function() {document.getElementById(computerChoice).classList.remove('loseGlow')}, 2000);

}
// //Draw
function draw(humanChoice, computerChoice) {
   results_p.innerHTML = `Its a Draw!`
}
 //Winner : the logics using Switch and case!
function getWinner(humanChoice) {
    const computerChoice = getComputerChoice();
    switch (humanChoice + computerChoice) {
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
            winner(humanChoice, computerChoice);
            break;
        case 'rockpaper':
        case 'paperscissors':
        case 'scissorsrock':
            loser(humanChoice, computerChoice)
            break;
         case 'rockrock':
         case 'paperpaper':
         case 'scissorsscissors':
             draw(humanChoice, computerChoice)
              break;
    }
}

function main() {
    rock_div.addEventListener('click', () => getWinner("rock"));

    paper_div.addEventListener('click',() => getWinner("paper"));

    scissors_div.addEventListener('click', () => getWinner("scissors"));

}
main();