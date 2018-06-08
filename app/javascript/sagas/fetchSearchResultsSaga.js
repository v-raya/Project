import {takeLatest, put, call} from 'redux-saga/effects'
import {delay} from 'redux-saga'
import {fetchRequest, fetchRequestWithErrors} from '../helpers/http'
import {urlPrefixHelper} from '../helpers/url_prefix_helper.js.erb'
import {fetchSuccess, fetchFailure, fetchNoSearchCriteria} from 'actions/searchActions'
import {SEARCH_RESULTS_FETCH} from 'constants/actionTypes'
import {NoSearchResultsErrorMessage, NoSearchCriteriaMessage} from 'search/common/commonUtils'

// worker saga: makes the api call when watcher saga sees the action
export function * fetchSearchResults (action) {
  try {
    const payload = action.payload
    const url = '/facilities/search' + '?from=' + payload.urlParams.fromValue + '&size=' + payload.urlParams.sizeValue + '&sort=' + payload.urlParams.sort + '&order=' + payload.urlParams.order
    const response = yield call(fetchRequestWithErrors, url, 'POST', payload.searchParams)
    yield put(fetchSuccess({
      searchResults: response.facilities,
      total: response.total,
      errorMessage: response.facilities.length > 0 ? '' : NoSearchResultsErrorMessage}))
  } catch (error) {
    if (error.statusText !== 'Internal Server Error') {
      const errorResponse = yield call([error, error.json])
      yield put(fetchFailure({errorResponse}))
    } else {
      yield put(fetchNoSearchCriteria({errorMessage: NoSearchCriteriaMessage}))
    }
  }
}

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function * fetchSearchResultsSaga () {
  yield takeLatest(SEARCH_RESULTS_FETCH, fetchSearchResults)
}
