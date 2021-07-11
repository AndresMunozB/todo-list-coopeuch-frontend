import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  example: {
    margin: theme.spacing(1)
  },
  inline: {
    display: 'flex',
    width: '100%'
  },
  justifySpaceBetween: {
    justifyContent: 'space-between'
  },
  alignCenter: {
    alignItems: 'center'
  },
  whiteSpace: {
    whiteSpace: 'normal',
    textOverflow: 'ellipsis'
  }
}));

export default useStyles;
