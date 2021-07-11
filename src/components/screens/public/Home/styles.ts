import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  example: {
    margin: theme.spacing(1)
  },
  backgroundContainer: {
    flexGrow: 1,
    left: 0,
    height: '100%',
    width: '100%',
    position: 'absolute',
    background: 'radial-gradient(circle, rgba(144,185,242,1) 35%, rgba(35,106,206,1) 83%)'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  },

  inputTextField: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3)
  }
}));

export default useStyles;
