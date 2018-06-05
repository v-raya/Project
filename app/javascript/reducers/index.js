import {combineReducers} from 'redux'
import { searchReducer } from 'reducers/searchReducer'
import {facilityReducer} from 'reducers/facilityReducer'
import {facilityChildrenReducer} from 'reducers/facilityChildrenReducer'

const rootReducer = combineReducers({
  searchReducer,
  facilityReducer,
  facilityChildrenReducer
})

export default rootReducer
