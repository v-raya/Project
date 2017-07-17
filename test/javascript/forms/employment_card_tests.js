import React from 'react'
import Employment from '../../../app/javascript/forms/employmentCard.jsx'
var TestUtils = require('react-dom/lib/ReactTestUtils')
import {stateTypes, salaryTypes} from '../helpers/constants'

describe('Driver License State', function () {
  const props = {
    stateTypes: {
      stateTypes
    },
    salaryTypes: {
      items: salaryTypes
    }
  }
  const employmentCard = TestUtils.createRenderer()
  const cardRendered = employmentCard.render(<Employment {...props} />)
    // debugger

  it('verify Resident Address fields', function () {
    let employmentClassName = cardRendered
    expect(employmentClassName.props.className).toBe('card-body')
  })
})
