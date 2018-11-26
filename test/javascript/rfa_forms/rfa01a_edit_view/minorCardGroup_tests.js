import React from 'react'
import MinorCardsGroup from 'rfa_forms/rfa01a_edit_view//minorCardsGroup.jsx'
import {shallow, mount} from 'enzyme'
import {genderTypes, relationshipTypes, selectedYes} from '../../helpers/constants'
import {minorDefaults} from 'constants/defaultFields'
import Validator from 'helpers/validator'
describe('Verify minor children Component View', () => {
  let component, componentMount, setFocusStateSpy, onFieldChangeSpy
  let props, handleRelationshipTypeChangeSpy, validator, componentToDelete
  const applicants = [{
    first_name: 'gdfghfhgv',
    last_name: 'hgbhg',
    middle_name: ''
  }]
  let minorCardChild = {
    gender: {
      'id': 0,
      'value': ''
    },
    relationship_to_applicants: [
      {
        applicant_id: null,
        child_financially_supported: false,
        child_adopted: 'yes',
        relationship_to_applicant_freeform: '',
        relationship_to_applicant: {
          'id': 0,
          'value': ''
        }
      }
    ],
    date_of_birth: '2017-01-01'
  }

  let minorCardChildToDelete = {
    to_delete: true,
    gender: {
      'id': 0,
      'value': ''
    },
    relationship_to_applicants: [
      {
        applicant_id: null,
        child_financially_supported: false,
        child_adopted: 'yes',
        relationship_to_applicant_freeform: '',
        relationship_to_applicant: {
          'id': 0,
          'value': ''
        }
      }
    ],
    date_of_birth: '2017-01-01'
  }

  let setParentStateSpy = jasmine.createSpy()
  setFocusStateSpy = jasmine.createSpy('setFocusState')
  let getFocusClassNameSpy = jasmine.createSpy('getFocusClassName')
  setParentStateSpy = jasmine.createSpy('setParentState')
  handleRelationshipTypeChangeSpy = jasmine.createSpy('handleRelationshipTypeChange')
  onFieldChangeSpy = jasmine.createSpy('onFieldChange')

  beforeEach(() => {
    props = {
      minorChildren: [minorCardChild],
      applicants: applicants,
      genderTypes: genderTypes.items,
      relationshipTypes: relationshipTypes,
      relationshipToApplicantTypes: relationshipTypes,
      handleRelationshipTypeChange: handleRelationshipTypeChangeSpy,
      setParentState: setParentStateSpy,
      setFocusState: setFocusStateSpy,
      getFocusClassName: getFocusClassNameSpy,
      validator: new Validator({})
    }

    component = shallow(
      <MinorCardsGroup {...props} />
    )

    componentToDelete = mount(<MinorCardsGroup
      minorChildren={[minorCardChildToDelete]}
      genderTypes={genderTypes.items}
      applicants={applicants}
      relationshipTypes={relationshipTypes}
      handleRelationshipTypeChange={handleRelationshipTypeChangeSpy}
      relationshipToApplicantTypes={relationshipTypes}
      setParentState={setParentStateSpy}
      setFocusState={setFocusStateSpy}
      getFocusClassName={getFocusClassNameSpy}
      validator={new Validator({})} />)

    componentMount = mount(<MinorCardsGroup {...props} />)
  })
  describe('Verify Foster Care Card Selection', () => {
    it('select foster care card', () => {
      let minorsSectionDiv = component.find('#minorsSection')
      minorsSectionDiv.simulate('click')
      expect(setFocusStateSpy).toHaveBeenCalledWith('minorsSection')
    })
  })
  describe('Verify minor card Component View', () => {
    it('has class name', () => {
      componentMount.update()
      spyOn(componentMount.instance(), 'handleRelationshipTypeChange').and.callThrough()

      let relationShipField = componentMount.find('.col-md-12').first().find('#relationship_to_applicant0child0relationship_to_applicant_freeform').hostNodes()
      relationShipField.simulate('change', {target: {value: 'Sibling'}})

      minorCardChild.relationship_to_applicants[0].relationship_to_applicant_freeform = 'Sibling'
      expect(setParentStateSpy).toHaveBeenCalledWith('minor_children', [minorCardChild])
    })

    it('tests toDelete', () => {
      expect(componentToDelete.find('.card-body').length).toEqual(1)
    })
    it('tests onFieldChange', () => {
      componentMount.update()
      spyOn(componentMount.instance(), 'handleRelationshipTypeChange').and.callThrough()
      let childFinanciallySupported = componentMount.find('input[type="radio"]').at(0).hostNodes()
      childFinanciallySupported.simulate('change', {target: {value: 'false'}})
      // minorCardChild.child_financially_supported = '2'
      expect(setParentStateSpy).toHaveBeenCalledWith('minor_children', [minorCardChild])
    })
  })

  describe('Verify minor card Component View', () => {
    it('has class name', () => {
      expect(component.find('.card-body').length).toEqual(1)
    })
    it('expect children to be array', () => {
      expect(component.children.length).toEqual(1)
    })
    it('expects six validations', () => {
      expect(componentMount.instance().props.validator.validations.size).toEqual(5)
    })
  })

  describe('when "Add new minor card" is clicked', () => {
    it('expect minor card to be button', () => {
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

      // expect(props.minorchil.length).toEqual(1)
      expect(setParentStateSpy).toHaveBeenCalledWith('minor_children', newData)
    })

    describe('when close minor card is clicked', () => {
      it('Clears data when 1 phone number is present', () => {
        spyOn(component.instance(), 'clickClose').and.callThrough()
        component.find('.remove-btn').simulate('click')
        let newData = []
        newData[0] = minorCardChild
        newData[1] = minorDefaults
        expect(component.instance().clickClose).toHaveBeenCalled()
        expect(props.minorChildren.length).toEqual(1)
        expect(setParentStateSpy).toHaveBeenCalledWith('minor_children', [])
      })

      it('Deletes minor children when 2 cards are present', () => {
        let newData = []
        newData[0] = minorCardChild
        newData[1] = minorDefaults
        component.setProps({minorChildren: newData})

        spyOn(component.instance(), 'clickClose').and.callThrough()

        component.find('.remove-btn').at(0).simulate('click')
        component.update()
        expect(component.instance().clickClose).toHaveBeenCalledWith(0)

        // check if setParent is called
        expect(setParentStateSpy).toHaveBeenCalledWith('minor_children', [])
        expect(props.minorChildren.length).toEqual(1)
      })
    })
  })
})
