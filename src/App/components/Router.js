import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router-dom';

const Router = ({ history, routes, children }) => (
  <ConnectedRouter history={history}>
    {children}
    <Switch>
      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
      <Route path="*" render={() => <h1>404! Not Found</h1>} />
    </Switch>
  </ConnectedRouter>
);

const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    render={props => <route.component {...props} routes={route.routes} />}
  />
);

export default Router;
