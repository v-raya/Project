import React from 'react'
import {shallow, mount} from 'enzyme'
import InPersonData from 'contacts/contact_edit_view/inPersonData'
import {inPersonContactDataDefaults} from 'constants/defaultFields'

describe('in person data tests ', () => {
  let component, setInPersonDataSpy
  setInPersonDataSpy = jasmine.createSpy('setInPersonData')

  beforeEach(() => {
    component = mount(
      <InPersonData
        inPersonContactData={inPersonContactDataDefaults}
        setInPersonData={setInPersonDataSpy} />)
  })

  it('verify component did mount', () => {
    expect(component.length).toEqual(1)
  })

  it('verify contact location change', () => {
    let locationField = component.find('#contactLocation').hostNodes()
    locationField.simulate('change', {target: {options: {'1': {value: '1', text: 'Office'}, selectedIndex: 1}}})
    expect(setInPersonDataSpy).toHaveBeenCalledWith('location', { id: '1', value: 'Office' })
  })

  it('verify contact type change', () => {
    let contactTypeField = component.find('#contactType').hostNodes()
    contactTypeField.simulate('change', {target: {options: {'13': {value: '13', text: 'Email'}, selectedIndex: 13}}})
    expect(setInPersonDataSpy).toHaveBeenCalledWith('visit_type', { id: '13', value: 'Email' })
  })

  it('verify contact notice change', () => {
    let noticeField = component.find('#contactNoticetrue').hostNodes()
    noticeField.simulate('change', {target: {value: 'true'}})
    expect(setInPersonDataSpy).toHaveBeenCalledWith('notice', true)
  })

  it('verify contact collateral visit change', () => {
    let collateralVisitField = component.find('#collateralVisittrue').hostNodes()
    collateralVisitField.simulate('change', {target: {value: 'true'}})
    expect(setInPersonDataSpy).toHaveBeenCalledWith('is_collateral_visit', true)
  })

  it('onChange event on start time', () => {
    let applicantDetails = component.find('#startTime').hostNodes()
    applicantDetails.simulate('change', {target: {value: '232020'}})
    expect(setInPersonDataSpy).toHaveBeenCalledWith('collateral_visit_start_time', '232020')
  })

  it('onChange event on end time', () => {
    let applicantDetails = component.find('#endTime').hostNodes()
    applicantDetails.simulate('change', {target: {value: '232020'}})
    expect(setInPersonDataSpy).toHaveBeenCalledWith('collateral_visit_end_time', '232020')
  })
})
