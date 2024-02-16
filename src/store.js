import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./features/tasks/Tasks/tasksSlice";
import createSagaMiddleware from "redux-saga";
import { watchFetchExampleTasks } from "./features/tasks/Tasks/tasksSaga";


const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        tasks: tasksReducer,
      },
        middleware: [sagaMiddleware],
    });
  
sagaMiddleware.run(watchFetchExampleTasks);

export default store;