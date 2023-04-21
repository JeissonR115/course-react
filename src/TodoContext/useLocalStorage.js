import React from "react";
import { AppUI } from "../App/AppUI";

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
    return { 
        item, 
        saveItem, 
        loading, 
        error 
    }
}
export {useLocalStorage};