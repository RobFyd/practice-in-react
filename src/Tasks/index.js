import "./style.css";
import { List, Item } from "./styled";

const Tasks = ({
  tasks,
  hideDone,
  removeTask,
  toggleTaskDone,
  toggleTaskHighLight,
}) => (
  <List>
    {tasks.map((task) => (
      <Item
        done={task.done && hideDone}
        highLight={task.important}
        key={task.id}>

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
      </Item>
    ))}
  </List>
);

export default Tasks;
