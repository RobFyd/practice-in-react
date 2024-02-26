import Container from "../../../common/Container";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import { useParams } from "react-router-dom";

function TaskPage() {
  const { id } = useParams();

  return (
    <Container>
      <Header title="Task Details" />

      <Section title={id} body={<>sialala</>} />
    </Container>
  );
}

export default TaskPage;
