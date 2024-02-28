import Container from "../../../common/Container";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice";

function TaskPage() {
  const { id } = useParams();
  const task = useSelector((state) => getTaskById(state, id));

  return (
    <Container>
      <Header title="Task Details" />

      <Section
        title={task ? task.content : "Task not found 🤨"}
        body={
          <>
            <strong>Done:</strong> {task.done ? "YES" : "NO"}
          </>
        }
      />
    </Container>
  );
}

export default TaskPage;
