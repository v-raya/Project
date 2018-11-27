import React from 'react'
import {mount, shallow} from 'enzyme'
import PageHeader from 'components/common/pageHeader'
import Rfa01PageHeaderButtons from 'components/common/rfa01PageHeaderButtons'
import Button from 'components/common/button'

describe('Verify Page Header rendering', () => {
  const headerLabel = 'page title'

  let headerComp = mount(<PageHeader pageHeaderButtons={<Rfa01PageHeaderButtons />} />)

  it('verify page header render', () => {
    expect(headerComp.length).toBe(1)
  })
  it('verify button render', () => {
    const saveButton = headerComp.find('button[id="saveProgress"]')
    expect(saveButton.length).toBe(1)
    const submitButton = headerComp.find('button[id="submitApplication"]')
    expect(submitButton.length).toBe(1)
  })
})
