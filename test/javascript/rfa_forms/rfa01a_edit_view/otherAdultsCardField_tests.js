import React from 'react'
import {OtherAdultsCardField} from 'components/common/OtherAdultsCardField'
import {shallow, mount} from 'enzyme'
import {relationshipTypes, suffixTypes, prefixTypes} from './../../helpers/constants'
import Validator from 'helpers/validator'

describe('Verify other adultsFields', () => {
  const applicants = [{
    first_name: 'gdfghfhgv',
    last_name: 'hgbhg',
    middle_name: ''
  }]
  const OtherAdultsCard = {
    relationship_to_applicants: [
      {
        applicant_id: null,
        relationship_to_applicant_freeform: '',
        relationship_to_applicant: {
          'id': 0,
          'value': ''
        }
      }
    ],
    is_residing_in_home: false,
    index: 0,
    to_delete: false,
    'first_name': '',
    'middle_name': '',
    'last_name': '',
    date_of_birth: '2017-01-01'
  }

  let otherAdultsCardComp, handleRelationshipTypeChangeSpy, onFieldChangeSpy
  beforeEach(() => {
    handleRelationshipTypeChangeSpy = jasmine.createSpy('handleRelationshipTypeChange')
    onFieldChangeSpy = jasmine.createSpy('onFieldChange')
    const validator = new Validator({})
    otherAdultsCardComp = mount(<OtherAdultsCardField
      index={0}
      relationship_types={relationshipTypes}
      suffixTypes={suffixTypes.items}
      prefixTypes={prefixTypes.items}
      applicants={applicants}
      handleRelationshipTypeChange={handleRelationshipTypeChangeSpy}
      onFieldChange={onFieldChangeSpy}
      otherAdults={OtherAdultsCard}
      validator={validator} />)
  })

  it('verifies relationship type field', () => {
    const relationShipField = otherAdultsCardComp.find('.col-md-12').find('#relationship_to_applicants0adult0relationship_to_applicant_freeform').hostNodes()
    relationShipField.simulate('change', {target: {value: 'Sibling'}})
    expect(handleRelationshipTypeChangeSpy).toHaveBeenCalledWith({ first_name: 'gdfghfhgv', last_name: 'hgbhg', middle_name: '' }, 'Sibling', 0, 0, 'relationship_to_applicant_freeform')
  })
  it('verify is residing in Home', () => {
    const relationShipField = otherAdultsCardComp.find('#is_residing_in_hometrue').hostNodes()
    relationShipField.simulate('change', {target: {value: 'true'}})
    expect(onFieldChangeSpy).toHaveBeenCalledWith(0, 'true', 'is_residing_in_home')
  })
  it('verify is not residing in Home', () => {
    const relationShipField = otherAdultsCardComp.find('#is_residing_in_hometrue').hostNodes()
    relationShipField.simulate('change', {target: {value: 'false'}})
    expect(onFieldChangeSpy).toHaveBeenCalledWith(0, 'false', 'is_residing_in_home')
  })

  it('verifies date of birth', () => {
    const dateOfBirthField = otherAdultsCardComp.find('#date_of_birth').hostNodes()
    dateOfBirthField.simulate('change', {target: {value: '02/01/2000'}})
    expect(onFieldChangeSpy).toHaveBeenCalledWith(0, '2000-02-01', 'date_of_birth')
  })
  it('verifies first name field', () => {
    const firstNameField = otherAdultsCardComp.find('#first_name').hostNodes()
    firstNameField.simulate('change', {target: {value: 'test'}})
    expect(onFieldChangeSpy).toHaveBeenCalledWith(0, 'test', 'first_name')
  })
  it('verifies middle name field', () => {
    const middleNameField = otherAdultsCardComp.find('#middle_name').hostNodes()
    middleNameField.simulate('change', {target: {value: 'test'}})
    expect(onFieldChangeSpy).toHaveBeenCalledWith(0, 'test', 'middle_name')
  })
  it('verifies last name field', () => {
    const lastNameField = otherAdultsCardComp.find('#last_name').hostNodes()
    lastNameField.simulate('change', {target: {value: 'test'}})
    expect(onFieldChangeSpy).toHaveBeenCalledWith(0, 'test', 'last_name')
  })
  it('verifies component did unmount', () => {
    const instance = otherAdultsCardComp.instance()
    expect(instance.props.validator.validations.size).toEqual(4)
    otherAdultsCardComp.unmount()
    expect(instance.props.validator.validations.size).toEqual(0)
  })
  it('Make sure inputted text is equal to the restricted max length', () => {
    const result = otherAdultsCardComp.find('#first_name').hostNodes()
    expect(result.props().maxLength).toEqual('20')
  })
  it('Make sure inputted text is equal to the restricted max length', () => {
    const result = otherAdultsCardComp.find('#middle_name').hostNodes()
    expect(result.props().maxLength).toEqual('20')
  })
  it('Make sure inputted text is equal to the restricted max length', () => {
    const result = otherAdultsCardComp.find('#last_name').hostNodes()
    expect(result.props().maxLength).toEqual('25')
  })
})
