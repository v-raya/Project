import React from 'react'
import SearchInput from '../../../app/javascript/search/search_input'
import ShallowRenderer from 'react-test-renderer/shallow'

describe('Render Search Inputs', function () {
  const props = {
    facilityTypes: [
      {
        id: '',
        value: ''
      }
    ],
    countyList: [
      {
        id: '',
        value: ''
      }
    ]

  }
  const renderedComp = new ShallowRenderer()
  const compRendered = renderedComp.render(<SearchInput {...props} />)
  const resultTag = renderedComp.getRenderOutput()

  // it('Rendered A React Component or Not', function () {
  //     expect(TestUtils.isDOMComponent(compRendered)).toBe(true)
  // });

  it('render Input block', function () {
    expect(resultTag.type).toBe('div')
  })
  it('verify class name', function () {
    expect(resultTag.props.className).toBe('search_input col-xs-12 col-sm-12 col-md-12 col-lg-12')
  })
})
