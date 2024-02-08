import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
  },
  reducers: {
    addTask2: ({ tasks }, { payload }) => {
      tasks.push(payload);
    },
  },
});

export const { addTask2 } = tasksSlice.actions;
export const selectTasks = (state) => state.tasks; // selector
export default tasksSlice.reducer;


// check the output
console.log(
  addTask2({
    content: "work one",
    done: false,
    id: 1,
  })
);

console.log(
  tasksSlice.reducer(
    { tasks: [] },
    addTask2({
      content: "work one",
      done: false,
      id: 1,
    })
  )
);
