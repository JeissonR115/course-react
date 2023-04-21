import React from "react";
import './TodoCounter.css'
import { TodoContext } from "../TodoContext";

function TodoCounter() {
    const {totalTodos ,completedTodos } =React.useContext(TodoContext);
    return(
        <h2 className="TodoCounter"> Tienes {`${completedTodos}/${totalTodos}`} ToDo's terminados</h2>
    );
}
export {TodoCounter};