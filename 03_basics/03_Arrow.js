// When we access current context then we used this keyword
//Object.freeze() => It locks an object — so you can’t change, add, or delete any property.

const user={
    userName:"usman",
    price:99.99,
    welcomeMsg:function(){
        console.log(`${this.userName}, welcome to our website`); //usman, welcome to our website
        //console.log(this) ; //{ userName: 'usman', price: 99.99, welcomeMsg: [Function: welcomeMsg] }

    }
}
//user.welcomeMsg();
user.userName ="Hussan";
//user.welcomeMsg(); //Hussan, welcome to our website


// Because Here is not context of any object
//console.log(this); //{}
// In Browser have global object is window 


// this keyword is not work in function
// function chai(){
//     let username= "Dawood";
//     console.log(this.username); // output is undefined
//     //So this keyword not access not current context value of function
// }
// chai();

// Another way to check  store function in variable

const chai = function (){
    let username= "Dawood";
    console.log(this.username); // output is undefined
    //So this keyword not access not current context value of function
}
chai(); // Again output is undefined

//********************Arrow funtion (ES6) ***********/
//Arrow function is a short way to write a function in ES6 (ES2015)

const  tea =()=>{
    let username= "Dawood";
    console.log(this.username); 
}
tea(); //undefined

// const addVal =(num1 ,num2)=>{
//   return num1+num2
// }
//console.log(addVal(5,6));   //    11


//   Implicit Return
// When a function returns a value automatically without using the return keyword,
//  it’s called implicit return.

//const addVal =(num1 ,num2)=> num1+num2

//also write this for this way
//const addVal =(num1 ,num2)=> (num1+num2)

//Return  Object  in arrow function so write code like this 
const addVal =(num1 ,num2)=> ({name:"usman"})

console.log(addVal(5,6));  { name: 'usman' };
