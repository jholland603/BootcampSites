var randomNumber1 = getRandomNumber();
var randomNumber2 = getRandomNumber();
var result = "";

if (randomNumber1 === randomNumber2) {
  result = "Draw!";
} else if (randomNumber1 > randomNumber2) {
  result = "<i class='fas fa-flag-checkered'></i> Player 1 Wins!";
} else {
  result = "Player 2 Wins! <i class='fas fa-flag-checkered'></i>";
}

document.querySelector(".img1").setAttribute('src', getDiceSource(randomNumber1));
document.querySelector(".img2").setAttribute('src', getDiceSource(randomNumber2));

document.querySelector("h1").innerHTML = result;

function getRandomNumber() {
  return Math.floor(Math.random() * 6) + 1;
}

function getDiceSource(number) {
  return "images/dice" + number + ".png";
}
