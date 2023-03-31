import RecipeList from '@pages/RecipeList';
import React, { useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar';

function App() {

  const [query, setQuery] = useState('');

  return (
    <div>
      {/* <p>{query}</p> */}
      <SearchBar />
      <RecipeList />
    </div>
  );
}

export default App;
