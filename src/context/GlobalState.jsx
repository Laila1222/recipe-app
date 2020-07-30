import React, { useReducer } from "react";
// import AppReducer from "./AppReducer";

// Set what happens if changing/selecting recipe
const reducer = (state, action) => {
    switch (action.type) {
      case 'changeRecipe':
        return {
          ...state,
          recipe: action.recipe,
        };

      default:
        return state;
    }
  };

//   Initially, there's no recipe selected
  const initialState = { };

  const GlobalContext = React.createContext(initialState);

  const GlobalProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const selectRecipe = (recipe) => {
        // console.log('from state', recipe);
        dispatch({
            type: 'changeRecipe',
            recipe: recipe
        })
    }


    return (
        <GlobalContext.Provider value={{ state, dispatch, selectRecipe}}>
            {props.children}
        </GlobalContext.Provider>
    )
  }

  export { GlobalContext, GlobalProvider }




















// // Initial state
// const initialState = {
//     'label': 'répa'

// }

// const reducer = (state, action) => {
//     switch (action.type) {
//         case 'changeRecipe':
//             return { state: newRecipe };
//         default: return state;
//     }
// }

// const changeRecipe = ( {initialState}) => {
//     const [state, dispatch] = useReducer(reducer, )
// }

// // Create context
// export const GlobalContext = createContext(initialState);

// export const GlobalProvider = ({children}) => {
//     // const [state, dispatch] = useReducer(AppReducer, initialState);
//     // console.log(state);

//     const [recipe, setRecipe] = useState(initialState);

//     // const modifyContextRecipe = (newRecipe) => {
//     //     console.log('modified recipe fired', newRecipe);

//     //     setRecipe(newRecipe);

//     // }

//     // // Actions
//     // // Modify url
//     // const newSearch = (newUrl) => {
//     //     dispatch({
//     //         type: 'NEW_SEARCH',
//     //         url: newUrl
//     //     })
//     // }

//     // const [url, setUrl] = useState(initialState);
//     // const newSearch = (newUrl) => {
//     //     console.log(newUrl);
//     //     setUrl(newUrl);
//     //     console.log(url);
//     // }

//     return <GlobalContext.Provider value={{ recipe }}>{children}</GlobalContext.Provider>

// }
