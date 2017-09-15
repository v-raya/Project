import Immutable from 'immutable'
import _ from 'lodash'
import moment from 'moment'

export default class Validator {
  constructor (validations) {
    this.validations = Immutable.fromJS(validations)
    this.errors = {}
    this.validators = {
      isRequired: this.isRequired,
      isNotInTheFuture: this.isNotInTheFuture,
      isBeforeOtherDate: this.isBeforeOtherDate,
      is10digits: this.is10digits,
      isValidDate: this.isValidDate
    }
  }

  addNewValidation (validation) {
    this.validations = this.validations.merge(validation)
  }

  addFieldValidation (fieldName, validation) {
    this.validations = this.validations.merge({[fieldName]: validation})
  }

  allFieldsErrors (container) {
    let errors = {}
    if (container) {
      container.forEach((fieldName) => {
        errors[fieldName] = this.fieldErrors(fieldName)
      })
    } else {
      errors = this.errors
    }
    return Immutable.fromJS(errors)
  }

  fieldErrors (fieldName) {
    return Immutable.Set(this.errors[fieldName] || [])
  }

  isRequired (value) {
    return !(_.isEmpty(value) || _.isEmpty(value.trim()))
  }

  isNotInTheFuture (value) {
    return !(value > moment().toISOString())
  }

  isBeforeOtherDate (value, otherValue) {
    return !(value && otherValue() && value >= otherValue())
  }

  is10digits (value) {
    return (value.length === 10) || (value.length === 0)
  }

  isValidDate (value) {
    return (moment(value, 'MM/DD/YYYY', true).isValid() || (_.isEmpty(value) || _.isEmpty(value.trim())))
  }

  validateField (fieldName, value) {
    const fieldValidations = this.validations.get(fieldName)
    if (fieldValidations) {
      fieldValidations.map((ruleOptions) => {
        const ruleName = ruleOptions.get('rule')
        const errorMessage = ruleOptions.get('message')
        const otherValue = ruleOptions.get('otherValue')
        const isValid = this.validators[ruleName]
        this.errors[fieldName] = this.errors[fieldName] || new Set()
        if (isValid(value, otherValue)) {
          this.errors[fieldName].delete(errorMessage)
        } else {
          this.errors[fieldName].add(errorMessage)
        }
      })
    }
  }

  validateAllFields (container) {
    if (container) {
      Object.entries(container).forEach(([fieldName, value]) => {
        this.validateField(fieldName, value)
      })
    }
  }
}
