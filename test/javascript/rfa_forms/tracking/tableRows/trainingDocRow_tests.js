import React from 'react'
import TrainingDocRow from 'rfa_forms/tracking/tableRows/trainingDocRow'
import {shallow, mount} from 'enzyme'

describe('Test Tracking For Training Table', () => {
  let editTrainingDocRow, showTrainingDocRow, trainingDocuments, changeSpy
  beforeEach(() => {
    changeSpy = jasmine.createSpy('handleChange')
    trainingDocuments = {
      items: [ {
        'notes': 'testing',
        'title': 'Family Evaluation',
        'checked': false,
        'expiration_date': '1978-01-21'
      }]
    }

    editTrainingDocRow = shallow(<TrainingDocRow
      peopleIndex={0}
      trainingDocuments={trainingDocuments}
      editMode
      handleChange={changeSpy}
    />)
    showTrainingDocRow = shallow(<TrainingDocRow
      peopleIndex={0}
      trainingDocuments={trainingDocuments}
      editMode={false}
      handleChange={changeSpy}
    />)
  })

  it('loads the row ', () => {
    expect(editTrainingDocRow.length).toBe(1)
  })
  it('edit text area', () => {
    let textAreaField = editTrainingDocRow.at(0).shallow().find('#training0EditText0')
    textAreaField.simulate('change', {target: {value: 'text input'}})
    expect(changeSpy).toHaveBeenCalledWith('notes', 'text input', 0, 0)
  })
  it('edit checkbox', () => {
    let checkBoxField = editTrainingDocRow.at(0).shallow().find('#training0EditCheckbox0')
    checkBoxField.simulate('change', {target: {checked: true}})
    expect(changeSpy).toHaveBeenCalledWith('checked', true, 0, 0)
  })
  it('edit date field', () => {
    let textAreaField = editTrainingDocRow.at(0).shallow().find('#training0EditExpirationDate0')
    textAreaField.simulate('change', {target: {value: '01/20/1981'}})
    expect(changeSpy).toHaveBeenCalledWith('expiration_date', '1981-01-20', 0, 0)
  })

  it('loads the row ', () => {
    expect(showTrainingDocRow.length).toBe(1)
  })
  it('Show text area', () => {
    let textAreaField = showTrainingDocRow.at(0).shallow().find('#training0ShowText0')
    expect(textAreaField.text()).toEqual('testing')
  })
  it('Show checkbox', () => {
    let checkBoxField = showTrainingDocRow.at(0).shallow().find('#training0ShowCheckbox0')
    expect(checkBoxField.length).toEqual(1)
  })
  it('Show date field', () => {
    let submittedDateField = showTrainingDocRow.at(0).shallow().find('#training0ShowExpirationDate0')
    expect(submittedDateField.text()).toEqual('01/21/1978')
  })
})
