import { Cache, State } from './reducers';

type AppReducer = {
  appReducer: State;
};

export const getCache = (state: AppReducer): Cache => {
  return state.appReducer.cache;
};
