import React from 'react'
import OtherAdultsCardsGroup, {otherAdultsDefaults} from 'rfa_forms/rfa01a_edit_view/OtherAdultsCardsGroup.js'
import {shallow, mount} from 'enzyme'
import {relationshipTypes} from '../../helpers/constants'
import Validator from 'helpers/validator'

describe('Verify other adults Component View', function () {
  let component, componentMount
  let props
  const OtherAdultsCard = {
    relationship_types: {
      items: []
    },
    relationship_to_applicants: [
      {
        applicant_id: null,
        relationship_to_applicant: {
          'id': 0,
          'value': ''
        }
      }
    ],
    index: 0,
    'firstName': '',
    'middleName': '',
    'lastName': '',
    date_of_birth: '2017-01-01'
  }

  let setParentStateSpy = jasmine.createSpy()

  beforeEach(() => {
    setParentStateSpy = jasmine.createSpy('setParentState')
    let handleRelationshipTypeToApplicantSpy = jasmine.createSpy('handleRelationshipTypeToApplicant')
    let onFieldChangeSpy = jasmine.createSpy('onFieldChange')
    let validator = new Validator({})
    props = {
      otherAdults: [OtherAdultsCard],
      relationship_types: relationshipTypes,
      relationshipToApplicantTypes: relationshipTypes,
      setParentState: setParentStateSpy,
      validator: validator
    }
    component = shallow(
      <OtherAdultsCardsGroup {...props} />
    )
    componentMount = mount(<OtherAdultsCardsGroup {...props} />)
  })
  describe('Verify other adult card Component View', () => {
    it('has class name', function () {
      componentMount.update()
      spyOn(componentMount.instance(), 'handleRelationshipTypeToApplicant').and.callThrough()
      let relationShipField = componentMount.find('#relationshipType')
      relationShipField.simulate('change', {target: {selectedOptions: [{value: '2', text: 'Sibling'}]}})
      OtherAdultsCard.relationship_to_applicants[0].relationship_to_applicant = { id: '2', value: 'Sibling' }
      expect(setParentStateSpy).toHaveBeenCalledWith('otherAdults', [OtherAdultsCard])
    })
  })

  it('verify date of birth', () => {
  // TODO will update when switching from react-maskedinput to cleave.js
  })

  describe('Verify other adults Component View', () => {
    it('has class name', function () {
      expect(component.find('.card-body').length).toEqual(1)
    })
    it('expect children to be array', function () {
      expect(component.children.length).toEqual(1)
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
      expect(props.otherAdults.length).toEqual(2)
    })
  })

  describe('when close minor card is clicked', () => {
    it('Clears data when 1 phone number is present', () => {
      spyOn(component.instance(), 'clickClose').and.callThrough()
      component.find('.glyphicon-remove').simulate('click')
      expect(component.instance().clickClose).toHaveBeenCalledWith(0)
      expect(props.otherAdults.length).toEqual(1)
    })

    it('Deletes minor children when 2 cards are present', () => {
      let newData = []
      newData[0] = OtherAdultsCardsGroup
      newData[1] = otherAdultsDefaults
      component.setProps({otherAdults: newData})
      spyOn(component.instance(), 'clickClose').and.callThrough()
      component.find('.glyphicon-remove').at(0).simulate('click')
      component.update()
      expect(component.instance().clickClose).toHaveBeenCalledWith(0)
      expect(props.otherAdults.length).toEqual(1)
    })
  })
})
