'use strict';

let randomNumber = Math.trunc(Math.random()*20);
let checkButton = document.querySelector(".check");
let againButton = document.querySelector(".again");
let headerNumber = document.querySelector(".number");
let score = document.querySelector(".score");
let highscore = document.querySelector(".highscore");
let input = document.querySelector(".guess");
let message = document.querySelector(".message");
let body = document.querySelector("body");

console.log(randomNumber);

checkButton.addEventListener("click",function() {
    if(Number(input.value)===randomNumber){        
        headerNumber.textContent=randomNumber;        
        message.textContent="You Won!!!";
        body.style.backgroundColor="green";
        if(highscore.textContent<score.textContent){
            highscore.textContent=highscore.textContent;
        }
        else{
            highscore.textContent=score.textContent;
        }
    }else{
        if(score.textContent>1){
            score.textContent-=1;

            if (Number(input.value)>randomNumber) {
                message.textContent="Upper!";
            }else{
                message.textContent="Lower!";
            }

        }else if(score.textContent<=1){
            score.textContent="Game Over";
            body.style.backgroundColor="#ce2828";
        }        
    }
})

againButton.addEventListener("click",function() {    
    randomNumber = Math.trunc(Math.random()*20);
    body.style.backgroundColor="black";    
    headerNumber.textContent="?";
    score.textContent=20;
    input.value="";
    message.textContent="Start guessing...";
})