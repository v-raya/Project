import React from 'react'
import TrackingTable from 'rfa_forms/tracking/trackingTable.jsx'
import {shallow, mount} from 'enzyme'

describe('Tracking Table test', () => {
  let trackingTableView, props
  beforeEach(() => {
    props = {
      CardHeader: 'RFA Tacking List',
      editMode: true,
      trackingDocuments: [
        {
          'notes': '',
          'title': 'RFA Application (RFA 01A)',
          'checked': false,
          'received_date': ''
        }, {
          'notes': '',
          'title': 'Verification of Income',
          'checked': false,
          'received_date': ''
        }, {
          'notes': '',
          'title': 'Disclosure of Expenses',
          'checked': false,
          'received_date': ''
        }, {
          'notes': '',
          'title': 'Verification of Property',
          'checked': false,
          'received_date': ''
        }, {
          'notes': '',
          'title': 'Home Environment Checklist (RFA-03)',
          'checked': false,
          'received_date': ''
        }, {
          'notes': '',
          'title': 'Reference Letter #1',
          'checked': false,
          'received_date': ''
        }, {
          'notes': '',
          'title': 'Reference Letter #2',
          'checked': false,
          'received_date': ''
        }, {
          'notes': '',
          'title': 'Reference Letter #3 (if applicable)',
          'checked': false,
          'received_date': ''
        }
      ]
    }

    trackingTableView = shallow(<TrackingTable {...props}/>)
  })

  it('Table load', () => {
    expect(trackingTableView.length).toBe(1)
  })
  it('edit Mode inactive', () => {
    const tableBody = trackingTableView.find('tbody')
    expect(tableBody.props().children.length).toBe(8)
    expect(trackingTableView.find('input[type="text"]').length).toEqual(0)
  })
  it('edit Mode active', () => {
    trackingTableView.setProps({ editMode: true })
    trackingTableView = mount(<TrackingTable {...props}/>)
    expect(trackingTableView.find('input[type="text"]').length).toEqual(8)
  })
})
