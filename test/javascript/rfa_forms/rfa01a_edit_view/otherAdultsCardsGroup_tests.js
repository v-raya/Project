import React from 'react'
import OtherAdultsCardsGroup from 'rfa_forms/rfa01a_edit_view/OtherAdultsCardsGroup.js'
import {shallow, mount} from 'enzyme'
import {relationshipTypes, suffixTypes, prefixTypes} from '../../helpers/constants'
import {otherAdultsDefaults} from 'constants/defaultFields'
import Validator from 'helpers/validator'

describe('Verify other adults Component View', function () {
  let component, componentMount, props, setParentStateSpy,
    otherAdultsCardCompWithoutOtherAdults, setFocusStateSpy,
    getFocusClassNameSpy, handleRelationshipTypeChangeSpy,
    onFieldChangeSpy, validator, otherAdultsCardCompWithOtherAdultsToDelete

  const applicants = [{
    first_name: 'gdfghfhgv',
    last_name: 'hgbhg',
    middle_name: ''
  }]

  const OtherAdultsCard = {
    relationship_to_applicants: [
      {
        applicant_id: null,
        relationship_to_applicant_freeform: '',
        relationship_to_applicant: {
          'id': 0,
          'value': ''
        }
      }
    ],
    index: 0,
    'first_name': '',
    'middle_name': '',
    'last_name': '',
    date_of_birth: '2017-01-01'
  }

  const OtherAdultsCardToDelete = {
    to_delete: true,
    relationship_to_applicants: [
      {applicant_id: null,
        relationship_to_applicant: {
          'id': 0,
          'value': ''}
      }
    ],
    index: 0,
    'first_name': '',
    'middle_name': '',
    'last_name': '',
    date_of_birth: '2017-01-01'
  }

  beforeEach(() => {
    setParentStateSpy = jasmine.createSpy('setParentState')
    setFocusStateSpy = jasmine.createSpy('setFocusState')
    getFocusClassNameSpy = jasmine.createSpy('getFocusClassName')

    handleRelationshipTypeChangeSpy = jasmine.createSpy('handleRelationshipTypeChange')
    onFieldChangeSpy = jasmine.createSpy('onFieldChange')
    validator = new Validator({})
    props = {
      otherAdults: [OtherAdultsCard],
      suffixTypes: suffixTypes.items,
      prefixTypes: prefixTypes.items,
      applicants: applicants,
      relationship_types: relationshipTypes,
      relationshipToApplicantTypes: relationshipTypes,
      focusComponentName: 'ApplicantMaritalHistoryCardGroup',
      setParentState: setParentStateSpy,
      onFieldChange: onFieldChangeSpy,
      setFocusState: setFocusStateSpy,
      getFocusClassName: getFocusClassNameSpy,
      handleRelationshipTypeChange: handleRelationshipTypeChangeSpy,
      validator: validator
    }
    component = mount(
      <OtherAdultsCardsGroup {...props} />
    )
    componentMount = mount(<OtherAdultsCardsGroup {...props} />)

    otherAdultsCardCompWithoutOtherAdults = mount(<OtherAdultsCardsGroup
      otherAdults={[]}
      suffixTypes={suffixTypes.items}
      prefixTypes={prefixTypes.items}
      applicants={applicants}
      relationship_types={relationshipTypes}
      focusComponentName='ApplicantMaritalHistoryCardGroup'
      relationshipToApplicantTypes={relationshipTypes}
      setParentState={setParentStateSpy}
      onFieldChange={onFieldChangeSpy}
      setFocusState={setFocusStateSpy}
      getFocusClassName={getFocusClassNameSpy}
      handleRelationshipTypeChange={handleRelationshipTypeChangeSpy}
      validator={validator} />)

    otherAdultsCardCompWithOtherAdultsToDelete = mount(<OtherAdultsCardsGroup
      otherAdults={[OtherAdultsCardToDelete]}
      suffixTypes={suffixTypes.items}
      prefixTypes={prefixTypes.items}
      applicants={applicants}
      relationship_types={relationshipTypes}
      focusComponentName='ApplicantMaritalHistoryCardGroup'
      relationshipToApplicantTypes={relationshipTypes}
      setParentState={setParentStateSpy}
      onFieldChange={onFieldChangeSpy}
      setFocusState={setFocusStateSpy}
      getFocusClassName={getFocusClassNameSpy}
      handleRelationshipTypeChange={handleRelationshipTypeChangeSpy}
      validator={validator} />)
  })

  describe('Verify other adult card Component View', () => {
    it('has simulates relationship field change', function () {
      componentMount.update()
      spyOn(componentMount.instance(), 'handleRelationshipTypeChange').and.callThrough()
      let relationShipField = componentMount.find('.col-md-12').first().find('#relationship_to_applicants0adult0relationship_to_applicant_freeform').hostNodes()
      relationShipField.simulate('change', {target: {value: 'Sibling'}})

      expect(setParentStateSpy).toHaveBeenCalledWith('other_adults', [ Object({ relationship_to_applicants: [ Object({ applicant_id: null, relationship_to_applicant_freeform: 'Sibling', relationship_to_applicant: Object({ id: 0, value: '' }) }) ], index: 0, first_name: '', middle_name: '', last_name: '', date_of_birth: '2017-01-01' }) ])
    })
  })

  describe('Verify other adults Component View', () => {
    it('has class name', function () {
      expect(component.find('.card-body').length).toEqual(1)
    })
    it('expect children to be array', function () {
      expect(component.children.length).toEqual(1)
    })

    it('expect default props to be used', function () {
      expect(otherAdultsCardCompWithoutOtherAdults.find('.card-body').length).toEqual(1)
    })
    it('expect to_delete', function () {
      expect(otherAdultsCardCompWithOtherAdultsToDelete.find('.card-body').length).toEqual(1)
    })
    it('expects set focus to be set on click', () => {
      expect(getFocusClassNameSpy).toHaveBeenCalledWith('otherAdultsSection')
      let componentSection = componentMount.find('#otherAdultsSection')
      componentSection.simulate('click')
      expect(setFocusStateSpy).toHaveBeenCalled()
    })
    it('expects 4 validations', function () {
      expect(component.instance().props.validator.validations.size).toEqual(4)
    })
  })

  describe('when "Add new other adult card" is clicked', () => {
    it('expect add other adult card to be button', function () {
      expect(component.find('button[className="btn btn-default"]').type()).toEqual('button')
    })

    it('calls addCard and resulting otherAdults contains 2 cards', () => {
      spyOn(component.instance(), 'addCard').and.callThrough()
      component.instance().addCard()
      expect(component.instance().addCard).toHaveBeenCalled()

      // build data that parent should be called with
      let newData = []
      newData[0] = OtherAdultsCard
      newData[1] = otherAdultsDefaults

      expect(setParentStateSpy).toHaveBeenCalledWith('other_adults', newData)
    })
  })

  describe('when close other adult card is clicked', () => {
    it('Clears data when 1 adult is present', () => {
      spyOn(component.instance(), 'clickClose').and.callThrough()
      component.find('.remove-btn').simulate('click')

      expect(component.instance().clickClose).toHaveBeenCalled()

      expect(props.otherAdults.length).toEqual(1)
      expect(setParentStateSpy).toHaveBeenCalled()
    })

    it('Deletes other adult when 2 cards are present', () => {
      let newData = []
      newData[0] = OtherAdultsCard
      newData[1] = otherAdultsDefaults
      component.setProps({other_adults: newData})
      expect(component.instance().props.validator.validations.size).toEqual(4)
      spyOn(component.instance(), 'clickClose').and.callThrough()
      component.find('.remove-btn').at(0).simulate('click')
      component.update()
      spyOn(component.instance().props.validator, 'removeValidations').and.callThrough()
      expect(component.instance().clickClose).toHaveBeenCalledWith(0)
      // component.instance().props.validator.removeValidations()
      component.instance().props.validator.removeValidations(component.instance().props.validator.validations)
      expect(component.instance().props.validator.validations.size).toEqual(4)
      expect(props.otherAdults.length).toEqual(1)
    })

    it('Verify application State Change', () => {
      let NameFields = componentMount.find('input[type="text"]')
      let lastNameField = NameFields.findWhere(n => n.props().id === 'other_adults[0].last_name')
      lastNameField.simulate('change', {target: {value: 'dude'}})
      expect(setParentStateSpy).toHaveBeenCalledWith('other_adults', [ Object({ relationship_to_applicants: [ Object({ applicant_id: null, relationship_to_applicant_freeform: '', relationship_to_applicant: Object({ id: 0, value: '' }) }) ], index: 0, first_name: '', middle_name: '', last_name: 'dude', date_of_birth: '2017-01-01' }) ])
    })
  })
})
