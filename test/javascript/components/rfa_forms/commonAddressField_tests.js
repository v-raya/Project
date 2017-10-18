import React from 'react'
import {shallow, mount} from 'enzyme'
import CommonAddressFields from 'components/rfa_forms/commonAddressField.jsx'
import {stateTypes} from '../../helpers/constants'

describe('Verify Common Address Fields Component', () => {
  let commonAddressComp, addressFields, onChangeSpy
  beforeEach(() => {
    onChangeSpy = jasmine.createSpy('onChange')
    let addressFields = {
      street_address: '',
      zip: '',
      city: '',
      state: null
    }
    commonAddressComp = mount(<CommonAddressFields
      index={0}
      suggestions={[]}
      stateTypes={stateTypes.items}
      addressFields={addressFields}
      onChange={onChangeSpy}/>)
  })
  it('Load Address Fields', () => {
    expect(commonAddressComp.length).toEqual(1 )
  })
  it('verify mailing address zip change', () => {
    let zipCodeField = commonAddressComp.find('#zip')
    zipCodeField.simulate('change', {target: {value: '95833'}})
    expect(onChangeSpy).toHaveBeenCalledWith('zip', '95833')
  })
  it('verify mailing Address city change', () => {
    let cityField = commonAddressComp.find('#city')
    cityField.simulate('change', {target: {value: 'Sacramento'}})
    expect(onChangeSpy).toHaveBeenCalledWith('city', 'Sacramento')
  })
  it('verify mailing Address State change', () => {
    let stateDropDownField = commonAddressComp.find('#state_type')
    stateDropDownField.simulate('change', {target: {selectedOptions: [{value: 1, text: 'Alabama'}]}})
    expect(onChangeSpy).toHaveBeenCalledWith('state', { id: 1, value: 'Alabama' })
  })
})