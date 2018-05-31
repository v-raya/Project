const FACILITY_RESULTS_FETCH = 'FACILITY_RESULTS/FETCH'
const FACILITY_RESULTS_FETCH_COMPLETE = 'FACILITY_RESULTS/FETCH_COMPLETE'
const FACILITY_RESULTS_FETCH_ERROR = 'FACILITY_RESULTS/FETCH_ERROR'

const initialState = {
  facility: null,
  errors: undefined,
  isFetching: false
}

export const facilityReducer = (state = initialState, action) => {
  switch (action.type) {
    case FACILITY_RESULTS_FETCH:
      return {...state, facility: null, errors: undefined, isFetching: true}
    case FACILITY_RESULTS_FETCH_COMPLETE:
      return {...state, facility: action.payload.facility, errors: undefined, isFetching: false}
    case FACILITY_RESULTS_FETCH_ERROR:
      return {...state, facility: null, errors: action.payload.errorResponse, isFetching: false}
    default:
      return state
  }
}
