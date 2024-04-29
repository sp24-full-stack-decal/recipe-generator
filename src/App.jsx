import React from "react";
import "./index.css";
import SearchPage from "./pages/SearchPage";
import SearchBar from "./components/SearchBar";
import RecipePreview from "./components/RecipePreview";

function App() {
  return (
      <div className="app">
        <SearchPage />
      </div>
  );
}

export default App;
