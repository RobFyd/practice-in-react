import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";

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
    <main>
      <h1>Tasks List</h1>
      <Section
        title="Add task"
        form={<Form />}
        title2="Tasks List"
        extraHeaderContent={
          <Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />
        }
        body={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />}
      />
      <section>
        <div className="stats"></div>
        <button className="thumbUp"></button>
      </section>
    </main>
  );
}

export default App;
