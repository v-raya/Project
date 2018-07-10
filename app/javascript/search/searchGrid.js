import React from 'react'
import PropTypes from 'prop-types'
import {urlPrefixHelper} from '../helpers/url_prefix_helper.js.erb'
import GridInnerLayout from './common/gridInnerLayout.js'
import GridOuterLayout from './common/gridOuterLayout.js'
import {checkForNA, checkForObjectAndValue, checkNullOrEmptyValue, respectiveNumberOrNA, respectiveFullAddressOrNA,
  primaryPhoneRelation, alternativePhoneRelation, physicalAddressType} from './common/commonUtils'
import {Link} from 'react-router-dom'

const SearchGrid = ({
  searchResults
}) => (
  <div className='grid_view col-xs-12 col-sm-12 col-md-12 col-lg-12'>
    {(
      searchResults.map((result, index) => {
        return (<div key={index} className='grid_view_inner col-xs-12 col-sm-12 col-md-12 col-lg-12'>
          <div className='col-xs-12 col-sm-1 col-md-1 col-lg-1'>
            <Link to={urlPrefixHelper('/facilities/' + result.id)}><div className='home-icon' /></Link>
          </div>
          <div className='col-xs-12 col-sm-11 col-md-11 col-lg-11'>
            <GridOuterLayout>
              <div>
                <p className='block_label'>Facility Name </p>
                <p className='block_text'>
                  <Link to={urlPrefixHelper('/facilities/' + result.id)}>{checkNullOrEmptyValue(result.name)}</Link>
                </p>
              </div>
              <GridInnerLayout
                title='Facility ID / Approval #'
                value={result.license_number} />
              <GridInnerLayout
                title='Facility Type'
                value={checkForNA(result.type)} />
              <GridInnerLayout
                title='Facility Source'
                value={checkNullOrEmptyValue(result.facility_source)} />
              <GridInnerLayout
                title='License Status'
                value={checkForNA(result.status)} />
            </GridOuterLayout>
            <GridOuterLayout>
              <GridInnerLayout
                title='Facility Address'
                value = {respectiveFullAddressOrNA(result.addresses, physicalAddressType)} />
              <GridInnerLayout
                title='County'
                value={checkForNA(result.county)} />
              <GridInnerLayout
                title='Facility Phone Number'
                value={respectiveNumberOrNA(result.phones, primaryPhoneRelation)} />
              <GridInnerLayout
                title='Facility Email'
                value={checkNullOrEmptyValue(result.email_address)} />
              <GridInnerLayout
                title='Licensee Name'
                value={result.licensee_name} />
            </GridOuterLayout>
            <GridOuterLayout>
              <GridInnerLayout
                title='Approval / Licensing Worker'
                value={checkForObjectAndValue(result.assigned_worker, 'full_name')} />
              <GridInnerLayout
                title='Alternative Number'
                value={respectiveNumberOrNA(result.phones, alternativePhoneRelation)} />
            </GridOuterLayout>
          </div>
        </div>)
      })
    )}
  </div>
)

SearchGrid.propTypes = {
  searchResults: PropTypes.array.isRequired
}

SearchGrid.defaultProps = {
  searchResults: []
}

export default SearchGrid
