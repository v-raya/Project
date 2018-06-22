import React from 'react'
import FamilyDocRow from 'rfa_forms/tracking/tableRows/familyDocRow'
import {shallow, mount} from 'enzyme'

describe('Tracking Show mode', () => {
  let editFamilyDocRow, showFamilyDocRow, trackingDocuments, changeSpy
  beforeEach(() => {
    changeSpy = jasmine.createSpy('handleChange')
    trackingDocuments = {
      items: [ {
        'notes': 'testing',
        'title': 'Family Evaluation',
        'checked': false,
        'received_date': '1978-01-21'

      }]
    }

    editFamilyDocRow = mount(<FamilyDocRow
      trackingDocuments={trackingDocuments}
      editMode
      handleChange={changeSpy}
    />)
    showFamilyDocRow = mount(<FamilyDocRow
      trackingDocuments={trackingDocuments}
      editMode={false}
      handleChange={changeSpy}
    />)
  })

  it('loads the row ', () => {
    expect(editFamilyDocRow.length).toBe(1)
  })
  it('edit text area', () => {
    let textAreaField = editFamilyDocRow.find('textarea')
    textAreaField.simulate('change', {target: {value: 'text input'}})
    expect(changeSpy).toHaveBeenCalledWith('notes', 'text input', 0, 'family_documents', { items: [ { notes: 'testing', title: 'Family Evaluation', checked: false, received_date: '1978-01-21' } ] })
  })
  it('edit checkbox', () => {
    let checkBoxField = editFamilyDocRow.find('input[type="checkbox"]')
    checkBoxField.simulate('change', {target: {checked: true}})
    expect(changeSpy).toHaveBeenCalledWith('checked', true, 0, 'family_documents', { items: [ { notes: 'testing', title: 'Family Evaluation', checked: false, received_date: '1978-01-21' } ] })
  })
  it('edit date field', () => {
    let textAreaField = editFamilyDocRow.find('#familyEditRecievedDate0').hostNodes()
    textAreaField.simulate('change', {target: {value: '01/20/1981'}})
    expect(changeSpy).toHaveBeenCalledWith('received_date', '1981-01-20', 0, 'family_documents', { items: [ { notes: 'testing', title: 'Family Evaluation', checked: false, received_date: '1978-01-21' } ] })
  })

  it('loads the row ', () => {
    expect(showFamilyDocRow.length).toBe(1)
  })
  it('edit text area', () => {
    let textAreaField = showFamilyDocRow.find('#familyShowNotes0').hostNodes()
    expect(textAreaField.text()).toEqual('testing')
  })
  it('edit checkbox', () => {
    let checkBoxField = showFamilyDocRow.find('input[type="checkbox"]')
    expect(checkBoxField.text()).toEqual('')
  })
  it('edit date field', () => {
    let approvedDateField = showFamilyDocRow.find('#familyShowRecievedDate0').hostNodes()
    expect(approvedDateField.text()).toEqual('01/21/1978')
  })
})
