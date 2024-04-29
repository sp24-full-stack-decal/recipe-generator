import React, { useState } from "react";
import "./css/RecipePreview.css";

const RecipePreview = (props) => {
  // const [recipeName, setRecipeName] = useState("Recipe Name");

  // const handleNameChange = (event) => {
  //   setRecipeName(event.target.value);
  // };

  return (
    <>
      <div className="card">
        {/*       <input
          type="text"
          className="name"
          value={recipeName}
          onChange={handleNameChange}
        /> */}
        <div className="name">
          <b>{props.name}</b>
        </div>
        <div className="text">
          Link: {props.link} <br></br>
          Ingredients: {props.ingredients}
        </div>
      </div>
    </>
  );
};

export default RecipePreview;
