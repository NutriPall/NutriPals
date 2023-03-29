import React, { useState } from 'react';

function App() {

  const [query, setQuery] = useState('');

  return (
    <div>
      <p>{query}</p>
    </div>
  );
}

export default App;
