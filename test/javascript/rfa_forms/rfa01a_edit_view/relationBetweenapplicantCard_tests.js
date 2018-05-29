import React from 'react'
import RelationshipBetweenApplicantsCard from 'rfa_forms/rfa01a_edit_view/relationshipBetweenApplicantsCard.jsx'
import {mount} from 'enzyme'
import {stateTypes, applicantrelationTypes} from '../../helpers/constants'
import Validator from 'helpers/validator'

describe('Verify relation card', function () {
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

  let setParentStateSpy, setStateSpy, componentMount, setFocusStateSpy

  beforeEach(() => {
    setParentStateSpy = jasmine.createSpy('setParentState')
    setStateSpy = jasmine.createSpy('setState')
    let getFocusClassNameSpy = jasmine.createSpy('getFocusClassName')
    setFocusStateSpy = jasmine.createSpy('setFocusState')
    let validator = new Validator({})

    componentMount = mount(<RelationshipBetweenApplicantsCard relationshipTypes={applicantrelationTypes}
      relationshipBetweenApplicants={blankValues}
      setParentState={setStateSpy}
      getFocusClassName={getFocusClassNameSpy}
      applicants={applicants}
      stateTypes={stateTypes.items}
      setFocusState={setFocusStateSpy}
      validator={validator}
    />)
  })
  describe('Verify relation', () => {
    it('verify RelationshipBetweenApplicantsCard', () => {
      let relationShipField = componentMount.find('#RelationshipBetweenApplicantsCardSection')
      relationShipField.simulate('click')
      expect(setFocusStateSpy).toHaveBeenCalledWith('RelationshipBetweenApplicantsCard')
    })
    it('verify relationship_type', () => {
      let relationshipField = componentMount.find('#relationship_type').hostNodes()
      relationshipField.simulate('change', {target: {options: {'1': {value: '1', text: 'Married'}, selectedIndex: 1}}})
      expect(setStateSpy).toHaveBeenCalledWith('applicants_relationship', { relationship_type: { id: '1', value: 'Married' }, date_of_relationship: '', place_of_relationship_city: '', place_of_relationship_state: null, other_relationship: '' })
    })
  })
})
