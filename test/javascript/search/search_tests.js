import React from 'react'
import {Search} from 'search/search'
import {shallow, mount} from 'enzyme'
import { BrowserRouter } from 'react-router-dom'

describe('Verify Search component', function () {
  let handleToggleSpy, searchComp, handleChangeSpy, handleInputChangeSpy, searchApiCallSpy,
    handleResetFormSpy, handlePageNumberChangeSpy, handleDropDownAndPageNumberChangeSpy, searchDictionariesCallSpy

  beforeEach(() => {
    handleToggleSpy = jasmine.createSpy('handleToggle')
    handleResetFormSpy = jasmine.createSpy('handleResetForm')
    searchApiCallSpy = jasmine.createSpy('searchApiCall')
    handleInputChangeSpy = jasmine.createSpy('handleInputChange')
    handlePageNumberChangeSpy = jasmine.createSpy('handlePageNumberChange')
    handleDropDownAndPageNumberChangeSpy = jasmine.createSpy('handleDropDownAndPageNumberChange')
    searchDictionariesCallSpy = jasmine.createSpy()

    const props = {
      totalNoOfResults: 0,
      pageNumber: 2,
      sizeValue: 20,
      isToggled: true,
      inputData: {},
      facilityTypes: [
        {
          id: '',
          value: ''
        }
      ],
      user: {
        county_code: '19'
      },
      countyTypes: [
        {
          id: '',
          value: ''
        }
      ],
      searchResults: [
        {
          assigned_worker: 'Kari Gutierrez',
          county: 'Marin',
          district_office: 'NO. CAL SC/RES',
          fac_capacity: 7,
          fac_email_address: null,
          fac_last_visit_date: '1991-12-10',
          fac_lic_eff_date: '1992-02-22',
          fac_licensee_name: 'TERRIER PROGRAMS, INC.',
          fac_licensee_type: 'C',
          fac_mail_city: 'MODESTO',
          fac_mail_state: 'CA',
          fac_mail_street_addr: '767 GLEN EAGLES DRIVE',
          fac_mail_zip_code: '95350',
          fac_name: "DEPUTY DOG'S GROUP HOME",
          fac_nbr: 193600008,
          fac_orig_appl_rec_date: '1983-02-02',
          fac_res_city: 'MODESTO',
          fac_res_state: 'CA',
          fac_res_street_addr: '767 GLEN EAGLES DRIVE',
          fac_res_zip_code: '95350',
          facility_telephone: '8183366556',
          last_visit_reason: "Renewal (Fac.'s w/Expir.)",
          status: 'Licensed',
          type: 'Foster Family Home (Confidential - Do not release)'
        }
      ],
      handleToggle: handleToggleSpy,
      handleResetForm: handleResetFormSpy,
      searchApiCall: searchApiCallSpy,
      handleInputChange: handleInputChangeSpy,
      handlePageNumberChange: handlePageNumberChangeSpy,
      handleDropDownAndPageNumberChange: handleDropDownAndPageNumberChangeSpy,
      searchDictionariesCall: searchDictionariesCallSpy
    }

    searchComp = mount(<BrowserRouter><Search {...props} /></BrowserRouter>)
  })

  it('Verify Search component render', () => {
    expect(searchComp.length).toBe(1)
  })

  it('verify onclick for toggle button', () => {
    let searchFacility = searchComp.find('#search')
    searchFacility.simulate('submit')
    let handleToggleButton = searchComp.find('#toggle_button')
    handleToggleButton.simulate('click')
    expect(handleToggleSpy).toHaveBeenCalled()
  })

  it('verify dropDown value change number of facilities', () => {
    let dropdownForfacilitiesCount = searchComp.find('#dropdownFacilities')
    dropdownForfacilitiesCount.simulate('change', {target: {options: {'5': {id: '5', value: '5'}, selectedIndex: 5}}})
    expect(searchApiCallSpy).toHaveBeenCalledWith({'county.id': '19', 'type.id': undefined, 'id': undefined, 'name': undefined, 'addresses.address.street_address': undefined}, {fromValue: 0, sizeValue: 5})
  })

  it('verify county dropdown value change ', () => {
    let countyDropDownChange = searchComp.find('#county_select').hostNodes()
    countyDropDownChange.simulate('change', {target: {options: {'19': {id: '19', value: 'Los Angeles'}, selectedIndex: 19}}})
    expect(handleInputChangeSpy).toHaveBeenCalledWith('countyValue', 'Los Angeles')
  })
  it('verify clicking reset button calls resetForm method', () => {
    let resetForm = searchComp.find('#reset')
    resetForm.simulate('click')
    expect(handleResetFormSpy).toHaveBeenCalled()
  })

  it('verify clicking search button calls handleOnSubmit method', () => {
    let searchFacility = searchComp.find('#search')
    searchFacility.simulate('submit')
    expect(searchApiCallSpy).toHaveBeenCalledWith({'county.id': '19', 'type.id': undefined, 'id': undefined, 'name': undefined, 'addresses.address.street_address': undefined}, {fromValue: 0, sizeValue: 20})
  })

  it('verify error messages', () => {
    const props = {
      errors: {
        'issue_details': [ {
          'incident_id': '95100850-f514-4365-9b93-6cbd28adcf27',
          'type': 'unexpected_exception',
          'user_message': 'There was an error processing your request. It has been logged with unique incident id',
          'technical_message': 'Bad Request',
          'stack_trace': 'gov.ca.cwds.rest.api.DoraException: Forbidden\\n\\'
        } ]
      },
      inputData: {
        'countyValue': '10'
      },
      facilityTypes: [
        {
          id: '',
          value: ''
        }
      ],
      countyTypes: [
        {
          id: '',
          value: ''
        }
      ],
      searchResults: [],
      handlePageNumberChange: handlePageNumberChangeSpy,
      searchApiCall: searchApiCallSpy,
      searchDictionariesCall: searchDictionariesCallSpy

    }
    searchComp = mount(<BrowserRouter><Search {...props} /></BrowserRouter>)
    let searchFacility = searchComp.find('#search')
    searchFacility.simulate('submit')
    expect(searchComp.text()).toContain('Message: There was an error processing your request')
  })
})
