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
