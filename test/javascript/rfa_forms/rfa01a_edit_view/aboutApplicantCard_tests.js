import React from 'react'
import ReactDOM from 'react-dom'
import {shallow, mount} from 'enzyme'
import {salaryTypes, educationLevels, ethnicityTypes, genderTypes, stateTypes} from './../../helpers/constants'
import AboutApplicant from 'rfa_forms/rfa01a_edit_view/aboutApplicantCard.jsx'
var TestUtils = require('react-dom/test-utils')

describe('Verify More About Applican', () => {
  let aboutApplicantComp, setCardState,
    renderedCardComp, renderedDom
  const applicantFields = {
    highest_education_level: {
      id: '1',
      value: 'High School'
    },
    date_of_birth: '08/15/1991',
    gender: {
      id: '1',
      value: 'Male'
    },
    ethnicity: {
      id: '1',
      value: 'Asian'
    },
    driver_license_number: '3234323454323',
    driver_license_state: {
      id: '1',
      value: 'Alabama'
    },
    email: 'test@test.com'
  }
  beforeEach(() => {
    setCardState = jasmine.createSpy('setParentState')
    aboutApplicantComp = mount(<AboutApplicant
      applicantFields={applicantFields}
      salaryTypes={salaryTypes.items}
      genderTypes={genderTypes.items}
      ethnicityTypes={ethnicityTypes.items}
      educationLevels={educationLevels.items}
      stateTypes={stateTypes.items}
      setParentState={setCardState} />)
  })
  it('High Level Education DropDown Change', () => {
    // spyOn(aboutApplicantComp.instance().props.setParentState, setCardState).and.callThrough()
    let higherEducationField = aboutApplicantComp.find('#highest_education_level')
    higherEducationField.simulate('change', {target: {selectedOptions: [{value: '2', text: 'GED'}]}})
    expect(setCardState).toHaveBeenCalledWith('highest_education_level', {id: '2', value: 'GED'})
  })
  it('Date Of Birth Change', () => {
    let dobField = aboutApplicantComp.find('#date_of_birth')
    dobField.simulate('change', {target: {value: '08/20/1991'}})
    expect(setCardState).toHaveBeenCalledWith('date_of_birth', '08/20/1991')
  })
  it('Gender DropDown Change', () => {
    let genderField = aboutApplicantComp.find('#gender')
    genderField.simulate('change', {target: {selectedOptions: [{value: '2', text: 'Female'}]}})
    expect(setCardState).toHaveBeenCalledWith('gender', {id: '2', value: 'Female'})
  })
  it('Race/Ethnicity DropDown Change', () => {
    let ethnicityField = aboutApplicantComp.find('#ethnicity')
    ethnicityField.simulate('change', {target: {selectedOptions: [{value: '2', text: 'Hispanic'}]}})
    expect(setCardState).toHaveBeenCalledWith('ethnicity', {id: '2', value: 'Hispanic'})
  })
  it('Driver License Number Change', () => {
    let dlNumberField = aboutApplicantComp.find('#driver_license_number')
    dlNumberField.simulate('change', {target: {value: '234567876534'}})
    expect(setCardState).toHaveBeenCalledWith('driver_license_number', '234567876534')
  })
  it('Driver License Sate DropDown Change', () => {
    let DLStateField = aboutApplicantComp.find('#driver_license_state')
    DLStateField.simulate('change', {target: {selectedOptions: [{value: '17', text: 'Illinois'}]}})
    expect(setCardState).toHaveBeenCalledWith('driver_license_state', {id: '17', value: 'Illinois'})
  })
  it('Email Address Change', () => {
    let emailField = aboutApplicantComp.find('#email')
    emailField.simulate('change', {target: {value: 'test2@gmail.com'}})
    expect(setCardState).toHaveBeenCalledWith('email', 'test2@gmail.com')
  })
})
