import React from 'react'
import Immutable from 'immutable'
import InterCountyTransfer from 'rfa_forms/rfa02_edit_view/interCountyTransfer.jsx'
import {mount} from 'enzyme'
import {rfa02HelperObject} from './rfa02_helperObject.js'

describe('Rfa 02 Inter County Transfer Info, test', () => {
  let interCountyTransferComp, setParentStateSpy, handleCountyTrasferChangeSpy,
    interCountyTransferWithProps
  beforeEach(() => {
    const countyTrasferListObj = rfa02HelperObject.people[0].background_check.inter_county_transfer
    setParentStateSpy = jasmine.createSpy('setParentState')
    const props = {
      peopleIndex: 0,
      editMode: true,
      setParentState: setParentStateSpy,
      countyTrasferList: Immutable.fromJS(countyTrasferListObj)
    }
    handleCountyTrasferChangeSpy = spyOn(InterCountyTransfer.prototype, 'handleCountyTrasferChange').and.callThrough()
    interCountyTransferComp = mount(<InterCountyTransfer />)
    interCountyTransferWithProps = mount(<InterCountyTransfer {...props} />)
  })

  it('card render', () => {
    expect(interCountyTransferComp.length).toBe(1)
    expect(interCountyTransferWithProps.length).toBe(1)
  })
  it('handleCountyTrasferChange method', () => {
    const interCountyTransfer0checkboxEdit0Field = interCountyTransferWithProps.find('#interCountyTransfer0checkboxEdit0').hostNodes()
    interCountyTransfer0checkboxEdit0Field.simulate('change', {target: {checked: 'true'}})
    expect(handleCountyTrasferChangeSpy).toHaveBeenCalledWith('checked', 'true', 0, undefined)
  })
})
