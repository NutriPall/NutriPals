import React from "react";
import { Link} from "react-router-dom"



function RecipeCard({ recipe }) {

    const { label, calories, mealType, source } = recipe;
    const imageUrl = recipe.images?.SMALL?.url;
    const nrIngredients = recipe.ingredientLines.length
    const recipeId = recipe.uri.slice(recipe.uri.indexOf("_") + 1);

  return recipe ? (
    
    <div class="container text-center">
      {imageUrl && <img class="shadow p-2 mb-3 bg-body-tertiary rounded" src={imageUrl} alt={label} />}
      <h5>{label}</h5>
        <p>{calories.toFixed(0)} cal</p>
        <p>{nrIngredients} ingred | {mealType}</p>
        <p>{source}</p>
        <Link to={`/recipe/${recipeId}`}>
          <button type="button" >Open Recipe</button>
        </Link>
    </div>
  ) : null;
}



export default RecipeCard