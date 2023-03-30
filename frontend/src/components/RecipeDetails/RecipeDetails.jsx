import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState();

  function getSingleRecipe() {
    axios
      .get(
        `https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=bdcebb08&app_key=5d51c05d804fb3f9b51559d2857c8bb0`
      )
      .then((response) => setRecipe(response.data.recipe));
  }

  useEffect(() => {
    getSingleRecipe();
  }, []);

  return recipe ? (
    <div>
      <h1>{recipe.label}</h1>
    </div>
  ) : null;
};

export default RecipeDetails;
