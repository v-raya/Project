import React from 'react'
// import { FacilityTypes, CountyList } from '../constants/constants'

export default class SearchInput extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      countyId: '',
      facilityTypeId: ''
    }
    this.handleCountyChange = this.handleCountyChange.bind(this)
    this.handleTypeChange = this.handleTypeChange.bind(this)
  }
  handleCountyChange (event) {
    let selectedCounty = event.target.selectedOptions[0]
    this.setState({
      countyId: selectedCounty.id
    })
  }
  handleTypeChange (event) {
    let selectedFacilityType = event.target.selectedOptions[0]
    this.setState({
      facilityTypeId: selectedFacilityType.id
    }
    )
  }
  sendSearchInput (event) {
    event.preventDefault()
    const finalQuery = (this.state.countyId + ',' + this.state.facilityTypeId + ',' + this.refs.facilityId.value + ',' + this.refs.facilityHome.value + ',' + this.refs.facilityAddress.value)
    this.props.sendSearchInput(finalQuery)
  }
  render () {
    const facilityTypes = this.props.facilityTypes
    const countyList = this.props.countyList
    const facilityIterate = facilityTypes.map((facilityType) =>
      <option key={facilityType.id} id={facilityType.id} value={facilityType.value}>{facilityType.value}</option>
    )
    const countyIterate = countyList.map((county) =>
      <option key={county.id} id={county.id} value={county.value}>{county.value}</option>
    )
    return (
      <div className='search_input col-xs-12 col-sm-12 col-md-12 col-lg-12'>
        <form onSubmit={this.sendSearchInput.bind(this)}>
          <div className='field_input col-xs-12 col-sm-11 col-md-11 col-lg-11'>
            <div className='input_data col-xs-12 col-sm-2 col-md-2 col-lg-2'>
              <div className='input_lable'>
                <span>County</span>
              </div>
              <div className='styled-select county'>
                <select ref={this.state.county} value={this.state.county} onChange={this.handleCountyChange}>
                  <option value=' ' />
                  {countyIterate}
                </select>
                <span className='glyphicon glyphicon-triangle-bottom' />
              </div>
            </div>
            <div className='input_data col-xs-12 col-sm-2 col-md-2 col-lg-2'>
              <div className='input_lable'>
                <span>Facility Type</span>
              </div>
              <div className='styled-select county'>
                <select ref={this.state.facility} value={this.state.facility} onChange={this.handleTypeChange}>
                  <option value='' />
                  {facilityIterate}
                </select>
                <span className='glyphicon glyphicon-triangle-bottom' />
              </div>
            </div>
            <div className='input_data col-xs-12 col-sm-2 col-md-2 col-lg-2'>
              <div className='input_lable'>
                <span>Facility ID #</span>
              </div>
              <input ref='facilityId' type='number' className='form-control type_number' placeholder='Enter Facility ID #' />
            </div>
            <div className='input_data col-xs-12 col-sm-3 col-md-3 col-lg-3'>
              <div className='input_lable'>
                <span>Facility Name</span>
              </div>
              <input ref='facilityHome' type='text' className='form-control' placeholder='Enter Facility Name' aria-describedby='sizing-addon1' />
            </div>
            <div className='input_data col-xs-12 col-sm-3 col-md-3 col-lg-3'>
              <div className='input_lable'>
                <span>Facility Street Address</span>
              </div>
              <input ref='facilityAddress' type='text' className='form-control' placeholder='Enter Facility Address' aria-describedby='sizing-addon1' />
            </div>
          </div>
          <div className='field_search col-xs-12 col-sm-1 col-md-1 col-lg-1'>
            <div className='search_block'>
              <button id='search' type='submit' className='search-icon' />
            </div>
          </div>
        </form>
      </div>
    )
  }
}
