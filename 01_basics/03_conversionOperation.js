let score = "33abc";

//console.log(typeof score); //String
//console.log(typeof (score));  //Both way are correct to write code

let valueInNumber = Number(score); // Even its type convert to number but 
// when we print score then it say NAN
//console.log(valueInNumber);  //print Not a Number
//console.log(typeof valueInNumber); //Number

//when we covert "33" so it covert in Number 33.
//when we convert "123abc" so it donot convert it give value NAN.
// TRUE value convert to 1 & FALSE value convert to 0.

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);

//console.log(isLoggedIn);
//console.log(typeof booleanIsLoggedIn);
//console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "usman" => true
let someNumber =33;
let stringNumber = Number(someNumber);
//console.log(stringNumber);//33
//console.log(typeof stringNumber);//Number

//************************Operations*****************************
let val = 3;
let negVal = -val;
// console.log(negVal);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2); // 2 ki power 2 is 4
// console.log(2/2);
// console.log(2%2); //Reminder

let name1= "usman";
let name2="Ahmad";
let name3 ="usman" +" Ahmad";
// console.log(name3);

// console.log(1 + "2");//12
// console.log("1"+ 2);//12
// console.log("1"+ "2");//12
// console.log(2+3+"3");//53
// console.log((3+4)*6%10); //2

// console.log(true);// true
// console.log(+true); // 1
// console.log(true+); // So Here Give Error
// console.log(+""); // 0

let num1, num2, num3
num1=num2=num3=2+2;

let generateNum = 100;
generateNum++;//101
console.log(generateNum);
++generateNum;//102
console.log(generateNum);

//link to study
//https://tc39.es/ecma262/multipage/abstract-operations.html