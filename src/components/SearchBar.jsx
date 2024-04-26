import React from "react";
import "./css/SearchBox.css";

function SearchBar() {
  return (
    <>
      <form id="search-box">
        <input
          id="search-bar"
          type="text"
          name="ingredients"
          placeholder="What's in your fridge?"
        />
        <input id="generate" type="submit" value="Generate" />
      </form>
      <div id="ingredient-filter">
        <input type="checkbox" id="ingredient-check" value="ingredient-check" />
        <label for="ingredient-check">
          Include ingredients that I don't have
        </label>
      </div>
    </>
  );
}

// NEEDS WORK
// const response = await fetch("https://api.edamam.com/api/recipes/v2s", {
//   method: "GET",
//   headers: {
//     "Content-Type": "application/json",
//     Authorization: "Bearer rg_v1_zhj0n9fa7frxk2swzmelhm6bdzwtpcry20hl_ngk",
//   },
//   body: JSON.stringify({
//     // fill variables here.
//     email: emailBody,
//   }),
// }).then((response) => response.text());

export default SearchBar;
