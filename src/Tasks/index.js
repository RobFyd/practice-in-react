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
        <button
          className={`task__highLight
          ${task.important ? " task__highLight--active" : ""}`}
        >
          {task.important ? "💫" : "⭐"}
        </button>

        <button
          className={`task__done ${task.done ? " task__done--active" : ""}`}
        >
          {task.done ? "✅" : "✔️"}
        </button>

        <span
          className={`task__content ${task.done ? "task__content--done" : ""}`}
        >
          {task.content}
        </span>

        <button className="task__remove">❌</button>
      </li>
    ))}
  </ul>
);

export default Tasks;
