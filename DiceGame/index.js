var randomNumber1 = 5;
var randomNumber2 = 2;
var result = "";

function rollTheDice() {

  randomNumber1 = getRandomNumber();
  randomNumber2 = getRandomNumber();
  showTheDice();

  if (randomNumber1 === randomNumber2) {
    result = "Draw!";
  } else if (randomNumber1 > randomNumber2) {
    result = "<i class='fas fa-flag-checkered'></i> Player 1 Wins!";
  } else {
    result = "Player 2 Wins! <i class='fas fa-flag-checkered'></i>";
  }
  document.querySelector("h1").innerHTML = result;
}

function getRandomNumber() {
  return Math.floor(Math.random() * 6) + 1;
}

function getDiceSource(number) {
  return "images/dice" + number + ".png";
}

function showTheDice() {
  document.querySelector(".img1").setAttribute('src', getDiceSource(randomNumber1));
  document.querySelector(".img2").setAttribute('src', getDiceSource(randomNumber2));
}

document.querySelector(".roll").addEventListener("click", rollTheDice)
