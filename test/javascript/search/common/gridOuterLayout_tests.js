import React from 'react'
import GridOuterLayout from 'search/common/gridOuterLayout'
import {shallow} from 'enzyme'

describe('Verify GridOuterLayout', () => {
  let GridOuterLayoutShallow
  beforeEach(() => {
    GridOuterLayoutShallow = shallow(<GridOuterLayout><br /></GridOuterLayout>)
  })
  it('test render', () => {
    expect(GridOuterLayoutShallow.find('.grid_layout').length).toEqual(1)
  })
})
