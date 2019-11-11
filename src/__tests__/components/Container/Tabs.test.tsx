import { Menu } from 'semantic-ui-react'
import React from 'react'
import Tabs from 'components/Container/Tabs'
import { shallow } from 'enzyme'

describe('<Tabs />', () => {
  const wrapper = shallow(<Tabs />)
  const routes = ['/cluster', '/stores', '/regions']

  test('navlink worked as expectly', () => {
    let index = 0
    wrapper.find(Menu.Item).forEach(l => {
      expect(l.props().to).toBe(routes[index++])
    })
  })

  test('navlink active class', () => {
    expect(
      wrapper
        .find(Menu.Item)
        .first()
        .props().activeClassName
    ).toBe('active')
  })

  test('navlink click', () => {
    wrapper
      .find(Menu.Item)
      .at(2)
      .simulate('click')
    expect(
      wrapper
        .find(Menu.Item)
        .at(2)
        .props().activeClassName
    ).toBe('active')
  })
})
