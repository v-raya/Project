import React from 'react'
import Rfa01BOverview from 'rfa_forms/rfa_packet_list/rfa01bOverview'
var TestUtils = require('react-dom/test-utils')

describe('Verify Application List View', () => {
  const rfa01BOverviewCard = TestUtils.createRenderer()

  const setFocusStateSpy = jasmine.createSpy('setFocusState')
  const getFocusClassNameSpy = jasmine.createSpy('getFocusClassName')
  let rfa01A = {
    applicants: [],
    other_adults: []
  }
  const rfaPacketRenderedView = rfa01BOverviewCard.render(
    <Rfa01BOverview
      focusComponentName={'Rfa01BOverview'}
      applicationId={'10'}
      rfa01A={rfa01A}
      setFocusState={setFocusStateSpy}
      getFocusClassName={getFocusClassNameSpy}
   />)
  it('To Load with the correct label', () => {
    expect(rfaPacketRenderedView.props.label).toBe('Rfa-01B Section Summary')
  })
})
