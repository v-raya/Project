import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PageHeaderWrapperContainer from 'containers/pageHeaderWrapperContainer'
import FacilityWrapperContainer from 'containers/facilityWrapperContainer'
import FacilityChildrenContainer from 'containers/facilityChildrenContainer'
// import FacilityComplaints from './facilityComplaints.jsx'

export default class Facility extends React.Component {
  render () {
    return (
      <div className='main_page'>
        <PageHeaderWrapperContainer />
        <div className='body_cwds col-xs-12 col-sm-12 col-md-12 col-lg-12'>
          <FacilityWrapperContainer match={this.props.match}/>
          <FacilityChildrenContainer match={this.props.match}/>
          {/* {facilityComplaints && <FacilityComplaints complaints={facilityComplaints.complaints} />} */}
        </div>
      </div>
    )
  }
}

Facility.propTypes = {
  match: PropTypes.object
}
