import React from "react";

function RecipeCard({ recipe }) {

    const { label } = recipe;
    const imageUrl = recipe.images?.SMALL?.url;

  return recipe ? (
    <div>
      <h6>{label}</h6>
      {imageUrl && <img class="shadow p-2 mb-5 bg-body-tertiary rounded" src={imageUrl} alt={label} />}
    </div>
  ) : null;
}



export default RecipeCard