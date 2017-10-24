import React from 'react'
import {shallow, mount} from 'enzyme'
import {PlaceDateField} from 'components/rfa_forms/placeDateFields'
import {stateTypes} from '../../helpers/constants'

describe('Verify placeDateFields Component', () => {
  let placeDateFieldsComp,
    placeDateFieldsCompFields,
    previousRelationshipPrefixId,
    onDateChangeSpy,
    onCityChangeSpy,
    onStateChangeSpy
  beforeEach(() => {
    previousRelationshipPrefixId = 'prefix'
    placeDateFieldsCompFields = {
      dateValue: '',
      cityValue: '',
      stateValue: {
        id: '',
        value: ''
      }
    }
    onDateChangeSpy = jasmine.createSpy('onDateChange')
    onCityChangeSpy = jasmine.createSpy('onCityChange')
    onStateChangeSpy = jasmine.createSpy('onStateChange')
    placeDateFieldsComp = mount(<PlaceDateField
      dateId={previousRelationshipPrefixId + 'date'}
      cityId={previousRelationshipPrefixId + 'city'}
      stateId={previousRelationshipPrefixId + 'state'}
      dateValue={placeDateFieldsCompFields.dateValue}
      stateValue={placeDateFieldsCompFields.stateValue}
      cityValue={placeDateFieldsCompFields.cityValue}
      stateTypes={stateTypes.items}
      onDateChange={onDateChangeSpy}
      onCityChange={onCityChangeSpy}
      onStateChange={onStateChangeSpy} />)
  })

  it('Load placeDateFields ', () => {
    expect(placeDateFieldsComp.length).toEqual(1)
  })
})
