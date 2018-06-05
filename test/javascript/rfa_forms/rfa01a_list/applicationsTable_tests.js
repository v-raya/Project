import React from 'react'
import ApplicationTable from 'rfa_forms/rfa01a_list/applicationsTable.jsx'
import {shallow, mount} from 'enzyme'

describe('Verify Application List View', () => {
  const applicants = [{
    to_delete: true,
    first_name: 'test',
    middle_name: '',
    last_name: 'ing',
    other_names: [],
    date_of_birth: '',
    driver_license_number: '',
    email: '',
    phones: null
  }]

  let applications = [
    {
      applicants: undefined,
      id: 43,
      is_initial_application: false,
      is_other_type: false,
      minor_children: [],
      other_adults: [],
      rfa1b_forms: [],
      rfa1c_forms: [],
      'residence': {
        addresses: [
          {
            'street_address': '607 Third st',
            'zip': '95442',
            'city': 'Lower Lake',
            'state': {
              'value': 'California',
              'id': 'CA'
            },
            'type': {
              'value': 'Residential',
              'id': 1
            }
          },
          {
            'street_address': '',
            'zip': '',
            'city': '',
            'type': {
              'value': 'Mailing',
              'id': 3
            }
          }
        ]
      }
    },
    {

      applicants: applicants,
      id: 44,
      is_initial_application: false,
      is_other_type: false,
      minor_children: [],
      other_adults: [],
      rfa1b_forms: [],
      rfa1c_forms: []
    }
  ]
  const AppListViewCard = mount(<ApplicationTable applications={applications} />)
  it('To Load table', () => {
    expect(AppListViewCard.find('.rfa01a-list').length).toEqual(1)
    expect(AppListViewCard.find('h3').props().children).toBe('Existing RFA Application')
  })
  it('To have table header\'s', () => {
    expect(AppListViewCard.find('th').length).toEqual(8)
    expect(AppListViewCard.find('th').first().props().children).toBe('Facility ID')
  })
  it('To have array of Items', () => {
    let applicationTable = AppListViewCard
    expect(applicationTable.props().applications.length).toEqual(2)
  })
})

describe('Verify Application List View with Empty address', () => {
  const applicants = [{
    to_delete: true,
    first_name: 'test',
    middle_name: '',
    last_name: 'ing',
    other_names: [],
    date_of_birth: '',
    driver_license_number: '',
    email: '',
    phones: null
  }]

  let applications = [
    {
      applicants: undefined,
      id: 43,
      is_initial_application: false,
      is_other_type: false,
      minor_children: [],
      other_adults: [],
      rfa1b_forms: [],
      rfa1c_forms: [],
      'residence': {
        addresses: []
      }
    },
    {

      applicants: applicants,
      id: 44,
      is_initial_application: false,
      is_other_type: false,
      minor_children: [],
      other_adults: [],
      rfa1b_forms: [],
      rfa1c_forms: []
    }
  ]
  const AppListViewCard = mount(<ApplicationTable applications={applications} />)
  it('To Load table', () => {
    expect(AppListViewCard.find('.rfa01a-list').length).toEqual(1)
    expect(AppListViewCard.find('h3').props().children).toBe('Existing RFA Application')
  })
  it('To have table header\'s', () => {
    expect(AppListViewCard.find('th').length).toEqual(8)
    expect(AppListViewCard.find('th').first().props().children).toBe('Facility ID')
  })
  it('To have array of Items', () => {
    let applicationTable = AppListViewCard
    expect(applicationTable.props().applications.length).toEqual(2)
  })
})
