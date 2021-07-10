import { Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { clearAppDialog } from './store/actions';
import { appDialogSelector } from './store/selectors';

/**
 * Descripción de componente
 */
const AppDialog = (): JSX.Element => {
  const dispatch = useDispatch();

  const { appDialogOpen, appDialogTitle, appDialogContent, appDialogActions } = useSelector(
    appDialogSelector
  );

  const handleClose = () => {
    dispatch(clearAppDialog.start());
  };

  return (
    <Dialog open={!!appDialogOpen} onClose={handleClose} aria-labelledby="app-dialog">
      <DialogTitle>{appDialogTitle}</DialogTitle>
      <DialogContent>{appDialogContent}</DialogContent>
      <DialogActions>{appDialogActions}</DialogActions>
    </Dialog>
  );
};

export default AppDialog;
