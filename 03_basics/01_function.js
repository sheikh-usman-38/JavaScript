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
