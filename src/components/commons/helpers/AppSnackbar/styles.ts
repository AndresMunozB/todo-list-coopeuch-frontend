import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  messageContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(2)
  },
  snackContainer: {
    backgroundColor: '#4caf50'
  }
}));

export default useStyles;
