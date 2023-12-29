import Form from "../Form";
import Tasks from "../Tasks";
import Buttons from "../Buttons";
import "./style.css";

const Section = (props) => (
  <section className="section">
    <div>
      <h2>Add task</h2>
      <Form />
    </div>
    <div>
      <div>
        <h2>Tasks list</h2>
        <Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />
      </div>
      <Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />
    </div>
  </section>
);

export default Section;
