import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./features/tasks/Tasks/tasksSlice";

export default configureStore({
    reducer: {
        tasks: tasksReducer,
    },
});