import { call, put, takeLatest } from 'redux-saga/effects';
import { request } from 'api';
import { USERS, UsersPayload, isUsersResponse } from 'api/endpoints/user';
import { TIME_STAMP, isTimeStampResponse } from 'api/endpoints/commons';
import { getUsers, getTimeStamp } from './actions';
import { ActionPayload } from 'store';

function* getUsersSaga(action: ActionPayload<UsersPayload>): IterableIterator<unknown> {
  try {
    const usersPayload = action.payload;
    const response = yield call(request, {
      method: 'get',
      url: USERS,
      params: {
        _page: usersPayload.page,
        _limit: usersPayload.limit
      }
    });
    if (response && isUsersResponse(response)) {
      yield put(getUsers.success(response));
    } else {
      yield put(getUsers.failure(new Error('UsersResponse no cumple definición')));
    }
  } catch (error) {
    yield put(getUsers.failure(error));
  }
}

function* getTimeStampSaga(): IterableIterator<unknown> {
  try {
    const response = yield call(request, {
      method: 'get',
      url: TIME_STAMP
    });
    if (response && isTimeStampResponse(response)) {
      yield put(getTimeStamp.success(response));
    } else {
      yield put(getTimeStamp.failure(new Error('TimeStampResponse no cumple definición')));
    }
  } catch (error) {
    yield put(getTimeStamp.failure(error));
  }
}

const sagas = [
  takeLatest(getUsers.START, getUsersSaga),
  takeLatest(getTimeStamp.START, getTimeStampSaga)
];

export default sagas;
