import {combineReducers} from 'redux'
import { searchReducer } from 'reducers/searchReducer'
import {facilityReducer} from 'reducers/facilityReducer'

const rootReducer = combineReducers({
  searchReducer,
  facilityReducer
})

export default rootReducer
