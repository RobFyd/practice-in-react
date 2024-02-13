import { selectTasksState, toggleTaskDone } from "../Tasks/tasksSlice";
import {
  List,
  Item,
  LightButton,
  DoneButton,
  Content,
  DeleteButton,
} from "./styled";
import { useSelector, useDispatch } from "react-redux";


const TasksList = ({ removeTask, toggleTaskHighLight }) => {
  const { tasks, hideDone } = useSelector(selectTasksState);
  const dispatch = useDispatch();

  return (
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

          <DoneButton
            toggleDone={task.done}
            onClick={() => dispatch(toggleTaskDone(task.id))}
          >
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
};

export default TasksList;
