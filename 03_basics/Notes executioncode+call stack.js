/*
✅ Global Execution Context (GEC)

✅ this keyword in Global

✅ Memory Creation Phase

✅ 📚 And at the end, we’ll revisit Call Stack with full explanation

✅ 1. Global Execution Context (GEC) – (Sabse Pehla Stage)
Jab JavaScript ka program run hota hai, tab sabse pehle banata hai Global Execution Context.

🔍 Iska kaam kya hota hai?
Ye poore code ka base environment hota hai jisme:

Variables define hote hain

Functions define hote hain

this keyword define hota hai

JS automatically isko create karta hai. Tumhe manually banane ki zarurat nahi.

✅ 2. this in Global Context
📌 Simple Bhasha:
Jab tum this likhte ho global scope me, toh:

Browser me this ka matlab hota hai window object.

Node.js me this ka matlab hota hai {} (empty object).

🔁 Real-life Analogy:
Socho this ek pointer hai jo batata hai "main abhi kis jagah pe hoon".

js
Copy
Edit
console.log(this);  // In browser: window
js
Copy
Edit
var name = "Usman";
console.log(this.name);  // Output: Usman (because this = window)
✅ 3. Memory Creation Phase (a.k.a Hoisting Phase)
Ye phase hota hai execution start hone se pehle, jisme JavaScript:

Sab variables ko memory me jagah de deti hai

Functions ka pura code memory me utha leti hai

Variables ko abhi value assign nahi hoti — bas undefined hoti hai

🧠 Example with Memory Creation Phase:
js
Copy
Edit
console.log(name);     // Output: undefined
greet();               // Output: Hello!

var name = "Usman";

function greet() {
  console.log("Hello!");
}
🔍 Memory Phase me kya hota hai:
Identifier	Type	Value Assigned
name	variable	undefined
greet	function	Full function code

➡️ Jab code line-by-line chalega (Execution Phase), tabhi name = "Usman" assign hoga.

✅ 4. Code Execution Phase
Is phase me JavaScript line-by-line code execute karta hai:

Jab console.log(name) chalta hai, us waqt name ka value hai undefined, kyunki assign abhi hua nahi.

Function greet() ko jab call kiya, toh JS uska function code run karta hai.

✅ 5. 📚 Call Stack – Easy Hinglish + Real-Life
🔍 Kya hai Call Stack?
Call Stack ek stack (pile of plates) ki tarah hota hai jisme har function jo call hota hai, usko top pe daala jata hai, aur jab function complete ho jaye toh stack se nikaal diya jata hai.

🧪 Example:
js
Copy
Edit
function A() {
  B();
}

function B() {
  C();
}

function C() {
  console.log("Inside C");
}

A();  // Program starts here
📚 Stack Process (Jaise Plate Stack):
Time	Stack Top to Bottom
Start	Global
A() Called	A → Global
B() Called	B → A → Global
C() Called	C → B → A → Global
console.log()	C runs and finishes
End C()	B → A → Global
End B()	A → Global
End A()	Global

✅ Final Summary for Notes:
Topic	Easy Explanation (Hinglish)
GEC	Sabse pehla environment jab JS run hoti hai
this in Global	Browser me window, Node.js me {}
Memory Phase	Variables = undefined, Functions = pura code load hota hai
Execution Phase	Code line-by-line chalta hai
Call Stack	Stack jisme function call ka record rakha jata hai


*/
