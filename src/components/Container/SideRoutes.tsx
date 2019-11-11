import { Redirect, Route, Switch } from 'react-router-dom'

import ClusterNav from 'components/Sidebar/ClusterNav'
import React from 'react'

const SideRoutes = () => (
  <Switch>
    <Route path="/" exact>
      <Redirect to="/cluster" />
    </Route>
    <Route path="/cluster">
      <ClusterNav />
    </Route>
  </Switch>
)

export default SideRoutes
