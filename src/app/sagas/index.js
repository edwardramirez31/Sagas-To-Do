import { all, fork } from 'redux-saga/effects';
import tasksSaga from './tasks/tasksSaga';

export default function* rootSaga() {
  // eslint-disable-next-line redux-saga/no-unhandled-errors
  yield all([fork(tasksSaga)]);
}
