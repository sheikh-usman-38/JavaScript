function sayHello(){
    // console.log("U");
    // console.log("S");
    // console.log("M");
    // console.log("A");
    // console.log("N");
}
sayHello();
//Add Two Number 
// function addNum(num1, num2){ //num1 ,num2 is parameter of function
//     console.log(num1+num2);
// }


addNum(3,"C"); //3 ,"C" => is argument // output is 3C

//const result = addNum(3 ,4);
//console.log(result) //Output is undefined  why beacuse we do not return
//So when we return then we store function in variable otherviews not
   //************Example**************/
function addNum(num1, num2){ 
    // let result = num1+num2;
    // return result; // After return nothing will work

    //Another way to return
    return  num1+num2;
    console.log("hello world") //it's never run

    
}
const result = addNum(3 ,4);
//console.log(result);//7
 

function loginUserMessage(username="Dawood"){
    if(!username){
        console.log("Please enter your username");
        return
    }
    return `${username} your are loggedIn`;
}
//console.log(loginUserMessage("Usman"));//  Usman your are loggedIn
console.log(loginUserMessage());//  undefined your are loggedIn



//***************************Rest Operator******************************/
//The rest operator in JavaScript (...) is used to collect multiple elements into a single array.

// Difference between Rest and Spread Operator
/*Feature	                  Rest Operator	                 Spread Operator
Purpose	                Collects values into an array	    Spreads values out from an array/object
Used In           	Function parameters, destructuring	     Function calls, array/object copying
Syntax	                   function sum(...nums)	           console.log(...arr)
Direction	          Collects multiple values → into one	     Spreads one value → into multiple
*/


//Rest operator right Like This (...num1) Function parameters

function calculateCartPrice(...num1){
  return num1;
}
//console.log(calculateCartPrice(1,4,5,8)); // [ 1, 4, 5, 8 ]

// So here is parameter val1 ,val2 is not print other value value make array and print
function calculateCartPrice(val1,val2,...num1){
  return num1;
}
//console.log(calculateCartPrice(100,400,800,500)); //[ 800, 500 ]


//Access object in function

// //let user={
//     name:"usman",
//     price:"50k",
// }
function addUser(anyUser){
    console.log(`username is ${anyUser.name} and price is ${anyUser.price}`);
}
//WE pass argument as name of object 
//addUser(user);  //username is usman and price is 50k

//all pass object as a argument
addUser({
    name:"Ahmad",
    price:"30k"
}) //username is Ahmad and price is 30k

////Access array in function
const myArr =[100,500,300];
function arrayVal(getVal){
    return getVal; //Also get individual value ==> getVal[1]
}
console.log(arrayVal(myArr)); //    [ 100, 500, 300 ]
////Also pass array as a argument
console.log(arrayVal([700,400,200])); //[ 700, 400, 200 ]