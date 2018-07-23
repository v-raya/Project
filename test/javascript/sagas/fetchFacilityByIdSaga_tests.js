import {takeLatest, put, call} from 'redux-saga/effects'
import {fetchFacilityById, fetchFacilityByIdSaga} from 'sagas/fetchFacilityByIdSaga'
import {facilityApiCall, fetchSuccess, fetchFailure} from 'actions/facilityActions'
import {fetchRequestWithErrors} from 'helpers/http'
import {FACILITY_RESULTS_FETCH} from 'constants/actionTypes'
import {replace} from 'react-router-redux'

describe('fetchFacilityByIdSaga', () => {
  it('gets facility id on facility fetch', () => {
    const gen = fetchFacilityByIdSaga()
    expect(gen.next().value).toEqual(takeLatest(FACILITY_RESULTS_FETCH, fetchFacilityById))
  })
})

describe('fetchFacilityById', () => {
  const facilityParams = {id: '123'}
  const action = facilityApiCall(facilityParams)
  const url = '/facilities/123/profile'
  it('fetches facility by id', () => {
    const gen = fetchFacilityById(action)
    const id = '434'
    const facilityResponse = {id}
    expect(gen.next().value).toEqual(call(fetchRequestWithErrors, url, 'GET', null))
    expect(gen.next(facilityResponse).value).toEqual(put(fetchSuccess({facility: facilityResponse})))
  })

  it('puts errors', () => {
    const gen = fetchFacilityById(action)
    const error = {response: 'some error'}
    expect(gen.next().value).toEqual(call(fetchRequestWithErrors, url, 'GET', null))
    expect(gen.throw(error).value).toEqual(put(fetchFailure({error})))
  })
})
