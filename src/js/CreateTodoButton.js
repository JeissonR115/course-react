import React from "react";
import '../css/CreateTodoButton.css'
function CreateTodoButton() {
    const onClickButton = (msg) => {
        alert(msg)
    }
    return (
        <button
            className="CreateTodoButton"
            onClick={() => onClickButton('hols')}    
        >
            <span className="material-symbols-outlined">
                add
            </span>
        </button>
    );
}
export { CreateTodoButton };