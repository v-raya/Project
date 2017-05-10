import React from 'react'

const title = 'Children currently placed in facility'

export default class Children extends React.Component {
  render () {
    let facilityChildren = this.props.facilityData
    let children = facilityChildren.children
    let facilityChildrenTable = []

    if (children) {
      facilityChildrenTable = children.map((child) => {
        return (
          <tr key={child.id} >
            <td> {child.id} </td>
            <td> {child.first_name} </td>
            <td> {child.last_name} </td>
            <td> {child.sex} </td>
            <td> {child.age} </td>
            <td> {child.date_of_birth} </td>
            <td> {child.date_of_placement} </td>
            <td> {child.assigned_worker} </td>
            <td> {child.county_of_origin} </td>
          </tr>
        )
      })
    }

    return (
      <div className='facility-children col-xs-12 col-sm-12 col-md-12 col-lg-12'>
        <div className='facility-children-block col-xs-12 col-sm-12 col-md-12 col-lg-12'>
          <div className='children-title'> <h3> {title} </h3> </div>
          <table className='table'>
            <thead>
              <tr>
                <th> ID </th>
                <th> FIRST NAME </th>
                <th> LAST NAME </th>
                <th> SEX </th>
                <th> AGE </th>
                <th> DATE OF BIRTH </th>
                <th> DATE OF PLACEMENT </th>
                <th> ASSIGNED WORKER </th>
                <th> COUNTY OF ORIGIN </th>
              </tr>
            </thead>
            <tbody >
              {facilityChildrenTable}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
