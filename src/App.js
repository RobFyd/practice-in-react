import { useEffect } from "react";
import { useLocalStorageState } from "./useLocalStorageState";
import './App.css';

const useDocumentTitle = (counter) => {
  useEffect(() => {
    document.title = `Counter: ${counter}`;
  }, [counter]);
};

function App() {

  const [counter, setCounter] = useLocalStorageState("counter", 0);
  useDocumentTitle(counter);

  return (
    <>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>increase counter</button>
    </>
  );
}

export default App;