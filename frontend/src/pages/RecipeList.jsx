import React, { useState, useEffect } from "react";
import axios from "axios"
import RecipeCard from "../components/RecipeCard/RecipeCard";

function RecipeList() {
  // Save data fetch in a state
  const [ recipes, setRecipes ] = useState();
  const [ query, setQuery ] = useState('');

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


  //* when the state changes, update the component
  useEffect(() => {
    searchRecipe();
  }, [query]);

  return (
    <div>
      <br/>
      <h1>Recipe List</h1>

      <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-primary" onClick={()=>handleChange("chicken")}>Chicken</button>
        <button type="button" class="btn btn-primary" onClick={()=>handleChange("fish")}>Fish</button>
        <button type="button" class="btn btn-primary" onClick={()=>handleChange("beef")}>Beef</button>
        <button type="button" class="btn btn-primary" onClick={()=>handleChange("pork")}>Pork</button>
        <button type="button" class="btn btn-primary" onClick={()=>handleChange("vegetable")}>Vegetable</button>
      </div>

      <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 justify-content-center mt-5 mb-5">
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
