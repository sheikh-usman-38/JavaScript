//*********************Iteration ************************* */
//Iteration means repeating a process or doing something again and again, usually with a loop

//for loop
for (let i = 0; i <= 5; i++) {
    if(i === 3) {
       // console.log("Three is a best number");
    }
    // console.log("Iteration number: " + i);
}
 //console.log("Iteration number: " + i);//i is not defined here because it is defined in the for loop  
// So is not accessible outside the for loop

for (let i = 1; i <= 5; i++) {
    //console.log("Iteration number: " + i);
    for (let j = 1; j <= 5; j++) {
        //console.log(`Outer loop: ${i}, Inner loop: ${j}`);
    
        // print table  1 sa la ker 5 tak
       // console.log(i+ "*" +j + "=" + i * j);
    }
}

// used array in for loop
const names = ["Ali", "Ahmed", "Sara", "Tariq"];
for (let i = 0; i < names.length; i++) {
    let element = names[i];
    console.log("Name: " + names[i]);
}

//break and continue
for (let i = 0; i < 10; i++) {

    if(i === 5){
        console.log(`Five is a best number ${i}`);
        //kisi bi control statement ko break karne ke liye use hota hai
        break; // breaks the loop when i is 5
    }
    console.log("Iteration number: " + i);
}

//continue statement
for (let i = 0; i < 10; i++) {

    if(i === 5){
        console.log(`Five is a best number ${i}`);
       // continue statement is used to skip the current iteration
        continue; // skips the current iteration when i is
    }
    console.log("Iteration number: " + i);
}
