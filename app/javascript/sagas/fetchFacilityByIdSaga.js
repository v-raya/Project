import {takeLatest, put, call} from 'redux-saga/effects'
import {delay} from 'redux-saga'
import {fetchRequest} from '../helpers/http'
import {urlPrefixHelper} from '../helpers/url_prefix_helper.js.erb'
import {FACILITY_RESULTS_FETCH, fetchSuccess, fetchFailure} from 'actions/facilityActions'

// worker saga: makes the api call when watcher saga sees the action
export function * fetchFacilityById (action) {
  try {
    const url = '/facilities/facility'
    const response = yield call(fetchRequest, url, 'POST', action.payload.facilityParams)
    const data = yield call([response, response.json])
    yield put(fetchSuccess({facility: data.facility, children: data.children, complaints: data.complaints}))
  } catch (error) {
    yield put(fetchFailure(error))
  }
}

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function * fetchFacilityByIdSaga () {
  yield takeLatest(FACILITY_RESULTS_FETCH, fetchFacilityById)
}
