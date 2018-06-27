import {facilityComplaints} from 'reducers/facilityComplaints'
import {facilityComplaintsApiCall, fetchSuccess, fetchFailure} from 'actions/facilityComplaintsActions'

describe('Verify facilityComplainstReducer', () => {
  describe('on default', () => {
    it('returns initial state', () => {
      expect(facilityComplaints(undefined, {})).toEqual({
        complaints: null,
        errors: undefined,
        isFetching: false
      })
    })
  })
  describe('on FACILITY_COMPLAINTS_RESULTS_FETCH', () => {
    it('returns current state', () => {
      const complaints = {
        'complaints': [{
          'id': 'dlf0245',
          'complaint_date': '09/27/2016',
          'assigned_worker': 'Harry Potter',
          'control_number': '19-CR-20160927081411',
          'priority_level': '2',
          'status': 'Approved',
          'approval_date': '12/10/2016',
          'allegations': [{
            'complaint_type_code': '10',
            'complaint_type_description': 'Neglect/Lack of Supervision',
            'allegation': 'Personal Rights- Licensee/ Perpetrator was very hostile to Child #1 and grabbed her in the inner part of her left arm.',
            'resolution_type_code': 'u',
            'resolution_type_description': 'Unsubstantiated'

          },
          {
            'complaint_type_code': '3',
            'complaint_type_description': 'Some String',
            'allegation': "Complainant observed pink marks in the iner area of Child #1's inner arm.",
            'resolution_type_code': 'sub',
            'resolution_type_description': 'substantiated'

          }
          ]
        }
        ]
      }
      const inputState = {
        complaints: null,
        errors: undefined,
        isFetching: true
      }
      const facilityComplainstApiCallAction = facilityComplaintsApiCall(complaints)

      expect(facilityComplaints(inputState, facilityComplainstApiCallAction)).toEqual(inputState)
    })
  })

  describe('on FACILITY_COMPLAINTS_RESULTS_FETCH_COMPLETE', () => {
    it('returns the new state with facility complaints info', () => {
      const inputState = {
        'complaints': [{
          'id': 'dlf0245',
          'complaint_date': '09/27/2016',
          'assigned_worker': 'Harry Potter',
          'control_number': '19-CR-20160927081411',
          'priority_level': '2',
          'status': 'Approved',
          'approval_date': '12/10/2016',
          'allegations': [{
            'complaint_type_code': '10',
            'complaint_type_description': 'Neglect/Lack of Supervision',
            'allegation': 'Personal Rights- Licensee/ Perpetrator was very hostile to Child #1 and grabbed her in the inner part of her left arm.',
            'resolution_type_code': 'u',
            'resolution_type_description': 'Unsubstantiated'

          },
          {
            'complaint_type_code': '3',
            'complaint_type_description': 'Some String',
            'allegation': "Complainant observed pink marks in the iner area of Child #1's inner arm.",
            'resolution_type_code': 'sub',
            'resolution_type_description': 'substantiated'

          }
          ]
        }
        ],
        errors: undefined,
        isFetching: false
      }

      const facilityComplaintsAction = fetchSuccess({
        'complaints': [{
          'id': '12345',
          'complaint_date': '07/7/2010',
          'assigned_worker': 'Sunil B',
          'control_number': '1-ER-22222222222',
          'priority_level': '1',
          'status': 'Pending',
          'approval_date': '1/5/2000',
          'allegations': [{
            'complaint_type_code': '3',
            'complaint_type_description': 'Sample String',
            'allegation': 'Some string 2',
            'resolution_type_code': 'O',
            'resolution_type_description': 'Open'

          }
          ]
        }
        ]
      })

      let outputState = {}
      outputState.complaints = facilityComplaintsAction.payload.complaints
      outputState.errors = undefined
      outputState.isFetching = false
      expect(facilityComplaints(inputState, facilityComplaintsAction)).toEqual(outputState)
    })
  })
  describe('on FACILITY_COMPLAINTS_RESULTS_FETCH_ERROR', () => {
    it('returns the new state with facility complaints info', () => {
      const inputState = {
        complaints: null,
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

      const facilityComplaintsFailure = fetchFailure({
        errors: error
      })

      let outputState = {}
      outputState.complaints = null
      outputState.isFetching = false
      outputState.errors = facilityComplaintsFailure.payload.error

      expect(facilityComplaints(inputState, facilityComplaintsFailure)).toEqual(outputState)
    })
  })
})
