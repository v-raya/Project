import React from 'react'
import Immutable from 'immutable'
import EmergencyPlacement from 'rfa_forms/rfa02_edit_view/emergencyPlacement.jsx'
import {mount} from 'enzyme'
import {rfa02HelperObject} from './rfa02_helperObject.js'

describe('RFA 02 Emergency Placement card, test', () => {
  let emergencyPlacementComp, isEmergencyPlacementSpy, setParentStateSpy,
    emergencyPlacementWithProps, handleEmergencyPlacementChangeSpy
  beforeEach(() => {
    const emergencyPlacementObj = rfa02HelperObject.people[0].background_check.emergency_placement_only
    setParentStateSpy = jasmine.createSpy('setParentState')
    const props = {
      editMode: true,
      peopleIndex: 0,
      setParentState: setParentStateSpy,
      emergencyPlacementList: Immutable.fromJS(emergencyPlacementObj)
    }
    isEmergencyPlacementSpy = spyOn(EmergencyPlacement.prototype, 'isEmergencyPlacement').and.callThrough()
    handleEmergencyPlacementChangeSpy = spyOn(EmergencyPlacement.prototype, 'handleEmergencyPlacementChange').and.callThrough()
    emergencyPlacementComp = mount(<EmergencyPlacement />)
    emergencyPlacementWithProps = mount(<EmergencyPlacement {...props}/>)
  })

  it('card render', () => {
    expect(emergencyPlacementComp.length).toBe(1)
    expect(emergencyPlacementWithProps.length).toBe(1)
  })

  it('handleEmergencyPlacementChange method call', () => {
    const emergencyPlacement0checkboxEdit0Field = emergencyPlacementWithProps.find('#emergencyPlacement0checkboxEdit0').hostNodes()
    emergencyPlacement0checkboxEdit0Field.simulate('change', {target: {checked: true}})
    expect(handleEmergencyPlacementChangeSpy).toHaveBeenCalled()
  })

  it('isEmergencyPlacement method call', () => {
    const emergencyPlacementfalseField = emergencyPlacementWithProps.find('#emergencyPlacement0false').hostNodes()
    emergencyPlacementfalseField.simulate('change', {target: {value: false}})
    expect(isEmergencyPlacementSpy).toHaveBeenCalled()
  })
})
