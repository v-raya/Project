import {facilityReducer} from 'reducers/facilityReducer'
import {facilityApiCall, fetchSuccess, fetchFailure} from 'actions/facilityActions'

describe('Verify facilityReducer', () => {
  describe('on default', () => {
    it('returns initial state', () => {
      expect(facilityReducer(undefined, {})).toEqual({
        facility: null,
        facilityChildren: null,
        facilityComplaints: null,
        errors: undefined
      })
    })
  })
  describe('on FACILITY_RESULTS_FETCH', () => {
    it('returns current state', () => {
      const facility = {id: 4, name: 'John'}
      const inputState = {facility: null, facilityChildren: null, facilityComplaints: null, errors: undefined}
      const facilityApiCallAction = facilityApiCall(facility)

      expect(facilityReducer(inputState, facilityApiCallAction)).toEqual(inputState)
    })
  })

  describe('on FACILITY_RESULTS_FETCH_COMPLETE', () => {
    it('returns the new state with facility info', () => {
      const inputState = {
        facility: {id: 5, name: 'Adam'},
        facilityChildren: null,
        errors: undefined,
        facilityComplaints: undefined
      }

      const facilityAction = fetchSuccess({
        facility: {id: 4, name: 'John'},
        children: [],
        complaints: []
      })

      let outputState = {}
      outputState.facility = facilityAction.payload.facility
      outputState.facilityChildren = facilityAction.payload.children
      outputState.facilityComplaints = facilityAction.payload.complaints
      outputState.errors = undefined

      expect(facilityReducer(inputState, facilityAction)).toEqual(outputState)
    })
  })
  describe('on FACILITY_RESULTS_FETCH_ERROR', () => {
    it('returns the new state with facility info', () => {
      const inputState = {
        facility: null,
        facilityChildren: null,
        errors: undefined,
        facilityComplaints: null
      }

      const error = {
        'issue_details': [ {
          'incident_id': '95100850-f514-4365-9b93-6cbd28adcf27',
          'type': 'unexpected_exception',
          'user_message': 'There was an error processing your request. It has been logged with unique incident id',
          'technical_message': 'Bad Request',
          'stack_trace': 'gov.ca.cwds.rest.api.DoraException: Forbidden\\n\\'
        } ]
      }

      const facilityFailure = fetchFailure({
        errors: error
      })

      let outputState = {}
      outputState.facility = null
      outputState.facilityChildren = null
      outputState.facilityComplaints = null
      outputState.errors = facilityFailure.payload.error

      expect(facilityReducer(inputState, facilityFailure)).toEqual(outputState)
    })
  })
})
