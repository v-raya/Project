import React from 'react'
import SearchGrid from 'search/searchGrid'
import ShallowRenderer from 'react-test-renderer/shallow'
import {shallow, mount} from 'enzyme'

describe('Render Search results to Grid', function () {
  let indexValue = '0'
  const prop = {
    searchResults: [
      {
        assigned_worker: 'Kari Gutierrez',
        county: 'Marin',
        district_office: 'NO. CAL SC/RES',
        fac_capacity: 7,
        email_address: 'test@test.com',
        fac_last_visit_date: '1991-12-10',
        fac_lic_eff_date: '1992-02-22',
        fac_licensee_name: 'TERRIER PROGRAMS, INC.',
        fac_licensee_type: 'C',
        fac_mail_city: 'MODESTO',
        fac_mail_state: 'CA',
        fac_mail_street_addr: '767 GLEN EAGLES DRIVE',
        fac_mail_zip_code: '95350',
        name: "DEPUTY DOG'S GROUP HOME",
        license_number: 193600008,
        id: 193600008,
        fac_orig_appl_rec_date: '1983-02-02',
        addresses: [
          {
            'id': null,
            'type': 'Residential',
            'address': {
              'id': null,
              'longitude': null,
              'lattitude': null,
              'deliverable': null,
              'street_address': '7 GREENROSE DRIVE',
              'city': 'NAPA',
              'state': 'CA',
              'zip_code': '94558',
              'zip_suffix_code': null
            }
          },
          {
            'id': null,
            'type': 'Mailing',
            'address': {
              'id': null,
              'longitude': null,
              'lattitude': null,
              'deliverable': null,
              'street_address': '7 GREENROSE DRIVE',
              'city': 'NAPA',
              'state': 'CA',
              'zip_code': '94558',
              'zip_suffix_code': null
            }
          }
        ],
        phones: [
          {
            'id': null,
            'relation': 'primary',
            'type': 'Cell',
            'number': '8317632735'
          }
        ],
        last_visit_reason: "Renewal (Fac.'s w/Expir.)",
        status: 'Licensed',
        type: 'Foster Family Home (Confidential - Do not release)'
      }
    ]
  }
  let searchGridComp = new ShallowRenderer()
  let searchGridRender = searchGridComp.render(<SearchGrid {...prop} />)
  let gridElement = searchGridRender.props.children
  it('Render Grid view block', function () {
    expect(gridElement[0].props.className).toBe('grid_view_inner col-xs-12 col-sm-12 col-md-12 col-lg-12')
  })
  it('verify loaded Facility ID', function () {
    expect(gridElement[0].key).toEqual(indexValue)
  })
  const gridObjects = gridElement[0].props.children
  const gridArrayChildElem = gridObjects[0].props.children
  it('expect anchor Tag', function () {
    expect(gridArrayChildElem.type).toBe('a')
  })
  it('Verify Anchor Tag href value', function () {
    expect(gridArrayChildElem.props.href).toEqual('/facilities/193600008')
  })
})

describe('Search results to Grid', function () {
  let indexValue = '0'
  const props = {
    searchResults: [
      {
        addresses: [],
        licensee_name: 'Ananya Nandi',
        email_address: 'test@test.com'
      }
    ]
  }

  const searchGridComp = mount(<SearchGrid {...props} />)
  it('Verify address to be N/A', () => {
    expect(searchGridComp.find('GridInnerLayout[title="Facility Address"]').props().value).toBe('N/A')
  })
  it('Verify email address', function () {
    expect(searchGridComp.find('GridInnerLayout[title="Facility Email"]').props().value).toBe('test@test.com')
  })
  it('Verify licensee name', function () {
    expect(searchGridComp.find('GridInnerLayout[title="Licensee Name"]').props().value).toBe('Ananya Nandi')
  })
})
