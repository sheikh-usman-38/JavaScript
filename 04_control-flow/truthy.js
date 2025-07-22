const userEmail = [];
if(userEmail) {
  console.log("User email exists");// User email exists
}else {
    console.log("User email does not exist");
    }
//***********************Truthy and Falsy Values********************/
//In JavaScript, every value is either truthy or falsy when checked inside a condition like if()

    /*
Truthy Values:
Example	Type
true	                Boolean
"hello"	              Non-empty string
42	                  Number
[]	                  Empty array
{}	                  Empty object
function(){}	        Function
*/


/*
Falsy Values (Only 7):

Value	Type:
false	                Boolean false
0	                    Number zero
-0	                  Negative zero
""	                  Empty string
null	                Null value
undefined	            Undefined value
NaN	                  Not a number

🟥 Yeh sab false behave karte hain in if conditions.

*/
if(userEmail.length ===0){
  console.log("User email is empty");// User email is empty
}

const emptyObject = {};
// Checking if an object is empty
//Object.keys() returns an array of a given object's
if(Object.keys(emptyObject).length === 0){
  console.log("Object is empty");// Object is empty
}

// false == 0    => true
// false == ""   => true
// 0 == ""       => true

//Nullish Coalescing Operator (??): null , undefined ko check karta hai
//?? operator returns the right-hand value only if the left-hand value is null or undefined

const userName = null ?? "Guest";
const userAge = undefined ?? 18 ?? 25;
console.log(userAge); // 18
console.log(userName); // Guest

//Turnary Operator 
//Ternary operator is a short form of if-else statement.

const isTeaPrice = 50;
isTeaPrice >= 40 ? console.log("Tea is expensive") : console.log("Tea is affordable");//Tea is expensive