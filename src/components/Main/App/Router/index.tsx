import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { publicRoutes } from './routes';

const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={publicRoutes.root.path} component={publicRoutes.root.component} />
        {/* <Route path="/app" exact >
          <Private>
            <Switch>
              <PrivateRoute
                exact
                path={publicRoutes.root.path} component={publicRoutes.root.component}
              />
              <Route component={publicRoutes.notFound.component} />
            </Switch>
          </Private>
        </Route> */}
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
