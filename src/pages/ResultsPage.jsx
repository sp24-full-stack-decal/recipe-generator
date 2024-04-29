import React from 'react';
import { getRecipesData } from "../helper/recipesData";
import Preview from "../components/Preview";

function ResultsPage() {
  const recipes = getRecipesData();

  return (
    <div>
      {/* Printing out results */}
      {recipes.map((recipe) => (
        <div key={recipe.recipe.url}>
          <Preview name={recipe.recipe.label} text={recipe.recipe.url}/>
        </div>
      ))}
    </div>
  );
}

export default ResultsPage
