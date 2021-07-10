import { ReactChild } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import { Grid, Box } from '@material-ui/core';
import useStyles from './styles';
import useCache from '../../UseCache';
import AppSnackbar from 'components/commons/helpers/AppSnackbar';
import AppDialog from 'components/commons/helpers/AppDialog';

type Props = {
  /** Componente hijo del layout */
  children: ReactChild;
};

const Private = (props: Props): JSX.Element => {
  const { children } = props;
  const classes = useStyles();

  useCache();

  return (
    <Grid className={classes.appContainer}>
      <NavBar />
      <Box className={classes.childrenContainer}>{children}</Box>
      <Footer />
      <AppSnackbar />
      <AppDialog />
    </Grid>
  );
};

export default Private;
