import React from "react";
import { useLocalStorage } from "./useLocalStorage";


const TodoContext = React.createContext();

function TodoProvider(props) {
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
    } = useLocalStorage("TODOS_V1", [])
    const [searchValue, setSearchValue] = React.useState('');

    const totalTodos = todos.length;
    const completedTodos = todos.filter(todo => todo.completed).length;

    const searchTodos = (list, text) => (list.length >= 0) ?
        todos.filter(todo => todo.text.toLowerCase().includes(text.toLowerCase())) :
        todos

    let completeTodo = (id) => {
        const newTodos = [...todos];
        const todoIndex = todos.findIndex(todo => todo.id === id);
        newTodos[todoIndex].completed = !todos[todoIndex].completed;
        saveTodos(newTodos)
    }

    const addTodo = (text) => {
        const newTodos = [...todos];
        const newId = todos.length === 0 ? 0 : todos[todos.length - 1].id + 1;
        const newTodo = {
            id: newId,
            text: text,
            completed: false
        }
        text ? newTodos.push(newTodo) : alert("no creaste ningun todo");
        saveTodos(newTodos)

    }
    const removeTodo = (id) => {
        const newTodos = [...todos];
        const todoIndex = todos.findIndex(todo => todo.id === id);
        newTodos.splice(todoIndex, 1)
        saveTodos(newTodos)
    }
    return (
        <TodoContext.Provider value={{
            todos,
            error,
            loading,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchTodos: searchTodos(searchTodos, searchValue),
            completeTodo,
            addTodo,
            removeTodo,

        }}>
            {props.children}
        </TodoContext.Provider>
    )
}
export { TodoContext, TodoProvider };