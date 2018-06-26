import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FacilityDetails from 'facility/facilityDetails'
import FacilityAddress from 'facility/facilityAddress'
import FacilityAssignedWorker from './facilityAssignedWorker'
import Spinner from 'facility/common/spinner'

class FacilityWrapper extends React.Component {
  componentDidMount () {
    const params = {
      id: this.props.match.params.facility_id
    }
    this.props.facilityApiCall(params)
  }

  render () {
    const {
      facilityData,
      facilityAddress,
      facilityName,
      facilityPhones,
      otherFacilityData,
      facilityAssignedWorker,
      isFetching,
      errors
    } = this.props
    return (
      <div>
        {isFetching ? (
          <Spinner/>
        ) : (
          <div>
            <FacilityDetails
              facilityData={facilityData}
              facilityName={facilityName}
              errors={errors}
            />
            <FacilityAddress
              facilityAddress={facilityAddress}
              facilityPhones={facilityPhones}
              otherFacilityData={otherFacilityData}
            />
            <FacilityAssignedWorker
              facilityAssignedWorker={facilityAssignedWorker}
            />
          </div>
        )}
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
