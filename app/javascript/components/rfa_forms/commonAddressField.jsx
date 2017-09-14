import React from 'react'
import PropTypes from 'prop-types'
import {InputComponent} from '../common/inputFields'
import {DropDownField} from '../common/dropDownField'
import {getDictionaryId, dictionaryNilSelect} from 'helpers/commonHelper.jsx'

export default class CommonAddressFields extends React.Component {
  render () {
    const addressFields = this.props.addressFields
    return (
      <div>
        <InputComponent gridClassName='col-md-12' id='street_address'
          value={addressFields.mailing_address.street_address}
          label='Physical Address' placeholder=''
          type='text' onChange={(event) => this.props.onChange('street_address', event.target.value, this.props.index)} />
        <InputComponent gridClassName='col-md-4' id='zip'
          value={addressFields.mailing_address.zip}
          label='Zip' placeholder=''
          type='text' onChange={(event) => this.props.onChange('zip', event.target.value, this.props.index)} />
        <InputComponent gridClassName='col-md-4' id='city'
          value={addressFields.mailing_address.city}
          label='City' placeholder=''
          type='text' onChange={(event) => this.props.onChange('city', event.target.value, this.props.index)} />
        <DropDownField gridClassName='col-md-4' id='state_type'
          selectClassName='reusable-select'
          value={getDictionaryId(addressFields.mailing_address.state)}
          optionList={this.props.stateTypes}
          label='State'
          onChange={(event) => this.props.onChange('state', dictionaryNilSelect(event.target.selectedOptions[0]), this.props.index)} />
      </div>
    )
  }
}
CommonAddressFields.propTypes = {
  addressFields: PropTypes.object.isRequired,
  stateTypes: PropTypes.array.isRequired
}
