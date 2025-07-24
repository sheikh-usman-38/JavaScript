const coding = ["JavaScript", "Python", "Ruby", "Java", "C++"];

coding.forEach(function ( val){
   // console.log(val); // Output : JavaScript Python Ruby Java  C++
})
// Using arrow function as a  callback
coding.forEach((val) => {
   // console.log(val); // Output : JavaScript Python Ruby Java  C++
})

// Also used function 
function printMe(printVal){
    console.log(printVal);
}
// Give function as a reference 
coding.forEach(printMe); // Output : JavaScript Python Ruby Java C++

coding.forEach((val,index ,arr) => {
    console.log(`Val: ${val}, Index: ${index}, Array: ${arr}`);
    //    Val: JavaScript,   Index: 0,        Array: JavaScript,Python,Ruby,Java,C++
    //    Val: Python,       Index: 1,        Array: JavaScript,Python,Ruby,Java,C++
    //    Val: Ruby,         Index: 2,        Array: JavaScript,Python,Ruby,Java,C++
    //    Val: Java,         Index: 3,        Array: JavaScript,Python,Ruby,Java,C++
    //    Val: C++,          Index: 4,        Array: JavaScript,Python,Ruby,Java,C++
    })


// Using forEach with an array of objects
const person = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];

person.forEach((obj) => {
   // console.log(obj.name ); // Output: Alice Bob Charlie
   console.log(`Name: ${obj.name}, Age: ${obj.age}`);
    // Output: Name: Alice, Age: 25
    //         Name: Bob, Age: 30
    //        Name: Charlie, Age: 35
  });