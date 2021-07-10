import { AppDialog } from './reducers';

type BaseState = {
  appDialogReducer: AppDialog;
};

export const appDialogSelector = (state: BaseState): AppDialog => state.appDialogReducer;
