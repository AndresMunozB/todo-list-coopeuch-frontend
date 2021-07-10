import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  dialogHeader: {
    backgroundColor: theme.palette.primary.main,
    color: 'white'
  },
  dialogContent: {
    padding: theme.spacing(3),
    position: 'relative'
  },
  loader: { position: 'absolute', width: '100%', top: 0, left: 0 }
}));

export default useStyles;
