const accountId = 123456;
let accountEmail= "usman@gmail.com";
var accountPassword ="12345";
accountCity="Khanewal";
let accountState; //print undefined

// accountId=456  //Not Allowed const value is not change (fixed).
accountEmail="ac@ac.com";
accountPassword="234";
accountCity="Multan";
console.table([accountId ,accountEmail ,accountPassword ,accountCity ,accountState]);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/