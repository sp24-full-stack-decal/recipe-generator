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
        <div className="name">
          <b>{props.name}</b>
        </div>
        <div className="text">
          <em>
            <a href={props.link} target="_blank">Recipe Link!</a> <br></br>
          </em>
          <img src={props.image} alt={props.name} />
          <div className="ingredient-container">
            <p>Ingredients: {props.ingredients}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipePreview;
