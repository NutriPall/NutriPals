import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "@pages/About-us";
import Recipes from "@pages/Recipes";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import "./style/App.css";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/recipes/:nutritionalValue" element={<Recipes />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
