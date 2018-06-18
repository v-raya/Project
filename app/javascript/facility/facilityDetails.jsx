import React from 'react'
import PropTypes from 'prop-types'
import {SmallInnerBlockDetails} from './smallInnerBlockDetails'
import {FacilityTypeDetails} from './facilityTypeDetails'
import ApiErrorMessages from 'components/common/errors/apiErrorMessages'
import {facilityDetailsDefaults} from 'constants/defaultFields'

const FacilityDetails = ({
  facilityData,
  facilityName,
  errors
}) => (
  <div className='facility-details'>
    <FacilityTypeDetails
      value={facilityData.type}
    />
    <div className='headliner' />
    <ApiErrorMessages errors={errors.issue_details}/>
    <div className='facility_blocks col-xs-12 col-sm-12 col-md-12 col-lg-12'>
      <div className='col-xs-12 col-sm-4 col-md-4 col-lg-4'>
        <div className='inner_block'>
          <SmallInnerBlockDetails
            title='FACILITY NAME'
            value={facilityName} />
          <SmallInnerBlockDetails
            title='NAME OF LICENSEE / PARENTS'
            value={facilityData.licensee_name} />
          <SmallInnerBlockDetails
            title='ASSIGNED OVERSIGHT AGENCY'
            value={facilityData.district_office} />
        </div>
      </div>
      <div className='col-xs-12 col-sm-4 col-md-4 col-lg-4'>
        <div className='inner_block'>
          <SmallInnerBlockDetails
            title='FACILITY LICENSE NUMBER'
            value={facilityData.license_number} />
          <SmallInnerBlockDetails
            title='LICENSE STATUS'
            value={facilityData.status} />
          <SmallInnerBlockDetails
            title='CAPACITY / CAPACITY LAST CHANGED'
            value={facilityData.capacity + ' / ' + facilityData.capacity_last_changed} />
        </div>
      </div>
      <div className='col-xs-12 col-sm-4 col-md-4 col-lg-4'>
        <div className='inner_block'>
          <SmallInnerBlockDetails
            title='LICENSE EFFECTIVE DATE'
            value={facilityData.license_effective_date} />
          <SmallInnerBlockDetails
            title='APPLICATION RECEIVED DATE'
            value={facilityData.original_application_recieved_date} />
        </div>
      </div>
    </div>
  </div>
)

FacilityDetails.propTypes = {
  facilityData: PropTypes.object,
  errors: PropTypes.object
}

FacilityDetails.defaultProps = {
  facilityData: facilityDetailsDefaults,
  errors: {
    issue_details: undefined
  }

}

export default FacilityDetails
