import React from 'react'
import {shallow, mount} from 'enzyme'
import CommonAddressFields from 'components/rfa_forms/commonAddressField.jsx'
import {stateTypes} from '../../helpers/constants'

describe('Verify Common Address Fields Component', () => {
  let commonAddressComp, addressFields
  beforeEach(() => {
    let addressFields = {
      mailing_address: {
        street_address: '',
        zip: '',
        city: '',
        state: null
      }
    }
    commonAddressComp = mount(<CommonAddressFields
      stateTypes={stateTypes.items}
      addressFields={addressFields}/>)
  })
  it('Load Address Fields', () => {
    expect(commonAddressComp.length).toEqual(1 )
  })
})