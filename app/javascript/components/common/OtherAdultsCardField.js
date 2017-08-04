import React from 'react'
import {InputComponent} from './inputFields'
import {DropDownField} from './dropDownField'

export class OtherAdultsCardField extends React.Component {
  render () {
    const adult = this.props.otherAdults

    return (
      <form>
        <DropDownField gridClassName='col-md-4' id='relationshipType'
          selectClassName='reusable-select'
          optionList={this.props.relationship_types}
          label='Relationship Type'
          onChange={(event) => this.props.handleRelationshipTypeToApplicant(this.props.index, event.target.value)}
        />
        <DropDownField gridClassName='col-md-4' id='availableApplicants'
          selectClassName='reusable-select'
          optionList={[]}
          label='To Whom'
          // onChange={(event) => this.props.handleToWhom(this.props.index, event.target.value)}
         />
        <InputComponent gridClassName='col-md-4' id='dateOfBirth' value={adult.date_of_birth}
          label='Date of Birth' placeholder='Enter Date of Birth'
          type='text' onChange={(event) => this.props.onFieldChange(this.props.index, event.target.value, 'date_of_birth')} />
        <InputComponent gridClassName='col-md-4' id='firstName' value={adult.first_name}
          label='First Name' placeholder='Enter First Name'
          type='text' onChange={(event) => this.props.onFieldChange(this.props.index, event.target.value, ('first_name'))} />
        <InputComponent gridClassName='col-md-4' id='middleName' value={adult.middle_name}
          label='Middle Name' placeholder='Enter Middle Name'
          type='text' onChange={(event, id) => this.props.onFieldChange(this.props.index, event.target.value, ('middle_name'))} />
        <InputComponent gridClassName='col-md-4' id='lastName' value={adult.last_name}
          label='Last Name' placeholder='Enter Last Name'
          type='text' onChange={(event, id) => this.props.onFieldChange(this.props.index, event.target.value, ('last_name'))} />
      </form>
    )
  }
}
