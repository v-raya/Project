import React from 'react'
import TaskAndTrainingDocRow from 'rfa_forms/tracking/tableRows/taskAndTrainingDocRow'
import {shallow, mount} from 'enzyme'

describe('Tracking Task And Training Document test', () => {
  let editTaskAndTrainingDocRow, showTaskAndTrainingDocRow, trackingDocuments, changeSpy
  beforeEach(() => {
    changeSpy = jasmine.createSpy('handleChange')
    trackingDocuments = {
      items: [ {
        'notes': 'testing',
        'title': 'Family Evaluation',
        'checked': false,
        'completed_date': '1978-01-21'

      }]
    }

    editTaskAndTrainingDocRow = shallow(<TaskAndTrainingDocRow
      trackingDocuments={trackingDocuments}
      editMode
      handleChange={changeSpy}
    />)
    showTaskAndTrainingDocRow = shallow(<TaskAndTrainingDocRow
      trackingDocuments={trackingDocuments}
      editMode={false}
      handleChange={changeSpy}
    />)
  })

  it('loads the row ', () => {
    expect(editTaskAndTrainingDocRow.length).toBe(1)
  })
  it('edit text area', () => {
    const textAreaField = editTaskAndTrainingDocRow.at(0).shallow().find('#taskAndTrainingEditNotes0')
    textAreaField.simulate('change', {target: {value: 'text input'}})
    expect(changeSpy).toHaveBeenCalledWith('notes', 'text input', 0)
  })
  it('edit checkbox', () => {
    const checkBoxField = editTaskAndTrainingDocRow.at(0).shallow().find('#taskAndTrainingEditCheckbox0')
    checkBoxField.simulate('change', {target: {checked: true}})
    expect(changeSpy).toHaveBeenCalledWith('checked', true, 0)
  })
  it('edit date field', () => {
    const textAreaField = editTaskAndTrainingDocRow.at(0).shallow().find('#taskAndTrainingEditCompletedDate0')
    textAreaField.simulate('change', {target: {value: '01/20/1981'}})
    expect(changeSpy).toHaveBeenCalledWith('completed_date', '1981-01-20', 0)
  })
  it('loads the row ', () => {
    expect(showTaskAndTrainingDocRow.length).toBe(1)
  })
  it('show text area', () => {
    const textAreaField = showTaskAndTrainingDocRow.at(0).shallow().find('#taskAndTrainingShowNotes0')
    expect(textAreaField.text()).toEqual('testing')
  })
  it('show checkbox', () => {
    const checkBoxField = showTaskAndTrainingDocRow.at(0).shallow().find('#taskAndTrainingShowCheckbox0')
    expect(checkBoxField.length).toEqual(1)
  })
  it('show date field', () => {
    const approvedDateField = showTaskAndTrainingDocRow.at(0).shallow().find('#taskAndTrainingShowCompletedDate0')
    expect(approvedDateField.text()).toEqual('01/21/1978')
  })
})
