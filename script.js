'use strict';
const secretNumber = Math.trunc(Math.random()*20) +1
document.querySelector(".number").textContent = secretNumber
let score = 20
document.querySelector('.check').addEventListener('click',function(){
    const guess = Number(document.querySelector(".guess").value);
    // console.log(secratNumber)
    if(!guess){
        document.querySelector(".message").textContent = "⛔️  No Number "
    } else if(guess === secretNumber){
        document.querySelector(".message").textContent = '🚀 Correct Number!'
    }else if(guess < secretNumber){
        document.querySelector(".message").textContent = "📉 Too low!"
        score = score -1
        document.querySelector(".")
    }else if(guess > secretNumber){
        document.querySelector(".message").textContent = "📈 Too high"
    }


}) 