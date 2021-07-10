import { createReducer, ActionStatus, ActionPayload } from 'store';
import { getUsers, getTimeStamp } from './actions';
import { UsersResponse } from 'api/endpoints/user';
import { TimeStampResponse } from 'api/endpoints/commons';

export type State = {
  getUsersStatus: number;
  getTimeStampStatus: number;
  users: UsersResponse;
  date: string | null;
  time: string | null;
};

const initialState: State = {
  getUsersStatus: ActionStatus.DEFAULT,
  getTimeStampStatus: ActionStatus.DEFAULT,
  users: [],
  date: null,
  time: null
};

const reducer = createReducer(initialState, (builder) => {
  builder
    // getUsers
    .addCase(getUsers.DEFAULT, (state) => {
      state.getUsersStatus = ActionStatus.DEFAULT;
      state.users = [];
    })
    .addCase(getUsers.START, (state) => {
      state.getUsersStatus = ActionStatus.START;
    })
    .addCase(getUsers.SUCCESS, (state, action: ActionPayload<UsersResponse>) => {
      state.getUsersStatus = ActionStatus.SUCCESS;
      state.users = action.payload;
    })
    .addCase(getUsers.FAILURE, (state) => {
      state.getUsersStatus = ActionStatus.FAILURE;
    })
    // getTimeStamp
    .addCase(getTimeStamp.SUCCESS, (state, action: ActionPayload<TimeStampResponse>) => {
      state.getTimeStampStatus = ActionStatus.SUCCESS;
      state.date = action.payload.date;
      state.time = action.payload.time;
    })
    .addCase(getTimeStamp.FAILURE, (state) => {
      state.getTimeStampStatus = ActionStatus.FAILURE;
    });
});

export default reducer;
