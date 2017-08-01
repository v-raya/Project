import React from 'react'
import MinorCardsGroup from '../../../app/javascript/forms/minorCardsGroup.jsx'
var TestUtils = require('react-dom/lib/ReactTestUtils')
import {genderTypes} from '../helpers/constants'

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
