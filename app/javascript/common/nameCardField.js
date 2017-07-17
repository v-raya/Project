import React from 'react'
import PropTypes from 'prop-types'
import {InputComponent} from './inputFields'
import {DropDownField} from './dropDownField'

export class NameCardField extends React.Component {
  render () {
    return (
      <form>
        <InputComponent gridClassName='col-md-4' id='firstname'
          value={this.props.fieldValues.first_name}
          label='First Name' placeholder='Enter First Name'
          type={'text'} onChange={(event) => this.props.onChange(this.props.index, 'first_name', event.target.value)} />
        <InputComponent gridClassName='col-md-4' id='middleName'
          value={this.props.fieldValues.middle_name}
          label='Middle Name' placeholder='Enter Middle Name'
          type={'text'} onChange={(event) => this.props.onChange(this.props.index, 'middle_name', event.target.value)} />
        <InputComponent gridClassName='col-md-4' id='lastName'
          value={this.props.fieldValues.last_name}
          label='Last Name' placeholder='Enter Last Name'
          type={'text'} onChange={(event) => this.props.onChange(this.props.index, 'last_name', event.target.value)} />
        <DropDownField gridClassName='col-md-4' id='name_type'
          value={this.props.fieldValues.name_type.id}
          selectClassName={'reusable-select'}
          optionList={this.props.nameTypes}
          label={'Name Type'}
          onChange={(event, id) => this.props.onChange(this.props.index, 'name_type', {id: event.target.selectedOptions[0].value, value: event.target.selectedOptions[0].text})} />
      </form>
    )
  }
}

NameCardField.propTypes = {
  nameTypes: PropTypes.array.isRequired,
  fieldValues: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
}
