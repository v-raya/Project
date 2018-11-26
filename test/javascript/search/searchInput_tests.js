import React from 'react'
import SearchInput from 'search/searchInput'
import {shallow, mount} from 'enzyme'

describe('Verify search input component', () => {
  const props = {
    facilityTypes: [
      {
        id: '',
        value: ''
      }
    ],
    countyList: [
      {
        id: '',
        value: ''
      }
    ],
    licenseStatuses: [
      {
        id: '',
        value: ''
      }
    ],
    countyValue: 'Los Angeles',
    facilityTypeValue: 'Adoption Agency',
    licenseStatusValue: [
      {
        'value': '',
        'id': ''
      }],
    isAllActive: false,
    facilityIdValue: '300665437',
    facilityNameValue: 'Lederhouse Transitions',
    facilityAddressValue: '36 Sequoia Dr, Aliso Viejo, CA 92656',
    fromValue: 0,
    sizeValue: 10
  }

  const spyHandleOnSubmit = jasmine.createSpy('handleOnSubmit')
  const spyHandleInputChange = jasmine.createSpy('handleInputChange')
  const spyHandlePageNumberChange = jasmine.createSpy('handlePageNumberChange')
  const spySearchApiCall = jasmine.createSpy('searchApiCall')

  const searchInputComp = shallow(<SearchInput {...props}
    handleOnSubmit={spyHandleOnSubmit}
    handleInputChange={spyHandleInputChange}
    handlePageNumberChange={spyHandlePageNumberChange}
    searchApiCall={spySearchApiCall}
  />)

  it('verify component load', () => {
    expect(searchInputComp.length).toBe(1)
  })

  it('verify county select after component render', () => {
    const countyField = searchInputComp.find('#county_select')
    countyField.simulate('change', {target: {options: {'19': {id: '19', value: 'Los Angeles'}, selectedIndex: 19}}})
    expect(spyHandleInputChange).toHaveBeenCalledWith('countyValue', 'Los Angeles')
  })

  it('verify facilityTypes select after component render', () => {
    const facilityType = searchInputComp.find('#facility_select')
    facilityType.simulate('change', {target: {options: {'2': {id: '400', value: 'Adoption Agency'}, selectedIndex: 2}}})
    expect(spyHandleInputChange).toHaveBeenCalledWith('facilityTypeValue', 'Adoption Agency')
  })

  it('verify licenseStatus multi-select after component render', () => {
    const licenseStatus = searchInputComp.find('.my-react-select')
    licenseStatus.simulate('change', [{id: 8, value: 'Application Denied'}, {id: 2, value: 'Pending'}])
    expect(spyHandleInputChange).toHaveBeenCalledWith('licenseStatusValue', [{id: 8, value: 'Application Denied'}, {id: 2, value: 'Pending'}])
  })

  it('Verify all active checkbox', () => {
    const allActiveCheckbox = searchInputComp.find('#all_active')
    allActiveCheckbox.simulate('change', {target: {checked: true}})
    expect(spyHandleInputChange).toHaveBeenCalledWith('isAllActive', true)
    expect(searchInputComp.find('.my-react-select').props().disabled).toBe(false)
  })

  it('verify all active checkbox change', () => {
    const searchInputComp = shallow(<SearchInput
      isAllActive= {true}
      handleInputChange={spyHandleInputChange}
    />)
    const allActiveCheckbox = searchInputComp.find('#all_active')
    allActiveCheckbox.simulate('change', {target: {checked: false}})
    expect(spyHandleInputChange).toHaveBeenCalledWith('isAllActive', false)
  })

  it('verify facility Id value after component render', () => {
    const facilityId = searchInputComp.find('#facilityIdValue')
    facilityId.simulate('change', {target: {value: '300665437'}})
    expect(spyHandleInputChange).toHaveBeenCalledWith('facilityIdValue', '300665437')
  })

  it('verify facility name value after component render', () => {
    const facilityName = searchInputComp.find('#facilityNameValue')
    facilityName.simulate('change', {target: {value: 'Lederhouse Transitions'}})
    expect(spyHandleInputChange).toHaveBeenCalledWith('facilityNameValue', 'Lederhouse Transitions')
  })

  it('verify facility address value after component render', () => {
    const facilityAddressValue = searchInputComp.find('#facilityAddressValue')
    facilityAddressValue.simulate('change', {target: {value: '36 Sequoia Dr, Aliso Viejo, CA 92656'}})
    expect(spyHandleInputChange).toHaveBeenCalledWith('facilityAddressValue', '36 Sequoia Dr, Aliso Viejo, CA 92656')
  })

  it('verify clicking search button calls handleOnSubmit method', () => {
    const searchInputComp = mount(<SearchInput {...props}
      searchApiCall={spySearchApiCall}
      handlePageNumberChange={spyHandlePageNumberChange}
    />)
    const searchFacility = searchInputComp.find('#search')
    searchFacility.simulate('submit')
    expect(spySearchApiCall).toHaveBeenCalledWith(0, props.sizeValue)
  })
})
