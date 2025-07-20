//const tinderUser = new Object(); //singleton Object  //print value {}
const tinderUser ={};   // Non- singleton Object

tinderUser.id=1234
tinderUser.name="usman";
tinderUser.email="usman@google.com";
// console.log(tinderUser); //{ id: 1234, name: 'usman', email: 'usman@google.com' }

const regularUser ={
    email:"Dawood@chatgpt.com",
    fullname:{
        personalName:{
            firstName:"Muhammad",
            lastName:"Ahmad"
        }
    }
}
console.log(regularUser.fullname.personalName.firstName);//Muhammad

// we used ? mark for check is this thing exist or not
//Example
console.log(regularUser.fullname?.personalName?.firstName);//Muhammad

const obj1 ={1:"a" , 2: "b"};
const obj2 ={3:"c" , 4: "d"};
// i want to combine to object in single object 
//****************************Object.assign()***************************/
//Object.assign() takes values from one or more objects and puts them into another object.
const obj3 = Object.assign({},obj1 ,obj2);
//console.log(obj3); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

//Another to combine multiple Object  (We mostly used this operator)
//*********************Spread Operator********************/
const obj4={...obj1,...obj2};
//console.log(obj4);// { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

 //Array of Loop
const  users=[
    {},
    { email:"usman@google.com"},
    {}
]
users[1].email;
// Now we tinderUser who we make before in line 2

console.log(tinderUser); //{ id: 1234, name: 'usman', email: 'usman@google.com' }

   //+++++++++++++++++++++++++Object.keys()+++++++++++++++++++++++

   // It gives you an array of all the keys (property names) in an object 
   // Only picks the keys that are directly inside the object 
   //Useful when you want to loop through object keys

//console.log(Object.keys(tinderUser)); //So it return key in array Output :[ 'id', 'name', 'email' ]

 //And we also come out values by using Object.values( ) method

 //console.log(Object.values(tinderUser)); //[ 1234, 'usman', 'usman@google.com' ]

 // ++++++++++++++++++ Object.entries()+++++++++++++++++
 // It gives you an array of key-value pairs from an object.
 //Each pair is inside its own small array: [key, value].
 //seful when you want to loop through both keys and values together.

 console.log(Object.entries(tinderUser));

 //Output :
 /*    [
  [ 'id', 1234 ],
  [ 'name', 'usman' ],
  [ 'email', 'usman@google.com' ]
]   */
 //Check in object it has this property or not 
console.log(tinderUser.hasOwnProperty("email")); //true