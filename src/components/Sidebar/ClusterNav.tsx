import { Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import React from 'react'

const ClusterNav = () => {
  return (
    <Menu as="nav" className="sidebar-cluster-nav" pointing secondary vertical fluid>
      <Menu.Item as={NavLink} name="Overview" to="/cluster" activeClassName="active" />
    </Menu>
  )
}

export default ClusterNav
