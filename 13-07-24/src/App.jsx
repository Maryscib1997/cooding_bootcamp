import React, { useState } from 'react';
import Post from './Post';

const App = () => {
  const [count, setCount] = useState(1);

  return (
    <div className="app">
      <button onClick={() => setCount(count + 1)}>Next Post</button>
      <Post postId={count} />
    </div>
  );
};

export default App;
