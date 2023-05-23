import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    document.title = `Counter: ${count}, name: ${name}`;
  }, [count, name]);

  return (
    <>
      <p>
        Counter: {count}
      </p>
      <p>
        <button onClick={() => setCount(count => count + 1)}>+1</button>
      </p>
      <p>
        Name: <input value={name} onChange={({ target }) => setName(target.value)} />
      </p>
    </>
  );
}

export default App;
