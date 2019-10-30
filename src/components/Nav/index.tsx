import React from 'react'
import { Menu, Header } from 'semantic-ui-react'

const Nav = () => (
  <div className="PD-Nav">
    <Menu className="site-menu" fixed="top" size="small" borderless>
      <Menu.Item>
        <Header className="title">PD Dashboard</Header>
      </Menu.Item>
    </Menu>
  </div>
)

export default Nav
