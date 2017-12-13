import React from 'react'
import OutOfStateDisclosureCard from 'rfa_forms/rfa01b_edit_view/outOfStateDisclosureCard'
import {shallow, mount} from 'enzyme'
import {stateTypes} from '../../helpers/constants'

describe('Verify out Of state disclosure card card', function () {
  let setParentStateSpy, setDisplayStateSpy, componentMountinState, componentMountOtherState,
    componentMountLivedOutOfState, componentShallowInState,
    setFocusStateSpy, setApplicationStateSpy, getFocusClassNameSpy

  beforeEach(() => {
    setParentStateSpy = jasmine.createSpy('setParentState')
    setDisplayStateSpy = jasmine.createSpy('setDisplayState')
    getFocusClassNameSpy = jasmine.createSpy('getFocusClassName')
    setFocusStateSpy = jasmine.createSpy('setFocusState')

    componentMountinState = mount(<OutOfStateDisclosureCard
      livedInOtherState
      otherStatesOfLiving={[]}
      stateTypes={stateTypes.items}
      focusComponentName={'CACriminalBackgroundCard'}
      getFocusClassName={getFocusClassNameSpy}
      setFocusState={setFocusStateSpy}
      setParentState={setParentStateSpy} />)
    componentMountLivedOutOfState = mount(<OutOfStateDisclosureCard
      livedInOtherState={false}
      otherStatesOfLiving={[]}
      stateTypes={stateTypes.items}
      focusComponentName={'CACriminalBackgroundCard'}
      getFocusClassName={getFocusClassNameSpy}
      setFocusState={setFocusStateSpy}
      setParentState={setParentStateSpy} />)
    componentShallowInState = shallow(<OutOfStateDisclosureCard
      livedInOtherState
      otherStatesOfLiving={[]}
      stateTypes={stateTypes.items}
      focusComponentName={'CACriminalBackgroundCard'}
      getFocusClassName={getFocusClassNameSpy}
      setFocusState={setFocusStateSpy}
      setParentState={setParentStateSpy} />)
  })

  describe('Verify component will mount', () => {
    it('verify component did mount', () => {
      expect(componentMountinState.length).toEqual(1)
    })
    it('verify component did mount', () => {
      expect(componentMountLivedOutOfState.length).toEqual(1)
    })
    it('verify set Focus State', () => {
      let cardComponent = componentMountinState.find('#outOfStateDisclosureCard').hostNodes()
      cardComponent.simulate('click')
      expect(setFocusStateSpy).toHaveBeenCalledWith('outOfStateDisclosureCard')
    })

    it('onClick event shows lived in other state multi select', () => {
      let cardComponent = componentMountinState.find('input[type="radio"]')
      let trueComponent = cardComponent.find('#outOfStateDisclosureCardtrue')
      trueComponent.simulate('change', {target: {checked: true}})
      expect(setParentStateSpy).toHaveBeenCalledWith('lived_in_other_state', false)
    })

    it('State multi select', () => {
      let cardComponent = componentShallowInState.find('.outOfStateDisclosureCard')
      cardComponent.simulate('change', [{id: 'AK', value: 'Alaska'}])
      expect(setParentStateSpy).toHaveBeenCalledWith('other_states_of_living', [{id: 'AK', value: 'Alaska'}])
    })
  })
})
