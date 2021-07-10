import { makeStyles } from '@material-ui/core/styles';
import { deepPurple, indigo, blueGrey } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  rootGrid: {
    margin: 0,
    width: '100%'
  },
  buttonStyleOne: {
    marginTop: 12,
    color: '#fff',
    backgroundColor: deepPurple['A400'],
    '&:hover': {
      backgroundColor: blueGrey[600]
    }
  },
  buttonStyleTwo: {
    marginTop: 12,
    color: '#fff',
    backgroundColor: indigo['A400'],
    '&:hover': {
      backgroundColor: blueGrey[600]
    }
  },
  buttonStyleThree: {
    marginTop: 12,
    color: '#fff',
    backgroundColor: blueGrey[600]
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff'
  }
}));

export default useStyles;
