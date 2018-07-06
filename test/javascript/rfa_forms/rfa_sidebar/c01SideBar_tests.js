import React from 'react'
import {shallow, mount} from 'enzyme'
import C01SideBar from 'rfa_forms/rfa_sidebar/c01SideBar'

describe('RFA 01c side bar ', () => {
  let component
  let isNavLinkActiveSpy = jasmine.createSpy('isNavLinkActive')
  let handleNavLinkClickSpy = jasmine.createSpy('handleNavLinkClick')
  let rfa01aApplicationId = 88
  let rfa01cForm = {
    'id': 89,
    'child_identified': false
  }

  beforeEach(() => {
    component = mount(<C01SideBar
      rfa01cForm={null}
      rfa01aApplicationId={rfa01aApplicationId}
      childIdentified
      isNavLinkActive={isNavLinkActiveSpy}
      handleNavLinkClick={handleNavLinkClickSpy}
    />)
  })

  it('renders the div wrapper', () => {
    expect(component.find('div').exists()).toBe(true)
  })

  it('renders a link to the child identified', () => {
    expect(component.find('NavLink[text="child identified"]').props().href)
      .toBe('/rfa/a01/88/c01/')
  })
  it('clicks the link and updates link', () => {
    component.find('Link[text="child identified"]').simulate('click')
    component.update()
    expect(handleNavLinkClickSpy).toHaveBeenCalledWith(88)
  })
})

describe('RFA 01b side bar componenet with rfa 01c form', () => {
  let componentWithRfa1c
  let isNavLinkActiveSpy = jasmine.createSpy('isNavLinkActive')
  let handleNavLinkClickSpy = jasmine.createSpy('handleNavLinkClick')
  let rfa01aApplicationId = 88
  let rfa01cForm = {
    'id': 89,
    'child_identified': false
  }

  beforeEach(() => {
    componentWithRfa1c = mount(<C01SideBar
      rfa01cForm={rfa01cForm}
      rfa01aApplicationId={rfa01aApplicationId}
      childIdentified
      isNavLinkActive={isNavLinkActiveSpy}
      handleNavLinkClick={handleNavLinkClickSpy}
    />)
  })

  it('renders a link to the card', () => {
    expect(componentWithRfa1c.find('NavLink[text="child id: 89"]').props().href)
      .toBe('/rfa/a01/88/c01/89/edit')
  })
  it('clicks the link and updates link', () => {
    componentWithRfa1c.find('Link[text="child id: 89"]').simulate('click')
    componentWithRfa1c.update()
    expect(handleNavLinkClickSpy).toHaveBeenCalledWith(89)
  })
})
