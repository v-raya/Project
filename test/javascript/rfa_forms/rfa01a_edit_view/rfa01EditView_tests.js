import React from 'react'
import Rfa01EditView from 'rfa_forms/rfa01a_edit_view'
import {siblingGroups, ageGroups, marriageTerminationReasons,
  relationshipToApplicantTypes, nameTypes, suffixTypes, prefixTypes,
  salaryTypes, relationshipTypes, applicantrelationTypes, educationLevels,
  ethnicityTypes, genderTypes, schoolGrades, stateTypes, languageTypes,
  residenceTypes, countyTypes, phoneTypes, licenseTypes} from './../../helpers/constants'
import {shallow, mount} from 'enzyme'

describe('Rfa01EditView test', () => {
  let setFocusStateSpy, getFocusClassNameSpy, setDisplayStateSpy, submitSpy,
    saveProgressSpy, _Rfa01EditView, setApplicationStateSpy

  beforeEach(() => {
    const props = {
      user: {county_code: 51},
      application: {
        'id': 744,
        // 'application_county': {
        //   'value': 'Mendocino',
        //   'id': 23
        // },
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
        'is_initial_application': false,
        metadata: { submit_enabled: false }
      },
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

    submitSpy = spyOn(Rfa01EditView.prototype, 'submit').and.callThrough()
    saveProgressSpy = spyOn(Rfa01EditView.prototype, 'saveProgress').and.callThrough()
    getFocusClassNameSpy = spyOn(Rfa01EditView.prototype, 'getFocusClassName').and.callThrough()
    setFocusStateSpy = spyOn(Rfa01EditView.prototype, 'setFocusState').and.callThrough()
    setApplicationStateSpy = spyOn(Rfa01EditView.prototype, 'setApplicationState').and.callThrough()
    _Rfa01EditView = mount(<Rfa01EditView {...props} />)
  })

  it('tests submit', () => {
    expect(_Rfa01EditView.length).toEqual(1)
  })

  it('tests setFocusState', () => {
    let minorsCard = _Rfa01EditView.find('#minorsSection').hostNodes()
    minorsCard.simulate('click')
    expect(setFocusStateSpy).toHaveBeenCalledWith('minorsSection')
  })

  it('tests saveProgress', () => {
    let saveProgressBtn = _Rfa01EditView.find('#saveProgress')
    saveProgressBtn.simulate('click')
    expect(saveProgressSpy).toHaveBeenCalled()
  })

  it('tests county change ', () => {
    let countyCard = _Rfa01EditView.find('#CountyUseOnlySection')
    let countyCardField = countyCard.find('#county').hostNodes()// .simulate('keyup', { keyCode: 38 })
    // countyCardField.simulate('keypress', { keyCode: 13 })
    countyCardField.simulate('change', {target: {options: {'0': {value: '2', text: 'Alpine'}, selectedIndex: 0}}})
    // _Rfa01BEditView.instance().setApplicationState('application_county', { value: 'Alameda', id: 1 })
    expect(setApplicationStateSpy).toHaveBeenCalledWith('application_county', { id: '2', value: 'Alpine' })
  })

  it('tests sidebar links to be 8 before applicant is added', () => {
    let sideBar = _Rfa01EditView.find('.side-barrfa01a').hostNodes()
    let navLinks = sideBar.find('.navlink')
    expect(navLinks.length).toEqual(8)
    _Rfa01EditView.find('#addAnotherApplicant').simulate('click')
    sideBar = _Rfa01EditView.find('.side-barrfa01a').hostNodes()
    navLinks = sideBar.find('.navlink')
    expect(navLinks.length).toEqual(9)
    _Rfa01EditView.find('#addAnotherApplicant').simulate('click')
    sideBar = _Rfa01EditView.find('.side-barrfa01a').hostNodes()
    navLinks = sideBar.find('.navlink')
    expect(navLinks.length).toEqual(9)
  })
})
