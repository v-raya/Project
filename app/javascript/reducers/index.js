import {combineReducers} from 'redux'
import { searchReducer } from 'reducers/searchReducer'
import {facilityReducer} from 'reducers/facilityReducer'
import {facilityChildren} from 'reducers/facilityChildren'
import {facilityComplaints} from 'reducers/facilityComplaints'

const rootReducer = combineReducers({
  searchReducer,
  facilityReducer,
  facilityChildren,
  facilityComplaints
})

export default rootReducer
