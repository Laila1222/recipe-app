import React, {createContext, useReducer, useState} from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
    url: ''

}

// Create context
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    // const [state, dispatch] = useReducer(AppReducer, initialState);
    // console.log(state);

    // // Actions
    // // Modify url
    // const newSearch = (newUrl) => {
    //     dispatch({
    //         type: 'NEW_SEARCH',
    //         url: newUrl
    //     })
    // }

    const [url, setUrl] = useState(initialState);
    const newSearch = (newUrl) => {
        console.log(newUrl);
        setUrl(newUrl);
        console.log(url);
    }

    return <GlobalContext.Provider value={{newSearch}}>{children}</GlobalContext.Provider>


}