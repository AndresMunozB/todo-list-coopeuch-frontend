import { FOOTER_HEIGHT } from '../../../../../../assets/constants';
import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    marginTop: 'auto',
    padding: theme.spacing(3),
    color: 'white',
    height: FOOTER_HEIGHT,
    display: 'flex',
    alignItems: 'center'
  }
}));

export default useStyles;
