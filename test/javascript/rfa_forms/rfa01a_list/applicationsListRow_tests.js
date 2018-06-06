import React from 'react'
import ApplicationsListRow from 'rfa_forms/rfa01a_list/applicationsListRow'
import {shallow, mount} from 'enzyme'
import Immutable from 'immutable'

describe('Verify Application List Rows', () => {
  const application = Immutable.fromJS([{
    'phones': [{
      'phone_type': {
        'value': 'Cell',
        'id': 1
      },
      'number': '5305555555',
      'preferred': true
    },
    {
      'phone_type': {
        'value': 'Cell',
        'id': 1
      },
      'number': '6305555555',
      'preferred': false
    }]
  }])
  const address = Immutable.fromJS([
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
  ])
  const props = {
    key: 0,
    facilityId: '380037218',
    familyName: 'Simmon, Smith & Jack',
    applicationStatus: '',
    applicationReceivedDate: '',
    applicantsInfo: application,
    applicationAddress: address
  }
  const AppListViewCard = shallow(<ApplicationsListRow {...props} />)
  it('To Return table Row', () => {
    expect(AppListViewCard.find('tr').length).toEqual(1)
  })
  it('To have array of table data', () => {
    expect(AppListViewCard.find('td').length).toEqual(9)
    expect(AppListViewCard.find('td').first().props().children).toBe('380037218')
    expect(AppListViewCard.find('td').at(3).props().children).toBe('(530) 555-5555')
  })
})

describe('Verify Application List Corner Cases', () => {
  const application = Immutable.fromJS([{
    'phones': []
  }])
  const address = Immutable.fromJS([
  ])
  const props = {
    key: 0,
    facilityId: undefined,
    familyName: undefined,
    applicationStatus: undefined,
    applicationReceivedDate: undefined,
    applicantsInfo: application,
    applicationAddress: address
  }
  const AppListViewCard = shallow(<ApplicationsListRow {...props} />)
  it('To Return table Row', () => {
    expect(AppListViewCard.find('tr').length).toEqual(1)
  })
  it('To have default address when address array is empty', () => {
    expect(AppListViewCard.find('td').length).toEqual(9)
    expect(AppListViewCard.find('td').at(3).props().children).toBe('')
    expect(AppListViewCard.find('td').at(4).props().children).toBe('')
    expect(AppListViewCard.find('td').at(5).props().children).toBe('')
  })
})
