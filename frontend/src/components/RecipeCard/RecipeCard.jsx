import React from "react";

function RecipeCard({ recipe }) {
  const { label } = recipe

    return(
        recipe ? (
            <div>
                <h2>{label}</h2>
            </div>
        ) : null
    );
}

export default RecipeCard