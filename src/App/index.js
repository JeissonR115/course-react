//import './App.css';
import React from "react";
import { AppUI } from "./AppUI"
function useLocalStorage(itemName, initialValue) {
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true)
    const [item, setItem] = React.useState(initialValue);
    React.useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName);
                const parseItem = localStorageItem ? JSON.parse(localStorageItem) : localStorage.setItem(itemName, JSON.stringify(initialValue));
                setItem(parseItem)
                setLoading(false)

            } catch (error) {
                setError(error)
            }
        }, 1000)
    }
    )

    const saveItem = (newItem) => {
        try {
            setItem(newItem)
            localStorage.setItem(itemName, JSON.stringify(newItem));
        } catch (error) {
            setError(error)
        }
    }
    return { item, saveItem, loading, error }
}

function App() {

    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
    } = useLocalStorage("TODOS_V1", [])
    const [searchValue, setSearchValue] = React.useState('');

    const totalTodos = todos.length;
    const completedTodos = todos.filter(todo => todo.completed).length;

    const searchTodos = (list, text) => {
        if (list.length >= 0)
            return todos.filter(todo => todo.text.toLowerCase().includes(text.toLowerCase()))
        else
            return todos
    }

    let completeTodo = (id) => {
        const newTodos = [...todos];
        const todoIndex = todos.findIndex(todo => todo.id === id);
        newTodos[todoIndex].completed = !todos[todoIndex].completed;
        saveTodos(newTodos)
    }

    const addTodo = (text) => {
        const newTodos = [...todos];
        const newId = todos.length === 0 ? 0 : todos[todos.length - 1].id + 1;
        newTodos.push({
            id: newId,
            text: text,
            completed: false
        })
        saveTodos(newTodos)
    }
    const removeTodo = (id) => {
        const newTodos = [...todos];
        const todoIndex = todos.findIndex(todo => todo.id === id);
        newTodos.splice(todoIndex, 1)
        saveTodos(newTodos)
    }

    return (<AppUI
        error={error}
        loading={loading}
        totalTodos={totalTodos}
        completedTodos={completedTodos}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        searchedTodos={searchTodos(searchTodos, searchValue)}
        completeTodo={completeTodo}
        addTodo={addTodo}
        removeTodo={removeTodo}
    />);
}

export default App;
