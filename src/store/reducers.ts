import appReducer from 'components/Main/App/store/reducers';
import mockComponentReducer from 'components/commons/misc/MockComponent/store/reducers';
import snackbarReducer from 'components/commons/helpers/AppSnackbar/store/reducers';
import appDialogReducer from 'components/commons/helpers/AppDialog/store/reducers';

const rootReducer = {
  appReducer,
  mockComponentReducer,
  snackbarReducer,
  appDialogReducer
};

export default rootReducer;
