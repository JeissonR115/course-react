//import './App.css';
import React from "react";
import { TodoCounter } from "./js/TodoCounter";
import { TodoSearch } from "./js/TodoSearch";
import { TodoList } from "./js/TodoList";
import { TodoItem } from "./js/TodoItem";
import { CreateTodoButton } from "./js/CreateTodoButton";


function App() {
  const [todos, setTodos] = React.useState([]);
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
  let completeTodo = (id) => {
    const todoIndex = todos.findIndex(todo => todo.id === id);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !todos[todoIndex].completed;
    setTodos(newTodos)
  }
  const addTodo = () => {
    const newTodos = [...todos];
    const newId = todos.length === 0 ? 0 : todos[ todos .length -1].id + 1;
    newTodos.push({

      id: newId,
      text: prompt("tarea"),
      completed: false
    })
    setTodos(newTodos)
  }
  const removeTodo = (id) => {
    const todoIndex = todos.findIndex(todo => todo.id === id);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1)
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
              onComplete={() => completeTodo(todo.id)}
              onRemove={() => removeTodo(todo.id)}
            />
          ))}
        </TodoList>
        <CreateTodoButton onAdd={addTodo} />
      </div>


    </React.Fragment>

  );
}

export default App;
