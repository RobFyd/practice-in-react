import { useState, useRef } from "react";
import "./style.css";
import { useDispatch } from "react-redux";
import { addTask } from "../../tasksSlice";
import { nanoid } from "@reduxjs/toolkit";

const Form = () => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);

  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();
    
    const trimmedNewTaskContent = newTaskContent.trim();

    if (!trimmedNewTaskContent) {
      return;
    }

    dispatch(addTask({
      content: trimmedNewTaskContent,
      done: false,
      id: nanoid(),
    }));

    setNewTaskContent("");
    inputRef.current.focus();
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <input
        value={newTaskContent}
        onChange={({ target }) => setNewTaskContent(target.value)}
        className="form__field"
        placeholder="what to do?"
        ref={inputRef}
      />
      <button className="form__button">Add new task</button>
    </form>
  );
};

export default Form;
