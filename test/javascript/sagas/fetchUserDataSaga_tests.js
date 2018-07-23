import {takeLatest, put, call} from 'redux-saga/effects'
import {searchUserDataCall, fetchUserDataSuccess, fetchFailure} from 'actions/searchActions'
import {fetchRequestWithErrors} from 'helpers/http'
import {SEARCH_USER_DATA_FETCH} from 'constants/actionTypes'
import {fetchUserData, fetchUserDataSaga} from 'sagas/fetchUserDataSaga'

describe('fetchUserDataSaga', () => {
  it('gets search results fetch', () => {
    const gen = fetchUserDataSaga()
    expect(gen.next().value).toEqual(takeLatest(SEARCH_USER_DATA_FETCH, fetchUserData))
  })
})

describe('fetch User data', () => {
  const action = searchUserDataCall()
  const url = '/search/user_data'
  it('fetches user data', () => {
    const gen = fetchUserData(action)
    const response = {user_id: '1'}
    expect(gen.next().value).toEqual(call(fetchRequestWithErrors, url, 'GET', null))
    expect(gen.next(response).value).toEqual(put(fetchUserDataSuccess({user: response})))
  })

  it('puts errors', () => {
    const gen = fetchUserData(action)
    const error = {response: 'some error'}
    expect(gen.next().value).toEqual(call(fetchRequestWithErrors, url, 'GET', null))
    expect(gen.throw(error).value).toEqual(undefined)
  })
})
