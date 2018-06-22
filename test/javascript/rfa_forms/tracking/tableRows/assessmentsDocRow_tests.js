import React from 'react'
import AssessmentsDocRow from 'rfa_forms/tracking/tableRows/assessmentsDocRow'
import {shallow, mount} from 'enzyme'

describe('Tracking Show mode', () => {
  let editAssessmentDocRow, showAssessmentDocRow, trackingDocuments, changeSpy
  beforeEach(() => {
    changeSpy = jasmine.createSpy('handleChange')
    trackingDocuments = {
      items: [ {
        'notes': 'testing',
        'title': 'Family Evaluation',
        'checked': false,
        'approved_date': '1978-01-21',
        'submitted_date': '1969-01-21'
      }]
    }

    editAssessmentDocRow = mount(<AssessmentsDocRow
      trackingDocuments={trackingDocuments}
      editMode
      handleChange={changeSpy}
    />)
    showAssessmentDocRow = mount(<AssessmentsDocRow
      trackingDocuments={trackingDocuments}
      editMode={false}
      handleChange={changeSpy}
    />)
  })

  it('loads the row ', () => {
    expect(editAssessmentDocRow.length).toBe(1)
  })
  it('edit text area', () => {
    let textAreaField = editAssessmentDocRow.find('textarea')
    textAreaField.simulate('change', {target: {value: 'text input'}})
    expect(changeSpy).toHaveBeenCalledWith('notes', 'text input', 0, 'assessments', { items: [ { notes: 'testing', title: 'Family Evaluation', checked: false, approved_date: '1978-01-21', submitted_date: '1969-01-21' } ] })
  })
  it('edit checkbox', () => {
    let checkBoxField = editAssessmentDocRow.find('input[type="checkbox"]')
    checkBoxField.simulate('change', {target: {checked: true}})
    expect(changeSpy).toHaveBeenCalledWith('checked', true, 0, 'assessments', { items: [ { notes: 'testing', title: 'Family Evaluation', checked: false, approved_date: '1978-01-21', submitted_date: '1969-01-21' } ] })
  })
  it('edit date field', () => {
    let textAreaField = editAssessmentDocRow.find('#assessmentEditApprovedDate0').hostNodes()
    textAreaField.simulate('change', {target: {value: '01/20/1980'}})
    expect(changeSpy).toHaveBeenCalledWith('approved_date', '1980-01-20', 0, 'assessments', { items: [ { notes: 'testing', title: 'Family Evaluation', checked: false, approved_date: '1978-01-21', submitted_date: '1969-01-21' } ] })
  })
  it('edit date field', () => {
    let textAreaField = editAssessmentDocRow.find('#assessmentEditSubmittedDate0').hostNodes()
    textAreaField.simulate('change', {target: {value: '01/20/1981'}})
    expect(changeSpy).toHaveBeenCalledWith('submitted_date', '1981-01-20', 0, 'assessments', { items: [ { notes: 'testing', title: 'Family Evaluation', checked: false, approved_date: '1978-01-21', submitted_date: '1969-01-21' } ] })
  })

  it('loads the row ', () => {
    expect(showAssessmentDocRow.length).toBe(1)
  })
  it('edit text area', () => {
    let textAreaField = showAssessmentDocRow.find('#assessmentShowText0').hostNodes()
    expect(textAreaField.text()).toEqual('testing')
  })
  it('edit checkbox', () => {
    let checkBoxField = showAssessmentDocRow.find('input[type="checkbox"]')
    expect(checkBoxField.text()).toEqual('')
  })
  it('edit date field', () => {
    let approvedDateField = showAssessmentDocRow.find('#assessmentShowApprovedDate0').hostNodes()
    expect(approvedDateField.text()).toEqual('01/21/1978')
  })
  it('edit date field', () => {
    let submittedDateField = showAssessmentDocRow.find('#assessmentShowSubmittedDate0').hostNodes()
    expect(submittedDateField.text()).toEqual('01/21/1969')
  })
})
