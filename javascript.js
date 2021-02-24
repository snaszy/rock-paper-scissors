
 


  //Create eventListener
  //const buttonSelect = document.querySelectorAll('button');
  //buttonSelect.forEach((button) => button.addEventListener('click', playRound));
  /*addGlobalEventListener('click', 'button', e => {
    console.log(button);
  });
  function addGlobalEventListener(type, selector, callback) {
    document.addEventListener(type, e => {
      if (e.target.matches(selector)) callback(e)
    })
  }*/

  //Create Variables
  let playerScore = 0;
  let computerScore = 0;
  let playerSelection = "";
  let computerSelection = computerPlay();
  let roundResults = playRound();
  

  //Player Selection
  window.addEventListener('click', function(e) {
    if (e.target.classList.value === 'rock') {
      playerSelection = "rock";
    } else if (e.target.classList.value === 'paper') {
      playerSelection = "paper";
    } else if (e.target.classList.value === 'scissors') {
      playerSelection = "scissors";
    }
   return playerSelection;
  });

  //Create a random variable for the computer
  function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3);
      if (randomNumber < 1) {
      return "rock";
    } else if (randomNumber < 2) {
      return "paper";
    } else if (randomNumber < 3) {
      return "scissor";
    } else {
      return "error";
    }
  };
  
  //Comparing the two arguments to see who won the round and tracking player score
  function playRound(computerSelection, playerSelection) {
    if (computerSelection === playerSelection) {
    return `You both choose ${playerSelection}, it is a tie`;
    } else if (computerSelection === "rock" && playerSelection === "scissor") {
      computerScore++;
      return `You lost! Rock breaks scissor!`; 
    } else if (computerSelection === "paper" && playerSelection === "rock") {
      computerScore++;
      return `You lost! Paper covers rock!`;
    } else if (computerSelection === "scissor" && playerSelection === "paper") {
      computerScore++;
      return `You lost! Scissor cuts paper!`;  
    } else if (computerSelection === "rock" && playerSelection === "paper") {
      playerScore++;
    return `You won! Paper covers rock!`;
    } else if (computerSelection === "paper" && playerSelection === "scissor") {
      playerScore++;
    return `You won! Scissor cuts paper!`;
    } else if (computerSelection === "scissor" && playerSelection === "rock") {
      playerScore++;
    return `You won! Rock breaks scissor!`; 
    } else {
    return "You didn't choose a correct option";
    }
  };

  //Start the Round
  document.addEventListener('click', playRound);

  playerScoreboard.innerText = playerScore;
  
  playUpdates.innerText = roundResults;
  
  computerScoreboard.innerText = computerScore;

  //Playerscore to decide who wins at the end
  //let playerScore = 0;
  //Loop for the game for 5 rounds
  /*function game(i) {
    for (let i = 0; i < 5; i++) {
      let computerSelection = computerPlay();
      let playerSelection = window.prompt("Choose Rock, Paper, or Scissor", "Rock").toLowerCase();
      playRound(computerSelection, playerSelection);
      console.log(playRound(computerSelection, playerSelection));
      }
    if (playerScore >= 3) {
      console.log("Game over, you won!");

    } else {
      console.log("Game over, you lost!");
    }
  };*/