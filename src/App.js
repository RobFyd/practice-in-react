import { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const inputRef = useRef(null);

  return (
    <>
      <p><input ref={inputRef} /></p>
      <button onClick={() => inputRef.current.focus()}>
        Set focus for input
      </button>
    </>
  );
}

export default App;

