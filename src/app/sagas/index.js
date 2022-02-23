import { all, fork } from 'redux-saga/effects';
import tasksSaga from './tasks/tasksSaga';

export default function* rootSaga() {
  try {
    yield all([fork(tasksSaga)]);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
}
