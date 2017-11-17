import React from 'react'
import Rfa01AOverview from 'rfa_forms/rfa_packet_list/rfa01aOverview'
import ShallowRenderer from 'react-test-renderer/shallow'
var TestUtils = require('react-dom/test-utils')

describe('Verify Application List View', () => {
  const rfa01AOverviewCard = new ShallowRenderer()

  const setFocusStateSpy = jasmine.createSpy('setFocusState')
  const getFocusClassNameSpy = jasmine.createSpy('getFocusClassName')

  const rfaPacketRenderedView = rfa01AOverviewCard.render(
    <Rfa01AOverview
      focusComponentName={'Rfa01AOverview'}
      applicationId={'10'}
      setFocusState={setFocusStateSpy}
      getFocusClassName={getFocusClassNameSpy}
    />)
  it('Verify card selection', () => {
    rfaPacketRenderedView.props.handleOnClick()
    expect(setFocusStateSpy).toHaveBeenCalledWith('Rfa01AOverview')
  })
  it('To Load with the correct label', () => {
    expect(rfaPacketRenderedView.props.label).toBe('Rfa-01A Section Summary')
  })
  it('To have a button', () => {
    expect(rfaPacketRenderedView.props.children.props.className).toBe('btn btn-default')
  })
})
