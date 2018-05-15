import React from 'react'
import PropTypes from 'prop-types'
import {resultsPerPage} from './common/commonUtils'
import {dictionaryNilSelectValue, floatToNextInt, getFromValue} from 'helpers/commonHelper.jsx'
import Pagination from './pagination'

const SearchDetails = ({
  totalNoOfFacilities,
  toggeledResult,
  sizeValue,
  pageNumber,
  searchApiCall,
  handleToggle,
  handleDropDownAndPageNumberChange,
  handlePageNumberChange
}) => (
  <div className='search-toggle col-xs-12 col-sm-12 col-md-12 col-lg-12'>
    <span className='search_details col-xs-12 col-sm-11 col-md-11 col-lg-11'>
      <p>Search Results:</p>
      <Pagination
        paginationClassName='top_pagination'
        searchApiCall={searchApiCall}
        sizeValue={sizeValue}
        pageNumber={pageNumber}
        totalNoOfFacilities={totalNoOfFacilities}
        handleDropDownAndPageNumberChange={handleDropDownAndPageNumberChange}
        handlePageNumberChange={handlePageNumberChange} />
    </span>
    <span className='toggle_result col-xs-12 col-sm-1 col-md-1 col-lg-1'>
      <span id='toggle_button' onClick={handleToggle} className={(toggeledResult ? 'line_off-icon' : 'line_on-icon') + ' ' + 'navbar-brand'} alt={'list'} />
      <span onClick={handleToggle} className={(toggeledResult ? 'grid_on-icon' : 'grid_off-icon') + ' ' + 'navbar-brand'} alt={'grid'} />
    </span>
  </div>
)

SearchDetails.propTypes = {
  totalNoOfFacilities: PropTypes.number,
  sizeValue: PropTypes.number,
  pageNumber: PropTypes.number,
  handleToggle: PropTypes.func,
  toggeledResult: PropTypes.bool,
  searchApiCall: PropTypes.func,
  changePage: PropTypes.func
}
SearchDetails.defaultProps = {
  totalNoOfFacilities: 0,
  pageNumber: 1,
  toggeledResult: true,
  sizeValue: 10,
  facilityNameValue: '',
  facilityIdValue: '',
  fromValue: 0
}

export default SearchDetails
