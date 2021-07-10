import { Record, isRecord } from './record';
import { isArrayOfType } from 'utils/validations';

export type User = {
  id: number;
  name: string;
  email: string;
  country: string;
  records: Array<Record>;
};

export const isUser = (user: User): boolean =>
  typeof user?.id === 'number' &&
  typeof user?.name === 'string' &&
  typeof user?.email === 'string' &&
  typeof user?.country === 'string' &&
  isArrayOfType(user?.records, isRecord);
