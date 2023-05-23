import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Counter: ${count}`;
  });

  return (
    <>
      <p>
        Counter: {count}
      </p>
      <p>
        <button onClick={() => setCount(count => count + 1)}>+1</button>
      </p>
    </>
  );
}

export default App;
