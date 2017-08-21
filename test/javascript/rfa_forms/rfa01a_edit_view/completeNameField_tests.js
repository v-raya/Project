import React from 'react'
import {shallow, mount} from 'enzyme'
import {prefixTypes, suffixTypes, nameTypes} from './../../helpers/constants'
import CompleteNameField from 'rfa_forms/rfa01a_edit_view/completeNameField.jsx'

describe('Verify Complete Name Field Component', () => {
  let component, onChangeSpy, fieldValues
  beforeEach(() => {
    fieldValues = {
      name_prefix: {
        id: '5',
        value: 'Miss'
      }
    }
    onChangeSpy = jasmine.createSpy('onChange')
    component = shallow(<CompleteNameField
      fieldValues={fieldValues}
      prefixTypes={prefixTypes.items}
      nameTypes={nameTypes.items}
      suffixTypes={suffixTypes.items}
      onChange={onChangeSpy} />)
  })
  it('onChange event on Prefix dropdown', () => {
    let prefixDropDown = component.find('#name_prefix')
    prefixDropDown.simulate('change', {target: {selectedOptions: [{value: '4', text: 'Dr'}]}})
    expect(onChangeSpy).toHaveBeenCalledWith('name_prefix', {id: '4', value: 'Dr'}, undefined)
  })
  it('onChange event on Prefix dropdown', () => {
    let suffixDropDown = component.find('#name_suffix')
    suffixDropDown.simulate('change', {target: {selectedOptions: [{value: '2', text: 'II'}]}})
    expect(onChangeSpy).toHaveBeenCalledWith('name_suffix', {id: '2', value: 'II'}, undefined)
  })
  it('onChange event on Prefix dropdown', () => {
    let addedNameComponent = shallow(<CompleteNameField
      index={0}
      fieldValues={fieldValues}
      prefixTypes={prefixTypes.items}
      nameTypes={nameTypes.items}
      suffixTypes={suffixTypes.items}
      onChange={onChangeSpy} />)

    let suffixDropDown = addedNameComponent.find('#name_type')
    suffixDropDown.simulate('change', {target: {selectedOptions: [{value: '2', text: 'Legal'}]}})
    expect(onChangeSpy).toHaveBeenCalledWith('name_type', {id: '2', value: 'Legal'}, 0)
  })
})