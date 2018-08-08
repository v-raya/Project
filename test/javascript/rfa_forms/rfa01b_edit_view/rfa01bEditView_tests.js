import React from 'react'
import Rfa01BEditView from 'rfa_forms/rfa01b_edit_view'
import {siblingGroups, ageGroups, marriageTerminationReasons,
  relationshipToApplicantTypes, nameTypes, suffixTypes, prefixTypes,
  salaryTypes, relationshipTypes, applicantrelationTypes, educationLevels,
  ethnicityTypes, genderTypes, schoolGrades, stateTypes, languageTypes,
  residenceTypes, countyTypes, phoneTypes, licenseTypes} from './../../helpers/constants'
import {shallow, mount} from 'enzyme'

describe('Rfa01BEditView test', () => {
  let setFocusStateSpy, submitSpy, _Rfa01BEditView, props,
    setApplicationStateSpy, setDisplayStateSpy, saveProgressSpy, validateFieldSetErrorStateSpy,
    handleClearOnConditionalChangeSpy, getFocusClassNameSpy, _Rfa01BEditViewSubmitEnabled,
    rfaB01Application, rfaA01Application, rfaB01ApplicationSubmitEnabled, submitEnabledProps

  beforeEach(() => {
    rfaB01Application = {
      id: 357,
      applicant_first_name: '',
      applicant_last_name: '',
      applicant_middle_name: '',
      resource_family_name: 'Peterson'
    }

    rfaB01ApplicationSubmitEnabled = {
      id: 357,
      applicant_first_name: 'rick',
      applicant_last_name: 'sanchez',
      applicant_middle_name: '',
      metadata: {submit_enabled: true},
      resource_family_name: 'Peterson'
    }

    rfaA01Application = {
      'id': 744,
      application_county: {
        value: 'Los Angeles',
        'id': 19
      },
      'residence': {
        'addresses': [
          {
            'street_address': '4220 Ardwell Way',
            'zip': '95823',
            'city': 'Sacramento',
            'state': {
              'value': 'California',
              'id': 'CA'
            },
            'type': {
              'value': 'Residential',
              'id': 1
            }
          },
          {
            'street_address': '',
            'zip': '',
            'city': '',
            'type': {
              'value': 'Mailing',
              'id': 3
            }
          }
        ],
        'physical_mailing_similar': true,
        'residence_ownership': {
          'value': 'Own',
          'id': 1
        },
        'weapon_in_home': true,
        'body_of_water_exist': false,
        'body_of_water_description': '',
        'others_using_residence_as_mailing': false,
        'directions_to_home': '',
        'home_languages': [
          {
            'value': 'American Sign Language',
            'id': 1
          }
        ]
      },
      'applicants': [
        {
          'id': 396,
          'first_name': 'lkj',
          'middle_name': '',
          'last_name': 'lj',
          'other_names': [],
          'date_of_birth': '1111-11-11',
          'driver_license_number': '',
          'email': '',
          'phones': [
            {
              'phone_type': {
                'value': 'Home',
                'id': 2
              },
              'number': '1111111111',
              'preferred': false
            }
          ]
        }
      ],
      'child_desired': {
        'child_identified': true,
        'child_in_home': false,
        'preferred_ages': []
      },
      'is_initial_application': false,
      metadata: {submit_enabled: true}
    }

    props = {
      user: {county_code: 1},
      rfa_a01_application: rfaA01Application,
      rfa_b01_application: rfaB01Application,
      countyTypes: countyTypes.items,
      suffixTypes: suffixTypes.items,
      prefixTypes: prefixTypes.items,
      nameTypes: nameTypes.items,
      phoneTypes: phoneTypes,
      genderTypes: genderTypes.items,
      siblingGroups: siblingGroups.items,
      ageGroups: ageGroups.items,
      ethnicityTypes: ethnicityTypes.items,
      educationLevels: educationLevels.items,
      languageTypes: languageTypes.items,
      relationshipToApplicantTypes: relationshipToApplicantTypes.items,
      stateTypes: stateTypes.items,
      license_types: licenseTypes.items,
      salaryTypes: salaryTypes.items,
      residenceTypes: residenceTypes.items,
      relationshipTypes: relationshipTypes,
      marriageTerminationReasons: marriageTerminationReasons.items
    }

    submitEnabledProps = {
      user: {county_code: 1},
      rfa_a01_application: rfaA01Application,
      rfa_b01_application: rfaB01ApplicationSubmitEnabled,
      countyTypes: countyTypes.items,
      suffixTypes: suffixTypes.items,
      prefixTypes: prefixTypes.items,
      nameTypes: nameTypes.items,
      phoneTypes: phoneTypes,
      genderTypes: genderTypes.items,
      siblingGroups: siblingGroups.items,
      ageGroups: ageGroups.items,
      ethnicityTypes: ethnicityTypes.items,
      educationLevels: educationLevels.items,
      languageTypes: languageTypes.items,
      relationshipToApplicantTypes: relationshipToApplicantTypes.items,
      stateTypes: stateTypes.items,
      license_types: licenseTypes.items,
      salaryTypes: salaryTypes.items,
      residenceTypes: residenceTypes.items,
      relationshipTypes: relationshipTypes,
      marriageTerminationReasons: marriageTerminationReasons.items
    }
    validateFieldSetErrorStateSpy = spyOn(Rfa01BEditView.prototype, 'validateFieldSetErrorState').and.callThrough()
    saveProgressSpy = spyOn(Rfa01BEditView.prototype, 'saveProgress').and.callThrough()
    submitSpy = spyOn(Rfa01BEditView.prototype, 'submit').and.callThrough()
    setApplicationStateSpy = spyOn(Rfa01BEditView.prototype, 'setApplicationState').and.callThrough()
    setDisplayStateSpy = spyOn(Rfa01BEditView.prototype, 'setDisplayState').and.callThrough()
    getFocusClassNameSpy = spyOn(Rfa01BEditView.prototype, 'getFocusClassName').and.callThrough()
    setFocusStateSpy = spyOn(Rfa01BEditView.prototype, 'setFocusState').and.callThrough()
    handleClearOnConditionalChangeSpy = spyOn(Rfa01BEditView.prototype, 'handleClearOnConditionalChange').and.callThrough()

    _Rfa01BEditView = mount(<Rfa01BEditView {...props} />)
    _Rfa01BEditViewSubmitEnabled = mount(<Rfa01BEditView {...submitEnabledProps} />)
  })

  it('tests rendering index', () => {
    expect(_Rfa01BEditView.length).toEqual(1)
    expect(_Rfa01BEditView.find('#submitApplication').length).toEqual(1)
  })

  it('tests rendering index with submitEnabled', () => {
    expect(_Rfa01BEditViewSubmitEnabled.length).toEqual(1)
  })

  it('tests county change ', () => {
    let countyCard = _Rfa01BEditView.find('#CountyUseOnlySection')
    let countyCardField = countyCard.find('#county').hostNodes()
    countyCardField.simulate('change', {target: {options: {'0': {value: '2', text: 'Alpine'}, selectedIndex: 0}}})
    expect(setApplicationStateSpy).toHaveBeenCalledWith('application_county', { id: '2', value: 'Alpine' })
  })

  it('tests set focus state', () => {
    let outOfStateDisclosureCard = _Rfa01BEditView.find('#outOfStateDisclosureCard').hostNodes()
    outOfStateDisclosureCard.simulate('click')
    expect(setFocusStateSpy).toHaveBeenCalledWith('outOfStateDisclosureCard')
  })

  it('tests setDisplayState', () => {
    let disclosureInstructionsCard = _Rfa01BEditView.find('#DisclosureInstructionsCard').hostNodes()
    disclosureInstructionsCard.find('#disclosureInstructionsToggle').simulate('click')
    _Rfa01BEditView.instance().setDisplayState()
    expect(setDisplayStateSpy).toHaveBeenCalledWith('disclosureInstructionsDisplay', true)
  })

  it('tests validateFieldAndGetError', () => {
    let applicantDetailsCard = _Rfa01BEditView.find('#applicantDetailsCard').hostNodes().find('#NameOfResourceFamily').hostNodes()
    applicantDetailsCard.simulate('change', {target: {value: 'resource family'}})
    applicantDetailsCard.simulate('change', {target: {value: null}})
    applicantDetailsCard.simulate('blur')
    _Rfa01BEditView.instance().validateFieldSetErrorState()
    expect(validateFieldSetErrorStateSpy).toHaveBeenCalled()
  })
  it('Header to have applicant full name', () => {
    rfaB01Application.applicant_first_name = 'Applicant'
    rfaB01Application.applicant_last_name = 'Full name'
    _Rfa01BEditView.setProps({
      rfa_b01_application: rfaB01Application
    })
    let rfa01bApplicantName = _Rfa01BEditView.find('.name-field')
    expect(rfa01bApplicantName.props().children).toEqual('Applicant Full name')
  })

  it('tests county change ', () => {
    let countyCard = _Rfa01BEditView.find('#CountyUseOnlySection')
    let countyCardField = countyCard.find('#county').hostNodes()// .simulate('keyup', { keyCode: 38 })
    // countyCardField.simulate('keypress', { keyCode: 13 })
    countyCardField.simulate('change', {target: {options: {'0': {value: '2', text: 'Alpine'}, selectedIndex: 0}}})
    // _Rfa01BEditView.instance().setApplicationState('application_county', { value: 'Alameda', id: 1 })
    expect(setApplicationStateSpy).toHaveBeenCalledWith('application_county', { id: '2', value: 'Alpine' })
  })

  it('tests handle change on true', () => {
    let outOfStateCard = _Rfa01BEditView.find('#outOfStateDisclosureCard')
    let cardComponent = outOfStateCard.find('input[type="radio"]')
    let trueComponent = cardComponent.find('#outOfStateDisclosureCardtrue')
    trueComponent.simulate('change', {target: {value: 'true'}})
    expect(handleClearOnConditionalChangeSpy).toHaveBeenCalledWith('lived_in_other_state', 'true', 'other_states_of_living', [ ])
  })

  it('tests handle change on false', () => {
    let outOfStateCard = _Rfa01BEditView.find('#outOfStateDisclosureCard')
    let cardComponent = outOfStateCard.find('input[type="radio"]')
    let trueComponent = cardComponent.find('#outOfStateDisclosureCardfalse')
    trueComponent.simulate('change', {target: {value: 'false'}})
    expect(handleClearOnConditionalChangeSpy).toHaveBeenCalledWith('lived_in_other_state', 'false', 'other_states_of_living', [ ])
  })

  it('tests saveProgress', () => {
    let saveProgressBtn = _Rfa01BEditView.find('#saveProgress')
    saveProgressBtn.simulate('click')
    expect(saveProgressSpy).toHaveBeenCalled()
  })

  it('tests submit', () => {
    let applicantDetailsCard = _Rfa01BEditView.find('#applicantDetailsCard').hostNodes()
    applicantDetailsCard.find('#NameOfResourceFamily').hostNodes().simulate('change', {target: {value: 'resource family'}})
    applicantDetailsCard.find('#date_of_birth').hostNodes().simulate('change', {target: {value: '11/12/2000'}})
    applicantDetailsCard.find('#applicant_first_name').hostNodes().simulate('change', {target: {value: 'name'}})
    applicantDetailsCard.find('#applicant_last_name').hostNodes().simulate('change', {target: {value: 'last'}})

    applicantDetailsCard.find('#Residentialstreet_address').hostNodes().simulate('change', {target: {value: '4400 Truxel Rd'}})
    applicantDetailsCard.find('#Residentialzip').hostNodes().simulate('change', {target: {value: '34388'}})
    applicantDetailsCard.find('#Residentialcity').hostNodes().simulate('change', {target: {value: 'Springfield'}})
    let state = applicantDetailsCard.find('#Residentialstate_type').hostNodes().simulate('keyDown', { keyCode: 40 })
    state.simulate('keyDown', { keyCode: 13 })
    let submitBtn = _Rfa01BEditView.find('#submitApplication')
    submitBtn.simulate('click')
    expect(submitSpy).toHaveBeenCalled()
  })
})
