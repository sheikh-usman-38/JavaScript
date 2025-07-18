const name="usman"
const repoCount = 50;

// console.log(name+ repoCount +"Value"); its outDated way to code write Like this

   //************New Way (With String Interpolation):******/
//String Interpolation means inserting variables or expressions directly 
// inside a string — using template literals. like this (``).

 console.log(`hello my name is ${name} and my repoCount is ${repoCount}`);//Output:
 //  hello my name is usman and my repoCount is 50
  // New Way to make String
 const  gameName = new String('usman');
 console.log(gameName[0]);//u
 console.log(gameName.__proto__); //return Object {}
 console.log(gameName.length);//5
 console.log(gameName.toUpperCase()); // USMAN
 console.log(gameName.charAt(4)); //n
 console.log(gameName.indexOf("s"));//1
 console.log(gameName.substring(0,3));//usm
 console.log(gameName.slice(0,4));//usma 
 console.log(gameName.trim()); //remove extra space 
 //Split Method change String Into Array
 let Myname = new String('usman-qurashi');
   console.log(Myname.split(","));

   let url ="https://usman.com/usman%20qurashi";
 console.log(url.replace("%20","-"));  //https://usman.com/usman-qurashi
 console.log(url.includes("usman")); //true 
 
 
 