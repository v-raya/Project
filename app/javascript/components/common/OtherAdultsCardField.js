import React from 'react'
import _ from 'lodash'
import {InputComponent} from './inputFields'
import {DropDownField} from './dropDownField'
import {DateField} from './dateFields'
import {valuePresent, dictionaryNilSelect, dictionaryNilSelectValue, getDictionaryId, FormatDateForDisplay, FormatDateForPersistance} from 'helpers/commonHelper.jsx'
import {setToWhomOptionList, handleToWhomValue, checkRelationshipFreeformPresence} from 'helpers/cardsHelper.jsx'
import Validator from 'helpers/validator'
import {fieldErrorsAsImmutableSet} from 'helpers/validationHelper.jsx'

const dateValidator = {rule: 'isValidDate', message: 'date is invalid'}

export class OtherAdultsCardField extends React.Component {
  constructor (props) {
    super(props)
    this.isRelationshipToApplicantObject = this.isRelationshipToApplicantObject.bind(this)

    this.relationshipToApplicantID = this.props.idPrefix + 'relationship_to_applicants[0].relationship_to_applicant_freeform'
    this.ApplicantIdID = this.props.idPrefix + 'relationship_to_applicants[0].applicant_id'
    this.otherAdultDOBId = this.props.idPrefix + 'date_of_birth'
    this.otherAdultFirstNameID = this.props.idPrefix + 'first_name'
    this.otherAdultMiddleNameID = this.props.idPrefix + 'middle_name'
    this.otherAdultLastNameID = this.props.idPrefix + 'last_name'

    this.props.validator.addFieldValidation(this.otherAdultDOBId, dateValidator)
    this.props.validator.addFieldValidation(
      this.otherAdultDOBId,
      {rule: 'isRequiredIf',
        message: 'required',
        condition: () => this.isRelationshipToApplicantObject()})
    this.props.validator.addFieldValidation(
      this.ApplicantIdID,
      {rule: 'isRequiredNumberIf',
        message: 'required',
        condition: () => this.isRelationshipToApplicantObject()})
    this.props.validator.addFieldValidation(
      this.otherAdultFirstNameID,
      {rule: 'isRequiredIf',
        message: 'required',
        condition: () => this.isRelationshipToApplicantObject()})
    this.props.validator.addFieldValidation(
      this.otherAdultLastNameID,
      {rule: 'isRequiredIf',
        message: 'required',
        condition: () => this.isRelationshipToApplicantObject()})
  }

  isRelationshipToApplicantObject () {
    const val = this.props.otherAdults.relationship_to_applicants[0].relationship_to_applicant_freeform
    return !_.isEmpty(val)
  }

  componentWillUnmount () {
    const rulesToRemove = [ this.otherAdultDOBId, this.relationshipToApplicantID, this.ApplicantIdID,
      this.otherAdultFirstNameID, this.otherAdultMiddleNameID, this.otherAdultLastNameID]
    this.props.validator.removeValidations(rulesToRemove)
  }

  render () {
    const adult = this.props.otherAdults
    const applicants = this.props.applicants
    const index = this.props.index
    const isRequiredLabel = this.isRelationshipToApplicantObject() ? ' (required)' : ''
    const relationshipLabel = applicants.length > 1
      ? 'Relationship to Applicants:' : 'Relationship to Applicant:'

    return (
      <div>
        <div className='col-md-12' >
          <div>
            <label>{relationshipLabel}</label>
          </div>
          {

            applicants && applicants.map((applicant, subIndex) => {
              return (
                <div key={'adult[' + index + '].applicant[' + subIndex + ']'} >
                  <InputComponent
                    gridClassName='col-md-4'
                    id={'relationship_to_applicants' + index + 'adult' + subIndex + 'relationship_to_applicant_freeform'}
                    value={checkRelationshipFreeformPresence(adult, subIndex)}
                    label={applicant.first_name + ' ' + applicant.last_name}
                    placeholder=''
                    onChange={(event) => this.props.handleRelationshipTypeChange(applicant, event.target.value, index, subIndex, 'relationship_to_applicant_freeform')} />
                </div>
              )
            })
          }
        </div>
        <div className='col-md-12 other-adult-date-of-birth'>
          <DateField gridClassName='col-md-4'
            id={this.otherAdultDOBId}
            label={'Date of Birth' + isRequiredLabel}
            value={FormatDateForDisplay(adult.date_of_birth)}
            errors={fieldErrorsAsImmutableSet(this.props.errors.date_of_birth)}
            onChange={(event) => this.props.onFieldChange(index,
              FormatDateForPersistance(event.target.value), 'date_of_birth')}
            onBlur={(event) => this.props.validator.validateFieldSetErrorState(this.otherAdultDOBId, event.target.value)} />
        </div>
        <div className='col-md-12'>
          <DropDownField gridClassName='col-md-4'
            id={this.props.idPrefix + 'name_prefix'}
            value={getDictionaryId(adult.name_prefix)}
            selectClassName={'reusable-select'}
            optionList={this.props.prefixTypes}
            label={'Prefix'}
            onChange={(event, id) => this.props.onFieldChange(index, dictionaryNilSelect(event.target.options), 'name_prefix')} />
        </div>
        <div className='col-md-12'>
          <InputComponent gridClassName='col-md-4'
            id={this.otherAdultFirstNameID}
            value={adult.first_name}
            label={'First Name' + isRequiredLabel}
            maxLength='20'
            placeholder='Enter First Name'
            type='text'
            onChange={(event, id) => this.props.onFieldChange(index, event.target.value, ('first_name'))} />
          <InputComponent gridClassName='col-md-4'
            id={this.otherAdultMiddleNameID}
            value={adult.middle_name}
            label='Middle Name'
            maxLength='20'
            placeholder='Enter Middle Name'
            type='text'
            onChange={(event, id) => this.props.onFieldChange(index, event.target.value, ('middle_name'))} />
          <InputComponent gridClassName='col-md-4'
            id={this.otherAdultLastNameID}
            value={adult.last_name}
            label={'Last Name' + isRequiredLabel}
            maxLength='25'
            placeholder='Enter Last Name'
            type='text'
            onChange={(event, id) => this.props.onFieldChange(index, event.target.value, ('last_name'))} />
        </div>
        <div className='col-md-12'>
          <DropDownField
            gridClassName='col-md-4'
            id={this.props.idPrefix + 'name_suffix'}
            value={getDictionaryId(adult.name_suffix)}
            selectClassName={'reusable-select'}
            optionList={this.props.suffixTypes}
            label={'Suffix'}
            onChange={(event, id) => this.props.onFieldChange(index, dictionaryNilSelect(event.target.options), 'name_suffix')} />
        </div>
      </div>
    )
  }
}

OtherAdultsCardField.defaultProps = {
  idPrefix: '',
  index: 0,
  errors: {}
}
