import * as Constants from 'constants/actionTypes'

const initialState = {
  facility: null,
  errors: undefined,
  isFetching: false
}

export const facilityReducer = (state = initialState, action) => {
  switch (action.type) {
    case Constants.FACILITY_RESULTS_FETCH:
      return {...state, facility: null, errors: undefined, isFetching: true}
    case Constants.FACILITY_RESULTS_FETCH_COMPLETE:
      return {...state, facility: action.payload.facility, errors: undefined, isFetching: false}
    case Constants.FACILITY_RESULTS_FETCH_ERROR:
      return {...state, facility: null, errors: action.payload.error, isFetching: false}
    default:
      return state
  }
}
