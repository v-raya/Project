import React from 'react'
import Children from 'facility/facilityChildren.jsx'
import {mount, shallow} from 'enzyme'

describe('Verify Children Component', function () {
  const props = {
    'children': [{
      'id': 2222,
      'first_name': 'Mei',
      'last_name': 'Takahashi',
      'age': 17,
      'date_of_birth': 'N/A',
      'gender': 'F',
      'date_of_placement': 'N/A',
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
    expect(renderChildComp.find('td[data-label="id"]').props().children[1]).toBe('2222-2222-2222-2222222')
  })
  it('Verify child first name', () => {
    expect(renderChildComp.find('td[data-label="first name"]').props().children[1]).toBe('Mei')
  })
  it('Verify child last name', () => {
    expect(renderChildComp.find('td[data-label="last name"]').props().children[1]).toBe('Takahashi')
  })
  it('Verify child gender', () => {
    expect(renderChildComp.find('td[data-label="sex"]').props().children[1]).toBe('F')
  })
  it('Verify child age', () => {
    expect(renderChildComp.find('td[data-label="age"]').props().children[1]).toBe(17)
  })
  it('Verify assigned worker full name', () => {
    expect(renderChildComp.find('td[data-label="assigned worker"]').props().children[1]).toBe('Peter Parker')
  })
  it('Verify child county of origin', () => {
    expect(renderChildComp.find('td[data-label="county of origin"]').props().children[1]).toBe('sacramento')
  })
  it('Verify date of placement for N/A', () => {
    expect(renderChildComp.find('td[data-label="date of placement"]').props().children[1]).toBe('N/A')
  })
  it('Verify date of birth for N/A', () => {
    expect(renderChildComp.find('td[data-label="date of birth"]').props().children[1]).toBe('N/A')
  })
})
