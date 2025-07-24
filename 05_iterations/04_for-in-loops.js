const myObject = {
    js:"JavaScript",
    py:"Python",
    rb:"Ruby",
    c:"C++"
};
// myObject is not iterable, so we cannot use for of loop directly on it
// for in loop can be used to iterate over the keys of an object
for (let key in myObject) {
   // console.log(`Key: ${key}, Value: ${myObject[key]}`);        // Print each key-value pair
}

const programmingLanguages = ["JavaScript", "Python", "Ruby", "C++"];
for (let lang in programmingLanguages) {
   // console.log(programmingLanguages[lang]); // Print each programming language
}


const map = new Map();
map.set("PK", "Pakistan");
map.set("IN", "India");
map.set("US", "United States");
map.set("UK", "United Kingdom");
map.set("Pk", "Pakistan");

//Map is not iterable directly, but we can use for of loop to iterate over its entries
for(const  key in Map){
    console.log(key);  //Map is not iterable
}