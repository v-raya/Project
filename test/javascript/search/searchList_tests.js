import React from 'react'
import SearchList from 'search/searchList'
import { shallow } from 'enzyme'

describe('Render search list and each method', function () {
  const indexValue = '0'
  const props = {
    searchResults: [{
      assigned_worker: {
        id: '1',
        value: 'Kari Gutierrez'
      },
      county: {
        id: '19',
        lis_code: null,
        value: 'Los Angeles'
      },
      facility_source: 'CWS/CMS',
      district_office: 'NO. CAL SC/RES',
      fac_capacity: 7,
      email_address: 'nesh_example@gmail.com',
      fac_last_visit_date: '1991-12-10',
      fac_lic_eff_date: '1992-02-22',
      fac_licensee_name: 'TERRIER PROGRAMS, INC.',
      fac_licensee_type: 'C',
      fac_mail_city: 'MODESTO',
      fac_mail_state: 'CA',
      fac_mail_street_addr: '767 GLEN EAGLES DRIVE',
      fac_mail_zip_code: '95350',
      name: "DEPUTY DOG'S GROUP HOME",
      licensee_name: 'Ananya Nandi',
      license_number: 193600008,
      fac_orig_appl_rec_date: '1983-02-02',
      addresses: [{
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
      phones: [{
        'id': null,
        'relation': 'primary',
        'type': 'Cell',
        'number': '8317632735'
      }],
      last_visit_reason: "Renewal (Fac.'s w/Expir.)",
      status: {
        id: '132',
        value: 'Licensed'
      },
      type: {
        id: '432',
        value: 'Foster Family Agency Certified Home'
      }
    },
    {
      county: null,
      phones: null,
      addresses: null,
      type: '',
      facility_source: null
    }]
  }
  let searchListComp = shallow(< SearchList { ...props} />)

  it('Verify Search component render', () => {
    expect(searchListComp.length).toBe(1)
  })

  it('Verify facility county renderd', () => {
    expect(searchListComp.findWhere(n => n.props().id === 'facilities[0].county').props().children).toBe('Los Angeles')
  })

  it('Verify facility county is N/A', () => {
    expect(searchListComp.findWhere(n => n.props().id === 'facilities[1].county').props().children).toBe('N/A')
  })

  it('Verify facility type / source rendered', () => {
    expect(searchListComp.findWhere(n => n.props().id === 'facilities[0].type').props().children).toBe('Foster Family Agency Certified Home / CWS/CMS')
  })

  it('Verify facility type / source is N/A', () => {
    expect(searchListComp.findWhere(n => n.props().id === 'facilities[1].type').props().children).toBe('N/A / N/A')
  })

  it('Verify facility address rendered', () => {
    expect(searchListComp.findWhere(n => n.props().id === 'facilities[0].physical_address').props().children).toBe('7 GREENROSE DRIVE, NAPA, CA 94558')
  })

  it('Verify facility address is N/A', () => {
    expect(searchListComp.findWhere(n => n.props().id === 'facilities[1].physical_address').props().children).toBe('N/A')
  })

  it('Verify facility phone number rendered', () => {
    expect(searchListComp.findWhere(n => n.props().id === 'facilities[0].primary_phone').props().children).toBe('(831) 763-2735')
  })

  it('Verify facility phone number is  N/A', () => {
    expect(searchListComp.findWhere(n => n.props().id === 'facilities[1].primary_phone').props().children).toBe('N/A')
  })

  it('Verify facility licensee name is rendered', () => {
    expect(searchListComp.findWhere(n => n.props().id === 'facilities[0].licensee_name').props().children).toBe('Ananya Nandi')
  })
})
