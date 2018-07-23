import {takeLatest, put, call} from 'redux-saga/effects'
import {fetchSuccess, fetchFailure, facilityChildrenApiCall} from 'actions/facilityChildrenActions'
import {FACILITY_CHILDREN_RESULTS_FETCH} from 'constants/actionTypes'
import {fetchRequestWithErrors} from 'helpers/http'
import {fetchFacilityChildrenById, fetchFacilityChildrenByIdSaga} from 'sagas/fetchFacilityChildrenByIdSaga'

describe('fetchFacilityChildrenByIdSaga', () => {
  it('gets facility children by id fetch', () => {
    const gen = fetchFacilityChildrenByIdSaga()
    expect(gen.next().value).toEqual(takeLatest(FACILITY_CHILDREN_RESULTS_FETCH, fetchFacilityChildrenById))
  })
})

describe('fetchFacilityChildrenById', () => {
  const facilityParams = {id: '123'}
  const action = facilityChildrenApiCall(facilityParams)
  const childrenResponse = {id: '123'}
  const url = '/facilities/123/children'
  it('fetches facility children by id', () => {
    const gen = fetchFacilityChildrenById(action)
    expect(gen.next().value).toEqual(call(fetchRequestWithErrors, url, 'GET', null))
    expect(gen.next(childrenResponse).value).toEqual(put(fetchSuccess(childrenResponse)))
  })

  it('puts errors', () => {
    const gen = fetchFacilityChildrenById(action)
    const error = {response: 'some error'}
    expect(gen.next().value).toEqual(call(fetchRequestWithErrors, url, 'GET', null))
    expect(gen.throw(error).value).toEqual(put(fetchFailure({error})))
  })
})
