import { createStore, combineReducers, applyMiddleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { PROCESS_ENV_PRODUCTION } from 'constants/project';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';
import rootSaga from './sagas';

/**
 * Inicializa la store de redux, solo utilizar con el Provider.
 */
const storeInitializer = (): Store => {
  const sagaMiddleware = createSagaMiddleware();
  const combinedReducers = combineReducers(rootReducer);
  let middlewares;
  if (process.env.NODE_ENV === PROCESS_ENV_PRODUCTION) {
    middlewares = applyMiddleware(sagaMiddleware);
  } else {
    middlewares =
      process.env.REACT_APP_REDUX_LOGGER_ACTIVE === 'true'
        ? composeWithDevTools(applyMiddleware(sagaMiddleware, createLogger()))
        : composeWithDevTools(applyMiddleware(sagaMiddleware));
  }
  const store = createStore(combinedReducers, middlewares);
  sagaMiddleware.run(rootSaga);
  return store;
};

export default storeInitializer;
