import React, { useState } from "react";
import axios from "axios";

const RecipeSearch = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  const searchRecipes = async () => {
    try {
      const response = await axios.get(
        `https://api.edamam.com/search?q=${query}&app_id=${
          import.meta.env.VITE_APP_ID
        }&app_key=${import.meta.env.VITE_APP_KEY}`
      );
      setRecipes(response.data.hits);
      console.log(response);
    } catch (error) {
      console.error("Error fetching recipes: ", error);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    searchRecipes();
  };

  return (
    <>
      <form id="search-box" onSubmit={handleSearch}>
        <input
          id="search-bar"
          type="text"
          placeholder="What's in your fridge?"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          name="ingredients"
        />
        <input id="generate" type="submit" value="Generate" />
      </form>
      <div id="ingredient-filter">
        <input type="checkbox" id="ingredient-check" value="ingredient-check" />
        <label htmlFor="ingredient-check">
          Include ingredients that I don't have
        </label>
      </div>

      <div>
        {recipes.map((recipe) => (
          <div key={recipe.recipe.uri}>
            <h2>{recipe.recipe.label}</h2>
          </div>
        ))}
      </div>
    </>
  );
};

export default RecipeSearch;
