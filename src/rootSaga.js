import { all } from "redux-saga/effects";
import { watchFetchExampleTasks } from "./features/tasks/Tasks/tasksSaga";

export default function* rootSaga() {
  yield all([
    watchFetchExampleTasks(),
    // other sagas go here
  ]);
}

// rootSaga is for combining all the sagas in the app. It's a good practice to keep the rootSaga in the src folder.
