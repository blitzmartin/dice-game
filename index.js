const pictures = [];
pictures[0] = "images/dice1.png";
pictures[1] = "images/dice2.png";
pictures[2] = "images/dice3.png";
pictures[3] = "images/dice4.png";
pictures[4] = "images/dice5.png";
pictures[5] = "images/dice6.png";

let randomNumber1;

function getRandomInt(min, max) {
    randomNumber1 = Math.floor(Math.random() * (max - min) + min);
    return randomNumber1; 
}

getRandomInt(1, 6);
document.querySelector(".img1").src = pictures[randomNumber1];
let num1 = randomNumber1;

getRandomInt(1, 6);
document.querySelector(".img2").src = pictures[randomNumber1];
let num2 = randomNumber1;

if (num1 > num2){
    document.querySelector("h1").innerHTML = "🚩Player 1 Won!";
} else if (num1 < num2){
    document.querySelector("h1").innerHTML = "Player 2 Won!🚩";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}