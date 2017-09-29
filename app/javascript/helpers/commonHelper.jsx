export const valuePresent = (val) => {
  return (val !== null) && (val !== undefined)
}

export const getDictionaryId = (object) => {
  return (object && object.id) || ''
}

export const dictionaryNilSelect = (object) => {
  return object.value !== '' ? {id: object.value, value: object.text} : null
}

export const checkArrayObjectPresence = (obj) => {
  return (obj && obj.length > 0) ? obj : null
}

export const removeLegalNameType = (nameTypes) => {
  delete nameTypes[2]
  return nameTypes
}

export const FormatDateForPersistance = (dateString) => {
  dateString = dateString.replace(/_/gi, '')
  let persistantDateString
  if (dateString && dateString.length === 10) {
    const dateStringArray = dateString ? dateString.split('/', 3) : []
    // we need the user input order of mm-dd-yyy to  be yyyy-mm-dd
    persistantDateString = ([dateStringArray[2], dateStringArray[0], dateStringArray[1]]).join('-')
  } else {
    dateString = ''
  }
  return persistantDateString || dateString.replace(/\//gi, '-')
}

export const FormatDateForDisplay = (dateString) => {
  let persistantDateString
  if (dateString && dateString.length === 10) {
    const dateStringArray = dateString ? dateString.split('-', 3) : []
    // we need the user input order of mm-dd-yyy to  be yyyy-mm-dd
    persistantDateString = ([dateStringArray[1], dateStringArray[2], dateStringArray[0]]).join('/')
  } else {
    dateString = ''
  }
  return persistantDateString || dateString.replace(/-/gi, '/')
}
export const findArrayValueByMethod = (arrayToBeFiltered, method, findByType, comparedWith) => {
  return arrayToBeFiltered[method](obj => {
    return obj.get(findByType.toString()) === comparedWith
  })
}
// export const filterArrayValueByMethod = (arrayToBeFiltered, method, id) => {
//   return arrayToBeFiltered[method](obj => {
//     return obj.get('id') !== id
//   })
// }