import Immutable from 'immutable'

export const addCardAsJS = (inputArray, newCardFields) => {
  let inputList = Immutable.fromJS(inputArray)
  return inputList.push(newCardFields).toJS()
}

export const removeCardAsJS = (inputArray, index, newCardFields) => {
  let inputList = Immutable.fromJS(inputArray)
  inputList = inputList.delete(index)
  if (inputList.size === 0) {
    inputList = inputList.push(newCardFields)
  }
  return inputList.toJS()
}

export const getFocusClassName = (focusedComponentName, currentComponentName) => {
  return focusedComponentName === currentComponentName ? 'edit' : 'show'
}

export const setToWhom = (applicants) => {
  const newApplicants = applicants.map(function (applicant, index) {
    return {key: index, value: applicant.first_name + ' ' + applicant.middle_name + ' ' + applicant.last_name}
  })
  return newApplicants
}
