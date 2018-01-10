import React from 'react'
import FacilityAddress from '../../../app/javascript/facility/address.jsx'
import {shallow} from 'enzyme'

describe('Verify Facility Address', function () {
  const props = {
    facilityData: {
      'href': 'facilities/300665437',
      'id': '300665437',
      'type': {
        'id': '726',
        'value': 'TRANSITIONAL HOUSING PLACEMENT PROGRAM'
      },
      'name': 'Lederhouse Transitions',
      'licensee_name': 'Lederhouse Transitions Inc.',
      'license_type': 'A',
      'assigned_worker': {},
      'district_office': {
        'number': '19',
        'name': 'PACIFIC INLAND CR'
      },
      'license_number': '300665437',
      'status': {
        'id': '5',
        'value': 'PROBATIONARY LICENSE'
      },
      'capacity': 10,
      'license_effective_date': '2012-10-01',
      'original_application_recieved_date': '2012-07-18',
      'last_visit_date': '2017-04-14',
      'last_visit_reason': {
        'id': '10',
        'value': 'CASELOAD MANAGEMENT'
      },
      'county': {
        'id': '30',
        'value': 'ORANGE'
      },
      'phones': [
        {
          'relation': 'primary',
          'type': 'Cell',
          'number': '9494480118'
        }
      ],
      'addresses': [
        {
          'type': 'Residential',
          'address': {
            'street_address': '36 Sequoia Dr',
            'city': 'Aliso Viejo',
            'state': 'CA',
            'zip_code': '92656'
          }
        },
        {
          'type': 'Mailing',
          'address': {
            'street_address': '36 Sequoia Dr',
            'city': 'Aliso Viejo',
            'state': 'CA',
            'zip_code': '92656'
          }
        }
      ],
      'visits': [
        {
          'approval': '',
          'visit_type': 'Annual 10 month',
          'visit_date': '2011-10-28'
        },
        {
          'approval': '',
          'visit_type': 'Annual 22 month'
        },
        {
          'approval': '',
          'visit_type': 'Post Licensing',
          'visit_deferred_date': '1991-11-06'
        },
        {
          'approval': '',
          'visit_type': 'Renewal'
        }
      ],
      'annual_visit_year': 12
    }
  }
  let AddressCompShallow = shallow(<FacilityAddress {...props} />)
  it('verify Facility Address fields', function () {
    expect(AddressCompShallow.find('.facility-address').length).toEqual(1)
  })
  it('verify Facility Last Visit Date Value', function () {
    let lastVisitDateValue = AddressCompShallow.props().children.props.children[2].props.children.props.children[0].props.value
    expect(lastVisitDateValue).toBe('2017-04-14')
  })
  it('verify Facility Last Visit Reason', function () {
    let lastVisitReasonValue = AddressCompShallow.props().children.props.children[2].props.children.props.children[1].props.value
    expect(lastVisitReasonValue).toBe('CASELOAD MANAGEMENT')
  })
})

describe('Verify Facility Address with N/A values', function () {
  const props = {
    facilityData: {
      'href': 'facilities/300665437',
      'id': '300665437',
      'type': {
        'id': '726',
        'value': 'TRANSITIONAL HOUSING PLACEMENT PROGRAM'
      },
      'name': 'Lederhouse Transitions',
      'licensee_name': 'Lederhouse Transitions Inc.',
      'license_type': 'A',
      'assigned_worker': {},
      'district_office': {
        'number': '19',
        'name': 'PACIFIC INLAND CR'
      },
      'license_number': '300665437',
      'status': {
        'id': '5',
        'value': 'PROBATIONARY LICENSE'
      },
      'capacity': 10,
      'license_effective_date': '2012-10-01',
      'original_application_recieved_date': '2012-07-18',
      'last_visit_date': null,
      'last_visit_reason': null,
      'county': {
        'id': '30',
        'value': 'ORANGE'
      },
      'phones': [
        {
          'relation': 'primary',
          'type': 'Cell',
          'number': '9494480118'
        }
      ],
      'addresses': [
        {
          'type': 'Residential',
          'address': {
            'street_address': '36 Sequoia Dr',
            'city': 'Aliso Viejo',
            'state': 'CA',
            'zip_code': '92656'
          }
        },
        {
          'type': 'Mailing',
          'address': {
            'street_address': '36 Sequoia Dr',
            'city': 'Aliso Viejo',
            'state': 'CA',
            'zip_code': '92656'
          }
        }
      ],
      'visits': [
        {
          'approval': '',
          'visit_type': 'Annual 10 month',
          'visit_date': '2011-10-28'
        },
        {
          'approval': '',
          'visit_type': 'Annual 22 month'
        },
        {
          'approval': '',
          'visit_type': 'Post Licensing',
          'visit_deferred_date': '1991-11-06'
        },
        {
          'approval': '',
          'visit_type': 'Renewal'
        }
      ],
      'annual_visit_year': 12
    }
  }
  let AddressCompShallow = shallow(<FacilityAddress {...props} />)
  it('verify Facility Address fields', function () {
    expect(AddressCompShallow.find('.facility-address').length).toEqual(1)
  })
  it('verify Facility Last Visit Date Value', function () {
    let lastVisitDateValue = AddressCompShallow.props().children.props.children[2].props.children.props.children[0].props.value
    expect(lastVisitDateValue).toEqual('N/A')
  })
  it('verify Facility Last Visit Reason', function () {
    let lastVisitReasonValue = AddressCompShallow.props().children.props.children[2].props.children.props.children[1].props.value
    expect(lastVisitReasonValue).toBe('N/A')
  })
})
