import React from 'react'
import CheckboxGroup from 'components/common/checkboxGroup.js'
import {siblingGroups, ageGroups} from './../../helpers/constants'
import {shallow} from 'enzyme'

describe('Verify Check Box Group', () => {
  let checkboxGroupComp, childDesired, setParentStateSpy
  beforeEach(() => {
    childDesired = {
      child_identified: '',
      child_in_home: '',
      preferred_ages: [{
        "id": 1,
        "value": "0-3 years"
      },
        {
          "id": 2,
          "value": "4-8 years"
        }],
      preferred_sibling_group_up_to: {
        id: '',
        value: ''
      }
    }
    setParentStateSpy = jasmine.createSpy('setParentState')
    checkboxGroupComp = shallow(<CheckboxGroup
      optionList={ageGroups.items}
      agePreferences={childDesired.preferred_ages}
      sectionDesc={'some Text'}
      onChange={setParentStateSpy}
    />)
  })
  it('test preferred ages checkbox', () => {
    let preferredField = checkboxGroupComp.find('#age-1')
    preferredField.simulate('change', {target: {checked: false}})
    childDesired.preferred_ages.pop()
    expect(setParentStateSpy).toHaveBeenCalledWith('preferred_ages', childDesired.preferred_ages)
  })
  it('check preferred ages checkbox no Preference True', () => {
    let preferredField = checkboxGroupComp.find('#age-6')
    preferredField.simulate('change', {target: {checked: true}})
    childDesired.preferred_ages = []
    childDesired.preferred_ages.push({
      "id": 7,
      "value": "No preference"
    })
    expect(setParentStateSpy).toHaveBeenCalledWith('preferred_ages', childDesired.preferred_ages)
  })
})