import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Movies from '../pages/Movies';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Movies} isClosed={false} />
    </Switch>
  );
}
