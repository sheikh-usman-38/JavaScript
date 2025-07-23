// for of loops
// ["","",""];
// [{},{},{}];

// Iteration means repeating something again and again — like running a loop.
//++++++++++++++++++++++++++++Iterator++++++++++++++++++++++++++++++
//An iterator is a tool/object that remembers where you are in a loop and gives values one by one

// for of loop is used to iterate over iterable objects like arrays, strings, etc.

let superHeroes = ["Batman", "Superman", "Spiderman", "Ironman"];
for (let hero of superHeroes) {
   // console.log("Superhero: " + hero); // Print each superhero
}

const greeting = "Hello, World!";
for (let greet of greeting) {
   // console.log(greet); // Print each character in the string
}

//************************Map*************************/
//Map is a special object in JavaScript that stores key-value pairs
//  — just like an object, but better in some ways.
//Syntax:    ==>   const map = new Map();
//Map is iterable, so we can use for of loop directly on it

const map = new Map();
map.set("PK", "Pakistan");
map.set("IN", "India");
map.set("US", "United States");
map.set("UK", "United Kingdom");
map.set("Pk", "Pakistan");
//console.log(map); // Print the entire map

for(let [key, value] of map) {
    //console.log(`Key: ${key}, Value: ${value}`); // Print each key-value pair
}


// We just come out key and value of map object using for of loop In other Objects its not possible

//Example:
let myObject ={
    name: "John",
    age: 30,
    city: "New York"

}
for (let [key, value] of myObject) {
   // console.log(`Key: ${key}, Value: ${value}`);      //myObject is not iterable give Error
}

