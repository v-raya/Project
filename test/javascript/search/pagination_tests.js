import React from 'react'
import Pagination from 'search/pagination'
import {shallow, mount} from 'enzyme'

describe('Facility Search pagination', function () {
  const props = {
    paginationClassName: 'top_pagination',
    totalNoOfFacilities: 64,
    sizeValue: 5,
    pageNumber: 1
  }
  const searchApiCallSpy = jasmine.createSpy('searchApiCall')
  const handleDropDownAndPageNumberChangeSpy = jasmine.createSpy('handleDropDownAndPageNumberChange')
  const handlePageNumberChangeSpy = jasmine.createSpy('handlePageNumberChange')
  const paginationCompRendered = mount(<Pagination {...props}
    searchApiCall={searchApiCallSpy}
    handlePageNumberChange={handlePageNumberChangeSpy}
    handleDropDownAndPageNumberChange={handleDropDownAndPageNumberChangeSpy} />)

  it('verify top pagination component render', () => {
    const paginationClassName = paginationCompRendered.find('.top_pagination')
    expect(paginationClassName.length).toBe(1)
    expect(paginationCompRendered.length).toBe(1)
  })

  it('verify dropDown value change number of facilities', () => {
    let dropdownForfacilitiesCount = paginationCompRendered.find('#dropdownFacilities_top_pagination')
    dropdownForfacilitiesCount.simulate('change', {target: {options: {'5': {id: '5', value: '5'}, selectedIndex: 5}}})
    expect(searchApiCallSpy).toHaveBeenCalledWith(0, 5)
  })

  it('verify clicking next button ', () => {
    let searchFacility = paginationCompRendered.find('#next_button_top_pagination')
    searchFacility.simulate('click')
    expect(handlePageNumberChangeSpy).toHaveBeenCalledWith(2)
    expect(searchApiCallSpy).toHaveBeenCalledWith(5, 5)
  })

  it('verify clicking previous button ', () => {
    let searchFacility = paginationCompRendered.find('#previous_button_top_pagination')
    searchFacility.simulate('click')
    expect(handlePageNumberChangeSpy).toHaveBeenCalledWith(2)
    expect(searchApiCallSpy).toHaveBeenCalledWith(0, 5)
  })

  it('verify bottom pagination component render', () => {
    const propsForBottomPagination = {
      paginationClassName: 'bottom_pagination',
      totalNoOfFacilities: 64,
      sizeValue: 5,
      pageNumber: 1
    }
    const bottomPaginationComp = mount(<Pagination {...propsForBottomPagination} />)
    expect(bottomPaginationComp.length).toBe(1)
    const renderedPaginationClassName = bottomPaginationComp.find('.bottom_pagination')
    expect(renderedPaginationClassName.length).toBe(1)
  })
})
