import Container from "../../../common/Container";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import Form from "./Form";
import TasksList from "./TasksList";
import Buttons from "./Buttons";
import Search from "./Search";
import "./style.css";
import { hello as goodMorning, name } from "../../../utilis/hello";
import { useState, useEffect } from "react";
import { useLocalStorageState } from "../../../useLocalStorageState";
import styled, { css, ThemeProvider } from "styled-components";

function TasksPage() {
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

  // view (redux)
  return (
    <>
      {/* ////////tasks list main return ////////////////////////////////////////////////////////////////// */}

      <Container>
        <Header title="Task List" />

        <Section title="Add task" form={<Form />} />

        <Section title="Searcher" form={<Search />} />

        <Section
          title="Tasks list"
          body={<TasksList />}
          extraHeaderContent={<Buttons />}
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

export default TasksPage;

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
