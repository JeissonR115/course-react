import React from "react";

import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";

function AppUI({
        totalTodos, 
        completedTodos,
        searchValue, 
        setSearchValue,
        searchedTodos,
        completeTodo,
        addTodo,
        removeTodo,
}) {
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
                <CreateTodoButton onAdd={() => addTodo(prompt("escribe tu nueva tarea"))} />
            </div>
        </React.Fragment>
    );
}
export { AppUI }