import {takeLatest, put, call} from 'redux-saga/effects'
import {searchApiCall, fetchSuccess, fetchFailure, fetchNoSearchCriteria} from 'actions/searchActions'
import {fetchRequestWithErrors} from 'helpers/http'
import {SEARCH_RESULTS_FETCH} from 'constants/actionTypes'
import {fetchSearchResults, fetchSearchResultsSaga} from 'sagas/fetchSearchResultsSaga'
import {NoSearchResultsErrorMessage, NoSearchCriteriaMessage} from 'search/common/commonUtils'

describe('fetchSearchResultsSaga', () => {
  it('gets search results fetch', () => {
    const gen = fetchSearchResultsSaga()
    expect(gen.next().value).toEqual(takeLatest(SEARCH_RESULTS_FETCH, fetchSearchResults))
  })
})

describe('fetchSearchResults', () => {
  const searchParams = {id: '2'}
  const urlParams = {fromValue: '1', sizeValue: '10', sort: 'name', order: 'asc'}
  const action = searchApiCall(searchParams, urlParams)
  const payload = action.payload
  const url = `${'/facilities/search' + '?from='}${payload.urlParams.fromValue}&size=${payload.urlParams.sizeValue}&sort=${payload.urlParams.sort}&order=${payload.urlParams.order}`
  describe('fetch search results', () => {
    it('fetches 0 search results', () => {
      const gen = fetchSearchResults(action)
      const response = {facilities: [], total: '0'}
      expect(gen.next().value).toEqual(call(fetchRequestWithErrors, url, 'POST', searchParams))
      expect(gen.next(response).value).toEqual(put(fetchSuccess({
        searchResults: response.facilities,
        total: response.total,
        errorMessage: NoSearchResultsErrorMessage})))
    })
    it('fetches more than 0 search results', () => {
      const gen = fetchSearchResults(action)
      const response = {facilities: [{user_id: '1'}], total: '1'}
      expect(gen.next().value).toEqual(call(fetchRequestWithErrors, url, 'POST', searchParams))
      expect(gen.next(response).value).toEqual(put(fetchSuccess({
        searchResults: response.facilities,
        total: response.total,
        errorMessage: ''})))
    })
  })
  describe('fetch errors', () => {
    it('puts errors with issue_details message', () => {
      const gen = fetchSearchResults(action)
      const error = {issue_details: [{errors: 'some error'}]}
      expect(gen.next().value).toEqual(call(fetchRequestWithErrors, url, 'POST', searchParams))
      expect(gen.throw(error).value).toEqual(put(fetchFailure({error})))
    })
    it('puts errors with different error message', () => {
      const gen = fetchSearchResults(action)
      const error = {errors: 'some error'}
      expect(gen.next().value).toEqual(call(fetchRequestWithErrors, url, 'POST', searchParams))
      expect(gen.throw(error).value).toEqual(put(fetchNoSearchCriteria({errorMessage: NoSearchCriteriaMessage})))
    })
  })
})
