import { State } from './reducers';

type BaseState = {
  snackbarReducer: State;
};

export const snackbarSelector = (state: BaseState): State => state.snackbarReducer;
