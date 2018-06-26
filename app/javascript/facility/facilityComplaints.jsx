import React from 'react'
import PropTypes from 'prop-types'
import ApiErrorMessages from 'components/common/errors/apiErrorMessages'
import Spinner from 'facility/common/spinner'

export default class FacilityComplaints extends React.Component {
  componentDidMount () {
    const params = {
      'id': this.props.match.params.facility_id
    }
    this.props.facilityComplaintsApiCall(params)
  }

  render () {
    const {complaints, errors, isFetching} = this.props
    return (
      <div className='facility-children'>
        <div className='facility-children-block col-xs-12 col-sm-12 col-md-12 col-lg-12'>
          <div className='children-title'> <h3>Complaint History </h3> </div>
          <ApiErrorMessages errors={errors.issue_details}/>

          {isFetching
            ? <Spinner/>
            : <table id='facility-complaints-table' className='table'>
              <thead>
                <tr>
                  <th> ID </th>
                  <th> COMPLAINT DATE</th>
                  <th> ASSIGNED WORKER </th>
                  <th> CONTROL NUMBER </th>
                  <th> PRIORITY </th>
                  <th> STATUS </th>
                  <th> APPROVAL DATE </th>
                </tr>
              </thead>
              <tbody >
                {complaints.map((complaint) => {
                  return (
                    <tr key={complaint.id} >
                      <td data-label='id'> {complaint.id} </td>
                      <td data-label='complaint date'> {complaint.complaint_date} </td>
                      <td data-label='assigned worker'> {complaint.assigned_worker} </td>
                      <td data-label='control number' > {complaint.control_number} </td>
                      <td data-label='priority level'> {complaint.priority_level} </td>
                      <td data-label='status'> {complaint.status} </td>
                      <td data-label='approval date'> {complaint.approval_date} </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          }
        </div>
      </div>
    )
  }
}

FacilityComplaints.propTypes = {
  complaints: PropTypes.array,
  errors: PropTypes.object,
  match: PropTypes.object
}

FacilityComplaints.defaultProps = {
  complaints: [],
  match: {
    params: {
      id: ''
    }
  },
  errors: {
    issue_details: undefined
  }
}
