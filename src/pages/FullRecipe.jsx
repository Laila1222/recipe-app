import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
// import useReactRouter from 'use-react-router';
import { withRouter } from "react-router";

import "./FullRecipe.css";

const FullRecipe = (props) => {
  const { state, dispatch } = useContext(GlobalContext);

  //   Get data from local storage if exists
  const localStorageData = localStorage.getItem("selectedRecipe");

  //   Check if there's data in context or local storage
  const getData = () => {
    console.log(localStorageData);
    console.log(state.recipe);
    // If there is data in context, use that
    if (state.recipe) {
      return state.recipe;
    } else if (localStorageData) {
      const data = JSON.parse(localStorageData);
      return data;
    } else {
      return undefined;
    }
  };

  //   Return the available data
  const useData = (data) => {
    console.log(data);
    //   Redirect to homepage if no data available
    if (!data) {
        console.log('should redirect');
      props.history.push("/");
    //   reload page, otherwise it wants to keep rendering fullrecipes page
      window.location.reload();
    } else {
       
      return data;
    }
  };

  //   The data that we are actually using on the website
  const finalData = useData(getData());


  const onBackButtonClick = () => {
    //   Clear local storage
    localStorage.removeItem('selectedRecipe');
  }

  return (
    <div className="full-recipe-container">
      <div className="full-recipe-navbar">
        <Link to="/"><p className="backButton" onClick={() => onBackButtonClick()}>Back</p></Link>
      </div>
      <div className="full-recipe-image-container">
        <img src={finalData.image} alt="meal" className="full-recipe-image" />
      </div>
      <div className="full-recipe-content">
        <div className="full-recipe-sidebar">
          <h3 className="full-recipe-ingredient-title">Ingredients</h3>
          <div className="full-recipe-small-details">
            <p className="small-details">{finalData.time} minutes</p>
            <p className="small-details">4 persons</p>
            <p className="small-details">{finalData.calories} calories</p>
          </div>
          <div className="full-recipe-ingredients-container">
            <ul>
              <li className="full-recipe-ingredients-list">egg</li>
            </ul>
          </div>
        </div>
        <div className="full-recipe-method-container">
          <h2 className="full-recipe-label">{finalData.label}</h2>
          <p className="full-recipe-method">Balalkjsdfklajsdf</p>
        </div>
      </div>
    </div>
  );
};

export default withRouter(FullRecipe);
