import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FacilityDetailsContainer from 'containers/facilityDetailsContainer'
import FacilityAddressContainer from 'containers/facilityAddressContainer'
import PageHeaderWrapperContainer from 'containers/pageHeaderWrapperContainer'
// import FacilityChildren from './facilityChildren.jsx'
// import FacilityComplaints from './facilityComplaints.jsx'
import {connect} from 'react-redux'
import {facilityApiCall} from 'actions/facilityActions'
import {getFacilityData} from 'selectors/facilityDataSelectors'

class Facility extends React.Component {
  componentDidMount () {
    const params = {
      'id': this.props.match.params.id
    }
    this.props.facilityApiCall(params)
  }

  render () {
    return (
      <div className='main_page'>
        <PageHeaderWrapperContainer />
        <div className='body_cwds col-xs-12 col-sm-12 col-md-12 col-lg-12'>
          {this.props.isFetching ? <div className="loading-icon"></div>
            : <div>
              <FacilityDetailsContainer />
              <FacilityAddressContainer />
            </div>

          }
          {/* {facilityChildren && <FacilityChildren children={facilityChildren.children} />}
          {facilityComplaints && <FacilityComplaints complaints={facilityComplaints.complaints} />} */}
        </div>
      </div>
    )
  }
}

Facility.propTypes = {
  match: PropTypes.object,
  facilityApiCall: PropTypes.func
}

const mapStateToProps = (state) => ({
  isFetching: state.facilityReducer.isFetching
})

export {Facility}
export default connect(mapStateToProps, {facilityApiCall})(Facility)
