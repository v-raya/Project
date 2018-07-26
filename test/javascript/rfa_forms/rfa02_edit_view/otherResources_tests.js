import React from 'react'
import Immutable from 'immutable'
import OtherResources from 'rfa_forms/rfa02_edit_view/otherResources.jsx'
import {mount} from 'enzyme'
import {rfa02HelperObject} from './rfa02_helperObject.js'

describe('Rfa 02 Inter County Transfer Info, test', () => {
  let otherResourcesComp, setParentStateSpy, handleOtherResourceListSpy,
    otherResourcesWithProps
  beforeEach(() => {
    const otherResourcesListObj = rfa02HelperObject.people[0].background_check.other_resources
    setParentStateSpy = jasmine.createSpy('setParentState')
    const props = {
      peopleIndex: 0,
      editMode: true,
      setParentState: setParentStateSpy,
      otherResourcesList: Immutable.fromJS(otherResourcesListObj)
    }
    handleOtherResourceListSpy = spyOn(OtherResources.prototype, 'handleOtherResourceList').and.callThrough()
    otherResourcesComp = mount(<OtherResources />)
    otherResourcesWithProps = mount(<OtherResources {...props} />)
  })

  it('card render', () => {
    expect(otherResourcesComp.length).toBe(1)
    expect(otherResourcesWithProps.length).toBe(1)
  })
  it('handleOtherResourceList method', () => {
    let otherResources0checkboxEdit0Field = otherResourcesWithProps.find('#otherResources0checkboxEdit0').hostNodes()
    otherResources0checkboxEdit0Field.simulate('change', {target: {checked: 'true'}})
    expect(handleOtherResourceListSpy).toHaveBeenCalledWith('checked', 'true', 0, undefined)
  })
})
