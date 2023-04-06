import React from "react";
// import { Link } from "react-router-dom";
import "./HomePage.css";

export default function HomePage() {
  return (
    <div className="principal">
      <div className="description">
        <h2>
          Cooking is one of the most beautiful aspects of human life. Through it,
          we can experience unique flavors, aromas and textures that make us feel
          alive and connected with the world around us. Discover a recipe with us.
        </h2>
      </div>
      <div className="line1">
        <div className="recipe1">
          <img src={recipe1} alt="recipe picture" />
        </div>

        <div className="recipe2">
          <img src="./HomePageImj/recipe2.png" alt="recipe picture" />
        </div>

        <div className="recipe3">
          <img src="./HomePageImj/recipe3.jpg" alt="recipe picture" />
        </div>
      </div>
      <div className="line2">
        <div className="recipe4">
          <img src="HomePageImj/recipe4.jpg" alt="recipe picture" />
        </div>

        <div className="recipe5">
          <img src="HomePageImj/recipe5.jpg" alt="recipe picture" />
        </div>

        <div className="recipe6">
          <img src="HomePageImj/recipe6.jpg" alt="recipe picture" />
        </div>
      </div>
    </div>
  );
}
