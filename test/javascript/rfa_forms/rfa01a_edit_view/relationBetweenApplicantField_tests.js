import React from 'react'
import RelationshipBetweenApplicantsFields from 'rfa_forms/rfa01a_edit_view/relationshipBetweenApplicantsFields.js'
import {stateTypes, applicantrelationTypes} from './../../helpers/constants'
import {shallow, mount} from 'enzyme'
import Validator from 'helpers/validator'

describe('Verify relation between applicant', () => {
  const blankValues = Object.freeze({
    relationship_type: {
      id: 1,
      value: 'Married'
    },
    date_of_relationship: '',
    place_of_relationship_city: '',
    place_of_relationship_state: {
      id: 0,
      value: ''
    }
  })

  const applicants = [{first_name: 'thing'}, {first_name: 'thing'}]

  let setStateSpy, relationCardComp, relationshipComp, onChange, validator
  beforeEach(() => {
    setStateSpy = jasmine.createSpy('setState')
    onChange = jasmine.createSpy('onChange')

    validator = new Validator({})

    relationCardComp = shallow(<RelationshipBetweenApplicantsFields

      relationshipTypes={applicantrelationTypes}
      relationshipBetweenApplicants={blankValues}
      setParentState={setStateSpy}
      applicants={applicants}
      onChange={onChange}
      stateTypes={stateTypes.items}
      validator={validator}
    />)

    relationshipComp = mount(<RelationshipBetweenApplicantsFields

      relationshipTypes={applicantrelationTypes}
      relationshipBetweenApplicants={blankValues}
      setParentState={setStateSpy}
      applicants={applicants}
      onChange={onChange}
      stateTypes={stateTypes.items}
      validator={validator}
    />)
  })
  it('verify relationship_type', () => {
    let relationshipField = relationshipComp.find('#relationship_type').hostNodes()
    relationshipField.simulate('change', {target: {options: {'1': {value: '1', text: 'Married'}, selectedIndex: 1}}})
    let relationshipDropdownSection = relationshipComp.find('.relationship-status')
    expect(setStateSpy).toHaveBeenCalledWith('relationship_type', ({ id: '1', value: 'Married' }))
  })

  it('verify relation ship state', () => {
    let relationField = relationCardComp.find('#place_of_relationship_state')
    relationField.simulate('change', {target: {options: {'1': {value: '1', text: 'Alabama'}, selectedIndex: 1}}})
    expect(setStateSpy).toHaveBeenCalledWith('place_of_relationship_state', {id: '1', value: 'Alabama'})
  })

  it('verify relationship_type', () => {
    let relationField = relationCardComp.find('#relationship_type')
    relationField.simulate('change', {target: {options: {'1': {value: '1', text: 'Married'}, selectedIndex: 1}}})
    expect(setStateSpy).toHaveBeenCalledWith('relationship_type', {id: '1', value: 'Married'})
  })

  it('verify date_of_relationship', () => {
    let dateOfRelationshipField = relationCardComp.find('#date_of_relationship')
    dateOfRelationshipField.simulate('change', {target: {value: '04/10/2000'}})
    expect(setStateSpy).toHaveBeenCalledWith('date_of_relationship', '2000-04-10')
  })

  it('verify date_of_relationship is not formatted for persistance when not fully entered', () => {
    let dateOfRelationshipField = relationCardComp.find('#date_of_relationship')
    dateOfRelationshipField.simulate('change', {target: {value: '01/20/2001'}})
    expect(setStateSpy).toHaveBeenCalledWith('date_of_relationship', '2001-01-20')
  })

  it('verify place_of_relationship_city', () => {
    let relationField = relationCardComp.find('#place_of_relationship_city')
    relationField.simulate('change', {target: {value: 'some city'}})
    expect(setStateSpy).toHaveBeenCalledWith('place_of_relationship_city', 'some city')
  })

  it('verify other_relationship', () => {
    let relationField = relationCardComp.find('#other_relationship')
    relationField.simulate('change', {target: {value: 'other text'}})
    expect(setStateSpy).toHaveBeenCalledWith('other_relationship', 'other text')
  })
})
