import React from 'react'
import PropTypes from 'prop-types'
import Immutable from 'immutable'
import _ from 'lodash'
import TrackingTable from './trackingTable'

export default class TrackPeopleDocs extends React.Component {
  render () {
    const facilityDocuments = this.props.trackingDocuments
    return (
      <div>
        {/* Iterative array to be created */}
        {/*
          familyDocuments.map((list, index) => {
            return (
              <TrackingTable
                key={index}
                trackingDocuments={list}
              />
            )
          })
        */}
        <TrackingTable
          trackingDocuments={facilityDocuments}
          editMode={this.props.editMode}
        />
      </div>
    )
  }
}

TrackPeopleDocs.defaultProps = {
  trackingDocuments: []
}
