//import './App.css';
import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";

const todos = [
  { id: 1, text: 'cebolla', completed: false },
  { id: 2, text: 'ca', completed: false },
  { id: 3, text: 'es', completed: false },
  { id: 4, text: 'as', completed: false },
  { id: 5, text: 'as', completed: false },
]
function App() {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map(todo => (
          <TodoItem key={todo.id} id={todo.id} text={todo.text} />
        ))}
      </TodoList>
      <CreateTodoButton />

    </React.Fragment>

  );
}

export default App;
