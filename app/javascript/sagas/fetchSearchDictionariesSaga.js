import {takeLatest, put, call} from 'redux-saga/effects'
import {fetchRequestWithErrors} from 'helpers/http'
import {urlPrefixHelper} from 'helpers/url_prefix_helper.js.erb'
import {fetchDictionarySuccess, fetchFailure} from 'actions/searchActions'
import {SEARCH_DICTIONARIES_FETCH} from 'constants/actionTypes'

// worker saga: makes the api call when watcher saga sees the action
export function * fetchSearchDictionaries (action) {
  try {
    const url = '/search/search_dictionaries'
    const response = yield call(fetchRequestWithErrors, url, 'GET', null)
    yield put(fetchDictionarySuccess({countyTypes: response.countyTypes, facilityTypes: response.facilityTypes, licenseStatuses: data.licenseStatuses}))
  } catch (error) {
    console.log(error)
  }
}

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function * fetchSearchDictionariesSaga () {
  yield takeLatest(SEARCH_DICTIONARIES_FETCH, fetchSearchDictionaries)
}
