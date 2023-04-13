//import './App.css';
import React from "react";
import { TodoCounter } from "./js/TodoCounter";
import { TodoSearch } from "./js/TodoSearch";
import { TodoList } from "./js/TodoList";
import { TodoItem } from "./js/TodoItem";
import { CreateTodoButton } from "./js/CreateTodoButton";

const todos = [
  { id: 1, text: 'task1', completed: false },
  { id: 2, text: 'task2', completed: true },
  { id: 3, text: 'task3', completed: true },
  { id: 4, text: 'task4', completed: true },
  { id: 5, text: 'task5', completed: true },
]
function App() {
  return (
    <React.Fragment>
      <div className="todo-container" id="left-container" >
        <TodoCounter />
        <TodoSearch />
      </div>
      <div className="todo-container" id="right-container">
        <TodoList>
          {todos.map(todo => (
            <TodoItem key={todo.id} id={todo.id} text={todo.text} completed={todo.completed} />
          ))}
        </TodoList>
        <CreateTodoButton />
      </div>


    </React.Fragment>

  );
}

export default App;
