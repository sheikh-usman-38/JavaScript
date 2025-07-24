//************************Map()***********************/
//map() means "do something with every item and return a new array."

const numbers = [1, 2, 3, 4, 5,6 ,7,8,9,10];
//Using map to +10 to every item in the array
let newNumbers = numbers.map((num) => {
    return num+10; // returns a new array with each item increased by 10
})
//console.log(newNumbers); // [11, 12, 13, 14,15, 16, 17, 18, 19, 20]


//***********************Chaining************************* */
//Chaining means calling multiple methods one after another on the same variable in a single line
// WE also do channing the method

newNumbers = numbers
.map((num) => num + 10)
.map((num) => num * 2)
.filter((num) => num >= 20);
console.log(newNumbers);  // Output: [22, 24, 26, 28, 30, 32, 34, 36, 38, 40]

// We also do same task using forEach Loop
const arr = [];
numbers.forEach((num) => {
    arr.push(num + 10); // pushes each item increased by 10 into arr
});
//console.log(arr); // [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

