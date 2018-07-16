import React from 'react'
import IndividualDocRow from 'rfa_forms/tracking/tableRows/individualDocRow'
import {shallow, mount} from 'enzyme'

describe('Test Tracking For Individual Table', () => {
  let editIndividualDocRow, showIndividualDocRow, individualDocuments, changeSpy
  beforeEach(() => {
    changeSpy = jasmine.createSpy('handleChange')
    individualDocuments = {
      items: [ {
        'notes': 'testing',
        'title': 'Family Evaluation',
        'checked': false,
        'start_date': '1978-01-21',
        'completed_date': '1969-01-21'
      }]
    }

    editIndividualDocRow = shallow(<IndividualDocRow
      peopleIndex={0}
      individualDocuments={individualDocuments}
      editMode
      handleChange={changeSpy}
    />)
    showIndividualDocRow = shallow(<IndividualDocRow
      peopleIndex={0}
      individualDocuments={individualDocuments}
      editMode={false}
      handleChange={changeSpy}
    />)
  })

  it('loads the row ', () => {
    expect(editIndividualDocRow.length).toBe(1)
  })
  it('Edit text area', () => {
    let textAreaField = editIndividualDocRow.at(0).shallow().find('#individual0EditText0')
    textAreaField.simulate('change', {target: {value: 'text input'}})
    expect(changeSpy).toHaveBeenCalledWith('notes', 'text input', 0, 0)
  })
  it('Edit checkbox', () => {
    let checkBoxField = editIndividualDocRow.at(0).shallow().find('#individual0EditCheckbox0')
    checkBoxField.simulate('change', {target: {checked: true}})
    expect(changeSpy).toHaveBeenCalledWith('checked', true, 0, 0)
  })
  it('Edit date field', () => {
    let textAreaField = editIndividualDocRow.at(0).shallow().find('#individual0EditStartDate0')
    textAreaField.simulate('change', {target: {value: '01/20/1980'}})
    expect(changeSpy).toHaveBeenCalledWith('start_date', '1980-01-20', 0, 0)
  })
  it('Edit date field', () => {
    let textAreaField = editIndividualDocRow.at(0).shallow().find('#individual0EditApprovedDate0')
    textAreaField.simulate('change', {target: {value: '01/20/1981'}})
    expect(changeSpy).toHaveBeenCalledWith('completed_date', '1981-01-20', 0, 0)
  })

  it('loads the row ', () => {
    expect(showIndividualDocRow.length).toBe(1)
  })
  it('Show text area', () => {
    let textAreaField = showIndividualDocRow.at(0).shallow().find('#individual0ShowText0')
    expect(textAreaField.text()).toEqual('testing')
  })
  it('Show checkbox', () => {
    let checkBoxField = showIndividualDocRow.at(0).shallow().find('#individual0ShowCheckbox0')
    expect(checkBoxField.length).toEqual(1)
  })
  it('Show date field', () => {
    let approvedDateField = showIndividualDocRow.at(0).shallow().find('#individual0showStartDate0')
    expect(approvedDateField.text()).toEqual('01/21/1978')
  })
  it('Show date field', () => {
    let submittedDateField = showIndividualDocRow.at(0).shallow().find('#individual0ShowApprovedDate0')
    expect(submittedDateField.text()).toEqual('01/21/1969')
  })
})
