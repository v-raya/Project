import React from 'react'
import FamilyDocRow from 'rfa_forms/tracking/tableRows/familyDocRow'
import {shallow, mount} from 'enzyme'

describe('Test Tracking For Family Documents Table', () => {
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

    editFamilyDocRow = shallow(<FamilyDocRow
      trackingDocuments={trackingDocuments}
      editMode
      handleChange={changeSpy}
    />)
    showFamilyDocRow = shallow(<FamilyDocRow
      trackingDocuments={trackingDocuments}
      editMode={false}
      handleChange={changeSpy}
    />)
  })

  it('loads the row ', () => {
    expect(editFamilyDocRow.length).toBe(1)
  })
  it('edit text area', () => {
    const textAreaField = editFamilyDocRow.at(0).shallow().find('#familyEditNotes0')
    textAreaField.simulate('change', {target: {value: 'text input'}})
    expect(changeSpy).toHaveBeenCalledWith('notes', 'text input', 0)
  })
  it('edit checkbox', () => {
    const checkBoxField = editFamilyDocRow.at(0).shallow().find('#familyEditCheckbox0')
    checkBoxField.simulate('change', {target: {checked: true}})
    expect(changeSpy).toHaveBeenCalledWith('checked', true, 0)
  })
  it('edit date field', () => {
    const textAreaField = editFamilyDocRow.at(0).shallow().find('#familyEditRecievedDate0')
    textAreaField.simulate('change', {target: {value: '01/20/1981'}})
    expect(changeSpy).toHaveBeenCalledWith('received_date', '1981-01-20', 0)
  })

  it('loads the row ', () => {
    expect(showFamilyDocRow.length).toBe(1)
  })
  it('Show text area', () => {
    const textAreaField = showFamilyDocRow.at(0).shallow().find('#familyShowNotes0')
    expect(textAreaField.text()).toEqual('testing')
  })
  it('Show checkbox', () => {
    const checkBoxField = showFamilyDocRow.at(0).shallow().find('#familyShowCheckbox0')
    expect(checkBoxField.length).toEqual(1)
  })
  it('Show date field', () => {
    const approvedDateField = showFamilyDocRow.at(0).shallow().find('#familyShowRecievedDate0')
    expect(approvedDateField.text()).toEqual('01/21/1978')
  })
})
