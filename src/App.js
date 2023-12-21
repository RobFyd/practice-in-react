
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

function App() {
  return (
    <>
      <h1>Tasks List</h1>
      <form className="js-form">
        <div>
          <h2>Add task</h2>
          <div>
            <input className="form__field js-newTask" autoFocus />
            <button className="form__button js-addTask">Add new task</button>
          </div>
        </div>
      </form>
      <div>
        <div>
          <h2>Tasks list</h2>
          <div className="section__buttons js-buttons"></div>
        </div>
        <ul className="tasks js-tasks"></ul>
      </div>
      <div className="js-stats"></div>
      <button className="thumbUp js-thumbUp"></button>
    </>
  );
}

export default App;
