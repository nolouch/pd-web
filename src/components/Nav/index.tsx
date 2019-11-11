import { Header, Menu } from 'semantic-ui-react'

import React from 'react'

const Nav = () => (
  <Menu as="nav" className="PD-Nav" size="large" inverted borderless>
    <Menu.Item>
      <Header inverted>PD Dashboard</Header>
    </Menu.Item>
  </Menu>
)

export default Nav
