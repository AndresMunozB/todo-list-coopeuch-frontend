import { User, isUser } from '../entities/user';
import { isArrayOfType } from 'utils/validations';

export const USERS = `${process.env.REACT_APP_API}/mockdata`;

export type UsersPayload = { page: number; limit: number };

export type UsersResponse = Array<User>;

export const isUsersResponse = (usersResponse: UsersResponse): boolean =>
  isArrayOfType(usersResponse, isUser);
