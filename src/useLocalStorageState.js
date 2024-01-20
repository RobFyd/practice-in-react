import { useState, useEffect } from "react";

export const useLocalStorageState = (keyName, initialValue) => {
    const getInitialState = () => {
      const localStorageCounter = localStorage.getItem(keyName);
      if (localStorageCounter === null) {
        return initialValue;
      }
  
      return JSON.parse(localStorage.getItem(keyName));
    };
  
    const [state, setState] = useState(getInitialState); // custom hook
  
    useEffect(() => {
      localStorage.setItem(keyName, JSON.stringify(state));
    }, [state]);
  
    return [state, setState];
  };