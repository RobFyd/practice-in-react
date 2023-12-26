import "./style.css";

const Tasks = (props) => (
  <ul className="tasks">
    {props.tasks.map((task) => (
      <li
        className={`list__item ${
          task.done && props.hideDoneTasks ? "list__item--done" : ""
        }${task.important ? " list__item--highLight" : ""}`}
        key={task.id}
      >
        {task.content}
      </li>
    ))}
  </ul>
);

export default Tasks;
