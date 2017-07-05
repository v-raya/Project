import React from 'react'
import AddressCard from '../../../app/javascript/forms/address_card.js'
var TestUtils = require('react-dom/lib/ReactTestUtils');
import {stateTypes} from '../helpers/constants'

describe('Verify Physical Address', function () {
    const props = {
        stateTypes: { stateTypes
        }
    }
    const addressCard = TestUtils.createRenderer()
    const cardRendered = addressCard.render(<AddressCard {...props}/>)

    it('verify Resident Address fields', function () {
        let addressClassName = cardRendered
        expect(addressClassName.props.className).toBe('card-body')
    })
})
