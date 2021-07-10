import { Box } from '@material-ui/core';
import useStyles from './styles';

const Footer = (): JSX.Element => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.footer}>Footer</Box>
    </>
  );
};

export default Footer;
