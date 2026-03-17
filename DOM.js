//single-page application - react 
//JS CAN CHANGE ALL THE HTML ELEMENTS IN A PAGE
//JS CAN CHANGE ALL THE HTML ATTRIBUTES IN A PAGE
//JS CAN CHANGE ALL THE CSS STYLE IN A PAGE
//JS CAN REMOVE EXISTING ELEMENTS AND ATTRIBUTES 
//JS CAN REACT TO ALL THE EXISTING EVENTS
//JS CAN CREATE CREATE A NEW HTML EVENT IN A PAGE

let x=document.getElementById("demo");    //2 MORE BYCLASS AND BYNAME {RETURNS AN ARRAY}
x.innerHTML="hello world";

let y=document.getElememtByClassName("class");
console.log(y);

let z=document.getElementByTagName(h3);
console.log(z);

document.querySelector(" ");     //gives the first element wherever it encounters.

document.querySelectorAll(" ");   //returns all elements.                


let u=document.getElementById("demo").getAttribute("id");
console.log(u);

let s=document.getElementById("demo").setAttribute("class", "democlass");
console.log(s);
 //single class to multiple elements

 //styling:

 let h=document.getElementById("demo").style.color="blue";
 console.log(h);

 //create element 
 let a=document.createElement("h2");
 let parent=document.getElementById("body");   //returns array
 parent[0].append(a);       //append position
 console.log(a);


 //remove element
 a.remove();


 //events in js
//1. mouse events



