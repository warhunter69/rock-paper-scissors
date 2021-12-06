function ComputerPlay(){

    let rng = Math.floor(Math.random() * 3);

    let choice = "";
    if(rng === 0){
        choice = "rock";
    } else if(rng === 1) {
        choice = "paper";

    }else{
        choice = "scissors";
    }


    return choice;
}

function playRound(playerSelection, computerSelection) {
    let x = playerSelection.concat(computerSelection);
    let result = ""
    switch(x) {
        case "rockrock":
         
            result = "Draw! Rock and Rock";
            break;
        case "rockpaper":
            result = "You Lose! Paper beats Rock";
            cpuScore += 1;
            break;
        case "rockscissors":
            result = "You Win! Rock beats Scissors";
            playerScore += 1;
            break;
        case "paperpaper":
            result = "Draw! Paper and Paper";
            break; 
        case "paperrock":
            result = "You Win! Paper beats ROCK";
            playerScore += 1;
            break; 
        case "paperscissors":
            result = "You Lose! scissors beats Paper";
            cpuScore += 1;
            break; 
        case "scissorsrock":
            result = "You Lose! Rock beats Scissors";
            cpuScore += 1;
            break; 
        case "scissorspaper":
            result = "You Win! Scissors beats Paper";
            playerScore += 1;

            break;
        case "scissorsscissors":
            result = "Draw! Scissors and Scissors";
        
            break;  
    
      }
    return result;
  }
function Select(number){
    let playerSelection;
    console.log(number)
    switch(number) {
        case "0":
            playerSelection = "rock";
            break;
        case "1":
            playerSelection = "paper";
            break;
        case "2":
            playerSelection = "scissors";
            break;
    }
    return playerSelection;

}

var rounds = 0;
var playerScore = 0;
var cpuScore = 0;
function game(playerSelection){
    let computerSelection = ComputerPlay();
    let message = playRound(playerSelection, computerSelection);
    div = document.querySelector('#message')//.innerHTML = message;
    div_scoreBoard = document.querySelector('#scoreBoard').innerHTML = `${playerScore} - ${cpuScore}`
    if(playerScore === 5){
        div.innerHTML = "You Win! cpu loses"
        playerScore=0;
        cpuScore=0;
    }else if(cpuScore === 5){
        div.innerHTML = "You lose! cpu wins"
        playerScore=0;
        cpuScore=0;
    } 
    console.log(playerScore);
}

document.addEventListener('DOMContentLoaded', function() {

    // Use buttons to toggle between views
    document.querySelector('#rock').addEventListener('click', () => game('rock'));
    document.querySelector('#paper').addEventListener('click', () => game('paper'));
    document.querySelector('#scissors').addEventListener('click', () => game('scissors'));
    
  
  });