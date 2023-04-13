import React from "react";
import '../css/TodoSearch.css'
function TodoSearch({searchValue,setSearchValue}) {
    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value)
    }

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
            <p>{searchValue}</p>
        </div>
    );

}
export { TodoSearch };