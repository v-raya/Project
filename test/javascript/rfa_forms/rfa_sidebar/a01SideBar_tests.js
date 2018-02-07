import React from 'react'
import {shallow, mount} from 'enzyme'
import A01SideBar from 'rfa_forms/rfa_sidebar/a01SideBar'

describe('RFA 01a side bar ', () => {
  let component
  let isNavLinkActiveSpy = jasmine.createSpy('isNavLinkActive')
  let handleNavLinkClickSpy = jasmine.createSpy('handleNavLinkClick')
  beforeEach(() => {
    component = mount(<A01SideBar
      showRelationshipBetweenApplicants={false}
      isNavLinkActive={isNavLinkActiveSpy}
      onRfa01AForm
      rfa01aApplicationId={10}
      handleNavLinkClick={handleNavLinkClickSpy}
    />)
  })

  it('renders the div wrapper', () => {
    expect(component.find('div.col-lg-10').exists()).toBe(true)
  })

  it('renders a link to the Applicant Information card', () => {
    expect(component.find('NavLink[text="1. Applicant Information"]').props().href)
      .toBe('#applicants-card')
  })
  it('clicks the link and updates link to the Applicant Information card', () => {
    component.find('Link[text="1. Applicant Information"]').simulate('click')
    component.update()
    expect(handleNavLinkClickSpy).toHaveBeenCalledWith('#applicants-card')
  })

  it('renders a link to the Applicant residence card', () => {
    expect(component.find('NavLink[text="2. Applicant Residence"]').props().href)
      .toBe('#applicant-residence-card')
  })
  it('clicks the link and updates link to the Applicant residence card', () => {
    component.find('Link[text="2. Applicant Residence"]').simulate('click')
    component.update()
    expect(handleNavLinkClickSpy).toHaveBeenCalledWith('#applicant-residence-card')
  })
  it('renders a link to the minor children card', () => {
    expect(component.find('NavLink[text="4. Minor Children"]').props().href)
      .toBe('#minor-child-card')
  })
  it('clicks the link and updates link the minor children card', () => {
    component.find('Link[text="4. Minor Children"]').simulate('click')
    component.update()
    expect(handleNavLinkClickSpy).toHaveBeenCalledWith('#minor-child-card')
  })

  it('renders a link to the other adults card', () => {
    expect(component.find('NavLink[text="5. Other Adults"]').props().href)
      .toBe('#other-adults-card')
  })
  it('clicks the link and updates link  to the other adults card', () => {
    component.find('Link[text="5. Other Adults"]').simulate('click')
    component.update()
    expect(handleNavLinkClickSpy).toHaveBeenCalledWith('#other-adults-card')
  })
  it('renders a link to the Applicant marital history card', () => {
    expect(component.find('NavLink[text="6. Marital History"]').props().href)
      .toBe('#marital-history-card')
  })
  it('clicks the link and updates link to the Applicant marital history card', () => {
    component.find('Link[text="6. Marital History"]').simulate('click')
    component.update()
    expect(handleNavLinkClickSpy).toHaveBeenCalledWith('#marital-history-card')
  })
  it('renders a link to the child desired card', () => {
    expect(component.find('NavLink[text="7. Child Desired"]').props().href)
      .toBe('#child-desired-card')
  })
  it('clicks the link and updates link to the child desired card', () => {
    component.find('Link[text="7. Child Desired"]').simulate('click')
    component.update()
    expect(handleNavLinkClickSpy).toHaveBeenCalledWith('#child-desired-card')
  })
  it('renders a link to the foster care  card', () => {
    expect(component.find('NavLink[text="8. Foster Care History"]').props().href)
      .toBe('#foster-care-card')
  })
  it('clicks the link and updates link to the foster care card', () => {
    component.find('Link[text="8. Foster Care History"]').simulate('click')
    component.update()
    expect(handleNavLinkClickSpy).toHaveBeenCalledWith('#foster-care-card')
  })
  it('renders a link to the References card', () => {
    expect(component.find('NavLink[text="9. References"]').props().href)
      .toBe('#reference-card')
  })
  it('clicks the link and updates link to the references card', () => {
    component.find('Link[text="9. References"]').simulate('click')
    component.update()
    expect(handleNavLinkClickSpy).toHaveBeenCalledWith('#reference-card')
  })
  it('does not render a link to the Applicant Information card when no relationship', () => {
    expect(component.find('NavLink[text="3. Applicant Relationship"]').exists()).toBe(false)
  })
})

describe('RFA 01a side bar  relationship links', () => {
  let noHiddenRelationshipNavcomponent
  let isNavLinkActiveSpy = jasmine.createSpy('isNavLinkActive')
  let handleNavLinkClickSpy = jasmine.createSpy('handleNavLinkClick')
  beforeEach(() => {
    noHiddenRelationshipNavcomponent = mount(<A01SideBar
      showRelationshipBetweenApplicants
      onRfa01AForm
      rfa01aApplicationId={10}
      isNavLinkActive={isNavLinkActiveSpy}
      handleNavLinkClick={handleNavLinkClickSpy}
    />)
  })
  it('renders a link to the Applicant relationship card', () => {
    expect(noHiddenRelationshipNavcomponent.find('NavLink[text="3. Applicant Relationship"]').props().href)
      .toBe('#relationship-between-applicants-card')
  })
  it('clicks the link and updates link to the Applicant Relationship card', () => {
    noHiddenRelationshipNavcomponent.find('Link[text="3. Applicant Relationship"]').simulate('click')
    noHiddenRelationshipNavcomponent.update()
    expect(handleNavLinkClickSpy).toHaveBeenCalledWith('#relationship-between-applicants-card')
  })
})
describe('RFA 01a side bar  not on rfa 01a form', () => {
  let notOnRfa01AForm
  let isNavLinkActiveSpy = jasmine.createSpy('isNavLinkActive')
  let handleNavLinkClickSpy = jasmine.createSpy('handleNavLinkClick')
  beforeEach(() => {
    notOnRfa01AForm = mount(<A01SideBar
      showRelationshipBetweenApplicants
      onRfa01AForm={false}
      rfa01aApplicationId={10}
      isNavLinkActive={isNavLinkActiveSpy}
      handleNavLinkClick={handleNavLinkClickSpy}
    />)
  })
  it('renders a link to the Applicant relationship card from not on rfa 01 a form', () => {
    expect(notOnRfa01AForm.find('NavLink[text="8. Foster Care History"]').props().href)
      .toBe('/rfa/a01/10/edit#foster-care-card')
  })
  it('clicks the link and updates link to the Applicant Relationship card from not on rfa 01 a form', () => {
    notOnRfa01AForm.find('Link[text="8. Foster Care History"]').simulate('click')
    notOnRfa01AForm.update()
    expect(handleNavLinkClickSpy).toHaveBeenCalledWith('#foster-care-card')
  })
})
