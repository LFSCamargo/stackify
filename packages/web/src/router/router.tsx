import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Welcome } from '~/screens';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Welcome} />
    </Switch>
  </BrowserRouter>
);
