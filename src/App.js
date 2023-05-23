import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount(count => count + 1);
    }, 1000);
  }, []);

  return (
    <>
      <p>
        Counter: {count}
      </p>
    </>
  );
}

export default App;
