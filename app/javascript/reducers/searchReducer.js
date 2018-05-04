const SEARCH_DICTIONARIES_FETCH = 'SEARCH_DICTIONARIES/FETCH'
const SEARCH_DICTIONARIES_FETCH_COMPLETE = 'SEARCH_DICTIONARIES/FETCH_COMPLETE'
const SEARCH_RESULTS_FETCH = 'SEARCH_RESULTS/FETCH'
const SEARCH_RESULTS_FETCH_COMPLETE = 'SEARCH_RESULTS/FETCH_COMPLETE'
const SEARCH_RESULTS_FETCH_ERROR = 'SEARCH_RESULTS/FETCH_ERROR'
const NO_SEARCH_CRITERIA_ERROR = 'SEARCH_RESULTS/FETCH_NOTHING_ERROR'
const HANDLE_INPUT_CHANGE = 'HANDLE_INPUT_CHANGE'
const HANDLE_TOGGLE = 'HANDLE_TOGGLE'
const HANDLE_RESET_FORM = 'HANDLE_RESET_FORM'
const HANDLE_DROPDOWN_CHANGE = 'HANDLE_DROPDOWN_CHANGE'
const HANDLE_PAGENUMBER_CHANGE = 'HANDLE_PAGENUMBER_CHANGE'
const HANDLE_DROPDOWN_AND_PAGENUMBER_CHANGE = 'HANDLE_DROPDOWN_AND_PAGENUMBER_CHANGE'
const initialState = {
  inputData: {},
  searchResults: undefined,
  totalNoOfResults: 0,
  isToggled: true,
  sizeValue: 10,
  pageNumber: 1,
  errors: {},
  countyTypes: [],
  facilityTypes: [],
  userCounty: '',
  errorMessage: undefined
}

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_DICTIONARIES_FETCH:
      return {...state, countyTypes: [], facilityTypes: []}
    case SEARCH_DICTIONARIES_FETCH_COMPLETE:
      return {...state, countyTypes: action.payload.countyTypes, facilityTypes: action.payload.facilityTypes, inputData: {...state.inputData, 'countyValue': state.inputData.countyValue === undefined ? action.payload.user.county_code : state.inputData.countyValue}, userCounty: action.payload.user.county_code}
    case SEARCH_RESULTS_FETCH:
      return state
    case SEARCH_RESULTS_FETCH_COMPLETE:
      return {...state, searchResults: action.payload.searchResults, totalNoOfResults: action.payload.total, errors: {}, errorMessage: action.payload.errorMessage}
    case SEARCH_RESULTS_FETCH_ERROR:
      return {...state, searchResults: [], errors: action.payload.errorResponse, errorMessage: undefined}
    case NO_SEARCH_CRITERIA_ERROR:
      return {...state, searchResults: [], errors: {}, errorMessage: action.payload.errorMessage}
    case HANDLE_INPUT_CHANGE:
      return {...state, inputData: {...state.inputData, [action.payload.key]: action.payload.value}}
    case HANDLE_TOGGLE:
      return {...state, isToggled: !state.isToggled}
    case HANDLE_RESET_FORM:
      return {...state, inputData: {'countyValue': state.userCounty}, searchResults: undefined, totalNoOfResults: 0, sizeValue: 10, pageNumber: 1, isToggled: true}
    case HANDLE_PAGENUMBER_CHANGE:
      return {...state, pageNumber: action.payload.pageNumber}
    case HANDLE_DROPDOWN_AND_PAGENUMBER_CHANGE:
      return {...state, sizeValue: action.payload.sizeValue, pageNumber: action.payload.pageNumber}
    default:
      return state
  }
}
