import { createReducer, ActionPayload } from 'store';
import { showSnackbar, clearSnackbar } from './actions';

export type State = {
  snackOpen: boolean;
  snackMessage: string;
};

const initialState: State = {
  snackOpen: false,
  snackMessage: ''
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(showSnackbar.START, (state, action: ActionPayload<string>) => {
      state.snackOpen = true;
      state.snackMessage = action.payload;
    })
    .addCase(showSnackbar.SUCCESS, (state) => {
      state.snackOpen = false;
      state.snackMessage = '';
    })
    .addCase(clearSnackbar.DEFAULT, (state) => {
      state.snackOpen = false;
      state.snackMessage = '';
    });
});

export default reducer;
