import React from 'react'
import FacilityDetails from 'facility/details.jsx'
import {shallow} from 'enzyme'

describe('Verify Facility Details', function () {
  const props = {
    facilityData: {
      'href': 'facilities/300665437',
      'id': '300665437',
      'licensee_name': 'Lederhouse Transitions Inc.',
      'assigned_worker': {
        'value': 'Chewalah Inc.'
      },
      'district_office': {
        'number': '19',
        'name': 'PACIFIC INLAND CR'
      },
      'license_number': '300665437',
      'status': {
        'id': '5',
        'value': 'LICENSED'
      },
      'capacity': 10,
      'capacity_last_changed': '2012-10-01 00:00:00',
      'license_effective_date': '2012-10-01 00:00:00',
      'original_application_recieved_date': '2012-07-18 00:00:00'
    }
  }
  let detailsCompShallow = shallow(<FacilityDetails {...props} />)
  it('verify Facility Details fields', function () {
    expect(detailsCompShallow.find('.grid_view').length).toEqual(1)
  })
  it('Verify Name of Licensee / Parents', function () {
    expect(detailsCompShallow.find('SmallInnerBlockDetails[title="NAME OF LICENSEE / PARENTS"]').props().value).toBe('Lederhouse Transitions Inc.')
  })
  it('Verify Approval / Licensing worker', function () {
    expect(detailsCompShallow.find('SmallInnerBlockDetails[title="APPROVAL / LICENSING WORKER"]').props().value).toBe('Chewalah Inc.')
  })
  it('Verify Assigned Oversight agency', function () {
    expect(detailsCompShallow.find('SmallInnerBlockDetails[title="ASSIGNED OVERSIGHT AGENCY"]').props().value).toBe('PACIFIC INLAND CR')
  })
  it('Verify Facility License Number', function () {
    expect(detailsCompShallow.find('SmallInnerBlockDetails[title="FACILITY LICENSE NUMBER"]').props().value).toBe('300665437')
  })
  it('Verify License status', function () {
    expect(detailsCompShallow.find('SmallInnerBlockDetails[title="LICENSE STATUS"]').props().value).toBe('LICENSED')
  })
  it('Verify Capacity / Capacity Last Changed', function () {
    expect(detailsCompShallow.find('SmallInnerBlockDetails[title="CAPACITY / CAPACITY LAST CHANGED"]').props().value).toBe('10 / 10/01/2012')
  })
  it('Verify License Effective Date when license status is "Licensed"', function () {
    expect(detailsCompShallow.find('SmallInnerBlockDetails[title="LICENSE EFFECTIVE DATE"]').props().value).toBe('10/01/2012')
  })
  it('Verify Application Received Date', function () {
    expect(detailsCompShallow.find('SmallInnerBlockDetails[title="APPLICATION RECEIVED DATE"]').props().value).toBe('07/18/2012')
  })
})

describe('Verify Facility Details with Null Value', function () {
  const props = {
    facilityData: {
      'href': 'facilities/300665437',
      'id': '300665437',
      'licensee_name': null,
      'assigned_worker': {},
      'district_office': {
        'number': '19',
        'name': null
      },
      'license_number': '300665437',
      'status': {
        'id': '5',
        'value': 'PROBATIONARY LICENSE'
      },
      'capacity': 10,
      'capacity_last_changed': null,
      'license_effective_date': null,
      'original_application_recieved_date': null
    }
  }
  let detailsCompShallow = shallow(<FacilityDetails {...props} />)
  it('verify Facility Details fields to be "N/A"', function () {
    expect(detailsCompShallow.find('.grid_view').length).toEqual(1)
  })
  it('Verify Approval / Licensing worker to be "N/A"', function () {
    expect(detailsCompShallow.find('SmallInnerBlockDetails[title="APPROVAL / LICENSING WORKER"]').props().value).toBe('N/A')
  })
  it('Verify Assigned Oversight agency to be "N/A"', function () {
    expect(detailsCompShallow.find('SmallInnerBlockDetails[title="ASSIGNED OVERSIGHT AGENCY"]').props().value).toBe('N/A')
  })
  it('Verify Capacity Last Changed to be "N/A"', function () {
    expect(detailsCompShallow.find('SmallInnerBlockDetails[title="CAPACITY / CAPACITY LAST CHANGED"]').props().value).toBe('10 / N/A')
  })
  it('Verify License Effective Date to be "N/A", when License status is "Probationary License"', function () {
    expect(detailsCompShallow.find('SmallInnerBlockDetails[title="LICENSE EFFECTIVE DATE"]').props().value).toBe('N/A')
  })
  it('Verify Application Received Date to be "N/A"', function () {
    expect(detailsCompShallow.find('SmallInnerBlockDetails[title="APPLICATION RECEIVED DATE"]').props().value).toBe('N/A')
  })
})
