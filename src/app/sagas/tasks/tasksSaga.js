import { all, put, call, takeEvery } from "redux-saga/effects";
import {
  addTask,
  addTaskError,
  addTaskSuccess,
  getTask,
  getTaskError,
  getTaskSuccess,
} from "../../../components/taskSlice";
import DjangoTodo from "../.././../api/djangoTodo";

function* addTaskSaga({ payload: data }) {
  try {
    const newTask = yield call([DjangoTodo, "createTask"], data);
    yield put(addTaskSuccess(newTask));
  } catch (error) {
    yield put(addTaskError(error.message));
  }
}

function* getTaskSaga() {
  try {
    const tasks = yield call([DjangoTodo, "getTasks"]);
    yield put(getTaskSuccess(tasks));
  } catch (error) {
    yield put(getTaskError(error.message));
  }
}

export default function* tasksSaga() {
  yield all([takeEvery(addTask, addTaskSaga), takeEvery(getTask, getTaskSaga)]);
}
