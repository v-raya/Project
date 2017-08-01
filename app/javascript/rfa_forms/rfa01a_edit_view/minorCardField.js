import React from 'react'
import {InputComponent} from 'components/common/inputFields'
import {DropDownField} from 'components/common/dropDownField'
import {getDictionaryId, dictionaryNilSelect} from 'helpers/commonHelper.jsx'
import {yesNo} from 'constants/constants'

export class MinorCardField extends React.Component {
  render () {
    const minor = this.props.minorChildren

    return (
      <form>
        <DropDownField gridClassName='col-md-4' id='relationship_to_applicant'
          selectClassName='reusable-select'
          optionList={this.props.relationshipTypes}
          label='Relationship Type' onChange={(event) => this.props.onFieldChange(this.props.index, dictionaryNilSelect(event.target.selectedOptions[0]), 'relationship_to_applicant')} />
        <DropDownField gridClassName='col-md-4' id='child_related_to'
          selectClassName='reusable-select'
          optionList={this.props.relationshipTypes}
          label='To whom' onChange={(event) => this.props.onFieldChange(this.props.index, dictionaryNilSelect(event.target.selectedOptions[0]), 'child_related_to')} />
        <DropDownField gridClassName='col-md-3' id='gender'
          selectClassName='reusable-select'
          optionList={this.props.genderTypes}
          label='Gender'
          onChange={(event) => this.props.onFieldChange(this.props.index, dictionaryNilSelect(event.target.selectedOptions[0]), 'gender')} />
        <InputComponent gridClassName='col-md-4' id='firstName' value={minor.nameField.firstName}
          label='First Name' placeholder='Enter First Name'
          type='text' onChange={(event) => this.props.handleNameFieldInput(this.props.index, event.target.value, ('firstName'))} />
        <InputComponent gridClassName='col-md-4' id='middleName' value={minor.nameField.middleName}
          label='Middle Name' placeholder='Enter Middle Name'
          type='text' onChange={(event, id) => this.props.handleNameFieldInput(this.props.index, event.target.value, ('middleName'))} />
        <InputComponent gridClassName='col-md-4' id='lastName' value={minor.nameField.lastName}
          label='Last Name' placeholder='Enter Last Name'
          type='text' onChange={(event, id) => this.props.handleNameFieldInput(this.props.index, event.target.value, ('lastName'))} />
        <InputComponent gridClassName='col-md-4' id='date_of_birth' value={minor.date_of_birth}
          label='Date of Birth' placeholder='Enter Date of Birth'
          type='text' onChange={(event) => this.props.onFieldChange(this.props.index, event.target.value, 'date_of_birth')} />
        <DropDownField id='child_financially_supported' gridClassName='col-md-7' value={minor.child_financially_supported}
          selectClassName={'reusable-select'}
          optionList={yesNo.items}
          label={'Do you financially support this child?'}
          onChange={(event) => this.props.onFieldChange(this.props.index, event.target.selectedOptions[0].value, 'child_financially_supported')} />
        <DropDownField id='child_adopted' gridClassName='col-md-7' value={minor.child_adopted}
          selectClassName={'reusable-select'}
          optionList={yesNo.items}
          label={'Is this child adopted?'}
          onChange={(event) => this.props.onFieldChange(this.props.index, event.target.selectedOptions[0].value, 'child_adopted')} />
      </form>
    )
  }
}
