import React from 'react'
import {InputComponent} from './inputFields'
import {DropDownField} from './dropDownField'

export class OtherAdultsCardField extends React.Component {
  render () {
    const adult = this.props.otherAdults

    return (
      <form>
        <DropDownField gridClassName='col-md-4' id='relationshipType' value={adult.relationshipType}
          selectClassName='reusable-select'
          optionList={this.props.relationshipTypes}
          label='Relationship Type' onChange={(event) => this.props.onFieldChange(this.props.index, event.target.value, 'relationshipType')} />
        <DropDownField gridClassName='col-md-4' id='availableApplicants'
          selectClassName='reusable-select'
          optionList={adult.availableApplicants.items}
          label='To Whom' onChange={(event) => this.props.onFieldChange(this.props.index, event.target.value, 'availableApplicant')} />
        <InputComponent gridClassName='col-md-4' id='dateOfBirth' value={adult.dateOfBirth}
          label='Date of Birth' placeholder='Enter Date of Birth'
          type='text' onChange={(event) => this.props.onFieldChange(this.props.index, event.target.value, 'dateOfBirth')} />
        <InputComponent gridClassName='col-md-4' id='firstName' value={adult.nameField.firstName}
          label='First Name' placeholder='Enter First Name'
          type='text' onChange={(event) => this.props.handleNameFieldInput(this.props.index, event.target.value, ('firstName'))} />
        <InputComponent gridClassName='col-md-4' id='middleName' value={adult.nameField.middleName}
          label='Middle Name' placeholder='Enter Middle Name'
          type='text' onChange={(event, id) => this.props.handleNameFieldInput(this.props.index, event.target.value, ('middleName'))} />
        <InputComponent gridClassName='col-md-4' id='lastName' value={adult.nameField.lastName}
          label='Last Name' placeholder='Enter Last Name'
          type='text' onChange={(event, id) => this.props.handleNameFieldInput(this.props.index, event.target.value, ('lastName'))} />
      </form>
    )
  }
}
