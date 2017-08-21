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

export const setToWhomOptionList = (applicants) => {
  const newApplicants = applicants.map((applicant, index) => {
    return {id: applicant.id, value: applicant.first_name + ' ' + applicant.middle_name + ' ' + applicant.last_name}
  })
  return newApplicants
}

export const handleRelationshipTypeToApplicant = (index, value, type, items) => {
  let itemsList = Immutable.fromJS(items)
  itemsList = itemsList.setIn([index, 'relationship_to_applicants', 0, type], value)
  return itemsList.toJS()
}

export const handleToWhomValue = (applicantId, applicants) => {
  let newApplicants = {id: '', value: ''}
  if (applicantId) {
    newApplicants = applicants.map((applicant) => {
      return {id: (applicant.id ? applicant.id : 0), value: applicant.first_name + ' ' + applicant.middle_name + ' ' + applicant.last_name}
    })
    if (!isNaN(Number(applicantId))) {
      newApplicants = newApplicants.find(x => x.id === Number(applicantId))
    }
    // if (newApplicants.id == null) {
    //   newApplicants.id = 0
    // }
  }
  return newApplicants
}
