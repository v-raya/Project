import React from 'react'
import {Facility} from 'facility/index'
import {shallow, mount} from 'enzyme'
import rootReducer from 'reducers'
import {createStore} from 'redux'
import { BrowserRouter } from 'react-router-dom'

describe('Verify Facility component', function () {
  const facilityProp = {
    'href': 'facilities/SouUlov56F',
    'id': 'SouUlov56F',
    'type': 'Foster Family Agency Certified Home',
    'name': 'Adriana Marin',
    'licensee_name': '',
    'capacity': 2,
    'county': 'Ventura',
    'phones': {
      primaryPhoneNumber: '(949) 448-0118',
      alternativePhoneNumber: '(945) 432-1234'
    },
    'addresses': {
      'physicalStreetAddress': '36 Sequoia Dr,',
      'physicalAddressCityZipState': 'Aliso Viejo, CA 92656',
      'mailingStreetAddress': '36 Sequoia Dr,',
      'mailingAddressCityZipState': 'Aliso Viejo, CA 92656'
    },
    'facility_source': 'CWS/CMS'
  }
  const childrenProp = {
    children: [{
      'id': 4,
      'person': {'first_name': 'john'}
    }]
  }
  const complaintsProp = {
    complaints: [{
      id: 5,
      complaint_date: '2016-02-02',
      assigned_worker: 'James'
    }]
  }
  const match = {
    params: {
      'id': 'SouUlov56F'
    }
  }
  let store = createStore(rootReducer)

  let facilityApiCallSpy = jasmine.createSpy('facilityApiCall')

  it('renders Address fields', function () {
    const FacilityCompMount = mount(
      <BrowserRouter>
        <Facility
          facility={facilityProp}
          match={match}
          facilityApiCall={facilityApiCallSpy}
          errors={undefined}
        />
      </BrowserRouter>)

    expect(FacilityCompMount.find('.facility-address').length).toEqual(1)
  })

  it('childern and complaints rendering when prop is null', function () {
    const FacilityCompMount = mount(
      <BrowserRouter>
        <Facility
          facility={facilityProp}
          match={match}
          facilityChildren={null}
          facilityComplaints={null}
          errors={undefined}
          facilityApiCall={facilityApiCallSpy}
        />
      </BrowserRouter>)
    expect(FacilityCompMount.find('#facility-children-table').length).toEqual(0)
    expect(FacilityCompMount.find('#facility-complaints-table').length).toEqual(0)
  })

  it('childern rendering', function () {
    const FacilityCompMount = mount(
      <BrowserRouter>
        <Facility
          facility={facilityProp}
          match={match}
          children={childrenProp}
          complaints={null}
          errors={undefined}
          facilityApiCall={facilityApiCallSpy}
        />
      </BrowserRouter>)
    expect(FacilityCompMount.find('#facility-children-table').length).toEqual(1)
  })

  it('complaints rendering', function () {
    const FacilityCompMount = mount(
      <BrowserRouter>
        <Facility
          facility={facilityProp}
          match={match}
          children={null}
          complaints={complaintsProp}
          errors={undefined}
          facilityApiCall={facilityApiCallSpy}
        />
      </BrowserRouter>)
    expect(FacilityCompMount.find('#facility-complaints-table').length).toEqual(1)
  })
})
