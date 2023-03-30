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
      
      .then((response) => {
        setRecipe(response.data.recipe)
      // console.log(response.data.recipe)
    });
      
  }

  useEffect(() => {
    getSingleRecipe();
  }, []);

  return recipe ? (
    <div>
      <h1>{recipe.label}</h1>
      <div>
        <img class="shadow p-2 mb-3 bg-body-tertiary rounded" 
          src={recipe.images?.SMALL?.url} alt={recipe.label} />
        <section>
          
          <p>Servings: {recipe.yield}</p>
          <p>{recipe.calories.toFixed(0)/recipe.yield} cal/serv</p>
          <p>{recipe.dishType}</p>
          <p>cooking time: {recipe.totalTime} min</p>
        </section>
        
      </div>
      <section className="listIngredients">
          <h1>Ingredients</h1>
          {recipe?
          recipe.ingredientLines.map((ingredient,index)=>(
            <div key={index}>
              <p>{ingredient}</p>
            </div>
            )):null}
      </section>
      <section className="nutFacts">
          <h1>Nutrition</h1>
              {recipe?
                  recipe.healthLabels.map((label,index)=>(
                    <span key={index}>
                      {label}{index !== recipe.healthLabels.length-1 && ", "}
                    </span>
                    )):null} 
          <h3>Diet Labels</h3>
              {recipe?
                  recipe.dietLabels.map((dietLabel,index)=>(
                      <span key={index}>
                      {dietLabel}{index !== recipe.dietLabels.length-1 && ", "}
                      </span>
                      )):null} 
              <section className="row row-cols-3">
                <p>{recipe.totalNutrients.FAT.label}</p>
                <p>{recipe.totalNutrients.FAT.quantity.toFixed(0)}</p>
                <p>{recipe.totalNutrients.FAT.unit}</p>
              </section>
              <section className="row row-cols-3">
                <p>{recipe.totalNutrients.SUGAR.label}</p>
                <p>{recipe.totalNutrients.SUGAR.quantity.toFixed(0)}</p>
                <p>{recipe.totalNutrients.SUGAR.unit}</p>
              </section>
              <section className="row row-cols-3">
                <p>{recipe.totalNutrients.FIBTG.label}</p>
                <p>{recipe.totalNutrients.FIBTG.quantity.toFixed(0)}</p>
                <p>{recipe.totalNutrients.FIBTG.unit}</p>
              </section>



      </section>
      

      
    </div>
  ) : null;
};

export default RecipeDetails;
