import {takeLatest, put, call} from 'redux-saga/effects'
import {fetchRequestWithErrors} from 'helpers/http'
import {facilityComplaintsApiCall, FACILITY_COMPLAINTS_RESULTS_FETCH, fetchSuccess, fetchFailure} from 'actions/facilityComplaintsActions'
import {fetchFacilityComplaintsById, fetchFacilityComplaintsByIdSaga} from 'sagas/fetchFacilityComplaintsByIdSaga'

describe('fetchFacilityComplaintsByIdSaga', () => {
  it('gets facility complaints by id fetch', () => {
    const gen = fetchFacilityComplaintsByIdSaga()
    expect(gen.next().value).toEqual(takeLatest(FACILITY_COMPLAINTS_RESULTS_FETCH, fetchFacilityComplaintsById))
  })
})

describe('fetchFacilityComplaintsById', () => {
  const facilityParams = {id: '123'}
  const action = facilityComplaintsApiCall(facilityParams)
  const url = '/facilities/123/complaints'
  it('fetches facility complaints by id', () => {
    const gen = fetchFacilityComplaintsById(action)
    const complaintsResponse = {id: '123'}
    expect(gen.next().value).toEqual(call(fetchRequestWithErrors, url, 'GET', null))
    expect(gen.next(complaintsResponse).value).toEqual(put(fetchSuccess(complaintsResponse)))
  })

  it('puts errors', () => {
    const gen = fetchFacilityComplaintsById(action)
    const error = {response: 'some error'}
    expect(gen.next().value).toEqual(call(fetchRequestWithErrors, url, 'GET', null))
    expect(gen.throw(error).value).toEqual(put(fetchFailure({error})))
  })
})
