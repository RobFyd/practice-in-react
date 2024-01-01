import Container from "./Container";
import Header from "./Header";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import "./style.css";
import hello, { name } from "./utilis/hello";

hello();
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
  return (
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
  );
}

export default App;
