import RecipeList from '@pages/RecipeList';
import RecipeDetails from '@components/RecipeDetails/RecipeDetails';
import {Routes, Route} from "react-router-dom"

function App() {

  return (
    <div>
      <Routes>
        <Route path="/recipes-list" element={<RecipeList />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
    </div>
  );
}

export default App;
