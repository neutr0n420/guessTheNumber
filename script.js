'use strict';
const secretNumber = generateRandomNumber()

let score = 20
let highScore = 0
document.querySelector('.check').addEventListener('click',function(){
    const guess = Number(document.querySelector(".guess").value);
    // console.log(secratNumber)
    if(!guess){
        document.querySelector(".message").textContent = "⛔️  No Number "
    } else if(guess === secretNumber){
        document.querySelector(".number").textContent = secretNumber
        document.querySelector(".message").textContent = '🚀 Correct Number!'
    }else if(guess < secretNumber){
        document.querySelector(".message").textContent = "📉 Too low!"
        score = score -1
        document.querySelector(".score").textContent = score
    }else if(guess > secretNumber){
        document.querySelector(".message").textContent = "📈 Too high"
        score = score -1
        document.querySelector(".score").textContent = score
    }
    
}) 

function generateRandomNumber(){
    return Math.trunc(Math.random()*20) +1
}


document.querySelector(".again").addEventListener('click', function(){
    document.querySelector(".score").textContent = 20
   const secretNumber = generateRandomNumber()
   document.querySelector(".number").textContent = secretNumber 
    if(score > highScore){

        if(score === 0){
            document.querySelector(".highscore").textContent = 0
            console.log("c")       
        }
        highScore = score
       
        document.querySelector(".highscore").textContent = highScore
    }
    document.querySelector(".guess").value = "";
})
