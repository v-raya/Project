export const SEARCH_RESULTS_FETCH = 'SEARCH_RESULTS/FETCH'
export const SEARCH_RESULTS_FETCH_COMPLETE = 'SEARCH_RESULTS/FETCH_COMPLETE'
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

export const fetchSuccess = (searchResult) => ({
  type: SEARCH_RESULTS_FETCH_COMPLETE,
  payload: searchResult
})

export const fetchFailure = (error) => ({
  type: SEARCH_RESULTS_FETCH_COMPLETE,
  payload: {error},
  error: true
})
