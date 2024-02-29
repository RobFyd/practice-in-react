import Section from "../../common/Section";
import { useState, useEffect, useRef } from "react";
// import "./style.css";

function Counter() {
  // state (redux)
  const [count, setCount] = useState(0); // hook useState  - return array with two elements: value and function to change value, must be in function component, one argument is initial value
  const intervalRef = useRef(null); // hook useRef - return object with property current, which is empty by default, can be used to store any value, can be used in function component and class component
  const inputRef = useRef(null);

  const [name, setName] = useState(""); // <form> in react - <input> and <textarea>
  const [age, setAge] = useState("1 - 20"); // <form> in react - <select>
  const [adult, setAdult] = useState(false); // <form> in react - <input type="checkbox">
  const onSelectChange = ({ target }) => setAge(target.value); // for <select> in <form>
  const onAdultChange = ({ target }) => setAdult(target.checked); // for <input type="checkbox"> in <form>
  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name} and age: ${age} was sent. Adult: ${adult}`);
  };

  // useEffect(() => {
  //   document.title = `Counter: ${count}, name: ${name}`;
  // }, [count, name]);

  // action - code which change state (redux)
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      // before intervalRef.current was setInterval
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  const stopCount = () => {
    clearInterval(intervalRef.current);
  };

  const focusInput = () => {
    inputRef.current.focus(); // focus on input
  };

  return (
    <>
      <Section title="Counter" stats={<div className="counter"></div>} />
      <div className="containerDiv">
        <p className="containerP">Count: {count}</p>
        <button onClick={stopCount}>STOP count</button>
        <button onClick={() => setCount((count) => count + 10)}>+10</button>
      </div>

      <div className="containerDiv">
        <form onSubmit={onFormSubmit}>
          <p>
            Name:{" "}
            <input // <input> in react is same as <textarea>
              value={name}
              onChange={({ target }) => setName(target.value)}
            />
          </p>
          <p>{name}</p>

          <select value={age} onChange={onSelectChange}>
            <option>1 - 20</option>
            <option>21 - 50</option>
            <option>51 - 100</option>
          </select>

          <div className="containerDiv">
            <label>
              I am adult:
              <input type="checkbox" checked={adult} onChange={onAdultChange} />
            </label>
          </div>
          <button>Send</button>
        </form>

        <>
          <p>
            <input ref={inputRef} />
          </p>
          <button onClick={focusInput}>set focus</button>
        </>
      </div>
    </>
  );
}

export default Counter;
