import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'
import {DropDownField} from 'components/common/dropDownField'
import {DateField} from '../../components/common/dateFields'
import {InputComponent} from 'components/common/inputFields'
import {getDictionaryId, dictionaryNilSelect, dictionaryNilSelectValue, FormatDateForDisplay, FormatDateForPersistance, checkArrayObjectPresence} from 'helpers/commonHelper.jsx'
import {yesNo} from 'constants/constants'
import {setToWhomOptionList, handleToWhomValue, checkRelationshipFreeformPresence} from 'helpers/cardsHelper.jsx'
import Validator from 'helpers/validator'
import YesNoRadioComponent from 'components/common/yesNoFields'
import {fieldErrorsAsImmutableSet} from 'helpers/validationHelper.jsx'

const dateValidator = {rule: 'isValidDate', message: 'date is invalid'}

export class MinorCardField extends React.Component {
  constructor (props) {
    super(props)
    this.isRelationShipToApplicantObject = this.isRelationShipToApplicantObject.bind(this)

    this.minorDOBId = this.props.idPrefix + 'date_of_birth'
    this.relationshipToApplicantID = this.props.idPrefix + 'relationship_to_applicants[0].relationship_to_applicant_freeform'
    this.genderID = this.props.idPrefix + 'gender'
    this.childFinanciallySupportedID = this.props.idPrefix + 'relationship_to_applicants[0].child_financially_supported'
    this.childAdoptedID = this.props.idPrefix + 'relationship_to_applicants[0].child_adopted'

    this.props.validator.addFieldValidation(this.minorDOBId, dateValidator)
    this.props.validator.addFieldValidation(this.minorDOBId,
      {rule: 'isRequiredIf',
        message: 'required',
        condition: () => this.isRelationShipToApplicantObject()})
    this.props.validator.addFieldValidation(this.relationshipToApplicantID,
      {rule: 'isRequiredIf',
        message: 'required',
        condition: () => this.isRelationShipToApplicantObject()})
    this.props.validator.addFieldValidation(this.genderID,
      {rule: 'isRequiredIf',
        message: 'required',
        condition: () => this.isRelationShipToApplicantObject()})
    this.props.validator.addFieldValidation(this.childFinanciallySupportedID,
      {rule: 'isRequiredBooleanIf',
        message: 'required',
        condition: () => this.isRelationShipToApplicantObject()})
    this.props.validator.addFieldValidation(this.childAdoptedID,
      {rule: 'isRequiredBooleanIf',
        message: 'required',
        condition: () => this.isRelationShipToApplicantObject()})
  }
  isRelationShipToApplicantObject () {
    const val = this.props.minorChild.relationship_to_applicants[0].relationship_to_applicant_freeform
    return !_.isEmpty(val)
  }

  componentWillUnmount () {
    const rulesToRemove = [this.minorDOBId, this.relationshipToApplicantID,
      this.ApplicantIdID, this.genderID, this.childFinanciallySupportedID, this.childAdoptedID]
    this.props.validator.removeValidations(rulesToRemove)
  }

  render () {
    let index = this.props.index
    let minor = this.props.minorChild
    let applicants = this.props.applicants

    const isRequiredLabel = this.isRelationShipToApplicantObject() ? ' (required)' : ''
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
                <div key={'child[' + index + '].applicant[' + subIndex + ']'} >
                  <InputComponent
                    gridClassName='col-md-4'
                    id={'relationship_to_applicant' + index + 'child' + subIndex + 'relationship_to_applicant_freeform'}
                    value={checkRelationshipFreeformPresence(minor, subIndex)}
                    label={applicant.first_name + ' ' + applicant.last_name}
                    placeholder=''
                    onChange={(event) => this.props.handleRelationshipTypeChange(applicant, event.target.value, index, subIndex, 'relationship_to_applicant_freeform')} />
                  <YesNoRadioComponent
                    label={'Do you financially support this child?' + isRequiredLabel}
                    idPrefix={'child_financially_supported' + index + 'child' + subIndex}
                    value={minor.relationship_to_applicants[subIndex] && minor.relationship_to_applicants[subIndex].child_financially_supported}
                    selectClassName={'reusable-select'}
                    optionList={yesNo.items}
                    onFieldChange={(event) => this.props.handleRelationshipTypeChange(applicant, event.target.value, index, subIndex, 'child_financially_supported')} />
                  <YesNoRadioComponent
                    idPrefix={'child_adopted' + index + 'child' + subIndex}
                    value={minor.relationship_to_applicants[subIndex] && minor.relationship_to_applicants[subIndex].child_adopted}
                    selectClassName={'reusable-select'}
                    optionList={yesNo.items}
                    label={'Is this child adopted?' + isRequiredLabel}
                    onFieldChange={(event) => this.props.handleRelationshipTypeChange(applicant, event.target.value, index, subIndex, 'child_adopted')} />
                </div>
              )
            })
          }
        </div>
        <div className='col-md-12' >
          <div>
            <label>{'Child Information:'}</label>
          </div>
          <div className='col-md-12'>
            <DateField gridClassName='col-md-3'
              id={this.props.idPrefix + 'date_of_birth'}
              label={'Date of Birth' + isRequiredLabel}
              value={FormatDateForDisplay(minor.date_of_birth)}
              errors={fieldErrorsAsImmutableSet(this.props.errors.date_of_birth)}
              onChange={(event) => this.props.onFieldChange(index,
                FormatDateForPersistance(event.target.value), 'date_of_birth')}
              onBlur={(event) => this.props.validator.validateFieldSetErrorState(this.minorDOBId, event.target.value)} />
            <DropDownField gridClassName='col-md-3'
              id={this.props.idPrefix + 'minor_gender'}
              selectClassName='reusable-select'
              optionList={this.props.genderTypes}
              value={getDictionaryId(minor.gender)}
              label={'Gender' + isRequiredLabel}
              onChange={(event) => this.props.onFieldChange(index, dictionaryNilSelect(event.target.options), 'gender')} />
          </div>
        </div>
      </div>
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
  index: 0,
  errors: {}
}
