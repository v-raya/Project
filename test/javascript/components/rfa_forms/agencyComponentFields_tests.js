import React from 'react'
import {AgencyComponent} from 'components/rfa_forms/agencyComponentFields.js'
import {shallow, mount} from 'enzyme'
import {stateTypes} from '../../helpers/constants'

describe('verify agency component fields ', () => {
  let agencyComponent, onAgencyChangeSpy,
    removeAgencyCardSpy, q1History, optionList
  const indexValue = 0

  beforeEach(() => {
    q1History = {
      'agencies': ['new']
    }

    removeAgencyCardSpy = jasmine.createSpy('removeAgencyCard')
    onAgencyChangeSpy = jasmine.createSpy('onAgencyChange')

    agencyComponent = shallow(<AgencyComponent
      index={indexValue}
      id={`Q1-${indexValue}`}
      defKey='foster_care_licenses_q1'
      subKey='agencies'
      agencies={q1History.agencies}
      label='Agency Name'
      placeholder=''
      dropdownLabel='license type'
      inputId={`agency-q1-name-${indexValue}`}
      dropDownId={`agency-q1-type-${indexValue}`}
      optionList={stateTypes.items}
      dropDownValue='a'
      inputValue='ABC'
      removeAgencyCard={removeAgencyCardSpy}
      onAgencyChange={onAgencyChangeSpy}
    />)
  })

  it('Test Render', () => {
    expect(agencyComponent.find('.list-item').length).toBe(1)
  })

  it('verify remove added Agency Name', () => {
    const removeButton = agencyComponent.find('button')
    removeButton.simulate('click', 'event')
    expect(removeAgencyCardSpy).toHaveBeenCalledWith('event', [ 'new' ], indexValue, 'foster_care_licenses_q1', 'agencies')
  })

  it('verify onChange function for agency name field', () => {
    const changeAgencyName = agencyComponent.find(`#agency-q1-name-${indexValue}`)
    changeAgencyName.simulate('change', {target: {value: 'Agency New'}})
    expect(onAgencyChangeSpy).toHaveBeenCalledWith({target: {value: 'Agency New'}}, [ 'new' ], indexValue, 'name', 'foster_care_licenses_q1', 'agencies', 'Agency New')
  })

  it('verify agency change drop down', () => {
    const agencyDropDownField = agencyComponent.find(`#agency-q1-type-${indexValue}`)
    agencyDropDownField.simulate('change', {target: {options: {'1': {value: '1', text: 'License'}, selectedIndex: 1}}})
    expect(onAgencyChangeSpy).toHaveBeenCalledWith({target: {options: { '1': { value: '1', text: 'License' }, selectedIndex: 1 }}}, [ 'new' ], indexValue, 'type', 'foster_care_licenses_q1', 'agencies', ({ id: '1', value: 'License' }))
  })
})
