  //Create Variables
  let playerSelection;
  let computerSelection;
  var roundResults = playRound();
  let playerScore = 0;
  let computerScore = 0;
  

  //Create DOM Variables
  const displayPlayerScore = document.getElementById('playerScoreboard');
  const displayRoundUpdates = document.getElementById('playUpdates');
  const displayComputerScore = document.getElementById('computerScoreboard');
  const buttonSelect = document.querySelectorAll('.btn');
    
  //Create EventListener
  buttonSelect.forEach(button => button.addEventListener('click', playerPlay));

  //Player Selection and Play 5 rounds
  function playerPlay(e) {
    if (playerScore < 5 && computerScore < 5) {
    playerSelection = (e.target.id);
    computerPlay();
    playRound();
    displayPlayerScore.textContent = playerScore;
    displayComputerScore.textContent = computerScore;
    displayRoundUpdates.textContent = roundResults;
    }
    checkWinner();
  };

  //Check for winner to display final results(prevents click one last time to show results)
  function checkWinner() {
    if (playerScore === 5) { 
      displayRoundUpdates.textContent = "Congratulations. You won 5 rounds"; 
    } else if (computerScore === 5) {
      displayRoundUpdates.textContent = "Oh no, the computer beat you in 5 rounds";
    }
  }

  //Create a random variable for the computer
  function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3);
      if (randomNumber < 1) {
      return computerSelection = "rock";
    } else if (randomNumber < 2) {
      return computerSelection = "paper";
    } else if (randomNumber < 3) {
      return computerSelection = "scissor";
    } else {
      return computerSelection = "error";
    }
  };
  
  //Comparing the two arguments to see who won the round and tracking player score
  function playRound() {
    if (computerSelection === playerSelection) {
    return roundResults = `You both choose ${playerSelection}, it is a tie`;
    } else if (computerSelection === "rock" && playerSelection === "scissor") {
      computerScore++;
      return roundResults = `You lost! Rock breaks scissor!`; 
    } else if (computerSelection === "paper" && playerSelection === "rock") {
      computerScore++;
      return roundResults = `You lost! Paper covers rock!`;
    } else if (computerSelection === "scissor" && playerSelection === "paper") {
      computerScore++;
      return roundResults = `You lost! Scissor cuts paper!`;  
    } else if (computerSelection === "rock" && playerSelection === "paper") {
      playerScore++;
      return roundResults = `You won! Paper covers rock!`;
    } else if (computerSelection === "paper" && playerSelection === "scissor") {
      playerScore++;
      return roundResults = `You won! Scissor cuts paper!`;
    } else if (computerSelection === "scissor" && playerSelection === "rock") {
      playerScore++;
      return roundResults = `You won! Rock breaks scissor!`; 
    } else {
      return roundResults = "Round 1, FIGHT!";
    }
  };