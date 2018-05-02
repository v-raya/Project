import React from 'react'
import AboutThisResidenceCard from 'rfa_forms/rfa01a_edit_view/aboutThisResidenceCard.jsx'
import Validator from 'helpers/validator'
import {suffixTypes, prefixTypes, languageTypes, residenceTypes, selectedYes} from './../../helpers/constants'
import {shallow, mount} from 'enzyme'
import {othersUsingAddressMailing} from 'constants/defaultFields'

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
    body_of_water_exist: 'true',
    body_of_water_description: '',
    others_using_residence_as_mailing: 'true',
    other_people_using_residence_as_mailing: [{
      name_suffix: null,
      name_prefix: null,
      first_name: '',
      middle_name: '',
      last_name: ''
    }]
  })

  let setParentStateSpy, residenceCardComp, handleClearOnConditionalChangeSpy, validator
  validator = new Validator({})
  beforeEach(() => {
    setParentStateSpy = jasmine.createSpy('setParentState')
    handleClearOnConditionalChangeSpy = jasmine.createSpy('handleClearOnConditionalChange')
    residenceCardComp = shallow(<AboutThisResidenceCard
      handleClearOnConditionalChange={handleClearOnConditionalChangeSpy}
      languageTypes={languageTypes.items}
      residenceTypes={residenceTypes.items}
      aboutResidence={blankAboutThisResidenceFields}
      setParentState={setParentStateSpy}
      validator={validator}
    />)
  })

  it('verify directions to home change', () => {
    let relationShipField = residenceCardComp.find('#directions')
    relationShipField.simulate('change', {target: {value: 'gate way oaks'}})
    expect(setParentStateSpy).toHaveBeenCalledWith('directions_to_home', 'gate way oaks')
  })
  describe('#YesNoRadioComponent', () => {
    let setParentStateSpy, residenceCardComp, handleClearOnConditionalChangeSpy
    beforeEach(() => {
      setParentStateSpy = jasmine.createSpy('setParentState')
      handleClearOnConditionalChangeSpy = jasmine.createSpy('handleClearOnConditionalChange')
      residenceCardComp = mount(<AboutThisResidenceCard
        handleClearOnConditionalChange={handleClearOnConditionalChangeSpy}
        languageTypes={languageTypes.items}
        residenceTypes={residenceTypes.items}
        aboutResidence={blankAboutThisResidenceFields}
        setParentState={setParentStateSpy}
        validator={validator}
      />)
    })
    it('verify body of water exists change', () => {
      let relationShipField = residenceCardComp.find('#body_of_water_existtrue').hostNodes()
      relationShipField.simulate('change', {target: {value: 'false'}})
      expect(handleClearOnConditionalChangeSpy).toHaveBeenCalledWith('body_of_water_exist', 'body_of_water_description', 'false', '')
    })
    it('verify weapons address change', () => {
      let relationShipField = residenceCardComp.find('#weaponstrue').hostNodes()
      relationShipField.simulate('change', {target: {value: 'false'}})
      expect(setParentStateSpy).toHaveBeenCalledWith('weapon_in_home', 'false')
    })
    it('verify other using residence as mailing change', () => {
      let relationShipField = residenceCardComp.find('#others_using_residence_as_mailingtrue').hostNodes()
      relationShipField.simulate('change', {target: {value: 'false'}})
      expect(handleClearOnConditionalChangeSpy).toHaveBeenCalledWith('others_using_residence_as_mailing', 'other_people_using_residence_as_mailing', 'false', [othersUsingAddressMailing])
    })
    it('verify other using residence as mailing change', () => {
      let relationShipField = residenceCardComp.find('#others_using_residence_as_mailingtrue').hostNodes()
      relationShipField.simulate('change', {target: {value: 'true'}})
      expect(handleClearOnConditionalChangeSpy).toHaveBeenCalledWith('others_using_residence_as_mailing', 'other_people_using_residence_as_mailing', 'true', [othersUsingAddressMailing])
    })
  })
  it('verify body of water description', () => {
    let relationShipField = residenceCardComp.find('#body_of_water_description')
    relationShipField.simulate('change', {target: {value: 'Text'}})
    expect(setParentStateSpy).toHaveBeenCalledWith('body_of_water_description', 'Text')
  })

  it('verify residence types address change', () => {
    let relationShipField = residenceCardComp.find('#residenceTypes')
    relationShipField.simulate('change', {target: {options: {'1': {value: '1', text: 'Own'}, selectedIndex: 1}}})
    expect(setParentStateSpy).toHaveBeenCalledWith('residence_ownership', {id: '1', value: 'Own'})
  })

  it('verify languages select change', () => {
    let relationShipField = residenceCardComp.find('.languages')
    relationShipField.simulate('change', [{id: '1', value: 'English'}])
    expect(setParentStateSpy).toHaveBeenCalledWith('home_languages', [{id: '1', value: 'English'}])
  })
})

