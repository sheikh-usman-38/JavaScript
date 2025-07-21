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
user.welcomeMsg();
user.userName ="Hussan";
user.welcomeMsg(); //Hussan, welcome to our website


// Because Here is not context of any object
console.log(this); //{}
// In Browser have global object is window 
