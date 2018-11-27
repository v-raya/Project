import React from 'react'
import {shallow, mount} from 'enzyme'
import {prefixTypes, suffixTypes, nameTypes} from './../../helpers/constants'
import Validator from 'helpers/validator'
import CompleteNameField from 'rfa_forms/rfa01a_edit_view/completeNameField.jsx'

describe('Verify Complete Name Field Component', () => {
  let component, onChangeSpy, fieldValues
  beforeEach(() => {
    fieldValues = {
      name_prefix: {
        id: '5',
        value: 'Miss'
      },
      name_type: {
        id: '2',
        value: 'Legal'
      }
    }
    onChangeSpy = jasmine.createSpy('onChange')
    component = mount(<CompleteNameField
      index={0}
      namePrefixId='name_prefix'
      nameSuffixId='name_suffix'
      firstNameId='first_name'
      middleNameId='middle_name'
      lastNameId='last_name'
      nameTypeId='name_type'
      firstName={fieldValues.first_name}
      middleName={fieldValues.middle_name}
      lastName={fieldValues.last_name}
      nameSuffix={fieldValues.name_suffix}
      namePrefix={fieldValues.name_prefix}
      nameType={fieldValues.name_type}
      prefixTypes={prefixTypes.items}
      nameTypes={nameTypes.items}
      suffixTypes={suffixTypes.items}
      validator={new Validator({})}
      onChange={onChangeSpy} />)
  })
  it('onChange event on Prefix dropdown', () => {
    const prefixDropDown = component.find('#name_prefix').hostNodes()
    prefixDropDown.simulate('change', {target: {options: {'4': {value: '4', text: 'Dr'}, selectedIndex: 4}}})
    expect(onChangeSpy).toHaveBeenCalledWith('name_prefix', {id: '4', value: 'Dr'}, 0)
  })
  it('onChange event on Prefix dropdown', () => {
    const suffixDropDown = component.find('#name_suffix').hostNodes()
    suffixDropDown.simulate('change', {target: {options: {'2': {value: '2', text: 'II'}, selectedIndex: 2}}})
    expect(onChangeSpy).toHaveBeenCalledWith('name_suffix', {id: '2', value: 'II'}, 0)
  })
  it('onChange event on Prefix dropdown', () => {
    const addedNameComponent = mount(<CompleteNameField
      index={0}
      fieldValues={fieldValues}
      prefixTypes={prefixTypes.items}
      nameTypes={nameTypes.items}
      suffixTypes={suffixTypes.items}
      nameTypeId='name_type'
      onChange={onChangeSpy} />)
    const suffixDropDown = addedNameComponent.find('#name_type').hostNodes()
    suffixDropDown.simulate('change', {target: {options: {'2': {value: '2', text: 'Legal'}, selectedIndex: 2}}})
    expect(onChangeSpy).toHaveBeenCalledWith('name_type', {id: '2', value: 'Legal'}, 0)
  })
  it('verifies component did unmount', () => {
    const instance = component.instance()
    expect(instance.props.validator.validations.size).toEqual(2)
    component.unmount()
    expect(instance.props.validator.validations.size).toEqual(0)
  })
  it('Make sure inputted text is equal to the restricted max length', () => {
    const result = component.find('#first_name').hostNodes()
    expect(result.props().maxLength).toEqual('20')
  })
  it('Make sure inputted text is equal to the restricted max length', () => {
    const result = component.find('#middle_name').hostNodes()
    expect(result.props().maxLength).toEqual('20')
  })
  it('Make sure inputted text is equal to the restricted max length', () => {
    const result = component.find('#last_name').hostNodes()
    expect(result.props().maxLength).toEqual('25')
  })
})
