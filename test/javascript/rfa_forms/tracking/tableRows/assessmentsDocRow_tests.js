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

    editAssessmentDocRow = shallow(<AssessmentsDocRow
      trackingDocuments={trackingDocuments}
      editMode
      handleChange={changeSpy}
    />)
    showAssessmentDocRow = shallow(<AssessmentsDocRow
      trackingDocuments={trackingDocuments}
      editMode={false}
      handleChange={changeSpy}
    />)
  })

  it('loads the row ', () => {
    expect(editAssessmentDocRow.length).toBe(1)
  })
  it('edit text area', () => {
    let textAreaField = editAssessmentDocRow.at(0).shallow().find('#assessmentEditText0')
    textAreaField.simulate('change', {target: {value: 'text input'}})
    expect(changeSpy).toHaveBeenCalledWith('notes', 'text input', 0)
  })
  it('edit checkbox', () => {
    let checkBoxField = editAssessmentDocRow.at(0).shallow().find('#assessmentEditCheckbox0')
    checkBoxField.simulate('change', {target: {checked: true}})
    expect(changeSpy).toHaveBeenCalledWith('checked', true, 0)
  })
  it('edit date field', () => {
    let textAreaField = editAssessmentDocRow.at(0).shallow().find('#assessmentEditApprovedDate0')
    textAreaField.simulate('change', {target: {value: '01/20/1980'}})
    expect(changeSpy).toHaveBeenCalledWith('approved_date', '1980-01-20', 0)
  })
  it('edit date field', () => {
    let textAreaField = editAssessmentDocRow.at(0).shallow().find('#assessmentEditSubmittedDate0')
    textAreaField.simulate('change', {target: {value: '01/20/1981'}})
    expect(changeSpy).toHaveBeenCalledWith('submitted_date', '1981-01-20', 0)
  })

  it('loads the row ', () => {
    expect(showAssessmentDocRow.length).toBe(1)
  })
  it('show text area', () => {
    let textAreaField = showAssessmentDocRow.at(0).shallow().find('#assessmentShowText0')
    expect(textAreaField.text()).toEqual('testing')
  })
  it('show checkbox', () => {
    let checkBoxField = showAssessmentDocRow.at(0).shallow().find('#assessmentShowCheckbox0')
    expect(checkBoxField.length).toEqual(1)
  })
  it('show date field', () => {
    let approvedDateField = showAssessmentDocRow.at(0).shallow().find('#assessmentShowApprovedDate0')
    expect(approvedDateField.text()).toEqual('01/21/1978')
  })
  it('show date field', () => {
    let submittedDateField = showAssessmentDocRow.at(0).shallow().find('#assessmentShowSubmittedDate0')
    expect(submittedDateField.text()).toEqual('01/21/1969')
  })
})
