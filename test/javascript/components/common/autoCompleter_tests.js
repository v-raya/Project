import {shallow, mount} from 'enzyme'
import AutoCompleter from 'components/common/autoCompleter.jsx'
import React from 'react'

describe('Verify Auto Completer', () => {
  let autoCompleterComp, onChangeSpy, autoFillAddressSpy
  beforeEach(() => {
    onChangeSpy = jasmine.createSpy('onChange')
    autoFillAddressSpy = jasmine.createSpy('autoFillAddress')
    autoCompleterComp = shallow(<AutoCompleter
      url={''}
      addressType={''}
      id={'street_address'}
      value = {''}
      autoFillAddress={autoFillAddressSpy}
      onChange={onChangeSpy}
    />)
  })
  it('test', () => {
    expect(autoCompleterComp.length).toBe(1)
  })
})