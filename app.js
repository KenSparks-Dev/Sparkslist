/*  
What do we want to do?

Essentially what we want in lay mans terms is for a user to enter a line of text into an input and press a button. When that button is pressed the text they've entered is saved a becomes apart of the DOM. We also want to record when a the new list item has been created. 


*/ 
const id = Math.floor(Math.random() * 9999 );
let title = document.getElementsByClassName("list-item-title");
let isComplete = document.getElementsByTagName("isComplete");

function createToDo(){
let date = new Date();
let createdAt = date.toISOString();
document.getElementById("createdAt").innerHTML = date;
}