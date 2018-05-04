export const SEARCH_DICTIONARIES_FETCH = 'SEARCH_DICTIONARIES/FETCH'
export const SEARCH_DICTIONARIES_FETCH_COMPLETE = 'SEARCH_DICTIONARIES/FETCH_COMPLETE'
export const SEARCH_RESULTS_FETCH = 'SEARCH_RESULTS/FETCH'
export const SEARCH_RESULTS_FETCH_COMPLETE = 'SEARCH_RESULTS/FETCH_COMPLETE'
export const SEARCH_RESULTS_FETCH_ERROR = 'SEARCH_RESULTS/FETCH_ERROR'
export const NO_SEARCH_CRITERIA_ERROR = 'SEARCH_RESULTS/FETCH_NOTHING_ERROR'
export const HANDLE_INPUT_CHANGE = 'HANDLE_INPUT_CHANGE'
export const HANDLE_TOGGLE = 'HANDLE_TOGGLE'
export const HANDLE_RESET_FORM = 'HANDLE_RESET_FORM'
export const HANDLE_DROPDOWN_CHANGE = 'HANDLE_DROPDOWN_CHANGE'
export const HANDLE_PAGENUMBER_CHANGE = 'HANDLE_PAGENUMBER_CHANGE'
export const HANDLE_DROPDOWN_AND_PAGENUMBER_CHANGE = 'HANDLE_DROPDOWN_AND_PAGENUMBER_CHANGE'

export const searchApiCall = (searchParams, urlParams) => ({
  type: SEARCH_RESULTS_FETCH,
  payload: {searchParams, urlParams}
})

export const searchDictionariesCall = () => ({
  type: SEARCH_DICTIONARIES_FETCH
})

export const handleInputChange = (key, value) => ({
  type: HANDLE_INPUT_CHANGE,
  payload: {key, value}
})

export const handleDropDownChange = (value) => ({
  type: HANDLE_DROPDOWN_CHANGE,
  payload: {value}
})

export const handleDropDownAndPageNumberChange = (pageNumber, value) => ({
  type: HANDLE_DROPDOWN_AND_PAGENUMBER_CHANGE,
  payload: {sizeValue: value, pageNumber: pageNumber}
})

export const handlePageNumberChange = (pageNumber) => ({
  type: HANDLE_PAGENUMBER_CHANGE,
  payload: {pageNumber}
})

export const handleResetForm = () => ({
  type: HANDLE_RESET_FORM
})

export const handleToggle = () => ({
  type: HANDLE_TOGGLE
})

export const fetchDictionarySuccess = (dictionaries) => ({
  type: SEARCH_DICTIONARIES_FETCH_COMPLETE,
  payload: dictionaries
})

export const fetchSuccess = (searchResult) => ({
  type: SEARCH_RESULTS_FETCH_COMPLETE,
  payload: searchResult
})

export const fetchFailure = (errorResponse) => ({
  type: SEARCH_RESULTS_FETCH_ERROR,
  payload: errorResponse,
  error: true
})

export const fetchNoSearchCriteria = (errorMessage) => ({
  type: NO_SEARCH_CRITERIA_ERROR,
  payload: errorMessage,
  error: true
})
