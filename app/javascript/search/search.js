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
import {handleInputChange, searchApiCall, handleToggle, handleResetForm, handlePageNumberChange, handleDropDownAndPageNumberChange, searchDictionariesCall} from 'actions/searchActions'
import {connect} from 'react-redux'
import {PageHeader} from 'react-wood-duck'
import BreadCrumb from 'components/common/breadCrumb'
import {getFromValue} from 'helpers/commonHelper.jsx'

class Search extends React.Component {
  componentDidMount () {
    this.props.searchDictionariesCall()
  }

  searchApiCallParams (fromValue, sizeValue) {
    const params = {
      'county.id': this.props.inputData.countyValue >= 0 ? this.props.inputData.countyValue : this.props.user.county_code,
      'type.id': checkForValue(this.props.inputData.facilityTypeValue),
      id: checkForValue(this.props.inputData.facilityIdValue),
      name: checkForValue(this.props.inputData.facilityNameValue),
      'addresses.address.street_address': checkForValue(this.props.inputData.facilityAddressValue)
    }
    const urlParams = {
      fromValue: fromValue,
      sizeValue: sizeValue
    }
    this.props.searchApiCall(params, urlParams)
  }

  render () {
    const initialLoad = this.props.searchResults === undefined
    const searchResponseHasValues = this.props.searchResults && this.props.searchResults.length > 0
    const countyValue = (this.props.inputData.countyValue || this.props.inputData.countyValue === '') ? this.props.inputData.countyValue : this.props.user.county_code

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
            countyValue={countyValue}
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
            inputData={this.props.inputData}
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
          {(!searchResponseHasValues && !initialLoad) && <SearchNotFound errors={this.props.errors.issue_details} />}
        </div>
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

function mapStateToProps (state) {
  return {
    countyTypes: state.searchReducer.countyTypes,
    facilityTypes: state.searchReducer.facilityTypes,
    user: state.searchReducer.user,
    inputData: state.searchReducer.inputData,
    searchResults: state.searchReducer.searchResults,
    totalNoOfResults: state.searchReducer.totalNoOfResults,
    isToggled: state.searchReducer.isToggled,
    sizeValue: state.searchReducer.sizeValue,
    pageNumber: state.searchReducer.pageNumber,
    errors: state.searchReducer.errors
  }
}

export {Search}
export default connect(mapStateToProps, {handleInputChange, searchApiCall, handleToggle, handleResetForm, handlePageNumberChange, handleDropDownAndPageNumberChange, searchDictionariesCall})(Search)
