import { all } from "redux-saga/effects";
import { watchFetchExampleTasks } from "./features/tasks/Tasks/tasksSaga";

export default function* rootSaga() {
  yield all([
    watchFetchExampleTasks(),
    // other sagas go here
  ]);
}
