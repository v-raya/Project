import {takeLatest, put, call} from 'redux-saga/effects'
import {fetchRequestWithErrors} from 'helpers/http'
import {searchDictionariesCall, fetchDictionarySuccess, fetchFailure} from 'actions/searchActions'
import {SEARCH_DICTIONARIES_FETCH} from 'constants/actionTypes'
import {fetchSearchDictionaries, fetchSearchDictionariesSaga} from 'sagas/fetchSearchDictionariesSaga'

describe('fetchSearchDictionariesSaga', () => {
  it('gets search dictionaries fetch', () => {
    const gen = fetchSearchDictionariesSaga()
    expect(gen.next().value).toEqual(takeLatest(SEARCH_DICTIONARIES_FETCH, fetchSearchDictionaries))
  })
})

describe('fetchSearchDictionaries', () => {
  const action = searchDictionariesCall()
  const url = '/search/search_dictionaries'
  it('fetches search dictionaries', () => {
    const gen = fetchSearchDictionaries(action)
    const countyTypes = {id: '1', value: 'Madera'}
    const facilityTypes = {id: '1', value: 'Adoption History'}
    const response = { countyTypes: countyTypes, facilityTypes: facilityTypes }
    expect(gen.next().value).toEqual(call(fetchRequestWithErrors, url, 'GET', null))
    expect(gen.next(response).value).toEqual(put(fetchDictionarySuccess(response)))
  })
  it('puts errors', () => {
    const gen = fetchSearchDictionaries(action)
    const error = {response: 'some error'}
    expect(gen.next().value).toEqual(call(fetchRequestWithErrors, url, 'GET', null))
    expect(gen.throw(error).value).toEqual(undefined)
  })
})
