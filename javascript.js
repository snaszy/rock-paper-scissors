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
    displayInformation();
    }
    checkWinner();
  };

  //Update DOM to show data
  function displayInformation () {
    displayPlayerScore.textContent = playerScore;
    displayComputerScore.textContent = computerScore;
    displayRoundUpdates.textContent = roundResults;
  }

  //Reset values on the score board
  function resetScoreboard () {
    playerScore = 0;
    computerScore = 0;
    roundResults = "Round 1 - FIGHT!";
    displayInformation();
  }

  //Show the buttons after reset
  function showButtons () {
    buttonSelect.forEach(button => button.setAttribute('data', 'visible'));
    let resetButton = document.getElementById('reset');
    resetButton.setAttribute('data','hidden');
    resetScoreboard();
  }

  //Clear buttons and replace with a reset button
  function clearButtons() {
    buttonSelect.forEach(button => button.setAttribute('data', 'hidden'));
    let resetButton = document.getElementById('reset');
    resetButton.setAttribute('data','visible');
    resetButton.addEventListener('click', showButtons);
  }

  //Check for winner to display final results(prevents click one last time to show results)
  function checkWinner() {
    if (playerScore === 5) { 
      displayRoundUpdates.textContent = "Congratulations. You won 5 rounds"; 
      clearButtons();
    } else if (computerScore === 5) {
      displayRoundUpdates.textContent = "Oh no, the computer beat you in 5 rounds";
      clearButtons();
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