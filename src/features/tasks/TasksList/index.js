import {
  List,
  Item,
  LightButton,
  DoneButton,
  Content,
  DeleteButton,
} from "./styled";

const TasksList = ({
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
        key={task.id}
      >
        <LightButton
          highLight={task.important}
          onClick={() => toggleTaskHighLight(task.id)}
        >
          {task.important ? "💫" : "⭐"}
        </LightButton>

        <DoneButton toggleDone={task.done} onClick={() => toggleTaskDone(task.id)}>
          {task.done ? "✅" : "✔️"}
        </DoneButton>

        <Content done={task.done}>
          {task.id} - {task.content}
        </Content>

        <DeleteButton
          className="task__remove"
          onClick={() => removeTask(task.id)}
        >
          ❌
        </DeleteButton>
      </Item>
    ))}
  </List>
);

export default TasksList;
