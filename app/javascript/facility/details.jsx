import React from 'react'
import PropTypes from 'prop-types'
import {SmallInnerBlockDetails} from './smallInnerBlockDetails.js'

export default class FacilityDetails extends React.Component {
  render () {
    const result = this.props.facilityData
    return (
      <div className='grid_view col-xs-12 col-sm-12 col-md-12 col-lg-12'>

        <div className='facility-details-block col-xs-12 col-sm-12 col-md-12 col-lg-12'>
          <div className='facility_header col-xs-12 col-sm-12 col-md-12 col-lg-12'>
            <h1 className='header_left'>
              {result.name}
            </h1>
            <div className='header_right'>
              <h3 className='header_bold'>
                      FACILITY TYPE :
              </h3>
              <h3 className='header_light'>
                {' ' + result.type.value}
              </h3>
            </div>
          </div>
          <div className='headliner col-xs-12 col-sm-12 col-md-12 col-lg-12' />
          <div className='facility_blocks col-xs-12 col-sm-12 col-md-12 col-lg-12'>
            <div className='col-xs-12 col-sm-4 col-md-4 col-lg-4'>
              <div className='inner_block yellow'>
                <SmallInnerBlockDetails
                  classNameTitle={''}
                  title={'NAME OF LICENSEE/ PARENTS'}
                  value={result.licensee_name} />
                <SmallInnerBlockDetails
                  classNameTitle={''}
                  title={'APPROVAL/LICENSING WORKER'}
                  value={result.assigned_worker.value ? result.assigned_worker.value : 'N/A'} />
                <SmallInnerBlockDetails
                  classNameTitle={''}
                  title={'ASSIGNED OVERSIGHT AGENCY'}
                  value={result.district_office.name} />
              </div>
            </div>
            <div className='col-xs-12 col-sm-4 col-md-4 col-lg-4'>
              <div className='inner_block green'>
                <SmallInnerBlockDetails
                  classNameTitle={''}
                  title={'FACILITY LICENSE NUMBER'}
                  value={result.license_number} />
                <SmallInnerBlockDetails
                  classNameTitle={''}
                  title={'LICENSE STATUS'}
                  value={result.status.value} />
                <SmallInnerBlockDetails
                  classNameTitle={''}
                  title={'CAPACITY'}
                  value={result.capacity} />
              </div>
            </div>
            <div className='col-xs-12 col-sm-4 col-md-4 col-lg-4'>
              <div className='inner_block orange'>
                <SmallInnerBlockDetails
                  classNameTitle={''}
                  title={'LICENSE EFFECTIVE DATE'}
                  value={result.status.value === ('Pending' || 'Probationary License') ? 'N/A' : (result.license_effective_date == null ? 'N/A' : result.license_effective_date)} />
                <SmallInnerBlockDetails
                  classNameTitle={''}
                  title={'APPLICATION RECEIVED DATE'}
                  value={result.original_application_recieved_date == null ? 'N/A' : result.original_application_recieved_date} />
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

FacilityDetails.propTypes = {
  facilityData: PropTypes.object.isRequired
}

FacilityDetails.defaultProps = {
  facilityData: {}
}
