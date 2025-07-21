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

