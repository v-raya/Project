import React from 'react'
import Pagination from 'search/pagination'
import {shallow, mount} from 'enzyme'

describe('Facility Search pagination', function () {
  let paginationCompRendered,
    searchApiCallSpy,
    handlePageNumberChangeSpy,
    onPageNumberInputChangeSpy,
    handleDropDownAndPageNumberChangeSpy

  beforeEach(() => {
    const props = {
      paginationClassName: 'top_pagination',
      totalNoOfFacilities: 64,
      sizeValue: 5,
      pageNumber: 2
    }
    searchApiCallSpy = jasmine.createSpy('searchApiCall')
    handleDropDownAndPageNumberChangeSpy = jasmine.createSpy('handleDropDownAndPageNumberChange')
    handlePageNumberChangeSpy = jasmine.createSpy('handlePageNumberChange')
    onPageNumberInputChangeSpy = jasmine.createSpy('onPageNumberInputChange')
    paginationCompRendered = shallow(<Pagination {...props}
      searchApiCall={searchApiCallSpy}
      handlePageNumberChange={handlePageNumberChangeSpy}
      handleDropDownAndPageNumberChange={handleDropDownAndPageNumberChangeSpy}
      onPageNumberInputChange={onPageNumberInputChangeSpy} />)
  })

  it('verify pagination component render', () => {
    const paginationClassName = paginationCompRendered.find('.top_pagination')
    expect(paginationClassName.length).toBe(1)
    expect(paginationCompRendered.length).toBe(1)
  })

  it('verify number of facilities dropdown after component render', () => {
    let dropDownFacilities = paginationCompRendered.find('.search_dropdown')
    dropDownFacilities.simulate('change', {target: {options: {'5': {id: '5', value: '5'}, selectedIndex: 5}}})
    expect(handleDropDownAndPageNumberChangeSpy).toHaveBeenCalledWith(1, 5)
  })

  it('verify handlePageNumberChange on page number change ', () => {
    let pageNumberInput = paginationCompRendered.find('.page_number').at(0)
    pageNumberInput.simulate('change', {target: {value: '2'}})
    expect(handlePageNumberChangeSpy).toHaveBeenCalledWith('2')
  })

  it('verify onPageNumberInputChange on tab key down ', () => {
    let pageNumber = paginationCompRendered.find('.page_number').at(0)
    pageNumber.simulate('keydown', {which: 9, target: {value: '2'}})
    expect(onPageNumberInputChangeSpy).toHaveBeenCalledWith('2')
  })

  it('verify onPageNumberInputChange on enter key down ', () => {
    let pageNumber = paginationCompRendered.find('.page_number').at(0)
    pageNumber.simulate('keydown', {which: 13, target: {value: '2'}})
    expect(onPageNumberInputChangeSpy).toHaveBeenCalledWith('2')
  })

  it('Verify number of pages', () => {
    expect(paginationCompRendered.find('.noOfPages').props().children).toBe(13)
  })

  it('verify dropDown value change number of facilities', () => {
    let dropdownForfacilitiesCount = paginationCompRendered.find('#dropdownFacilities_top_pagination')
    dropdownForfacilitiesCount.simulate('change', {target: {options: {'5': {id: '5', value: '5'}, selectedIndex: 5}}})
    expect(handleDropDownAndPageNumberChangeSpy).toHaveBeenCalledWith(1, 5)
    expect(searchApiCallSpy).toHaveBeenCalledWith(0, 5)
  })

  it('verify clicking next button ', () => {
    let searchFacility = paginationCompRendered.find('#next_button_top_pagination')
    searchFacility.simulate('click')
    expect(handlePageNumberChangeSpy).toHaveBeenCalledWith(3)
    expect(searchApiCallSpy).toHaveBeenCalledWith(10, 5)
  })

  it('verify clicking previous button ', () => {
    let searchFacility = paginationCompRendered.find('#previous_button_top_pagination')
    searchFacility.simulate('click')
    expect(handlePageNumberChangeSpy).toHaveBeenCalledWith(1)
    expect(searchApiCallSpy).toHaveBeenCalledWith(0, 5)
  })
})
