//Immediately Invoked Function Expressions (IIFE)

// An IIFE is a function that runs immediately after it is defined.
//It's used to avoid polluting the global scope.

(function chai(){
    //named iffi
    console.log("DB connect");
})(); //DB connect

// After end iffi function always end line with semi colon (;) if we do not write ; then give error

//JavaScript might think the next line is part of the IIFE, especially
//  if it's another IIFE or an expression
//arrow function also pass parameter
( (name)=>{
 console.log(`Db Connection two ${name}`)
})("usman") //Db Connection two usman

