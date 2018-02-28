import React from 'react'
import PropTypes from 'prop-types'
import {resultsPerPage} from './common/commonUtils'
import {dictionaryNilSelectValue, floatToNextInt} from 'helpers/commonHelper.jsx'

export default class SearchDetails extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      searchData: this.props.inputData.split(',')
    }
    this.removeCriteria = this.removeCriteria.bind(this)
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.inputData.split(',') !== this.state.searchData) {
      this.setState({
        searchData: nextProps.inputData.split(',')
      })
    }
  }

  removeCriteria (event) {
    const newState = this.state.searchData
    if (newState.indexOf(event) > -1) {
      newState.splice(newState.indexOf(event), 1, '')
      this.setState(
        {
          searchData: newState
        }
      )
    }
    this.props.searchApiCall(this.state.searchData.toString(), 0, this.props.sizeValue)
  }

  render () {
    const searchCount = this.props.totalNoOfFacilities
    const noOfPages = floatToNextInt(searchCount, this.props.sizeValue)
    let searchFacilityId = null
    if (this.state.searchData[2] && this.state.searchData[2].length > 1) {
      searchFacilityId = (<p>Facility ID:
      <span>{this.state.searchData[2]}</span>
      <span id='rm_criteria' onClick={this.removeCriteria.bind(this, this.state.searchData[2])} alt='cross-icon' className='cross-icon' />
      </p>)
    }
    let searchFacilityName = null
    if (this.state.searchData[3] && this.state.searchData[3].length > 1) {
      searchFacilityName = (<p>Facility Name:
      <span>{this.state.searchData[3]}</span>
      <span onClick={this.removeCriteria.bind(this, this.state.searchData[3])} alt='cross-icon' className='cross-icon' />
      </p>)
    }
    const facilityIterate = resultsPerPage.map((noOfResults) =>
      <option key={noOfResults} value={noOfResults}>{noOfResults}</option>
    )
    // Below code for future reference of UX changes
    // const searchedCriteria = this.state.searchData.map((item) => {
    //   return (
    //     <p onClick={this.removeCriteria.bind(this, item)}>
    //       {item}
    //     </p>
    //   )
    // });
    return (
      <div className='search-toggle col-xs-12 col-sm-12 col-md-12 col-lg-12'>
        <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
          <span className='glyphicon glyphicon-triangle-right' />
          <span>Advanced Search</span>
        </div>
        <div className='search_details col-xs-12 col-sm-9 col-md-9 col-lg-9'>
          <p>Search Results:</p>
          <select
            className='search_dropdown'
            id='dropdownFacilities'
            value={this.props.sizeValue}
            onChange={(event) => this.props.handleChange(dictionaryNilSelectValue(event.target.options))}>
            {facilityIterate}
          </select>
          <button disabled={this.props.disablePrevious} onClick={() => this.props.backToPreviousPage(this.props.fromValue, this.props.sizeValue, this.props.pageNumber)} className='previous btn btn-default'><p>&#8249;</p></button>
          <span className='page_number'>{this.props.pageNumber}</span>
          <span>of</span>
          <span className='noOfPages'>{noOfPages}</span>
          <button disabled={this.props.disableNext} onClick={() => this.props.changeToNextPage(this.props.fromValue, this.props.sizeValue, this.props.pageNumber)} className='next btn btn-default'><p>&#8250;</p></button>
          {searchFacilityId}
          {searchFacilityName}
        </div>
        <div className='toggle_result col-xs-12 col-sm-3 col-md-3 col-lg-3'>
          <div className='pull-right'>
            <button id='toggle_button' onClick={this.props.handleToggle} className={(this.props.toggeledResult ? 'line_off-icon' : 'line_on-icon') + ' ' + 'navbar-brand'} alt={'list'} />
            <div onClick={this.props.handleToggle} className={(this.props.toggeledResult ? 'grid_on-icon' : 'grid_off-icon') + ' ' + 'navbar-brand'} alt={'grid'} />
          </div>
        </div>
      </div>
    )
  }
}

SearchDetails.propTypes = {
  state: PropTypes.object
}
