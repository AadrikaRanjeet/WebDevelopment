var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomDiceSource = "images/" + randomDiceImage;

var image = document.querySelector(".img1"); 

image.setAttribute("src", randomDiceSource);

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomImage2="dice"+randomNumber2+".png";
var randomDiceSource2="images/"+randomImage2;

var image1 = document.querySelector(".img2");

image1.setAttribute("src", randomDiceSource2);

if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML="Player1 Wins!";
}
else
{
    document.querySelector("h1").innerHTML="Player2 Wins!";
}
if(randomNumber1==randomNumber2)
{
    document.querySelector("h1").innerHTML="Draw";
}

