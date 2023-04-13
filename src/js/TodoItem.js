import React from "react";
import '../css/TodoItem.css'
function TodoItem(props) {
    const onCompleted = () => {
        if(!props.completed){
            alert("completaste la tarea: "+ props.text);
            return true;
        }
        else{
            alert("No completaste la tarea: "+ props.text);
            return false;
        }
    }
    const onDelete = () =>{
        alert("borraste el ToDo")
    }
    return (
        <li className="TodoItem" id={props.id} >
            <samp 
                className={`material-symbols-outlined ${props.completed ? "checkBox-checked":""} `} 
                id={"todoItem-checkBox" + props.id}
                onClick={onCompleted}
                >
                done
            </samp>
            <p className={props.completed ? "todoItem-checked":""}>{props.text}</p>
            <button 
                className="close-button"
                onClick={onDelete}
                >
                <span className="material-symbols-outlined">
                    close
                </span>
            </button>
        </li>
    );
}
export { TodoItem };