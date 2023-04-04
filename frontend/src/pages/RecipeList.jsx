import React, { useState, useEffect } from "react";
import axios from "axios"
import RecipeCard from "../components/RecipeCard/RecipeCard";
import SearchBar from "@components/SearchBar/SearchBar";
import SearchFilter from "@components/SearchFilter/SearchFilter";
import { object } from "prop-types";

function RecipeList() {
  // Save data fetch in a state
  const [ recipes, setRecipes ] = useState("");
  const [ query, setQuery ] = useState('');
  const [filter, setFilter] = useState("")
  const [filters, setFilters] = useState({})
  

  //* fetch the new endpoint using the value of the search
  const searchRecipe = () => {
    axios
      .get(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=bdcebb08&app_key=5d51c05d804fb3f9b51559d2857c8bb0`)      
      .then((response) => {
        console.log(response.data.hits)
        setRecipes(response.data.hits)
      });
  };

  //* for each value that has been insert, save it on a state
  const handleChange = (e) => {
    setQuery(e.target.value);
  };


  //* when the state changes, update the component
  useEffect(() => {
    handleFilterResults()
  }, [filters]);



    const handleFilterResults = () => {
      if (Object.keys(filters).length > 0) {
      const trueFilters = Object.filter( filters, filter => filter === true )
      console.log(trueFilters)
      }
    }

    const handleFilter = (e) => {
        setFilters({...filters,[e.target.name]:e.target.checked}) 
      
      // if (e.target.checked) {
      //   setFilter(recipes.filter(recipe => recipe.recipe.healthLabels.includes(e.target.value)))
      // } else {
      //   setFilter("")
      // }    
    }  


    

  return (
    <div>
      <br/>
      <h1>Recipe List</h1>
      < SearchBar query={query} handleChange={handleChange} searchRecipe={searchRecipe} />
      <SearchFilter handleFilter={handleFilter} />
    
      <div className="row row-cols-sm-1 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 justify-content-center">
        {recipes && filter==="" 
          // * render data inside cards using map() to iterate all elements fetched
        ? recipes.map((recipe, index) => (
            <div key={index}>
                <RecipeCard recipe={recipe.recipe} />
            </div>
        ))
        : filter ? filter.map((recipe, index) => (
          <div key={index}>
              <RecipeCard recipe={recipe.recipe} />
          </div>
        )): null}
      </div>
    </div>
  );
}

export default RecipeList;
