import React from 'react'
import SearchInput from '../../../app/javascript/search/search_input'
var TestUtils = require('react-dom/lib/ReactTestUtils')

describe('Render Search Inputs', function () {
  const renderedComp = TestUtils.createRenderer()
  const compRendered = renderedComp.render(<SearchInput />)
  const result_tag = renderedComp.getRenderOutput()

  // it('Rendered A React Component or Not', function () {
  //     expect(TestUtils.isDOMComponent(compRendered)).toBe(true)
  // });

  it('render Input block', function () {
    expect(result_tag.type).toBe('div')
  })

  it('verify class name', function () {
    expect(result_tag.props.className).toBe('search_input col-xs-12 col-sm-12 col-md-12 col-lg-12')
  })
})
