const score =400;
// console.log(score); //400

const balance = new Number(100);
// console.log(balance);//[Number: 100]

// console.log(balance.toString().length);//3
// console.log(balance.toFixed(2));//100.00 
//***************toPrecision***********************/
//toPrecision() is a method used to round a number to a specific number of total digits
const otherNumb = 1123.890;
// console.log(otherNumb.toPrecision(3)); // 1.12e+3
const numb = 123.7865;
// console.log(numb.toPrecision(3)); //124
//************************toLocaleString()**************/
//toLocaleString() is used to convert numbers or dates into a string, 
// using local language or country formatting 
// (like adding commas, currency signs, or date formats).

const hundreds = 1000000;
// console.log(hundreds.toLocaleString());// return value to add comma 1,000,000 and follow american standard
// console.log(hundreds.toLocaleString("ur-PK")); //Now follow pakistan standard

//+++++++++++++++++++++++++Math ++++++++++++++++++++++++
// console.log(Math);   //Object [Math] {}
// console.log(Math.abs(-4));   //it change negative value into positive so ans is 4
// console.log(Math.round(4.6));   //5 value roundoff
// console.log(Math.ceil(4.2));   // ceil mean upper so it chosse always upper value 5.
// console.log(Math.floor(4.9));  //floor mean down so it choose always down value 4.
// console.log(Math.min(4.2 ,5 ,6,1));  //1
// console.log(Math.max(4 ,8  ,6,2,9));   //9

console.log(Math.random()); 
//Math.random() gives you a random decimal number between 0 (inclusive) and 1 (exclusive).
console.log((Math.random()*10)+1); //1 to 10
console.log(Math.floor(Math.random()*10)+1);

const min =10;
const max =20;

console.log(Math.floor(Math.random()*(max-min+1))+min);