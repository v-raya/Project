import * as Constants from 'constants/actionTypes'

export const facilityApiCall = (facilityParams) => ({
  type: Constants.FACILITY_RESULTS_FETCH,
  payload: {facilityParams}
})

export const fetchSuccess = (facility) => ({
  type: Constants.FACILITY_RESULTS_FETCH_COMPLETE,
  payload: facility
})

export const fetchFailure = (errorResponse) => ({
  type: Constants.FACILITY_RESULTS_FETCH_ERROR,
  payload: errorResponse,
  error: true
})
