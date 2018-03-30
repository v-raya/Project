import React from 'react'
import {shallow, mount} from 'enzyme'
import SearchNotFound from 'search/searchNotFound'

describe('Search Not Found with errors', function () {
  let errors = {
    'issue_details': [ {
      'incident_id': '95100850-f514-4365-9b93-6cbd28adcf27',
      'type': 'unexpected_exception',
      'user_message': 'There was an error processing your request. It has been logged with unique incident id',
      'technical_message': 'Bad Request',
      'stack_trace': 'gov.ca.cwds.rest.api.DoraException: Forbidden\\n\\'
    } ]
  }
  let searchNotFoundShallow = shallow(<SearchNotFound errors={errors.issue_details}/>)
  it('verify shallow component load with error props', function () {
    expect(searchNotFoundShallow.length).toBe(1)
  })
  it('verify mount component load with error props', function () {
    let searchNotFoundMount = mount(<SearchNotFound errors={errors.issue_details}/>)
    expect(searchNotFoundMount.text()).toContain('Message: There was an error processing your request')
  })
})

describe('Search Not Found with errors undefined', function () {
  let searchNotFoundShallow = shallow(<SearchNotFound errors={undefined}/>)
  it('verify Component load with undefined props', function () {
    expect(searchNotFoundShallow.length).toBe(1)
  })
  it('verifies error message when props are undefined', function () {
    expect(searchNotFoundShallow.text()).toContain('No result found with the selected search criteria, Please refine your search and try again')
  })
})
