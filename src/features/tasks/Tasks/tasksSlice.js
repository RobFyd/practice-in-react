import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [
      {
        content: "work one",
        done: true,
        id: 1,
      },
    ],
    hideDone: false,
  },
  reducers: {
    addTask: ({ tasks }, { payload }) => {
      tasks.push(payload);
    },
    toggleHideDone: (state) => {
      state.hideDone = !state.hideDone;
    },
  },
});

export const { addTask, toggleHideDone } = tasksSlice.actions;
export const selectTasks = (state) => state.tasks; // selector
export default tasksSlice.reducer;


// check the output
console.log(
  addTask({
    content: "work one",
    done: false,
    id: 1,
  })
);

console.log(
  tasksSlice.reducer(
    { tasks: [] },
    addTask({
      content: "work one",
      done: false,
      id: 1,
    })
  )
);
