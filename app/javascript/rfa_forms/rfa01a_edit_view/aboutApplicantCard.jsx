import React from 'react'
import PropTypes from 'prop-types'
import {InputComponent} from 'components/common/inputFields'
import {DropDownField} from 'components/common/dropDownField'
import MaskedInputField from 'components/common/maskedInputField.jsx'
import {getDictionaryId, dictionaryNilSelect, FormateDobForDisplay, FormatDoBForPersistance} from 'helpers/commonHelper.jsx'

export default class AboutApplicant extends React.Component {
  render () {
    return (
      <div className='card-body'>
        <div className='row'>
          <form>
            <DropDownField id='highest_education_level' gridClassName='col-md-4'
              selectClassName='reusable-select'
              value={getDictionaryId(this.props.applicantFields.highest_education_level)}
              optionList={this.props.educationLevels}
              label='Highest Level of Education'
              onChange={(event) => this.props.setParentState('highest_education_level', dictionaryNilSelect(event.target.selectedOptions[0]))} />

            <MaskedInputField
              gridClassName='col-md-4' label='Date of Birth' id='date_of_birth'
              mask='11/11/1111' name='expiry' placeholder='mm/dd/yyyy'
              value={FormateDobForDisplay(this.props.applicantFields.date_of_birth)}
              blurPlaceholder=''
              focusPlaceholder='__/__/____'
              onChange={(event) => this.props.setParentState('date_of_birth',
                  FormatDoBForPersistance(event.target.value))} />

            <DropDownField gridClassName='col-md-4' id='gender'
              selectClassName='reusable-select'
              value={getDictionaryId(this.props.applicantFields.gender)}
              optionList={this.props.genderTypes}
              label='Gender'
              onChange={(event) => this.props.setParentState('gender', dictionaryNilSelect(event.target.selectedOptions[0]))} />

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

            <InputComponent gridClassName='col-md-4' id='email'
              value={this.props.applicantFields.email}
              label='Email Address (optional)' placeholder=''
              type='text' onChange={(event) => this.props.setParentState('email', event.target.value)} />
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
