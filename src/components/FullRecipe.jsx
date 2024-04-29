import React from 'react'
import "./css/FullRecipe.css";
import SearchBar from "./SearchBar";


function FullRecipe() {
  return (
    <div className="full-recipe">
      <div className="searchbar">
        <SearchBar/>
      </div>
      <div className="content">
        <div className="left">
          <div className="dish bordered">
            <p className="title">Tomato Soup</p>
          </div>
        </div>
        <div className="right">
          <div className="ingredients bordered">
            <p className="title">Ingredients</p>
            <p className="text">
              <ul>
                <li>1 teaspoon of salt</li>
                <li>3 tomatoes</li>
                <li>3 potatoes</li>
              </ul>
            </p>
          </div>
          <div className="steps bordered">
            <p className="title">Steps</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default FullRecipe;
