import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
  Button,
  LinearProgress
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { clearConfirmDialog } from './store/actions';
import { confirmDialogSelector } from './store/selectors';
import useStyles from './styles';

/**
 * Descripción de componente
 */
const ConfirmDialog = (): JSX.Element => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const {
    confirmDialogOpen,
    confirmDialogTitle,
    confirmDialogContent,
    confirmDialogCancelButton,
    confirmDialogConfirmButton,
    confirmDialogIsLoading
  } = useSelector(confirmDialogSelector);

  const handleClose = () => {
    dispatch(clearConfirmDialog.start());
  };

  return (
    <Dialog open={!!confirmDialogOpen} onClose={handleClose} aria-labelledby="app-dialog">
      <DialogTitle className={classes.dialogHeader}>{confirmDialogTitle}</DialogTitle>
      <DialogContent className={classes.dialogContent}>
        <LinearProgress
          color={'secondary'}
          hidden={!confirmDialogIsLoading}
          className={classes.loader}
        />
        {confirmDialogContent}
      </DialogContent>
      <DialogActions>
        <Box>
          {confirmDialogCancelButton ? (
            <Button onClick={confirmDialogCancelButton.action}>
              {confirmDialogCancelButton.text}
            </Button>
          ) : (
            <Button onClick={handleClose}>Cancelar</Button>
          )}

          {confirmDialogConfirmButton && (
            <Button
              onClick={confirmDialogConfirmButton.action}
              disabled={confirmDialogIsLoading}
              color="primary"
            >
              {confirmDialogConfirmButton.text}
            </Button>
          )}
        </Box>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
