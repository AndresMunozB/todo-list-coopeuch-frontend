import Paper from '@material-ui/core/Paper';
import ListSubheader from '@material-ui/core/ListSubheader';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import useStyles from './styles';
import { UsersResponse } from 'api/endpoints/user';

type Props = {
  /** El título para la lista de usuarios */
  title: string;
  /** La lista de usuarios */
  users: UsersResponse;
  /** Componente que se muestra en caso de no poder mostrar la lista de usuarios */
  fallback: JSX.Element;
};

/**
 * Muestra una lista de usuarios
 */
const UserList = (props: Props): JSX.Element | null => {
  const classes = useStyles();
  const { title = 'Usuarios', users, fallback = <Box>No se encontraron usuarios</Box> } = props;
  if (!users) {
    return null;
  }
  return users.length > 0 ? (
    <Paper className={classes.root} elevation={2}>
      <List subheader={<ListSubheader>{title}</ListSubheader>}>
        {users.map((user) => (
          <ListItem key={user.id}>
            <ListItemText primary={user.name} secondary={`[${user.id}] ${user.email}`} />
          </ListItem>
        ))}
      </List>
    </Paper>
  ) : (
    fallback
  );
};

export default UserList;
