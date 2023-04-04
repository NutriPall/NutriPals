import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutUs from "@pages/About-us";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import "./style/App.css";
import RecipeList from '@pages/RecipeList';
import RecipeDetails from '@components/RecipeDetails/RecipeDetails';
import ContactUs from "@pages/ContactUs/ContactUs";
import Footer from "@components/Footer/Footer";
import BurgerMenu from "@components/BurgerMenu/BurguerMenu";

function App() {

  return (
    <>
    <div>
          <BurgerMenu />
          <div className="routes">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/recipes-list" element={<RecipeList />} />
            <Route path="/recipe/:id" element={<RecipeDetails />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
          </div>
          <Footer />
    </div>
    </>
  );
}

export default App;
