import React from 'react'
import PropTypes from 'prop-types'
import MaskedInputField from './maskedInputField.jsx'
import {DropDownField} from './dropDownField'
import {CheckboxField} from './checkboxField'
import {dictionaryNilSelect} from 'helpers/commonHelper.jsx'
import {maskedPhoneRaw} from 'helpers/maskedFieldValue'
import Validator from 'helpers/validator'

export class PhoneNumberField extends React.Component {
  constructor (props) {
    super(props)

    const phoneNumberValidator = {
      number: [
        {rule: 'is10digits', message: 'Invalid Phone Number'}
      ]
    }
    this.validator = new Validator(phoneNumberValidator)
    // this.validateOnChange = this.validateOnChange.bind(this)
  }

  validateOnBlur (phoneCardIndex, value, type) {
    this.validator.validateField(type, value)
    this.forceUpdate()
    // this.props.onPhoneFieldChange(phoneCardIndex, value, type)
  }

  render () {
    const phoneFields = this.props.phoneFields
    const phoneTypes = this.props.phoneTypes

    return (
      <div>
        <MaskedInputField
          gridClassName='col-md-4'
          id='number'
          value={maskedPhoneRaw(phoneFields.number)}
          label='Phone Number'
          placeholder=''
          blurPlaceholder=''
          focusPlaceholder='(___)___-____'
          mask='(111)111-1111'
          type='text'
          errors={this.validator.fieldErrors('number')}
          onChange={(event) => this.props.onPhoneFieldChange(
            this.props.index,
            maskedPhoneRaw(event.target.value),
            'number')}
          onBlur={(event) => this.validateOnBlur(
            this.props.index,
            maskedPhoneRaw(event.target.value),
            'number')} />

        <DropDownField gridClassName='col-md-4' id='phone_type'
          selectClassName='reusable-select'
          optionList={phoneTypes} value={phoneFields.phone_type.id ? phoneFields.phone_type.id : phoneTypes[1].id}
          label='Phone Type' onChange={(event) => this.props.onPhoneFieldChange(
            this.props.index,
            dictionaryNilSelect(event.target.selectedOptions[0]),
            'phone_type')} />

        <CheckboxField gridClassName='col-md-4' id={this.props.index} type='checkbox'
          checked={phoneFields.preferred}
          value={phoneFields.preferred}
          label='Preferred Contact Number'
          disabled={phoneFields.number.length < 10}
          onChange={(event) => this.props.onPhoneFieldChange(
            this.props.index,
            event.target.checked,
            'preferred')} />
      </div>
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
