import React from 'react'
import {InputComponent} from './inputFields'
import {DropDownField} from './dropDownField'
import {DateOfBirthField} from './DateFields.jsx'
import {dictionaryNilSelect, FormateDobForDisplay, FormatDoBForPersistance} from 'helpers/commonHelper.jsx'
import {setToWhomOptionList, handleToWhomValue} from 'helpers/cardsHelper.jsx'
import Validator from 'helpers/validator'

const dateValidator = {rule: 'isValidDate', message: 'date is invalid'}

export class OtherAdultsCardField extends React.Component {
  constructor (props) {
    super(props)

    this.props.validator.addFieldValidation(this.props.idPrefix + 'date_of_birth', dateValidator)
  }

  render () {
    const adult = this.props.otherAdults

    const otherAdultsRuleId = this.props.idPrefix + 'date_of_birth'

    return (
      <form>
        <DropDownField gridClassName='col-md-4' id='relationshipType'
          selectClassName='reusable-select'
          optionList={this.props.relationship_types}
          label='Relationship Type'
          value={adult.relationship_to_applicants[0].relationship_to_applicant.id}
          onChange={(event) => this.props.handleRelationshipTypeToApplicant(this.props.index, dictionaryNilSelect(event.target.selectedOptions[0]), 'relationship_to_applicant')} />
        <DropDownField gridClassName='col-md-4' id='availableApplicants'
          selectClassName='reusable-select'
          optionList={setToWhomOptionList(this.props.applicants)}
          value={handleToWhomValue(adult.relationship_to_applicants[0].applicant_id, this.props.applicants).id}
          label='To Whom'
          onChange={(event) => this.props.handleRelationshipTypeToApplicant(this.props.index, event.target.value, 'applicant_id')} />
        <DateOfBirthField gridClassName='col-md-4' label='Date of Birth' id={this.props.idPrefix + 'date_of_birth'}
          value={FormateDobForDisplay(adult.date_of_birth)}
          errors={this.props.validator.fieldErrors(otherAdultsRuleId)}
          onChange={(event) => this.props.onFieldChange(this.props.index,
            FormatDoBForPersistance(event.target.value), 'date_of_birth')}
          onBlur={(event) => this.props.validator.validateField(otherAdultsRuleId, event.target.value)} />
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
