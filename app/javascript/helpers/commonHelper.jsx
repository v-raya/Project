export const getDictionaryId = (object) => {
  return (object && object.id) || ''
}

export const checkArrayObjectPresence = (obj) => {
  return (obj && obj.length > 0) ? obj : null
}
