
import React from 'react'
import {InputComponent} from 'components/common/inputFields'

export class FacilityComponent extends React.Component {
  render () {
    return (
      <div className='row list-item facility-remove-btn'>
        <button onClick={(event) => { this.props.removeFacilityCard(event, this.props.facility, this.props.index, this.props.defKey, this.props.subKey) }}
          className={`pull-right remove-btn facility${this.props.index}`}>Remove</button>
        <InputComponent gridClassName='col-md-12' id={`typeOfLicense${this.props.index}`}
          label='Facility Name (required)' placeholder=''
          value={this.props.value}
          onChange={(event) => { this.props.onChange(event, this.props.facility, this.props.index, this.props.defKey, this.props.subKey, event.target.value) }} />
      </div>
    )
  }
}
