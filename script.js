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
          
            break;
        case "rockscissors":
            result = "You Win! Rock beats Scissors";
            break;
        case "paperpaper":
            result = "Draw! Paper and Paper";
            break; 
        case "paperrock":
            result = "You Win! Paper beats ROCK";
            break; 
        case "paperscissors":
            result = "You Lose! scissors beats Paper";

            break; 
        case "scissorsrock":
            result = "You Lose! Rock beats Scissors";
            break; 
        case "scissorspaper":
            result = "You Win! Scissors beats Paper";

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
function game (){
   
   
    
    
    for (let i = 0; i < 5; i++) {
        
        
        
        do {
          var number = prompt("Please enter 0 for Rock ,/n 1 for Paper ,/n 2 for Scissors", 0);
          var computerSelection = ComputerPlay();
          var playerSelection = Select(number);
          
        } while (number > 2);
        console.log(playerSelection)
        console.log(computerSelection);
        console.log(playRound(playerSelection, computerSelection));
      }

}

  
// //const playerSelection = "rock";

// const computerSelection = ComputerPlay();
// console.log(computerSelection )
// console.log(playRound(playerSelection, computerSelection));
console.log(game())