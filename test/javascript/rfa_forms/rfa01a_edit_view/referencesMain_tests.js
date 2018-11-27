import React from 'react'
import {mount} from 'enzyme'
import ReferenceMain from 'rfa_forms/rfa01a_edit_view/referencesMain.jsx'
import {stateTypes, nameTypes, suffixTypes, prefixTypes} from '../../helpers/constants'
import Validator from 'helpers/validator'

describe('Verify References Main', () => {
  let referenceMainComp, referenceMainFieldObjectComp,
    setParentStateSpy, getFocusClassNameSpy, setFocusStateSpy,
    setApplicationStateSpy
  const fieldRefValues = {
    name_suffix: null,
    name_prefix: null,
    first_name: '',
    middle_name: '',
    last_name: '',
    name_type: null,
    mailing_address: {
      street_address: '',
      zip: '',
      city: '',
      state: null
    },
    phone_number: '',
    email: ''
  }

  const fieldObjectRefValues = {
    items: [fieldRefValues]
  }
  beforeEach(() => {
    setParentStateSpy = jasmine.createSpy('setParentState')
    setApplicationStateSpy = jasmine.createSpy('setResidenceState')
    getFocusClassNameSpy = jasmine.createSpy('getFocusClassName')
    setFocusStateSpy = jasmine.createSpy('setFocusState')
    const validator = new Validator({})

    referenceMainComp = mount(<ReferenceMain
      index={0}
      focusComponentName={getFocusClassNameSpy}
      references={[fieldRefValues]}
      setParentState={setApplicationStateSpy}
      getFocusClassName={getFocusClassNameSpy}
      setFocusState={setFocusStateSpy}
      stateTypes={stateTypes.items}
      suffixTypes={suffixTypes.items}
      prefixTypes={prefixTypes.items}
      nameTypes={nameTypes.items}
      idPrefix={`reference${1}`}
      validator={validator} />)

    referenceMainFieldObjectComp = mount(<ReferenceMain
      index={0}
      focusComponentName={getFocusClassNameSpy}
      references={[fieldRefValues]}
      setParentState={setApplicationStateSpy}
      getFocusClassName={getFocusClassNameSpy}
      setFocusState={setFocusStateSpy}
      stateTypes={stateTypes.items}
      suffixTypes={suffixTypes.items}
      prefixTypes={prefixTypes.items}
      nameTypes={nameTypes.items}
      idPrefix={`reference${1}`}
      validator={validator} />)
  })
  it('verify component load', () => {
    expect(referenceMainComp.length).toEqual(1)
  })
  it('verify reference card to create reference Object', () => {
    const firstNameFieldChange = referenceMainComp.find('#first_name').hostNodes()
    fieldRefValues.first_name = 'First Name'
    firstNameFieldChange.simulate('change', {target: {value: 'First Name'}})
    expect(setApplicationStateSpy).toHaveBeenCalledWith('references', {'items': [fieldRefValues]})
  })
  it('verify reference card to check focus', () => {
    const firstNameFieldChange = referenceMainComp.find('#first_name').hostNodes()
    firstNameFieldChange.simulate('change', {target: {value: 'First Name'}})
    expect(getFocusClassNameSpy).toHaveBeenCalledWith('referenceMain_0')
    const firstReferenceSection = referenceMainComp.find('#referenceMain_0')
    firstReferenceSection.simulate('click')
    expect(setFocusStateSpy).toHaveBeenCalled()
  })

  it('tests references as an object with items', () => {
    expect(referenceMainFieldObjectComp.length).toEqual(1)
  })
})
