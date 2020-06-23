import React from 'react'
import {
    Link
  } from "react-router-dom";

import './FullRecipe.css';

const FullRecipe = ({recipe}) => {
    return (
        <div className="full-recipe-container">
          <div className="full-recipe-navbar"><Link to="/">Back</Link></div>
          <div className="full-recipe-image-container">
              <img src="" alt="meal" className="full-recipe-image"/>
          </div>
          <div className="full-recipe-sidebar">
              <div className="full-recipe-small-details">
                  <p className="small-details">250 minutes</p>
                  <p className="small-details">4 persons</p>
              </div>
              <div className="full-recipe-ingredients-container">
                  <ul>
                      <li className="full-recipe-ingredients-list">egg</li>
                  </ul>
              </div>
          </div>
          <div className="full-recipe-method-container">
              <h2 className="full-recipe-label">Kenyér</h2>
              <p className="full-recipe-method">Balalkjsdfklajsdf</p>
          </div>
        </div>
    )
}

export default FullRecipe;
