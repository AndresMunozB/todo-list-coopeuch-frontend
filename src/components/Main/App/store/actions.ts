import { createAction } from 'store';


const ROOT = 'components/main/App';

export const getCaches = createAction<undefined, undefined>(
  ROOT,
  'getCaches'
);

