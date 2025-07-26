/*
document.getElementById("title");   // access id 
document.getElementById('title').getAttribute('class'); //'heading'
document.getElementById('title').setAttribute('class',"text heading");   // change class name 
document.getElementById('title').className    //heading  <-> className print
document.getElementById('title').id // title   <->  id Name print
document.getElementsByClassName(" heading")  

title.textContent   //also access hidden text like any element who is hidden in html file mean display none
 output:  'DOM Learning on Chai or Code \n    test writing'

title.innerText   // only access of that element who show in display|Only returns visible (displayed)text on the page.
output: 'DOM Learning on Chai or Code'

title.innerHTML //This returns the HTML content (including tags) inside the element with id="title".
output :  'DOM Learning on Chai or Code <span style="display: none;">\n  Scrite text</span>'

document.querySelector('.heading');  // access element using className
 output: <h1 id="title" class="heading">DOM Learning on Chai or Code <span style="display: none;">
            Scrite text</span></h1>

document.querySelector('#title'); // access element using Id
output: <h1 id="title" class="heading">DOM Learning on Chai or Code <span style="display: none;">
            Scrite text</span></h1>\
    
document.querySelector('h2'); //access using tag Name here h2 so first h2 value is print
output::  <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h2>

document.querySelector('input[type="Password"]'); // access element by his name or type 
output ::     <input type="password" />

document.querySelector("div:first-child"); // when we access child element of div
output:: <div >
        <h1 id="title" class="heading">DOM Learning on Chai or Code <span style="display: none;">
            Scrite text</span></h1>
        <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h2>
        <h2>Accusantium laudantium officia possimus in sequi. Quibusdam aliquam illo saepe reiciendis</h2>
        <h2>sed similique asperiores, architecto quam, laborum dolor harum tempora omnis animi?</h2>
        <p>Lorem ipsum dolor sit amet</p>
        <input type="password" />
    </div>

document.querySelector("ul"); // here we access ul list 
output:     <ul>
            <li>One</li>
            <li>Two</li>
            <li>There</li>
            </ul>

const myUl = document.querySelector("ul");
myUl.querySelector("li");
output ::      <li>One</li>

const greenColor = myUl.querySelector("li");
greenColor.style.backgroundColor ="green";  // so now backGround color is green.
greenColor.style.padding ="20px";  // so Now padding is 20px.

greenColor.innerText //One 
Now We change text 
greenColor.innerText="five";  // Now text is five.

//***************Select all element of li so We used querySelectorAll ********************
           document.querySelectorAll("li");
     output :: NodeList(3) [li, li, li] 
               0: li 
               1: li 
               2: li  
         length: 3[[Prototype]]: NodeList
  It returns a NodeList containing all <li> elements found in the document.


tempLiList.style.color="yellow"; 
  now it not happen it give error :Uncaught TypeError: Cannot set properties of undefined (setting 'color')
    at <anonymous>:1:23

    tempLiList[0].style.color="yellow";
// Now color will be changed
So In a NodeList, you can access and modify elements using indexing, just like an array.

//Another way to modify element by using forEach loop
tempLiList.forEach((li)=>{
    li.style.color="red"
});     
// now all element color is red.

const tempList =document.getElementsByClassName("listItems");
// Output :: HTMLCollection(4) [li.listItems, li.listItems, li.listItems, li.listItems]
0: li.listItems
1: li.listItems
2: li.listItems
3: li.listItems
length: 4
[[Prototype]]: HTMLCollection

So now we modify HTMLCollection 
HTMLCollection is not directly modify First we convert HTMLCollection to Array then We used forEach method.
//************************ Convert HTMLCollection to Array ***************************
                     Array.from(tempList);
const myConvertedArray =Array.from(tempList);
myConvertedArray.forEach((li)=>{
    li.style.color="orange";
});  // Now our color is orange.


   

*/
