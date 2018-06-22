import React from 'react'
import TaskAndTrainingDocRow from 'rfa_forms/tracking/tableRows/taskAndTrainingDocRow'
import {shallow, mount} from 'enzyme'

describe('Tracking Show mode', () => {
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

    editTaskAndTrainingDocRow = mount(<TaskAndTrainingDocRow
      trackingDocuments={trackingDocuments}
      editMode
      handleChange={changeSpy}
    />)
    showTaskAndTrainingDocRow = mount(<TaskAndTrainingDocRow
      trackingDocuments={trackingDocuments}
      editMode={false}
      handleChange={changeSpy}
    />)
  })

  it('loads the row ', () => {
    expect(editTaskAndTrainingDocRow.length).toBe(1)
  })
  it('edit text area', () => {
    let textAreaField = editTaskAndTrainingDocRow.find('textarea')
    textAreaField.simulate('change', {target: {value: 'text input'}})
    expect(changeSpy).toHaveBeenCalledWith('notes', 'text input', 0, 'tasks_and_trainings', { items: [ { notes: 'testing', title: 'Family Evaluation', checked: false, completed_date: '1978-01-21' } ] })
  })
  it('edit checkbox', () => {
    let checkBoxField = editTaskAndTrainingDocRow.find('input[type="checkbox"]')
    checkBoxField.simulate('change', {target: {checked: true}})
    expect(changeSpy).toHaveBeenCalledWith('checked', true, 0, 'tasks_and_trainings', { items: [ { notes: 'testing', title: 'Family Evaluation', checked: false, completed_date: '1978-01-21' } ] })
  })
  it('edit date field', () => {
    let textAreaField = editTaskAndTrainingDocRow.find('#taskAndTrainingEditCompletedDate0').hostNodes()
    textAreaField.simulate('change', {target: {value: '01/20/1981'}})
    expect(changeSpy).toHaveBeenCalledWith('completed_date', '1981-01-20', 0, 'tasks_and_trainings', { items: [ { notes: 'testing', title: 'Family Evaluation', checked: false, completed_date: '1978-01-21' } ] })
  })

  it('loads the row ', () => {
    expect(showTaskAndTrainingDocRow.length).toBe(1)
  })
  it('edit text area', () => {
    let textAreaField = showTaskAndTrainingDocRow.find('#taskAndTrainingShowNotes0').hostNodes()
    expect(textAreaField.text()).toEqual('testing')
  })
  it('edit checkbox', () => {
    let checkBoxField = showTaskAndTrainingDocRow.find('input[type="checkbox"]')
    expect(checkBoxField.text()).toEqual('')
  })
  it('edit date field', () => {
    let approvedDateField = showTaskAndTrainingDocRow.find('#taskAndTrainingShowCompletedDate0').hostNodes()
    expect(approvedDateField.text()).toEqual('01/21/1978')
  })
})
