import React from 'react'
import OtherAdults from '../../../app/javascript/forms/OtherAdultsCard'
var TestUtils = require('react-dom/lib/ReactTestUtils')
import {relationshipTypes} from '../helpers/constants'

describe('Verify Physical Address', function () {
  const props = {
    relationshipTypes: {
      items: relationshipTypes
    }
  }
  const otherAdultsCard = TestUtils.createRenderer()
  const cardRendered = otherAdultsCard.render(<OtherAdults {...props} />)

  it('verify other adults fields', function () {
    let residenceClassName = cardRendered
    expect(residenceClassName.props.className).toBe('card-body')
  })
})
