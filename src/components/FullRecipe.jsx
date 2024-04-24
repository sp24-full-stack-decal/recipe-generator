import React from 'react'
import "./css/FullRecipe.css";

function FullRecipe() {
  return (
    <div className="full-recipe">
      <div className="searchbar">
        <SearchBar/>
      </div>
      <div clasName="body">
        <div className="left">
          <div className="dish bordered">
          </div>
        </div>
        <div className="right">
          <div className="ingredients bordered"></div>
          <div className="steps bordered"></div>
        </div>
      </div>

    </div>
  )
}

export default FullRecipe
