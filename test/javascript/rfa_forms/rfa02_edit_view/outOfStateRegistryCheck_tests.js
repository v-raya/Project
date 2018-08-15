import React from 'react'
import Immutable from 'immutable'
import OutOfStateRegistryCheck from 'rfa_forms/rfa02_edit_view/outOfStateRegistryCheck.jsx'
import {mount} from 'enzyme'
import {rfa02HelperObject} from './rfa02_helperObject.js'

describe('RFA 02 Out of State Registry check card test', () => {
  let outOfStateRegistryCheckComp, handleOutOfStateRegistrySpy, setParentStateSpy,
    outOfStateRegistryCheckWithProps, handleRequestInfoSpy, handleRegistryClearSpy
  beforeEach(() => {
    const outOfStateRegistryObj = rfa02HelperObject.people[0].background_check.out_of_state_registry_checklist
    setParentStateSpy = jasmine.createSpy('setParentState')
    const props = {
      editMode: true,
      peopleIndex: 0,
      setParentState: setParentStateSpy,
      outOfStateRegistryList: Immutable.fromJS(outOfStateRegistryObj)
    }
    handleOutOfStateRegistrySpy = spyOn(OutOfStateRegistryCheck.prototype, 'handleOutOfStateRegistry').and.callThrough()
    handleRequestInfoSpy = spyOn(OutOfStateRegistryCheck.prototype, 'handleRequestInfo').and.callThrough()
    handleRegistryClearSpy = spyOn(OutOfStateRegistryCheck.prototype, 'handleRegistryClear').and.callThrough()
    outOfStateRegistryCheckComp = mount(<OutOfStateRegistryCheck />)
    outOfStateRegistryCheckWithProps = mount(<OutOfStateRegistryCheck {...props} />)
  })

  it('card render with/without props', () => {
    expect(outOfStateRegistryCheckComp.length).toBe(1)
    expect(outOfStateRegistryCheckWithProps.length).toBe(1)
  })
  it('handleRegistryClear', () => {
    let outOfStateRegistryCleared0trueField = outOfStateRegistryCheckWithProps.find('#person0outOfStateRegistryCleared0true').hostNodes()
    outOfStateRegistryCleared0trueField.simulate('change', {target: {value: 'false'}})
    expect(handleRegistryClearSpy).toHaveBeenCalledWith('is_cleared', 'false', 0)
  })

  it('handleRegistryClear change Date Field', () => {
    let outOfStateRegistrydate0Field = outOfStateRegistryCheckWithProps.find('#person0outOfStateRegistry0dateEdit0').hostNodes()
    outOfStateRegistrydate0Field.simulate('change', {target: {value: '12/07/2018'}})
    expect(handleRequestInfoSpy).toHaveBeenCalledWith('date', '2018-12-07', 0, 0)
  })

  it('handleRegistryClear change TextArea Field', () => {
    let outOfStateRegistrynotes0Field = outOfStateRegistryCheckWithProps.find('#person0outOfStateRegistry0textAreaEdit0').hostNodes()
    outOfStateRegistrynotes0Field.simulate('change', {target: {value: 'Text Area'}})
    expect(handleRequestInfoSpy).toHaveBeenCalledWith('notes', 'Text Area', 0, 0)
  })

  it('handleRequestInfo method with checkbox change', () => {
    let outOfStateRegistry0checkboxEdit0Field = outOfStateRegistryCheckWithProps.find('#person0outOfStateRegistry0checkboxEdit0').hostNodes()
    outOfStateRegistry0checkboxEdit0Field.simulate('change', {target: {checked: true}})
    expect(handleRequestInfoSpy).toHaveBeenCalledWith('checked', true, 0, 0)
  })

  it('handleOutOfStateRegistry', () => {
    let outOfStateRegistry0trueField = outOfStateRegistryCheckWithProps.find('#person0outOfStateRegistry0true').hostNodes()
    outOfStateRegistry0trueField.simulate('change', {target: {value: 'false'}})
    expect(handleOutOfStateRegistrySpy).toHaveBeenCalledWith('is_registry_maintained_by_state', 'false', 0)
  })
})
