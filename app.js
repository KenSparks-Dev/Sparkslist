/*  
What do we want to do?

Essentially what we want in lay mans terms is for a user to enter a line of text into an input and press a button. When that button is pressed the text they've entered is saved a becomes apart of the DOM. We also want to record when a the new list item has been created. */

let todos = [
  {
    id: 1231,
    title: "Take out the trash",
    createdAt: "2020-04-17T23:29:57.350Z",
    lastUpdated: "2020-04-17T23:29:57.350Z",
    isComplete: false
  },
  {
    id: 2345,
    title: "Find a bday present for Tim",
    createdAt: "2019-04-17T23:29:57.350Z",
    lastUpdated: "2019-04-17T23:29:57.350Z",
    isComplete: false
  }
];

/* 
// let title = document.getElementsByClassName("list-item-title");
// let isComplete = document.getElementsByTagName("isComplete"); */

// document.getElementById("createdAt").innerHTML = date;
// document.getElementById("id").innerHTML = id;

//send pr of branch

function createToDo(){
let title = ""
let date = new Date();
let createdAt = date.toISOString();
let id = Math.floor(Math.random() * 9999);
let lastUpdated = createdAt;
  return {
    id,
    title,
    createdAt,
    lastUpdated ,
    isComplete: false
  }
}

console.log(todos.push(createToDo("Build a bike")));


console.log(todos)
