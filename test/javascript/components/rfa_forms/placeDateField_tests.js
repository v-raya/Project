import React from 'react'
import {shallow, mount} from 'enzyme'
import {PlaceDateField} from 'components/rfa_forms/placeDateFields'
import {stateTypes} from '../../helpers/constants'

describe('Verify placeDateFields Component', () => {
  let placeDateFieldsComp,
    placeDateFieldsCompFields,
    previousRelationshipPrefixId
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

    placeDateFieldsComp = mount(<PlaceDateField
      dateId={previousRelationshipPrefixId + 'date'}
      cityId={previousRelationshipPrefixId + 'city'}
      stateId={previousRelationshipPrefixId + 'state'}
      dateValue={placeDateFieldsCompFields.dateValue}
      stateValue={placeDateFieldsCompFields.stateValue}
      cityValue={placeDateFieldsCompFields.cityValue}
      stateTypes={stateTypes.items} />)
  })

  it('Load placeDateFields ', () => {
    expect(placeDateFieldsComp.length).toEqual(1)
  })
})
