import Container from "./Container";
import Header from "./Header";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import "./style.css";
import { hello as goodMorning, name } from "./utilis/hello";
import { useState, useEffect, useRef } from "react";
import { useLocalStorageState } from "./useLocalStorageState";

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

function App() {
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
  const [anotherData, setAnotherData] = useLocalStorageState(
    "anotherData",
    "something else"
  ); // example of using custom hook
  useDocumentTitle(counter);

  ////////////////////////////////////////////////////////////////////////////////////

  const dimensions = useWindowDimensions();

  ////////////////////////////////////////////////////////////////////////////////////

  // useEffect(() => {
  //   document.title = `Counter: ${count}, name: ${name}`;
  // }, [count, name]);

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

  const [hideDone, setHideDone] = useState(false);
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || [
      {
        id: 1,
        content: "React start",
        done: true,
        important: true,
      },
      {
        id: 2,
        content: "Eat breakfast",
        done: false,
        important: false,
      },
    ]
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const toggleHideDone = () => {
    setHideDone((hideDone) => !hideDone);
  };

  const removeTask = (id) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTasks((tasks) =>
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, done: !task.done };
        }
        return task;
      })
    );
  };

  const toggleTaskHighLight = (id) => {
    setTasks((tasks) =>
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, important: !task.important };
        }
        return task;
      })
    );
  };

  const setAllDone = () => {
    setTasks((tasks) => tasks.map((task) => ({ ...task, done: true })));
  };

  const addNewTask = (content) => {
    setTasks((tasks) => [
      ...tasks,
      {
        content,
        done: false,
        important: false,
        id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
      },
    ]);
  };

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

      {/* ////////////////////////////////////////////////////////////////////////// */}

      <Container>
        <Header title="Task List" />

        <Section title="Add task" form={<Form addNewTask={addNewTask} />} />

        <Section
          title="Tasks list"
          body={
            <Tasks
              tasks={tasks}
              hideDone={hideDone}
              removeTask={removeTask}
              toggleTaskDone={toggleTaskDone}
              toggleTaskHighLight={toggleTaskHighLight}
            />
          }
          extraHeaderContent={
            <Buttons
              tasks={tasks}
              hideDone={hideDone}
              toggleHideDone={toggleHideDone}
              setAllDone={setAllDone}
            />
          }
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
          Width: {dimensions.width}<br />
          Height: {dimensions.height}
      </div>
    </>
  );
}

export default App;
