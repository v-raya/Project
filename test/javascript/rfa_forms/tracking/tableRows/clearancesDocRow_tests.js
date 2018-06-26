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
        'completion_date': '1969-01-21'
      }]
    }

    editClearanceDocRow = mount(<ClearancesDocRow
      peopleIndex={0}
      clearanceDocuments={clearanceDocuments}
      editMode
      handleChange={changeSpy}
    />)
    showClearanceDocRow = mount(<ClearancesDocRow
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
    let textAreaField = editClearanceDocRow.find('textarea')
    textAreaField.simulate('change', {target: {value: 'text input'}})
    expect(changeSpy).toHaveBeenCalledWith('notes', 'text input', 0, 0)
  })
  it('edit checkbox', () => {
    let checkBoxField = editClearanceDocRow.find('input[type="checkbox"]')
    checkBoxField.simulate('change', {target: {checked: true}})
    expect(changeSpy).toHaveBeenCalledWith('checked', true, 0, 0)
  })
  it('edit date field', () => {
    let textAreaField = editClearanceDocRow.find('#clearance0EditStartDate0').hostNodes()
    textAreaField.simulate('change', {target: {value: '01/20/1981'}})
    expect(changeSpy).toHaveBeenCalledWith('start_date', '1981-01-20', 0, 0)
  })
  it('edit date field', () => {
    let textAreaField = editClearanceDocRow.find('#clearance0EditCompleteDate0').hostNodes()
    textAreaField.simulate('change', {target: {value: '01/20/1981'}})
    expect(changeSpy).toHaveBeenCalledWith('completion_date', '1981-01-20', 0, 0)
  })

  it('loads the row ', () => {
    expect(showClearanceDocRow.length).toBe(1)
  })
  it('Show text area', () => {
    let textAreaField = showClearanceDocRow.find('#clearanceShowText0').hostNodes()
    expect(textAreaField.text()).toEqual('testing')
  })
  it('Show checkbox', () => {
    let checkBoxField = showClearanceDocRow.find('input[type="checkbox"]')
    expect(checkBoxField.text()).toEqual('')
  })
  it('Show start date field', () => {
    let submittedDateField = showClearanceDocRow.find('#clearance0ShowStartDate0').hostNodes()
    expect(submittedDateField.text()).toEqual('01/21/1978')
  })
  it('Show complete date field', () => {
    let submittedDateField = showClearanceDocRow.find('#clearance0ShowCompleteDate0').hostNodes()
    expect(submittedDateField.text()).toEqual('01/21/1969')
  })
})
