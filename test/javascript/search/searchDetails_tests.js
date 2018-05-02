import React from 'react'
import SearchData from 'search/searchDetails'
import {shallow, mount} from 'enzyme'

describe('Render Search Data with toggeled result set as true', function () {
  const props = {
    inputData: '02,738,193600008,home,2024 W el camino,Sacramento,Ca,95833',
    toggeledResult: true,
    totalNoOfFacilities: 64,
    fromValue: 0,
    sizeValue: 5,
    pageNumber: 4,
    searchData: [
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
    ]
  }
  const spyMethod = jasmine.createSpy()
  const dataCompRendered = mount(<SearchData {...props}
    handleToggle={spyMethod}
    changePage={spyMethod}
    totalNoOfFacilities={64}
    toggeledResult={true}
    searchApiCall={spyMethod}
    handlePageNumberChange={spyMethod}
    handleDropDownAndPageNumberChange={spyMethod} />)
  it('verify component load', () => {
    expect(dataCompRendered.length).toBe(1)
  })

  it('verify number of facilities dropdown after component render', () => {
    let dropDownFacilities = dataCompRendered.find('.search_dropdown')
    dropDownFacilities.simulate('change', {target: {options: {'5': {id: '5', value: '5'}, selectedIndex: 5}}})
    expect(spyMethod).toHaveBeenCalledWith(0, 5)
  })

  it('Verify number of pages', () => {
    expect(dataCompRendered.find('.noOfPages').props().children).toBe(13)
  })

  it('Verify page number', () => {
    expect(dataCompRendered.find('.page_number').props().children).toBe(4)
  })

  it('clicks previous on pagination', () => {
    let previousButton = dataCompRendered.find('.previous')
    previousButton.simulate('click')
    expect(spyMethod).toHaveBeenCalledWith(3)
    expect(spyMethod).toHaveBeenCalledWith(0, 5)
  })

  it('clicks next on pagination', () => {
    let nextButton = dataCompRendered.find('.next')
    nextButton.simulate('click')
    expect(spyMethod).toHaveBeenCalledWith(5)
    expect(spyMethod).toHaveBeenCalledWith(0, 5)
  })
})

describe('Render Search Data with Toggled Result set as false and', function () {
  const props = {
    inputData: '02,738,193600008,home,2024 W el camino,Sacramento,Ca,95833',
    toggeledResult: true,
    totalNoOfFacilities: 64,
    fromValue: 0,
    sizeValue: 5,
    pageNumber: 4,
    searchData: [
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
    ]
  }
  const spyMethod = jasmine.createSpy()
  const dataCompRendered = mount(<SearchData {...props}
    handleToggle={spyMethod}
    changePage={spyMethod}
    totalNoOfFacilities={64}
    toggeledResult={false}
    searchApiCall={spyMethod}
    handlePageNumberChange={spyMethod}
    handleDropDownAndPageNumberChange={spyMethod} />)
  it('verify component load', () => {
    expect(dataCompRendered.length).toBe(1)
  })
})
