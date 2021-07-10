import { ReactChild } from 'react';
import { createReducer, ActionPayload } from 'store';
import { showConfirmDialog, clearConfirmDialog, setLoadingConfirmDialog } from './actions';

export type DialogButton = {
  text: string;
  action: () => void;
};

export type ConfirmDialog = {
  confirmDialogOpen?: boolean;
  confirmDialogTitle?: string;
  confirmDialogContent?: ReactChild;
  confirmDialogCancelButton?: DialogButton | null;
  confirmDialogConfirmButton?: DialogButton | null;
  confirmDialogIsLoading?: boolean;
};

export type ConfirmDialogPayload = {
  title?: string;
  content?: ReactChild;
  cancelButton?: DialogButton | null;
  confirmButton?: DialogButton | null;
  isLoading?: boolean;
};

const initialState: ConfirmDialog = {
  confirmDialogOpen: false
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(showConfirmDialog.START, (state, action: ActionPayload<ConfirmDialogPayload>) => {
      state.confirmDialogOpen = true;
      state.confirmDialogTitle = action.payload.title;
      state.confirmDialogContent = action.payload.content;
      state.confirmDialogCancelButton = action.payload.cancelButton;
      state.confirmDialogConfirmButton = action.payload.confirmButton;
      state.confirmDialogIsLoading = action.payload.isLoading;
    })
    .addCase(clearConfirmDialog.START, (state) => {
      state.confirmDialogOpen = false;
      state.confirmDialogIsLoading = undefined;
    })
    .addCase(setLoadingConfirmDialog.START, (state, action: ActionPayload<boolean>) => {
      state.confirmDialogIsLoading = action.payload;
    });
});

export default reducer;
