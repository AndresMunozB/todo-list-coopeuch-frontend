import {
  Box,
  Card,
  Button,
  CardHeader,
  IconButton,
  CardContent,
  Grid,
  CardActions,
  Typography,
  LinearProgress
} from '@material-ui/core';
import { MouseEventHandler, useState, useEffect } from 'react';
import useStyles from './styles';
// import CloseIcon from '@material-ui/icons/Close';
// import MinimizeIcon from '@material-ui/icons/Minimize';
// import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import CancelIcon from '@material-ui/icons/Cancel';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

type Props = {
  open: boolean;
  handleClose: MouseEventHandler<HTMLButtonElement>;
  form: JSX.Element | null;
  title: string;
  handleSubmit: MouseEventHandler<HTMLButtonElement>;
  validForm: boolean;
  loading: boolean;
  submitButtonText?: string;
};

const BottomForm = (props: Props): JSX.Element | null => {
  const {
    open,
    handleClose,
    form,
    title,
    handleSubmit,
    validForm,
    loading,
    submitButtonText
  } = props;
  const classes = useStyles();
  const [minimized, setMinimized] = useState(false);

  const onMinimized = () => {
    setMinimized(!minimized);
  };

  useEffect(() => {
    setMinimized(false);
  }, [open]);

  if (!open) {
    return null;
  }

  return (
    <Card className={minimized ? classes.minimizedForm : classes.bottomForm}>
      <CardHeader
        className={classes.headerContainer}
        classes={{
          action: classes.iconsContainer
        }}
        action={
          <Box className={classes.iconsContainer}>
            <IconButton aria-label="minimize" size="small" color="inherit" onClick={onMinimized}>
              {/* <OpenInNewIcon /> */}
              {minimized ? <OpenInNewIcon /> : <ArrowDropDownCircleIcon />}
            </IconButton>
            <IconButton aria-label="close" size="small" color="inherit" onClick={handleClose}>
              <CancelIcon />
            </IconButton>
          </Box>
        }
        title={<Typography variant="h6">{title}</Typography>}
      />
      {loading && <LinearProgress />}
      {!minimized && (
        <CardContent className={classes.formContent}>
          <Grid container direction="column" alignItems="flex-start">
            {form}
          </Grid>
        </CardContent>
      )}
      {!minimized && (
        <CardActions disableSpacing>
          <Button
            color="secondary"
            variant="contained"
            onClick={handleSubmit}
            disabled={!validForm || loading}
          >
            {submitButtonText}
          </Button>
        </CardActions>
      )}
    </Card>
  );
};

export default BottomForm;
