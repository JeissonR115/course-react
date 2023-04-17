import React from "react";
import './TodoSearch.css'
function TodoSearch({searchValue, setSearchValue}) {

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