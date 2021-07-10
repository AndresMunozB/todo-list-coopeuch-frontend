import Home from 'components/screens/public/Home';
import NotFound from 'components/screens/public/NotFound';
import { RouteComponentProps } from 'react-router-dom';

type Route = {
  path: string;
  name: string;
  component: React.FunctionComponent<RouteComponentProps>;
};

const root: Route = {
  path: '/',
  name: 'Inicio',
  component: Home
};

const notFound: Route = {
  path: '',
  name: 'No encontrado',
  component: NotFound
};


export const publicRoutes = {
  root,
  notFound
};

export const privateRoutes = {
  root
};
