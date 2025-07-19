const marvel_heros =["spiderman", "thor","Ironman"];
const dc_heros = ["superman","flash ","batman"];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);  //[ 'spiderman', 'thor', 'Ironman', [ 'superman','flash','batman'] ]
//console.log(marvel_heros[3][0]); //superman

const allHeros= marvel_heros.concat(dc_heros); 
//console.log(allHeros); //[ 'spiderman', 'thor', 'Ironman', 'superman', 'flash ', 'batman' ]

//++++++++++++++++++++++++++Spread Operator++++++++++++++++++++
/*
The spread operator (...) breaks or opens an array or object and shows all its values one by one
The spread operator (...) is used to copy, combine, or pass values of arrays or objects.
It spreads elements one by one, making code short and clean.
*/
const allNewHeros = [...marvel_heros,...dc_heros];
//console.log(allNewHeros); //[ 'spiderman', 'thor', 'Ironman', 'superman', 'flash ', 'batman' ]


//*********************Flat**************** */
//The flat(depth of array no write/also write Infinity ) method removes extra layers
//  (nested arrays) and makes a single-level array.

const anotherArray = [1,2,3,[4,5,6],4,[67,8,9,[5,8],3]];
const realArray = anotherArray.flat(Infinity);
// console.log(realArray);

//console.log(Array.from("usman")); //[ 'u', 's', 'm', 'a', 'n' ]
//Array.from() is used to convert things that look like arrays 
// (like a string, Set, or Map) into a real array.

console.log(Array.from({name:"usman"}));//[]
//Array.from() only works correctly with something you can loop through,
//  step by step or array-like objects

let  score1 =100;
let score2 =200;
let score3= 300;
console.log(Array.of(score1,score2,score3)); //[ 100, 200, 300 ]