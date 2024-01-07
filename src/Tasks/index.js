import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask }) => (
  <ul className="tasks">
    {tasks.map((task) => (
      <li
        className={`list__item ${
          task.done && hideDone ? "list__item--done" : ""
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

        <button className="task__remove" onClick={() => removeTask(task.id)}>
          ❌
        </button>
      </li>
    ))}
  </ul>
);

export default Tasks;
