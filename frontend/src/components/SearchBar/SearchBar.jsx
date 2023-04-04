import React from "react";

const SearchBar = ({ query, handleChange }) => {
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
      />
    </div>
  );
};

export default SearchBar;