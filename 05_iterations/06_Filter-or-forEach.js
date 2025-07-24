const coding = ["JavaScript", "Python", "Ruby", "Java", "C++"];

//DrawBack of forEach loop is that it does not return anything

const value =  coding.forEach((val) => {
    console.log(val); // JavaScript, Python, Ruby, Java, C++
    })
// The value returned by forEach is undefined
    console.log(value); // undefined

    //+++++++++++++++++++filter+++++++++++++++++++++++
    //       array.filter((item) => condition)
    //filter() returns a new array with only items that match the given condition.

const myNum = [1 , 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNum = myNum.filter((num) => {
    return num % 2 === 0; // returns only even numbers
})
//console.log(evenNum); // [2, 4, 6, 8, 10]

//+++++++++++++++++++forEach+++++++++++++++++++++++
//Using forEach loop to do same task
const arr = [];
myNum.forEach((num) => {
    if (num % 2 === 0) {
        arr.push(num); // pushes only even numbers into arr
    }
});
//console.log(arr); // [2, 4, 6, 8, 10]

//Example:
const books = [
    { title: "Book 1", author: "Author A" ,genre: "Fiction" ,publish: 2020 ,edition: 1 },
    { title: "Book 2", author: "Author B" ,genre: "Non-Fiction" ,publish: 2019 ,edition: 2 },
    { title: "Book 3", author: "Author C" ,genre: "Fiction" ,publish: 2021 ,edition: 1 },
    { title: "Book 4", author: "Author D" ,genre: "Science" ,publish: 2018 ,edition: 3 },
    { title: "Book 5", author: "Author E" ,genre: "History" ,publish: 2022 ,edition: 1 },
    { title: "Book 6", author: "Author F" ,genre: "Fiction" ,publish: 2023 ,edition: 2 },
    { title: "Book 7", author: "Author G" ,genre: "Non-Fiction" ,publish: 2020 ,edition: 1 },
];
let userBooks = books.filter((book) => book.genre === "History" );
userBooks = books.filter((book)=> book.publish >= 2018 && book.genre === "Non-Fiction" );

//Output the books that are Non-Fiction and published after 2018
/* [
  {
    title: 'Book 2',
    author: 'Author B',
    genre: 'Non-Fiction',
    publish: 2019,
    edition: 2
  },
  {
    title: 'Book 7',
    author: 'Author G',
    genre: 'Non-Fiction',
    publish: 2020,
    edition: 1
  }
]*/
console.log(userBooks); 
// [{ title: "Book 5", author: "Author E" ,genre: "History" ,publish: 2022 ,edition: 1 }]