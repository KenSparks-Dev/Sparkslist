# Sparkslist
```js
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
​
function createTodo("parameter go here") {
​
}
​//Check color game in 
console.log(createTodo("argument go here"))
console.log(todos)
```
​
Your first assignment in creating a todo list is to create a todo (function).
​
- Craft a `createTodo` function that accepts a title. So when you call the function with a title, you add the new todo to the list of current todos. 
- Your `createTodo` function should also return the new todo object so when wrapping the `createTodo` function in a console.log, it should return something like:
```js
  {
    id: 2344,
    title: "Create a todo list",
    createdAt: "2020-04-17T23:29:57.350Z",
    lastUpdated: "2020-04-17T23:29:57.350Z",
    isComplete: false
  }
```
Notes:
A todo item consists of a few core items:
1. An ID/unique identifier. You'll use this to know which todo to delete/update and having a unique identifier also helps the backend know which item in the database needs to be modified. For this project, the `id` you create should be a random set of numbers.
​
2. A `title`. This is the task your user is trying to accomplish.
​
3. A status (`isComplete`), this is your identifier for whether a user clicks a checkbox input and it will equal either be true (checked) or false (not checked).
​
4. A `createdAt` date. This will be a date that you generate once a user creates a new todo item. Use the **hint** `.toISOString()` method when setting your date.
​
5. A `lastUpdated` date. This will be a date that you generate whenever a user UPDATES an existing todo item. But when you create the todo initially, you should set it using whatever you set your `createdAt` with.
​
You will come across blockers. Do your best and feel free to contact me when you hit them.