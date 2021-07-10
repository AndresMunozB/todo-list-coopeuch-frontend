import { ConfirmDialogPayload } from './reducers';
import { createAction } from 'store';

const ROOT = 'components/commons/helpers/AppSnackbar';

export const showConfirmDialog = createAction<ConfirmDialogPayload, undefined>(
  ROOT,
  'showConfirmDialog'
);
export const clearConfirmDialog = createAction<undefined, undefined>(ROOT, 'clearConfirmDialog');
export const setLoadingConfirmDialog = createAction<boolean, undefined>(
  ROOT,
  'setLoadingConfirmDialog'
);

// export const getTimeStamp = createAction<undefined, undefined>(ROOT, 'getTimeStamp');
