import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  useParams,
} from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
import "./Recipe.css";

const Recipe = ({ recipe, initialState }) => {
  // Import state and dispatch from GlobalContext
  const { selectRecipe } = useContext(GlobalContext);

  const saveToLocalStorage = (recipe) => {
    localStorage.setItem('selectedRecipe', JSON.stringify(recipe));
    console.log('saved to local storage', localStorage.getItem('selectedRecipe'));
  }

  // If image or title is clicked
  const recipeClicked = (recipe) => {
    // Use the function from the context, that will change the recipe in the global context.
    saveToLocalStorage(recipe);
    selectRecipe(recipe);
  };

  const createUrlName = (recipeLabel) => {
    // Make all words capitalized in label
    const capitalized =
      recipeLabel.charAt(0).toUpperCase() + recipeLabel.slice(1);
    // Remove spaces
    const splittedString = capitalized.replace(/\s/g, "");
    return splittedString;
  };

  
  return (
    <div className="recipe">
      <Link to={`/recipe/${createUrlName(recipe.label)}`}>
        <img
          src={recipe.image}
          alt="meal"
          className="recipe-image"
          onClick={() => {
            recipeClicked(recipe);
          }}
        />
      </Link>
      <Link to={`/recipe/${createUrlName(recipe.label)}`}>
        <h3
          className="recipe-label"
          onClick={() => {
            recipeClicked(recipe);
          }}
        >
          {recipe.label}
        </h3>
      </Link>

      <div className="time-cal-container">
        <p className="recipe-labels">Calories: {recipe.calories}</p>
        <p className="recipe-labels">Time: {recipe.time}</p>
      </div>
    </div>
  );
};

export default Recipe;
