import React from 'react'
import {shallow, mount} from 'enzyme'
import SearchNotFound from 'search/searchNotFound'
import {NoSearchResultsErrorMessage, NoSearchCriteriaMessage} from 'search/common/commonUtils'

describe('Search Not Found with errors', () => {
  const errors = {
    'issue_details': [ {
      'incident_id': '95100850-f514-4365-9b93-6cbd28adcf27',
      'type': 'unexpected_exception',
      'user_message': 'There was an error processing your request. It has been logged with unique incident id',
      'technical_message': 'Bad Request',
      'stack_trace': 'gov.ca.cwds.rest.api.DoraException: Forbidden\\n\\'
    } ]
  }
  const searchNotFoundShallow = shallow(<SearchNotFound errors={errors.issue_details} errorMessage={undefined}/>)
  it('verify shallow component load with error props', () => {
    expect(searchNotFoundShallow.length).toBe(1)
  })
  it('verify mount component load with error props', () => {
    const searchNotFoundMount = mount(<SearchNotFound errors={errors.issue_details} errorMessage={undefined}/>)
    expect(searchNotFoundMount.text()).toContain('Message: There was an error processing your request')
  })
})

describe('Search Not Found with errors undefined and no search results found error message', () => {
  const searchNotFoundShallow = shallow(<SearchNotFound errors={undefined} errorMessage={NoSearchResultsErrorMessage}/>)
  it('verify Component load with undefined props', () => {
    expect(searchNotFoundShallow.length).toBe(1)
  })
  it('verifies error message when props are undefined', () => {
    expect(searchNotFoundShallow.text()).toContain(NoSearchResultsErrorMessage)
  })
})

describe('Search Not Found with errors undefined and no search criteria error message', () => {
  const searchNotFoundShallow = shallow(<SearchNotFound errors={undefined} errorMessage={NoSearchCriteriaMessage}/>)
  it('verify Component load with undefined props', () => {
    expect(searchNotFoundShallow.length).toBe(1)
  })
  it('verifies error message when props are undefined', () => {
    expect(searchNotFoundShallow.text()).toContain(NoSearchCriteriaMessage)
  })
})
