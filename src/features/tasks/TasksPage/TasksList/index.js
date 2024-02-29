import { selectHideDone, toggleTaskDone, removeTask, toggleTaskHighLight, selectTasksByQuery  } from "../../tasksSlice";
import {
  List,
  Item,
  LightButton,
  DoneButton,
  Content,
  DeleteButton,
} from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import searchQueryParamName from "../searchQueryParamName";


const TasksList = () => {
  const location = useLocation();
  const query = (new URLSearchParams(location.search)).get(searchQueryParamName);

  const tasks = useSelector(state => selectTasksByQuery(state, query));
  const hideDone = useSelector(selectHideDone);

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
            onClick={() => dispatch(toggleTaskHighLight(task.id))}
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
            <Link to={`/tasks/${task.id}`}>{task.id} - {task.content}</Link>
          </Content>

          <DeleteButton
            className="task__remove"
            onClick={() => dispatch(removeTask(task.id))}
          >
            ❌
          </DeleteButton>
        </Item>
      ))}
    </List>
  );
};

export default TasksList;
