import React from 'react'
import PropTypes from 'prop-types'
import {SmallInnerBlockDetails} from './smallInnerBlockDetails.js'

const FacilityAssignedWorker = ({
  facilityAssignedWorker
}) => (
  <div className='facility-address'>
    <div className='facility-address-block col-xs-12 col-sm-12 col-md-12 col-lg-12'>
      <div className='col-xs-12 col-sm-4 col-md-4 col-lg-4'>
        <div className='inner_block'>
          <SmallInnerBlockDetails
            title='APPROVAL / LICENSING WORKER'
            value={facilityAssignedWorker.assignedWorkerFullName} />
        </div>
      </div>
      <div className='col-xs-12 col-sm-4 col-md-4 col-lg-4'>
        <div className='inner_block'>
          <SmallInnerBlockDetails
            title='APPROVAL / LICENSING WORKER PHONE NUMBER'
            value={facilityAssignedWorker.assignedWorkerPhoneNumber} />
        </div>
      </div>
      <div className='col-xs-12 col-sm-4 col-md-4 col-lg-4'>
        <div className='inner_block'>
          <SmallInnerBlockDetails
            title='APPROVAL / LICENSING WORKER EMAIL'
            value={facilityAssignedWorker.assignedWorkerEmail} />
        </div>
      </div>
    </div>
  </div>
)

FacilityAssignedWorker.propTypes = {
  facilityAssignedWorker: PropTypes.object
}

FacilityAssignedWorker.defaultProps = {
  facilityAssignedWorker: {
    assignedWorkerFullName: '',
    assignedWorkerPhoneNumber: '',
    assignedWorkerEmail: ''
  }
}

export default FacilityAssignedWorker
