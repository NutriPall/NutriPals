import RecipeList from '@pages/RecipeList';
import React, { useState } from 'react';

function App() {

  const [query, setQuery] = useState('');

  return (
    <div>
      {/* <p>{query}</p> */}
      <RecipeList />
    </div>
  );
}

export default App;
