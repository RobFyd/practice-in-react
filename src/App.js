import Container from "./Container";
import Header from "./Header";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import "./style.css";
import { hello as goodMorning, name } from "./utilis/hello";
import { useState } from "react";

goodMorning();
console.log(name);

const tasks = [
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
];

let hideDoneTasks = false;

function App() {
  const [count, setCount] = useState(0); // hook useState  - return array with two elements: value and function to change value, must be in function component, one argument is initial value

  const [name, setName] = useState(""); // <form> in react
  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name} was sent`);
  };

  return (
    <>
      <div className="containerDiv">
        <p className="containerP">Counter: {count}</p>
        <button onClick={() => setCount((count) => count + 10)}>+10</button>
      </div>

      <div className="containerDiv">
        <form onSubmit={onFormSubmit}>
          <input                             // <input> in react is same as <textarea>
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
          <button>Send</button>
          <p>{name}</p>
        </form>
      </div>

      <Container>
        <Header title="Task List" />

        <Section title="Add task" form={<Form />} />

        <Section
          title="Tasks list"
          body={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />}
          extraHeaderContent={
            <Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />
          }
        />

        <Section
          title="Stats"
          stats={<div className="stats"></div>}
          thumb={<button className="thumbUp" />}
        />
      </Container>
    </>
  );
}

export default App;
