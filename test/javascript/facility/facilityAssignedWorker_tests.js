import React from 'react'
import FacilityAssignedWorker from 'facility/facilityAssignedWorker'
import {shallow, mount} from 'enzyme'

describe('Verify Facility Assigned Worker', function () {
  const props = {
    facilityAssignedWorker: {
      'assignedWorkerFullName': 'Ananya Nandi',
      'assignedWorkerPhoneNumber': '(945) 432-1234',
      'assignedWorkerEmail': 'email@gmail.com'
    }
  }
  let AssignedWorkerCompShallow = shallow(<FacilityAssignedWorker {...props} />)
  it('verify Facility Assigned Worker', function () {
    expect(AssignedWorkerCompShallow.find('.facility-address').length).toEqual(1)
  })
  it('verify Facility Assigned Worker Full Name', function () {
    expect(AssignedWorkerCompShallow.find('SmallInnerBlockDetails[title="APPROVAL / LICENSING WORKER"]').props().value).toBe('Ananya Nandi')
  })
  it('verify Facility Assigned Worker Phone Number', function () {
    expect(AssignedWorkerCompShallow.find('SmallInnerBlockDetails[title="APPROVAL / LICENSING WORKER PHONE NUMBER"]').props().value).toBe('(945) 432-1234')
  })
  it('verify Facility Assigned Worker Email', function () {
    expect(AssignedWorkerCompShallow.find('SmallInnerBlockDetails[title="APPROVAL / LICENSING WORKER EMAIL"]').props().value).toBe('email@gmail.com')
  })
})
