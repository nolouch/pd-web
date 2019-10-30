import { Redirect, Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import Cluster from 'components/Cluster'
import Nav from 'components/Nav'
import React from 'react'
import Regions from 'components/Regions'
import Stores from 'components/Stores'

const Container: React.FC = () => (
  <div className="PD-Container">
    <Nav />
    <Router>
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
    </Router>
  </div>
)

export default Container
