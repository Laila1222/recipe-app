import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from '../context/GlobalState';

import "./FullRecipe.css";

const FullRecipe = () => {
    const {state, dispatch} = useContext(GlobalContext);
    console.log(state.recipe);

    const {label, calories, image, time} = state.recipe; 


  return (
    <div className="full-recipe-container">
      <div className="full-recipe-navbar">
        <Link to="/">Back</Link>
      </div>
      <div className="full-recipe-image-container">
        <img src={image} alt="meal" className="full-recipe-image" />
      </div>
      <div className="full-recipe-content">
        <div className="full-recipe-sidebar">
          <h3 className="full-recipe-ingredient-title">Ingredients</h3>
          <div className="full-recipe-small-details">
            <p className="small-details">{time} minutes</p>
            <p className="small-details">4 persons</p>
            <p className="small-details">{calories} calories</p>
          </div>
          <div className="full-recipe-ingredients-container">
            <ul>
              <li className="full-recipe-ingredients-list">egg</li>
            </ul>
          </div>
        </div>
        <div className="full-recipe-method-container">
          <h2 className="full-recipe-label">{label}</h2>
          <p className="full-recipe-method">Balalkjsdfklajsdf</p>
        </div>
      </div>
    </div>
  );
};

export default FullRecipe;
