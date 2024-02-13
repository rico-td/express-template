let todos = [
  {
    id: 1,
    todo: "Do something nice for someone I care about",
    completed: true,
    userId: 1,
  },
  {
    id: 2,
    todo: "Learn something new",
    completed: false,
    userId: 2,
  },
  {
    id: 3,
    todo: "Read a book",
    completed: false,
    userId: 1,
  },
  {
    id: 4,
    todo: "Go for a walk",
    completed: false,
    userId: 3,
  },
  {
    id: 5,
    todo: "Call a friend",
    completed: false,
    userId: 4,
  },
];

let todosRefresh = todos;

// push ()
// Fügt ein Element am Ende des Arrays ein und gibt die neue Größe des Arrays zurück.
// Destruktiv
todos.push = [{ id: 6, todo: "meet with grandma", cpmpleted: true, userId: 2 }];
console.log(todos);

// pop ()
// Entfernt das letzte Element aus dem Array und gibt es zurück.
// Destruktiv
todos.pop();
console.log(todos);
todos = todosRefresh;

// shift ()
// Entfernt das erste Element des Arrays und gibt es zurück.
// Destruktiv
todos.shift();
console.log(todos);
todos = todosRefresh;

// unshift ()
// Fügt ein Element am Anfang des Arrays ein und gibt die neue Größe des Arrays zurück.
// Destruktiv
todos.unshift({
  id: 6,
  todo: "meeet grandma",
  completed: true,
  userId: 4,
});
console.log(todos);

// slice ()
// Kopiert die Array-Elemente von einem Startindex bis zu einem Endindex in ein neues Array.
// Nicht destruktiv
const sliced = todos.slice(1, 3);
console.log(sliced);

// splice ()
// Entfernt Elemente aus dem Array, ersetzt sie durch neue Elemente und gibt die ersetzen Elemente zurück.
// Destruktiv
const spliced = todos.splice(
  0,
  2,
  {
    id: 98,
    todo: "drinking",
    completed: false,
    userId: 3,
  },
  {
    id: 75,
    todo: "swimming",
    completed: false
    userId: 4,
  }
);
console.log(todos);

// sort ()
todos.sort((a, b) => a.id - b.id);
console.log(todos); // Das Array sortiert nach der ID

// reverse ()
todos.reverse();
console.log(todos); // Das Array in umgekehrter Reihenfolge

// concat ()
const moreTodos = [{ id: 8, todo: "Finish project", completed: false, userId: 1 }];
const combinedTodos = todos.concat(moreTodos);
console.log(combinedTodos); // Ein neues Array, das todos und moreTodos kombiniert

// join ()
const todoTitles = todos.map(todo => todo.todo);
const todoString = todoTitles.join(", ");
console.log(todoString); // Ein String, der die Titel aller Todos enthält, getrennt durch Kommas

// indexOf ()
const index = todos.indexOf(newTodo);
console.log(index); // Der Index des neuen Todos im Array

// includes ()
const hasTodo = todos.includes(newTodo);
console.log(hasTodo); // true, wenn newTodo im Array vorhanden ist, sonst false

// lastIndexOf ()
const lastIndex = todos.lastIndexOf(newTodo);
console.log(lastIndex); // Der letzte Index des neuen Todos im Array

// copyWithin ()
todos.copyWithin(0, 1, 3);
console.log(todos); // Das Array, in dem Elemente innerhalb des Arrays kopiert und überschrieben wurden

// fill ()
todos.fill({ id: 0, todo: "Empty", completed: false, userId: 0 });
console.log(todos); // Das Array, in dem alle Elemente mit dem angegebenen Wert gefüllt sind

// find ()
const foundTodo = todos.find(todo => todo.completed === false);
console.log(foundTodo); // Das erste unvollständige Todo-Objekt

// findIndex ()
const foundIndex = todos.findIndex(todo => todo.completed === false);
console.log(foundIndex); // Der Index des ersten unvollständigen Todo-Objekts im Array

// keys ()
const todoKeys = Array.from(todos.keys());
console.log(todoKeys); // Ein Array der Schlüssel (Indizes) des ursprün