import * as Constants from 'constants/actionTypes'

const initialState = {
  children: null,
  errors: undefined,
  isFetching: false
}

export const facilityChildren = (state = initialState, action) => {
  switch (action.type) {
    case Constants.FACILITY_CHILDREN_RESULTS_FETCH:
      return {...state,
        children: null,
        errors: undefined,
        isFetching: true}
    case Constants.FACILITY_CHILDREN_RESULTS_FETCH_COMPLETE:
      return {...state, children: action.payload.children, errors: undefined, isFetching: false}
    case Constants.FACILITY_CHILDREN_RESULTS_FETCH_ERROR:
      return {...state,
        children: null,
        errors: action.payload.errorResponse,
        isFetching: false}
    default:
      return state
  }
}
