import Container from "../../../common/Container";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import Form from "../Form";
import TasksList from "../TasksList";
import Buttons from "../Buttons";
import "./style.css";
import { hello as goodMorning, name } from "../../../utilis/hello";
import { useState, useEffect, useRef } from "react";
import { useLocalStorageState } from "../../../useLocalStorageState";
import styled, { css, ThemeProvider } from "styled-components";

function Tasks() {
  // tasks list start
  // tasks list end
  ////////////////////////////////////////////////////////////////////////////////////

  // state (redux)
  const [count, setCount] = useState(0); // hook useState  - return array with two elements: value and function to change value, must be in function component, one argument is initial value
  const intervalRef = useRef(null); // hook useRef - return object with property current, which is empty by default, can be used to store any value, can be used in function component and class component
  const inputRef = useRef(null);

  ////////////////////////////////////////////////////////////////////////////////////

  const [name, setName] = useState(""); // <form> in react - <input> and <textarea>
  const [age, setAge] = useState("1 - 20"); // <form> in react - <select>
  const [adult, setAdult] = useState(false); // <form> in react - <input type="checkbox">
  const onSelectChange = ({ target }) => setAge(target.value); // for <select> in <form>
  const onAdultChange = ({ target }) => setAdult(target.checked); // for <input type="checkbox"> in <form>
  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name} and age: ${age} was sent. Adult: ${adult}`);
  };

  ////////////////////////////////////////////////////////////////////////////////////

  const [counter, setCounter] = useLocalStorageState("counter", 0); // custom hook
  // const [anotherData, setAnotherData] = useLocalStorageState(
  //   "anotherData",
  //   "something else"
  // ); // example of using custom hook
  useDocumentTitle(counter);

  ////////////////////////////////////////////////////////////////////////////////////

  const dimensions = useWindowDimensions();

  ////////////////////////////////////////////////////////////////////////////////////

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

  ////////////////////////////////////////////////////////////////////////////////////

  // view (redux)
  return (
    <>
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

      {/* ////////tasks list main return ////////////////////////////////////////////////////////////////// */}

      <Container>
        <Header title="Task List" />

        <Section title="Add task" form={<Form />} />

        <Section
          title="Tasks list"
          body={<TasksList />}
          extraHeaderContent={<Buttons />}
        />

        <Section
          title="Stats"
          stats={<div className="stats"></div>}
          thumb={<button className="thumbUp" />}
        />
      </Container>

      {/* ////////////////////////////////////////////////////////////////////////// */}

      <div className="div_counter">
        <p className="item">{counter}</p>
        <button
          className="item"
          onClick={() => setCounter((counter) => counter + 1)}
        >
          increase counter
        </button>
      </div>

      <div className="div_dimensions">
        Width: {dimensions.width}
        <br />
        Height: {dimensions.height}
      </div>

      {/* ////////////////////////////////////////////////////////////////////////// */}

      <ThemeProvider theme={theme}>
        <Button>Styled button</Button>
        <Button primary>Main button</Button>
        <Button>Styled button</Button>
        <PrimaryButton>Primary button</PrimaryButton>
        {/* as="a" - change tag from <button> to <a></a> */}
        <Button as="a" href="https://google.com">
          Hyperlink as button
        </Button>
        <StyledButton>Styled button</StyledButton>
      </ThemeProvider>
    </>
  );
}

export default Tasks;

///////////////////styled-component//////////////////////////////////////////////////

const Button = styled.button`
  border: 2px solid black;
  padding: 20px;
  margin: 20px;
  background: #ffffff;
  box-shadow: 0 0 5px 2px black;
  color: ${({ theme }) => theme.colors.primaryColor};
  cursor: pointer;

  ${({ primary }) =>
    primary &&
    css`
      background: ${({ theme }) => theme.colors.secondaryColor};
      color: wheat;

      &:hover {
        background: papayawhip;
        color: darkblue;
      }
    `}
`;

const PrimaryButton = styled(Button)`
  background: ${({ theme }) => theme.colors.primaryColor};
  color: whitesmoke;

  &:hover {
    background: darkgoldenrod;
    color: white;
  }
`;

//////
const Button2 = ({ className }) => (
  <button className={className}>Button 2</button>
);

const StyledButton = styled(Button2)`
  border: 2px solid black;
  padding: 20px;
  margin: 20px;
  background: yellow;
  box-shadow: 0 0 5px 2px black;
  color: black;
  cursor: pointer;

  &:hover {
    background: yellowgreen;
    color: darkblue;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    width: 100%;
  }
`;

//////
const theme = {
  colors: {
    primaryColor: "darkblue",
    secondaryColor: "crimson",
  },
  breakpoints: {
    mobile: 767,
    pc: 1024,
  },
};

////////////////////////////////////////////////////////////////////////////////////

goodMorning();
console.log(name);

const useDocumentTitle = (counter) => {
  useEffect(() => {
    document.title = `Counter: ${counter}`;
  }, [counter]);
};

////////////////////////////////////////////////////////////////////////////////////

const useWindowDimensions = () => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const updateDimensions = () => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  return dimensions;
};
