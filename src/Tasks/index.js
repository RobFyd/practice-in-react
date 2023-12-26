import "./style.css";

const Tasks = ({ tasks }) => (
  <ul className="tasks">
    {tasks.map((task) => (
      <li key={task.id}>{task.content}</li>
    ))}
  </ul>
);

export default Tasks;
