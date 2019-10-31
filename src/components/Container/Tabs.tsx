import { Menu } from 'semantic-ui-react'
import React from 'react'
import { RouteComponentProps } from 'react-router'
import { withRouter } from 'react-router-dom'

type TabsProps = RouteComponentProps<{}>

const Tabs: React.FC<TabsProps> = props => {
  const location = props.location
  const pathname = location.pathname

  const handleOnMenuItemClick = (pathname: string) => () => props.history.push(pathname)

  return (
    <Menu as="nav" className="PD-Container-Tabs" size="small" pointing secondary>
      <Menu.Item name="Cluster" active={pathname === '/cluster'} onClick={handleOnMenuItemClick('/cluster')} />
      <Menu.Item name="Stores" active={pathname === '/stores'} onClick={handleOnMenuItemClick('/stores')} />
      <Menu.Item name="Regions" active={pathname === '/regions'} onClick={handleOnMenuItemClick('/regions')} />
    </Menu>
  )
}

export default withRouter(Tabs)
