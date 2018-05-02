export const FACILITY_RESULTS_FETCH = 'FACILITY_RESULTS/FETCH'
export const FACILITY_RESULTS_FETCH_COMPLETE = 'FACILITY_RESULTS/FETCH_COMPLETE'

export const facilityApiCall = (facilityParams) => ({
  type: FACILITY_RESULTS_FETCH,
  payload: {facilityParams}
})

export const fetchSuccess = (facility) => ({
  type: FACILITY_RESULTS_FETCH_COMPLETE,
  payload: facility
})

export const fetchFailure = (error) => ({
  type: FACILITY_RESULTS_FETCH_COMPLETE,
  payload: {error},
  error: true
})
