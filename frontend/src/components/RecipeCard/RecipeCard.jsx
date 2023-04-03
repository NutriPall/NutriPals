import React from "react";
import { Link} from "react-router-dom"

function RecipeCard({ recipe }) {

    const { label, calories, mealType, source } = recipe;
    const imageUrl = recipe.images?.REGULAR?.url;
    const nrIngredients = recipe.ingredientLines.length
    const recipeId = recipe.uri.slice(recipe.uri.indexOf("_") + 1);

  return recipe ? (
    
    <div class="container text-center">
      {imageUrl && <img class="shadow p-2 mb-3 bg-body-tertiary rounded" src={imageUrl} alt={label} />}
      <h4>{label}</h4>
        <h5>{calories.toFixed(0)} cal</h5>
        <h5>{nrIngredients} ingred | {mealType}</h5>
        <h5>{source}</h5>
        <Link to={`/recipe/${recipeId}`}>
          <button className="btn btn-outline-secondary" type="button" >Open Recipe</button>
        </Link>
    </div>
  ) : null;
}

export default RecipeCard