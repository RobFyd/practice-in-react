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
      {/* <Section title="Add task" body={<Form />} /> */}
      <section className="section">
        <div>
          <h2>Add task</h2>
          <Form />
        </div>
        <div>
          <div>
            <h2>Tasks list</h2>
            <Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />
          </div>
          <Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />
        </div>
      </section>
      <section>
        <div className="stats"></div>
        <button className="thumbUp"></button>
      </section>
    </main>
  );
}

export default App;
