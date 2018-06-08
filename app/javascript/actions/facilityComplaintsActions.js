export const FACILITY_COMPLAINTS_RESULTS_FETCH = 'FACILITY_COMPLAINTS_RESULTS/FETCH'
export const FACILITY_COMPLAINTS_RESULTS_FETCH_COMPLETE = 'FACILITY_COMPLAINTS_RESULTS/FETCH_COMPLETE'
export const FACILITY_COMPLAINTS_RESULTS_FETCH_ERROR = 'FACILITY_COMPLAINTS_RESULTS/FETCH_ERROR'

export const facilityComplaintsApiCall = (facilityParams) => ({
  type: FACILITY_COMPLAINTS_RESULTS_FETCH,
  payload: {facilityParams}
})

export const fetchSuccess = (facilityComplaints) => ({
  type: FACILITY_COMPLAINTS_RESULTS_FETCH_COMPLETE,
  payload: facilityComplaints
})

export const fetchFailure = (errorResponse) => ({
  type: FACILITY_COMPLAINTS_RESULTS_FETCH_ERROR,
  payload: errorResponse,
  error: true
})
