import React from 'react'
import SearchBar from "../components/SearchBar";

function SearchPage() {
  return (
    <div className="app">
      <div id="landing-box">
        <h1>
          Generate your<span id="personalized"> personalized </span>recipe
        </h1>
        <SearchBar />
      </div>
    </div>
  );
}

export default SearchPage;
