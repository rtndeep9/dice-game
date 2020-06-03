// var playerOneName = prompt("Enter Player One name");
// document.querySelector(".p1").textContent = playerOneName;
// var playerTwoName = prompt("Enter Player Two name");
// document.querySelector(".p2").textContent = playerTwoName;

var playerOneNumber = Math.random();
player1 = Math.floor(playerOneNumber * 6) + 1;

var playerTwoNumber = Math.random();
player2 = Math.floor(playerTwoNumber * 6) + 1;

function diceImage(roll) {
  var path;
  if (roll === 1) {
    path = "images/dice1.png";
  }
  if (roll === 2) {
    path = "images/dice2.png";
  }
  if (roll === 3) {
    path = "images/dice3.png";
  }
  if (roll === 4) {
    path = "images/dice4.png";
  }
  if (roll === 5) {
    path = "images/dice5.png";
  }
  if (roll === 6) {
    path = "images/dice6.png";
  }
  return path;
}

function rollDice(){
  if(player1 > player2){
    document.querySelector("h1").innerHTML = "Player One wins!";
  }
  else if(player1 < player2){
    document.querySelector("h1").innerHTML = "Player Two wins!";
  }
  else if (player1 === player2) {
    document.querySelector("h1").innerHTML = "Draw";
  }
}

rollDice();

var img1 = diceImage(player1);
var img2 = diceImage(player2);
document.querySelector("#img1").setAttribute("src",img1);
document.querySelector("#img2").setAttribute("src",img2);
