import React from 'react'
import Facility from 'facility/index'
import {shallow, mount} from 'enzyme'

describe('Verify Facility with address and details data', function () {
  const props = {
    'href': 'facilities/SouUlov56F',
    'id': 'SouUlov56F',
    'type': {
      'id': '432',
      'value': 'Foster Family Agency Certified Home'
    },
    'name': 'Adriana Marin',
    'licensee_name': '',
    'capacity': 2,
    'county': {
      'id': '56',
      'value': 'Ventura'
    },
    'phones': [ {
      'relation': 'primary',
      'number': '8056506814'
    }, {
      'relation': 'alternate',
      'number': '8056506814'
    } ],
    'addresses': [ {
      'type': 'Residential',
      'address': {
        'street_address': '1266 Chalmette Ave',
        'city': 'Ventura',
        'state': 'CA',
        'zip_code': '93003'
      }
    }, {
      'type': 'Mailing',
      'address': {
        'street_address': '333 Gellert Blvd., #203',
        'city': 'Daly City',
        'state': 'CA',
        'zip_code': '94015'
      }
    } ],
    'facility_source': 'CWS/CMS'
  }
  let FacilityCompShallow = mount(<Facility facility={props} complaints={null} children={null} errors={null} />)
  it('Verify rendered facility address fields', function () {
    expect(FacilityCompShallow.find('.facility-address').length).toEqual(1)
  })
})

describe('Verify Facility with no details and address data', function () {
  const props = {'message': { 'issue_details':
  [{'incident_id': '817de192-d634-4618-bbf7-54f89b8ff619',
    'type': 'unexpected_exception',
    'user_message': 'There was an error processing your request. It has been logged with unique incident id',
    'technical_message': 'ERROR: column facilityin0_.dt_edited does not exist↵  Position: 747'}]},
  'url': 'https://calsapi.preint.cwds.io/facilities/10000451'}

  let FacilityCompMount = mount(<Facility facility={null} complaints={null} children={null} errors={props} url={props} />)
  it('verify render of backend errors on to UI', function () {
    expect(FacilityCompMount.find('.facility-address').length).toEqual(0)
    expect(FacilityCompMount.find('.input-error-message').length).toEqual(4)
  })
})
