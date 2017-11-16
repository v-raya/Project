import React from 'react'
import ReactDOM from 'react-dom'
import {mount} from 'enzyme'
import HeaderComponent from 'header/index'

describe('Header Component', () => {
  it('allows us to set props', () => {
    const header = mount(<HeaderComponent logoutUrl="/logout" />)
    expect(header.props().logoutUrl).toEqual('/logout')
    header.setProps({ logoutUrl: '/abcd' })
    expect(header.props().logoutUrl).toEqual('/abcd')
  })
})
