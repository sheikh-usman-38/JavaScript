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
