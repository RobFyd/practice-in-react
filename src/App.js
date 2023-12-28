import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";

const tasks = [
  {
    id: 1,
    content: "React start",
    done: false,
    important: true,
  },
  {
    id: 2,
    content: "Eat breakfast",
    done: true,
    important: false,
  },
];

let hideDoneTasks = false;

function App() {
  return (
    <main>
      <h1>Tasks List</h1>
      <div>
        <h2>Add task</h2>
        <Form />
      </div>
      <div>
        <div>
          <h2>Tasks list</h2>
          <Buttons />
        </div>
        <Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />
      </div>
      <div className="stats"></div>
      <button className="thumbUp"></button>
    </main>
  );
}

export default App;
