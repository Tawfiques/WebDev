var randomNumber1= 6*Math.random();
randomNumber1 = Math.floor(randomNumber1) + 1;

var randomNumber2=6*Math.random();
randomNumber2=Math.floor(randomNumber2)+1;

var img1 =document.querySelector(".img1").setAttribute("src","./images/dice"+randomNumber1+".png");

var img2 =document.querySelector(".img2").setAttribute("src","./images/dice"+randomNumber2+".png");

if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerText="Player 1 is the winner";
}
else if (randomNumber1<randomNumber2){
    document.querySelector("h1").innerText="Player 2 is the winner";
}
else if(randomNumber1===randomNumber2){
    document.querySelector("h1").innerText="Draw";
}