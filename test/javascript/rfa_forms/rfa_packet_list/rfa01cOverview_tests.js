import React from 'react'
import Rfa01COverview from 'rfa_forms/rfa_packet_list/rfa01cOverview'
import {shallow, mount} from 'enzyme'

describe('verify Rfa01COverview with no child rendering', () => {
  // const rfa01COverviewCard = new ShallowRenderer()
  const falseChildIdentified = Object.freeze({
    child_identified: false
  })

  const setFocusStateSpy = jasmine.createSpy('setFocusState')
  const getFocusClassNameSpy = jasmine.createSpy('getFocusClassName')

  const rfaPacketRenderedView = mount(
    <Rfa01COverview
      focusComponentName={'Rfa01BOverview'}
      applicationId={'10'}
      rfa01CForm={[]}
      childDesired={falseChildIdentified}
      setFocusState={setFocusStateSpy}
      getFocusClassName={getFocusClassNameSpy}
    />)
  it('Verify focous state', () => {
    let rfaPacketRenderedViewField = rfaPacketRenderedView.find('#Rfa01COverview').hostNodes()
    rfaPacketRenderedViewField.simulate('click')
    expect(setFocusStateSpy).toHaveBeenCalledWith('Rfa01COverview')
  })
  it('Verify focus class name', () => {
    let rfaPacketRenderedViewField = rfaPacketRenderedView.find('#Rfa01COverview').hostNodes()
    rfaPacketRenderedViewField.simulate('click')
    expect(getFocusClassNameSpy).toHaveBeenCalledWith('Rfa01COverview')
  })
  it('To Load with the correct label', () => {
    expect(rfaPacketRenderedView.find('#Rfa01COverview').hostNodes().length).toBe(1)
  })

  it('should not render any child components when child identified is false', () => {
    expect(rfaPacketRenderedView.find('#rfa01cCreate').length).toEqual(0)
  })
})

describe('verify Rfa01COverview with Create Link', () => {
  const trueChildIdentified = Object.freeze({
    child_identified: true
  })

  const setFocusStateSpy = jasmine.createSpy('setFocusState')
  const getFocusClassNameSpy = jasmine.createSpy('getFocusClassName')
  const rfaPacketRenderedView = mount(
    <Rfa01COverview
      focusComponentName={'Rfa01BOverview'}
      applicationId={'10'}
      rfa01CForm={[]}
      childDesired={trueChildIdentified}
      setFocusState={setFocusStateSpy}
      getFocusClassName={getFocusClassNameSpy}
    />)

  it('should render create link component', () => {
    expect(rfaPacketRenderedView.find('#rfa01cCreate').length).toEqual(1)
  })
})

describe('verify Rfa01COverview with Edit Link', () => {
  const trueChildIdentified = Object.freeze({
    child_identified: true
  })

  const rfa01CFormId = Object.freeze({
    id: '10'
  })

  const setFocusStateSpy = jasmine.createSpy('setFocusState')
  const getFocusClassNameSpy = jasmine.createSpy('getFocusClassName')

  const rfaPacketRenderedView = mount(
    <Rfa01COverview
      focusComponentName={'Rfa01BOverview'}
      applicationId={'10'}
      rfa01CForm={[rfa01CFormId]}
      childDesired={trueChildIdentified}
      setFocusState={setFocusStateSpy}
      getFocusClassName={getFocusClassNameSpy}
    />)

  it('should render edit link component ', () => {
    expect(rfaPacketRenderedView.find('#rfa01cEdit').length).toEqual(1)
  })
})
