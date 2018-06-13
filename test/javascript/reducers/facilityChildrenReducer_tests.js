import {facilityChildren} from 'reducers/facilityChildren'
import {facilityChildrenApiCall, fetchSuccess, fetchFailure} from 'actions/facilityChildrenActions'

describe('Verify facilityChildrenReducer', () => {
  describe('on default', () => {
    it('returns initial state', () => {
      expect(facilityChildren(undefined, {})).toEqual({
        children: null,
        errors: undefined,
        isFetching: false
      })
    })
  })
  describe('on FACILITY_CHILDREN_RESULTS_FETCH', () => {
    it('returns current state', () => {
      const children = {
        'children': [{
          'id': '2q6FdWU03k',
          'person': {
            'gender': 'M',
            'age': 29,
            'first_name': 'boy F',
            'last_name': 'Cavy',
            'date_of_birth': '1988-08-08'
          },
          'date_of_placement': '1998-08-04',
          'assigned_worker': {
            'first_name': 'Wayne',
            'last_name': 'Fehlberg'
          },
          'county_of_origin': 'Modoc',
          'display_client_id': '0161-3317-6329-8000232'
        }]
      }
      const inputState = {
        children: null,
        errors: undefined,
        isFetching: true
      }
      const facilityChildrenApiCallAction = facilityChildrenApiCall(children)

      expect(facilityChildren(inputState, facilityChildrenApiCallAction)).toEqual(inputState)
    })
  })

  describe('on FACILITY_CHILDREN_RESULTS_FETCH_COMPLETE', () => {
    it('returns the new state with facility children info', () => {
      const inputState = {
        'children': [{
          'id': '2q6FdWU03k',
          'person': {
            'gender': 'M',
            'age': 29,
            'first_name': 'boy F',
            'last_name': 'Cavy',
            'date_of_birth': '1988-08-08'
          },
          'date_of_placement': '1998-08-04',
          'assigned_worker': {
            'first_name': 'Wayne',
            'last_name': 'Fehlberg'
          },
          'county_of_origin': 'Modoc',
          'display_client_id': '0161-3317-6329-8000232'
        }],
        errors: undefined,
        isFetching: false
      }

      const facilityChildrenAction = fetchSuccess({
        'children': [{
          'id': 'Ayr2w4rw',
          'person': {
            'gender': 'F',
            'age': 25,
            'first_name': 'girl F',
            'last_name': 'Alicia',
            'date_of_birth': '1994-05-03'
          },
          'date_of_placement': '1996-04-01',
          'assigned_worker': {
            'first_name': 'Dwayne',
            'last_name': 'Jhonson'
          },
          'county_of_origin': 'Sacramento',
          'display_client_id': '1111-6547-1234-5111323'
        }]
      })

      let outputState = {}
      outputState.children = facilityChildrenAction.payload.children
      outputState.errors = undefined
      outputState.isFetching = false
      expect(facilityChildren(inputState, facilityChildrenAction)).toEqual(outputState)
    })
  })
  describe('on FACILITY_CHILDREN_RESULTS_FETCH_ERROR', () => {
    it('returns the new state with facility children info', () => {
      const inputState = {
        children: null,
        errors: undefined,
        isFetching: false
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

      const facilityChildrenFailure = fetchFailure({
        errors: error
      })

      let outputState = {}
      outputState.children = null
      outputState.isFetching = false
      outputState.errors = facilityChildrenFailure.payload.error

      expect(facilityChildren(inputState, facilityChildrenFailure)).toEqual(outputState)
    })
  })
})
