import React from 'react'
import FacilityComplaints from '../../../app/javascript/facility/complaints.jsx'
var TestUtils = require('react-dom/lib/ReactTestUtils')

describe('Facility Complaints Section', function () {
  const props = {
    facilityData : {
      approval_date : "2010-03-05",
      assigned_worker : "Jan Doe",
      complaint_date : "2010-02-03",
      control_number : "12-CR20161205112053",
      id : null,
      priority_level : 2,
      status : "Pending"
    }
  }
  const renderComplaints = TestUtils.createRenderer()
  const complaintsComp = renderComplaints.render(<FacilityComplaints {...props}/>)
  const result_Comp = complaintsComp
  it('Verify Facility Complaints Table', function () {
    expect(result_Comp.props.className).toBe('facility-children col-xs-12 col-sm-12 col-md-12 col-lg-12')
  })
})
