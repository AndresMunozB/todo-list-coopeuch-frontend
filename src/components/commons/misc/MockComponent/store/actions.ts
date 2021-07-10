import { createAction } from 'store';
import { UsersPayload, UsersResponse } from 'api/endpoints/user';

const ROOT = 'components/commons/misc/MockComponent';

export const getUsers = createAction<UsersPayload, UsersResponse>(ROOT, 'getUsers');

export const getTimeStamp = createAction<undefined, undefined>(ROOT, 'getTimeStamp');
