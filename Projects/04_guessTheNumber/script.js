let randomNum = parseInt(Math.floor(Math.random()*100 +1));
console.log(randomNum);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHigh = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement('p');

let guessArray = []; //prevGuess
let startVal = 1; //numGuess

let gamePlay = true;

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
      userInput.value = '';
      guessSlot.innerHTML += `${guess} ,`
      startVal++;
      remaining.innerHTML = `${11 - startVal}`;

}
function displayMsg(msg){
     lowOrHigh.innerHTML = `<h2>${msg}</h2>`;
}


function endGame(){
     userInput.value="";
     userInput.setAttribute("disabled","");
     p.classList.add("button");
     p.innerHTML =`<p id="startGame">Start new Game</p>`;
     startOver.appendChild(p);
     gamePlay = false;
     newGame()
}
function newGame(){
     const newGameButton = document.querySelector("#startGame");
     newGameButton.addEventListener("click",(e)=>{
      randomNum = parseInt(Math.floor(Math.random()*100 +1));
     guessArray = [];
     startVal = 1;
     guessSlot.innerHTML = '';
     remaining.innerHTML = `${11 - startVal}`;
     userInput.removeAttribute("disabled");
     startOver.removeChild(p);
     gamePlay =true
     })

}