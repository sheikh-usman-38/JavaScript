const randomNum = parseInt(Math.floor(Math.random()*100 +1));
console.log(randomNum);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHigh = document.querySelector(".lowOrHi");
const resultParas = document.querySelector(".resultParas");

const p = document.createElement('p');

const guessArray = []; //prevGuess
const startVal = 1; //numGuess

const gamePlay = true;

if(gamePlay){
    submit.addEventListener("click",(e)=>{
      e.preventDefault();
     const guess=    parseInt(userInput.value);
     validateGuess(guess);
    })
}

function validateGuess(guess){
     if(isNaN(guess)){
        alert(`Please enter a valid number`);
     }else if(guess < 0){
        alert(`Please enter a number greater than 1`);
     }else if(guess > 100){
        alert(`Please enter a number less than 100`);
     }else{
      guessArray.push(guess);
      if(startVal === 11){
        displayGuess(guess);
        displayMsg(`Game over Random num was ${randomNum}`);
        endGame();
      }else {
         displayGuess(guess);
         checkGuess(guess);
      }
     }

}

function checkGuess(guess){
   if(guess === randomNum){
    displayMsg(`Your Guess is right`);
   }else if(guess > randomNum){
   displayMsg(`your Guess is too high`)
   }else if(guess < randomNum){
    displayMsg(`your Guess is too Low`);
   }
}

function displayGuess(guess){

}
function displayMsg(msg){

}
function newGame(){

}

function endGame(){

}