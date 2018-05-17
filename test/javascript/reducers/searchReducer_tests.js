import {searchReducer} from 'reducers/searchReducer'
import {
  searchApiCall,
  handleInputChange,
  handleDropDownChange,
  handleDropDownAndPageNumberChange,
  handleScrollBarChange,
  handlePageNumberChange,
  handleResetForm,
  handleToggle,
  fetchSuccess,
  fetchFailure,
  fetchNoSearchCriteria
} from 'actions/searchActions'

import {NoSearchResultsErrorMessage, NoSearchCriteriaMessage} from 'search/common/commonUtils'

describe('Verify searchReducer', () => {
  let initialState

  beforeEach(() => {
    initialState = {
      inputData: { },
      searchResults: undefined,
      totalNoOfResults: 0,
      isToggled: true,
      sizeValue: 10,
      pageNumber: 1,
      countyTypes: [],
      facilityTypes: [],
      errors: {},
      userCounty: '',
      errorMessage: undefined,
      isScrollBarVisible: false
    }
  })

  it('default returns initial state', () => {
    expect(searchReducer(undefined, {})).toEqual(initialState)
  })

  it('input change returns updated state with inputData', () => {
    const inputChangeAction = handleInputChange('facilityNameValue', 'good home')

    let outputState = initialState
    outputState.inputData = {
      facilityNameValue: 'good home'
    }

    expect(searchReducer(undefined, inputChangeAction)).toEqual(outputState)
  })

  it('fetch call completion returns updated state with search results', () => {
    const fetchSuccessAction = fetchSuccess({
      searchResults: {id: 5, name: 'John'},
      total: 1
    })

    let outputState = initialState
    outputState.searchResults = {id: 5, name: 'John'}
    outputState.totalNoOfResults = 1

    expect(searchReducer(undefined, fetchSuccessAction)).toEqual(outputState)
  })

  it('fetch call completion returns updated state no search results and a error message', () => {
    const fetchSuccessAction = fetchSuccess({
      searchResults: [],
      total: undefined,
      errorMessage: NoSearchResultsErrorMessage
    })

    let outputState = initialState
    outputState.searchResults = []
    outputState.totalNoOfResults = undefined
    outputState.errorMessage = NoSearchResultsErrorMessage

    expect(searchReducer(undefined, fetchSuccessAction)).toEqual(outputState)
  })

  it('fetch call failure returns updated state with api errors', () => {
    let errorResponse = {
      'issue_details': [ {
        'incident_id': '95100850-f514-4365-9b93-6cbd28adcf27',
        'type': 'unexpected_exception',
        'user_message': 'There was an error processing your request. It has been logged with unique incident id',
        'technical_message': 'Bad Request',
        'stack_trace': 'gov.ca.cwds.rest.api.DoraException: Forbidden\\n\\'
      } ]
    }
    const fetchFailureAction = fetchFailure({
      errorResponse: errorResponse
    })

    let outputState = initialState
    outputState.searchResults = []
    outputState.errors = errorResponse
    outputState.errorMessage = undefined

    expect(searchReducer(undefined, fetchFailureAction)).toEqual(outputState)
  })

  it('fetch call failure returns updated state with no search search criteria and a error message', () => {
    const fetchNoSearchCriteriaAction = fetchNoSearchCriteria({
      errorMessage: NoSearchCriteriaMessage
    })

    let outputState = initialState
    outputState.searchResults = []
    outputState.errorMessage = NoSearchCriteriaMessage

    expect(searchReducer(undefined, fetchNoSearchCriteriaAction)).toEqual(outputState)
  })

  it('toggle returns new toggle state', () => {
    const handleToggleAction = handleToggle()

    let outputState = initialState
    outputState.isToggled = false

    expect(searchReducer(undefined, handleToggleAction)).toEqual(outputState)
  })

  it('reset form returns initial State', () => {
    const handleResetFormAction = handleResetForm()

    const inputState = {
      inputData: {facilityNameValue: 'good home'},
      searchResults: {id: 5, name: 'John'},
      totalNoOfResults: 200,
      sizeValue: 50,
      pageNumber: 2,
      isToggled: false,
      countyTypes: [],
      facilityTypes: [],
      userCounty: '',
      errors: {},
      errorMessage: undefined
    }

    const resetState = {
      inputData: {countyValue: ''},
      searchResults: undefined,
      totalNoOfResults: 0,
      isToggled: true,
      sizeValue: 10,
      pageNumber: 1,
      countyTypes: [],
      facilityTypes: [],
      userCounty: '',
      errors: {},
      errorMessage: undefined
    }

    expect(searchReducer(inputState, handleResetFormAction)).toEqual(resetState)
  })

  it('page number change updates state page number', () => {
    const handlePageNumberChangeAction = handlePageNumberChange(4)

    let outputState = initialState
    outputState.pageNumber = 4

    expect(searchReducer(undefined, handlePageNumberChangeAction)).toEqual(outputState)
  })

  it('page number with dropdown change', () => {
    const handleDropDownAndPageNumberChangeAction = handleDropDownAndPageNumberChange(2, 20)

    let outputState = initialState
    outputState.sizeValue = 20
    outputState.pageNumber = 2

    expect(searchReducer(undefined, handleDropDownAndPageNumberChangeAction)).toEqual(outputState)
  })

  it('scroll bar visible change', () => {
    const handleScrollBarChangeAction = handleScrollBarChange()

    let outputState = initialState
    outputState.isScrollBarVisible = false

    expect(searchReducer(undefined, handleScrollBarChangeAction)).toEqual(outputState)
  })
})
