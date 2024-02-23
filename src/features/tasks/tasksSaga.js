import { takeLatest, takeEvery, call, put, select } from 'redux-saga/effects';
import { fetchExampleTasks, setTasks, selectTasks } from './tasksSlice';
import { getExampleTasks } from './getExampleTasks';
import { saveTasksInLocalStorage } from './tasksLocalStorage';

function* fetchExampleTasksHandler() {
    try {
        const exampleTasks = yield call (getExampleTasks);
        yield put(setTasks(exampleTasks));
    } catch (error) {
        yield call(alert, "Failed to fetch example tasks");
    }
    
}

function* saveTasksInLocalStorageHandler() {
    const tasks = yield select(selectTasks);
    yield call(saveTasksInLocalStorage, tasks);
}

export function* tasksSaga() {
    yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
    yield takeEvery("*", saveTasksInLocalStorageHandler);
}