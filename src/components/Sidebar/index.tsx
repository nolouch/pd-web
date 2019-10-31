import { Menu } from 'semantic-ui-react'
import React from 'react'

interface PDSidebarProps {
  title: string
}

const Sidebar: React.FC<PDSidebarProps> = props => (
  <div className="PD-Sidebar">
    <Menu as="nav" className="sidebar-menu" size="small" pointing secondary>
      <Menu.Item name={props.title} />
    </Menu>
    {props.children}
  </div>
)

export default Sidebar
