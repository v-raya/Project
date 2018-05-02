import {takeLatest, put, call} from 'redux-saga/effects'
import {delay} from 'redux-saga'
import {fetchRequest} from '../helpers/http'
import {urlPrefixHelper} from '../helpers/url_prefix_helper.js.erb'
import {SEARCH_RESULTS_FETCH, fetchSuccess, fetchFailure} from 'actions/searchActions'

// worker saga: makes the api call when watcher saga sees the action
export function * fetchSearchResults (action) {
  try {
    const url = '/facilities/search' + '?from=' + action.payload.urlParams.fromValue + '&size=' + action.payload.urlParams.sizeValue
    const response = yield call(fetchRequest, url, 'POST', action.payload.searchParams)
    const data = yield call([response, response.json])
    yield put(fetchSuccess({searchResults: data.facilities, total: data.total}))
  } catch (error) {
    yield put(fetchFailure(error))
  }
}

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function * fetchSearchResultsSaga () {
  yield takeLatest(SEARCH_RESULTS_FETCH, fetchSearchResults)
}
