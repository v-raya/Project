import React from 'react'
import PropTypes from 'prop-types'
import {InputComponent} from './inputFields'
import {DropDownField} from './dropDownField'
import {CheckboxField} from './checkboxField'

export class PhoneNumberField extends React.Component {
  constructor (props) {
    super(props)
    this.clickClose = this.clickClose.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  clickClose (e) {
    this.props.onClickClose(this.props.index)
  }

  onChange (event, type) {
    this.props.onPhoneFieldChange(this.props.index, event, type)
  }

  render () {
    const phoneFields = this.props.phoneFields
    const phoneTypes = this.props.phoneTypes

    return (
      <div className='row list-item'>
        <span onClick={this.clickClose} className='pull-right glyphicon glyphicon-remove' />
        <form>
          <InputComponent gridClassName='col-md-4' id='number' value={phoneFields.number}
            label='Phone Number' placeholder='Enter Phone Number'
            type='text' onChange={(event) => this.onChange(event.target.value, 'number')} />

          <DropDownField gridClassName='col-md-4' id='phone_type'
            selectClassName='reusable-select'
            optionList={phoneTypes.items} value={phoneFields.phoneType}
            label='Phone Type' onChange={(event) => this.onChange(event.target.value, 'phoneType')} />

          <CheckboxField gridClassName='col-md-4' id={this.props.index} type='checkbox'
            checked={phoneFields.isPreferred}
            value={phoneFields.isPreferred}
            label='Preferred Contact Number'
            onChange={(event) => this.onChange(event.target.checked, 'isPreferred')} />
        </form>
      </div>
    )
  }
}

PhoneNumberField.propTypes = {
  index: PropTypes.number,
  phoneFields: PropTypes.shape({
    number: PropTypes.string,
    phoneType: PropTypes.string,
    isPreferred: PropTypes.bool
  }).isRequired,
  phoneTypes: PropTypes.object.isRequired,
  onPhoneFieldChange: PropTypes.func.isRequired,
  onClickClose: PropTypes.func.isRequired
}
