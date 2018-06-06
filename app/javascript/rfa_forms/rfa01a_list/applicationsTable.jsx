import React from 'react'
import ApplicationsListRow from './applicationsListRow'
import PropTypes from 'prop-types'
import Immutable from 'immutable'

export default class ApplicationsTable extends React.Component {
  render () {
    const applicationsList = Immutable.fromJS(this.props.applications)
    return (
      <div className='container'>
        <div className='rfa01a-list table-responsive'>
          <h3>Existing RFA Application</h3>
          <table className='table table-hover'>
            <thead>
              <tr>
                <th scope='col'>Facility ID</th>
                <th scope='col'>Facility / Family Name</th>
                <th scope='col'>Tracking Link</th>
                <th scope='col'>Phone</th>
                <th scope='col'>Address</th>
                <th scope='col'>City</th>
                <th scope='col'>Zip</th>
                <th scope='col'>Status</th>
                <th scope='col'>Received Date</th>
              </tr>
            </thead>
            <tbody>
              {
                applicationsList.map((application, index) => {
                  return (
                    <ApplicationsListRow
                      key={index}
                      familyName={application.get('resource_family_name')}
                      facilityId={application.get('id')}
                      trackingId={application.get('tracking_id')}
                      applicantsInfo={application.get('applicants')}
                      applicationStatus={application.get('status')}
                      applicationReceivedDate={application.get('receivedDate')}
                      applicationAddress={application.getIn(['residence', 'addresses'])}
                    />
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

ApplicationsTable.defaultProps = {
  applications: []
}
