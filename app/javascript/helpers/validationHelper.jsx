import Immutable from 'immutable'

export const fieldErrorsAsImmutableSet = (errors) => {
  errors !== undefined ? errors = [errors] : errors = []
  return Immutable.Set(errors)
}
