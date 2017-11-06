import React from 'react'
import {urlPrefixHelper} from '../helpers/url_prefix_helper.js.erb'

export default class SearchGrid extends React.Component {
  render () {
    const searchResults = this.props.searchResults
    const gridResult = searchResults.map((result) => {
      let displayAddress = result.addresses[0] !== undefined && result.addresses[0].address.street_address !== undefined
      let address = displayAddress ? result.addresses[0].address.street_address + ',' + result.addresses[0].address.city +
        ',' + result.addresses[0].address.state + ' ' + result.addresses[0].address.zip_code : 'N/A'
      let phone = (result.phones[0] !== undefined && result.phones[0].number !== undefined) ? result.phones[0].number : 'N/A'

      return (
        <div key={result.license_number} className='grid_view_inner col-xs-12 col-sm-12 col-md-12 col-lg-12' >
          <div className='col-xs-12 col-sm-1 col-md-1 col-lg-1'>
            <a href={urlPrefixHelper('/facilities/' + result.license_number)}><div className='home-icon' /></a>
          </div>
          <div className='col-xs-12 col-sm-11 col-md-11 col-lg-11'>
            <div className='grid_layout col-xs-12 col-sm-4 col-md-4 col-lg-4'>
              <div>
                <p className='block_label'>Facility Name </p>
                <p className='block_text'>
                  <a href={urlPrefixHelper('/facilities/' + result.license_number)}>{result.name}</a>
                </p>
              </div>
              <div>
                <p className='block_label'>Facility ID/Approval # </p>
                <p className='block_text'>{result.license_number}</p>
              </div>
              <div>
                <p className='block_label'>Facility Type </p>
                <p className='block_text'>{result.type && result.type.value ? result.type.value : 'N/A'}</p>
              </div>
              <div>
                <p className='block_label'>Status </p>
                <p className='block_text'>{result.status && result.status.value ? result.status.value : 'N/A'}</p>
              </div>
              <div>
                <p className='block_label'>Licensee Name </p>
                <p className='block_text'>{result.name}</p>
              </div>
            </div>
            <div className='grid_layout col-xs-12 col-sm-4 col-md-4 col-lg-4'>
              <div>
                <p className='block_label'>Facility Address </p>
                <p className='block_text'>{address}</p>
              </div>
              <div>
                <p className='block_label'>County </p>
                <p className='block_text'>{result.county && result.county.value ? result.county.value : 'N/A'}</p>
              </div>
              <div>
                <p className='block_label'>Facility Phone Number </p>
                <p className='block_text'>{phone}</p>
              </div>
              <div>
                <p className='block_label'>Facility Email </p>
                <p className='block_text'>{result.email_address ? result.email_address : 'N/A' }</p>
              </div>
            </div>
            <div className='grid_layout col-xs-12 col-sm-4 col-md-4 col-lg-4'>
              <div>
                <p className='block_label'>Assigned Worker </p>
                <p className='block_text'>{result.assigned_worker.value ? result.assigned_worker.value : 'N/A'}</p>
              </div>
              <div>
                <p className='block_label'>Assigned Worker Phone# </p>
                <p className='block_text'>{phone}</p>
              </div>
            </div>
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
