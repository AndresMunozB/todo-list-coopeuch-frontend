import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  appContainer: {
    height: '100vh',
    flex: 1,
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'column'
  },
  childrenContainer: {
    flex: 1,
    overflow: 'auto',
    position: 'relative',
    zIndex: 1101
  }
}));

export default useStyles;
