import { all, fork } from 'redux-saga/effects';

export default function* combinedSaga() {
  // yield all([fork(watchTabDataSaga), fork(watchFilterDataSaga)]);
  yield all([]);
}
