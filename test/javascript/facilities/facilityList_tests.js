import React from 'react'
import FacilityList from '../../../app/javascript/facilities/facility_list.jsx'
import ShallowRenderer from 'react-test-renderer/shallow'

describe('check Facility List', function () {
  const renderedComp = new ShallowRenderer()
  const compRendered = renderedComp.render(<FacilityList />)
  const resultTag = renderedComp.getRenderOutput()

  // it('Rendered A React Component or Not', function () {
  //     expect(TestUtils.isDOMComponent(compRendered)).toBe(true)
  // });

  it('render the List', function () {
    expect(resultTag.type).toBe('div')
  })

  it('Verify classNames', function () {
    const checkClassName = resultTag.props
    expect(checkClassName.className).toEqual('facility-list col-xs-12 col-sm-12 col-md-12 col-lg-12')
  })
  it('Check Facility Title was Rendered', function () {
    const checkTag = resultTag.props.children.props.children
    expect(checkTag[0].type).toBe('h1')
  })
})
