import React from "react";

function openWin() {
    window.open("https://www.w3schools.com");
  }

function RecipeCard({ recipe }) {

    const { label, calories, mealType, source } = recipe;
    const imageUrl = recipe.images?.SMALL?.url;
    const nrIngredients = recipe.ingredientLines.length

  return recipe ? (
    
    <div class="container text-center">
      {imageUrl && <img class="shadow p-2 mb-3 bg-body-tertiary rounded" src={imageUrl} alt={label} />}
      <h5>{label}</h5>
        <p>{calories.toFixed(0)} cal</p>
        <p>{nrIngredients} ingred | {mealType}</p>
        <p>{source}</p>
        <form>
            <input type="button" value="Open Recipe" onClick={openWin}/>
        </form>
    </div>
  ) : null;
}



export default RecipeCard