import React from 'react'
import ReactDOM from 'react-dom'
var TestUtils = require('react-dom/lib/ReactTestUtils')
import App from './../../../app/javascript/facility/App'

describe('check App Component loaded', function () {
  it('render the component', function () {
    var element = TestUtils.renderIntoDocument(<App />)
    var h1_Tag = ReactDOM.findDOMNode(element)
    expect(h1_Tag.tagName).toEqual('DIV')
  })
})
