// while loop
let i = 0;
while(i<10){
    console.log("Iteration number: " + i); // Value of i is 0 to 9
    i++;
    //i= i + 2; // Incrementing i by 2
} 

let superHero =["Batman", "Superman", "Spiderman", "Ironman"];
let j = 0; //Initial value of j
while(j < superHero.length){// Loop through the array
    console.log("Superhero: " + superHero[j]); // Print each superhero
    j++;// Increment j to move to the next superhero
}

//do...while loop means:
//“Pehle kaam karo, phir check karo condition.”

let score = 0;
do{
    console.log("Score is: " + score); // This will execute at least once
    score++; // Increment score
}while(score < 10); // This will run until score is less than 10


let run = 12;
do{
    console.log("Run is: " + run); // This will execute at least once Run is: 12
    run++; // Increment score
}while(run < 10); 