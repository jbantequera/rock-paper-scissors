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
    let result;
    let player = playerSelection.toUpperCase();
    let computer = computerSelection.toUpperCase();

    if (player == computer) {
        result = "There's a draw!";
    } else if (player == "ROCK") {
        if (computer == "SCISSORS")
            result = "You Win! Rock beats scissors";
        else   
            result = "You Lose! Paper beats rock";
    } else if (player == "SCISSORS") {
        if (computer == "PAPER")
            result = "You Win! Scissors beats paper";
        else
            result = "You Lose! Rock beats scissors";
    } else if (player == "PAPER") {
        if (computer == "ROCK")
            result = "You Win! Paper beats rock";
        else
            result = "You Lose! Scissors beats paper";
    } else {
        result = "Not a valid choice (" + playerSelection + ")";
    }

    return result;
}

function game(){
    for (let i = 0; i < 5; i++){
        playerSelection = prompt("Rock, paper or scissors?");
        console.log(playRound(playerSelection, computerPlay()));
    }
}

//DOM MANIPULATING
let resultsDiv = document.querySelector('#results');
let rockBtn = document.querySelector('#rock');
let paperBtn = document.querySelector('#paper');
let scissorsBtn = document.querySelector('#scissors');

rockBtn.addEventListener('click', () => {
    let result = document.createElement('p');
    result.textContent = playRound('rock', computerPlay());
    resultsDiv.appendChild(result);
});

paperBtn.addEventListener('click', () => {
    let result = document.createElement('p');
    result.textContent = playRound('paper', computerPlay());
    resultsDiv.appendChild(result);
});

scissorsBtn.addEventListener('click', () => {
    let result = document.createElement('p');
    result.textContent = playRound('scissors', computerPlay());
    resultsDiv.appendChild(result);
});