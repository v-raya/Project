import React from 'react'
import Rfa01cCreateLink from 'rfa_forms/rfa_packet_list/rfa01cCreateLink'
import {shallow} from 'enzyme'

describe('Verify RfaO1cCreateLink', () => {
  let RfaO1cCreateLinkShallow
  beforeEach(() => {
    RfaO1cCreateLinkShallow = shallow(
      <Rfa01cCreateLink
        applicationId={'10'}
        rfa01CForm={[]}
      />)
  })
  it('test render', () => {
    expect(RfaO1cCreateLinkShallow.find('#rfa01cCreate').length).toEqual(1)
  })
})
