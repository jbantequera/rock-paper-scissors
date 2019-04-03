//GLOBAL VARIABLES
let newGame = true;
let gameDataDiv = document.querySelector('#gamedata');
let playerScoreP = document.querySelector('#playerScore');
let computerScoreP = document.querySelector('#computerScore');
let resultsDiv = document.querySelector('#results');

//FUNCTIONS
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function computerPlay(){
    let numericChoice = getRandomInt(1, 4);
    let stringChoice;

    if (numericChoice == 1)
        stringChoice = "Rock";
    else if (numericChoice == 2)
        stringChoice = "Paper";
    else if (numericChoice == 3)
        stringChoice = "Scissors";
    
    return stringChoice;
}

function playRound(playerSelection, computerSelection){
    let playerScore = parseInt(playerScoreP.textContent);
    let computerScore = parseInt(computerScoreP.textContent);
    
    let player = playerSelection.toUpperCase();
    let computer = computerSelection.toUpperCase();
    let result = "Choice: " + player + " | ";
    let resultP = document.createElement('p');

    if (newGame) {
        gameDataDiv.removeChild(resultsDiv);
        resultsDiv = document.createElement('div');
        resultsDiv.setAttribute("id", "results");
        gameDataDiv.appendChild(resultsDiv);

        computerScore = 0;
        playerScore = 0;
        newGame = false;
    }
    

    if (player == computer) {
        result += "There's a draw!";
        resultP.style.background = "grey";
    } else if ((player == "ROCK" && computer == "SCISSORS") || (player=="PAPER"
     && computer=="ROCK") || (player=="SCISSORS" && computer == "PAPER")) {
        result += "You Win! " + player + " beats " + computer;
        resultP.style.background = "green";
        playerScore++;
    } else {
        result += "You Lose! " + computer + " beats " + player;
        resultP.style.background = "red";
        computerScore++;
    }

    playerScoreP.textContent = playerScore;
    computerScoreP.textContent = computerScore;
    
    resultP.textContent = result;
    resultsDiv.appendChild(resultP);    

    //Check if anyone has won the game
    if (playerScore >= 5) {
        let newGameP = document.createElement('p');
        newGameP.style.background = "cyan";
        newGameP.textContent = "Congratulations! You've won 5 times";
        resultsDiv.appendChild(newGameP);
        newGame = true;
    } else if (computerScore >= 5) {
        let newGameP = document.createElement('p');
        newGameP.style.background = "pink";
        newGameP.textContent = "Oops! You've lost 5 times, good luck next time";
        resultsDiv.appendChild(newGameP);
        newGame = true;
    }
}

// DEPRECATED!
function game(){
    for (let i = 0; i < 5; i++){
        playerSelection = prompt("Rock, paper or scissors?");
        console.log(playRound(playerSelection, computerPlay()));
    }
}

//DOM MANIPULATING
let rockBtn = document.querySelector('#rock');
let paperBtn = document.querySelector('#paper');
let scissorsBtn = document.querySelector('#scissors');

rockBtn.addEventListener('click', () => playRound("rock", computerPlay()));
paperBtn.addEventListener('click', () => playRound("paper", computerPlay()));
scissorsBtn.addEventListener('click', () => playRound("scissors", computerPlay()));