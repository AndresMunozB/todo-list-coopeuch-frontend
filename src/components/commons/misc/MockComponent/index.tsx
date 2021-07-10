import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useInterval } from 'utils/hooks';
import { ActionStatus } from 'store';
import { getUsers, getTimeStamp } from './store/actions';
import {
  usersWithEvenIdSelector,
  getUsersStatusSelector,
  dateSelector,
  timeSelector
} from './store/selectors';
import Users from './Users';
import useStyles from './styles';

/**
 * Ejemplo de un componente
 */
const MockComponent = (): JSX.Element => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const usersWithEvenId = useSelector(usersWithEvenIdSelector);
  const getUsersStatus = useSelector(getUsersStatusSelector);
  const date = useSelector(dateSelector);
  const time = useSelector(timeSelector);
  const [buttonClass, setButtonClass] = useState('');
  const [openBackdrop, setOpenBackdrop] = useState(false);
  const defaultButtonLabel = 'Obtener usuarios';
  const [buttonLabel, setButtonLabel] = useState(defaultButtonLabel);

  useInterval(() => {
    setButtonClass(
      buttonClass === classes.buttonStyleOne ? classes.buttonStyleTwo : classes.buttonStyleOne
    );
  }, 200);

  useEffect(() => {
    dispatch(getTimeStamp.start());
  }, [dispatch]);

  useEffect(() => {
    switch (getUsersStatus) {
      case ActionStatus.DEFAULT:
        setButtonLabel(defaultButtonLabel);
        setOpenBackdrop(false);
        break;
      case ActionStatus.START:
        setOpenBackdrop(true);
        break;
      case ActionStatus.SUCCESS:
      case ActionStatus.FAILURE:
        setButtonLabel('Reiniciar');
        setOpenBackdrop(false);
        break;
    }
  }, [getUsersStatus]);

  const handleGetUsers = (): void => {
    if (getUsersStatus === ActionStatus.DEFAULT) {
      dispatch(getUsers.start({ page: 3, limit: 5 }));
    } else {
      dispatch(getUsers.default());
    }
  };

  const handleForceCrash = (): void => {
    throw new Error('Crash!');
  };

  return (
    <>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={2}
        className={classes.rootGrid}
      >
        <Grid item>
          <Grid container direction="row" justify="center" alignItems="center" spacing={1}>
            <Grid item>
              <Button variant="contained" className={buttonClass} onClick={handleGetUsers}>
                {buttonLabel}
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                className={classes.buttonStyleThree}
                onClick={handleForceCrash}
              >
                Crash
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Users status={getUsersStatus} users={usersWithEvenId} />
        </Grid>
        <Grid item>{!date || !time ? null : `${date} ${time}`}</Grid>
      </Grid>
      <Backdrop className={classes.backdrop} open={openBackdrop}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
};

export default MockComponent;
