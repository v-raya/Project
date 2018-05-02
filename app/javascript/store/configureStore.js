import rootReducer from 'reducers'
import createSagaMiddleware from 'redux-saga'
import {createStore, applyMiddleware, compose} from 'redux'
import {initSagas} from 'initSagas'

function configureStore (initialState) {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    rootReducer,
    compose(applyMiddleware(sagaMiddleware))
  )
  initSagas(sagaMiddleware)
  return store
}

export const store = configureStore()
