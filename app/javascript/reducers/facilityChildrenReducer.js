const FACILITY_CHILDREN_RESULTS_FETCH = 'FACILITY_CHILDREN_RESULTS/FETCH'
const FACILITY_CHILDREN_RESULTS_FETCH_COMPLETE = 'FACILITY_CHILDREN_RESULTS/FETCH_COMPLETE'
const FACILITY_CHILDREN_RESULTS_FETCH_ERROR = 'FACILITY_CHILDREN_RESULTS/FETCH_ERROR'

const initialState = {
  facilityChildren: null,
  errors: undefined,
  isFetching: false
}

export const facilityChildrenReducer = (state = initialState, action) => {
  switch (action.type) {
    case FACILITY_CHILDREN_RESULTS_FETCH:
      return {...state,
        facilityChildren: null,
        errors: undefined,
        isFetching: true}
    case FACILITY_CHILDREN_RESULTS_FETCH_COMPLETE:
      return {...state, facilityChildren: action.payload.facilityChildren, errors: undefined, isFetching: false}
    case FACILITY_CHILDREN_RESULTS_FETCH_ERROR:
      return {...state,
        facilityChildren: null,
        errors: action.payload.errorResponse,
        isFetching: false}
    default:
      return state
  }
}
