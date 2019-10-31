import { Header, Menu } from 'semantic-ui-react'

import React from 'react'

const Nav = () => (
  <Menu as="nav" className="PD-Nav" size="small" borderless>
    <Menu.Item className="item-title">
      <Header className="title">PD Dashboard</Header>
    </Menu.Item>
  </Menu>
)

export default Nav
