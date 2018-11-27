import React from 'react'
import ReactDOM from 'react-dom'
import {mount, shallow} from 'enzyme'
import HeaderComponent from 'header/index'

describe('Header Component', () => {
  let logoutCallbackSpy, header
  beforeEach(() => {
    const props = {
      logoutUrl: '/logout',
      user: {
        'county_code': '19',
        'county_name': 'Ventura',
        'first_name': 'peter',
        'last_name': 'parker',
        'privileges': ['CWS Case Management', 'Resource Management', 'Sealed'],
        'roles': ['CWS-admin', 'Supervisor'],
        'staffId': '0X5',
        'user': 'RACFID'
      }
    }
    header = mount(<HeaderComponent {...props} />)
    spyOn(header.instance(), 'redirectUrl')
  })

  it('allows us to set props', () => {
    expect(header.props().logoutUrl).toEqual('/logout')
    header.setProps({ logoutUrl: '/abcd' })
    expect(header.props().logoutUrl).toEqual('/abcd')
  })
  it('allow user logout', () => {
    const avatar = header.find('button').last()
    avatar.simulate('click')
    expect(header.instance().redirectUrl.calls.any()).toEqual(false)

    const logOutLink = header.find('ul.c_dropdown a')
    logOutLink.simulate('click')
    expect(header.instance().redirectUrl.calls.any()).toEqual(true)
    expect(header.instance().redirectUrl).toHaveBeenCalledWith('/logout')
  })

  it('Renders user full name', () => {
    const userName = header.find('ul').props().children[3].props.children.props.children
    expect(userName).toBe('peter parker')
  })

  it('Renders "Not Available" when first and last name are not available', () => {
    const props = {
      user: {
        'first_name': '',
        'last_name': ''
      }
    }
    header = mount(<HeaderComponent {...props} />)
    const userName = header.find('ul').props().children[3].props.children.props.children
    expect(userName).toBe('Not Available')
  })

  it('Renders only first name and last name as unknown', () => {
    const props = {
      user: {
        'first_name': 'Jhon',
        'last_name': ''
      }
    }
    header = mount(<HeaderComponent {...props} />)
    const userName = header.find('ul').props().children[3].props.children.props.children
    expect(userName).toBe('Jhon (Unknown last name)')
  })

  it('Renders only last name and first name as unknown', () => {
    const props = {
      user: {
        'first_name': '',
        'last_name': 'Wick'
      }
    }
    header = mount(<HeaderComponent {...props} />)
    const userName = header.find('ul').props().children[3].props.children.props.children
    expect(userName).toBe('(Unknown first name) Wick')
  })
})
