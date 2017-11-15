import React from 'react'
import GridInnerLayout from 'search/common/gridInnerLayout'
import {shallow} from 'enzyme'

describe('Verify GridInnerLayout', () => {
  let GridInnerLayoutShallow
  beforeEach(() => {
    GridInnerLayoutShallow = shallow(<GridInnerLayout><br /></GridInnerLayout>)
  })
  it('test render', () => {
    expect(GridInnerLayoutShallow.find('.block_label').length).toEqual(1)
  })
})
