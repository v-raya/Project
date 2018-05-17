import React from 'react'
import PropTypes from 'prop-types'
import SearchGrid from './searchGrid'
import SearchInput from './searchInput'
import SearchList from './searchList'
import SearchNotFound from './searchNotFound'
import SearchDetails from './searchDetails'
import {fetchRequest} from '../helpers/http'
import {urlPrefixHelper} from '../helpers/url_prefix_helper.js.erb'
import {checkforNull, checkForValue} from 'search/common/commonUtils'
import {handleInputChange, searchApiCall, handleToggle, handleResetForm, handlePageNumberChange, handleDropDownAndPageNumberChange, searchDictionariesCall, handleScrollBarChange} from 'actions/searchActions'
import {connect} from 'react-redux'
import {PageHeader} from 'react-wood-duck'
import BreadCrumb from 'components/common/breadCrumb'
import {getFromValue} from 'helpers/commonHelper.jsx'
import Pagination from './pagination'

class Search extends React.Component {
  componentDidMount () {
    this.props.searchDictionariesCall()
  }

  componentDidUpdate () {
    this.props.handleScrollBarChange()
  }

  searchApiCallParams (fromValue, sizeValue) {
    const params = {
      'county.id': checkForValue(this.props.inputData.countyValue),
      'type.id': checkForValue(this.props.inputData.facilityTypeValue),
      'license_number': checkForValue(this.props.inputData.facilityIdValue),
      name: checkForValue(this.props.inputData.facilityNameValue),
      'addresses.address.street_address': checkForValue(this.props.inputData.facilityAddressValue)
    }
    const urlParams = {
      fromValue: fromValue,
      sizeValue: sizeValue,
      sort: 'name.for_sort',
      order: 'asc'
    }
    this.props.searchApiCall(params, urlParams)
  }

  render () {
    const initialLoad = this.props.searchResults === undefined
    const searchResponseHasValues = this.props.searchResults && this.props.searchResults.length > 0

    return (
      <div className='search_page'>
        <PageHeader
          pageTitle='Facility Search'
          button={null}
        />
        <BreadCrumb />
        <div className='search-section col-xs-12 col-sm-12 col-md-12 col-lg-12'>
          <SearchInput
            resetForm={this.props.handleResetForm}
            searchApiCall={this.searchApiCallParams.bind(this)}
            handlePageNumberChange={this.props.handlePageNumberChange}
            countyList={this.props.countyTypes}
            facilityTypes={this.props.facilityTypes}
            countyValue={this.props.inputData.countyValue}
            facilityTypeValue={this.props.inputData.facilityTypeValue}
            facilityIdValue={this.props.inputData.facilityIdValue}
            facilityNameValue={this.props.inputData.facilityNameValue}
            facilityAddressValue={this.props.inputData.facilityAddressValue}
            handleInputChange={this.props.handleInputChange}
            sizeValue={this.props.sizeValue}
          />
        </div>
        {searchResponseHasValues &&
          <SearchDetails
            totalNoOfFacilities={this.props.totalNoOfResults}
            sizeValue={this.props.sizeValue}
            handleDropDownAndPageNumberChange={this.props.handleDropDownAndPageNumberChange}
            handlePageNumberChange={this.props.handlePageNumberChange}
            pageNumber={this.props.pageNumber}
            searchApiCall={this.searchApiCallParams.bind(this)}
            handleToggle={this.props.handleToggle} />}
        <div className='result-section col-xs-12 col-sm-12 col-md-12 col-lg-12'>
          {this.props.isToggled && <SearchGrid searchResults={this.props.searchResults} />}
          {!this.props.isToggled && <SearchList searchResults={this.props.searchResults} />}
          {(!searchResponseHasValues && !initialLoad) && <SearchNotFound errors={this.props.errors.issue_details} errorMessage={this.props.errorMessage} />}
        </div>
        {searchResponseHasValues && this.props.isScrollBarVisible &&
        <div className='search_details col-xs-12 col-sm-12 col-md-12 col-lg-12'>
          <Pagination
            paginationClassName='bottom_pagination'
            totalNoOfFacilities={this.props.totalNoOfResults}
            sizeValue={this.props.sizeValue}
            handleDropDownAndPageNumberChange={this.props.handleDropDownAndPageNumberChange}
            handlePageNumberChange={this.props.handlePageNumberChange}
            pageNumber={this.props.pageNumber}
            searchApiCall={this.searchApiCallParams.bind(this)} />
        </div>
        }
      </div>
    )
  }
}

Search.propTypes = {
  inputData: PropTypes.object,
  searchResults: PropTypes.array,
  totalNoOfResults: PropTypes.number,
  isToggled: PropTypes.bool,
  sizeValue: PropTypes.number,
  pageNumber: PropTypes.number,
  errors: PropTypes.object,
  handleInputChange: PropTypes.func,
  searchApiCall: PropTypes.func,
  handleToggle: PropTypes.func,
  handleResetForm: PropTypes.func,
  handlePageNumberChange: PropTypes.func,
  handleDropDownAndPageNumberChange: PropTypes.func
}

Search.defaultProps = {
  errors: {
    issue_details: undefined
  }
}

function mapStateToProps (state) {
  return {
    countyTypes: state.searchReducer.countyTypes,
    facilityTypes: state.searchReducer.facilityTypes,
    inputData: state.searchReducer.inputData,
    searchResults: state.searchReducer.searchResults,
    totalNoOfResults: state.searchReducer.totalNoOfResults,
    isToggled: state.searchReducer.isToggled,
    sizeValue: state.searchReducer.sizeValue,
    pageNumber: state.searchReducer.pageNumber,
    errors: state.searchReducer.errors,
    errorMessage: state.searchReducer.errorMessage,
    isScrollBarVisible: state.searchReducer.isScrollBarVisible
  }
}

export {Search}
export default connect(mapStateToProps, {handleInputChange, searchApiCall, handleToggle, handleResetForm, handlePageNumberChange, handleDropDownAndPageNumberChange, searchDictionariesCall, handleScrollBarChange})(Search)