describe('Verify Physical Address prefix, suffix, first name, middle name and last name', function () {
  let blankAboutThisResidenceFields = {
    home_languages: [{
      id: '',
      value: ''
    }],
    others_using_residence_as_mailing: 'true',
    other_people_using_residence_as_mailing: [othersUsingAddressMailing]
  }

  let setParentStateSpy, residenceCardComp, handleClearOnConditionalChangeSpy
  beforeEach(() => {
    setParentStateSpy = jasmine.createSpy('setParentState')
    handleClearOnConditionalChangeSpy = jasmine.createSpy('handleClearOnConditionalChange')
    spyOn(AboutThisResidenceCard.prototype, 'onChange')
    spyOn(AboutThisResidenceCard.prototype, 'addCard').and.callThrough()
    spyOn(AboutThisResidenceCard.prototype, 'removeCard').and.callThrough()
    residenceCardComp = mount(<AboutThisResidenceCard
      suffixTypes={suffixTypes.items}
      prefixTypes={prefixTypes.items}
      handleClearOnConditionalChange={handleClearOnConditionalChangeSpy}
      languageTypes={languageTypes.items}
      residenceTypes={residenceTypes.items}
      aboutResidence={blankAboutThisResidenceFields}
      setParentState={setParentStateSpy}
      validator={new Validator({})}
    />)
  })
  it('verify prefix change', () => {
    let relationShipField = residenceCardComp.find(
      'select').findWhere(n => n.props().id === 'residence.other_people_using_residence_as_mailing[0].name_prefix')
    residenceCardComp.update()
    relationShipField.simulate('change', {target: {options: {'4': {value: '4', text: 'Dr.'}, selectedIndex: 4}}})
    expect(AboutThisResidenceCard.prototype.onChange).toHaveBeenCalledWith('name_prefix', {id: '4', value: 'Dr.'}, 0)
  })

  it('verify first name', () => {
    let relationShipField = residenceCardComp.find(
      'input[type="text"]').findWhere(n => n.props().id === 'residence.other_people_using_residence_as_mailing[0].first_name')
    residenceCardComp.update()
    relationShipField.simulate('change', {target: {value: 'text'}})
    expect(AboutThisResidenceCard.prototype.onChange).toHaveBeenCalledWith('first_name', 'text', 0)
  })
  it('verify middle name', () => {
    let relationShipField = residenceCardComp.find(
      'input[type="text"]').findWhere(n => n.props().id === 'residence.other_people_using_residence_as_mailing[0].middle_name')
    residenceCardComp.update()
    relationShipField.simulate('change', {target: {value: 'text'}})
    expect(AboutThisResidenceCard.prototype.onChange).toHaveBeenCalledWith('middle_name', 'text', 0)
  })
  it('verify last name', () => {
    let relationShipField = residenceCardComp.find(
      'input[type="text"]').findWhere(n => n.props().id === 'residence.other_people_using_residence_as_mailing[0].last_name')
    residenceCardComp.update()
    relationShipField.simulate('change', {target: {value: 'text'}})
    expect(AboutThisResidenceCard.prototype.onChange).toHaveBeenCalledWith('last_name', 'text', 0)
  })
  it('verify suffix change', () => {
    let relationShipField = residenceCardComp.find(
      'select').findWhere(n => n.props().id === 'residence.other_people_using_residence_as_mailing[0].name_suffix')
    residenceCardComp.update()
    relationShipField.simulate('change', {target: {options: {'2': {value: '2', text: 'II'}, selectedIndex: 2}}})
    expect(AboutThisResidenceCard.prototype.onChange).toHaveBeenCalledWith('name_suffix', {id: '2', value: 'II'}, 0)
  })
  it('verify adding another persons click', () => {
    let addAnotherPersonButton = residenceCardComp.find('button.btn')
    expect(AboutThisResidenceCard.prototype.addCard).not.toHaveBeenCalled()
    addAnotherPersonButton.simulate('click')
    expect(AboutThisResidenceCard.prototype.addCard).toHaveBeenCalled()
    blankAboutThisResidenceFields['other_people_using_residence_as_mailing'].push(othersUsingAddressMailing)
    let personsList = blankAboutThisResidenceFields.other_people_using_residence_as_mailing
    expect(setParentStateSpy).toHaveBeenCalledWith('other_people_using_residence_as_mailing', personsList)
  })
  it('verify removing person information', () => {
    let removeLink = residenceCardComp.find('.remove-btn').at(1)
    expect(AboutThisResidenceCard.prototype.removeCard).not.toHaveBeenCalled()
    removeLink.simulate('click')
    let personsList = blankAboutThisResidenceFields.other_people_using_residence_as_mailing.slice(1)
    expect(AboutThisResidenceCard.prototype.removeCard).toHaveBeenCalled()
    expect(setParentStateSpy).toHaveBeenCalledWith('other_people_using_residence_as_mailing', personsList)
  })
})
