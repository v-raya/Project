import React from 'react'
import AboutApplicant from '../../../app/javascript/forms/aboutApplicant_card.js'
var TestUtils = require('react-dom/lib/ReactTestUtils')
import {languageTypes, stateTypes, educationLevels, genderTypes, ethnicityTypes} from '../helpers/constants'

describe('educationLevels', function () {
  const props = {
    educationLevels: {
      items: educationLevels
    },
    genderTypes: {
      items: genderTypes
    },
    ethnicityTypes: {
      items: ethnicityTypes
    },
    languageTypes: {
      items: languageTypes
    },
    stateTypes: {
      items: stateTypes
    }
  }
  const aboutApplicantCard = TestUtils.createRenderer()
  const cardRendered = aboutApplicantCard.render(<AboutApplicant {...props} />)

  it('verify Resident Address fields', function () {
    let residenceClassName = cardRendered
    expect(residenceClassName.props.className).toBe('card-body')
  })
})
