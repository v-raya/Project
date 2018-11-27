import React from 'react'
import {shallow, mount} from 'enzyme'
import ReferencesCard from 'rfa_forms/rfa01a_edit_view/referencesCard.jsx'
import {stateTypes, nameTypes, suffixTypes, prefixTypes} from '../../helpers/constants'
import Validator from 'helpers/validator'
import {RfaCommon} from 'constants/rfaText'

describe('References Card', () => {
  let referencesComp, setParentStateSpy, handleAddressChangeSpy
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
  beforeEach(() => {
    setParentStateSpy = jasmine.createSpy('setParentState')
    const validator = new Validator({})
    referencesComp = mount(<ReferencesCard
      index={0}
      idPrefix={`reference${1}`}
      reference={fieldRefValues}
      namePrefixId='name_prefix'
      nameSuffixId='name_suffix'
      firstNameId='first_name'
      middleNameId='middle_name'
      lastNameId='last_name'
      firstName={fieldRefValues.first_name}
      middleName={fieldRefValues.middle_name}
      lastName={fieldRefValues.last_name}
      nameSuffix={fieldRefValues.name_suffix}
      namePrefix={fieldRefValues.name_prefix}
      nameTypes={nameTypes.items}
      suffixTypes={suffixTypes.items}
      prefixTypes={prefixTypes.items}
      stateTypes={stateTypes.items}
      setParentState={setParentStateSpy}
      validator={validator} />)
  })
  it('Verify reference Component loaded', () => {
    expect(referencesComp.length).toEqual(1)
  })
  it('Verify email address label', () => {
    expect(referencesComp.find('#email').at(0).props().label).toBe(`Email Address${RfaCommon.requiredIndicator}`)
  })
  it('verify phone change in reference Card', () => {
    const phoneField = referencesComp.find('#reference1phone_number').hostNodes()
    phoneField.simulate('change', {target: {value: '(888) 444-2323'}})
    fieldRefValues.phone_number = '(888) 444-2323'
    expect(setParentStateSpy).toHaveBeenCalledWith('phone_number', '(888) 444-2323', 0)
  })
  it('verify phone change in reference Card', () => {
    const phoneField = referencesComp.find('#email').hostNodes()
    phoneField.simulate('change', {target: {value: 'test@test.com'}})
    fieldRefValues.email = 'test@test.com'
    expect(setParentStateSpy).toHaveBeenCalledWith('email', 'test@test.com', 0)
  })
  it('check Address field loaded and field change', () => {
    const physicalAddress = referencesComp.find('#Residentialstreet_address').hostNodes()
    physicalAddress.simulate('change', {target: {value: '2870 Gateway Oaks Dr'}})
    expect(setParentStateSpy).toHaveBeenCalledWith('mailing_address', { 'street_address': '2870 Gateway Oaks Dr', 'zip': '', 'city': '', 'state': null }, 0)
  })
})
