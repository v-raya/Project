import React from 'react'
import FacilityAddress from 'facility/facilityAddress.jsx'
import {shallow, mount} from 'enzyme'

describe('Verify Facility Address', function () {
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
  let AddressCompShallow = shallow(<FacilityAddress {...props} />)
  it('verify Facility Address fields', function () {
    expect(AddressCompShallow.find('.facility-address').length).toEqual(1)
  })
  it('verify Facility Address street and apartment', function () {
    let physicalAddressStreetApt = AddressCompShallow.props().children.props.children[0].props.children.props.children[0].props.streetApt
    expect(physicalAddressStreetApt).toBe('36 Sequoia Dr,')
  })
  it('verify Facility Address city and country', function () {
    let physicalAddressCityCounty = AddressCompShallow.props().children.props.children[0].props.children.props.children[0].props.cityCountry
    expect(physicalAddressCityCounty).toBe('Aliso Viejo, CA 92656')
  })
  it('verify Facility Address county name', function () {
    let countyNameValue = AddressCompShallow.props().children.props.children[0].props.children.props.children[1].props.value
    expect(countyNameValue).toBe('ORANGE')
  })
  it('verify Facility Address primary phone number', function () {
    let primaryPhoneValue = AddressCompShallow.props().children.props.children[0].props.children.props.children[2].props.value
    expect(primaryPhoneValue).toBe('(949) 448-0118')
  })
  it('verify Postal Address street and apartment', function () {
    let postalAddressStreetApt = AddressCompShallow.props().children.props.children[1].props.children.props.children[0].props.streetApt
    expect(postalAddressStreetApt).toBe('36 Sequoia Dr,')
  })
  it('verify Postal Address city and country', function () {
    let postalAddressCityCounty = AddressCompShallow.props().children.props.children[1].props.children.props.children[0].props.cityCountry
    expect(postalAddressCityCounty).toBe('Aliso Viejo, CA 92656')
  })
  it('verify alternative phone number value', function () {
    let alternativeNumberValue = AddressCompShallow.props().children.props.children[1].props.children.props.children[1].props.value
    expect(alternativeNumberValue).toBe('(945) 432-1234')
  })
  it('verify Facility Last Visit Date Value', function () {
    let lastVisitDateValue = AddressCompShallow.props().children.props.children[2].props.children.props.children[0].props.value
    expect(lastVisitDateValue).toBe('04/14/2017')
  })
  it('verify Facility Last Visit Reason', function () {
    let lastVisitReasonValue = AddressCompShallow.props().children.props.children[2].props.children.props.children[1].props.value
    expect(lastVisitReasonValue).toBe('CASELOAD MANAGEMENT')
  })
})

describe('Verify Facility Address with null object returned', function () {
  const props = {
    facilityAddress: {
      'physicalStreetAddress': 'N/A',
      'physicalAddressCityZipState': 'N/A',
      'mailingStreetAddress': 'N/A',
      'mailingAddressCityZipState': 'N/A'
    },
    facilityPhones: {
      primaryPhoneNumber: 'N/A',
      alternativePhoneNumber: 'N/A'
    },
    otherFacilityData: {
      'lastVisitDate': 'N/A',
      'lastVisitReason': 'N/A',
      'county': 'N/A'
    }
  }
  let AddressCompShallow = shallow(<FacilityAddress {...props} />)
  it('verify Facility Address fields', function () {
    expect(AddressCompShallow.find('.facility-address').length).toEqual(1)
  })
  it('verify Facility Address street and apartment to be N/A', function () {
    let physicalAddressStreetApt = AddressCompShallow.props().children.props.children[0].props.children.props.children[0].props.streetApt
    expect(physicalAddressStreetApt).toBe('N/A')
  })
  it('verify Facility Address city and country to be N/A', function () {
    let physicalAddressCityCounty = AddressCompShallow.props().children.props.children[0].props.children.props.children[0].props.cityCountry
    expect(physicalAddressCityCounty).toBe('N/A')
  })
  it('verify Facility Address county name to be N/A', function () {
    let countyNameValue = AddressCompShallow.props().children.props.children[0].props.children.props.children[1].props.value
    expect(countyNameValue).toBe('N/A')
  })
  it('verify Facility Address primary phone number to be N/A', function () {
    let primaryPhoneValue = AddressCompShallow.props().children.props.children[0].props.children.props.children[2].props.value
    expect(primaryPhoneValue).toBe('N/A')
  })
  it('verify Postal Address street and apartment to be N/A', function () {
    let postalAddressStreetApt = AddressCompShallow.props().children.props.children[1].props.children.props.children[0].props.streetApt
    expect(postalAddressStreetApt).toBe('N/A')
  })
  it('verify Postal Address city and country to be N/A', function () {
    let postalAddressCityCounty = AddressCompShallow.props().children.props.children[1].props.children.props.children[0].props.cityCountry
    expect(postalAddressCityCounty).toBe('N/A')
  })
  it('verify alternative phone number value to be N/A', function () {
    let alternativeNumberValue = AddressCompShallow.props().children.props.children[1].props.children.props.children[1].props.value
    expect(alternativeNumberValue).toBe('N/A')
  })
  it('verify Facility Last Visit Date Value to be N/A', function () {
    let lastVisitDateValue = AddressCompShallow.props().children.props.children[2].props.children.props.children[0].props.value
    expect(lastVisitDateValue).toBe('N/A')
  })
  it('verify Facility Last Visit Reason to be N/A', function () {
    let lastVisitReasonValue = AddressCompShallow.props().children.props.children[2].props.children.props.children[1].props.value
    expect(lastVisitReasonValue).toBe('N/A')
  })
})
