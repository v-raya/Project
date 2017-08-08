import React from 'react'
import {MinorCardField} from 'rfa_forms/rfa01a_edit_view/minorCardField.js'
import {shallow, mount} from 'enzyme'
var TestUtils = require('react-dom/lib/ReactTestUtils')
import {relationshipTypes, genderTypes} from  './../../helpers/constants'



describe('Verify gender', function () {
  const applicants = [{
    first_name: "gdfghfhgv",
    last_name: "hgbhg",
    middle_name: ""
  }]
  const minorChildren = {
    index: 0,
    nameField: {
      firstName: 'child1',
      middleName: 'child2',
      lastName: 'child 3'
    },
    date_of_birth: '01-01-2017',
    child_financially_supported: 'yes',
    child_adopted: 'yes',
  }

  const setToWhom = (applicants) => {
    const newApplicants = applicants.map(function (applicant, index) {
      return {key: index, value: applicant.first_name + ' ' + applicant.middle_name + ' ' + applicant.last_name}
    })
    return newApplicants
  }

  let minorChildCardComp, handleNameFieldInputSpy, onFieldChangeSpy, setCardState
  let relationType = relationshipTypes
  beforeEach(() => {
    handleNameFieldInputSpy = jasmine.createSpy('')
    onFieldChangeSpy = jasmine.createSpy('')
    minorChildCardComp = shallow(<MinorCardField
      genderTypes={genderTypes.items}
      relationshipTypes={relationType}
      setToWhom={setToWhom}
      applicants={applicants}
      handleNameFieldInput={handleNameFieldInputSpy}
      onFieldChange={onFieldChangeSpy}
      minorChildren={minorChildren} />)
  })
  it('verify Relationship field', () => {
    let relationShipField = minorChildCardComp.find('#relationship_to_applicant')
    // spyOn(minorChildCardComp.instance(), 'onFieldChange').and.callThrough()
    relationShipField.simulate('change', {target: {selectedOptions: [{value: '2', text: 'Sibling'}]}})
    expect(onFieldChangeSpy).toHaveBeenCalledWith(undefined, {id: '2', value: 'Sibling'}, 'relationship_to_applicant')
  })

  it('verify child related field', () => {
    let relationShipField = minorChildCardComp.find('#child_related_to')
    // spyOn(minorChildCardComp.instance(), 'onFieldChange').and.callThrough()
    relationShipField.simulate('change', {target: {value: '2'}})
    expect(onFieldChangeSpy).toHaveBeenCalledWith(undefined, '2', 'child_related_to')
  })

  it('verify Gender', () => {
    let relationShipField = minorChildCardComp.find('#gender')
    // spyOn(minorChildCardComp.instance(), 'onFieldChange').and.callThrough()
    relationShipField.simulate('change', {target: {selectedOptions: [{value: '2', text: 'Female'}]}})
    expect(onFieldChangeSpy).toHaveBeenCalledWith(undefined, {id: '2', value: 'Female'}, 'gender')
  })
  it('verify date of birth', () => {
    let relationShipField = minorChildCardComp.find('#date_of_birth')
    // spyOn(minorChildCardComp.instance(), 'onFieldChange').and.callThrough()
    relationShipField.simulate('change', {target: {value: '01-01-2017'}})
    expect(handleNameFieldInputSpy).toHaveBeenCalledWith [ undefined, '01-01-2017', 'date_of_birth' ]
  })
  it('verify date of birth', () => {
    let relationShipField = minorChildCardComp.find('#child_financially_supported')
    // spyOn(minorChildCardComp.instance(), 'onFieldChange').and.callThrough()
    relationShipField.simulate('change',{target: {selectedOptions: [{value: '2', text: 'yes'}]}})
    expect(onFieldChangeSpy).toHaveBeenCalledWith [ undefined, {id: '2', value: 'yes'}, 'child_financially_supported' ]
  })
  it('verify date of birth', () => {
    let relationShipField = minorChildCardComp.find('#child_adopted')
    // spyOn(minorChildCardComp.instance(), 'onFieldChange').and.callThrough()
    relationShipField.simulate('change',{target: {selectedOptions: [{value: '2', text: 'yes'}]}})
    expect(onFieldChangeSpy).toHaveBeenCalledWith [ undefined, {id: '2', value: 'yes'}, 'child_adopted' ]
  })
})


