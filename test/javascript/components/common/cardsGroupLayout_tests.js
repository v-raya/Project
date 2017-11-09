import React from 'react'
import CardsGroupLayout from 'components/common/cardsGroupLayout'
import {shallow} from 'enzyme'

describe('Verify CardsGroupLayout', () => {
  let CardsGroupLayoutShallow
  beforeEach(() => {
    CardsGroupLayoutShallow = shallow(<CardsGroupLayout><br /></CardsGroupLayout>)
  })
  it('test render', () => {
    expect(CardsGroupLayoutShallow.find('.cards-section').length).toEqual(1)
  })
})
