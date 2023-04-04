import React from "react";
import TeamCard
 from "@components/TeamCard/TeamCard";

export default function AboutUs() {
  return (
    <div className="about-us-container">
      <div className="founding-story">
      <h1>Our Founding Story</h1>
      <ul>
        <li>NutriPals founders came together to simplify healthy eating for everyone</li>
        <li>With a database of thousands of recipes and the ability to sort by dietary preferences, NutriPals quickly became a go-to app for health-conscious individuals.</li>
        <li>Today, NutriPals continues to innovate and expand its offerings to make healthy eating more accessible and enjoyable than ever before.</li>
      </ul>
      <img className="about-us-img" src="https://i.imgur.com/qdcdNWe.png" alt="image of a jar with colorful food" title="Cooking Healthy" />
      </div>
      <div className="meet-the-team">
        <h2>The People Making it Happen</h2>
        <TeamCard fullName="Cláudia Almeida" src="https://i.imgur.com/tsbuMRF.png" description="From translator to junior developer, Cláudia Almeida joined the NutriPals team to help turn the company's vision of making healthy eating easy into a reality - a task she finds much more satisfying than simply translating «eat your veggies» into multiple languages." />
      </div>
    </div>
  );
}
