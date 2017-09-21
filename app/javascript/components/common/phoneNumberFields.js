import React from 'react'
import PropTypes from 'prop-types'
import MaskedInputField from './maskedInputField.jsx'
import {DropDownField} from './dropDownField'
import {CheckboxField} from './checkboxField'
import {dictionaryNilSelect} from 'helpers/commonHelper.jsx'
import CleaveInputField from './cleaveInputField.jsx'

const phoneNumberRule = {rule: 'is10digits', message: 'Invalid Phone Number'}

export class PhoneNumberField extends React.Component {
  constructor (props) {
    super(props)

    this.props.validator.addFieldValidation(this.props.idPrefix + 'number', phoneNumberRule)
  }

  render () {
    const phoneFields = this.props.phoneFields
    const phoneTypes = this.props.phoneTypes

    const phoneNumberId = this.props.idPrefix + 'number'

    return (
      <div>

        <CleaveInputField
          gridClassName='col-md-4'
          id={phoneNumberId}
          value={phoneFields.number}
          label='Phone Number'
          placeholder=''
          blurPlaceholder=''
          focusPlaceholder='(___)___-____'
          options={{
            delimiters: ['(', ') ', '-'],
            blocks: [0, 3, 3, 4],
            numericOnly: true}}
          type='text'
          errors={this.props.validator.fieldErrors(phoneNumberId)}
          onChange={(event) => this.props.onPhoneFieldChange(
            this.props.index,
            event.target.rawValue,
            'number')}
          onBlur={(event) => this.props.validator.validateField(phoneNumberId, event.target.rawValue)}
        />
        <DropDownField gridClassName='col-md-4' id='phone_type'
          selectClassName='reusable-select'
          optionList={phoneTypes} value={phoneFields.phone_type.id}
          label='Phone Type'
          disableNullVal
          onChange={(event) => this.props.onPhoneFieldChange(this.props.index,
            dictionaryNilSelect(event.target.selectedOptions[0]), 'phone_type')} />

        <CheckboxField gridClassName='col-md-4' id={this.props.index + 'applicant id ' + this.props.applicant_id}
          type={'checkbox'}
          checked={phoneFields.preferred}
          value={phoneFields.preferred}
          label='Preferred Contact Number'
          onChange={(event) => this.props.onPhoneFieldChange(this.props.index,
            event.target.checked, 'preferred')} />
      </div>
    )
  }
}

PhoneNumberField.propTypes = {
  index: PropTypes.number,
  idPrefix: PropTypes.string,
  phoneFields: PropTypes.shape({
    number: PropTypes.string,
    phone_type: PropTypes.object,
    preferred: PropTypes.bool
  }).isRequired,
  phoneTypes: PropTypes.array.isRequired,
  onPhoneFieldChange: PropTypes.func.isRequired,
  validator: PropTypes.object
}

PhoneNumberField.defaultProps = {
  idPrefix: ''
}
