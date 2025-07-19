/*
1. Array is written in brackets [  ].
2.Array data type is an object.
3.Array can contain different data types . i.e string,number,boolean,array etc.
4. Array is zero based indexing. It starts with zero.
5. Once changed its original value will also change beacause it is non primitive (refrence) type.

ARRAY METHODs :

1.Push = adds value to last of an array.
2. Pop = removes last value of an array.
3. Unshift = adds value at first of an array.
4.Shift = removes first value of an array.
5. Includes = checks true or false.
6. IndexOf = checks the position of value in number form.
7.Join = converts to string.
8. Slice(value to remove from,value remove upto but don't include)= returns new array and original value remains unchanged. Use when you need to extract a portion of an array without modifying it.
9. Splice(value to delete from, number of value to delete) = returns new array with deleted one and original value changed.Use when you need to add, remove, or replace elements within an array.
*/
//Arr
let newArr = [0 ,3,5,7,8];
let myHeroes = ["quaid-e-azam" ,"allama iqbal","abdul satar edi"];

const myArr2 = new Array(1,2,3,4,5);
//console.log(myArr2[1]);
//newArr.push(9)
//newArr.pop();
//newArr.unshift(7); //add value in 0 index in array
//newArr.shift();//0 index value is delete in array
//newArr.includes(9); //ans always in true or false 
// console.log(newArr);
// console.log(newArr.indexOf(7)); 


    
//The join() method is used to combine all elements of an array into a single string,
//  with a separator between them
const anotherArr = newArr.join(); 
//  console.log(anotherArr);
 // console.log(newArr);

  //*******************slice vs splice********************/
 console.log("A" ,newArr);     //Original Array => A [ 0, 3, 5, 7, 8 ]

 let myArr1 = newArr.slice(1 ,3);
 console.log(myArr1);     //after splice return array last index value not include => [ 3, 5 ]
 console.log("B",newArr);  //Original array not change => B [ 0, 3, 5, 7, 8 ]

 let myArr3 = newArr.splice(1,3);
 console.log(myArr3);     //after splice return array last index value include=>[ 3, 5, 7 ]
 console.log("C", newArr);  //Original array change => C [ 0, 8 ]

 