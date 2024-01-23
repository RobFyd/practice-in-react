import "./style.css";
import { TasksList } from "./styled";

const Tasks = ({
  tasks,
  hideDone,
  removeTask,
  toggleTaskDone,
  toggleTaskHighLight,
}) => (
  <TasksList>
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
          onClick={() => toggleTaskHighLight(task.id)}
        >
          {task.important ? "💫" : "⭐"}
        </button>

        <button
          className={`task__done ${task.done ? " task__done--active" : ""}`}
          onClick={() => toggleTaskDone(task.id)}
        >
          {task.done ? "✅" : "✔️"}
        </button>

        <span
          className={`task__content ${task.done ? "task__content--done" : ""}`}
        >
          {task.id} - {task.content}
        </span>

        <button className="task__remove" onClick={() => removeTask(task.id)}>
          ❌
        </button>
      </li>
    ))}
  </TasksList>
);

export default Tasks;
