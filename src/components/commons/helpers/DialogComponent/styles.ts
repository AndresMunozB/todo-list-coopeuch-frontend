import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  dialogHeader: {
    backgroundColor: theme.palette.primary.main,
    color: 'white'
  },
  closeButton: {
    position: 'absolute',
    right: 5,
    top: 5,
    marginTop: 'auto',
    color: 'white'
  },
  dialogContent: {
    position: 'relative'
  }
}));

export default useStyles;
