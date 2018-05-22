import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FacilityDetails from './facilityDetails.jsx'
import FacilityAddress from './facilityAddress.jsx'
import FacilityChildren from './facilityChildren.jsx'
import FacilityComplaints from './facilityComplaints.jsx'
import ApiErrorMessages from 'components/common/errors/apiErrorMessages'
import {PageHeaderWrapper} from './pageHeaderWrapper'
import {connect} from 'react-redux'
import {facilityApiCall} from 'actions/facilityActions'
import {getFacilityData, getFacilityChildren, getFacilityComplaints} from 'selectors/facilityDataSelectors'

class Facility extends React.Component {
  componentDidMount () {
    const params = {
      'id': this.props.match.params.id
    }
    this.props.facilityApiCall(params)
  }

  render () {
    const {facility, facilityChildren, facilityComplaints, errors} = this.props
    return (
      <div className='main_page'>
        <PageHeaderWrapper facility={facility}/>
        <div className='body_cwds col-xs-12 col-sm-12 col-md-12 col-lg-12'>
          <ApiErrorMessages errors={errors.message.issue_details} url={errors.url} />
          {facility && (
            <div>
              <FacilityDetails facilityData={facility} />
              <FacilityAddress facilityData={facility} />
            </div>
          )}
          {facilityChildren && <FacilityChildren children={facilityChildren.children} />}
          {facilityComplaints && <FacilityComplaints complaints={facilityComplaints.complaints} />}
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    facility: getFacilityData(state),
    facilityChildren: getFacilityChildren(state),
    facilityComplaints: getFacilityComplaints(state),
    errors: state.facilityReducer.errors
  }
}

Facility.propTypes = {
  facility: PropTypes.object,
  facilityChildren: PropTypes.object,
  FacilityComplaints: PropTypes.object,
  match: PropTypes.object,
  errors: PropTypes.object,
  facilityApiCall: PropTypes.func
}

Facility.defaultProps = {
  facilityChildren: {
    children: undefined
  },
  facilityComplaints: {
    complaints: undefined
  },
  errors: {
    message: {
      issue_details: undefined
    },
    url: undefined
  }
}

export {Facility}
export default connect(mapStateToProps, {facilityApiCall})(Facility)
