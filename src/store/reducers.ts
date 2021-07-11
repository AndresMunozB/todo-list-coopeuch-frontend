import appReducer from 'components/Main/App/store/reducers';
import mockComponentReducer from 'components/commons/misc/MockComponent/store/reducers';
import snackbarReducer from 'components/commons/helpers/AppSnackbar/store/reducers';
import appDialogReducer from 'components/commons/helpers/AppDialog/store/reducers';
import todosReducer from 'components/commons/todo/store/reducers';
import confirmDialogReducer from 'components/commons/helpers/ConfirmDialog/store/reducers';
const rootReducer = {
  appReducer,
  mockComponentReducer,
  snackbarReducer,
  appDialogReducer,
  todosReducer,
  confirmDialogReducer
};

export default rootReducer;
