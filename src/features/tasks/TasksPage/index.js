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
    </>
  );
}

export default TasksPage;

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
