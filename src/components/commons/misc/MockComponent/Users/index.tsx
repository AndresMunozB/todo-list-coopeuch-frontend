import { ActionStatus } from 'store';
import UserList from './UserList';
import Notice from './Notice';
import { UsersResponse } from 'api/endpoints/user';

type Props = {
  /** Estado de la acción getUsersStatus */
  status: number;
  /** Una lista de usuarios */
  users: UsersResponse;
};

/**
 * Muestra una lista de usuarios si se obtienen correctamente, en caso contrario se
 * muestra un aviso.
 */
const Users = (props: Props): JSX.Element | null => {
  const { status, users } = props;
  switch (status) {
    case ActionStatus.DEFAULT:
      return <Notice message="Haga click para buscar usuarios" />;
    case ActionStatus.START:
      return <Notice message="Buscando usuarios" />;
    case ActionStatus.SUCCESS:
      return (
        <UserList
          title="Lista de usuarios"
          users={users}
          fallback={<Notice message="No se encontraron usuarios" />}
        />
      );
    case ActionStatus.FAILURE:
      return <Notice message="Ocurrió un problema :(" />;
    default:
      return null;
  }
};

export default Users;
