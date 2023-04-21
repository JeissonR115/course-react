import React from "react";

import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoContext } from "../TodoContext";

function AppUI() {
    const {
        todos,
        error,
        loading,
        searchTodos,
        completeTodo,
        removeTodo,
        addTodo
    } = React.useContext(TodoContext)


    return (

        <React.Fragment>
            <div className="todo-container" id="left-container" >
                <TodoCounter />
                <TodoSearch />
            </div>
            <div className="todo-container" id="right-container">
                <TodoList>
                    {error && <p>ERROR</p>}
                    {loading && <p>Cargando . . . </p>}
                    {(!loading && todos.length === 0) && <p> Crea un ToDo 😊 </p>}
                    {(!loading && !searchTodos.length && todos.length > 0) && <p> no pude encontrar este todo 😞</p>}
                    {searchTodos.map(todo => (
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
                <CreateTodoButton onAdd={() => addTodo(prompt("escribe tu nueva tarea"))} />

            </div>
        </React.Fragment>
    );
}
export { AppUI }