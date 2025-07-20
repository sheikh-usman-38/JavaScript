//An object in JavaScript is a data structure that allows you to store 
// multiple values in a single variable using key-value pairs.

//Two type of object
//1. literal:
            //A literal object in JavaScript is the simplest way to create an object using curly braces {},
            //  where you directly define the properties and values.
//2.constructor (singleton ) :        we make like this => Object.create
           // A constructor object is created using a constructor function 
           // — a special function used to create multiple objects with the same structure.

           // Symbol  Make Like this 
const  mySym = Symbol("key1");
    //Now we assign symbol in object so we used square bracket in key
const jsUser ={
    name:"usman",
    [mySym]:Symbol("myKey1"),// Used Symbol in Object This is the format 
    "full name" :"Muhammad Usman",
    email:"usman@google.com",
    age:21,
    location:"khanewal",
    isLoggedIn:false,
    lastLoggedInDays:["Monday","Tuesday","Saturday"]
}

//console.log(jsUser.email);

// So access this way

//console.log(jsUser["email"]); 

// Full Name without square bracket we do not access

//console.log(jsUser["full name"]); //Muhammad Usman

//*************Access symbol value****************/
//console.log(jsUser[mySym]);//Symbol(myKey1)
//console.log(jsUser[mySym].description);//myKey1
//console.log(typeof jsUser[mySym]);//symbol

//++++++++++++++ Update Object Value +++++++++++++
jsUser.email= "usman@microsoft.com";

// But i want my Object not change even i update so we used this method => Object.freeze

//Object.freeze(jsUser);

//jsUser.email= "usman@chatgpt.com"; // So this update is not occur in Object
//console.log(jsUser); 

  //So output is this
/*{
  name: 'usman',
  'full name': 'Muhammad Usman',
  email: 'usman@microsoft.com',
  age: 21,
  location: 'khanewal',
  isLoggedIn: false,
  lastLoggedInDays: [ 'Monday', 'Tuesday', 'Saturday' ],
  [Symbol(key1)]: Symbol(myKey1)
}
*/


// Add function in object
jsUser.greeting = function(){
    console.log("Hello! Js user");
}

// ++++++++++++++++this keyword+++++++++++++++
//this means "this object"
//We use the this keyword inside an object to refer to the current object itself
//  — so we can access its own properties.

jsUser.greetingSecond = function(){
    console.log(`Hello! Js user ${this.name}`); //Here Used This keyword we access own object value
}
console.log(jsUser.greeting());//Hello! Js user
console.log(jsUser.greetingSecond()); //Hello! Js user usman