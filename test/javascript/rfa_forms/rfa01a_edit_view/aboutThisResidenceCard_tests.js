import React from 'react'
import AboutThisResidenceCard from 'rfa_forms/rfa01a_edit_view/aboutThisResidenceCard.jsx'
import {languageTypes, residenceTypes} from './../../helpers/constants'
import {shallow, mount} from 'enzyme'

describe('Verify Physical Address', function () {
  const blankAboutThisResidenceFields = Object.freeze({
    residence_ownership_type: {
      id: '',
      value: ''
    },
    home_languages: [{
      id: '',
      value: ''
    }],
    directions_to_home: '',
    weapon_in_home: '',
    body_of_water_exist: '',
    body_of_water_description: '',
    others_using_residence_as_mailing: '',
    other_people_using_residence_as_mailing: [{
      first_name: '',
      middle_name: '',
      last_name: ''
    }]
  })

  let setParentStateSpy, residenceCardComp, onChangeSpy
  beforeEach(() => {
    setParentStateSpy = jasmine.createSpy('setParentState')
    onChangeSpy = jasmine.createSpy('')

    residenceCardComp = shallow(<AboutThisResidenceCard

      languageTypes={languageTypes}
      residenceTypes={residenceTypes}
      aboutResidence={blankAboutThisResidenceFields}
      setParentState={setParentStateSpy}
    />)
  })

  // const aboutResidenceCard = new ShallowRenderer()

  it('verify street address', () => {
    let relationShipField = residenceCardComp.find('#languagesSpoken')
    relationShipField.simulate('change', {target: {selectedOptions: [{value: '1', text: 'English'}]}})
    expect(setParentStateSpy).toHaveBeenCalledWith('home_languages', [{id: '1', value: 'English'}])
  })

  it('verify directions to home', () => {
    let relationShipField = residenceCardComp.find('#directions')
    relationShipField.simulate('change', {target: {value: 'gate way oaks'}})
    expect(setParentStateSpy).toHaveBeenCalledWith('directions_to_home', 'gate way oaks')
  })

  it('verify directions to home', () => {
    let relationShipField = residenceCardComp.find('#body_of_water_exist')
    relationShipField.simulate('change', {target: {selectedOptions: [{value: '2', text: 'yes'}]}})
    expect(setParentStateSpy).toHaveBeenCalledWith('body_of_water_exist', '2')
  })

  it('verify directions to home', () => {
    let relationShipField = residenceCardComp.find('#body_of_water_description')
    relationShipField.simulate('change', {target: {value: 'gate way oaks'}})
    expect(setParentStateSpy).toHaveBeenCalledWith('body_of_water_description', 'gate way oaks')
  })

  it('verify directions to home', () => {
    let relationShipField = residenceCardComp.find('#others_using_residence_as_mailing')
    relationShipField.simulate('change', {target: {selectedOptions: [{value: '2', text: 'yes'}]}})
    expect(setParentStateSpy).toHaveBeenCalledWith('others_using_residence_as_mailing', '2')
  })

  it('verify street address', () => {
    let relationShipField = residenceCardComp.find('#residenceTypes')
    relationShipField.simulate('change', {target: {selectedOptions: [{value: '1', text: 'Own'}]}})
    expect(setParentStateSpy).toHaveBeenCalledWith('residence_ownership', {id: '1', value: 'Own'})
  })
  it('verify street address', () => {
    let relationShipField = residenceCardComp.find('#weapons')
    relationShipField.simulate('change', {target: {selectedOptions: [{value: '2', text: 'yes'}]}})
    expect(setParentStateSpy).toHaveBeenCalledWith('weapon_in_home', '2')
  })
  it('verify first name', () => {
    let relationShipField = residenceCardComp.find('#firstName')
    spyOn(residenceCardComp.instance(), 'onChange').and.callThrough()
    relationShipField.simulate('change', {target: {value: 'Text'}})
    // expect(onChangeSpy).toHaveBeenCalledWith('firstName', 'Text')
    expect(residenceCardComp.instance().onChange).toHaveBeenCalledWith('first_name', 'Text')
  })
  it('verify middle name', () => {
    let relationShipField = residenceCardComp.find('#middleName')
    spyOn(residenceCardComp.instance(), 'onChange').and.callThrough()
    relationShipField.simulate('change', {target: {value: 'Text'}})
    // expect(onChangeSpy).toHaveBeenCalledWith('firstName', 'Text')
    expect(residenceCardComp.instance().onChange).toHaveBeenCalledWith('middle_name', 'Text')
  })
  it('verify last name', () => {
    let relationShipField = residenceCardComp.find('#lastName')
    spyOn(residenceCardComp.instance(), 'onChange').and.callThrough()
    relationShipField.simulate('change', {target: {value: 'Text'}})
    // expect(onChangeSpy).toHaveBeenCalledWith('firstName', 'Text')
    expect(residenceCardComp.instance().onChange).toHaveBeenCalledWith('last_name', 'Text')
  })
})
