import { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCounter(counter => counter + 0.5);
    }, 1000);
  }, []);

const stopCounter = () => {
  clearInterval(intervalRef.current);
};

  return (
    <>
    <p>{counter}</p>
    <p>
      <button onClick={stopCounter}>STOP COUNTER</button>
    </p>
    </>
  );
}

export default App;

