import { put, takeLatest } from 'redux-saga/effects';
import { getCaches } from './actions';


function* getCachesSaga(): IterableIterator<unknown> {
  try {

  } catch (error) {
    yield put(getCaches.failure(error));
  }
}

const sagas = [takeLatest(getCaches.START, getCachesSaga)];

export default sagas;
