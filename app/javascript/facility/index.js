import React, { Component } from 'react'
import FacilityDetails from './details.jsx'
import FacilityAddress from './address.jsx'
import FacilityChildren from './children.jsx'
import FacilityComplaints from './complaints.jsx'
import './stylesheets/facility.scss'

export default class Facility extends React.Component {
  constructor (props) {
    super(props)
    this.state = { facility: props.facility,
      children: props.children,
      complaints: props.complaints
    }
  }
  render () {
    let propsData = this.state.facility
    let childrenResults = this.state.children
    let complaintsResults = this.state.complaints
    // items.each do |item| <Link to facility/fac_nbr compononet facilities params = item>
    return (
      <div className='main_page'>
        <div className='header_cwds col-xs-12 col-sm-12 col-md-12 col-lg-12'>
          <div className='header-logo' />
        </div>
        <div className='body_cwds col-xs-12 col-sm-12 col-md-12 col-lg-12'>
          <FacilityDetails facilityData={propsData} />
          <FacilityAddress facilityData={propsData} />
          {childrenResults && <FacilityChildren facilityData={childrenResults} />}
          {complaintsResults && <FacilityComplaints facilityData={complaintsResults} />}
        </div>
      </div>
    )
  }
}
