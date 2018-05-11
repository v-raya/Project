import React from 'react'
import {MinorCardField} from 'rfa_forms/rfa01a_edit_view/minorCardField.js'
import {shallow, mount} from 'enzyme'
import {relationshipTypes, genderTypes, selectedYes} from './../../helpers/constants'
import Validator from 'helpers/validator'
describe('Verify MinorCardFields', function () {
  const applicants = [{
    first_name: 'gdfghfhgv',
    last_name: 'hgbhg',
    middle_name: ''
  }]
  const minorChildren = {
    index: 0,
    gender: {
      'id': 0,
      'value': ''
    },
    relationship_to_applicants: [
      {
        applicant_id: null,
        child_financially_supported: 'yes',
        child_adopted: 'yes',
        relationship_to_applicant_freeform: '',
        relationship_to_applicant: {
          'id': 0,
          'value': ''
        }
      }
    ],
    date_of_birth: '2017-01-01'
  }

  let minorChildCardComp, handleNameFieldInputSpy, handleRelationshipTypeChangeSpy, onFieldChangeSpy
  let relationType = relationshipTypes
  beforeEach(() => {
    handleRelationshipTypeChangeSpy = jasmine.createSpy('handleRelationshipTypeChange')
    onFieldChangeSpy = jasmine.createSpy('onFieldChange')
    let validator = new Validator({})
    minorChildCardComp = mount(<MinorCardField
      index={0}
      genderTypes={genderTypes.items}
      relationshipTypes={relationType}
      applicants={applicants}
      handleRelationshipTypeChange={handleRelationshipTypeChangeSpy}
      onFieldChange={onFieldChangeSpy}
      minorChild={minorChildren}
      validator={validator} />)
  })
  it('verify Relationship field', () => {
    let relationShipField = minorChildCardComp.find('.col-md-12').find('#relationship_to_applicant0child0relationship_to_applicant_freeform').hostNodes()
    relationShipField.simulate('change', {target: {value: 'Child'}})
    expect(handleRelationshipTypeChangeSpy).toHaveBeenCalledWith({ first_name: 'gdfghfhgv', last_name: 'hgbhg', middle_name: '' }, 'Child', 0, 0, 'relationship_to_applicant_freeform')
  })

  it('verify Gender', () => {
    let relationShipField = minorChildCardComp.find('.col-md-12').last().find('#minor_gender').hostNodes()
    relationShipField.simulate('change', {target: {options: {'2': {value: '2', text: 'Female'}, selectedIndex: 2}}})
    expect(onFieldChangeSpy).toHaveBeenCalledWith(0, Object({ id: '2', value: 'Female' }), 'gender')
  })
  it('verify date of birth', () => {
    let dateOfBirthField = minorChildCardComp.find('.col-md-12').last().find('#date_of_birth').hostNodes()
    dateOfBirthField.simulate('change', {target: {value: '01/02/2000'}})
    expect(onFieldChangeSpy).toHaveBeenCalledWith(0, '2000-01-02', 'date_of_birth')
  })
  describe('#YesNoRadioComponent', () => {
    let relationType = relationshipTypes
    beforeEach(() => {
      handleRelationshipTypeChangeSpy = jasmine.createSpy('handleRelationshipTypeChange')
      onFieldChangeSpy = jasmine.createSpy('onFieldChange')
      let validator = new Validator({})
      minorChildCardComp = mount(<MinorCardField
        index={0}
        genderTypes={genderTypes.items}
        relationshipTypes={relationType}
        applicants={applicants}
        handleRelationshipTypeChange={handleRelationshipTypeChangeSpy}
        onFieldChange={onFieldChangeSpy}
        minorChild={minorChildren}
        validator={validator} />)
    })
    it('verify child_financially_supported field', () => {
      let relationShipField = minorChildCardComp.find('input[type="radio"]').at(0)
      relationShipField.simulate('change', {target: {value: true}})
      expect(handleRelationshipTypeChangeSpy).toHaveBeenCalledWith({ first_name: 'gdfghfhgv', last_name: 'hgbhg', middle_name: '' }, true, 0, 0, 'child_financially_supported')
    })
    it('verify child adopted field', () => {
      let relationShipField = minorChildCardComp.find('input[type="radio"]').at(2)
      relationShipField.simulate('change', {target: {value: true}})
      expect(handleRelationshipTypeChangeSpy).toHaveBeenCalledWith({ first_name: 'gdfghfhgv', last_name: 'hgbhg', middle_name: '' }, true, 0, 0, 'child_adopted')
    })
  })

  describe('componentWillUnmount test', () => {
    let relationType = relationshipTypes
    beforeEach(() => {
      handleRelationshipTypeChangeSpy = jasmine.createSpy('handleRelationshipTypeChange')
      onFieldChangeSpy = jasmine.createSpy('onFieldChange')

      let validator = new Validator({})
      minorChildCardComp = shallow(<MinorCardField
        index={0}
        genderTypes={genderTypes.items}
        relationshipTypes={relationType}
        applicants={applicants}
        handleRelationshipTypeChange={handleRelationshipTypeChangeSpy}
        onFieldChange={onFieldChangeSpy}
        minorChild={minorChildren}
        validator={validator} />)
    })

    it('expects the component to unmount', () => {
      let instance = minorChildCardComp.instance()
      expect(instance.props.validator.validations.size).toEqual(5)
      minorChildCardComp.unmount()
      expect(instance.props.validator.validations.size).toEqual(0)
    })
  })
})
