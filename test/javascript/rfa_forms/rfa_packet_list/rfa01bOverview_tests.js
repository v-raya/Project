import React from 'react'
import Rfa01BOverview from 'rfa_forms/rfa_packet_list/rfa01bOverview'
import ShallowRenderer from 'react-test-renderer/shallow'
import {shallow, mount} from 'enzyme'

describe('Verify Application List View', () => {
  let rfa01BOverviewCard

  const setFocusStateSpy = jasmine.createSpy('setFocusState')
  const getFocusClassNameSpy = jasmine.createSpy('getFocusClassName')

  let rfa01A = {
    applicants: [{driver_license_number: '',
      email: '',
      first_name: 'handle clear ',
      id: 10,
      last_name: 'on B',
      middle_name: '',
      other_names: [],
      phones: []
    }],
    other_adults: []
  }

  const rfaPacketRenderedView = mount(
    <Rfa01BOverview
      focusComponentName={'Rfa01BOverview'}
      applicationId={'10'}
      rfa01A={rfa01A}
      setFocusState={setFocusStateSpy}
      getFocusClassName={getFocusClassNameSpy}
    />)

  it('Verify focous state', () => {
    let rfaPacketRenderedViewField = rfaPacketRenderedView.find('#Rfa01BOverview').hostNodes()
    rfaPacketRenderedViewField.simulate('click')
    expect(setFocusStateSpy).toHaveBeenCalledWith('Rfa01BOverview')
  })
  it('Verify focus class name', () => {
    let rfaPacketRenderedViewField = rfaPacketRenderedView.find('#Rfa01BOverview').hostNodes()
    rfaPacketRenderedViewField.simulate('click')
    expect(getFocusClassNameSpy).toHaveBeenCalledWith('Rfa01BOverview')
  })
  it('To Load with the correct label', () => {
    expect(rfaPacketRenderedView.find('#Rfa01BOverview').hostNodes().length).toBe(1)
  })

  it('should not render any components when there are no applicants or other adults ', () => {
    expect(rfaPacketRenderedView.find('#rfa01BCreate').length).toEqual(0)
  })
})

describe('verify Rfa01BOverview with Create Link', () => {
  let rfa01A = {
    applicants: [ {driver_license_number: '',
      email: '',
      first_name: 'handle clear ',
      id: 10,
      last_name: 'on B',
      middle_name: '',
      other_names: [],
      phones: [],
      rfa1b_form: {
        arrested_for_crime_disclosures: [],
        convicted_in_another_state_disclosures: [],
        convicted_in_california_disclosures: [],
        id: 3}
    }
    ],
    other_adults: [
      { date_of_birth: '1111-11-11',
        first_name: 'test',
        id: 7,
        last_name: 'test',
        middle_name: 'second',
        relationship_to_applicants: {
          applicant_id: 46,
          relationship_to_applicant: {
            id: 1,
            value: 'Child'}
        }
      }
    ]
  }

  const setFocusStateSpy = jasmine.createSpy('setFocusState')
  const getFocusClassNameSpy = jasmine.createSpy('getFocusClassName')
  const rfaPacketRenderedView = mount(
    <Rfa01BOverview
      focusComponentName='Rfa01BOverview'
      applicationId='10'
      rfa01A={rfa01A}
      setFocusState={setFocusStateSpy}
      getFocusClassName={getFocusClassNameSpy}
    />)

  it('should render create link component', () => {
    expect(rfaPacketRenderedView.find('#rfa01B10').length).toEqual(1)
  })

  it('should render create link component', () => {
    expect(rfaPacketRenderedView.find('#rfa01B7').length).toEqual(1)
  })
})
