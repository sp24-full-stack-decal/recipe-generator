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
        <div className="name">{props.name}</div>
        <div className="text">Ingredients: {props.ingredients}</div>
      </div>
    </>
  );
};

export default RecipePreview;
