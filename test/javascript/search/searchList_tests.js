import React from 'react'
import SearchList from 'search/searchList'
import { BrowserRouter } from 'react-router-dom'
import { mount } from 'enzyme'

describe('Render search list and each method', () => {
  const indexValue = '0'
  const props = {
    searchResults: [{
      assigned_worker: {
        'phones': [
          {
            'relation': 'primary',
            'number': '9165672124'
          }
        ],
        'email': null,
        'full_name': 'Kari Gutierrez',
        'id': null
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
      name: 'DEPUTY DOG GROUP HOME',
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
      },
      {
        'id': null,
        'relation': 'alternate',
        'type': 'Cell',
        'number': '1234567891'
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
  let searchListComp = mount(<BrowserRouter><SearchList searchResults={props.searchResults} /></BrowserRouter>)

  it('Verify Search component render', () => {
    expect(searchListComp.length).toBe(1)
  })

  it('Verify facility name is rendered', () => {
    expect(searchListComp.find('.-odd .facility_name').hostNodes().props().children.props.children).toBe('DEPUTY DOG GROUP HOME')
  })

  it('Verify facility email is rendered', () => {
    expect(searchListComp.find('.-odd .facility_email').hostNodes().props().children).toBe('nesh_example@gmail.com')
  })

  it('Verify facility ID rendered', () => {
    expect(searchListComp.find('.-odd .facility_id').hostNodes().props().children).toBe(193600008)
  })

  it('Verify license status rendered', () => {
    expect(searchListComp.find('.-odd .license_status').hostNodes().props().children).toBe('Licensed')
  })

  it('Verify licensing worker rendered', () => {
    expect(searchListComp.find('.-odd .licensing_worker').hostNodes().props().children).toBe('Kari Gutierrez')
  })

  it('Verify facility county is rendered', () => {
    expect(searchListComp.find('.-odd .county_name').hostNodes().props().children).toBe('Los Angeles')
  })

  it('Verify facility type / source rendered', () => {
    expect(searchListComp.find('.-odd .facility_type_source').hostNodes().props().children).toBe('Foster Family Agency Certified Home / CWS/CMS')
  })

  it('Verify facility address rendered', () => {
    expect(searchListComp.find('.-odd .facility_address').hostNodes().props().children).toBe('7 GREENROSE DRIVE, NAPA, CA 94558')
  })

  it('Verify facility phone number rendered', () => {
    expect(searchListComp.find('.-odd .phone_number').hostNodes().props().children).toBe('(831) 763-2735')
  })

  it('Verify facility licensee name is rendered', () => {
    expect(searchListComp.find('.-odd .licensee_name').hostNodes().props().children).toBe('Ananya Nandi')
  })

  it('Verify facility alternative number is rendered', () => {
    expect(searchListComp.find('.-odd .alternative_number').hostNodes().props().children).toBe('(123) 456-7891')
  })

  it('Verify facility county is N/A', () => {
    expect(searchListComp.find('.-even .county_name').hostNodes().props().children).toBe('N/A')
  })

  it('Verify facility phone number is  N/A', () => {
    expect(searchListComp.find('.-even .phone_number').hostNodes().props().children).toBe('N/A')
  })

  it('Verify facility type / source is N/A', () => {
    expect(searchListComp.find('.-even .facility_type_source').hostNodes().props().children).toBe('N/A / N/A')
  })
})
