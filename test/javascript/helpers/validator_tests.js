import React from 'react'
import Validator from 'helpers/validator'
import {shallow, mount} from 'enzyme'
import Immutable from 'immutable'

describe('Validator', () => {
  let validator, conditionSpy
  beforeEach(() => {
    validator = new Validator({})
  })
  it('verify object', () => {
    expect(validator.errors).toEqual(Object({ }))
    expect(validator.rules).not.toEqual(Object({ }))
    expect(validator.validations).toBe(Immutable.Map())
  })
  describe('verify rules', () => {
    conditionSpy = jasmine.createSpy().and.returnValue(true)
    const opt = {
      value: '212-221-5000',
      condition: conditionSpy
    }
    it('isRequiredNumberIf', () => {
      expect(validator.rules.isRequiredNumberIf(opt)).toEqual(true)
      opt.value = {}
      expect(validator.rules.isRequiredNumberIf(opt)).toEqual(false)
    })
    it('isRequiredIf', () => {
      opt.value = '(122)-'
      expect(validator.rules.isRequiredIf(opt)).toEqual(true)
      opt.condition = jasmine.createSpy().and.returnValue(false)
      expect(validator.rules.isRequiredIf(opt)).toEqual(true)
    })
    it('is10digit', () => {
      opt.value = '5122232233'
      expect(validator.rules.is10digits(opt)).toEqual(true)
      opt.value = ''
      expect(validator.rules.is10digits(opt)).toBe(true)
    })
    it('isRequiredBooleanIf', () => {
      opt.condition = jasmine.createSpy().and.returnValue(true)
      expect(validator.rules.isRequiredBooleanIf(opt)).toBe(false)
    })
    it('isValidDate', () => {
      opt.value = '10/12/1998'
      expect(validator.rules.isValidDate(opt)).toBe(true)
      opt.value = ''
      expect(validator.rules.isValidDate(opt)).toBe(true)
    })
    it('isBeforeOtherDate', () => {
      opt.otherValue = jasmine.createSpy().and.returnValue('11/12/1999')
      expect(validator.rules.isBeforeOtherDate(opt)).toBe(true)
    })
    it('isNotInTheFuture', () => {
      expect(validator.rules.isNotInTheFuture('232232332')).toBe(true)
    })
  })
  describe('verify validations', () => {
    let validations, newDateOfBirthArray, newValidations
    beforeEach(() => {
      validations = {
        'date_of_birth': [
          {rule: 'isValidDate', message: 'date is invalid'},
          {rule: 'isRequired', message: 'date is Required'}
        ],
        'first_name': [
          {rule: 'isRequired', message: 'Required', condition: conditionSpy}
        ]
      }
      validator = new Validator(validations)
    })
    it('allValidationsWithOnlyRule', () => {
      newDateOfBirthArray = validations.date_of_birth.filter(obj => {
        return obj.rule === 'isRequired'
      })
      expect(validator.allValidationsWithOnlyRule('isRequired').toJS().date_of_birth).toEqual(newDateOfBirthArray)
    })
    it('allValidationsWithRule', () => {
      expect(validator.allValidationsWithRule('isRequired')).toEqual(Immutable.fromJS(validations))
    })
    it('validateField', () => {
      expect(validator.errors.date_of_birth).not.toBeDefined()
      validator.validateField('date_of_birth', '10/12/1998')
      expect(validator.errors.date_of_birth).toBeDefined()
    })
    it('validateFieldAndGetError', () => {
      expect(validator.validateFieldAndGetError('date_of_birth', '1/')).toEqual('date is invalid')
    })
    it('addFieldValidation', () => {
      const OtherAdultsRule = {rule: 'isRequired', message: 'Relationship is Required', condition: conditionSpy}

      newValidations = Immutable.fromJS(validations).set('other_adults[0].availableApplicants', [OtherAdultsRule])
      validator.addFieldValidation('other_adults[0].availableApplicants', OtherAdultsRule)
      expect(validator.validations.get('other_adults[0].availableApplicants')).toBeDefined()
    })
    it('removeValidations', () => {
      validator.removeValidations(['date_of_birth', 'other_adults[0].availableApplicants'])
      expect(validator.validations.date_of_birth).not.toBeDefined()
      expect(validator.validations['other_adults[0].availableApplicants']).not.toBeDefined()
      expect(validator.validations.toJS().first_name).toBeDefined()
    })
  })
})
