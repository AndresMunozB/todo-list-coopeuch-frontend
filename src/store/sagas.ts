import { all } from 'redux-saga/effects';
import appSagas from 'components/Main/App/store/sagas';
import mockComponentSagas from 'components/commons/misc/MockComponent/store/sagas';
import todosSagas from 'components/screens/public/Home/store/sagas';

const sagas = [...appSagas, ...mockComponentSagas, ...todosSagas];

export default function* rootSaga(): IterableIterator<unknown> {
  yield all([...sagas]);
}
