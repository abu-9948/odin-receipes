
  let playerScore = 0;
  let computerScore = 0;
  let playerSelection;
  let computerSelection;


  function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      return "Draw";
    } else if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
    ) {
      playerScore++;
      return "You win! " + playerSelection + " beats " + computerSelection;
    } else {
      computerScore++;
      return "You lose! " + computerSelection + " beats " + playerSelection;
    }
  }

  function getComputedChoice() {
    let rps = ["rock", "paper", "scissors"];
    let random = rps[Math.floor(Math.random() * rps.length)];
    return random;
  }

  function game() {
    let computerSelection = getComputedChoice();
    let playerSelection = prompt("Enter your choice: ");
    let roundResult = playRound(playerSelection, computerSelection);
    updateResult(roundResult);

    if (playerScore === 5 || computerScore === 5) {
      announceWinner();
    }
  }

  const rockBtn = document.querySelector("#btn1");
  const paperBtn = document.querySelector("#btn2");
  const scissorsBtn = document.querySelector("#btn3");
  const playAgainBtn = document.querySelector("#btn4");
  const resultDiv = document.querySelector("#result");
  const scoreDiv = document.querySelector("#score");

  rockBtn.addEventListener("click", function () {
    playGame("rock");
  });

  paperBtn.addEventListener("click", function () {
    playGame("paper");
  });

  scissorsBtn.addEventListener("click", function () {
    playGame("scissors");
  });

  playAgainBtn.addEventListener("click", function () {
    resetGame();
  });

  function playGame(pick) {
    computerSelection = getComputedChoice();
    let roundResult = playRound(pick, computerSelection);
    updateResult(roundResult);
    updateScore();
    if (playerScore === 5 || computerScore === 5) {
      announceWinner();
    }
  }

  function resetGame() {
    playerScore = 0;
    computerScore = 0;
    updateResult("");
    updateScore();
  }

  function updateResult(message) {
    resultDiv.textContent = message;
  }

  function announceWinner()
  {
    if(playerScore==5)
    {
      resultDiv.textContent="victory is yours";
    }else
    {
      resultDiv.textContent="you lost to a computer";
    }
  }

  
  function updateScore() {
    document.getElementById("score").textContent = " You : " + playerScore ;
    document.getElementById("score2").textContent = " Computer : " + computerScore ;

  }

 

