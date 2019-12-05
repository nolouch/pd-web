// @ts-nocheck
import React, { Component } from 'react'
import { Icon, Menu, Dropdown } from 'semantic-ui-react'
// import DateRange from './DateRangeSelect'

// Todo: add type for props

export default class KeyVisToolBar extends Component {
  state = {
    activeItem: 'auto_update'
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu compact icon="labeled" size="tiny" text position="right" style={{ float: 'right' }}>
        <Menu.Item name="reset" onClick={this.handleItemClick}>
          <Icon name="zoom-out" />
          Reset Zoom
        </Menu.Item>

        <Menu.Item
          name="auto_update"
          color="green"
          active={activeItem === 'auto_update'}
          onClick={this.handleItemClick}
        >
          <Icon name="refresh" />
          Auto Update
        </Menu.Item>

        <Menu.Item name="date_range" onClick={this.handleItemClick}>
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
      </Menu>
    )
  }
}
