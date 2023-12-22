const tasks = [
  {
    id: 1,
    content: "React start",
    done: false,
  },
  {
    id: 2,
    content: "Eat breakfast",
    done: true,
  },
];

let hideDoneTasks = false;

function App() {
  return (
    <main>
      <h1>Tasks List</h1>
      <div>
        <h2>Add task</h2>
        <form className="form">
          <input className="form__field" placeholder="what to do?" autoFocus />
          <button className="form__button">Add new task</button>
        </form>
      </div>
      <div>
        <div>
          <h2>Tasks list</h2>
          <div className="section__buttons"></div>
        </div>
        <ul className="tasks"></ul>
      </div>
      <div className="stats"></div>
      <button className="thumbUp"></button>
    </main>
  );
}

export default App;
