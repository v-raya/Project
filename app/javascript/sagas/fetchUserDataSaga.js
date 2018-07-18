import {takeLatest, put, call} from 'redux-saga/effects'
import {delay} from 'redux-saga'
import {fetchRequest} from '../helpers/http'
import {urlPrefixHelper} from '../helpers/url_prefix_helper.js.erb'
import {fetchUserDataSuccess, fetchFailure} from 'actions/searchActions'
import {SEARCH_USER_DATA_FETCH} from 'constants/actionTypes'

// worker saga: makes the api call when watcher saga sees the action
export function * fetchUserData (action) {
  try {
    const url = '/search/user_data'
    const response = yield call(fetchRequest, url, 'GET')
    const data = yield call([response, response.json])
    yield put(fetchUserDataSuccess({user: data}))
  } catch (error) {
    yield put(fetchFailure(error))
  }
}

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function * fetchUserDataSaga () {
  yield takeLatest(SEARCH_USER_DATA_FETCH, fetchUserData)
}
