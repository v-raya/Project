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

    editIndividualDocRow = mount(<IndividualDocRow
      peopleIndex={0}
      individualDocuments={individualDocuments}
      editMode
      handleChange={changeSpy}
    />)
    showIndividualDocRow = mount(<IndividualDocRow
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
    let textAreaField = editIndividualDocRow.find('textarea')
    textAreaField.simulate('change', {target: {value: 'text input'}})
    expect(changeSpy).toHaveBeenCalledWith('notes', 'text input', 0, 0)
  })
  it('Edit checkbox', () => {
    let checkBoxField = editIndividualDocRow.find('input[type="checkbox"]')
    checkBoxField.simulate('change', {target: {checked: true}})
    expect(changeSpy).toHaveBeenCalledWith('checked', true, 0, 0)
  })
  it('Edit date field', () => {
    let textAreaField = editIndividualDocRow.find('#individual0EditStartDate0').hostNodes()
    textAreaField.simulate('change', {target: {value: '01/20/1980'}})
    expect(changeSpy).toHaveBeenCalledWith('start_date', '1980-01-20', 0, 0)
  })
  it('Edit date field', () => {
    let textAreaField = editIndividualDocRow.find('#individual0EditApprovedDate0').hostNodes()
    textAreaField.simulate('change', {target: {value: '01/20/1981'}})
    expect(changeSpy).toHaveBeenCalledWith('completed_date', '1981-01-20', 0, 0)
  })

  it('loads the row ', () => {
    expect(showIndividualDocRow.length).toBe(1)
  })
  it('Show text area', () => {
    let textAreaField = showIndividualDocRow.find('#individual0ShowText0').hostNodes()
    expect(textAreaField.text()).toEqual('testing')
  })
  it('Show checkbox', () => {
    let checkBoxField = showIndividualDocRow.find('input[type="checkbox"]')
    expect(checkBoxField.text()).toEqual('')
  })
  it('Show date field', () => {
    let approvedDateField = showIndividualDocRow.find('#individual0showStartDate0').hostNodes()
    expect(approvedDateField.text()).toEqual('01/21/1978')
  })
  it('Show date field', () => {
    let submittedDateField = showIndividualDocRow.find('#individual0ShowApprovedDate0').hostNodes()
    expect(submittedDateField.text()).toEqual('01/21/1969')
  })
})
