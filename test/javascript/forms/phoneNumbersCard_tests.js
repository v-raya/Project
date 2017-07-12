import React from 'react'
import PhoneNumbersCard from '../../../app/javascript/forms/phoneNumbersCard.jsx'
var TestUtils = require('react-dom/lib/ReactTestUtils')

describe('Verify Phone Card Component View', function () {
  let phoneCardComp = TestUtils.createRenderer()
  let phoneCardRender = phoneCardComp.render(<PhoneNumbersCard />)
  let phoneCardTag = phoneCardRender.props
  it('has class name', function () {
    expect(phoneCardTag.className).toBe('card-body')
  })
  it('expcet children to be array', function () {
    expect(phoneCardTag.children.length).toEqual(2)
  })
  it('expect phone card to have button', function () {
    let phoneButtonTag = phoneCardTag.children[1].props.children
    expect(phoneButtonTag.type).toBe('button')
  })
  it('expect button with text add another phone +', function () {
    let phoneButtonTag = phoneCardTag.children[1].props.children
    expect(phoneButtonTag.props.children).toEqual('Add another Number +')
  })
})