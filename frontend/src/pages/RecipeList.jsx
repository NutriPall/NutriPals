import React, { useState, useEffect } from "react";
import axios from "axios"
import RecipeCard from "../components/RecipeCard/RecipeCard";
import SearchBar from "../components/SearchBar/SearchBar";

function RecipeList() {
  // Save data fetch in a state
  const [ recipes, setRecipes ] = useState();
  const [ query, setQuery ] = useState('');

  //* fetch Api endpoint using axios.get
  // const fetchRecipe = () => {
  //   axios
  //   .get("https://api.edamam.com/api/recipes/v2")
  //   // .get("https://api.edamam.com/api/recipes/v2?type=public&app_id=bdcebb08&app_key=5d51c05d804fb3f9b51559d2857c8bb0&imageSize=REGULAR&field=uri&field=label&field=image")
  //   .then((response) => setRecipe(response.data.results));
  //   // console.log(response.data.results)
  // };

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
  const handleChange = (value) => {
    setQuery(value);
  };

  //* when the components mount, fetch data from the Api
  // useEffect(() => {
  //   fetchRecipe();
  // }, []);

  //* when the state changes, update the component
  useEffect(() => {
    searchRecipe();
  }, [query]);

  return (
    <div>
      <br/>
      <h1>Recipe List</h1>
      <button onClick={()=>handleChange("chicken")}>Chicken</button>
      <button onClick={()=>handleChange("tomato")}>Tomato</button>
      <button onClick={()=>handleChange("fish")}>Fish</button>
      {/* <SearchBar search={search} handleChange={handleChange} /> */}
      {/* //* 1st step use the button to fetch data on Click */}
      {/* Click a button to display a list of recipes.
      (handling events) */}
      <div>
        {recipes
          // * render data inside cards using map() to iterate all elements fetched
        ? recipes.map((recipe, index) => (
            <div key={index}>
                <RecipeCard recipe={recipe.recipe} />
            </div>
        ))
        : null}
      </div>
    </div>
  );
}

export default RecipeList;
