import {combineReducers} from 'redux'
import { searchReducer } from 'reducers/searchReducer'
import {facilityReducer} from 'reducers/facilityReducer'
import {facilityChildrenReducer} from 'reducers/facilityChildrenReducer'
import {facilityComplaints} from 'reducers/facilityComplaints'

const rootReducer = combineReducers({
  searchReducer,
  facilityReducer,
  facilityChildrenReducer,
  facilityComplaints
})

export default rootReducer
