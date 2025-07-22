/*
Control Flow means the order in which your code runs, line by line.

JavaScript by default runs code top to bottom, one line at a time (just like how you read a book).
But sometimes, you want to control the flow — like:

Skip some lines

Repeat something

Run only if a condition is true

➡️ That's called Control Flow.
*/
//if
if(2==="2"){
    console.log("executed"); // NOT Run because 2 !== 2 
}

const tempurature =41;
if(tempurature === 41){
    console.log("tempurature is less than 50"); //tempurature is less than 50
}else{
     console.log("tempurature is greater than 50"); 
}
console.log("executed"); //executed
//> ,< , <= , >= , ==, != , === , !==

// +++++++++++++++Short hand notation
//Implicit Scope :
//Variable/function belongs to a scope by default — without needing extra keyword or explanation.

//const balance = 1000;
//if(balance >500) console.log("sahi ha"); //sahi ha

// Also right multiple statement run so we add (,).

//if(balance >500) console.log("sahi ha") , console.log("acha");
//output :sahi ha
//acha   but this code is not recommend 

//Nested array
const balance = 1000;

if(balance < 800){
    console.log("balance is less than 800")
}else if(balance < 600){
   console.log("balance is less than 600")
}else{
    console.log("balance is greater than 900"); //balance is greater than 900
}


const userLoggedIn = true;
const debitCard = true;
if(userLoggedIn && debitCard){ // if two statement true than it run otherwise not
    console.log("User have access to watch course");// User have access to watch course
}

let loggedInFromGoogle = false;
let loggedInFromEmail = true;
if(loggedInFromGoogle || loggedInFromEmail){ //(|| ,OR)Agar koi bhi ek condition true ho, toh pura if block run karega.
    console.log("User logged In"); //User logged In
}