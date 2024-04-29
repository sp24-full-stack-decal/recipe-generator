import React, { useState } from "react";
import axios from "axios";
import { setRecipesData } from "../helper/recipesData";
import "./css/SearchBox.css";
import Preview from "../components/Preview";
import ResultsPage from "../pages/ResultsPage";
import RecipePreview from "./RecipePreview";

const RecipeSearch = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  const searchRecipes = async () => {
    /* API CALL */
    try {
      const response = await axios.get(
        `https://api.edamam.com/search?q=${query}&app_id=${
          import.meta.env.VITE_APP_ID
        }&app_key=${import.meta.env.VITE_APP_KEY}`
      );
      setRecipes(response.data.hits);
      setRecipesData(response.data.hits);
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
      {/* The Search Bar + Triggers handleSearch when submitted  */}
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
        {/* <input type="checkbox" id="ingredient-check" value="ingredient-check" />
        <label htmlFor="ingredient-check">
          Include ingredients that I don't have
        </label> */}
      </div>

      <div>
        {/* printing out results*/}
        {recipes.map((recipe) => (
          <div key={recipe.recipe.uri}></div>
        ))}
        <ResultsPage />
      </div>
    </>
  );
};

export default RecipeSearch;
