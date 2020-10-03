import React, { Component,Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Spinner from '../app/shared/Spinner';

const Roadmap = lazy(() => import('./roadmap/Roadmap'));
const Error404 = lazy(() => import('./user-pages/Error404'));
const BlankPage = lazy(() => import('./user-pages/BlankPage'));


class AppRoutes extends Component {
  render () {
    return (
      <Suspense fallback={<Spinner/>}>
        <Switch>
          <Route exact path="/roadmap" component={ Roadmap } />
          <Route path="/user-pages/blank-page" component={ BlankPage } />

          {/* Page redirection */}
          <Redirect exact from="/" to="/roadmap" />
          <Route component={ Error404 } />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;