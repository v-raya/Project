import React from 'react'
import Rfa01cEditLink from 'rfa_forms/rfa_packet_list/rfa01cEditLink'
import {shallow} from 'enzyme'

describe('Verify RfaO1cEditLink', () => {
  const rfa01CFormId = Object.freeze({
    id: 10
  })

  const rfa01CForm = [rfa01CFormId]

  let RfaO1cEditLinkShallow
  beforeEach(() => {
    RfaO1cEditLinkShallow = shallow(
      <Rfa01cEditLink
        applicationId={'10'}
        rfa01CForm={rfa01CForm}
      />)
  })
  it('test render', () => {
    expect(RfaO1cEditLinkShallow.find('#rfa01cEdit').length).toEqual(1)
  })
})
