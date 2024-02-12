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
    addTask: ({ tasks }, { payload: task }) => {
      tasks.push(task);
    },
    toggleHideDone: (state) => {
      state.hideDone = !state.hideDone;
    },
    toggleTaskDone: ({ tasks }, { payload: taskId }) => {
      const index = tasks.findIndex(({ id }) => id === taskId);
      tasks[index].done = !tasks[index].done;
    },
    // removeTask: ({ tasks }, { payload: taskId }) => {
    //   const index = tasks.findIndex(({ id }) => id === taskId);
    //   tasks.splice(index, 1);
    // },
    // setAllDone: ({ tasks }) => {
    //   for (const task of tasks) {
    //     task.done = true;
    //   }
    // },
    // toggleTaskHighLight: ({ tasks }, { payload: taskId }) => {
    //   const index = tasks.findIndex(({ id }) => id === taskId);
    //   tasks[index].important = !tasks[index].important;
    // },
  },
});

export const { addTask, toggleHideDone, toggleTaskDone } = tasksSlice.actions;
// export const { removeTask, setAllDone, toggleTaskHighLight } = tasksSlice.actions;
export const selectTasks = (state) => state.tasks; // selector

// export
// export
// export
// export

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
