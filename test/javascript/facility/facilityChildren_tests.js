import React from 'react'
import Children from 'facility/facilityChildren.jsx'
import {mount, shallow} from 'enzyme'

describe('Verify Children Component', () => {
  const props = {
    'children': [{
      'id': 2222,
      'first_name': 'Mei',
      'last_name': 'Takahashi',
      'age': 17,
      'date_of_birth': 'N/A',
      'gender': 'F',
      'date_of_placement': '11/03/2004',
      'assigned_worker': 'Peter Parker',
      'county_of_origin': 'sacramento',
      'display_client_id': '2222-2222-2222-2222222'
    },
    {
      'id': 2222,
      'first_name': 'Mei',
      'last_name': 'Takahashi',
      'age': 17,
      'date_of_birth': 'N/A',
      'gender': 'F',
      'date_of_placement': '04/30/2001',
      'assigned_worker': 'Peter Parker',
      'county_of_origin': 'sacramento',
      'display_client_id': '2222-2222-2222-2222222'
    }],
    'match': {
      'params': {
        'id': 'SouUlov56F'
      }
    }
  }

  let facilityChildrenApiCallSpy = jasmine.createSpy('facilityChildrenApiCall')

  const renderChildComp = shallow(
    <Children
      {...props}
      facilityChildrenApiCall={facilityChildrenApiCallSpy}
    />)
  it('Verify Children table', () => {
    expect(renderChildComp.length).toBe(1)
  })
  it('Verify ID', () => {
    expect(renderChildComp.find('.table').props().data[0].display_client_id).toBe('2222-2222-2222-2222222')
  })
  it('Verify child first name', () => {
    expect(renderChildComp.find('.table').props().data[0].first_name).toBe('Mei')
  })
  it('Verify child last name', () => {
    expect(renderChildComp.find('.table').props().data[0].last_name).toBe('Takahashi')
  })
  it('Verify child gender', () => {
    expect(renderChildComp.find('.table').props().data[0].gender).toBe('F')
  })
  it('Verify child age', () => {
    expect(renderChildComp.find('.table').props().data[0].age).toBe(17)
  })
  it('Verify assigned worker full name', () => {
    expect(renderChildComp.find('.table').props().data[0].assigned_worker).toBe('Peter Parker')
  })
  it('Verify child county of origin', () => {
    expect(renderChildComp.find('.table').props().data[0].county_of_origin).toBe('sacramento')
  })
  it('Verify date of placement for N/A', () => {
    expect(renderChildComp.find('.table').props().data[0].date_of_placement).toBe('11/03/2004')
  })
  it('Verify date of birth for N/A', () => {
    expect(renderChildComp.find('.table').props().data[0].date_of_birth).toBe('N/A')
  })
})
