import { Snackbar, Button, Box } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { snackbarSelector } from './store/selectors';
import { clearSnackbar } from './store/actions';
import CheckIcon from '@material-ui/icons/Check';
import useStyles from './styles';
// import HighlightOffIcon from '@material-ui/icons/HighlightOff';

/**
 * Componente para mostrar mensajes en la
 */
const AppSnackbar = (): JSX.Element => {
  const dispatch = useDispatch();

  const classes = useStyles();

  const { snackOpen, snackMessage } = useSelector(snackbarSelector);

  const handleClose = () => {
    dispatch(clearSnackbar.default());
  };

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center'
      }}
      open={snackOpen}
      ContentProps={{
        className: classes.snackContainer
      }}
      autoHideDuration={4000}
      onClose={handleClose}
      aria-describedby="client-snackbar"
      message={
        <Box className={classes.messageContainer}>
          <CheckIcon />
          {snackMessage}
        </Box>
      }
      action={[
        <Button key="close" aria-label="close" color="inherit" onClick={handleClose}>
          Ok
        </Button>
      ]}
    />
  );
};

export default AppSnackbar;
