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
            Tomato soup
          </div>
        </div>
        <div className="right">
          <div className="ingredients bordered">
            ingredients
          </div>
          <div className="steps bordered">
            steps
          </div>
        </div>
      </div>

    </div>
  )
}

export default FullRecipe;
