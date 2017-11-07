import React from 'react'
import SearchApp from '../../../app/javascript/search/search'
var TestUtils = require('react-dom/test-utils')

describe('Verify Search component Fields', function () {
  const props = {
    facilityTypes: [
      {
        id: '',
        value: ''
      }
    ],
    countyTypes: [
      {
        id: '',
        value: ''
      }
    ]

  }
  const searchComp = TestUtils.renderIntoDocument(<SearchApp {...props} />)
  it('Verify Search Address fields', function () {
    // let searchResults = renderIntoDocument(<SearchApp />);
    let DataSearch = '02,738,193600008,home,2024 W el camino,Sacramento,Ca,95833'
    var query = DataSearch.split(',')
    var addressField = query[4] + ',' + query[5] + ',' + query[6]
    const addressQuery = searchComp.addressQuery(query)
    expect(addressQuery).toEqual(['2024 W el camino', 'Sacramento', 'Ca', '95833'])
  })
})
