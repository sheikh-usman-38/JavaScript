let score = "33abc";

console.log(typeof score); //String
console.log(typeof (score));  //Both way are correct to write code

let valueInNumber = Number(score); // Even its type convert to number but 
// when we print score then it say NAN
console.log(valueInNumber);  //print Not a Number
console.log(typeof valueInNumber); //Number

//when we covert "33" so it covert in Number 33.
//when we convert "123abc" so it donot convert it give value NAN.
// TRUE value convert to 1 & FALSE value convert to 0.

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);

console.log(isLoggedIn);
console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "usman" => true
let someNumber =33;
let stringNumber = Number(someNumber);
console.log(stringNumber);//33
console.log(typeof stringNumber);//String