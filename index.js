
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
console.log(randomNumber1);

var randomDiceImage1 = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource1 = "images/" + randomDiceImage1; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6
console.log(randomNumber2);

var randomDiceImage2 = "dice" + randomNumber2 + ".png"; //dice1.png - dice6.png

var randomImageSource2 = "images/" + randomDiceImage2; //images/dice1.png - images/dice6.png

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);

var winner = "";

if (randomNumber1 > randomNumber2){
    winner = "Player 1 is the winner"
}else if (randomNumber2 > randomNumber1){
    winner = "Player 2 is the winner"
}else{
    winner = "The result is a draw"
}


document.getElementById("result").textContent = winner;

