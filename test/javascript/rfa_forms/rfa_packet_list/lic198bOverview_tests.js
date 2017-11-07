import React from 'react'
import Lic198BOverview from 'rfa_forms/rfa_packet_list/lic198bOverview'
import ShallowRenderer from 'react-test-renderer/shallow'

describe('Verify Application List View', () => {
  const Lic198BOverviewCard = new ShallowRenderer()

  const setFocusStateSpy = jasmine.createSpy('setFocusState')
  const getFocusClassNameSpy = jasmine.createSpy('getFocusClassName')

  const rfaPacketRenderedView = Lic198BOverviewCard.render(
    <Lic198BOverview
      focusComponentName={'Rfa01BOverview'}
      applicationId={'10'}
      setFocusState={setFocusStateSpy}
      getFocusClassName={getFocusClassNameSpy}
    />)
  it('To Load with the correct label', () => {
    expect(rfaPacketRenderedView.props.label).toBe('Lic198B Section Summary')
  })
})
