//*********************Redunce Method********************* */
/*
const array = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
// Expected output: 10
*/

//The reduce() method reduces the array to a single value by doing 
// something with each item (like adding, multiplying, etc.)

//reduce() means: do something to all items, and get one final result.

const numbers = [1, 2, 3, 4, 5];
let  myNum =numbers.reduce((acc ,currVal)=>{
  console.log(`acc: ${acc}, currVal: ${currVal}`);
  /* Output is:
  acc: 0, currVal: 1
acc: 1, currVal: 2
acc: 3, currVal: 3
acc: 6, currVal: 4
acc: 10, currVal: 5
  */
   return acc + currVal;
},0)

//Also write Like this
// const myNum = numbers.reduce((acc, currVal) => acc + currVal, 0);

console.log(myNum); // Expected output: 15

const shoppingCart = [
  { name: 'Apple', price: 1.2 },
  { name: 'Banana', price: 0.8 },
  { name: 'Cherry', price: 2.5 },
];
const price = shoppingCart.reduce((acc, item) => (
  acc+ item.price
),0);
console.log(price); // Expected output: 4.5