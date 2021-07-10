import { AppDialog } from './reducers';
import { createAction } from 'store';

const ROOT = 'components/commons/helpers/AppSnackbar';

export const showAppDialog = createAction<AppDialog, undefined>(ROOT, 'showAppDialog');
export const clearAppDialog = createAction<undefined, undefined>(ROOT, 'clearAppDialog');

// export const getTimeStamp = createAction<undefined, undefined>(ROOT, 'getTimeStamp');
