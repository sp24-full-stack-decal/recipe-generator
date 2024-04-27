import React from "react";
import "./index.css";
import SearchBar from "./components/SearchBar";
import RecipeSearch from "./RecipeSearch";

function App() {
  return (
    <>
      <div className="app">
        <div id="landing-box">
          <h1>
            Generate your<span id="personalized"> personalized </span>recipe
          </h1>
          <SearchBar />
          {/* <RecipeSearch /> */}
        </div>
      </div>
    </>
  );
}

export default App;
