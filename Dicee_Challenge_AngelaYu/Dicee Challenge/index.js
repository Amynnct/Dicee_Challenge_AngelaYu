var images = document.querySelectorAll(".dice img");

var randomNumber1 = Math.ceil(Math.random() * 6);
var randomImageSource1 = "images/" + "dice" + randomNumber1 + ".png";
images[0].setAttribute("src", randomImageSource1);

var randomNumber2 = Math.ceil(Math.random() * 6);
var randomImageSource2 = "images/" + "dice" + randomNumber2 + ".png";
images[1].setAttribute("src", randomImageSource2);

var whoWon = document.querySelector("h1");
if (randomNumber1 > randomNumber2) {
    whoWon.innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
    whoWon.innerHTML = "Player 2 Wins! 🚩";
} else if (randomNumber1 === randomNumber2) {
    whoWon.innerHTML = "Draw!";
}