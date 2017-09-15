import React from 'react'
import PropTypes from 'prop-types'
import {InputComponent} from 'components/common/inputFields'
import {DropDownField} from 'components/common/dropDownField'
import {DateOfBirthField} from 'components/common/DateFields.jsx'
import {getDictionaryId, dictionaryNilSelect, FormateDobForDisplay, FormatDoBForPersistance} from 'helpers/commonHelper.jsx'
import Validator from 'helpers/validator'
import Cleave from 'cleave.js/react'

const dateRule = [{rule: 'isValidDate', message: 'date is invalid'}]

export default class AboutApplicant extends React.Component {

  constructor (props) {
    super(props)

    this.validator = this.props.validator.addFieldValidation(
      this.props.idPrefix + 'date_of_birth', dateRule)
  }

  render () {
    const dateRuleId = this.props.idPrefix + 'date_of_birth'

    return (
      <div className='card-body'>
        <div className='row'>
          <form>
            <div className='col-md-12'>
              <DropDownField id='highest_education_level' gridClassName='col-md-4'
                selectClassName='reusable-select'
                value={getDictionaryId(this.props.applicantFields.highest_education_level)}
                optionList={this.props.educationLevels}
                label='Highest Level of Education'
                onChange={(event) => this.props.setParentState('highest_education_level', dictionaryNilSelect(event.target.selectedOptions[0]))} />

              <DateOfBirthField
                gridClassName='col-md-4' label='Date of Birth' id={dateRuleId}
                value={FormateDobForDisplay(this.props.applicantFields.date_of_birth)}
                errors={this.props.validator.fieldErrors(dateRuleId)}
                onChange={(event) =>
                this.props.setParentState('date_of_birth', FormatDoBForPersistance(event.target.value))}
                onBlur={(event) => this.props.validator.validateField(dateRuleId, event.target.value)} />

              <DropDownField gridClassName='col-md-4' id='gender'
                selectClassName='reusable-select'
                value={getDictionaryId(this.props.applicantFields.gender)}
                optionList={this.props.genderTypes}
                label='Gender'
                onChange={(event) => this.props.setParentState('gender', dictionaryNilSelect(event.target.selectedOptions[0]))} />
            </div>
            <div className='col-md-12'>
              <DropDownField gridClassName='col-md-4' id='ethnicity'
                value={getDictionaryId(this.props.applicantFields.ethnicity)}
                selectClassName='reusable-select'
                optionList={this.props.ethnicityTypes}
                label='Race / Ethnicity'
                onChange={(event) => this.props.setParentState('ethnicity', {id: event.target.selectedOptions[0].value, value: event.target.selectedOptions[0].text})} />

              <InputComponent gridClassName='col-md-4' id='driver_license_number'
                value={this.props.applicantFields.driver_license_number}
                label='Driver License number' placeholder=''
                type='text' onChange={(event) => this.props.setParentState('driver_license_number', event.target.value)} />

              <DropDownField gridClassName='col-md-4' id='driver_license_state'
                selectClassName='reusable-select'
                value={getDictionaryId(this.props.applicantFields.driver_license_state)}
                optionList={this.props.stateTypes}
                label='Driver License State'
                onChange={(event) => this.props.setParentState('driver_license_state', dictionaryNilSelect(event.target.selectedOptions[0]))} />
            </div>
            <div className='col-md-12'>
              <InputComponent gridClassName='col-md-4' id='email'
                value={this.props.applicantFields.email}
                label='Email Address (optional)' placeholder=''
                type='text' onChange={(event) => this.props.setParentState('email', event.target.value)} />
            </div>
          </form>
        </div>
      </div>
    )
  }
}

AboutApplicant.propTypes = {
  stateTypes: PropTypes.array.isRequired,
  educationLevels: PropTypes.array.isRequired,
  genderTypes: PropTypes.array.isRequired,
  ethnicityTypes: PropTypes.array.isRequired,
  languageTypes: PropTypes.array.isRequired,
  applicantFields: PropTypes.object.isRequired,
  setParentState: PropTypes.func.isRequired
}
