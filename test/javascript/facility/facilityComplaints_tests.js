import React from 'react'
import FacilityComplaints from '../../../app/javascript/facility/complaints.jsx'
import ShallowRenderer from 'react-test-renderer/shallow'

describe('Facility Complaints Section', function () {
  const props = {
    facilityData: {
      complaints: [
        {
          approval_date: '2010-03-05',
          assigned_worker: 'Jan Doe',
          complaint_date: '2010-02-03',
          control_number: '12-CR20161205112053',
          id: null,
          priority_level: 2,
          status: 'Pending'
        }
      ]
    }
  }
  const renderComplaints = new ShallowRenderer()
  const complaintsComp = renderComplaints.render(<FacilityComplaints {...props} />)
  const resultComp = complaintsComp
  it('Verify Facility Complaints Table', function () {
    expect(resultComp.props.className).toBe('facility-children col-xs-12 col-sm-12 col-md-12 col-lg-12')
  })
})
