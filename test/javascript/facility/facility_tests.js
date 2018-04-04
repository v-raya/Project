import React from 'react'
import Facility from 'facility/index'
import {shallow, mount} from 'enzyme'

describe('Verify Facility', function () {
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
  it('verify Facility Address fields', function () {
    expect(FacilityCompShallow.find('.facility-address').length).toEqual(1)
  })
})
