import React from 'react'
import PropTypes from 'prop-types'
import {urlPrefixHelper} from '../helpers/url_prefix_helper.js.erb'
import GridInnerLayout from './common/gridInnerLayout.js'
import GridOuterLayout from './common/gridOuterLayout.js'
import {addressDefaults, phoneDefaults, defaultValue} from '../facility/address.jsx'

export const searchDataDefaults = Object.freeze({
  county: defaultValue,
  facilityType: defaultValue,
  status: defaultValue,
  addresses: [addressDefaults],
  phones: [phoneDefaults]
})

export default class SearchGrid extends React.Component {
  render () {
    const searchResults = this.props.searchResults
    const gridResult = searchResults.map((result) => {
      // let displayAddress = result.addresses[0] !== undefined && result.addresses[0].address.street_address !== undefined
      let address = result.addresses[0].address.street_address + ',' + result.addresses[0].address.city +
        ',' + result.addresses[0].address.state + ' ' + result.addresses[0].address.zip_code
      let phone = result.phones[0].number.replace(/(\d{3})(\d{3})(\d{4})/, '($1)-$2-$3')

      return (
        <div key={result.license_number} className='grid_view_inner col-xs-12 col-sm-12 col-md-12 col-lg-12' >
          <div className='col-xs-12 col-sm-1 col-md-1 col-lg-1'>
            <a href={urlPrefixHelper('/facilities/' + result.license_number)}><div className='home-icon' /></a>
          </div>
          <div className='col-xs-12 col-sm-11 col-md-11 col-lg-11'>
            <GridOuterLayout>
              <div>
                <p className='block_label'>Facility Name </p>
                <p className='block_text'>
                  <a href={urlPrefixHelper('/facilities/' + result.license_number)}>{result.name}</a>
                </p>
              </div>
              <GridInnerLayout
                title={'Facility ID/Approval #'}
                value={result.license_number} />
              <GridInnerLayout
                title={'Facility Type'}
                value={result.type.value} />
              <GridInnerLayout
                title={'Status'}
                value={result.status.value} />
              <GridInnerLayout
                title={'Licensee Name'}
                value={result.name} />
            </GridOuterLayout>
            <GridOuterLayout>
              <GridInnerLayout
                title={'Facility Address'}
                value={address} />
              <GridInnerLayout
                title={'County'}
                value={result.county.value} />
              <GridInnerLayout
                title={'Facility Phone Number'}
                value={phone} />
              <GridInnerLayout
                title={'Facility Email'}
                value={result.email_address ? result.email_address : 'N/A'} />
            </GridOuterLayout>
            <GridOuterLayout>
              <GridInnerLayout
                title={'Assigned Worker'}
                value={result.assigned_worker.value ? result.assigned_worker.value : 'N/A'} />
              <GridInnerLayout
                title={'Assigned Worker'}
                value={phone} />
            </GridOuterLayout>
          </div>
        </div>
      )
    })
    return (
      <div className='grid_view col-xs-12 col-sm-12 col-md-12 col-lg-12'>
        {gridResult}
      </div>
    )
  }
}

SearchGrid.propTypes = {
  searchResults: PropTypes.array.isRequired
}

SearchGrid.defaultProps = {
  searchResults: [searchDataDefaults]
}
