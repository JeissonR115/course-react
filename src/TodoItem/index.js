import React from "react";
import './TodoItem.css'
function TodoItem(props) {
    return (
        <li className="TodoItem" id={props.id} >
            <samp
                className={`material-symbols-outlined ${props.completed ? "checkBox-checked" : ""} `}
                id={"todoItem-checkBox" + props.id}
                onClick={props.onComplete}
            >
                {props.completed ? "check_circle" : "radio_button_unchecked"}
            </samp>
            <p
                className={props.completed ? "todoItem-checked" : "todoItem-unchecked"}
                onClick={props.onComplete}
            >{props.text}</p>
            <button
                className="close-button"
                onClick={props.onRemove}
            >
                <span className="material-symbols-outlined"
                onClick={props.removeTodo}
                >
                    close
                </span>
            </button>
        </li>
    );
}
export { TodoItem };