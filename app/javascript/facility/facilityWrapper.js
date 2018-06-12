import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FacilityDetails from 'facility/facilityDetails'
import FacilityAddress from 'facility/facilityAddress'
import FacilityAssignedWorker from './facilityAssignedWorker'

class FacilityWrapper extends React.Component {
  componentDidMount () {
    const params = {
      'id': this.props.match.params.facility_id
    }
    this.props.facilityApiCall(params)
  }

  render () {
    const {facilityData, facilityAddress, facilityPhones, otherFacilityData, facilityAssignedWorker, isFetching, errors} = this.props
    return (
      <div>
        {isFetching ? <div className="loading-icon"></div>
          : <div>
            <FacilityDetails facilityData={facilityData} errors={errors} />
            <FacilityAddress
              facilityAddress={facilityAddress}
              facilityPhones={facilityPhones}
              otherFacilityData={otherFacilityData} />
            <FacilityAssignedWorker facilityAssignedWorker={facilityAssignedWorker} />
          </div>
        }
      </div>
    )
  }
}

FacilityWrapper.propTypes = {
  match: PropTypes.object,
  facilityApiCall: PropTypes.func,
  isFetching: PropTypes.bool,
  facilityData: PropTypes.object,
  facilityAddress: PropTypes.object,
  facilityPhones: PropTypes.object,
  otherFacilityData: PropTypes.object,
  errors: PropTypes.object
}

FacilityWrapper.defaultProps = {
  match: {
    params: {
      id: ''
    }
  }
}

export default FacilityWrapper
