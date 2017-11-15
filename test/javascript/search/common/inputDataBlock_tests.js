import React from 'react'
import InputDataBlock from 'search/common/inputDataBlock'
import {shallow} from 'enzyme'

describe('Verify InputDataBlock', () => {
  let InputDataBlockShallow
  beforeEach(() => {
    InputDataBlockShallow = shallow(<InputDataBlock><br /></InputDataBlock>)
  })
  it('test render', () => {
    expect(InputDataBlockShallow.find('.input_data').length).toEqual(1)
  })
})
