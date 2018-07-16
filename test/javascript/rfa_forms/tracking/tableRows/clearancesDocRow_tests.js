import React from 'react'
import ClearancesDocRow from 'rfa_forms/tracking/tableRows/clearancesDocRow'
import {shallow, mount} from 'enzyme'

describe('Test Tracking For Clearances Table', () => {
  let editClearanceDocRow, showClearanceDocRow, clearanceDocuments, changeSpy
  beforeEach(() => {
    changeSpy = jasmine.createSpy('handleChange')
    clearanceDocuments = {
      items: [ {
        'notes': 'testing',
        'title': 'Family Evaluation',
        'checked': false,
        'start_date': '1978-01-21',
        'completed_date': '1969-01-21'
      }]
    }

    editClearanceDocRow = shallow(<ClearancesDocRow
      peopleIndex={0}
      clearanceDocuments={clearanceDocuments}
      editMode
      handleChange={changeSpy}
    />)
    showClearanceDocRow = shallow(<ClearancesDocRow
      peopleIndex={0}
      clearanceDocuments={clearanceDocuments}
      editMode={false}
      handleChange={changeSpy}
    />)
  })

  it('loads the row ', () => {
    expect(editClearanceDocRow.length).toBe(1)
  })
  it('edit text area', () => {
    let textAreaField = editClearanceDocRow.at(0).shallow().find('#clearance0EditText0')
    textAreaField.simulate('change', {target: {value: 'text input'}})
    expect(changeSpy).toHaveBeenCalledWith('notes', 'text input', 0, 0)
  })
  it('edit checkbox', () => {
    let checkBoxField = editClearanceDocRow.at(0).shallow().find('#clearance0EditCheckbox0')
    checkBoxField.simulate('change', {target: {checked: true}})
    expect(changeSpy).toHaveBeenCalledWith('checked', true, 0, 0)
  })
  it('edit date field', () => {
    let textAreaField = editClearanceDocRow.at(0).shallow().find('#clearance0EditStartDate0')
    textAreaField.simulate('change', {target: {value: '01/20/1981'}})
    expect(changeSpy).toHaveBeenCalledWith('start_date', '1981-01-20', 0, 0)
  })
  it('edit date field', () => {
    let textAreaField = editClearanceDocRow.at(0).shallow().find('#clearance0EditCompleteDate0')
    textAreaField.simulate('change', {target: {value: '01/20/1981'}})
    expect(changeSpy).toHaveBeenCalledWith('completed_date', '1981-01-20', 0, 0)
  })

  it('loads the row ', () => {
    expect(showClearanceDocRow.length).toBe(1)
  })
  it('Show text area', () => {
    let textAreaField = showClearanceDocRow.at(0).shallow().find('#clearanceShowText0')
    expect(textAreaField.text()).toEqual('testing')
  })
  it('Show checkbox', () => {
    let checkBoxField = showClearanceDocRow.at(0).shallow().find('#clearanceShowCheckbox0')
    expect(checkBoxField.length).toEqual(1)
  })
  it('Show start date field', () => {
    let submittedDateField = showClearanceDocRow.at(0).shallow().find('#clearance0ShowStartDate0')
    expect(submittedDateField.text()).toEqual('01/21/1978')
  })
  it('Show complete date field', () => {
    let submittedDateField = showClearanceDocRow.at(0).shallow().find('#clearance0ShowCompleteDate0')
    expect(submittedDateField.text()).toEqual('01/21/1969')
  })
})
