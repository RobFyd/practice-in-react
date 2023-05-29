import { useState, useEffect } from "react";
import './App.css';

const useWindowDimenmsions = () => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const updateDimensions = () => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions)
    };
  }, []);

  return dimensions;
}

function App() {
const dimensions = useWindowDimenmsions();

  return (
    <>
      width: {dimensions.width}<br />
      height: {dimensions.height}<br />
    </>
  );
}

export default App;