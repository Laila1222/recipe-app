import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  useParams,
} from "react-router-dom";
import "./Recipe.css";

const Recipe = ({ recipe, getChosenRecipe }) => {
  const createUrlName = (recipeLabel) => {
    // Make all words capitalized in label
    const capitalized =
      recipeLabel.charAt(0).toUpperCase() + recipeLabel.slice(1);
    // Remove spaces
    const splittedString = capitalized.replace(/\s/g, "");
    return splittedString;
  };

  

  console.log(recipe);
  return (
    <div className="recipe">
      <Link to={`/recipe/${createUrlName(recipe.label)}`}>
        <img src={recipe.image} alt="meal" className="recipe-image" onClick={() => {getChosenRecipe('csirke')}} />
      </Link>
      <Link to={`/recipe/${createUrlName(recipe.label)}`}>
        <h3 className="recipe-label">{recipe.label}</h3>
      </Link>

      <div className="time-cal-container">
        <p className="recipe-labels">Calories: {recipe.calories}</p>
        <p className="recipe-labels">Time: {recipe.time}</p>
      </div>
    </div>
  );
};

export default Recipe;
