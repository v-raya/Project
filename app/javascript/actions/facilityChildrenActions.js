export const FACILITY_CHILDREN_RESULTS_FETCH = 'FACILITY_CHILDREN_RESULTS/FETCH'
export const FACILITY_CHILDREN_RESULTS_FETCH_COMPLETE = 'FACILITY_CHILDREN_RESULTS/FETCH_COMPLETE'
export const FACILITY_CHILDREN_RESULTS_FETCH_ERROR = 'FACILITY_CHILDREN_RESULTS/FETCH_ERROR'

export const facilityChildrenApiCall = (facilityParams) => ({
  type: FACILITY_CHILDREN_RESULTS_FETCH,
  payload: {facilityParams}
})

export const fetchSuccess = (facilityChildren) => ({
  type: FACILITY_CHILDREN_RESULTS_FETCH_COMPLETE,
  payload: facilityChildren
})

export const fetchFailure = (errorResponse) => ({
  type: FACILITY_CHILDREN_RESULTS_FETCH_ERROR,
  payload: errorResponse,
  error: true
})
