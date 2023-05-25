import { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  const intervalId = useRef();

  useEffect(() => {
    intervalId.current = setInterval(() => {
      setCounter(counter => counter + 1);
    }, 1000);
  }, []);

  const stopCounter = () => clearInterval(intervalId.current);

  return (
    <>
      <p>{counter}</p>
      <button onClick={stopCounter}>STOP COUNTER</button>
    </>
  );
}

export default App;

