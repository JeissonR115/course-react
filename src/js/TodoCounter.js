import React from "react";
import '../css/TodoCounter.css'
function TodoCounter({total ,completed }) {
    return(
        <h2 className="TodoCounter"> Tienes {`${completed}/${total}`} ToDo's terminados</h2>
    );
}
export {TodoCounter};