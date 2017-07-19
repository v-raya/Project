import React from 'react'
import PhoneComponent from '../../../app/javascript/forms/phoneNumberCardsGroup.jsx'
import {shallow} from 'enzyme'
import {phoneTypes} from '../helpers/constants'

describe('Verify Phone Card Component View', function () {
  // let phoneCardComp = TestUtils.createRenderer()
  // let phoneCardRender = phoneCardComp.render(<PhoneNumbersCard />)
  // let phoneCardTag = phoneCardRender.props

  let component
  let onAddCardSpy

  beforeEach(() => {
    onAddCardSpy = jasmine.createSpy('addCard')
    component = shallow(
      <PhoneComponent
        phoneTypes={phoneTypes}
        phones={[]}
        setParentState={onAddCardSpy}
      />
    )
  })

  describe('when "Add new phone number" is clicked', () => {
    it('calls addCard on click', () => {
      component.find('button[className="btn btn-default"]').simulate('click')
      expect(onAddCardSpy).toHaveBeenCalled()
    })
  })

  // it('has class name', function () {
  //   expect(phoneCardTag.className).toBe('card-body')
  // })
  // it('expcet children to be array', function () {
  //   expect(phoneCardTag.children.length).toEqual(2)
  // })
  // it('expect phone card to have button', function () {
  //   let phoneButtonTag = phoneCardTag.children[1].props.children
  //   expect(phoneButtonTag.type).toBe('button')
  // })
  // it('expect button with text add another phone +', function () {
  //   let phoneButtonTag = phoneCardTag.children[1].props.children
  //   expect(phoneButtonTag.props.children).toEqual('Add another Number +')
  // })
})
