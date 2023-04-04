import React from "react";
import search from "./image-search/search-icon.png"

const SearchBar = ({ query, handleChange, searchRecipe }) => {


    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        searchRecipe()
      }
    }

  return (
    <div className="searchBar">
      <label htmlFor="query">Search: </label>
      <input
        className="searchBar-input"
        type="search"
        name="query"
        placeholder="Search for your favorite recipe"
        value={query}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button type="button" name="submit" onClick={searchRecipe}><img src={search} alt="search" /></button>
    </div>
  );
};

export default SearchBar;