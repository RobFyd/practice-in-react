import { takeEvery } from 'redux-saga/effects';
import { fetchExampleTasks } from './tasksSlice';
import { getExampleTasks } from './getExampleTasks';

function* fetchExampleTasksHandler() {
    try {
        getExampleTasks();
    } catch (error) {
        console.error("Something went wrong", error);
    }
    
}

function* watchFetchExampleTasks() {
    yield takeEvery(fetchExampleTasks.type, fetchExampleTasksHandler);
}