import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './containers/Home';

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
  </Switch>
);

export default Routes;
