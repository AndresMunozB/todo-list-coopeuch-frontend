import { Dialog, DialogActions, DialogContent, DialogTitle, IconButton } from '@material-ui/core';
import useStyles from './styles';
import CloseIcon from '@material-ui/icons/Close';

type Props = {
  open: boolean;
  disableClosable?: boolean;
  maxWidth?: false | 'md' | 'xs' | 'sm' | 'lg' | 'xl' | undefined;
  onClose(): void;
  titleComponent: JSX.Element | null;
  contentComponent: JSX.Element | null;
  actionsComponent: JSX.Element | null;
};
const DialogComponent = (props: Props): JSX.Element => {
  const classes = useStyles();
  return (
    <>
      <Dialog
        disableBackdropClick={props.disableClosable}
        disableEscapeKeyDown={props.disableClosable}
        open={props.open}
        fullWidth
        maxWidth={props.maxWidth === false || props.maxWidth === undefined ? 'md' : props.maxWidth}
        onClose={props.onClose}
        aria-labelledby="app-dialog"
      >
        <IconButton aria-label="close" className={classes.closeButton} onClick={props.onClose}>
          <CloseIcon />
        </IconButton>
        <DialogTitle className={classes.dialogHeader}>{props.titleComponent}</DialogTitle>
        <DialogContent className={classes.dialogContent}>{props.contentComponent}</DialogContent>
        <DialogActions>{props.actionsComponent}</DialogActions>
      </Dialog>
    </>
  );
};
export default DialogComponent;
