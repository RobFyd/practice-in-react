import "./style.css";
import {
  List,
  Item,
  LightButton,
  DoneButton,
  Content,
  DeleteButton,
} from "./styled";

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

        <LightButton
          className={`task__highLight
            ${task.important ? " task__highLight--active" : ""}`}
          onClick={() => toggleTaskHighLight(task.id)}>
          {task.important ? "💫" : "⭐"}
        </LightButton>

        <DoneButton
          className={`task__done ${task.done ? " task__done--active" : ""}`}
          onClick={() => toggleTaskDone(task.id)}>
          {task.done ? "✅" : "✔️"}
        </DoneButton>

        <Content done={task.done}>
          {task.id} - {task.content}
        </Content>

        <DeleteButton
          className="task__remove"
          onClick={() => removeTask(task.id)}>
          ❌
        </DeleteButton>
      </Item>
    ))}
  </List>
);

export default Tasks;
