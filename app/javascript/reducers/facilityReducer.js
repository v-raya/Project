const FACILITY_RESULTS_FETCH = 'FACILITY_RESULTS/FETCH'
const FACILITY_RESULTS_FETCH_COMPLETE = 'FACILITY_RESULTS/FETCH_COMPLETE'
const FACILITY_RESULTS_FETCH_ERROR = 'FACILITY_RESULTS/FETCH_ERROR'

const initialState = {
  facility: null,
  facilityChildren: null,
  facilityComplaints: null,
  errors: undefined
}

export const facilityReducer = (state = initialState, action) => {
  switch (action.type) {
    case FACILITY_RESULTS_FETCH:
      return {...state, facility: null, facilityChildren: null, facilityComplaints: null, errors: undefined}
    case FACILITY_RESULTS_FETCH_COMPLETE:
      return {...state, facility: action.payload.facility, facilityChildren: action.payload.children, facilityComplaints: action.payload.complaints, errors: undefined}
    case FACILITY_RESULTS_FETCH_ERROR:
      return {...state, facility: null, facilityChildren: null, facilityComplaints: null, errors: action.payload.errorResponse}
    default:
      return state
  }
}
