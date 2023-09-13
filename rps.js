let userScore = 0;
let cpuScore = 0;
let userMove, cpuMove;

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const userScoreDisplay = document.getElementById("user_score");
const cpuScoreDisplay = document.getElementById("cpu_score");
const displayCpuMove = document.getElementById("cpu_move")
userScoreDisplay.textContent = userScore;
cpuScoreDisplay.textContent = cpuScore;
const getRandomMove = () => {
  const moves = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * moves.length);
  displayCpuMove.textContent = "CPU: " + moves[randomIndex].charAt(0).toUpperCase() + moves[randomIndex].slice(1).toLowerCase();
  return moves[randomIndex];
  
};

function updateScore(){
  userScoreDisplay.textContent = userScore;
  cpuScoreDisplay.textContent = cpuScore;
};

function handleClick(selectedMove) {
  //alert(`${selectedMove.charAt(0).toUpperCase() + selectedMove.slice(1)} icon clicked!`);
  userMove = selectedMove;
  cpuMove = getRandomMove();

  if (
    (userMove === "rock" && cpuMove === "scissors") ||
    (userMove === "scissors" && cpuMove === "paper") ||
    (userMove === "paper" && cpuMove === "rock")
  ) {
    userScore++;
  } else if (
    (userMove === "scissors" && cpuMove === "rock") ||
    (userMove === "paper" && cpuMove === "scissors") ||
    (userMove === "rock" && cpuMove === "paper")
  ) {
    cpuScore++;
  }
  else{
    alert("It's a draw")
  }
  updateScore();
};

rock.addEventListener("click", () => handleClick("rock"));
paper.addEventListener("click", () => handleClick("paper"));
scissors.addEventListener("click", () => handleClick("scissors"));