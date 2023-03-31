import RecipeList from '@pages/RecipeList';
import RecipeDetails from '@components/RecipeDetails/RecipeDetails';
import {Routes, Route} from "react-router-dom"
import ContactUs from '@components/ContactUs/ContactUs';

function App() {

  return (
    <div>
      <Routes>
        <Route path="/recipes-list" element={<RecipeList />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
