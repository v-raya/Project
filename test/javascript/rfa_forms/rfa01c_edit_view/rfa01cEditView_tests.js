import React from 'react'
import Rfa01CEditView from 'rfa_forms/rfa01c_edit_view'
import {siblingGroups, ageGroups, marriageTerminationReasons,
  relationshipToApplicantTypes, nameTypes, suffixTypes, prefixTypes,
  salaryTypes, relationshipTypes, applicantrelationTypes, educationLevels,
  ethnicityTypes, genderTypes, schoolGrades, stateTypes, languageTypes,
  residenceTypes, countyTypes, phoneTypes, licenseTypes} from './../../helpers/constants'
import {shallow, mount} from 'enzyme'

describe('Rfa01CEditView test', () => {
  let setFocusStateSpy, submitSpy, _Rfa01CEditView,
    setApplicationStateSpy, saveProgressSpy,
    getFocusClassNameSpy, validateFieldSetErrorStateSpy

  beforeEach(() => {
    const props = {
      user: {county_code: 1},
      'rfa_c1_application':
      {
        'id': 521,
        'child_identified': false,
        'metadata': {'submit_enabled': true},
        'identified_children': [
          {
            'first_name': 'Kimberley',
            'middle_name': 'k',
            'last_name': 'RReily',
            'name_suffix': {
              'value': 'Sr',
              'id': 6
            },
            'date_of_birth': '2000-01-01',
            'gender': {
              'value': 'Male',
              'id': 1
            },
            'relationship_to_applicants': [
              {
                'relationship_to_applicant_freeform': 'child'
              }
            ],
            'school_grade': {
              'value': 'TK',
              'id': 1
            },
            'school_name': 'School name',
            'school_address': {
              'street_address': 'address here',
              'zip': '12345',
              'city': '',
              'state': {
                'value': 'Alabama',
                'id': 'AL'
              }
            }
          }
        ]
      },
      rfa_a01_application: {
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
      },
      rfa_b01_applications: [{
        id: 357,
        applicant_first_name: 'rick',
        applicant_last_name: 'sanchez',
        applicant_middle_name: '',
        metadata: {submit_enabled: true},
        resource_family_name: 'Peterson',
        applicant_name_suffix: null,
        applicant_name_prefix: null,
        ssn: '',
        date_of_birth: '11-11-1984',
        driver_license: '',
        driver_license_state: null,
        residence_address: {
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
        }
      }],
      countyTypes: countyTypes.items,
      suffixTypes: suffixTypes.items,
      prefixTypes: prefixTypes.items,
      nameTypes: nameTypes.items,
      phoneTypes: phoneTypes,
      genderTypes: genderTypes.items,
      siblingGroups: siblingGroups.items,
      ageGroups: ageGroups.items,
      ethnicityTypes: ethnicityTypes.items,
      schoolGrades: educationLevels.items,
      languageTypes: languageTypes.items,
      relationshipToApplicantTypes: relationshipToApplicantTypes.items,
      stateTypes: stateTypes.items,
      license_types: licenseTypes.items,
      salaryTypes: salaryTypes.items,
      residenceTypes: residenceTypes.items,
      relationshipTypes: relationshipTypes,
      marriageTerminationReasons: marriageTerminationReasons.items
    }
    validateFieldSetErrorStateSpy = spyOn(Rfa01CEditView.prototype, 'validateFieldSetErrorState').and.callThrough()
    saveProgressSpy = spyOn(Rfa01CEditView.prototype, 'saveProgress').and.callThrough()
    submitSpy = spyOn(Rfa01CEditView.prototype, 'submit').and.callThrough()
    setApplicationStateSpy = spyOn(Rfa01CEditView.prototype, 'setApplicationState').and.callThrough()
    getFocusClassNameSpy = spyOn(Rfa01CEditView.prototype, 'getFocusClassName').and.callThrough()
    setFocusStateSpy = spyOn(Rfa01CEditView.prototype, 'setFocusState').and.callThrough()

    _Rfa01CEditView = mount(<Rfa01CEditView {...props} />)
  })

  it('tests RFA 01c rendering index', () => {
    expect(_Rfa01CEditView.length).toEqual(1)
  })

  it('tests county change ', () => {
    let countyCard = _Rfa01CEditView.find('#CountyUseOnlySection')
    let countyCardField = countyCard.find('#county').hostNodes()
    countyCardField.simulate('change', {target: {options: {'0': {value: '2', text: 'Alpine'}, selectedIndex: 0}}})
    expect(setApplicationStateSpy).toHaveBeenCalledWith('application_county', { id: '2', value: 'Alpine' })
  })

  it('tests set focus state', () => {
    let desirecChild = _Rfa01CEditView.find('#DesiredChildSection').hostNodes()
    desirecChild.simulate('click')
    expect(setFocusStateSpy).toHaveBeenCalledWith('ChildDesiredMain')
  })

  it('tests validateFieldAndGetError', () => {
    let applicantDetailsCard = _Rfa01CEditView.find('#DesiredChildSection').hostNodes()
    applicantDetailsCard.find('.col-md-4').at(3).simulate('change', {target: {value: 'abcd'}})
    applicantDetailsCard.find('.col-md-4').at(3).simulate('change', {target: {value: null}})
    applicantDetailsCard.find('.col-md-4').at(3).simulate('blur')
    _Rfa01CEditView.instance().validateFieldSetErrorState()
    expect(validateFieldSetErrorStateSpy).toHaveBeenCalled()
  })

  it('tests saveProgress', () => {
    let saveProgressBtn = _Rfa01CEditView.find('#saveProgress')
    saveProgressBtn.simulate('click')
    expect(saveProgressSpy).toHaveBeenCalled()
  })

  it('tests submit', () => {
    let submitBtn = _Rfa01CEditView.find('#submitApplication')
    submitBtn.simulate('click')
    expect(submitSpy).toHaveBeenCalled()
  })
})
