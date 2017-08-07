
import React from 'react'
import {InputComponent} from 'components/common/inputFields'

export class FacilityComponent extends React.Component {
  render () {
    return (
      <div className='row list-item' >
        <span onClick={(event) => { this.props.removeFacilityCard(event, this.props.facility, this.props.index, this.props.defKey, this.props.subKey) }}
          className={'pull-right glyphicon glyphicon-remove facility' + this.props.index} />
        <InputComponent gridClassName='col-md-12' id={'typeOfLicense' + this.props.index}
          label='Facility Name' placeholder=''
          value={this.props.value}
          onChange={(event) => { this.props.onChange(event, this.props.facility, this.props.index, this.props.defKey, this.props.subKey, event.target.value) }} />
      </div>
    )
  }
}
