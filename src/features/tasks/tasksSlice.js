import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
  },
  reducers: {
    addTask: ({ tasks }, { payload }) => {
      tasks.push(payload);
    },
  },
});

export const { addTask } = tasksSlice.actions;
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
