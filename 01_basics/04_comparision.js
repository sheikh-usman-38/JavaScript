//console.log(2>1); return value in boolean so ans is true
//console.log(2>=1);
//console.log(2<1);
//console.log(2 == 1);
//console.log(2 != 1);

console.log("2" > 1); // return true
console.log("02" > 1); // return true

//JavaScript Type Conversion Behind the Scenes
//When you use comparison operators like > between different types
//  (e.g., a string and a number), JavaScript automatically converts the string to a number.

// "2" > 1
//"2" is a string, but JavaScript converts it to a number: 2
//Then: 2 > 1 → ✅ true

console.log(null > 0); //false
console.log(null == 0);//false
console.log(null >= 0);//true

//Rule 1: Comparisons (<, >, <=, >=) convert null to a number
// null becomes 0
//So:
//null > 0 ➜ becomes 0 > 0 ➜ false
//null >= 0 ➜ becomes 0 >= 0 ➜ true

//Rule 2: Loose equality (==) treats null and 0 differently
//null == 0 is false
//Because == only equates null to:
//undefined (i.e. null == undefined is true)
//Not to 0, false, or any number

console.log(undefined == 0); //false
console.log(undefined >= 0); //false
console.log(undefined < 0); //false

// === it also check datatype
console.log("2" === 2); //return false because datatypes are not same