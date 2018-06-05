import {takeLatest, put, call} from 'redux-saga/effects'
import {delay} from 'redux-saga'
import {fetchRequest, fetchRequestWithErrors} from '../helpers/http'
import {urlPrefixHelper} from '../helpers/url_prefix_helper.js.erb'
import {FACILITY_CHILDREN_RESULTS_FETCH, fetchSuccess, fetchFailure} from 'actions/facilityChildrenActions'

// worker saga: makes the api call when watcher saga sees the action
export function * fetchFacilityChildrenById (action) {
  try {
    const url = '/facilities/' + action.payload.facilityParams.id + '/facility_children'
    const response = yield call(fetchRequestWithErrors, url, 'GET', null)
    yield put(fetchSuccess({facilityChildren: response}))
  } catch (error) {
    const errorResponse = yield call([error, error.json])
    yield put(fetchFailure({errorResponse}))
  }
}

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function * fetchFacilityChildrenByIdSaga () {
  yield takeLatest(FACILITY_CHILDREN_RESULTS_FETCH, fetchFacilityChildrenById)
}
