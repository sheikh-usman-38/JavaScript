// Date : Date is an object in javascript. 
// JavaScript stores dates as number of milliseconds since January 01, 1970
const myDate = new Date();
//console.log(myDate) //Output : 2025-07-19T07:26:17.113Z
// We can use various methods to convert this date into more readable value.
// console.log(myDate.toString()) //Output : Sat Jul 19 2025 07:26:17 GMT+0000 (Coordinated Universal Time)

//console.log(myDate.toLocaleString()) // Output : 7/19/2025, 7:26:17 AM
//console.log(myDate.toLocaleDateString()) //Output : 7/19/2025
//console.log(myDate.toLocaleTimeString()) // Output : 7:26:17 AM

//console.log(myDate.toDateString()) //Output : Sat Jul 19 2025
//console.log(myDate.toTimeString()) // Output : 07:26:17 GMT+0000 (Coordinated Universal Time)

//console.log(myDate.toISOString()) // Output : 2025-07-19T07:26:17.113Z
//console.log(myDate.toJSON()) //Output : 2025-07-19T07:26:17.113Z

//console.log(typeof myDate);//object
//in js month start with 0
// let myCreatedDate = new Date(2025, 0 ,23);
let CreatedDate = new Date(2025, 0 ,23 ,3 ,5);
let myCreatedDate = new Date("01-04-2025"); //Sat Jan 04 2025
console.log(myCreatedDate.toDateString()); //Thu Jan 23 2025
console.log(CreatedDate.toLocaleString());//1/23/2025, 3:05:00 AM So here return date with time
//Date.now() → Current time in milliseconds.
let myTimeStamp = Date.now();
// console.log(myTimeStamp);//1752912438903
console.log(myCreatedDate.getTime()); //1735948800000 Total milliseconds since 1970

// current time convert to second 
console.log(Math.floor(myTimeStamp/1000)); //1752913258

let newDate = new Date();
console.log(newDate);  //2025-07-19T08:29:22.311Z
console.log(newDate.getMonth()+1); //7
console.log(newDate.getDay()); // 6


let dayName  = newDate.toLocaleString("default",{
    weekday:"long",
})
console.log(dayName);//Saturday



//Part	Meaning
//newDate	-> A Date object with current date/time
//.toLocaleString(...) ->	Converts date to a formatted string based on locale
//"default" ->	Uses the user's local language (like English, Urdu, etc.)
//{ weekday: "long" }	-> Shows the full name of the weekday (e.g., "Monday", "Sunday")
