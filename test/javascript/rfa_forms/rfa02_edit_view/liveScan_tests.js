import React from 'react'
import Immutable from 'immutable'
import LiveScan from 'rfa_forms/rfa02_edit_view/liveScan.jsx'
import {mount} from 'enzyme'
import {rfa02HelperObject} from './rfa02_helperObject.js'

describe('Rfa 02 Inter County Transfer Info, test', () => {
  let liveScanWrapper, setParentStateSpy, handleLiveScanSpy,
    liveScanWithProps
  beforeEach(() => {
    const liveScanObj = rfa02HelperObject.people[0].background_check.live_scan
    setParentStateSpy = jasmine.createSpy('setParentState')
    const props = {
      peopleIndex: 0,
      editMode: true,
      setParentState: setParentStateSpy,
      liveScanList: Immutable.fromJS(liveScanObj)
    }
    handleLiveScanSpy = spyOn(LiveScan.prototype, 'handleLiveScan').and.callThrough()
    liveScanWrapper = mount(<LiveScan />)
    liveScanWithProps = mount(<LiveScan {...props} />)
  })

  it('card render', () => {
    expect(liveScanWrapper.length).toBe(1)
    expect(liveScanWithProps.length).toBe(1)
  })
  it('handleLiveScan method', () => {
    const liveScan0checkboxEdit0Field = liveScanWithProps.find('#liveScan0checkboxEdit0').hostNodes()
    liveScan0checkboxEdit0Field.simulate('change', {target: {checked: 'true'}})
    expect(handleLiveScanSpy).toHaveBeenCalledWith('checked', 'true', 0)
  })
})
