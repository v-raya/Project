import Immutable from 'immutable'

export const fieldErrorsAsImmutableSet = (errors) => {
  errors = errors !== undefined ? [errors] : []
  return Immutable.Set(errors)
}
