import { ConfirmDialog } from './reducers';

type BaseState = {
  confirmDialogReducer: ConfirmDialog;
};

export const confirmDialogSelector = (state: BaseState): ConfirmDialog =>
  state.confirmDialogReducer;
