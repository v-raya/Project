import React from 'react'
import PropTypes from 'prop-types'
import {SmallInnerBlockDetails} from './smallInnerBlockDetails.js'
import {InnerBlockAddressTitles} from './innerBlockAddressTitles.js'
import {facilityDataDefaults} from 'constants/defaultFields'

const FacilityAddress = ({
  facilityAddress,
  facilityPhones,
  otherFacilityData,
  facilityAssignedWorker
}) => (
  <div>
    <div className='facility-address col-xs-12 col-sm-12 col-md-12 col-lg-12'>
      <div className='facility-address-block col-xs-12 col-sm-12 col-md-12 col-lg-12'>
        <div className='facility-address-details col-xs-12 col-sm-4 col-md-4 col-lg-4'>
          <div className='inner_block'>
            <InnerBlockAddressTitles
              title='PHYSICAL ADDRESS'
              streetApt={facilityAddress.physicalStreetAddress}
              cityCountry={facilityAddress.physicalAddressCityZipState} />
            <SmallInnerBlockDetails
              title='COUNTY NAME'
              value={otherFacilityData.county} />
            <SmallInnerBlockDetails
              title='PRIMARY PHONE'
              value={facilityPhones.primaryPhoneNumber} />
          </div>
        </div>
        <div className='col-xs-12 col-sm-4 col-md-4 col-lg-4'>
          <div className='inner_block'>
            <InnerBlockAddressTitles
              title='POSTAL ADDRESS'
              streetApt={facilityAddress.mailingStreetAddress}
              cityCountry={facilityAddress.mailingAddressCityZipState} />
            <SmallInnerBlockDetails
              classNameTitle=''
              title='ALTERNATIVE PHONE'
              value={facilityPhones.alternativePhoneNumber} />
          </div>
        </div>
        <div className='col-xs-12 col-sm-4 col-md-4 col-lg-4'>
          <div className='inner_block'>
            <SmallInnerBlockDetails
              title='LAST VISIT DATE'
              value={otherFacilityData.lastVisitDate} />
            <SmallInnerBlockDetails
              title='LAST VISIT REASON'
              value={otherFacilityData.lastVisitReason} />
          </div>
        </div>
      </div>
    </div>
    <div className='facility-details grid_view col-xs-12 col-sm-12 col-md-12 col-lg-12'>
      <div className='facility_blocks col-xs-12 col-sm-4 col-md-4 col-lg-4'>
        <SmallInnerBlockDetails
          title='APPROVAL / LICENSING WORKER'
          value={facilityAssignedWorker.assigned_worker_full_name} />
      </div>
      <div className='facility_blocks col-xs-12 col-sm-4 col-md-4 col-lg-4'>
        <SmallInnerBlockDetails
          title='APPROVAL / LICENSING WORKER PHONE NUMBER'
          value={facilityAssignedWorker.assigned_worker_phone_number} />
      </div>
    </div>
  </div>
)

FacilityAddress.propTypes = {
  facilityAddress: PropTypes.object,
  facilityPhones: PropTypes.object,
  otherFacilityData: PropTypes.object
}

FacilityAddress.defaultProps = {
  facilityAddress: {
    physicalStreetAddress: '',
    physicalAddressCityZipState: '',
    mailingStreetAddress: '',
    mailingAddressCityZipState: ''
  },
  facilityPhones: {
    primaryPhoneNumber: '',
    alternativePhoneNumber: ''
  },
  otherFacilityData: {
    county: '',
    lastVisitDate: '',
    lastVisitReason: ''
  },
  facilityAssignedWorker: {
    assigned_worker_full_name: '',
    assigned_worker_phone_number: ''
  }
}

export default FacilityAddress
