import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'
import {DropDownField} from 'components/common/dropDownField'
import {DateField} from '../../components/common/dateFields'
import {getDictionaryId, dictionaryNilSelect, dictionaryNilSelectValue, FormatDateForDisplay, FormatDateForPersistance} from 'helpers/commonHelper.jsx'
import {yesNo} from 'constants/constants'
import {setToWhomOptionList, handleToWhomValue} from 'helpers/cardsHelper.jsx'
import Validator from 'helpers/validator'
import {fieldErrorsAsImmutableSet} from 'helpers/validationHelper.jsx'

const dateValidator = {rule: 'isValidDate', message: 'date is invalid'}

export class MinorCardField extends React.Component {
  constructor (props) {
    super(props)
    this.isRelationShipToApplicantObject = this.isRelationShipToApplicantObject.bind(this)
    this.minorDOBId = this.props.idPrefix + 'date_of_birth'
    this.relationshipToApplicantID = this.props.idPrefix + 'relationship_to_applicants[0].relationship_to_applicant'
    this.ApplicantIdID = this.props.idPrefix + 'relationship_to_applicants[0].applicant_id'
    this.genderID = this.props.idPrefix + 'gender'
    this.childFinanciallySupportedID = this.props.idPrefix + 'child_financially_supported'
    this.childAdoptedID = this.props.idPrefix + 'child_adopted'
    this.props.validator.addFieldValidation(this.minorDOBId, dateValidator)
    this.props.validator.addFieldValidation(this.minorDOBId,
      {rule: 'isRequiredIf',
        message: 'required',
        condition: () => this.isRelationShipToApplicantObject()})
    this.props.validator.addFieldValidation(this.relationshipToApplicantID,
      {rule: 'isRequiredIf',
        message: 'required',
        condition: () => this.isRelationShipToApplicantObject()})
    this.props.validator.addFieldValidation(this.ApplicantIdID,
      {rule: 'isRequiredIf',
        message: 'required',
        condition: () => this.isRelationShipToApplicantObject()})
    this.props.validator.addFieldValidation(this.genderID,
      {rule: 'isRequiredIf',
        message: 'required',
        condition: () => this.isRelationShipToApplicantObject()})
    this.props.validator.addFieldValidation(this.childFinanciallySupportedID,
      {rule: 'isRequiredIf',
        message: 'required',
        condition: () => this.isRelationShipToApplicantObject()})
    this.props.validator.addFieldValidation(this.childAdoptedID,
      {rule: 'isRequiredIf',
        message: 'required',
        condition: () => this.isRelationShipToApplicantObject()})
  }
  isRelationShipToApplicantObject () {
    const val = this.props.minorChild.relationship_to_applicants[0].relationship_to_applicant
    return _.isObject(val)
  }

  componentWillUnmount () {
    const rulesToRemove = [this.minorDOBId, this.relationshipToApplicantID,
      this.ApplicantIdID, this.genderID, this.childFinanciallySupportedID, this.childAdoptedID]
    this.props.validator.removeValidations(rulesToRemove)
  }

  render () {
    const minor = this.props.minorChild
    const isRelationShipToApplicantObject = this.isRelationShipToApplicantObject()
    return (
      <form>
        <DropDownField gridClassName='col-md-4'
          id='relationship_to_applicant'
          selectClassName='reusable-select'
          optionList={this.props.relationshipToApplicantTypes}
          value={getDictionaryId(minor.relationship_to_applicants[0].relationship_to_applicant)}
          label={isRelationShipToApplicantObject ? 'Relationship Type (required)' : 'Relationship Type'}
          onChange={(event) => this.props.handleRelationshipTypeToApplicant(this.props.index, dictionaryNilSelect(event.target.options), 'relationship_to_applicant')} />
        <DropDownField gridClassName='col-md-4'
          id='applicant_id'
          selectClassName='reusable-select'
          optionList={setToWhomOptionList(this.props.applicants)}
          label={isRelationShipToApplicantObject ? 'To Whom (required)' : 'To Whom'}
          value={handleToWhomValue(minor.relationship_to_applicants[0].applicant_id, this.props.applicants).id}
          onChange={(event) => this.props.handleRelationshipTypeToApplicant(this.props.index, dictionaryNilSelectValue(event.target.options), 'applicant_id')} />
        <DateField gridClassName='col-md-4'
          id={this.props.idPrefix + 'date_of_birth'}
          label={isRelationShipToApplicantObject ? 'Date of Birth (required)' : 'Date of Birth'}
          value={FormatDateForDisplay(minor.date_of_birth)}
          errors={fieldErrorsAsImmutableSet(this.props.errors.date_of_birth)}
          onChange={(event) => this.props.onFieldChange(this.props.index,
            FormatDateForPersistance(event.target.value), 'date_of_birth')}
          onBlur={(event) => this.props.validator.validateFieldSetErrorState(this.minorDOBId, event.target.value)} />
        <DropDownField gridClassName='col-md-4'
          id='minor_gender'
          selectClassName='reusable-select'
          optionList={this.props.genderTypes}
          value={getDictionaryId(minor.gender)}
          label={isRelationShipToApplicantObject ? 'Gender (required)' : 'Gender'}
          onChange={(event) => this.props.onFieldChange(this.props.index, dictionaryNilSelect(event.target.options), 'gender')} />
        <DropDownField gridClassName='col-md-4'
          id='child_financially_supported'
          value={minor.child_financially_supported}
          selectClassName={'reusable-select'}
          optionList={yesNo.items}
          label={isRelationShipToApplicantObject ? 'Do you financially support this child? (required)' : 'Do you financially support this child?'}
          onChange={(event) => this.props.onFieldChange(this.props.index, dictionaryNilSelectValue(event.target.options), 'child_financially_supported')} />
        <DropDownField gridClassName='col-md-4'
          id='child_adopted'
          value={minor.child_adopted}
          selectClassName={'reusable-select'}
          optionList={yesNo.items}
          label={isRelationShipToApplicantObject ? 'Is this child adopted? (required)' : 'Is this child adopted?'}
          onChange={(event) => this.props.onFieldChange(this.props.index, dictionaryNilSelectValue(event.target.options), 'child_adopted')} />
      </form>
    )
  }
}

MinorCardField.propTypes = {
  index: PropTypes.number,
  minorChild: PropTypes.object.isRequired,
  applicants: PropTypes.array.isRequired,
  relationshipToApplicantTypes: PropTypes.array,
  genderTypes: PropTypes.array,
  handleRelationshipTypeToApplicant: PropTypes.func,
  onFieldChange: PropTypes.func
}

MinorCardField.defaultProps = {
  idPrefix: '',
  errors: {}
}
