import React from 'react'
import PropTypes from 'prop-types'
import ApiErrorMessages from 'components/common/errors/apiErrorMessages'

export default class FacilityChildren extends React.Component {
  componentDidMount () {
    const params = {
      'id': this.props.match.params.facility_id
    }
    this.props.facilityChildrenApiCall(params)
  }
  render () {
    const {children, errors, isFetching} = this.props
    return (
      <div className='facility-children col-xs-12 col-sm-12 col-md-12 col-lg-12'>
        <div className='facility-children-block'>
          <div className='children-title'> <h3>Children currently placed in facility</h3> </div>
          <ApiErrorMessages errors={errors.issue_details}/>
          {isFetching ? <div className="loading-icon"></div>
            : <table id='facility-children-table' className='table'>
              <thead>
                <tr>
                  <th> CLIENT ID </th>
                  <th> FIRST NAME </th>
                  <th> LAST NAME </th>
                  <th> SEX </th>
                  <th> AGE </th>
                  <th> DATE OF BIRTH </th>
                  <th> DATE OF PLACEMENT </th>
                  <th> CHILD'S SOCIAL WORKER </th>
                  <th> COUNTY OF ORIGIN </th>
                </tr>
              </thead>
              <tbody >
                {children.map((child) => {
                  return (
                    <tr key={child.id} >
                      <td data-label='id'> {child.display_client_id} </td>
                      <td data-label='first name'> {child.first_name} </td>
                      <td data-label='last name'> {child.last_name} </td>
                      <td data-label='sex'> {child.gender} </td>
                      <td data-label='age'> {child.age} </td>
                      <td data-label='date of birth'> {child.date_of_birth} </td>
                      <td data-label='date of placement'> {child.date_of_placement} </td>
                      <td data-label='assigned worker'> {child.assigned_worker} </td>
                      <td data-label='county of origin'> {child.county_of_origin} </td>
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

FacilityChildren.propTypes = {
  children: PropTypes.array,
  errors: PropTypes.object,
  match: PropTypes.object
}

FacilityChildren.defaultProps = {
  children: [],
  match: {
    params: {
      id: ''
    }
  },
  errors: {
    issue_details: undefined
  }
}
