import React from "react";
// import { Link } from "react-router-dom";
import "./HomePage.css";
import image1 from "./HomepageImj/recipe1.jpg"
import image2 from "./HomepageImj/recipe2.png"
import image3 from "./HomepageImj/recipe3.jpg"
import image4 from "./HomepageImj/recipe4.jpg"
import image5 from "./HomepageImj/recipe5.jpg"
import image6 from "./HomepageImj/recipe6.jpg"

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
          <img src={image1} alt="recipe picture" />
        </div>

        <div className="recipe2">
          <img src={image2} alt="recipe picture" />
        </div>

        <div className="recipe3">
          <img src={image3} alt="recipe picture" />
        </div>
      </div>
      <div className="line2">
        <div className="recipe4">
          <img src={image4} alt="recipe picture" />
        </div>

        <div className="recipe5">
          <img src={image5} alt="recipe picture" />
        </div>

        <div className="recipe6">
          <img src={image6} alt="recipe picture" />
        </div>
      </div>
    </div>
  );
}
