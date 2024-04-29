import React from "react";
import { getRecipesData } from "../helper/recipesData";
import Preview from "../components/Preview";
import RecipePreview from "../components/RecipePreview";
import '../components/css/RecipePreview.css'

function ResultsPage() {
  const recipes = getRecipesData();

  return (
    <div className="cardsList">
      {/* Printing out results */}
      {recipes.map((recipe) => (
        <div key={recipe.recipe.url}>
          <RecipePreview
            name={recipe.recipe.label}
            link={recipe.recipe.url}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients.map(
              (item) => item.text + " "
            )}
          />
          <br></br>
        </div>
      ))}
    </div>
  );
}

export default ResultsPage;
