import React from 'react'
import {InputComponent} from '../common/inputFields'
import {DropDownField} from '../common/dropDownField'
import {getDictionaryId, dictionaryNilSelect} from '../helpers/commonHelper.jsx'

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

            <InputComponent gridClassName='col-md-4' id='date_of_birth'
              value={this.props.applicantFields.date_of_birth}
              label='Date of Birth' placeholder=''
              type='text' onChange={(event) => this.props.setParentState('date_of_birth', event.target.value)} />

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
