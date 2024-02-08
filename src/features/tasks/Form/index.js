import { useState } from "react";
import "./style.css";
// import { useDispatch } from "react-redux";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  // const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();
    addNewTask(newTaskContent.trim());
    setNewTaskContent("");
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <input
        value={newTaskContent}
        onChange={({ target }) => setNewTaskContent(target.value)}
        className="form__field"
        placeholder="what to do?"
        autoFocus
      />
      <button className="form__button">Add new task</button>
    </form>
  );
};

export default Form;
