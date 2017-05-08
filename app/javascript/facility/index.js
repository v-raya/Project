import React, { Component } from 'react'
import FacilityDetails from './details.jsx'
import FacilityAddress from './address.jsx'
import FacilityChildren from './children.jsx'
import FacilityComplaints from './complaints.jsx'
import './../facilities/stylesheets/facility.scss'
import logo from './../facilities/images/logo.jpg'

export default class Facility extends Component {
  constructor (props) {
    super(props)
    this.state = { facility: JSON.parse(props.facility) }
  }

  render () {
    let propsData = this.state.facility
    let childrenData = this.state.children
    let complaintsData = this.state.complaints
     // items.each do |item| <Link to facility/fac_nbr compononet facilities params = item>
    return (
      <div className='main_page'>
        <div className='header_cwds col-xs-12 col-sm-12 col-md-12 col-lg-12'>
          <img src={logo} alt={'logo'} />
        </div>
        <div className='body_cwds col-xs-12 col-sm-12 col-md-12 col-lg-12'>
          <FacilityDetails facilityData={propsData} />
          <FacilityAddress facilityData={propsData} />
          <FacilityChildren facilityData={childrenData} />
          <FacilityComplaints facilityData={complaintsData} />
        </div>
      </div>
    )
  }
}
