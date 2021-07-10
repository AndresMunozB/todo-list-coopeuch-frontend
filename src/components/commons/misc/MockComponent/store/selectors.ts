import { createSelector } from 'reselect';
import { State } from './reducers';
import { UsersResponse } from 'api/endpoints/user';

type BaseState = {
  mockComponentReducer: State;
};

export const getUsersStatusSelector = (state: BaseState): number =>
  state.mockComponentReducer.getUsersStatus;

export const usersSelector = (state: BaseState): UsersResponse => state.mockComponentReducer.users;

export const dateSelector = (state: BaseState): string | null => state.mockComponentReducer.date;

export const timeSelector = (state: BaseState): string | null => state.mockComponentReducer.time;

export const usersWithEvenIdSelector = createSelector(usersSelector, (users) =>
  users.filter((user) => Number(user.id) % 2 === 0)
);
