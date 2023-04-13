//import './App.css';
import React from "react";
import { TodoCounter } from "./js/TodoCounter";
import { TodoSearch } from "./js/TodoSearch";
import { TodoList } from "./js/TodoList";
import { TodoItem } from "./js/TodoItem";
import { CreateTodoButton } from "./js/CreateTodoButton";

const defaultTodos = [
  { id: 1, text: 'task1', completed: false },
  { id: 2, text: 'task2', completed: true },
  { id: 3, text: 'task3', completed: false },
  { id: 4, text: 'task4', completed: false },
  { id: 5, text: 'task5', completed: false },
]
function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const totalTodos = todos.length;
  const completedTodos = todos.filter(todo => todo.completed).length;

  let searchedTodos = [];
  if (searchValue.length >= 0) {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase()
      const searchText = searchValue.toLowerCase()
      return todoText.includes(searchText)
    })

  } else {
    searchedTodos = todos;
  }

  let completeTodos = (text) => {
    let todoIndex = todos.findIndex(todo => todo.text === text);
    let newTodos = [...todos];
    newTodos[todoIndex].completed = !todos[todoIndex].completed;
    setTodos(newTodos)
  }
  return (
    <React.Fragment>
      <div className="todo-container" id="left-container" >
        <TodoCounter total={totalTodos} completed={completedTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="todo-container" id="right-container">
        <TodoList>
          {searchedTodos.map(todo => (
            <TodoItem 
            key={todo.id} 
            id={todo.id} 
            text={todo.text} 
            completed={todo.completed} 
            onComplete = {() => completeTodos(todo.text)}
            />
          ))}
        </TodoList>
        <CreateTodoButton />
      </div>


    </React.Fragment>

  );
}

export default App;
