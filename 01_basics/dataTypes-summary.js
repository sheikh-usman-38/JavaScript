// Two Types of dataTypes 
/*
1. Primitive Data Types
These are the most basic types and are immutable (cannot be changed).

Data Type	Example
1.  String	"Hello"
2.  Number	42, 3.14
3.  Boolean	true, false
4.  Undefined	let x; (x is undefined)
5.  Null	let x = null
6.  BigInt	123456789012345678901234567890n
7.  Symbol	Symbol("id")
*/

/*typeof primitive DataTypes
    Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint
*/
/*
2. Non-Primitive (Reference) Data Types
These store references to memory and are mutable (can be changed).

Data Type	Example
1.  Object	{ name: "Usman", age: 20 } 
2.  Array	[1, 2, 3, 4]   //typeof "object"
3.  Function	function greet() {} //typeof  function
4.  Date	new Date()  //typeof "object"
5.  RegExp	/abc/   //typeof ➜ "object"
*/

//  JavaScript is a dynamic (or dynamically typed) language. ✅
// 1.  You don’t need to declare variable types.
// 2.   A variable’s type can change at runtime.
// **************Example***************
/*
let x = 5;         // x is a Number
x = "Usman";       // now x is a String
x = true;          // now x is a Boolean
*/