import React from 'react'
import MinorCardsGroup , {minorDefaults} from 'rfa_forms/rfa01a_edit_view//minorCardsGroup.jsx'
import {shallow} from 'enzyme'
import {genderTypes, relationshipTypes} from '../../helpers/constants'



describe('Verify minor children Component View', function () {
  let component
  let props
  const minorCardChild = {
    relationship_to_applicant: 'Sibling',
    gender: 'Female',
    child_financially_supported: 'yes',
    child_adopted: 'yes',
    date_of_birth: '01-01-2017',
    child_related_to: 'yes'
    }

  let setParentStateSpy = jasmine.createSpy()

  beforeEach(() => {
    setParentStateSpy = jasmine.createSpy('setParentState')
    props = {
      minorChildren: [minorCardChild],
      genderTypes: genderTypes,
      relationshipTypes: relationshipTypes,
      setParentState: setParentStateSpy
    }

    component = shallow(
      <MinorCardsGroup {...props} />
    )

  })

  describe('Verify minor card Component View', () => {
    it('has class name', function () {
      expect(component.find('.card-body').length).toEqual(1)
    })
    it('expect children to be array', function () {
      expect(component.children.length).toEqual(1)
    })
  })

  describe('when "Add new minor card" is clicked', () => {
    it('expect minor card to be button', function () {
      const x = component.find('button[className="btn btn-default"]')

      expect(component.find('button[className="btn btn-default"]').type()).toEqual('button')
    })

    it('calls addCard and resulting minorchildren contains 2 cards', () => {
      spyOn(component.instance(), 'addCard').and.callThrough()
      component.instance().addCard()
      expect(component.instance().addCard).toHaveBeenCalled()

      // build data that parent should be called with
      let newData = []
      newData[0] = minorCardChild
      newData[1] = minorDefaults

      //expect(props.minorchil.length).toEqual(1)
      expect(setParentStateSpy).toHaveBeenCalledWith('minorChildren', newData)

    })


    describe('when close minor card is clicked', () => {
      it('Clears data when 1 phone number is present', () => {
        spyOn(component.instance(), 'clickClose').and.callThrough()
        component.find('.glyphicon-remove').simulate('click')
        let newData = []
        newData[0] = minorCardChild
        newData[1] = minorDefaults
        expect(component.instance().clickClose).toHaveBeenCalledWith(0)

        expect(props.minorChildren.length).toEqual(1)
        expect(setParentStateSpy).toHaveBeenCalledWith('minorChildren', [minorDefaults])


      })

      it('Deletes minor children when 2 cards are present', () => {
        let newData = []
        newData[0] = minorCardChild
        newData[1] = minorDefaults
        component.setProps({minorChildren: newData})

        spyOn(component.instance(), 'clickClose').and.callThrough()

        component.find('.glyphicon-remove').at(0).simulate('click')
        component.update()
        expect(component.instance().clickClose).toHaveBeenCalledWith(0)

        // check if setParent is called
        expect(setParentStateSpy).toHaveBeenCalledWith('minorChildren', [minorDefaults])
        expect(props.minorChildren.length).toEqual(1)
      })

    })
    })
  })

