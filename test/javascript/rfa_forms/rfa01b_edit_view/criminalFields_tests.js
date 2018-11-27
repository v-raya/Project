import React from 'react'
import CriminalFields from 'rfa_forms/rfa01b_edit_view/criminalFields'
import {shallow, mount} from 'enzyme'
import Validator from 'helpers/validator'

describe('Verify criminal fields card', () => {
  const crime = Object.freeze({
    'offense': 'test',
    'offense_city': 'sacramento',
    'offense_state': {},
    'when_offense_happen': 'summer of 2016',
    'offense_details': 'details'
  })

  let clickCloseSpy, onFieldChangeSpy, componentMount
  const validator = new Validator({})
  beforeEach(() => {
    const clickCloseSpy = jasmine.createSpy('clickClose')
    onFieldChangeSpy = jasmine.createSpy('onFieldChange')

    componentMount = shallow(<CriminalFields
      index={0}
      crime={crime}
      idPrefix='test_'
      clickClose={clickCloseSpy}
      onFieldChange={onFieldChangeSpy}
      validator={validator} />)
  })
  describe('Verify component', () => {
    it('verify component did mount', () => {
      expect(componentMount.length).toEqual(1)
    })

    it('onChange event of offense', () => {
      const applicantDetails = componentMount.find('#test_offenseReason')
      applicantDetails.simulate('change', {target: {value: 'offense name'}})
      expect(onFieldChangeSpy).toHaveBeenCalledWith(0, 'offense', 'offense name')
    })

    it('onChange event on offense city', () => {
      const applicantDetails = componentMount.find('#test_offenseCity')
      applicantDetails.simulate('change', {target: {value: 'gate way oaks'}})
      expect(onFieldChangeSpy).toHaveBeenCalledWith(0, 'offense_city', 'gate way oaks')
    })

    it('onChange event on offense date', () => {
      const applicantDetails = componentMount.find('#test_OffenseDate')
      applicantDetails.simulate('change', {target: {value: 'new time'}})
      expect(onFieldChangeSpy).toHaveBeenCalledWith(0, 'when_offense_happen', 'new time')
    })

    it('onChange event on offense details', () => {
      const applicantDetails = componentMount.find('#test_offenseDetails')
      applicantDetails.simulate('change', {target: {value: 'new details'}})
      expect(onFieldChangeSpy).toHaveBeenCalledWith(0, 'offense_details', 'new details')
    })
    it('verifies component did unmount', () => {
      const instance = componentMount.instance()
      expect(instance.props.validator.validations.size).toEqual(4)
      componentMount.unmount()
      expect(instance.props.validator.validations.size).toEqual(0)
    })
  })
})
