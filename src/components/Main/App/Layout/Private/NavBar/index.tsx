import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Button,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemText
} from '@material-ui/core';
import { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from './styles';
import { useHistory } from 'react-router-dom';
import { privateRoutes } from 'components/Main/App/Router/routes';
import { useLocation } from 'react-router-dom';

const NavBar = (): JSX.Element => {
  const location = useLocation();
  const currentRoute = Object.values(privateRoutes).find(
    (route) => route.path === location.pathname
  );
  const [drawerOpen, setDrawerOpen] = useState(false);

  const classes = useStyles();
  const history = useHistory();

  const navigateTo = (route: string): void => {
    history.push(route);
    setDrawerOpen(false);
  };

  return (
    <>
      <SwipeableDrawer
        anchor={'left'}
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        onOpen={() => setDrawerOpen(true)}
      >
        <List>
          <ListItem button onClick={() => navigateTo(privateRoutes.root.path)}>
            <ListItemText primary={privateRoutes.root.name} />
          </ListItem>
        </List>
      </SwipeableDrawer>

      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setDrawerOpen(!drawerOpen)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.titleLabel}>
            {currentRoute ? currentRoute.name : 'Error'}
          </Typography>
          <Button color="inherit" className={classes.logoutButton}>
            Cerrar Sesión
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
