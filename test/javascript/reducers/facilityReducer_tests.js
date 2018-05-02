import {facilityReducer} from 'reducers/facilityReducer'
import {facilityApiCall, fetchSuccess, fetchFailure} from 'actions/facilityActions'

describe('Verify facilityReducer', () => {
  describe('on default', () => {
    it('returns initial state', () => {
      expect(facilityReducer(undefined, {})).toEqual({
        facility: null,
        children: null,
        complaints: null,
        errors: {}
      })
    })
  })
  describe('on FACILITY_RESULTS_FETCH', () => {
    it('returns current state', () => {
      const facility = {id: 4, name: 'John'}
      const inputState = {facility: null, children: null, complaints: null, errors: {}}
      const facilityApiCallAction = facilityApiCall(facility)

      expect(facilityReducer(inputState, facilityApiCallAction)).toEqual(inputState)
    })
  })

  describe('on FACILITY_RESULTS_FETCH_COMPLETE', () => {
    it('returns the new state with facility info', () => {
      const inputState = {
        facility: {id: 5, name: 'Adam'},
        children: null,
        complaints: undefined
      }

      const facilityAction = fetchSuccess({
        facility: {id: 4, name: 'John'},
        children: [],
        complaints: []
      })

      let outputState = {}
      outputState.facility = facilityAction.payload.facility
      outputState.children = facilityAction.payload.children
      outputState.complaints = facilityAction.payload.complaints
      outputState.errors = {}

      expect(facilityReducer(inputState, facilityAction)).toEqual(outputState)
    })
  })
})
