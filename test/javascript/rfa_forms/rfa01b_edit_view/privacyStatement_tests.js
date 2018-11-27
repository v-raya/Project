import React from 'react'
import PrivacyStatement from 'rfa_forms/rfa01b_edit_view/privacyStatement'
import {shallow, mount} from 'enzyme'

describe('Verify privacyStatement card', () => {
  const blankValues = Object.freeze({
    privacyStatementDisplay: false,
    focusComponentName: null
  })

  let setParentStateSpy, setDisplayStateSpy, componentMount, componentMountShowPrivacy,
    setFocusStateSpy, onHideClickSpy

  beforeEach(() => {
    const setStateSpy = jasmine.createSpy('setState')
    setDisplayStateSpy = jasmine.createSpy('setDisplayState')
    const getFocusClassNameSpy = jasmine.createSpy('getFocusClassName')
    setFocusStateSpy = jasmine.createSpy('setFocusState')
    onHideClickSpy = jasmine.createSpy('onHideClick')
    componentMount = mount(<PrivacyStatement
      privacyStatementDisplay={false}
      setDisplayState={setDisplayStateSpy}
      focusComponentName={'CACriminalBackgroundCard'}
      getFocusClassName={getFocusClassNameSpy}
      setFocusState={setFocusStateSpy}
    />)
    componentMountShowPrivacy = mount(<PrivacyStatement
      privacyStatementDisplay
      setDisplayState={setDisplayStateSpy}
      focusComponentName={'CACriminalBackgroundCard'}
      getFocusClassName={getFocusClassNameSpy}
      setFocusState={setFocusStateSpy}
    />)
  })
  describe('Verify component will mount', () => {
    it('verify component did mount', () => {
      expect(componentMount.length).toEqual(1)
    })
    it('onClick event shows details toggles display to true', () => {
      const cardComponent = componentMount.find('#privacyStatementToggle')
      cardComponent.simulate('click')
      expect(setDisplayStateSpy).toHaveBeenCalledWith('privacyStatementDisplay', true)
    })
    it('onClick event shows details toggles display to false ', () => {
      const cardComponent = componentMountShowPrivacy.find('#privacyStatementToggle')
      cardComponent.simulate('click')
      expect(setDisplayStateSpy).toHaveBeenCalledWith('privacyStatementDisplay', false)
    })
  })
})
