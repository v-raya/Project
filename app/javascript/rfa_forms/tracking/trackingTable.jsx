import React from 'react'
import PropTypes from 'prop-types'
import Immutable from 'immutable'

const TrackingTable = ({
  colHeaders,
  rowsComponent,
  CardHeader
}) => {
  return (

    <div className='rfa01a-list table-responsive'>
      <h3>{CardHeader}</h3>
      <table className='table table-hover'>
        <thead>
          <tr>
            {colHeaders.map((colName, index) => {
              return (<th scope='col' key={index}>{colName}</th>)
            })}
          </tr>
        </thead>
        <tbody>
          { rowsComponent }
        </tbody>
      </table>
    </div>

  )
}

TrackingTable.defaultProps = {
  colHeaders: [],
  CardHeader: '',
  editMode: false,
  rowsComponent: null
}

export default TrackingTable
