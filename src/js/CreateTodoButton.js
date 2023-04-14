import React from "react";
import '../css/CreateTodoButton.css'
function CreateTodoButton(props) {
    return (
        <button
            className="CreateTodoButton"
            onClick={props.onAdd}    
        >
            <span className="material-symbols-outlined">
                add
            </span>
        </button>
    );
}
export { CreateTodoButton };