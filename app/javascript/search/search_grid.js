import React from 'react'

export default class SearchGrid extends React.Component {
  render () {
    const searchResults = this.props.searchResults
    const gridResult = searchResults.map((result) => {
      return (
        <div key={result.fac_nbr} className='grid_view_inner col-xs-12 col-sm-12 col-md-12 col-lg-12' >
          <div className='col-xs-12 col-sm-1 col-md-1 col-lg-1'>
            <a href={'/facilities/' + result.fac_nbr}><div className='home-icon' /></a>
          </div>
          <div className='col-xs-12 col-sm-11 col-md-11 col-lg-11'>
            <div className='grid_layout col-xs-12 col-sm-4 col-md-4 col-lg-4'>
              <div>
                <p className='block_label'>Facility Name </p>
                <p className='block_text'>
                  <a href={'/facilities/' + result.fac_nbr}>{result.fac_name}</a>
                </p>
              </div>
              <div>
                <p className='block_label'>Facility ID/Approval # </p>
                <p className='block_text'>{result.fac_nbr}</p>
              </div>
              <div>
                <p className='block_label'>Facility Type </p>
                <p className='block_text'>{result.type}</p>
              </div>
              <div>
                <p className='block_label'>Status </p>
                <p className='block_text'>{result.status}</p>
              </div>
              <div>
                <p className='block_label'>Licensee Name </p>
                <p className='block_text'>{result.fac_licensee_name}</p>
              </div>
            </div>
            <div className='grid_layout col-xs-12 col-sm-4 col-md-4 col-lg-4'>
              <div>
                <p className='block_label'>Facility Address </p>
                <p className='block_text'>{result.fac_res_street_addr},
                  {result.fac_res_city}, {result.fac_res_state} {' ' + result.fac_res_zip_code}</p>
              </div>
              <div>
                <p className='block_label'>County </p>
                <p className='block_text'>{result.county}</p>
              </div>
              <div>
                <p className='block_label'>Facility Phone Number </p>
                <p className='block_text'>{result.facility_telephone}</p>
              </div>
              <div>
                <p className='block_label'>Facility Email </p>
                <p className='block_text'>{result.fac_email_address ? result.fac_email_address : 'N/A' }</p>
              </div>
            </div>
            <div className='grid_layout col-xs-12 col-sm-4 col-md-4 col-lg-4'>
              <div>
                <p className='block_label'>Assigned Worker </p>
                <p className='block_text'>{result.assigned_worker}</p>
              </div>
              <div>
                <p className='block_label'>Assigned Worker Phone# </p>
                <p className='block_text'>N/A</p>
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
