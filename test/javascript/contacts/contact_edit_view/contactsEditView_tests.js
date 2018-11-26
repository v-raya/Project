import React from 'react'
import {shallow, mount} from 'enzyme'
import InPersonData from 'contacts/contact_edit_view/inPersonData'
import ContactEditView from 'contacts/contact_edit_view/index'
import {contactDefaults, inPersonContactDataDefaults} from 'constants/defaultFields'
import {contactLocations, contactVisitTypes, contactMethods} from './../../helpers/constants'

describe('contacts edit view ', () => {
  let component, componentWithContact, cancelSpy, saveSpy, setContactStateSpy, setInPersonDataSpy
  const rfaApplication = {id: 1}
  beforeEach(() => {
    component = mount(
      <ContactEditView
        rfa_application={rfaApplication}
        contact_locations={contactLocations.items}
        contact_visit_types={contactVisitTypes.items}
        contact_methods={contactMethods.items}
        contact={null} />)

    componentWithContact = mount(
      <ContactEditView
        rfa_application={rfaApplication}
        contact_locations={contactLocations.items}
        contact_visit_types={contactVisitTypes.items}
        contact_methods={contactMethods.items}
        contact={{id: 1,
          'date': '',
          'classification': null,
          'contact_method': null,
          'in_person_contact_data': inPersonContactDataDefaults,
          'title': '',
          'notes': ''}} />)

    saveSpy = spyOn(ContactEditView.prototype, 'saveProgress').and.callThrough()
    cancelSpy = spyOn(ContactEditView.prototype, 'cancel').and.callThrough()
    setContactStateSpy = spyOn(ContactEditView.prototype, 'setContactState').and.callThrough()
    setInPersonDataSpy = spyOn(ContactEditView.prototype, 'setInPersonData').and.callThrough()
  })

  it('verify component did mount', () => {
    expect(component.length).toEqual(1)
    expect(component.find('#contactsSave').length).toEqual(1)
    expect(component.find('#contactsCancel').length).toEqual(1)
  })

  it('tests saveProgress', () => {
    const saveProgressBtn = component.find('#contactsSave')
    saveProgressBtn.simulate('click')
    component.instance().saveProgress()
    expect(component.find('#contactsSave').length).toEqual(1)
  })

  it('tests saveProgress with Id', () => {
    const saveProgressBtn = componentWithContact.find('#contactsSave')
    saveProgressBtn.simulate('click')
    componentWithContact.instance().saveProgress()
    expect(componentWithContact.find('#contactsSave').length).toEqual(1)
  })

  it('tests cancel', () => {
    const cancelBtn = component.find('#contactsCancel')
    cancelBtn.simulate('click')
    component.instance().cancel()
    expect(component.find('#contactsCancel').length).toEqual(1)
  })

  it('verify date', () => {
    const dateOfContactField = component.find('input#dateOfContact')
    dateOfContactField.simulate('change', {target: {value: '01/02/2000'}})
    component.instance().setContactState('date_of_contact', '01/02/2000')
    expect(component.find('input#dateOfContact').props().value).toEqual('01/02/2000')
  })

  it('verify contact method change', () => {
    const contactField = component.find('select#methodOfContact.reusable-select')
    contactField.simulate('change', {target: {options: {'3': {value: '3', text: 'Email'}, selectedIndex: 3}}})
    component.instance().setContactState('contact_method', { id: '3', value: 'Email' })
    expect(component.find('select#methodOfContact.reusable-select').props().value).toEqual('3')
  })

  it('verify contact classification true change', () => {
    const classificationField = component.find('input#contactClassificationtrue')
    classificationField.simulate('change', {target: {value: 'true'}})
    component.instance().setContactState('classification', 'true')
    expect(component.find('input#contactClassificationtrue').props().value).toEqual('true')
  })

  it('verify contact classification false change', () => {
    const classificationField = component.find('input#contactClassificationfalse')
    classificationField.simulate('change', {target: {value: 'false'}})
    component.instance().setContactState('classification', 'false')
    expect(component.find('input#contactClassificationfalse').props().value).toEqual('false')
  })

  it('verify contact location change', () => {
    const locationField = component.find('#contactLocation').hostNodes()
    locationField.simulate('change', {target: {options: {'1': {value: '1', text: 'Office'}, selectedIndex: 1}}})
    component.instance().setInPersonData('location', {value: '1', text: 'Office'})
    expect(component.find('#contactLocation').hostNodes().props().value).toEqual('1')
  })

  it('verify contact title', () => {
    const dateOfBirthField = component.find('input#contactTitle')
    dateOfBirthField.simulate('change', {target: {value: 'title'}})
    component.instance().setContactState('title', 'title')
    expect(component.find('input#contactTitle').props().value).toEqual('title')
  })

  it('verify contact notes', () => {
    const dateOfBirthField = component.find('#contactNotes').hostNodes()
    dateOfBirthField.simulate('change', {target: {value: 'notes'}})
    component.instance().setContactState('notes', 'notes')
    expect(component.find('#contactNotes').hostNodes().props().value).toEqual('notes')
  })
})
