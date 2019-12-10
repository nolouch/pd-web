import { Dropdown, Icon, Menu, MenuItemProps } from 'semantic-ui-react'
import React, { Component } from 'react'

export default class KeyVisToolBar extends Component {
  state = {
    activeItem: 'auto_update'
  }

  handleItemClick = (_: React.MouseEvent<HTMLAnchorElement>, { name }: MenuItemProps) =>
    this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu icon="labeled" size="small" compact text fluid>
        <Menu.Menu position="right">
          <Menu.Item link>
            <Icon name="zoom" />
            Zoom
          </Menu.Item>

          <Menu.Item name="resetZoom" onClick={this.handleItemClick}>
            <Icon name="zoom-out" />
            Reset Zoom
          </Menu.Item>

          <Menu.Item name="autoUpdate" active={activeItem === 'auto_update'} onClick={this.handleItemClick}>
            <Icon name="refresh" />
            Auto Update
          </Menu.Item>

          <Menu.Item>
            <Icon name="clock outline" />
            {/* Date Range */}
            {/* <DateRange /> */}
            <Dropdown text="Quick range">
              <Dropdown.Menu>
                <Dropdown.Item>12 Hours</Dropdown.Item>
                <Dropdown.Item>1 Day</Dropdown.Item>
                <Dropdown.Item>7 Days</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}
