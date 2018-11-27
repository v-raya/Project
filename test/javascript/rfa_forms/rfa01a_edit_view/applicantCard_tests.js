import React from 'react'
import Immutable from 'immutable'
import ApplicantCard from 'rfa_forms/rfa01a_edit_view/applicantCard.jsx'
import {ethnicityTypes, languageTypes, genderTypes, educationLevels, salaryTypes, stateTypes, prefixTypes, suffixTypes, nameTypes, relationshipToApplicantTypes} from './../../helpers/constants'
import {shallow, mount} from 'enzyme'
import ShallowRenderer from 'react-test-renderer/shallow'
import Validator from 'helpers/validator.js'

describe('Verify Applicant Card', () => {
  let applicantCardComponent,
    setApplicantsStateSpy,
    getFocusClassNameSpy, applicantFields,
    setFocusStateSpy

  beforeEach(() => {
    setApplicantsStateSpy = jasmine.createSpy('setApplicantsState')
    getFocusClassNameSpy = jasmine.createSpy('getFocusClassName')
    setFocusStateSpy = jasmine.createSpy('getFocusClassName')
    applicantFields = Immutable.fromJS({
      first_name: '',
      middle_name: '',
      last_name: '',
      other_names: [],
      date_of_birth: '',
      driver_license_number: '',
      email: '',
      phones: null
    })
    applicantCardComponent = mount(<ApplicantCard
      index={0}
      applicantFields={applicantFields}
      nameTypes={nameTypes.items}
      suffixTypes={suffixTypes.items}
      prefixTypes={prefixTypes.items}
      phoneTypes={nameTypes.items}
      salaryTypes={salaryTypes.items}
      stateTypes={stateTypes.items}
      educationLevels={educationLevels.items}
      genderTypes={genderTypes.items}
      ethnicityTypes={ethnicityTypes.items}
      languageTypes={languageTypes.items}
      setParentState={setApplicantsStateSpy}
      validator={new Validator({})}
      setFocusState={setFocusStateSpy}
      focusComponentName={'NameCard'}
      getFocusClassName={getFocusClassNameSpy} />)
  })
  it('individual card load', () => {
    expect(applicantCardComponent.length).toEqual(1)
  })
  it('Name Card selection check', () => {
    const namecardComponent = applicantCardComponent.find('.name-section')
    namecardComponent.simulate('click')
    expect(setFocusStateSpy).toHaveBeenCalledWith('NameCard')
  })
  it('About Applicant Card selection check', () => {
    const aboutApplicantComponent = applicantCardComponent.find('.aboutApp-section')
    aboutApplicantComponent.simulate('click')
    expect(setFocusStateSpy).toHaveBeenCalledWith('AboutApplicantCard')
  })
  it('Employment Card selection check', () => {
    const employmentComponent = applicantCardComponent.find('.employment-section')
    employmentComponent.simulate('click')
    expect(setFocusStateSpy).toHaveBeenCalledWith('EmploymentCard')
  })
  it('About Applicant Card selection check', () => {
    const phonecardComponent = applicantCardComponent.find('.phone-section')
    phonecardComponent.simulate('click')
    expect(setFocusStateSpy).toHaveBeenCalledWith('applicants[0].PhoneNumbersCard')
  })
  it('Verify application State Change', () => {
    const namecardComponent = applicantCardComponent.find('.name-section').hostNodes()
    const NameFields = namecardComponent.find('input[type="text"]')
    const firstNameField = NameFields.findWhere(n => n.props().id === 'applicants[0].first_name')
    firstNameField.simulate('change', {target: {value: 'Anuroop'}})
    applicantFields = applicantFields.set('first_name', 'Anuroop')
    expect(setApplicantsStateSpy).toHaveBeenCalledWith(0, applicantFields)
  })
})
