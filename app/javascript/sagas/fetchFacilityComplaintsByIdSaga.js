import {takeLatest, put, call} from 'redux-saga/effects'
import {fetchRequestWithErrors} from '../helpers/http'
import {FACILITY_COMPLAINTS_RESULTS_FETCH, fetchSuccess, fetchFailure} from 'actions/facilityComplaintsActions'

// worker saga: makes the api call when watcher saga sees the action
export function * fetchFacilityComplaintsById (action) {
  try {
    const url = '/facilities/' + action.payload.facilityParams.id + '/complaints'
    const response = yield call(fetchRequestWithErrors, url, 'GET', null)
    yield put(fetchSuccess(response))
  } catch (error) {
    const errorResponse = yield call([error, error.json])
    yield put(fetchFailure({errorResponse}))
  }
}

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function * fetchFacilityComplaintsByIdSaga () {
  yield takeLatest(FACILITY_COMPLAINTS_RESULTS_FETCH, fetchFacilityComplaintsById)
}
