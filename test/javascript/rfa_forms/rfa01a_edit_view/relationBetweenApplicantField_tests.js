import React from 'react'
import RelationshipBetweenApplicantsFields from 'rfa_forms/rfa01a_edit_view/relationshipBetweenApplicantsFields.js'
import {stateTypes, applicantrelationTypes} from './../../helpers/constants'
import {shallow} from 'enzyme'

describe('Verify relation between applicant', function () {
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

  const applicants = Object.freeze({
    applicants: [{
      first_name: "thing"},
      {
      first_name: "thing"}
    ]})

  let setParentStateSpy, relationCardComp, onChangeSpy
  beforeEach(() => {
    setParentStateSpy = jasmine.createSpy('setParentState')
    onChangeSpy = jasmine.createSpy('')

    relationCardComp = shallow(<RelationshipBetweenApplicantsFields

      relationshipTypes={applicantrelationTypes}
      relationshipBetweenApplicants={blankValues}
      setParentState={setParentStateSpy}
      applicants={applicants}
      stateTypes={stateTypes.items}
    />)
  })

  // const aboutResidenceCard = TestUtils.createRenderer()

  it('verify relation ship state', () => {
    let relationField = relationCardComp.find('#place_of_relationship_state')
    relationField.simulate('change', {target: {selectedOptions: [{value: '1', text: 'Alabama'}]}})
    expect(setParentStateSpy).toHaveBeenCalledWith('place_of_relationship_state', {id: '1', value: 'Alabama'})
  })


  it('verify relationship_type', () => {
    let relationField = relationCardComp.find('#relationship_type')
    relationField.simulate('change', {target: {selectedOptions: [{value: '1', text: 'Married'}]}})
    expect(setParentStateSpy).toHaveBeenCalledWith('relationship_type', {id: '1', value: 'Married'})
  })

  it('verify date_of_relationship', () => {
    let relationField = relationCardComp.find('#date_of_relationship')
    relationField.simulate('change', {target: {value: '2017-01-01'}})
    expect(setParentStateSpy).toHaveBeenCalledWith('date_of_relationship', '2017-01-01')
  })
  it('verify place_of_relationship_city', () => {
    let relationField = relationCardComp.find('#place_of_relationship_city')
    relationField.simulate('change', {target: {value: 'some city'}})
    expect(setParentStateSpy).toHaveBeenCalledWith('place_of_relationship_city', 'some city')
  })

  it('verify other_relationship', () => {
    let relationField = relationCardComp.find('#other_relationship')
    relationField.simulate('change', {target: {value: 'other text'}})
    expect(setParentStateSpy).toHaveBeenCalledWith('other_relationship', 'other text')
  })
})
