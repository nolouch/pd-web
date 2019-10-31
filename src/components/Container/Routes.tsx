import { Redirect, Route, Switch } from 'react-router-dom'

import Cluster from 'components/Cluster'
import React from 'react'
import Regions from 'components/Regions'
import Stores from 'components/Stores'

const Routes = () => (
  <Switch>
    <Route path="/" exact>
      <Redirect to="/cluster" />
    </Route>
    <Route path="/cluster">
      <Cluster />
    </Route>
    <Route path="/stores">
      <Stores />
    </Route>
    <Route path="/regions">
      <Regions />
    </Route>
  </Switch>
)

export default Routes
