let InitScore = 100;
let HighScore = null;
let randomcount = generateRandomInteger(100);
function reloadgame() {
  document.getElementById("guessid").value = "";
  document.querySelector(".score").textContent = 100;
  document.querySelector("#guess").textContent = "Start guessing...";
  document.body.style.backgroundColor = "#222";
  document.querySelector(".count").style.height = "12rem";
  document.querySelector(".count").textContent = "?";
  randomcount = generateRandomInteger(100);
}

function generateRandomInteger(max) {
  return Math.floor(Math.random() * max) + 1;
}

function maincheck() {
  let inputcount = document.querySelector("#guessid").value;
  //    let changvalue=document.querySelector('.score').textContent

  if (InitScore !== 0) {
    if (inputcount > randomcount) {
      document.querySelector(".message").textContent = "Your Guess Is High";
      InitScore--;
      document.querySelector(".score").textContent = InitScore;
    } else if (inputcount < randomcount) {
      document.querySelector(".message").textContent = "Your Guess Is Low";
      InitScore--;
      document.querySelector(".score").textContent = InitScore;
    } else {
      document.querySelector(".message").textContent = "😊 Hurray You Won 😊";
      document.body.style.backgroundColor = "#262626";
      document.body.style.Color = "#ff0023";
      InitScore--;
      document.querySelector(".score").textContent = InitScore;
      document.querySelector(".count").textContent = randomcount;
      document.querySelector(".count").style.height = "10rem";
      HighScore = InitScore;
      document.querySelector(".HighScore").textContent = HighScore;
      document.querySelector(".check").style.visibility = "hidden";
    }
  } else {
    document.querySelector(".message").textContent =
      "Game Over 🙂  your score is 0";
  }
}
