import React from 'react'
import ReactDOM from 'react-dom'
import {mount, shallow} from 'enzyme'
import HeaderComponent from 'header/index'

describe('Header Component', () => {
  let logoutCallbackSpy, header
  beforeEach(() => {
    header = mount(<HeaderComponent logoutUrl="/logout" />)
    spyOn(header.instance(), 'redirectUrl')
  })

  it('allows us to set props', () => {
    expect(header.props().logoutUrl).toEqual('/logout')
    header.setProps({ logoutUrl: '/abcd' })
    expect(header.props().logoutUrl).toEqual('/abcd')
  })
  it('allow user logout', () => {
    let avatar = header.find('.profile-avatar a')
    avatar.simulate('click')
    expect(header.instance().redirectUrl.calls.any()).toEqual(false)

    let logOutLink = header.find('ul.c_dropdown a')
    logOutLink.simulate('click')
    expect(header.instance().redirectUrl.calls.any()).toEqual(true)
    expect(header.instance().redirectUrl).toHaveBeenCalledWith('/logout')
  })
})
