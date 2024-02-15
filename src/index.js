import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import { App } from "./App";
import reportWebVitals from "./reportWebVitals";
import { configureStore } from "@reduxjs/toolkit";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

  // previous example
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

const addTask2 = (content) => ({
  type: "addTask",
  payload: content,
});

const selectTasks = ({ tasks }) => tasks; // selector

const store2 = configureStore({ reducer: tasksReducer });
console.log(selectTasks(store2.getState()));

// dispatch the only one method for store::::

store2.dispatch(addTask2("work one"));

console.log(selectTasks(store2.getState()));

store2.dispatch(addTask2("work two"));

console.log(selectTasks(store2.getState()));
  // end of the previous example

