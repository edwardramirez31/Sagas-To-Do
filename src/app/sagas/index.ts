import { all, fork } from 'redux-saga/effects';
import tasksSaga from './tasks/tasks';

export default function* rootSaga(): Generator {
  try {
    yield all([fork(tasksSaga)]);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
}
