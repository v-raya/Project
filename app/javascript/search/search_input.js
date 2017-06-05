import React from 'react'
import { FacilityTypes, CountyList } from '../constants/constants'

export default class SearchInput extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      county: '',
      facility: ''
    }
    this.handleCountyChange = this.handleCountyChange.bind(this)
    this.handleTypeChange = this.handleTypeChange.bind(this)
  }
  handleCountyChange (event) {
    this.setState({
      county: event.target.value
    })
  }
  handleTypeChange (event) {
    this.setState({
      facility: event.target.value
    }
    )
  }
  sendSearchInput (event) {
    event.preventDefault()
    const finalQuery = (this.state.county + ',' + this.state.facility + ',' + this.refs.facilityId.value + ',' + this.refs.facilityHome.value + ',' + this.refs.facilityAddress.value)
    this.props.sendSearchInput(finalQuery)
  }
  render () {
    const facilityIterate = (Object.keys(FacilityTypes).sort()).map((facility) =>
      <option key={Number(facility)} value={facility}>{FacilityTypes[facility]}</option>
    )
    const countyIterate = (Object.keys(CountyList).sort()).map((county) =>
      <option key={Number(county)} value={county}>{CountyList[county]}</option>
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
              <button id='search' type='submit' className='search-icon'></button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
