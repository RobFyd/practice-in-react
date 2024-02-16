import { takeEvery, call, put } from 'redux-saga/effects';
import { fetchExampleTasks, setTasks } from './tasksSlice';
import { getExampleTasks } from './getExampleTasks';

function* fetchExampleTasksHandler() {
    try {
        const exampleTasks = yield call (getExampleTasks);
        yield put(setTasks(exampleTasks));
    } catch (error) {
        yield call(alert, "Failed to fetch example tasks");
    }
    
}

export function* watchFetchExampleTasks() {
    yield takeEvery(fetchExampleTasks.type, fetchExampleTasksHandler);
}