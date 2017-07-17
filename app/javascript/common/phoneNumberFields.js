import React from 'react'
import PropTypes from 'prop-types'
import {InputComponent} from './inputFields'
import {DropDownField} from './dropDownField'
import {CheckboxField} from './checkboxField'

export class PhoneNumberField extends React.Component {
  render () {
    const phoneFields = this.props.phoneFields
    const phoneTypes = this.props.phoneTypes

    return (
      <form>
        <InputComponent gridClassName='col-md-4' id='number' value={phoneFields.number}
          label='Phone Number' placeholder='Enter Phone Number'
          type='text' onChange={(event) => this.props.onPhoneFieldChange(
            this.props.index,
            event.target.value,
            'number')} />

        <DropDownField gridClassName='col-md-4' id='phone_type'
          selectClassName='reusable-select'
          optionList={phoneTypes} value={phoneFields.phone_type.id}
          label='Phone Type' onChange={(event) => this.props.onPhoneFieldChange(
            this.props.index,
            {id: event.target.selectedOptions[0].value, value: event.target.selectedOptions[0].text},
            'phone_type')} />

        <CheckboxField gridClassName='col-md-4' id={this.props.index} type='checkbox'
          checked={phoneFields.preferred}
          value={phoneFields.preferred}
          label='Preferred Contact Number'
          onChange={(event) => this.props.onPhoneFieldChange(
            this.props.index,
            event.target.checked,
            'preferred')} />
      </form>
    )
  }
}

PhoneNumberField.propTypes = {
  index: PropTypes.number,
  phoneFields: PropTypes.shape({
    number: PropTypes.string,
    phone_type: PropTypes.object,
    preferred: PropTypes.bool
  }).isRequired,
  phoneTypes: PropTypes.array.isRequired,
  onPhoneFieldChange: PropTypes.func.isRequired
}
