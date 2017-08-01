import React from 'react'
import MinorCardsGroup from 'rfa_forms/rfa01a_edit_view//minorCardsGroup.jsx'
import {genderTypes} from './../../helpers/constants'
var TestUtils = require('react-dom/lib/ReactTestUtils')

describe('Verify gender', function () {
  const props = {
    genderTypes: {
      items: genderTypes
    }
  }
  const MinorCard = TestUtils.createRenderer()
  const cardRendered = MinorCard.render(<MinorCardsGroup {...props} />)

  it('verify minor children card fields', function () {
    let MinorChildrenClassName = cardRendered
    expect(MinorChildrenClassName.props.className).toBe('minor_card')
  })
})
