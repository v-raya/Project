import React from 'react'
import FacilityAddress from 'facility/facilityAddress.jsx'
import {shallow, mount} from 'enzyme'

describe('Verify Facility Address', () => {
  const props = {
    facilityAddress: {
      'physicalStreetAddress': '36 Sequoia Dr,',
      'physicalAddressCityZipState': 'Aliso Viejo, CA 92656',
      'mailingStreetAddress': '36 Sequoia Dr,',
      'mailingAddressCityZipState': 'Aliso Viejo, CA 92656'
    },
    facilityPhones: {
      primaryPhoneNumber: '(949) 448-0118',
      alternativePhoneNumber: '(945) 432-1234'
    },
    otherFacilityData: {
      'lastVisitDate': '04/14/2017',
      'lastVisitReason': 'CASELOAD MANAGEMENT',
      'county': 'ORANGE'
    }
  }
  const AddressCompShallow = shallow(<FacilityAddress {...props} />)
  it('verify Facility Address fields', () => {
    expect(AddressCompShallow.find('.facility-address').length).toEqual(1)
  })
  it('verify Facility Address street and apartment', () => {
    expect(AddressCompShallow.find('InnerBlockAddressTitles[title="PHYSICAL ADDRESS"]').props().streetApt).toBe('36 Sequoia Dr,')
  })
  it('verify Facility Address city and country', () => {
    expect(AddressCompShallow.find('InnerBlockAddressTitles[title="PHYSICAL ADDRESS"]').props().cityCountry).toBe('Aliso Viejo, CA 92656')
  })
  it('verify Facility Address county name', () => {
    expect(AddressCompShallow.find('SmallInnerBlockDetails[title="COUNTY NAME"]').props().value).toBe('ORANGE')
  })
  it('verify Facility Address primary phone number', () => {
    expect(AddressCompShallow.find('SmallInnerBlockDetails[title="PRIMARY PHONE"]').props().value).toBe('(949) 448-0118')
  })
  it('verify Postal Address street and apartment', () => {
    expect(AddressCompShallow.find('InnerBlockAddressTitles[title="POSTAL ADDRESS"]').props().streetApt).toBe('36 Sequoia Dr,')
  })
  it('verify Postal Address city and country', () => {
    expect(AddressCompShallow.find('InnerBlockAddressTitles[title="POSTAL ADDRESS"]').props().cityCountry).toBe('Aliso Viejo, CA 92656')
  })
  it('verify alternative phone number value', () => {
    expect(AddressCompShallow.find('SmallInnerBlockDetails[title="ALTERNATIVE PHONE"]').props().value).toBe('(945) 432-1234')
  })
  it('verify Facility Last Visit Date Value', () => {
    expect(AddressCompShallow.find('SmallInnerBlockDetails[title="LAST VISIT DATE"]').props().value).toBe('04/14/2017')
  })
  it('verify Facility Last Visit Reason', () => {
    expect(AddressCompShallow.find('SmallInnerBlockDetails[title="LAST VISIT REASON"]').props().value).toBe('CASELOAD MANAGEMENT')
  })
})
