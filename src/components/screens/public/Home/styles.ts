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
    background: 'linear-gradient(60deg, #FE6B8B 30%, #FF8E53 90%)'
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
