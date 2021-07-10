import { Route, Redirect, RouteComponentProps } from 'react-router-dom';

type Props = {
  exact: boolean;
  path: string;
  component: React.FunctionComponent<RouteComponentProps>;
};

const PrivateRoute = (props: Props): JSX.Element => {
  const { exact, path, component } = props;
  const isAuthenticated = true; // useAuthentication()
  return isAuthenticated ? (
    <Route exact={exact} path={path} component={component} />
  ) : (
    <Redirect to="/login" />
  );
};

export default PrivateRoute;
