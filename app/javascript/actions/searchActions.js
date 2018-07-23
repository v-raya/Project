import {checkIfScrollBarVisible} from 'search/common/commonUtils'
import * as Constants from 'constants/actionTypes'

export const searchApiCall = (searchParams, urlParams) => ({
  type: Constants.SEARCH_RESULTS_FETCH,
  payload: {searchParams, urlParams}
})

export const searchDictionariesCall = () => ({
  type: Constants.SEARCH_DICTIONARIES_FETCH
})

export const searchUserDataCall = () => ({
  type: Constants.SEARCH_USER_DATA_FETCH
})

export const handleInputChange = (key, value) => ({
  type: Constants.HANDLE_INPUT_CHANGE,
  payload: {key, value}
})

export const handleDropDownChange = (value) => ({
  type: Constants.HANDLE_DROPDOWN_CHANGE,
  payload: {value}
})

export const handleDropDownAndPageNumberChange = (pageNumber, value) => ({
  type: Constants.HANDLE_DROPDOWN_AND_PAGENUMBER_CHANGE,
  payload: {sizeValue: value, pageNumber: pageNumber}
})

export const handlePageNumberChange = (pageNumber) => ({
  type: Constants.HANDLE_PAGENUMBER_CHANGE,
  payload: {pageNumber: pageNumber === '' ? pageNumber : parseInt(pageNumber)}
})

export const handleResetForm = () => ({
  type: Constants.HANDLE_RESET_FORM
})

export const handleToggle = () => ({
  type: Constants.HANDLE_TOGGLE
})

export const handleScrollBarChange = () => ({
  type: Constants.HANDLE_VISIBLE_SCROLLBAR_CHANGE,
  payload: {isScrollBarVisible: checkIfScrollBarVisible(document.documentElement)}
})

export const fetchDictionarySuccess = (dictionaries) => ({
  type: Constants.SEARCH_DICTIONARIES_FETCH_COMPLETE,
  payload: dictionaries
})

export const fetchUserDataSuccess = (user) => ({
  type: Constants.SEARCH_USER_DATA_FETCH_COMPLETE,
  payload: user
})

export const fetchSuccess = (searchResult) => ({
  type: Constants.SEARCH_RESULTS_FETCH_COMPLETE,
  payload: searchResult
})

export const fetchFailure = (error) => ({
  type: Constants.SEARCH_RESULTS_FETCH_ERROR,
  payload: error,
  error: true
})

export const fetchNoSearchCriteria = (errorMessage) => ({
  type: Constants.NO_SEARCH_CRITERIA_ERROR,
  payload: errorMessage,
  error: true
})
