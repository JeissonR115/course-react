//import './App.css';
import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";


function App() {

  const [todos, setTodos] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');

  const totalTodos = todos.length;
  const completedTodos = todos.filter(todo => todo.completed).length;
  
  const searchTodos = (list,text) =>  list.length >= 0 ? todos.filter(todo => todo.text.toLowerCase().includes(text.toLowerCase())): todos
  let searchedTodos = searchTodos(searchTodos,searchValue);
  
  let completeTodo = (id) => {
    const newTodos = [...todos];
    const todoIndex = todos.findIndex(todo => todo.id === id);
    newTodos[todoIndex].completed = !todos[todoIndex].completed;
    setTodos(newTodos)
  }

  const addTodo = (text) => {
    const newTodos = [...todos];
    const newId = todos.length === 0 ? 0 : todos[todos.length - 1].id + 1;
    newTodos.push({
      id: newId,
      text: text,
      completed: false
    })
    setTodos(newTodos)
  }
  const removeTodo = (id) => {
    const newTodos = [...todos];
    const todoIndex = todos.findIndex(todo => todo.id === id);
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
        <CreateTodoButton onAdd={() => addTodo(prompt("escrive tu nueva tarea"))} />
      </div>


    </React.Fragment>
  );
}

export default App;
