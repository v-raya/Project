export const loadState = () => {
  try {
    const serializedState = sessionStorage.getItem('cals-state')
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (err) {
    console.log('LOAD state failed')
    return undefined
  }
}

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    sessionStorage.setItem('cals-state', serializedState)
  } catch (err) {
    console.log('SAVE state failed')
  }
}

export const deleteState = () => {
  try {
    sessionStorage.removeItem('cals-state')
  } catch (err) {
    console.log('DELETE state failed')
  }
}
