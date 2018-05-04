const FACILITY_RESULTS_FETCH = 'FACILITY_RESULTS/FETCH'
const FACILITY_RESULTS_FETCH_COMPLETE = 'FACILITY_RESULTS/FETCH_COMPLETE'
const FACILITY_RESULTS_FETCH_ERROR = 'FACILITY_RESULTS/FETCH_ERROR'

const initialState = {
  facility: null,
  children: null,
  complaints: null,
  errors: null
}

export const facilityReducer = (state = initialState, action) => {
  switch (action.type) {
    case FACILITY_RESULTS_FETCH:
      return {...state, facility: null, children: null, complaints: null, errors: null}
    case FACILITY_RESULTS_FETCH_COMPLETE:
      return {...state, facility: action.payload.facility, children: action.payload.children, complaints: action.payload.complaints, errors: null}
    case FACILITY_RESULTS_FETCH_ERROR:
      return {...state, facility: null, children: null, complaints: null, errors: action.payload.errorResponse}
    default:
      return state
  }
}
