import React from 'react'
import TrackingTable from 'rfa_forms/tracking/trackingTable.jsx'
import FamilyDocRow from 'rfa_forms/tracking/tableRows/familyDocRow'
import {shallow, mount} from 'enzyme'

describe('Tracking Table test', () => {
  let trackingTableView, rowsComponent, CardHeader, changeSpy, trackingDocuments
  beforeEach(() => {
    changeSpy = jasmine.createSpy('handleChange')
    trackingDocuments = {
      items: [ {
        'notes': 'testing',
        'title': 'Family Evaluation',
        'checked': false,
        'received_date': '1978-01-21'

      }]
    }
    CardHeader = 'RFA Tacking List'
    trackingTableView = mount(<TrackingTable
      colHeaders={['Family Documents', '', 'Received', 'Notes']}
      rowsComponent={
        <FamilyDocRow
          editMode
          handleChange={changeSpy}
          trackingDocuments={trackingDocuments} />
      } />)
  })

  it('Table load', () => {
    expect(trackingTableView.length).toBe(1)
  })
  it('row components', () => {
    const tableBody = trackingTableView.find('tbody')
    expect(tableBody.props().children.props.trackingDocuments).toEqual(trackingDocuments)
  })
})
