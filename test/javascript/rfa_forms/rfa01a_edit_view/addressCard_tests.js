import React from 'react'
import AddressCard from 'rfa_forms/rfa01a_edit_view/addressCard.js'
import {stateTypes} from './../../helpers/constants'
var TestUtils = require('react-dom/test-utils')

describe('Verify Physical Address', function () {
  const props = {
    stateTypes: { stateTypes
    }
  }
  const addressCard = TestUtils.createRenderer()
  const cardRendered = addressCard.render(<AddressCard {...props} />)

  it('verify Resident Address fields', function () {
    let addressClassName = cardRendered
    expect(addressClassName.props.className).toBe('card-body')
  })
})
