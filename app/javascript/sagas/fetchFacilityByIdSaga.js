import {takeLatest, put, call} from 'redux-saga/effects'
import {fetchRequestWithErrors} from '../helpers/http'
import {fetchSuccess, fetchFailure} from 'actions/facilityActions'
import {FACILITY_RESULTS_FETCH} from 'constants/actionTypes'

// worker saga: makes the api call when watcher saga sees the action
export function * fetchFacilityById (action) {
  try {
    const url = '/facilities/' + action.payload.facilityParams.id + '/profile'
    const response = yield call(fetchRequestWithErrors, url, 'GET', null)
    yield put(fetchSuccess({facility: response}))
  } catch (error) {
    const errorResponse = yield call([error, error.json])
    yield put(fetchFailure({errorResponse}))
  }
}

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function * fetchFacilityByIdSaga () {
  yield takeLatest(FACILITY_RESULTS_FETCH, fetchFacilityById)
}
