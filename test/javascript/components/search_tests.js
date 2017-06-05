import React from 'react'
import SearchApp from '../../../app/javascript/search/search'
var TestUtils = require('react-dom/lib/ReactTestUtils')

describe('Verify Search component Fields', function () {
  const searchComp = TestUtils.renderIntoDocument(<SearchApp/>)
  it('verify address fields', function () {
    //let searchResults = renderIntoDocument(<SearchApp />);
    let DataSearch = "02,738,193600008,home,2024 W el camino,Sacramento,Ca,95833";
    var query = DataSearch.split(",");
    var addressField = query[4] + ',' + query[5] + ',' + query[6];
    const addressQuery = searchComp.addressQuery(query);
    expect(addressQuery).toEqual(["2024 W el camino", "Sacramento", "Ca", "95833"]);
  })
})