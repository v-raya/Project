import React from 'react'
import OtherAdults from 'rfa_forms/rfa01a_edit_view/OtherAdultsCardsGroup'
import {relationshipTypes} from './../../helpers/constants'
var TestUtils = require('react-dom/test-utils')

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
    expect(residenceClassName.props.className).toBe('other_adults_card')
  })
})
