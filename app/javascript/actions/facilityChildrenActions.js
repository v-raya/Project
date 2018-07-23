import * as Constants from 'constants/actionTypes'

export const facilityChildrenApiCall = (facilityParams) => ({
  type: Constants.FACILITY_CHILDREN_RESULTS_FETCH,
  payload: {facilityParams}
})

export const fetchSuccess = (facilityChildren) => ({
  type: Constants.FACILITY_CHILDREN_RESULTS_FETCH_COMPLETE,
  payload: facilityChildren
})

export const fetchFailure = (error) => ({
  type: Constants.FACILITY_CHILDREN_RESULTS_FETCH_ERROR,
  payload: error,
  error: true
})
