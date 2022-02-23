/* eslint-disable no-console */
import { all, put, call, takeEvery } from 'redux-saga/effects';
import DjangoTodo from '../../../api/djangoTodo';
import {
  addTask,
  addTaskError,
  addTaskSuccess,
  getTask,
  getTaskError,
  getTaskSuccess,
  removeTask,
  updateTask,
  updateTaskSuccess,
} from '../../../components/taskSlice';

function* addTaskSaga({ payload: data }) {
  try {
    const newTask = yield call([DjangoTodo, 'createTask'], data);
    yield put(addTaskSuccess(newTask));
  } catch (error) {
    yield put(addTaskError(error.message));
  }
}

function* getTaskSaga() {
  try {
    const tasks = yield call([DjangoTodo, 'getTasks']);
    yield put(getTaskSuccess(tasks));
  } catch (error) {
    yield put(getTaskError(error.message));
  }
}

function* removeTaskSaga({ payload: id }) {
  try {
    const response = yield call([DjangoTodo, 'deleteTask'], id);
    console.log(response);
  } catch (error) {
    console.log(error.message);
  }
}

function* updateTaskSaga({ payload: { id, text, completed } }) {
  try {
    const task = yield call([DjangoTodo, 'updateTask'], id, {
      text,
      completed,
    });
    yield put(updateTaskSuccess(task));
  } catch (error) {
    yield put(getTaskError(error.message));
  }
}

export default function* tasksSaga() {
  try {
    yield all([
      takeEvery(addTask, addTaskSaga),
      takeEvery(getTask, getTaskSaga),
      takeEvery(removeTask, removeTaskSaga),
      takeEvery(updateTask, updateTaskSaga),
    ]);
  } catch (error) {
    console.log(error);
  }
}
