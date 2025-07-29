let clock = document.getElementById("clock");


//setInterval() is a built-in JavaScript function that repeatedly 
// runs a function at a specified time interval (in milliseconds).

// syntax :
           //:: setInterval(callbackFunction, intervalInMilliseconds);

setInterval(()=>{
let date = new Date();
//  console.log(date.toLocaleTimeString());
clock.innerHTML = date.toLocaleTimeString();
},1000)

