import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';

type Props = {
  /** El mensaje del aviso */
  message: string;
};

/**
 * Muestra un aviso
 */
const Notice = (props: Props): JSX.Element => {
  const classes = useStyles();
  const { message } = props;
  return (
    <Paper className={classes.root} elevation={2}>
      <Typography>{message}</Typography>
    </Paper>
  );
};

export default Notice;
