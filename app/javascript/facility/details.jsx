import React from 'react'

export default class FacilityDetails extends React.Component {
  render () {
    return (
      <div className='facility-details col-xs-12 col-sm-12 col-md-12 col-lg-12'>
        <div className='facility-details-block col-xs-12 col-sm-12 col-md-12 col-lg-12'>
          <div className='facility_header col-xs-12 col-sm-12 col-md-12 col-lg-12'>
            <h1 className='header_left'>
              {this.props.facilityData.fac_name}
            </h1>
            <div className='header_right'>
              <h3 className='header_bold'>
                      FACILITY TYPE :
              </h3>
              <h3 className='header_light'>
                {' ' + this.props.facilityData.type}
              </h3>
            </div>
          </div>
          <div className='headliner col-xs-12 col-sm-12 col-md-12 col-lg-12' />
          <div className='facility_blocks col-xs-12 col-sm-12 col-md-12 col-lg-12'>
            <div className='col-xs-12 col-sm-4 col-md-4 col-lg-4'>
              <div className='inner_block yellow'>
                <div className='small_inner_block'>
                  <p className='licensee_name'>NAME OF LICENSEE/ PARENTS</p>
                  <p>{this.props.facilityData.fac_licensee_name}</p>
                </div>
                <div className='small_inner_block'>
                  <p>APPROVAL/LICENSING WORKER</p>
                  <p>{this.props.facilityData.assigned_worker}</p>
                </div>
                <div className='small_inner_block'>
                  <p>ASSIGNED OVERSIGHT AGENCY</p>
                  <p>{this.props.facilityData.district_office}</p>
                </div>
              </div>
            </div>
            <div className='col-xs-12 col-sm-4 col-md-4 col-lg-4'>
              <div className='inner_block green'>
                <div className='small_inner_block'>
                  <p>FACILITY LICENSE NUMBER</p>
                  <p>{this.props.facilityData.fac_nbr}</p>
                </div>
                <div className='small_inner_block'>
                  <p>LICENSE STATUS</p>
                  <p>{this.props.facilityData.status}</p>
                </div>
                <div className='small_inner_block'>
                  <p>CAPACITY</p>
                  <p>{this.props.facilityData.fac_capacity}</p>
                </div>
              </div>
            </div>
            <div className='col-xs-12 col-sm-4 col-md-4 col-lg-4'>
              <div className='inner_block orange'>
                <div className='small_inner_block'>
                  <p>LICENSE EFFECTIVE DATE</p>
                  <p>{this.props.status === ('Pending' || 'Probationary License') ? 'N/A' : (this.props.facilityData.fac_lic_eff_date == null ? 'N/A' : this.props.facilityData.fac_lic_eff_date)}</p>
                </div>
                <div className='small_inner_block'>
                  <p>APPLICATION RECEIVED DATE</p>
                  <p>{this.props.facilityData.fac_orig_appl_rec_date == null ? 'N/A' : this.props.facilityData.fac_orig_appl_rec_date}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
