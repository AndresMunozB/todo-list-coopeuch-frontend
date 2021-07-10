import { isArrayOfType } from 'utils/validations';

export type Todo = {
  id: number;
  description: string;
  done: boolean;
  deleted: boolean;
  createdTimestamp: string;
  updatedTimestamp: string;
};

export const isTodo = (item: Todo): boolean =>
  typeof item?.id === 'number' &&
  typeof item?.description === 'string' &&
  typeof item?.done === 'boolean' &&
  typeof item?.deleted === 'boolean' &&
  typeof item?.createdTimestamp === 'string' &&
  typeof item?.updatedTimestamp === 'string';

export const isTodoArray = (items: Todo[]): boolean => isArrayOfType(items, isTodo);
