import React from 'react'
import {SmallInnerBlockDetails} from 'facility/smallInnerBlockDetails'
import {shallow} from 'enzyme'

describe('Verify SmallInnerBlockDetails', () => {
  let SmallInnerBlockDetailsShallow
  beforeEach(() => {
    SmallInnerBlockDetailsShallow = shallow(<SmallInnerBlockDetails><br /></SmallInnerBlockDetails>)
  })
  it('test render', () => {
    expect(SmallInnerBlockDetailsShallow.find('.small_inner_block').length).toEqual(1)
  })
})
