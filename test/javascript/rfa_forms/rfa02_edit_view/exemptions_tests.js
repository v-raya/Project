import React from 'react'
import Immutable from 'immutable'
import Exemptions from 'rfa_forms/rfa02_edit_view/exemptions.jsx'
import {mount} from 'enzyme'
import {rfa02HelperObject} from './rfa02_helperObject.js'

describe('RFA 02 Excemption card test', () => {
  let exemptionWrapper, exemptionsObj, setParentStateSpy, exemptionHandlerSpy, exemptionWrapperWithProps
  beforeEach(() => {
    exemptionsObj = rfa02HelperObject.people[0].background_check.exemptions
    setParentStateSpy = jasmine.createSpy('setParentState')
    const props = {
      peopleIndex: 0,
      setParentState: setParentStateSpy,
      exemptionList: Immutable.fromJS(exemptionsObj),
      editMode: true
    }
    exemptionHandlerSpy = spyOn(Exemptions.prototype, 'exemptionHandler').and.callThrough()
    exemptionWrapper = mount(<Exemptions />)
    exemptionWrapperWithProps = mount(<Exemptions {...props} />)
  })
  it('render exemptions with/without props', () => {
    expect(exemptionWrapper.length).toBe(1)
    expect(exemptionWrapperWithProps.length).toBe(1)
  })

  it('exemption approval or pending ?', () => {
    let exemptionStatusfalseField = exemptionWrapperWithProps.find('#exemptionStatus0false').hostNodes()
    exemptionStatusfalseField.simulate('change', {target: {value: 'false'}})
    expect(exemptionHandlerSpy).toHaveBeenCalledWith('is_approved', 'false', 'approval')
  })

  it('exemptionHandler method on, is Exemption requested?', () => {
    let exemptionRequestfalseField = exemptionWrapperWithProps.find('#exemptionRequest0false').hostNodes()
    exemptionRequestfalseField.simulate('change', {target: {value: 'false'}})
    exemptionsObj['is_requested'] = 'false'
    expect(exemptionHandlerSpy).toHaveBeenCalledWith('is_requested', 'false')
  })
})
