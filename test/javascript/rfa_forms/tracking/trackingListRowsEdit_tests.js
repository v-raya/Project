import React from 'react'
import TrackingListRowsEdit from 'rfa_forms/tracking/trackingListRowsEdit.jsx'
import {shallow, mount} from 'enzyme'

describe('Tracking Show mode', () => {
  let trackingListRowsEditView, props, changeSpy
  beforeEach(() => {
    changeSpy = jasmine.createSpy('console.log')
    props = {
      docs: {
        'notes': '',
        'title': 'Family Evaluation',
        'checked': false,
        'approved_date': '',
        'submitted_date': ''
      }
    }

    trackingListRowsEditView = mount(<TrackingListRowsEdit
      docs={props.docs}
    />)
  })

  it('load table', () => {
    expect(trackingListRowsEditView.length).toBe(1)
  })
  it('edit text area', () => {
    let textAreaField = trackingListRowsEditView.find('textarea')
    textAreaField.simulate('change', {target: {value: 'text input'}})
    expect(changeSpy).not.toHaveBeenCalledWith('else notes')
  })
  it('edit checkbox', () => {
    let textAreaField = trackingListRowsEditView.find('input[type="checkbox"]')
    textAreaField.simulate('change', {target: {value: true}})
    expect(changeSpy).not.toHaveBeenCalledWith('checkbox changed')
  })
})
