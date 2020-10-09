randomNumber1 = Math.ceil(Math.random() * 6);
randomNumber2 = Math.ceil(Math.random() * 6);

randomPic1 = "images/dice" + randomNumber1 + ".png";
randomPic2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img1").setAttribute("src",randomPic1);
document.querySelector(".img2").setAttribute("src",randomPic2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
