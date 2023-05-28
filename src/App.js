import { useState, useEffect } from "react";
import './App.css';

const useDocumentTitle = (counter) => {
  useEffect(() => {
    document.title = `Counter: ${counter}`;
  }, [counter]);
};

function App() {
  const getInitialCounter = () => {
    const localStorageCounter = localStorage.getItem("counter");
    if (localStorageCounter === null) {
      return 0;
    }
    return JSON.parse(localStorage.getItem("counter"));
  };

  const [counter, setCounter] = useState(getInitialCounter);
  useEffect(() => {
    localStorage.setItem("counter", JSON.stringify(counter));
  }, [counter]);

  useDocumentTitle(counter);

  return (
    <>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>increase counter</button>
    </>
  );
}

export default App;

//5:15 min