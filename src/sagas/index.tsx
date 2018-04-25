import { all, fork } from 'redux-saga/effects';
import ticketsSaga from './tickets';

export default function* rootSaga() {
  return yield all([fork(ticketsSaga)]);
}
