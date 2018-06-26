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

    editTrainingDocRow = mount(<TrainingDocRow
      peopleIndex={0}
      trainingDocuments={trainingDocuments}
      editMode
      handleChange={changeSpy}
    />)
    showTrainingDocRow = mount(<TrainingDocRow
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
    let textAreaField = editTrainingDocRow.find('textarea')
    textAreaField.simulate('change', {target: {value: 'text input'}})
    expect(changeSpy).toHaveBeenCalledWith('notes', 'text input', 0, 0)
  })
  it('edit checkbox', () => {
    let checkBoxField = editTrainingDocRow.find('input[type="checkbox"]')
    checkBoxField.simulate('change', {target: {checked: true}})
    expect(changeSpy).toHaveBeenCalledWith('checked', true, 0, 0)
  })
  it('edit date field', () => {
    let textAreaField = editTrainingDocRow.find('#training0EditExpirationDate0').hostNodes()
    textAreaField.simulate('change', {target: {value: '01/20/1981'}})
    expect(changeSpy).toHaveBeenCalledWith('expiration_date', '1981-01-20', 0, 0)
  })

  it('loads the row ', () => {
    expect(showTrainingDocRow.length).toBe(1)
  })
  it('Show text area', () => {
    let textAreaField = showTrainingDocRow.find('#training0ShowText0').hostNodes()
    expect(textAreaField.text()).toEqual('testing')
  })
  it('Show checkbox', () => {
    let checkBoxField = showTrainingDocRow.find('input[type="checkbox"]')
    expect(checkBoxField.text()).toEqual('')
  })
  it('Show date field', () => {
    let submittedDateField = showTrainingDocRow.find('#training0ShowExpirationDate0').hostNodes()
    expect(submittedDateField.text()).toEqual('01/21/1978')
  })
})
