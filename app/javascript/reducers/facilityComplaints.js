const FACILITY_COMPLAINTS_RESULTS_FETCH = 'FACILITY_COMPLAINTS_RESULTS/FETCH'
const FACILITY_COMPLAINTS_RESULTS_FETCH_COMPLETE = 'FACILITY_COMPLAINTS_RESULTS/FETCH_COMPLETE'
const FACILITY_COMPLAINTS_RESULTS_FETCH_ERROR = 'FACILITY_COMPLAINTS_RESULTS/FETCH_ERROR'

const initialState = {
  complaints: null,
  errors: undefined,
  isFetching: false
}

export const facilityComplaints = (state = initialState, action) => {
  switch (action.type) {
    case FACILITY_COMPLAINTS_RESULTS_FETCH:
      return {...state,
        complaints: null,
        errors: undefined,
        isFetching: true}
    case FACILITY_COMPLAINTS_RESULTS_FETCH_COMPLETE:
      return {...state, complaints: action.payload.complaints, errors: undefined, isFetching: false}
    case FACILITY_COMPLAINTS_RESULTS_FETCH_ERROR:
      return {...state,
        complaints: null,
        errors: action.payload.error,
        isFetching: false}
    default:
      return state
  }
}
