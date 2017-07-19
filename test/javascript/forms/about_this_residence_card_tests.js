import React from 'react'
import AboutThisResidenceCard from '../../../app/javascript/forms/aboutThisResidenceCard.jsx'
import {languageTypes, residenceTypes} from '../helpers/constants'
var TestUtils = require('react-dom/lib/ReactTestUtils')

describe('Verify Physical Address', function () {
  const blankAboutThisResidenceFields = Object.freeze({
    residence_ownership_type: {
      id: '',
      value: ''
    },
    home_languages: [{
      id: '',
      value: ''
    }],
    directions_to_home: '',
    weapon_in_home: '',
    body_of_water_exist: '',
    body_of_water_description: '',
    others_using_residence_as_mailing: '',
    other_people_using_residence_as_mailing: [{
      first_name: '',
      middle_name: '',
      last_name: ''
    }]
  })
  const props = {
    languageTypes: {languageTypes},
    residenceTypes: {residenceTypes},
    aboutResidence: {blankAboutThisResidenceFields}
  }

  const aboutResidenceCard = TestUtils.createRenderer()
  const cardRendered = aboutResidenceCard.render(<AboutThisResidenceCard {...props} />)

  it('verify Resident Address fields', function () {
    let residenceClassName = cardRendered
    expect(residenceClassName.props.className).toBe('card-body')
  })
})
