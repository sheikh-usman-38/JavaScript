//Use let for changeable values.
// Use const for fixed values.
// Avoid using var (it's old and confusing).

// functional scope (var)
function testVar() {
  if (true) {
    var name = "Usman"; // function scoped
  }
  console.log(name); // ✅ Usman (accessible outside block)
}
testVar();

//block scope(let)
function testLet() {
  if (true) {
    let age = 25; // block scoped
    console.log(age); // ✅ 25
  }
  // console.log(age); // ❌ Error: age is not defined
}
testLet();

// const – Block Scope
function testConst() {
  if (true) {
    const city = "Lahore"; // block scoped
    console.log(city); // ✅ Lahore
  }
  // console.log(city); // ❌ Error: city is not defined
}
testConst();

//******************Example*******************/
// 🌍 Global Scope

var globalVar = "I am global var";
let globalLet = "I am global let";
const globalConst = "I am global const";

console.log("🌍 Global Scope:");
console.log(globalVar);   // ✅
console.log(globalLet);   // ✅
console.log(globalConst); // ✅

if (true) {
  // 📦 Block Scope
  var blockVar = "I am block var";
  let blockLet = "I am block let";
  const blockConst = "I am block const";

  console.log("\n📦 Inside Block:");
  console.log(blockVar);   // ✅
  console.log(blockLet);   // ✅
  console.log(blockConst); // ✅
}

console.log("\n🌍 Outside Block:");
console.log(blockVar);   // ✅ var is function/global scoped (leaks outside block)
// console.log(blockLet);   // ❌ Error: blockLet is block scoped
// console.log(blockConst); // ❌ Error: blockConst is block scoped


//*************************Closure in JavaScript *******************/
//A closure is a function inside another function that can still access the outer function’s variables,
//  even after the outer function has finished running.

function  one(){
  const userName ="Usman";// 🟢 This variable is in parent (one)

  //Parent variable access in child function but child variable not access in parent

  function  two(){
    const website ="youtube";  // 🔵 This variable is in child (two)

    console.log(userName);  // Usman // ✅ Can access userName from parent scope
  }
  // console.log(website); // Here we donot access because we print value in parent function
  two();
}
one();

// Another Example of Closure 
if (true) {
  let userName = "usman";

  if (userName === "usman") {
    let website = "youtube";
    console.log(userName + website); // ✅ Works: 'usmanyoutube'
  }

  //console.log(website); // ❌ Error: website is block scoped
}

//console.log(userName); // ❌ Error: userName is block scoped
/*
let and const are block-scoped, which means:

They only work inside the {} block where they are declared.

But In closure parent variable access in child block but child is not access in parent block
*/


//********************Interesting concept  Hoisting in Js**************************
//JavaScript moves this to the top automatically (called hoisting).
//✅ So, you can call it before it’s written in the code.

console.log(addOne(2)); //3

function addOne(num){
return  num+1
}
//This is a function declaration.
//JavaScript hoists the entire function to the top, so you can use it before it's defined.


//addTwo(2); //But it give error
let addTwo = function(){
  return num+2
}
//Reason:
//❌ JavaScript does NOT move the value up.
//❌ You cannot call it before it's written.
//✅ Works only after the line where it's defined.
//let or const waits. You can’t use it early

//So when you store function in a variable you call after variable otherviews give error.
//But when you make function you call before it declaration it not give error because js
//hoist automatically in first before it run
