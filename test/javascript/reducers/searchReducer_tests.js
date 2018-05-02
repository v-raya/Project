import {searchReducer} from 'reducers/searchReducer'
import {
  searchApiCall,
  handleInputChange,
  handleDropDownChange,
  handleDropDownAndPageNumberChange,
  handlePageNumberChange,
  handleResetForm,
  handleToggle,
  fetchSuccess,
  fetchFailure
} from 'actions/searchActions'

describe('Verify searchReducer', () => {
  let initialState

  beforeEach(() => {
    initialState = {
      inputData: {},
      searchResults: undefined,
      totalNoOfResults: 0,
      isToggled: true,
      sizeValue: 10,
      pageNumber: 1,
      countyTypes: [],
      facilityTypes: [],
      user: {county_code: ''},
      errors: {}
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
      user: {county_code: ''},
      errors: {}
    }

    expect(searchReducer(inputState, handleResetFormAction)).toEqual(initialState)
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
})
