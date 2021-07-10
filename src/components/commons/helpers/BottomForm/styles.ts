import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  bottomForm: {
    position: 'fixed',
    bottom: 0,
    right: theme.spacing(2),
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    minWidth: 500,
    borderEndStartRadius: 0,
    borderEndEndRadius: 0,
    height: '70vh'
  },
  minimizedForm: {
    position: 'fixed',
    bottom: 0,
    right: theme.spacing(2),
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    borderEndStartRadius: 0,
    borderEndEndRadius: 0,
    minWidth: 500
  },
  headerContainer: {
    padding: theme.spacing(1),
    paddingTop: 2,
    paddingBottom: 2,
    backgroundColor: '#2e2e2e',
    color: 'white'
  },
  iconsContainer: {
    margin: 'auto',
    marginLeft: theme.spacing(3)
  },
  formContent: {
    flex: 1,
    overflow: 'auto'
  }
}));

export default useStyles;
