let todos = [
  {
    id: 1231,
    title: "Take out the trash",
    createdAt: "2020-04-17T23:29:57.350Z",
    lastUpdated: "2020-04-17T23:29:57.350Z",
    isComplete: false,
  },
  {
    id: 2345,
    title: "Find a bday present for Tim",
    createdAt: "2019-04-17T23:29:57.350Z",
    lastUpdated: "2019-04-17T23:29:57.350Z",
    isComplete: false,
  },
];

function createToDo(name) {
  let date = new Date();
  let createdAt = date.toISOString();
  const todo = {
    id: Math.floor(Math.random() * 9999),
    title: name,
    createdAt: createdAt,
    lastUpdated: createdAt,
    isComplete: false,
  };
  todos.push(todo);
  return todos;
}

// .map, .filter, .find

// function updateTodo(id, title, isComplete) {
//   const originalTodos = todos.filter((item) => {
//     return id == item.id;
//   });
//   const todoWithoutArray = originalTodos[0];

//   const uneditedTodos = todos.filter((item) => {
//     return id !== item.id;
//   });

//   let updatedDateObject = new Date();
//   let updatedDateString = updatedDateObject.toISOString();

//   todos = [
//     ...uneditedTodos,
//     {
//       id: todoWithoutArray.id,
//       title: title,
//       createdAt: todoWithoutArray.createdAt,
//       lastUpdated: updatedDateString,
//       isComplete: isComplete,
//     },
//   ];

//   return todos;
// }

function updateTodo(id, title, isComplete) {
  const originalTodo = todos.find((item) => {
    return id == item.id;
  });

  const uneditedTodos = todos.filter((item) => {
    return id !== item.id;
  });

  let updatedDateObject = new Date();
  let updatedDateString = updatedDateObject.toISOString();

  todos = [
    ...uneditedTodos,
    {
      id: originalTodo.id,
      title: title,
      createdAt: originalTodo.createdAt,
      lastUpdated: updatedDateString,
      isComplete: isComplete,
    },
  ];

  console.log(todos);
  return todos;
}

// updateTodo(1231, "Fight A Robot!", true);

function deleteTodo(id) {
  const remainingTodos = todos.filter((item) => {
    return id !== item.id;
  });

  todos = remainingTodos;
  return todos;
}

console.log(deleteTodo(2345));
// console.log(result);
