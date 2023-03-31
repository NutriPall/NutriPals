import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "@pages/Home";
import AboutUs from "@pages/About-us";
import RecipeList from "@pages/RecipeList";
import RecipeDetails from "@components/RecipeDetails/RecipeDetails";
import ContactUs from "@pages/Contact-us";



function Main() {

  return ( 
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/recipes-list" element={<RecipeList />} />
            <Route path="/recipe/:id" element={<RecipeDetails />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </div>
  );
}

export default Main;

