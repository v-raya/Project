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
    getFocusClassNameSpy

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
                'relationship_to_applicant_freeform': ''
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
        metadata: {submit_enabled: true}
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

  it('tests saveProgress', () => {
    let saveProgressBtn = _Rfa01CEditView.find('#saveProgress')
    saveProgressBtn.simulate('click')
    expect(saveProgressSpy).toHaveBeenCalled()
  })

  it('tests submit', () => {
    let applicantDetailsCard = _Rfa01CEditView.find('#DesiredChildSection').hostNodes()
    let radio = applicantDetailsCard.find('input[type="radio"]').first().simulate('change', {target: {value: 'true'}})
    applicantDetailsCard.find('.col-md-4').at(3).simulate('change', {target: {value: 'abcd'}})
    applicantDetailsCard.find('.col-md-4').at(5).simulate('change', {target: {value: 'Smith'}})
    applicantDetailsCard.find('.dateOfBirthField').hostNodes().simulate('change', {target: {value: '01/11/1988'}})
    let submitBtn = _Rfa01CEditView.find('#submitApplication')
    submitBtn.simulate('click')
    expect(submitSpy).toHaveBeenCalled()
  })
})
