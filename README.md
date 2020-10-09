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

Update todo function
take an id(unique identifier). Passing the id of a 

function updateTodo(id, title, isComplete){
// Find todo in array with the correct id.
//Return updated todo with new title and new isComplete value.
}

updateTodo(1231, "Find a bday present for Tim", true)// Should return updated todo
console.log(todos)
console.log(updateTodo)

// https://tinyurl.com/o4xk6br



// updateTodo Function
- updateTodo should accept three arguments, an ID (that is used to find the existing todo in the todos array), an updated title, and a boolean on the task is completed)
- it should return the updated todo object but also include the properties + values of the old todo object for the  properties/values that have not been updated/
- lastUpdated should be given a new date for when this todo has been updated
- it should update the global todos array for the item that got updated

// expected return:
{
	id: 2345,
		title: 'build a bike',
			createdAt: '2019-04-17T23:29:57.350Z',
				lastUpdated: '2020-05-24T17:06:47.074Z',
					isComplete: true
}

Delete Function: 
Delete a single item at any given time and return the new array.
use id to determine the id that needs to be removed.