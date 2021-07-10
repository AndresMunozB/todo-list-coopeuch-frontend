import { ReactChild } from 'react';
import { createReducer, ActionPayload } from 'store';
import { showAppDialog, clearAppDialog } from './actions';

export type AppDialog = {
  appDialogOpen?: boolean;
  appDialogTitle?: string;
  appDialogContent?: ReactChild;
  appDialogActions?: ReactChild;
};

const initialState: AppDialog = {
  appDialogOpen: false
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(showAppDialog.START, (state, action: ActionPayload<AppDialog>) => {
      state.appDialogOpen = true;
      state.appDialogTitle = action.payload.appDialogTitle;
      state.appDialogContent = action.payload.appDialogContent;
      state.appDialogActions = action.payload.appDialogActions;
    })
    .addCase(clearAppDialog.START, (state) => {
      state.appDialogOpen = false;
    });
});

export default reducer;
