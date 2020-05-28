let todos = [
	{
		id: 1231,
		title: 'Take out the trash',
		createdAt: '2020-04-17T23:29:57.350Z',
		lastUpdated: '2020-04-17T23:29:57.350Z',
		isComplete: false
	},
	{
		id: 2345,
		title: 'Find a bday present for Tim',
		createdAt: '2019-04-17T23:29:57.350Z',
		lastUpdated: '2019-04-17T23:29:57.350Z',
		isComplete: false
	}
];

function createToDo(title) {
	let date = new Date();
	let createdAt = date.toISOString();
	let id = Math.floor(Math.random() * 9999);
	let lastUpdated = createdAt;
	const todo = {
		id,
		title,
		createdAt,
		lastUpdated,
		isComplete: false
	};
	todos.push(todo);
	for (i = 0; i < todos.length; i++) {
		if (title === true) {
			createToDo = true;
		}
	}
	return todos;
}

// console.log(createToDo('build a bike'));
// console.log(createToDo('shop for groceries'));

function updateToDo(id, title, lastUpdated = new Date().toISOString(), isComplete = false) {
	const oldToDo = todos.filter((todo) => todo.id == id);
	console.log(oldToDo);
	return {
		id,
		title,
		lastUpdated,
		isComplete
	};
}
updateToDo();
/* 
// let title = document.getElementsByClassName("list-item-title");
// let isComplete = document.getElementsByTagName("isComplete"); */

// document.getElementById("createdAt").innerHTML = date;
// document.getElementById("id").innerHTML = id;

//send pr of branch

function updateTodo(id, title, isComplete) {
		const keptData = todos.find(todo => this.createdAt)
		let date = new Date();
		let lastUpdated = date.toISOString();
	return uTodo = {
		updatedId: id,
		newTitle: title ,
		originalDate: keptData,
		lastUpdated: lastUpdated,
		newIsComplete: isComplete
	}
}
// usage
console.log(updateTodo(2345, "build a bike", true)) 
