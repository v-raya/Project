import React from 'react'
import OutOfStateDisclosureCard from 'rfa_forms/rfa01b_edit_view/outOfStateDisclosureCard'
import {shallow, mount} from 'enzyme'
import {stateTypes} from '../../helpers/constants'
import Validator from 'helpers/validator'

describe('Verify out Of state disclosure card card', () => {
  let setParentStateSpy, setDisplayStateSpy, componentMountinState, componentMountOtherState,
    componentMountLivedOutOfState, componentShallowInState,
    setFocusStateSpy, setApplicationStateSpy, getFocusClassNameSpy, handleClearOnConditionalChangeSpy
  const validator = new Validator({})
  beforeEach(() => {
    setParentStateSpy = jasmine.createSpy('setParentState')
    setDisplayStateSpy = jasmine.createSpy('setDisplayState')
    getFocusClassNameSpy = jasmine.createSpy('getFocusClassName')
    setFocusStateSpy = jasmine.createSpy('setFocusState')
    handleClearOnConditionalChangeSpy = jasmine.createSpy('handleClearOnConditionalChange')

    componentMountinState = mount(<OutOfStateDisclosureCard
      livedInOtherState
      otherStatesOfLiving={[]}
      stateTypes={stateTypes.items}
      focusComponentName={'CACriminalBackgroundCard'}
      getFocusClassName={getFocusClassNameSpy}
      handleClearOnConditionalChange={handleClearOnConditionalChangeSpy}
      setFocusState={setFocusStateSpy}
      setParentState={setParentStateSpy}
      validator={validator} />)
    componentMountLivedOutOfState = mount(<OutOfStateDisclosureCard
      livedInOtherState={false}
      otherStatesOfLiving={[]}
      stateTypes={stateTypes.items}
      focusComponentName={'CACriminalBackgroundCard'}
      getFocusClassName={getFocusClassNameSpy}
      handleClearOnConditionalChange={handleClearOnConditionalChangeSpy}
      setFocusState={setFocusStateSpy}
      setParentState={setParentStateSpy}
      validator={validator} />)
    componentShallowInState = shallow(<OutOfStateDisclosureCard
      livedInOtherState
      otherStatesOfLiving={[]}
      stateTypes={stateTypes.items}
      focusComponentName={'CACriminalBackgroundCard'}
      getFocusClassName={getFocusClassNameSpy}
      setFocusState={setFocusStateSpy}
      setParentState={setParentStateSpy}
      validator={validator} />)
  })

  describe('Verify component will mount', () => {
    it('verify component did mount', () => {
      expect(componentMountinState.length).toEqual(1)
    })
    it('verify component did mount', () => {
      expect(componentMountLivedOutOfState.length).toEqual(1)
    })
    it('verify set Focus State', () => {
      const cardComponent = componentMountinState.find('#outOfStateDisclosureCard').hostNodes()
      cardComponent.simulate('click')
      expect(setFocusStateSpy).toHaveBeenCalledWith('outOfStateDisclosureCard')
    })

    it('onClick event shows lived in other state multi select', () => {
      const cardComponent = componentMountinState.find('input[type="radio"]')
      const trueComponent = cardComponent.find('#outOfStateDisclosureCardtrue')
      trueComponent.simulate('change', {target: {value: 'true'}})
      expect(handleClearOnConditionalChangeSpy).toHaveBeenCalledWith('lived_in_other_state', 'true', 'other_states_of_living', [ ])
    })

    it('State multi select', () => {
      const cardComponent = componentShallowInState.find('.outOfStateDisclosureCard')
      cardComponent.simulate('change', [{id: 'AK', value: 'Alaska'}])
      expect(setParentStateSpy).toHaveBeenCalledWith('other_states_of_living', [{id: 'AK', value: 'Alaska'}])
    })

    it('check required fields indicator', () => {
      expect(componentMountinState.html()).toContain('If YES, identify each state and complete a LIC 198B for each state listed (required)')
    })
  })
})
