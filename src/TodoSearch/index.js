import React from "react";
import './TodoSearch.css'
import { TodoContext } from "../TodoContext";

function TodoSearch() {

    const {searchValue, setSearchValue} = React.useContext(TodoContext);
    const onSearchValueChange = event => setSearchValue(event.target.value)

    return (
        <div className="search-container">
            <label htmlFor="search" >
                <span className="material-symbols-outlined">
                    search
                </span>
            </label>
            <input
                id="search"
                className="TodoSearch"
                placeholder="search"
                onChange={onSearchValueChange}
            />
        </div>
    );

}
export { TodoSearch };