import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import reportWebVitals from "./reportWebVitals";
import { configureStore } from "@reduxjs/toolkit";
import { addTask2 } from "./features/tasks/tasksSlice";

const initialState = {
  tasks: [],
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case "addTask":
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            content: action.payload,
          },
        ],
      };

    default:
      return state;
  }
};

const addTask = (content) => ({
  type: "addTask",
  payload: content,
});

const selectTasks = ({ tasks }) => tasks; // selector

const store = configureStore({ reducer: tasksReducer });
console.log(selectTasks(store.getState()));

// dispatch the only one method for store::::

store.dispatch(addTask("work one"));

console.log(selectTasks(store.getState()));

store.dispatch(addTask("work two"));

console.log(selectTasks(store.getState()));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
