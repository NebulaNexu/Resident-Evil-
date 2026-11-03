import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Rebecca from '../pages/ResidentEvil0/CharacterDetails/Rebecca/CharacterRebecca';

export default function NextedRoutes () {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/Rebecca-Information" component={Rebecca} exact />
      </Switch>
    </BrowserRouter>
  );
}