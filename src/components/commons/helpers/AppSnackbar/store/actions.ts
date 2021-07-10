import { createAction } from 'store';

const ROOT = 'components/commons/helpers/AppSnackbar';

export const showSnackbar = createAction<string, undefined>(ROOT, 'showSnackbar');
export const clearSnackbar = createAction<undefined, undefined>(ROOT, 'clearSnackbar');

// export const getTimeStamp = createAction<undefined, undefined>(ROOT, 'getTimeStamp');
