import React from 'react'
import AboutApplicantCard from '../../../app/javascript/forms/aboutApplicantCard'
var TestUtils = require('react-dom/lib/ReactTestUtils')

describe('Verify About Applicant Card', function () {
  let props = {
    educationLevels: {
      items: []
    },
    genderTypes: {
      items: []
    },
    ethnicityTypes: {
      items: []
    },
    languageTypes: {
      items: []
    },
    stateTypes: {
      items: []
    }
  }
  let aboutAppComp = TestUtils.createRenderer()
  let aboutAppRender = aboutAppComp.render(<AboutApplicantCard {... props} />)
  let aboutAppTag = aboutAppRender.props
  it('to have class', function () {
    expect(aboutAppTag.className).toBe('card-body')
  })
})