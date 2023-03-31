import React from "react";
import Home from "./pages/Home";
import "./style/App.css";
import RecipeList from '@pages/RecipeList';
import RecipeDetails from '@components/RecipeDetails/RecipeDetails';
import {Routes, Route} from "react-router-dom"

function App() {

  return (
    <div className="App">
      <Home />
    <div>
      <Routes>
        <Route path="/recipes-list" element={<RecipeList />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
    </div>
    </div>
  );
}

export default App;
