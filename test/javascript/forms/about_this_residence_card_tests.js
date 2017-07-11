import React from 'react'
import AboutThisResidenceCard from '../../../app/javascript/forms/aboutThisResidenceCard.js'
var TestUtils = require('react-dom/lib/ReactTestUtils');
import {languageTypes, residenceTypes} from '../helpers/constants'

describe('Verify Physical Address', function () {
    const props = {
        languageTypes: {
            items : languageTypes
        },
        residenceTypes: {
            items : residenceTypes
        }
    }
    const aboutResidenceCard = TestUtils.createRenderer()
    const cardRendered = aboutResidenceCard.render(<AboutThisResidenceCard {...props}/>)

    it('verify Resident Address fields', function () {
        let residenceClassName = cardRendered
        expect(residenceClassName.props.className).toBe('card-body')
    })
})
