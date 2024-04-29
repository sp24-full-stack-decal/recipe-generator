import React from "react";
import { getRecipesData } from "../helper/recipesData";
import Preview from "../components/Preview";
import RecipePreview from "../components/RecipePreview";

function ResultsPage() {
  const recipes = getRecipesData();

  return (
    <div>
      {/* Printing out results */}
      {recipes.map((recipe) => (
        <div key={recipe.recipe.url}>
          <RecipePreview
            name={recipe.recipe.label}
            link={recipe.recipe.url}
            ingredients={recipe.recipe.ingredients.map(
              (item) => item.text + " "
            )}
          />
          {console.log(recipe.recipe.ingredients.map((item) => item.text))}
          <br></br>
        </div>
      ))}
    </div>
  );
}

export default ResultsPage;
