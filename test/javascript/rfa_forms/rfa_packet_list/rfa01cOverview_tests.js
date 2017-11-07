import React from 'react'
import Rfa01COverview from 'rfa_forms/rfa_packet_list/rfa01cOverview'
import ShallowRenderer from 'react-test-renderer/shallow'

describe('Verify Application List View', () => {
  const rfa01COverviewCard = new ShallowRenderer()

  const setFocusStateSpy = jasmine.createSpy('setFocusState')
  const getFocusClassNameSpy = jasmine.createSpy('getFocusClassName')

  const rfaPacketRenderedView = rfa01COverviewCard.render(
    <Rfa01COverview
      focusComponentName={'Rfa01BOverview'}
      applicationId={'10'}
      setFocusState={setFocusStateSpy}
      getFocusClassName={getFocusClassNameSpy}
    />)
  it('To Load with the correct label', () => {
    expect(rfaPacketRenderedView.props.label).toBe('Rfa-01C Section Summary')
  })
})
